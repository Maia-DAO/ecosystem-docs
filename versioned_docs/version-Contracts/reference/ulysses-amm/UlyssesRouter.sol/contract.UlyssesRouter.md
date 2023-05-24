# UlyssesRouter
[Git Source](https://github.com/Maia-DAO/test-env-V2/blob/84b5f9e8695c91ddb02f27bb3dfb1c652f55ced4/ulysses-amm/UlyssesRouter.sol)

**Inherits:**
[IUlyssesRouter](/ulysses-amm/interfaces/IUlyssesRouter.sol/interface.IUlyssesRouter.md)


## State Variables
### pools
Mapping from pool id to Ulysses pool.


```solidity
mapping(uint256 => UlyssesPool) private pools;
```


### ulyssesFactory
Returns the Ulysses Factory address


```solidity
UlyssesFactory public ulyssesFactory;
```


## Functions
### constructor


```solidity
constructor(UlyssesFactory _ulyssesFactory);
```

### getUlyssesLP

Returns the Ulysses pool for the given id.


```solidity
function getUlyssesLP(uint256 id) private returns (UlyssesPool ulysses);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`id`|`uint256`|The id of the Ulysses pool.|


### addLiquidity

Adds liquidity to a pool


```solidity
function addLiquidity(uint256 amount, uint256 minOutput, uint256 poolId) external returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`amount`|`uint256`|The amount of tokens to add|
|`minOutput`|`uint256`|The minimum amount of LP tokens to receive|
|`poolId`|`uint256`|The pool to add liquidity to|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|lpReceived amount of LP tokens received|


### removeLiquidity

Removes liquidity from a pool


```solidity
function removeLiquidity(uint256 amount, uint256 minOutput, uint256 poolId) external returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`amount`|`uint256`|The amount of LP tokens to remove|
|`minOutput`|`uint256`|The minimum amount of tokens to receive|
|`poolId`|`uint256`|The pool to remove liquidity from|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|tokensReceived amount of tokens received|


### swap

Swaps tokens from one pool to another


```solidity
function swap(uint256 amount, uint256 minOutput, Route[] calldata routes) external returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`amount`|`uint256`|The amount of tokens to swap|
|`minOutput`|`uint256`|The minimum amount of tokens to receive|
|`routes`|`Route[]`|The routes to take for the swap to occur|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|tokensReceived amount of tokens received|


