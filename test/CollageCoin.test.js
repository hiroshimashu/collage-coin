const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const provider = ganache.provider()
const web3 = new Web3(provider);

const compiledFactory = require('../ethereum/build/CoinFactory.json');
const compiledCoin = require('../ethereum/build/CollageCoin.json');

let accounts;
let factory;
let coinAddress;
let coinAddress2;
let coin;
let coin2;


beforeEach(async () => {
    accounts = await web3.eth.getAccounts();

    factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({ data: compiledFactory.bytecode })
        .send({ from: accounts[0], gas: '1000000'});

    factory.setProvider(provider);

    await factory.methods.joinCollageCoin("hiroshi").send({
        from: accounts[0],
        gas: '1000000'
    });

    await factory.methods.joinCollageCoin("ショージ").send({
        from: accounts[0],
        gas: '1000000'
    });


    [coinAddress] = await factory.methods.getParticipants().call();
    coinAddress2 = await factory.methods.getParticipants().call()[1];

    coin = await new web3.eth.Contract(
        JSON.parse(compiledCoin.interface),
        coinAddress
    );

    coin2 = await new web3.eth.Contract(
        JSON.parse(compiledCoin.interface),
        coinAddress2
    );
});

describe('Participants', () => {
   it('deploys a factory and a campaign', () => {
       assert.ok(factory.options.address);
       assert.ok(coin.options.address);
   });

    it('marks caller as the coin manager', async () => {
        const manager = await coin.methods.manager().call();
        assert.equal(accounts[0], manager);
    })

    it('get number of coin', async () => {
        const numBronze = await coin.methods.GetNumBronzeCoin().call();
        assert.equal(numBronze, 0);
    })

    it('get name', async () => {
        const name = await coin.methods.name().call();
        assert.equal(name, "hiroshi");
    })

    it('increase the num of coin', async () => {
        await coin.methods.SendBronzeCoin().send({
            from: accounts[1]
        })

        const numBronze = await coin.methods.GetNumBronzeCoin().call();
        assert.equal(numBronze, 1);
    })
});


