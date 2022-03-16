const FIB = artifacts.require('Fibo.sol');

module.exports = function(deployer, network, accounts){
    deployer.deploy(FIB);
}