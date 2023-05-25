---
id: IFlywheelAcummulatedRewards
title: IFlywheelAcummulatedRewards
---

**Author:**
Maia DAO (https://github.com/Maia-DAO)

This contract is responsible for strategy rewards management.
Once every cycle all the rewards can be accrued from the strategy's corresponding rewards depot for subsequent distribution.
The reward depot serves as a pool of rewards.
The getNextCycleRewards() hook should also transfer the next cycle's rewards to this contract to ensure proper accounting.


## Functions
### rewardsCycleLength

the length of a rewards cycle


```solidity
function rewardsCycleLength() external view returns (uint256);
```

### endCycle

end of current active rewards cycle's UNIX timestamp.


```solidity
function endCycle() external view returns (uint256);
```

### getAccruedRewards

calculate and transfer accrued rewards to flywheel core


```solidity
function getAccruedRewards(ERC20 strategy) external returns (uint256 amount);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`strategy`|`ERC20`|the strategy to accrue rewards for|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`amount`|`uint256`|amounts of tokens accrued and transferred|


## Events
### NewRewardsCycle
emitted every time a new rewards cycle begins


```solidity
event NewRewardsCycle(uint32 indexed start, uint256 indexed end, uint256 reward);
```

