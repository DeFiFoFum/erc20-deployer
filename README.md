# ERC20 Deployer
Quickly deploy new ERC20 tokens

# Contracts

## ERC20Token
This is a standard ERC20 implementation / Factory configuration.

```javascript
ERC20Token erc20Token = new ERC20Token(
    string memory name, 
    string memory symbol,
    uint256 amount,
    uint8 tokenDecimals,
    address minter
);
```

```javascript
erc20Factory.createERC20Token(
    string memory name, 
    string memory symbol, 
    uint256 amount
);

erc20Factory.createERC20TokenWithDecimals(
    string memory name, 
    string memory symbol, 
    uint256 amount,
    uint8 tokenDecimals
);
```

## ERC20Mock
This is a standard ERC20 implementation with **public mint capabilities** for testing purposes. Also included is a factory as well.

## Setup
Create a `.env` file based off of `.env.example` to deploy contracts to bsc mainnet/testnet and to verify deployed contracts.  

## Compile
`yarn compile`

## Deploy 

### Mainnet
`yarn migrate:bsc [--reset]` // Use `--reset` to redeploy already deployed contracts   
`yarn verify:bsc`  

### Testnet
`yarn migrate:testnet [--reset]`  
`yarn verify:testnet`  
  
_* new contracts that are added must be added to the verification script in package.json by adding `&&` to the end with the new contract verification._


## Lint
Lint with `solhint`  
`yarn lint` / `yarn lint:fix`    

## Generate Types from Contracts
Use `typechain` to generate contract interfaces for UI integration.  
`yarn gen:types`  

