---
id: BoostAggregatorFactory
title: BoostAggregatorFactory
---

**Inherits:**
[IBoostAggregatorFactory](/talos/interfaces/IBoostAggregatorFactory.sol/interface.IBoostAggregatorFactory.md)


## State Variables
### uniswapV3Staker
Underlying uniV3Staker contract


```solidity
UniswapV3Staker public immutable uniswapV3Staker;
```


### hermes
Underlying hermes token contract.


```solidity
ERC20 public immutable hermes;
```


### boostAggregators
Holds every boost created by the factory.


```solidity
BoostAggregator[] public boostAggregators;
```


### boostAggregatorIds
Maps every created boost to an incremental id.


```solidity
mapping(BoostAggregator => uint256) public boostAggregatorIds;
```


## Functions
### constructor

Construct a new Boost Aggregator Factory contract.


```solidity
constructor(UniswapV3Staker _uniswapV3Staker);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_uniswapV3Staker`|`UniswapV3Staker`|Uniswap V3 Staker to use.|


### getBoostAggregators

Returns the boost aggregators created by the factory.


```solidity
function getBoostAggregators() external view returns (BoostAggregator[] memory);
```

### createBoostAggregator

Creates a new boostAggregator


```solidity
function createBoostAggregator(address owner) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`owner`|`address`|The owner of the boostAggregator|


