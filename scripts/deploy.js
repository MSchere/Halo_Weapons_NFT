// This is a script for deploying your contracts. You can adapt it to deploy
// yours, or create new ones.
async function main() {
    // This is just a convenience check
    if (network.name === "hardhat") {
      console.warn(
        "You are trying to deploy a contract to the Hardhat Network, which" +
          "gets automatically created and destroyed every time. Use the Hardhat" +
          " option '--network localhost'"
      );
    }
  
    // ethers is available in the global scope
    const [deployer] = await ethers.getSigners();
    console.log(
      "Deploying the contracts with the account:",
      await deployer.getAddress()
    );
  
    console.log("Account balance:", (await deployer.getBalance()).toString());
  

    const HaloNFT = await ethers.getContractFactory("HaloNFT_721");
    const haloNFT = await HaloNFT.deploy();
  
    await haloNFT.deployed();
  
    console.log("HaloNFT address", haloNFT.address)
    // We also save the contract's artifacts and address in the frontend directory
    saveFrontendFiles(haloNFT);
  }
  
  function saveFrontendFiles(haloNFT) {
    const fs = require("fs");
    const contractsDir = __dirname + "/../Halo_Weapons_NFT_frontend/src/assets/contracts";
  
    if (!fs.existsSync(contractsDir)) {
      fs.mkdirSync(contractsDir);
    }
  
    fs.writeFileSync(
        contractsDir + "/HaloNFT-address.json",
        JSON.stringify({ address: haloNFT.address, address_rinkeby: "0x90F57Ad63A9A5D5E9cA9E58f5881904E75756677" }, undefined, 2)
    );
  
    const HaloNFTArtifact = artifacts.readArtifactSync("HaloNFT_721");

    fs.writeFileSync(
        contractsDir + "/HaloNFT.json",
        JSON.stringify(HaloNFTArtifact, null, 2)
    );
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });