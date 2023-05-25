---
id: ITalosStrategyStakedFactory
title: ITalosStrategyStakedFactory
---

**Author:**
Maia DAO (https://github.com/Maia-DAO)

This contract is used to create new TalosStrategyStaked contracts.


## Functions
### boostAggregatorFactory

The boostAggregator to stake NFTs in Uniswap V3 Staker


```solidity
function boostAggregatorFactory() external view returns (BoostAggregatorFactory);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`BoostAggregatorFactory`|boostAggregatorFactory|


### flywheel

flywheel core responsible for assigning strategy rewards
to its respective users.


```solidity
function flywheel() external view returns (FlywheelCoreInstant);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`FlywheelCoreInstant`|flywheel|


### rewards

flywheel core responsible for assigning strategy rewards
to its respective users.


```solidity
function rewards() external view returns (FlywheelInstantRewards);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`FlywheelInstantRewards`|flywheel|


## Errors
### InvalidNFTManager
Throws when boostAggregator has an invalid nonfungiblePositionManager


```solidity
error InvalidNFTManager();
```

