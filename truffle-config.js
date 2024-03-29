/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * trufflesuite.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like @truffle/hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */

const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();

/**`
* Pass in an array of RPC urls to grab a random one on each run
* 
* @param {*} rpcUrlArray 
* @returns rpcUrl
*/
function getRandomRPC(rpcUrlArray) {
  // Using `| 0` here in place of Math.floor()
  const rpc = rpcUrlArray[(Math.random() * rpcUrlArray.length) | 0];
  console.log(`truffle-config::Using rpc ${rpc}`)
  return rpc
}

const MAINNET_DEPLOYER_KEY = process.env.MAINNET_DEPLOYER_KEY;
const TESTNET_DEPLOYER_KEY = process.env.TESTNET_DEPLOYER_KEY;

const BSC_RPC_URL = getRandomRPC([
  `https://bsc-dataseed1.binance.org`,
  `https://speedy-nodes-nyc.moralis.io/6d7bba80ba1df4099b8f83f2/bsc/mainnet`,
]);

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard BSC port (default: none)
      network_id: "*",       // Any network (default: none)
    },
    testnet: {
      provider: () => new HDWalletProvider(TESTNET_DEPLOYER_KEY, `https://data-seed-prebsc-1-s1.binance.org:8545/`),
      network_id: 97,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    bsc: {
      provider: () => new HDWalletProvider(MAINNET_DEPLOYER_KEY, BSC_RPC_URL),
      network_id: 56,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    polygon: {
      provider: () => new HDWalletProvider(MAINNET_DEPLOYER_KEY, 'https://polygon-rpc.com'),
      network_id: 137,
      confirmations: 2,
      timeoutBlocks: 200,
      gas: 6721975,
      gasPrice: 115 * 1e9,
      skipDryRun: true
    },
  },
  plugins: [
    'truffle-plugin-verify', // https://www.npmjs.com/package/truffle-plugin-verify
  ],
  api_keys: {
    // Add BSCSCAN_API_KEY in .env file to verify contracts deployed through truffle
    etherscan: process.env.BSCSCAN_API_KEY,
    polygonscan: process.env.POLYGONSCAN_API_KEY
  },
  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      //https://forum.openzeppelin.com/t/how-to-deploy-uniswapv2-on-ganache/3885
      version: "0.8.17",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 200
        },
      }
    },
  }
}