require("@nomicfoundation/hardhat-toolbox");
require('@nomicfoundation/hardhat-chai-matchers')
require('@nomiclabs/hardhat-ethers')
require('hardhat-deploy')
require("@nomiclabs/hardhat-solhint");
require('dotenv').config()


const MAINNET_RPC_URL = process.env.MAINNET_RPC_URL || process.env.ALCHEMY_MAINNET_RPC_URL || "https://eth-mainnet.alchemyapi.io/v2/your-api-key"
const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL || "https://eth-sepolia.g.alchemy.com/v2/YOUR-API-KEY"
const POLYGON_MUMBAI_RPC_URL = process.env.POLYGON_MUMBAI_RPC_URL || "https://polygon-mainnet.alchemyapi.io/v2/your-api-key"
const POLYGON_MAINNET_RPC_URL = process.env.POLYGON_MAINNET_RPC_URL || "https://polygon-mainnet.g.alchemy.com/v2/your-api-key"
const PRIVATE_KEY = process.env.PRIVATE_KEY || "0x"
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "Your etherscan API key"
const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY || "Your polygonscan API key"




/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
        accounts: {
          mnemonic: process.env.SEED_PHRASE,
        },
        chainId: 1337
      },
      localhost: {
          chainId: 31337,
      },
      sepolia: {
          url: SEPOLIA_RPC_URL,
          accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
          saveDeployments: true,
          chainId: 11155111,
      },
      mainnet: {
          url: MAINNET_RPC_URL,
          accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
          saveDeployments: true,
          chainId: 1,
      },
      mumbai: {
          url: POLYGON_MUMBAI_RPC_URL,
          accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
          saveDeployments: true,
          chainId: 80001,
      },
      polygon: {
        url: POLYGON_MAINNET_RPC_URL,
        accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
        saveDeployments: true,
        chainId: 137,
    },
  },
  etherscan: {
      apiKey: {
          sepolia: ETHERSCAN_API_KEY,
          polygonMumbai: POLYGONSCAN_API_KEY,
          mainnet: ETHERSCAN_API_KEY,
          polygon: POLYGONSCAN_API_KEY
      },
  },
  namedAccounts: {
      deployer: {
          default: 0,
          1: 0,
      },
      player: {
          default: 1,
      },
  },
  solidity: {
      compilers: [
          {
              version: "0.8.7",
          },
      ],
  },
  mocha: {
      timeout: 500000, 
  },
};

