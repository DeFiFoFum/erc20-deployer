// SPDX-License-Identifier: MIT
pragma solidity 0.8.3;

import "./ERC20Mock.sol";

contract ERC20MockFactory {

    event CreateERC20Mock(address indexed tokenAddress);

    address[] public tokenAddresses;

    function createERC20Mock(string memory name, string memory symbol, uint256 amount) external {
        address erc20Token = address(new ERC20Mock(name, symbol, amount, 18, msg.sender));
        tokenAddresses.push(erc20Token);
        emit CreateERC20Mock(erc20Token);
    }

    function createERC20MockWithDecimals(string memory name, string memory symbol, uint256 amount, uint8 tokenDecimals) external {
        address erc20Token = address(new ERC20Mock(name, symbol, amount, tokenDecimals, msg.sender));
        tokenAddresses.push(erc20Token);
        emit CreateERC20Mock(erc20Token);
    }
}