const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

const { FEE, VRF_COORDINATOR, LINK_TOKEN, KEY_HASH } = require("../constants");

// const { 
//   DAO_CONTRACT_ADDRESS,
//   TOKEN_CONTRACT_ADDRESS, 
//   NFT_CONTRACT_ADDRESS,
//   WHITELIST_CONTRACT_ADDRESS
// } = require("../constants");

// async function main() {
//   // Address of the Crypto Devs NFT contract that you deployed in the previous module
//   const cryptoDevsNFTContract = NFT_CONTRACT_ADDRESS;

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

// async function main() {
//   // Deploy the CryptoDevNFTMarketplace contract first
//   const CryptoDevNFTMarketplace = await ethers.getContractFactory(
//     "CryptoDevNFTMarketplace"
//   );
//   const cryptoDevNFTMarketplace = await CryptoDevNFTMarketplace.deploy();
//   await cryptoDevNFTMarketplace.deployed();

//   console.log("CryptoDevNFTMarketplace deployed to: ", cryptoDevNFTMarketplace.address);

//   // Now deploy the CryptoDevsDAO contract
//   const CryptoDevsDAO = await ethers.getContractFactory("CryptoDevsDAO");
//   const cryptoDevsDAO = await CryptoDevsDAO.deploy(
//     cryptoDevNFTMarketplace.address,
//     NFT_CONTRACT_ADDRESS,
//     {
//       // This assumes your metamask account has at least 1 ETH in its account
//       // Change this value as you want
//       value: ethers.utils.parseEther("0.2"),
//     }
//   );
//   await cryptoDevsDAO.deployed();

//   console.log("CryptoDevsDAO deployed to: ", cryptoDevsDAO.address);

//   // CryptoDevNFTMarketplace deployed to:  0x934BcA5a436B52E2f1A59669aF926c370Babd6FF
//   // CryptoDevsDAO deployed to:  0x1aEf09c2032b52631147F5Cf544F52714798e265
// }

// async function main() {
//   const cryptoDevTokenAddress = TOKEN_CONTRACT_ADDRESS;
//   /*
//   A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
//   so exchangeContract here is a factory for instances of our Exchange contract.
//   */
//   const exchangeContract = await ethers.getContractFactory("Exchange");

//   // here we deploy the contract
//   const deployedExchangeContract = await exchangeContract.deploy(
//     cryptoDevTokenAddress
//   );
//   await deployedExchangeContract.deployed();

//   // print the address of the deployed contract
//   console.log("Exchange Contract Address:", deployedExchangeContract.address);
//   //Exchange Contract Address: 0xD6691bca33a7cfCb595309CBdb150396CC8159c9
// }

// async function main() {
//   const verifyContract = await ethers.getContractFactory("Verify");
//   // deploy the contract
//   const deployedVerifyContract = await verifyContract.deploy();
//   await deployedVerifyContract.deployed();
//   // print the address of the deployed contract
//   console.log("Verify Contract Address:", deployedVerifyContract.address);
//   // Verify Contract Address: 0xB5f4b3f2308a1E9d899319a3b230B94362970e56

//   console.log("Sleeping.....");
//   // Wait for etherscan to notice that the contract has been deployed
//   await sleep(40000);

//   // Verify the contract after deploying
//   await hre.run("verify:verify", {
//     address: deployedVerifyContract.address,
//     constructorArguments: [],
//   });
// }

// async function main() {
//   // URL from where we can extract the metadata for a LW3Punks
//   const metadataURL = "ipfs://Qmbygo38DWF1V8GttM1zy89KzyZTPU2FLUzQtiDvB7q6i5/";
//   /*
//   A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
//   so lw3PunksContract here is a factory for instances of our LW3Punks contract.
//   */
//   const lw3PunksContract = await ethers.getContractFactory("LW3Punks");

//   // deploy the contract
//   const deployedLW3PunksContract = await lw3PunksContract.deploy(metadataURL);

//   await deployedLW3PunksContract.deployed();

//   // print the address of the deployed contract
//   console.log("LW3Punks Contract Address:", deployedLW3PunksContract.address);
//   // ipfs://QmQBHarz2WFczTjz5GnhjHrbUPDnB48W5BM2v2h6HbE1rZ
//   // LW3Punks Contract Address: 0x9469e29622E7784e42a4B08e6e04AaCd65b2942b
//   // ipfs://QmQBHarz2WFczTjz5GnhjHrbUPDnB48W5BM2v2h6HbE1rZ/
//   // LW3Punks Contract Address: 0xF870192B285E33eA63e66a8959f5443Ea0188887
//   // ipfs://Qmbygo38DWF1V8GttM1zy89KzyZTPU2FLUzQtiDvB7q6i5/
//   // LW3Punks Contract Address: 0x8e120fbd1665C9D85917229806b5261e8f5fF59B
// }


async function main() {
  /*
 A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
 so randomWinnerGame here is a factory for instances of our RandomWinnerGame contract.
 */
  const randomWinnerGame = await ethers.getContractFactory("RandomWinnerGame");
  // deploy the contract
  const deployedRandomWinnerGameContract = await randomWinnerGame.deploy(
    VRF_COORDINATOR,
    LINK_TOKEN,
    KEY_HASH,
    FEE
  );

  await deployedRandomWinnerGameContract.deployed();

  // print the address of the deployed contract
  console.log(
    "Verify Contract Address:",
    deployedRandomWinnerGameContract.address
  );
  // Verify Contract Address: 0xBd0da98fD15973CD17c530fE8D7807Eb85EC38a3

  console.log("Sleeping.....");
  // Wait for etherscan to notice that the contract has been deployed
  await sleep(30000);

  // Verify the contract after deploying
  await hre.run("verify:verify", {
    address: deployedRandomWinnerGameContract.address,
    constructorArguments: [VRF_COORDINATOR, LINK_TOKEN, KEY_HASH, FEE],
  });
  // The contract 0xBd0da98fD15973CD17c530fE8D7807Eb85EC38a3 has already been verified
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Call the main function and catch if there is any error
main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});