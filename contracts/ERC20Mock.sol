// SPDX-License-Identifier: MIT
pragma solidity 0.8.3;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ERC20Mock is ERC20 {
    constructor(
        string memory name, 
        string memory symbol,
        uint256 amount,
        address minter
    ) ERC20(name, symbol) {
        _mint(minter, amount);
    }

    function mint() external {
        _mint(msg.sender, 1e22);
    }
}