<p align="center">
  <img src="https://user-images.githubusercontent.com/38076357/180837580-4cccf71a-43b6-4c78-90b1-9ce5e4dec680.png">
</p>

# Halo Weapons NFT
_ERC-721 NFTs with embedded 3D models built with Hardhat and Angular_

Contract addresses (Rinkeby testnet):


* ERC-721: 0x90F57Ad63A9A5D5E9cA9E58f5881904E75756677
* ERC-1155: 0x6d679Cc3137ec305374eCDa91079ed1B723C138f

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
