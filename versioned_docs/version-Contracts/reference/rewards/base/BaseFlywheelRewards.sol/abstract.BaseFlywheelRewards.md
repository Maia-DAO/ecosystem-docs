# BaseFlywheelRewards
[Git Source](https://github.com/Maia-DAO/test-env-V2/blob/84b5f9e8695c91ddb02f27bb3dfb1c652f55ced4/rewards/base/BaseFlywheelRewards.sol)

**Inherits:**
[IFlywheelRewards](/rewards/interfaces/IFlywheelRewards.sol/interface.IFlywheelRewards.md)

Determines how many rewards accrue to each strategy globally over a given time period.

*approves the flywheel core for the reward token to allow balances to be managed by the module but claimed from core.*


## State Variables
### rewardToken
returns the reward token associated with flywheel core.


```solidity
address public immutable override rewardToken;
```


### flywheel
return the flywheel core address


```solidity
FlywheelCore public immutable override flywheel;
```


## Functions
### constructor


```solidity
constructor(FlywheelCore _flywheel);
```

### onlyFlywheel


```solidity
modifier onlyFlywheel();
```

