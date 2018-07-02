import Web3 from 'web3';

let web3;

const headers = [{name:'Content-Type', value: "application/json"}];


if (typeof window !== 'undefined' && window.web3 !== 'undefined') {
    //We are in the browser and metamask is running.
    web3 = new Web3(window.web3.currentProvider);
} else {
    // We are on the browser *OR* the user is not running metamask

web3 = new Web3(new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/mW8UWhdXSAXAcWQRf3ho',0,headers
    ));
}

export default web3;