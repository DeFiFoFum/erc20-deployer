// SPDX-License-Identifier: MIT
pragma solidity 0.8.3;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ERC20Mock is ERC20 {
    uint8 private _decimals;

    constructor(
        string memory name, 
        string memory symbol,
        uint256 amount,
        uint8 tokenDecimals,
        address minter
    ) ERC20(name, symbol) {
        _mint(minter, amount);
        _decimals = tokenDecimals;
    }

    function decimals() public view virtual override returns (uint8) {
        return _decimals;
    }

    function mint() external {
        _mint(msg.sender, 1e22);
    }
}