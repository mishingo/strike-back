pragma solidity ^0.4.17;
contract StrikeContract {
    
  uint8 usertotal = 0;
  int8 vote = 0;
  mapping(address => bool[2]) public allvoters;

  //    Add user's address when the sign up
  function addAddress() public returns(bool success) {
      if (checkAddress()[0] == true) {
          return false;
      }
      allvoters[msg.sender] = [true, true];
      vote = vote + 1;
      usertotal = usertotal + 1;
      return true;  
  }
  
  //    Check if user has been added already
  function checkAddress() public view returns (bool [2]) {
        return allvoters[msg.sender];
  }
  
  //    Increment the vote when someone votes to go on strike
  function increaseVote () public returns(int8) {
    if (vote > 127) revert();
    if (checkAddress()[1] == true) {
        return vote;
    }
    allvoters[msg.sender] = [true, true];
    vote = vote + 1;
    return vote;
  }
  
  //    Decrease the vote when someone votes not to go on strike
  function decreaseVote () public returns(int8) {
    if (vote < -127) revert();
    // bool[] memory address_info = new bool[](2);
    // address_info[0] = checkAddress()[0];
    if (checkAddress()[1] == false) {
        return vote;
    }
    allvoters[msg.sender] = [true, false];
    vote = vote - 1;
    return vote;
  }
  
  //   Get total number of union members 
  function getTotal () public constant returns(uint8) {
    return usertotal;
  }
  
  //   Get total number of union members that have voted to join
  function getVote () public constant returns(int8) {
    return vote;
  }
}