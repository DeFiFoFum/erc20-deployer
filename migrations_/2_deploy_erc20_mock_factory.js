const ERC20MockFactory = artifacts.require("ERC20MockFactory");
const ERC20Mock = artifacts.require("ERC20Mock");

module.exports = async function (deployer, network, accounts) {
  await deployer.deploy(ERC20MockFactory);
  const admin = accounts[0];
  const tokenName = "Mock";
  const tokenSymbol = "MOCK";
  const amount = '1000000000000000000'
  const decimals = 18;
  // const erc20MockFactory = await ERC20MockFactory.at(ERC20MockFactory.address);
  // await erc20MockFactory.createERC20Mock(tokenName, tokenSymbol, amount)
  await deployer.deploy(ERC20Mock, tokenName, tokenSymbol, amount, decimals, admin);

};
