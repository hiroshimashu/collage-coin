import web3 from './web3';
import CampaignFactory from './build/CoinFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x3c5a1c714a1A6D66D1E3b43895D42BE74962e8D4'
);

export default instance;