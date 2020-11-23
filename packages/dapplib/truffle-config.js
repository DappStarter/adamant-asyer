require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture cart forget security trap birth magic hundred grace muscle army gather'; 
let testAccounts = [
"0xbf305820e89d97aed7197ec675459b3676ccbd1d163cb6b1edeeed00b9bb44c8",
"0x992f9704818871e2e7280e4ea8650361965f3d9f0910cdb37d352e82c0a3656b",
"0x16a54a1a3fd42de50fe659387452b3e2335333e1317f8ef9e78a3511bc3c71ef",
"0x2be82e37bec3d1d31aeb7db5b3d0eec2f99f18e287aa6c4360d7433b556d5d9a",
"0x0c1010180f108862cb0fd8a5656636d5d6e174f967c1d3bc8aa2efd66b876490",
"0x1cb8e414575e373a326736accd4dae688cb3bb9e3dd202b82b3a02395b12399f",
"0x5b2e073548f2af98a11717c67c0a329de23694d6e6731c6c6f6aa30cd4cc81f7",
"0x68ed9fe14cf7079595b9578f26192affab8136a9c449298edfccfcdcb061bc30",
"0xb47d9058e6ee7e7a71f91f8949057e6a68793bfc99a122a43a3f8c894d14bd19",
"0x085ae2c36ade7d2d24c9f94b6dc44ce3170a3c9b2e69787465e1264434834c82"
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
            version: '^0.5.11'
        }
    }
};
