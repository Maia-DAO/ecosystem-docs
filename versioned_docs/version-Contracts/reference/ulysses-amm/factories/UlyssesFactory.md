---
id: UlyssesFactory
title: UlyssesFactory
---

**Inherits:**
Ownable, [IUlyssesFactory](/ulysses-amm/interfaces/IUlyssesFactory.sol/interface.IUlyssesFactory.md)


## State Variables
### poolId
next poolId


```solidity
uint256 public poolId = 1;
```


### tokenId
next tokenId


```solidity
uint256 public tokenId = 1;
```


### pools
Mapping that holds all the Ulysses pools


```solidity
mapping(uint256 => UlyssesPool) public pools;
```


### tokens
Mapping that holds all the Ulysses tokens


```solidity
mapping(uint256 => UlyssesToken) public tokens;
```


## Functions
### constructor


```solidity
constructor(address _owner);
```

### renounceOwnership


```solidity
function renounceOwnership() public payable override onlyOwner;
```

### createPool

Creates a new Ullysses pool based on a given ERC20 passed through params.


```solidity
function createPool(ERC20 asset, address owner) external returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`asset`|`ERC20`|represents the asset we want to create a Ulysses pool around|
|`owner`|`address`||

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|poolId returns the poolId|


### _createPool

Private function that holds the logic for creating a new Ulysses pool.


```solidity
function _createPool(ERC20 asset, address owner) private returns (uint256 _poolId);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`asset`|`ERC20`|represents the asset that we want to create a Ulysses pool for.|
|`owner`|`address`||

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`_poolId`|`uint256`|id of the pool that was created.|


### createPools

Takes an array of assets and their respective weights and creates a Ulysses token.
First it creates a Ulysses pool for each asset and then it links them together
according to the specified weight.


```solidity
function createPools(ERC20[] calldata assets, uint8[][] calldata weights, address owner)
    external
    returns (uint256[] memory poolIds);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`assets`|`ERC20[]`|ERC20 array that represents all the assets that are part of the Ulysses Token.|
|`weights`|`uint8[][]`|Weights array that holds the weights for the corresponding assets.|
|`owner`|`address`||


### createToken

Responsible for creating a unified liquidity token (Ulysses token).


```solidity
function createToken(uint256[] calldata poolIds, uint256[] calldata weights, address owner)
    external
    returns (uint256 _tokenId);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`poolIds`|`uint256[]`|Ids of the pools that the unified liquidity token should take into consideration|
|`weights`|`uint256[]`|wWeights of the pools to link to the Ulysses Token|
|`owner`|`address`||

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`_tokenId`|`uint256`|Id of the newly created Ulysses token|


## Errors
### ParameterLengthError

```solidity
error ParameterLengthError();
```

### InvalidPoolId

```solidity
error InvalidPoolId();
```

### InvalidAsset

```solidity
error InvalidAsset();
```

