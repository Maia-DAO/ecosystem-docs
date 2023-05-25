---
id: IFlywheelInstantRewards
title: IFlywheelInstantRewards
---

**Author:**
Maia DAO (https://github.com/Maia-DAO)

This contract is responsible for strategy rewards management.
At any moment all the rewards can be accrued from any strategy
from the general rewards depot for subsequent distribution.
The reward depot serves as a pool of rewards.


## Functions
### getAccruedRewards

calculate rewards amount accrued to a strategy since the last update.

*MUST be called as soon as rewards are deposited into the rewards depot.*


```solidity
function getAccruedRewards() external returns (uint256 rewards);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`rewards`|`uint256`|the amounts of rewards accrued to the market|


