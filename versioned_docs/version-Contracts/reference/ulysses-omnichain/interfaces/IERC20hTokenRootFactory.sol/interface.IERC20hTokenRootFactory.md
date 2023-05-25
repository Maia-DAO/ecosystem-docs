# IERC20hTokenRootFactory

**Author:**
MaiaDAO

Factory contract allowing for permissionless deployment of new Root hTokens in the
Root Chain of Ulysses Omnichain Liquidity Protocol.

*This contract is called by the chain's Core Root Router.*


## Functions
### createToken

Function to create a new hToken.


```solidity
function createToken(string memory _name, string memory _symbol) external returns (ERC20hTokenRoot newToken);
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

