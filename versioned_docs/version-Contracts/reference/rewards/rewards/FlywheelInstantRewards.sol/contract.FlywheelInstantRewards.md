# FlywheelInstantRewards

**Inherits:**
[BaseFlywheelRewards](/rewards/base/BaseFlywheelRewards.sol/abstract.BaseFlywheelRewards.md), [IFlywheelInstantRewards](/rewards/interfaces/IFlywheelInstantRewards.sol/interface.IFlywheelInstantRewards.md)


## State Variables
### rewardsDepot
RewardsDepot for this contract, shared between all strategy


```solidity
SingleRewardsDepot public immutable rewardsDepot;
```


## Functions
### constructor

Flywheel Instant Rewards constructor.


```solidity
constructor(FlywheelCore _flywheel) BaseFlywheelRewards(_flywheel);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_flywheel`|`FlywheelCore`|flywheel core contract|


### getAccruedRewards

calculate rewards amount accrued to a strategy since the last update.

*MUST be called as soon as rewards are deposited into the rewards depot.*


```solidity
function getAccruedRewards() external override onlyFlywheel returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|rewards the amounts of rewards accrued to the market|


