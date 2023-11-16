# IERC20hToken
[Git Source](https://github.com/Maia-DAO/2023-09-maia-remediations/blob/main/src/interfaces/IERC20hToken.sol)

**Author:**
MaiaDAO.

ERC20 hToken contract deployed in the Branch Chains of the Ulysses Omnichain Liquidity System.
ERC20 representation of a token deposited in a  Branch Chain's Port. Is only minted upon
user request otherwise underlying tokens are cleared and the matching Root hToken has been burned.

*If this is a root hToken, this asset is minted / burned in reflection of it's origin Branch Port balance.
Should not be burned being stored in Root Port instead if Branch hToken mint is requested.*


## Functions
### mint

Function to mint tokens in the Branch Chain.


```solidity
function mint(address account, uint256 amount) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`account`|`address`|Address of the account to receive the tokens.|
|`amount`|`uint256`|Amount of tokens to be minted.|


### burn

Function to burn tokens in the Branch Chain.


```solidity
function burn(address account, uint256 amount) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`account`|`address`|Address of the account to burn the tokens from.|
|`amount`|`uint256`|Amount of tokens to be burned.|


## Errors
### InvalidPortAddress
Error thrown when the Port Address is the zero address.


```solidity
error InvalidPortAddress();
```

