---
id: FlywheelCore
title: FlywheelCore
---

**Inherits:**
Ownable, [IFlywheelCore](/rewards/interfaces/IFlywheelCore.sol/interface.IFlywheelCore.md)


## State Variables
### rewardToken
The token to reward


```solidity
address public immutable override rewardToken;
```


### allStrategies
append-only list of strategies added


```solidity
ERC20[] public override allStrategies;
```


### strategyIds
The strategy index in allStrategies


```solidity
mapping(ERC20 => uint256) public override strategyIds;
```


### flywheelRewards
the rewards contract for managing streams


```solidity
address public override flywheelRewards;
```


### flywheelBooster
optional booster module for calculating virtual balances on strategies


```solidity
IFlywheelBooster public override flywheelBooster;
```


### rewardsAccrued
The accrued but not yet transferred rewards for each user


```solidity
mapping(address => uint256) public override rewardsAccrued;
```


### ONE
the fixed point factor of flywheel


```solidity
uint256 private constant ONE = 1e18;
```


### strategyIndex
The last updated index per strategy


```solidity
mapping(ERC20 => uint256) public strategyIndex;
```


### userIndex
The last updated index per strategy


```solidity
mapping(ERC20 => mapping(address => uint256)) public userIndex;
```


## Functions
### constructor

Flywheel Core constructor.


```solidity
constructor(address _rewardToken, address _flywheelRewards, IFlywheelBooster _flywheelBooster, address _owner);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_rewardToken`|`address`|the reward token|
|`_flywheelRewards`|`address`|the flywheel rewards contract|
|`_flywheelBooster`|`IFlywheelBooster`|the flywheel booster contract|
|`_owner`|`address`|the owner of this contract|


### getAllStrategies

Returns all strategies added to flywheel.


```solidity
function getAllStrategies() external view returns (ERC20[] memory);
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

accrue rewards for a single user for msg.sender


```solidity
function accrue(ERC20 strategy, address user) external returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`strategy`|`ERC20`||
|`user`|`address`|the user to be accrued|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|the cumulative amount of rewards accrued to user (including prior)|


### _accrue


```solidity
function _accrue(ERC20 strategy, address user) internal returns (uint256);
```

### accrue

accrue rewards for a single user for msg.sender


```solidity
function accrue(ERC20 strategy, address user, address secondUser) public returns (uint256, uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`strategy`|`ERC20`||
|`user`|`address`|the user to be accrued|
|`secondUser`|`address`||

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|the cumulative amount of rewards accrued to user (including prior)|
|`<none>`|`uint256`||


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
function addStrategyForRewards(ERC20 strategy) external onlyOwner;
```

### _addStrategyForRewards


```solidity
function _addStrategyForRewards(ERC20 strategy) internal;
```

### setFlywheelRewards

swap out the flywheel rewards contract


```solidity
function setFlywheelRewards(address newFlywheelRewards) external onlyOwner;
```

### setBooster

swap out the flywheel booster contract


```solidity
function setBooster(IFlywheelBooster newBooster) external onlyOwner;
```

### accrueStrategy

accumulate global rewards on a strategy


```solidity
function accrueStrategy(ERC20 strategy, uint256 state) private returns (uint256 rewardsIndex);
```

### accrueUser

accumulate rewards on a strategy for a specific user


```solidity
function accrueUser(ERC20 strategy, address user, uint256 index) private returns (uint256);
```

### _getAccruedRewards


```solidity
function _getAccruedRewards(ERC20 strategy) internal virtual returns (uint256);
```

