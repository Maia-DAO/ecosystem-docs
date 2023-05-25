# FlywheelCore

**Inherits:**
Core

Flywheel is a general framework for managing token incentives.
It takes reward streams to various *strategies* such as staking LP tokens and divides them among *users* of those strategies.
The Core contract maintains three important pieces of state:
the rewards index which determines how many rewards are owed per token per strategy. User indexes track how far behind the strategy they are to lazily calculate all catch-up rewards.
the accrued (unclaimed) rewards per user.
references to the booster and rewards module described below.
Core does not manage any tokens directly. The rewards module maintains token balances, and approves core to pull transfer them to users when they claim.
SECURITY NOTE: For maximum accuracy and to avoid exploits, rewards accrual should be notified atomically through the accrue hook.
Accrue should be called any time tokens are transferred, minted, or burned.


## Functions
### constructor


```solidity
constructor(address _rewardToken, IFlywheelRewards _flywheelRewards, IFlywheelBooster _flywheelBooster, address _owner)
    Core(_rewardToken, address(_flywheelRewards), _flywheelBooster, _owner);
```

### _getAccruedRewards


```solidity
function _getAccruedRewards(ERC20 strategy) internal override returns (uint256);
```

