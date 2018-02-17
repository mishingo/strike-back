var StrikeContract = artifacts.require("./StrikeContract.sol");

module.exports = function(deployer, helper, accounts) {
  return deployer.deploy(StrikeContract)
}