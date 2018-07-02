import web3 from './web3';
import Coin from './build/CollageCoin.json';

export default (address) => {
    return new web3.eth.Contract(JSON.parse(Coin.interface),
    address
    )
};