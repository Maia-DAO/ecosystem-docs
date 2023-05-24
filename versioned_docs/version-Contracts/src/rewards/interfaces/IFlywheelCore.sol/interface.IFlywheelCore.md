# IFlywheelCore
[Git Source](https://github.com/Maia-DAO/test-env-V2/blob/84b5f9e8695c91ddb02f27bb3dfb1c652f55ced4/rewards/interfaces/IFlywheelCore.sol)

**Author:**
Maia DAO (https://github.com/Maia-DAO)

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
### rewardToken

The token to reward


```solidity
function rewardToken() external view returns (address);
```

### allStrategies

append-only list of strategies added


```solidity
function allStrategies(uint256) external view returns (ERC20);
```

### strategyIds

The strategy index in allStrategies


```solidity
function strategyIds(ERC20) external view returns (uint256);
```

### flywheelRewards

the rewards contract for managing streams


```solidity
function flywheelRewards() external view returns (address);
```

### flywheelBooster

optional booster module for calculating virtual balances on strategies


```solidity
function flywheelBooster() external view returns (IFlywheelBooster);
```

### rewardsAccrued

The accrued but not yet transferred rewards for each user


```solidity
function rewardsAccrued(address) external view returns (uint256);
```

### accrue

accrue rewards for a single user for msg.sender


```solidity
function accrue(address user) external returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`user`|`address`|the user to be accrued|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|the cumulative amount of rewards accrued to user (including prior)|


### accrue

accrue rewards for a single user on a strategy


```solidity
function accrue(ERC20 strategy, address user) external returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`strategy`|`ERC20`|the strategy to accrue a user's rewards on|
|`user`|`address`|the user to be accrued|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|the cumulative amount of rewards accrued to user (including prior)|


### accrue

accrue rewards for a two users on a strategy


```solidity
function accrue(ERC20 strategy, address user, address secondUser) external returns (uint256, uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`strategy`|`ERC20`|the strategy to accrue a user's rewards on|
|`user`|`address`|the first user to be accrued|
|`secondUser`|`address`||

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|the cumulative amount of rewards accrued to the first user (including prior)|
|`<none>`|`uint256`|the cumulative amount of rewards accrued to the second user (including prior)|


### claimRewards

claim rewards for a given user

*this function is public, and all rewards transfer to the user*


```solidity
function claimRewards(address user) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`user`|`address`|the user claiming rewards|


### addStrategyForRewards

initialize a new strategy


```solidity
function addStrategyForRewards(ERC20 strategy) external;
```

### getAllStrategies

Returns all strategies added to flywheel.


```solidity
function getAllStrategies() external view returns (ERC20[] memory);
```

### setFlywheelRewards

swap out the flywheel rewards contract


```solidity
function setFlywheelRewards(address newFlywheelRewards) external;
```

### setBooster

swap out the flywheel booster contract


```solidity
function setBooster(IFlywheelBooster newBooster) external;
```

### strategyIndex

The last updated index per strategy


```solidity
function strategyIndex(ERC20) external view returns (uint256);
```

### userIndex

The last updated index per strategy


```solidity
function userIndex(ERC20, address) external view returns (uint256);
```

## Events
### AccrueRewards
Emitted when a user's rewards accrue to a given strategy.


```solidity
event AccrueRewards(ERC20 indexed strategy, address indexed user, uint256 rewardsDelta, uint256 rewardsIndex);
```

### ClaimRewards
Emitted when a user claims accrued rewards.


```solidity
event ClaimRewards(address indexed user, uint256 amount);
```

### AddStrategy
Emitted when a new strategy is added to flywheel by the admin


```solidity
event AddStrategy(address indexed newStrategy);
```

### FlywheelRewardsUpdate
Emitted when the rewards module changes


```solidity
event FlywheelRewardsUpdate(address indexed newFlywheelRewards);
```

### FlywheelBoosterUpdate
Emitted when the booster module changes


```solidity
event FlywheelBoosterUpdate(address indexed newBooster);
```

