// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "./ERC20Token.sol";

contract ERC20TokenFactory {
    event CreateERC20Token(
        address indexed tokenAddress,
        string name,
        string indexed symbol,
        uint256 decimals
    );

    address[] public tokenAddresses;

    function createERC20Token(
        string memory name,
        string memory symbol,
        uint256 amount
    ) external {
        address erc20Token = address(
            new ERC20Token(name, symbol, amount, 18, msg.sender)
        );
        tokenAddresses.push(erc20Token);
        emit CreateERC20Token(erc20Token, name, symbol, 18);
    }

    function createERC20TokenWithDecimals(
        string memory name,
        string memory symbol,
        uint256 amount,
        uint8 tokenDecimals
    ) external {
        address erc20Token = address(
            new ERC20Token(name, symbol, amount, tokenDecimals, msg.sender)
        );
        tokenAddresses.push(erc20Token);
        emit CreateERC20Token(erc20Token, name, symbol, tokenDecimals);
    }
}
