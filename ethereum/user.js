import web3 from './web3';
import CollageCoin from './build/CollageCoin.json';

export default (address) => {
  return new web3.eth.Contract (
      JSON.parse(CollageCoin.interface),
      address
  );
};
