---
id: IFlywheelRewards
title: IFlywheelRewards
---

**Author:**
Maia DAO (https://github.com/Maia-DAO)

Flywheel is a general framework for managing token incentives.
It takes reward streams to various *strategies* such as staking LP tokens and divides them among *users* of those strategies.
The Rewards module is responsible for:
- determining the ongoing reward amounts to entire strategies (core handles the logic for dividing among users)
- actually holding rewards that are yet to be claimed
The reward stream can follow arbitrary logic as long as the reward amount passed to flywheel core has been sent to this contract.
Different module strategies include:
- a static reward rate per second
- a decaying reward rate
- a dynamic just-in-time reward stream
- liquid governance reward delegation (Curve Gauge style)
SECURITY NOTE: The rewards strategy should be smooth and continuous, to prevent gaming the reward distribution by frontrunning.


## Functions
### rewardToken

returns the reward token associated with flywheel core.


```solidity
function rewardToken() external view returns (address);
```

### flywheel

return the flywheel core address


```solidity
function flywheel() external view returns (FlywheelCore);
```

## Errors
### FlywheelError
thrown when msg.sender is not the flywheel


```solidity
error FlywheelError();
```

