# IERC20hTokenBranchFactory
[Git Source](https://github.com/Maia-DAO/2023-09-maia-remediations/blob/main/src/interfaces/IERC20hTokenBranchFactory.sol)

**Author:**
MaiaDAO

Factory contract allowing for permissionless deployment of new Branch hTokens in Branch
Chains of Ulysses Omnichain Liquidity Protocol.

*This contract is called by the chain's Core Branch Router.*


## Functions
### createToken

Function to create a new Branch hToken.


```solidity
function createToken(string memory _name, string memory _symbol, uint8 _decimals, bool _addPrefix)
    external
    returns (ERC20hToken newToken);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_name`|`string`|Name of the Token.|
|`_symbol`|`string`|Symbol of the Token.|
|`_decimals`|`uint8`|Decimals of the Token.|
|`_addPrefix`|`bool`|Boolean to add or not the chain prefix to the token name and symbol.|


## Errors
### UnrecognizedCoreRouter

```solidity
error UnrecognizedCoreRouter();
```

### UnrecognizedPort

```solidity
error UnrecognizedPort();
```

