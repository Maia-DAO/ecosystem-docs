# IERC20hTokenRootFactory
[Git Source](https://github.com/Maia-DAO/2023-09-maia-remediations/blob/main/src/interfaces/IERC20hTokenRootFactory.sol)

**Author:**
MaiaDAO

Factory contract allowing for permissionless deployment of new Root hTokens in the
Root Chain of Ulysses Omnichain Liquidity Protocol.

*This contract is called by the chain's Core Root Router.*


## Functions
### createToken

Function to create a new hToken.


```solidity
function createToken(string memory _name, string memory _symbol, uint8 _decimals)
    external
    returns (ERC20hToken newToken);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_name`|`string`|Name of the Token.|
|`_symbol`|`string`|Symbol of the Token.|
|`_decimals`|`uint8`|Decimals of the Token.|


## Errors
### UnrecognizedCoreRouterOrPort

```solidity
error UnrecognizedCoreRouterOrPort();
```

