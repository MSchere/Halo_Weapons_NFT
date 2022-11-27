<p align="center">
  <img src="https://user-images.githubusercontent.com/38076357/180837580-4cccf71a-43b6-4c78-90b1-9ce5e4dec680.png">
</p>

# Halo Weapons NFT
_ERC-721 NFTs with embedded 3D models built with Hardhat and Angular_

You can now test it [here!](https://mschere.github.io/Halo_Weapons_NFT_frontend)

Contract address (Avalanche Fuji testnet):
* HaloNFT_721: 0xD6f7f4D1D1B987811785ad53C53e00ad62789E7a

## Instructions for local deployment:

### Repository and submodules cloning:
```
git clone https://github.com/MSchere/Halo_Weapons_NFT
cd Halo_Weapons_NFT
git submodule init
git submodule update
```

### Node dependencies installation :
```
npm install
cd Halo_Weapons_NFT_frontend && npm install
```
### Launching the frontend:
```
cd Halo_Weapons_NFT_frontend && ng serve
```
If you want to use the hardhat local network instead of Rinkeby:
### Deployment in local network:
(In root directory)
```
npx hardhat node
npm run deploy
```
### Import the generated Hardhat accounts into Metamask:
* 1. Copy any of the private keys from the Hardhat console
* 2. Open Metamask -> Import Account -> paste the key
* 3. Configure the local Hardhat netowrk by going into Metamask --> Configuration --> Networks
* Network name: Hardhat
* RPC address: http://localhost:8545
* Chain ID: 1337
* Currency: ETH
