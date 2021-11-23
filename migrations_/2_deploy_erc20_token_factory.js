const ERC20TokenFactory = artifacts.require("ERC20TokenFactory");

module.exports = async function (deployer) {
  await deployer.deploy(ERC20TokenFactory);
  const erc20TokenFactory = await ERC20TokenFactory.at(ERC20TokenFactory.address);
  const tokenName = "";
  const tokenSymbol = "";
  const amount = '1000000000000000000'
  await erc20TokenFactory.createERC20Token(tokenName, tokenSymbol, amount)
};
