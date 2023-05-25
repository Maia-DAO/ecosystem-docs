# IBribesFactory

Responsible for creating new bribe flywheel instances.
Owner has admin rights to add bribe flywheels to gauges.


## Functions
### rewardsCycleLength

The length of a rewards cycle


```solidity
function rewardsCycleLength() external view returns (uint256);
```

### bribeFlywheels

Array that holds every bribe created by the factory.


```solidity
function bribeFlywheels(uint256) external view returns (FlywheelCore);
```

### bribeFlywheelIds

Mapping that attributes an id to every bribe created.


```solidity
function bribeFlywheelIds(FlywheelCore) external view returns (uint256);
```

### activeBribeFlywheels

Mapping that attributes a boolean value depending on whether the bribe is active or not.


```solidity
function activeBribeFlywheels(FlywheelCore) external view returns (bool);
```

### flywheelTokens

Mapping that holds the address of the bribe token of a given flywheel.


```solidity
function flywheelTokens(address) external view returns (FlywheelCore);
```

### gaugeManager

The gauge manager contract.


```solidity
function gaugeManager() external view returns (BaseV2GaugeManager);
```

### getBribeFlywheels

Returns all the bribes created by the factory.


```solidity
function getBribeFlywheels() external view returns (FlywheelCore[] memory);
```

### addGaugetoFlywheel

Adds a new bribe flywheel to the given gauge.

*Creates a new bribe flywheel if it doesn't exist.*


```solidity
function addGaugetoFlywheel(address gauge, address bribeToken) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`gauge`|`address`|address of the gauge to add the bribe to.|
|`bribeToken`|`address`|address of the token to create a bribe for.|


### createBribeFlywheel

Creates a new flywheel for the given bribe token address.


```solidity
function createBribeFlywheel(address bribeToken) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`bribeToken`|`address`|address of the token to create a bribe for.|


## Events
### BribeFlywheelCreated
Emitted when a new bribe flywheel is created.


```solidity
event BribeFlywheelCreated(address indexed bribeToken, FlywheelCore flywheel);
```

## Errors
### BribeFlywheelAlreadyExists
Throws when trying to add a bribe flywheel for a token that already exists.


```solidity
error BribeFlywheelAlreadyExists();
```

