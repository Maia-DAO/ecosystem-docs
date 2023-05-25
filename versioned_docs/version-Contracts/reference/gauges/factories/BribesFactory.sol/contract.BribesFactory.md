# BribesFactory

**Inherits:**
Ownable, [IBribesFactory](/gauges/interfaces/IBribesFactory.sol/interface.IBribesFactory.md)


## State Variables
### rewardsCycleLength
The length of a rewards cycle


```solidity
uint256 public immutable rewardsCycleLength;
```


### flywheelGaugeWeightBooster

```solidity
FlywheelBoosterGaugeWeight private immutable flywheelGaugeWeightBooster;
```


### bribeFlywheels
Array that holds every bribe created by the factory.


```solidity
FlywheelCore[] public bribeFlywheels;
```


### bribeFlywheelIds
Mapping that attributes an id to every bribe created.


```solidity
mapping(FlywheelCore => uint256) public bribeFlywheelIds;
```


### activeBribeFlywheels
Mapping that attributes a boolean value depending on whether the bribe is active or not.


```solidity
mapping(FlywheelCore => bool) public activeBribeFlywheels;
```


### flywheelTokens
Mapping that holds the address of the bribe token of a given flywheel.


```solidity
mapping(address => FlywheelCore) public flywheelTokens;
```


### gaugeManager
The gauge manager contract.


```solidity
BaseV2GaugeManager public immutable gaugeManager;
```


## Functions
### constructor

Creates a new bribes factory


```solidity
constructor(
    BaseV2GaugeManager _gaugeManager,
    FlywheelBoosterGaugeWeight _flywheelGaugeWeightBooster,
    uint256 _rewardsCycleLength,
    address _owner
);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_gaugeManager`|`BaseV2GaugeManager`|Gauge Factory manager|
|`_flywheelGaugeWeightBooster`|`FlywheelBoosterGaugeWeight`|Flywheel Gauge Weight Booster|
|`_rewardsCycleLength`|`uint256`|Rewards Cycle Length|
|`_owner`|`address`|Owner of this contract|


### getBribeFlywheels

Returns all the bribes created by the factory.


```solidity
function getBribeFlywheels() external view returns (FlywheelCore[] memory);
```

### addGaugetoFlywheel

Adds a new bribe flywheel to the given gauge.

*Creates a new bribe flywheel if it doesn't exist.*


```solidity
function addGaugetoFlywheel(address gauge, address bribeToken) external onlyGaugeFactory;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`gauge`|`address`|address of the gauge to add the bribe to.|
|`bribeToken`|`address`|address of the token to create a bribe for.|


### createBribeFlywheel

Creates a new flywheel for the given bribe token address.


```solidity
function createBribeFlywheel(address bribeToken) public;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`bribeToken`|`address`|address of the token to create a bribe for.|


### onlyGaugeFactory


```solidity
modifier onlyGaugeFactory();
```

