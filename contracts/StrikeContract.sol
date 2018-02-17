pragma solidity ^0.4.17;
contract StrikeContract {
  uint8 votetotal;
  int8 vote;
  function StrikeContract() {
    vote = 0;
    votetotal = 0;
  }
  function getTotal () public constant returns(uint8) {
    return votetotal;
  }
  function getVote () public constant returns(int8) {
    return vote;
  }
  function increaseVote () public returns(int8) {
    if (vote > 127) revert();
    vote += 1;
    votetotal += 1;
    return vote;
  }
  function decreaseVote () public returns(int8) {
    if (vote < -127) revert();
    vote -= 1;
    return vote;
  }
}