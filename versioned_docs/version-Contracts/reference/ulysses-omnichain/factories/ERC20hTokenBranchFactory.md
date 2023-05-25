---
id: ERC20hTokenBranchFactory
title: ERC20hTokenBranchFactory
---

**Inherits:**
Ownable, [IERC20hTokenBranchFactory](/ulysses-omnichain/interfaces/IERC20hTokenBranchFactory.sol/interface.IERC20hTokenBranchFactory.md)


## State Variables
### localChainId
Local Network Identifier.


```solidity
uint24 public immutable localChainId;
```


### localPortAddress
Local Port Address


```solidity
address immutable localPortAddress;
```


### localCoreRouterAddress
Local Branch Core Router Address responsible for the addition of new tokens to the system.


```solidity
address localCoreRouterAddress;
```


### hTokens
Local hTokens deployed in current chain.


```solidity
ERC20hTokenBranch[] public hTokens;
```


### hTokensLenght
Number of hTokens deployed in current chain.


```solidity
uint256 public hTokensLenght;
```


## Functions
### constructor


```solidity
constructor(uint24 _localChainId, address _localPortAddress);
```

### initialize


```solidity
function initialize(address _wrappedNativeTokenAddress, address _coreRouter) external onlyOwner;
```

### createToken

Function to create a new hToken.


```solidity
function createToken(string memory _name, string memory _symbol)
    external
    requiresCoreRouter
    returns (ERC20hTokenBranch newToken);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_name`|`string`|Name of the Token.|
|`_symbol`|`string`|Symbol of the Token.|


### requiresCoreRouter

Modifier that verifies msg sender is the RootInterface Contract from Root Chain.


```solidity
modifier requiresCoreRouter();
```

### requiresPort

Modifier that verifies msg sender is the Branch Port Contract from Local Chain.


```solidity
modifier requiresPort();
```

