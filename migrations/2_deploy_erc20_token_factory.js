const ERC20TokenFactory = artifacts.require("ERC20TokenFactory");
const ERC20Token = artifacts.require("ERC20Token");

module.exports = async function (deployer, network, accounts) {
  await deployer.deploy(ERC20TokenFactory);
  const admin = accounts[0];
  const tokenName = "";
  const tokenSymbol = "";
  const amount = '1000000000000000000'
  const decimals = 18;
  // const erc20TokenFactory = await ERC20TokenFactory.at(ERC20TokenFactory.address);
  // await erc20TokenFactory.createERC20Token(tokenName, tokenSymbol, amount);
  // NOTE: Verify deployments made by the factory
  await deployer.deploy(ERC20Token, tokenName, tokenSymbol, amount, decimals, admin);
};
