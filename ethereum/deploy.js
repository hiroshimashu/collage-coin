const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CoinFactory.json');

const provider = new HDWalletProvider(
    'imitate into tomato spy major tent truly left donor cement together race',
    'https://rinkeby.infura.io/mW8UWhdXSAXAcWQRf3ho'
);

const web3 = new Web3(provider);


const deploy = async () => {
    const accouts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account', accouts[0]);
    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({data: compiledFactory.bytecode})
        .send({ gas: '1000000', from: accouts[0] });

    await result.methods.joinCollageCoin("いまます").send({
        from: accouts[0],
        gas: '1000000'
    });

    await result.methods.joinCollageCoin("しょーじ").send({
        from: accouts[0],
        gas: '1000000'
    });

    await result.methods.joinCollageCoin("きむら").send({
        from: accouts[0],
        gas: '1000000'
    });

    await result.methods.joinCollageCoin("わだ").send({
        from: accouts[0],
        gas: '1000000'
    });

    await result.methods.joinCollageCoin("さいき").send({
        from: accouts[0],
        gas: '1000000'
    });

    await result.methods.joinCollageCoin("こじま").send({
        from: accouts[0],
        gas: '1000000'
    });






    console.log('Contract deployed to', result.options.address);
};

deploy();