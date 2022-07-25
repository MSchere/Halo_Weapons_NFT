// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";


contract HaloNFT_1155 is ERC1155, ERC1155Burnable, Ownable {

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    bool hasAirdrop = true;
    constructor()
        ERC1155("bafybeiftwmde7cqptm5lgzmonjkwxripziww45gis6fl6u5jt6zqqeufi4/{id}")
    {
    if (hasAirdrop) {
            airdrop();
        }
    }

    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }

    function mint(address account, uint256 id, uint256 amount, bytes memory data)
        public
        onlyOwner
    {
        id = _tokenIds.current();
        _mint(account, id, amount, data);
        _tokenIds.increment();
    }

    function mintBatch(address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
        public
        onlyOwner
    {
        _mintBatch(to, ids, amounts, data);
    }
    
    function airdrop () public onlyOwner {
        for (uint256 i = 0; i <= 11; i++) {
            mint(msg.sender,i , 1, "");
        }
    }
}