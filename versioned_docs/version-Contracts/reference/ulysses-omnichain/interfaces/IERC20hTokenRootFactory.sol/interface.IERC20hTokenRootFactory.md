# IERC20hTokenRootFactory
[Git Source](https://github.com/Maia-DAO/test-env-V2/blob/84b5f9e8695c91ddb02f27bb3dfb1c652f55ced4/ulysses-omnichain/interfaces/IERC20hTokenRootFactory.sol)

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

