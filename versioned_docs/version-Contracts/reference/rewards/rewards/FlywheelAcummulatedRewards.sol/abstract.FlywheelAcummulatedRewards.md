# FlywheelAcummulatedRewards

**Inherits:**
[BaseFlywheelRewards](/rewards/base/BaseFlywheelRewards.sol/abstract.BaseFlywheelRewards.md), [IFlywheelAcummulatedRewards](/rewards/interfaces/IFlywheelAcummulatedRewards.sol/interface.IFlywheelAcummulatedRewards.md)


## State Variables
### rewardsCycleLength
the length of a rewards cycle


```solidity
uint256 public immutable override rewardsCycleLength;
```


### endCycle
end of current active rewards cycle's UNIX timestamp.


```solidity
uint256 public override endCycle;
```


## Functions
### constructor

Flywheel Instant Rewards constructor.


```solidity
constructor(FlywheelCore _flywheel, uint256 _rewardsCycleLength) BaseFlywheelRewards(_flywheel);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_flywheel`|`FlywheelCore`|flywheel core contract|
|`_rewardsCycleLength`|`uint256`|the length of a rewards cycle in seconds|


### getAccruedRewards

calculate and transfer accrued rewards to flywheel core


```solidity
function getAccruedRewards(ERC20 strategy) external override onlyFlywheel returns (uint256 amount);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`strategy`|`ERC20`|the strategy to accrue rewards for|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`amount`|`uint256`|amounts of tokens accrued and transferred|


### getNextCycleRewards

function to get the next cycle's rewards amount


```solidity
function getNextCycleRewards(ERC20 strategy) internal virtual returns (uint256);
```

