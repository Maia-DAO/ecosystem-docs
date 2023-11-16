# ERC20hToken

[Git Source](https://github.com/Maia-DAO/2023-09-maia-remediations/blob/main/src/token/ERC20hToken.sol)

**Inherits:**
ERC20, Ownable, [IERC20hToken](/src/ulysses-omnichain/interfaces/IERC20hToken.md)

**Author:**
MaiaDAO

## Functions

### constructor

Constructor for the ERC20hToken branch or root Contract.

```solidity
constructor(address _localPortAddress, string memory _name, string memory _symbol, uint8 _decimals)
    ERC20(_name, _symbol, _decimals);
```

**Parameters**

| Name                | Type      | Description                                        |
| ------------------- | --------- | -------------------------------------------------- |
| `_localPortAddress` | `address` | Address of the local Branch or Root Port Contract. |
| `_name`             | `string`  | Name of the Token.                                 |
| `_symbol`           | `string`  | Symbol of the Token.                               |
| `_decimals`         | `uint8`   | Decimals of the Token.                             |

### mint

Function to mint tokens in the Branch Chain.

```solidity
function mint(address account, uint256 amount) external override onlyOwner;
```

**Parameters**

| Name      | Type      | Description                                   |
| --------- | --------- | --------------------------------------------- |
| `account` | `address` | Address of the account to receive the tokens. |
| `amount`  | `uint256` | Amount of tokens to be minted.                |

### burn

Function to burn tokens in the Branch Chain.

```solidity
function burn(address account, uint256 amount) public override onlyOwner;
```

**Parameters**

| Name      | Type      | Description                                     |
| --------- | --------- | ----------------------------------------------- |
| `account` | `address` | Address of the account to burn the tokens from. |
| `amount`  | `uint256` | Amount of tokens to be burned.                  |
