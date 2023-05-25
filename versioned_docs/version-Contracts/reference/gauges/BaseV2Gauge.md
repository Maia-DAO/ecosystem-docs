---
id: BaseV2Gauge
title: BaseV2Gauge
---

**Inherits:**
Ownable, [IBaseV2Gauge](/gauges/interfaces/IBaseV2Gauge.sol/interface.IBaseV2Gauge.md)


## State Variables
### rewardToken
the reward token paid


```solidity
address public immutable override rewardToken;
```


### hermesGaugeBoost
token to boost gauge rewards


```solidity
bHermesBoost public immutable hermesGaugeBoost;
```


### flywheelGaugeRewards
the flywheel core contract


```solidity
FlywheelGaugeRewards public immutable override flywheelGaugeRewards;
```


### isActive
mapping of whitelisted bribe tokens.


```solidity
mapping(FlywheelCore => bool) public override isActive;
```


### added
if bribe flywheel was already added.


```solidity
mapping(FlywheelCore => bool) public override added;
```


### strategy
the gauge's strategy contract


```solidity
address public override strategy;
```


### multiRewardsDepot
the gauge's rewards depot


```solidity
MultiRewardsDepot public override multiRewardsDepot;
```


### epoch
the current epoch / cycle number


```solidity
uint256 public override epoch;
```


### bribeFlywheels
Bribes flywheels array to accrue bribes from.


```solidity
FlywheelCore[] private bribeFlywheels;
```


### WEEK
1 week in seconds.


```solidity
uint256 internal constant WEEK = 1 weeks;
```


## Functions
### constructor

Constructs the BaseV2Gauge contract.


```solidity
constructor(FlywheelGaugeRewards _flywheelGaugeRewards, address _strategy, address _owner);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_flywheelGaugeRewards`|`FlywheelGaugeRewards`|The FlywheelGaugeRewards contract.|
|`_strategy`|`address`|The strategy address.|
|`_owner`|`address`|The owner address.|


### getBribeFlywheels

returns all bribe flywheels


```solidity
function getBribeFlywheels() external view returns (FlywheelCore[] memory);
```

### newEpoch

function responsible for updating current epoch

*should be called once per week, or any outstanding rewards will be kept for next cycle*


```solidity
function newEpoch() external;
```

### distribute

Distributes weekly emissions to the strategy.


```solidity
function distribute(uint256 amount) internal virtual;
```

### attachUser

attaches a gauge to a user

*only the strategy can call this function*


```solidity
function attachUser(address user) external onlyStrategy;
```

### detachUser

detaches a gauge to a users

*only the strategy can call this function*


```solidity
function detachUser(address user) external onlyStrategy;
```

### accrueBribes

accrues bribes for a given user

*ERC20Gauges calls this on every vote change*


```solidity
function accrueBribes(address user) external;
```

### addBribeFlywheel

adds a new bribe flywheel

*only owner can call this function*


```solidity
function addBribeFlywheel(FlywheelCore bribeFlywheel) external onlyOwner;
```

### removeBribeFlywheel

removes a bribe flywheel

*Can't add existing flywheel (active or not)*


```solidity
function removeBribeFlywheel(FlywheelCore bribeFlywheel) external onlyOwner;
```

### onlyStrategy

Only the strategy can attach and detach users.

*Can only remove active flywheels*

*This is permanent; can't be re-added*


```solidity
modifier onlyStrategy() virtual;
```

