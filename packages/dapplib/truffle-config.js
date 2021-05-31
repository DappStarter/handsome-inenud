require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half arena october traffic walnut raw remember column grace inhale flip genre'; 
let testAccounts = [
"0xf8f66afd6682620318a8737200b7e0a0ab3ca9e3c3d8e74e91ab4c3ade9b5d63",
"0x3107dd33849c8133e76db1a0c5e9748cab2fc993c0987c503530478778390238",
"0x232af2414bfed3db44fce6c7f42349b8ad6597791258d6fc1670e21bcfed7fa6",
"0x43fb1c3e12f8d21a06a34f2d55d1c0a08d324f02cb73d54810273087779fd617",
"0xd879d29cb91c3668898068c8fad068ef884aeb243d1fdb9f9e713790c3d2c098",
"0x9c5428b43328ed376cd99b7d4677195383449385ed14c1bcc33552a84c8631a3",
"0x067b436c09023d4905443708f4080961b721d271e7f6c537e9bb68da001b0867",
"0x6c20d48ad655cd51887bdfc4ef2afe9fb0d8eb79da95396ef5e39f3cf7dbf02a",
"0xe8079c9c602c58f96259d9a64b22ddab208789ed483788f0548d8fb6d6338ced",
"0xdfad83d96648d914c7e476d2955454ad15014cc36cc873207f15e0eb95217218"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

