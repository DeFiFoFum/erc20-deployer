// SPDX-License-Identifier: MIT
pragma solidity 0.8.3;

import "./ERC20Token.sol";

contract ERC20TokenFactory {

    event CreateERC20Token(address indexed tokenAddress);

    address[] public tokenAddresses;

    function createERC20Token(string memory name, string memory symbol, uint256 amount) external {
        address erc20Token = address(new ERC20Token(name, symbol, amount));
        tokenAddresses.push(erc20Token);
        emit CreateERC20Token(erc20Token);
    }
}