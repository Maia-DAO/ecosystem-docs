---
id: FlywheelBribeRewards
title: FlywheelBribeRewards
---

**Inherits:**
[FlywheelAcummulatedRewards](/rewards/rewards/FlywheelAcummulatedRewards.sol/abstract.FlywheelAcummulatedRewards.md), [IFlywheelBribeRewards](/rewards/interfaces/IFlywheelBribeRewards.sol/interface.IFlywheelBribeRewards.md)


## State Variables
### rewardsDepots
RewardsDepot for each strategy


```solidity
mapping(ERC20 => RewardsDepot) public override rewardsDepots;
```


## Functions
### constructor

Flywheel Accumulated Bribes Reward Stream constructor.


```solidity
constructor(FlywheelCore _flywheel, uint256 _rewardsCycleLength)
    FlywheelAcummulatedRewards(_flywheel, _rewardsCycleLength);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_flywheel`|`FlywheelCore`|flywheel core contract|
|`_rewardsCycleLength`|`uint256`|the length of a rewards cycle in seconds|


### getNextCycleRewards

calculate and transfer accrued rewards to flywheel core


```solidity
function getNextCycleRewards(ERC20 strategy) internal override returns (uint256);
```

### setRewardsDepot

swap out the flywheel rewards contract


```solidity
function setRewardsDepot(RewardsDepot rewardsDepot) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`rewardsDepot`|`RewardsDepot`|the new rewards depot to set|


