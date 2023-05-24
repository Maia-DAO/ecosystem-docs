# IERC20hTokenBranchFactory
[Git Source](https://github.com/Maia-DAO/test-env-V2/blob/84b5f9e8695c91ddb02f27bb3dfb1c652f55ced4/ulysses-omnichain/interfaces/IERC20hTokenBranchFactory.sol)

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

