const ERC20Token = artifacts.require("ERC20Token");

// constructor(string name, string symbol) ERC20("ApeSwapFinance - Ola Farm", "OLA-FARM") {
module.exports = async function (deployer) {
  const tokenName = "";
  const tokenSymbol = "";
  const amount = '1000000000000000000'
  await deployer.deploy(ERC20Token, tokenName, tokenSymbol, amount);
};
