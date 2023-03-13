const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { CRYPTO_DEVS_NFT_CONTRACT_ADDRESS, NFT_CONTRACT_ADDRESS} = require("../constants");

// async function main() {
//   // Address of the Crypto Devs NFT contract that you deployed in the previous module
//   const cryptoDevsNFTContract = CRYPTO_DEVS_NFT_CONTRACT_ADDRESS;

//   /*
//     A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
//     so cryptoDevsTokenContract here is a factory for instances of our CryptoDevToken contract.
//     */
//   const cryptoDevsTokenContract = await ethers.getContractFactory(
//     "CryptoDevToken"
//   );

//   // deploy the contract
//   const deployedCryptoDevsTokenContract = await cryptoDevsTokenContract.deploy(
//     cryptoDevsNFTContract
//   );

//   await deployedCryptoDevsTokenContract.deployed();
//   // print the address of the deployed contract
//   console.log(
//     "Crypto Devs Token Contract Address:",
//     deployedCryptoDevsTokenContract.address
//   );
//   // Crypto Devs Token Contract Address: 0x2Bb1817F8F494F3Bc75F0438A166532252946190
// }

async function main() {
  // Deploy the CryptoDevNFTMarketplace contract first
  const CryptoDevNFTMarketplace = await ethers.getContractFactory(
    "CryptoDevNFTMarketplace"
  );
  const cryptoDevNFTMarketplace = await CryptoDevNFTMarketplace.deploy();
  await cryptoDevNFTMarketplace.deployed();

  console.log("CryptoDevNFTMarketplace deployed to: ", cryptoDevNFTMarketplace.address);

  // Now deploy the CryptoDevsDAO contract
  const CryptoDevsDAO = await ethers.getContractFactory("CryptoDevsDAO");
  const cryptoDevsDAO = await CryptoDevsDAO.deploy(
    cryptoDevNFTMarketplace.address,
    NFT_CONTRACT_ADDRESS,
    {
      // This assumes your metamask account has at least 1 ETH in its account
      // Change this value as you want
      value: ethers.utils.parseEther("0.2"),
    }
  );
  await cryptoDevsDAO.deployed();

  console.log("CryptoDevsDAO deployed to: ", cryptoDevsDAO.address);

  // CryptoDevNFTMarketplace deployed to:  0x934BcA5a436B52E2f1A59669aF926c370Babd6FF
  // CryptoDevsDAO deployed to:  0x1aEf09c2032b52631147F5Cf544F52714798e265
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("error");
    console.error(error);
    process.exit(1);
  });