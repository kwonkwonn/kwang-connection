// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";


contract MyProfile is ERC721URIStorage,Ownable
{
    constructor() ERC721("AboutME" , "ABM"){}


    function mint(
        address _to,
        uint256 _tokenId,
        string calldata _uri)
        
        external onlyOwner{
            _mint(_to, _tokenId);
            _setTokenURI(_tokenId, _uri);
    }
}