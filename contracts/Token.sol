pragma solidity ^0.4.24;

import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/MintableToken.sol";
import "../node_modules/openzeppelin-solidity/contracts/math/SafeMath.sol";


contract Token is MintableToken {
  using SafeMath for uint256;

  string public constant name = "Token";
  string public constant symbol = "TKN";
  uint8 public constant decimals = 18;

  bool public isCrowdsaleFinished;
 
  event CrowdsaleFinishedEvent(uint256 timestamp);


  function toggleCrowdsaleFinished()
    public
    onlyOwner
  {
    isCrowdsaleFinished = !isCrowdsaleFinished;
    emit CrowdsaleFinishedEvent(block.timestamp);
  }
}