require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const HTTP_URL = process.env.HTTP_URL;
const MUMBAI_HTTP_URL = process.env.MUMBAI_HTTP_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const POLYGONSCAN_KEY = process.env.POLYGONSCAN_KEY;

module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "goerli",
  networks: {
    goerli: {
      url: HTTP_URL,
      accounts: [PRIVATE_KEY],
    },
    mumbai: {
      url: MUMBAI_HTTP_URL,
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      polygonMumbai: POLYGONSCAN_KEY,
    },
  },
};