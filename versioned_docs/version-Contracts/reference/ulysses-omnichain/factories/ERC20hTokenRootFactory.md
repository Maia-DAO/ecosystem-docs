---
id: ERC20hTokenRootFactory
title: ERC20hTokenRootFactory
---

**Inherits:**
Ownable, [IERC20hTokenRootFactory](/ulysses-omnichain/interfaces/IERC20hTokenRootFactory.sol/interface.IERC20hTokenRootFactory.md)


## State Variables
### localChainId
Local Network Identifier.


```solidity
uint256 public immutable localChainId;
```


### rootPortAddress
Root Port Address.


```solidity
address public immutable rootPortAddress;
```


### coreRootRouterAddress
Root Core Router Address, in charge of the addition of new tokens to the system.


```solidity
address public coreRootRouterAddress;
```


### hTokens

```solidity
ERC20hTokenRoot[] public hTokens;
```


### hTokensLenght

```solidity
uint256 public hTokensLenght;
```


## Functions
### constructor

Constructor for ERC20 hToken Contract


```solidity
constructor(uint256 _localChainId, address _rootPortAddress);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_localChainId`|`uint256`|Local Network Identifier.|
|`_rootPortAddress`|`address`|Root Port Address|


### initialize


```solidity
function initialize(address _coreRouter) external onlyOwner;
```

### createToken

Function to create a new hToken.


```solidity
function createToken(string memory _name, string memory _symbol)
    external
    requiresCoreRouter
    returns (ERC20hTokenRoot newToken);
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

