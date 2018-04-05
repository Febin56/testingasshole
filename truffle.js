const mnemonic = process.env.ethereum_mnemonic = "finish nothing ribbon today scout tobacco ivory staff quote wasp lecture spend";
const HDWalletProvider = require("truffle-hdwallet-provider");
require('babel-register');
require('babel-polyfill');
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 9545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: new HDWalletProvider(mnemonic, "https://ropsten.infura.io/EtNq2cv60m36VxoZxwpo"),
      network_id: 3,
      gas: 4700000
    }
  }
};