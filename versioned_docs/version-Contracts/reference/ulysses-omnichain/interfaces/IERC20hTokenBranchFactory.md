---
id: IERC20hTokenBranchFactory
title: IERC20hTokenBranchFactory
---

**Author:**
MaiaDAO

Factory contract allowing for permissionless deployment of new Branch hTokens in Branch
Chains of Ulysses Omnichain Liquidity Protocol.

*This contract is called by the chain's Core Branch Router.*


## Functions
### createToken

Function to create a new Branch hToken.


```solidity
function createToken(string memory _name, string memory _symbol) external returns (ERC20hTokenBranch newToken);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_name`|`string`|Name of the Token.|
|`_symbol`|`string`|Symbol of the Token.|


## Errors
### UnrecognizedCoreRouter

```solidity
error UnrecognizedCoreRouter();
```

### UnrecognizedPort

```solidity
error UnrecognizedPort();
```

