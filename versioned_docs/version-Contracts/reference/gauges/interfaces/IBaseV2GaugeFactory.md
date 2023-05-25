---
id: IBaseV2GaugeFactory
title: IBaseV2GaugeFactory
---

**Author:**
Maia DAO (https://github.com/Maia-DAO)

Handles the creation of new gauges and the management of existing ones.
Adds and removes gauges, and allows the bribe factory
to add and remove bribes to gauges.
⠀⠀⠀⠀⠀⠀⠀⣠⠊⡴⠁⠀⠀⣰⠏⠀⣼⠃⢰⡇⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⡇⠙⡄⠀⠀⠳⠙⡆⠀⠀⠘⣆⠀⠀
⠀⠀⠀⠀⢀⣀⡔⠁⡞⠁⠀⠀⣴⠃⠀⣰⡏⠀⠇⠀⠀⠀⠀⠀⠀⠀⡄⠀⢻⠀⠀⠀⠀⠀⠀⠀⢸⠀⠘⡄⠀⠀⠀⢹⡄⠀⠀⠸⠀⠀
⠀⠀⠀⠀⢀⡏⠀⠜⠀⠀⠀⣼⠇⠀⢠⣿⠁⣾⢸⠀⠀⠀⠀⠀⠀⠀⡇⠀⢸⡇⠀⢢⠀⠀⠀⢆⠀⣇⠀⠘⡄⠀⠀⠘⡇⠀⠀⠀⠀⠀
⠀⠀⠀⢀⡾⠀⠀⠀⠀⠀⣸⠏⠀⠀⡞⢹⠀⡇⡾⠀⠀⠀⠀⠀⠀⠀⢰⠀⠀⣿⡀⠈⢇⠀⠀⠈⢧⣿⡀⠀⠀⠀⠀⠀⠇⠀⠀⠀⠀⠀
⠀⠀⠀⣼⡇⠀⠀⠀⠀⢠⡿⠀⠀⢠⠁⢸⠀⡇⢳⡇⠀⠀⠀⠀⠀⠀⢸⡀⠀⢸⣧⠀⠘⡄⠀⠀⠀⠻⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠐⢸⡇⠀⡄⠀⠀⠸⣿⠀⠀⣼⠤⠐⣇⢣⡀⠳⡀⠀⠀⢠⠀⠀⠘⣇⠀⠀⢻⣏⠉⢻⡒⠤⡀⠀⠘⠣⣄⡆⠀⠀⠀⠀⠀⠀⠀⠀
⡄⠀⠸⡌⣧⠀⢧⠀⠀⠀⢿⣧⠀⢹⠀⠀⠘⢦⠙⠒⠳⠦⠤⣈⣳⠄⠀⠽⢷⠤⠈⠨⠧⢄⠳⣄⣠⡦⡀⠀⠀⣉⣑⣲⡇⠀⠀⠀⠀⠀
⣌⢢⡀⠙⢻⠳⣬⣧⣀⠠⡈⣏⠙⣋⣥⣶⣶⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡶⠾⣶⡶⣶⣧⣶⢹⣷⠚⡗⠋⢹⠉⠀⠀⠀⠀⠀⠀⠀
⠈⠳⣹⣦⡀⠀⣿⣼⠋⠉⢉⣽⣿⡋⣷⣦⣿⣿⣷⡀⠀⠀⢀⣤⣶⠭⠭⢿⣧⣀⣴⣻⣥⣾⣏⣿⠀⢸⡀⠁⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠘⢮⣻⡄⢿⢻⢀⣾⡿⠟⠛⢻⡽⣱⡟⣩⢿⡷⣶⣶⣾⡿⠁⢤⡖⠒⠛⣿⠟⣥⣛⢷⣿⣽⠀⠘⡿⠁⠀⡟⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠰⡙⢿⡼⡜⢸⣿⠒⡿⢦⠎⣴⢏⡜⠀⢸⣿⠁⠀⢹⣧⠀⠘⡿⢷⡾⣅⡠⠞⠛⠿⣟⣿⡆⠀⢧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠐⠒⠲⣄⢳⢈⡇⡇⠈⢿⣷⣷⢁⣾⢃⠞⠀⣠⡿⠃⠤⡀⠚⢿⣆⡠⠊⠢⡀⠀⠙⠦⣀⣴⣷⠋⣧⠀⠈⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢠⡀⠀⠘⢻⣾⠃⠃⠀⢸⠻⣿⣿⣥⣋⣠⣾⠟⠁⠀⠀⠀⠀⠈⢻⣧⡀⠀⠈⢲⣄⡀⠈⠛⢁⡀⠟⡄⠀⠸⡀⡀⠀⠀⠠⠀⠀⠀⠀⠀
⠀⠱⣄⠀⠈⢻⡏⠀⠀⠈⡄⢿⠈⠙⠛⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠹⢿⠶⢚⡯⠗⠋⠲⢄⠀⠈⠒⢿⡄⠀⠱⣇⠀⢀⡇⠀⠀⠀⠀⠀
⢀⡀⠙⣧⡀⣸⡇⠀⠀⠀⠇⢸⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠀⠀⠀⠀⠀⠀⠙⢦⣀⠀⠈⠲⢄⠙⣆⣸⡇⠀⠀⠀⠀⠀
⡻⣷⣦⡼⣷⣿⠃⠀⠀⠀⢸⠈⡟⢆⣀⠴⠊⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⢴⠚⠉⠉⠉⠀⣀⠔⣋⠡⠽⢷⠀⠀⠀⠀⠀
⠁⠈⢻⡇⢻⣿⠀⠀⠀⠀⠀⣆⢿⠿⡓⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡠⣽⣿⣀⡤⠎⡔⢊⠔⢊⡁⠤⠖⢚⣳⣄⠀⠀⠀
⠀⢀⢸⢀⢸⡇⠀⠀⠀⠀⠀⠸⡘⡆⢧⠀⢿⢢⣀⠀⠀⠀⠀⠀⠀⢀⣀⠤⠒⠊⣡⢤⡏⡼⢏⠀⡜⣰⠁⡰⠋⣠⠒⠈⢁⣀⠬⠧⡀⠀
⠀⠀⢸⠈⡞⣧⠀⠀⠀⠀⠀⠀⢣⢹⣮⣆⢸⠸⡌⠓⡦⠒⠒⠊⠉⠁⠀⠀⢠⠞⠀⢠⣿⠁⣸⠻⣡⠃⡼⠀⡰⠁⣠⠞⠁⣠⠤⠐⠚⠀
⠀⠀⡸⠀⣷⢻⠀⠀⠀⠀⠀⠀⢀⢷⡈⢿⣄⡇⢹⡀⢱⠀⠀⠀⠀⠀⢀⠜⠁⠀⠀⣼⣻⣰⡏⠀⠙⢶⠀⡴⠁⡔⠁⣠⠊⢀⠔⠋⠀⠀
⠀⠀⠇⢀⡿⡼⣇⠀⠀⠸⠀⠀⠀⠻⣷⡈⢟⢿⡀⠳⣾⣀⣄⣀⡠⠞⠁⠀⢀⣀⣴⢿⡿⡹⠀⠀⠀⠀⢹⣅⡞⠀⡴⠁⡰⠃⠀⡀⠀⠀
⠀⠀⢠⡾⠀⠱⡈⢦⡀⠀⢳⡀⠀⠀⠈⢯⠿⣦⡳⣴⡟⠛⠋⣿⣴⣶⣶⣿⣿⠿⣯⡞⠀⠃⠀⠀⠀⠀⠈⣿⣑⣞⣀⡜⠁⡴⠋⠀⠀⠀
⠀⠀⢠⠇⠀⢀⣈⣒⠻⣦⣀⠱⣄⡀⠀⠀⠓⣬⣳⣽⠳⣤⠼⠋⠉⠉⠉⠀⣀⣴⣿⠁⠀⠀⠀⠀⠀⠀⢰⠋⣉⡏⡍⠙⡎⢀⡼⠁⠀⠀
⠀⣰⣓⣢⠝⠋⣠⣴⡜⠺⠛⠛⠿⠿⣓⣶⠋⠀⠤⠃⠀⠀⠀⠀⠀⢀⣤⡾⢻⠟⡏⠀⠀⠀⠀⠀⠀⡇⡝⠉⡠⢤⣳⠀⣷⢋⡴⠁⠀⠀
⠜⠿⣿⣦⣖⢉⠰⣁⣉⣉⣉⣉⣑⠒⠼⣿⣆⠀⠀⠀⠀⠀⣀⣠⣶⠿⠓⠊⠉⠉⠁⠀⠀⠀⠀⠀⠀⢠⠴⢋⡠⠤⢏⣷⣿⣉⠀⠀⠀


## Functions
### gaugeManager

The gauge factory manager


```solidity
function gaugeManager() external view returns (BaseV2GaugeManager);
```

### bHermesBoostToken

The bHermes token used for boost accounting


```solidity
function bHermesBoostToken() external view returns (bHermesBoost);
```

### bribesFactory

The factory of bribe flywheels


```solidity
function bribesFactory() external view returns (BribesFactory);
```

### gauges

Stores all the gauges created by the factory.


```solidity
function gauges(uint256) external view returns (BaseV2Gauge);
```

### gaugeIds

Mapping that assigns each gauge an incremental Id for internal use.


```solidity
function gaugeIds(BaseV2Gauge) external view returns (uint256);
```

### activeGauges

Mapping to keep track of active gauges.


```solidity
function activeGauges(BaseV2Gauge) external view returns (bool);
```

### strategyGauges

Associates a strategy address with a gauge.


```solidity
function strategyGauges(address) external view returns (BaseV2Gauge);
```

### getGauges

Returns all the gauges created by this factory.


```solidity
function getGauges() external view returns (BaseV2Gauge[] memory);
```

### newEpoch

Function to be called after a new epoch begins.


```solidity
function newEpoch() external;
```

### newEpoch

Function to be called after a new epoch begins for a specific range of gauges ids.


```solidity
function newEpoch(uint256 start, uint256 end) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`start`|`uint256`|id of the gauge to start the new epoch|
|`end`|`uint256`|id of the end gauge to start the new epoch|


### createGauge

Creates a new gauge for the given strategy.


```solidity
function createGauge(address strategy, bytes memory data) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`strategy`|`address`|The strategy address to create a gauge for.|
|`data`|`bytes`|The information to pass to create a new gauge.|


### removeGauge

Removes a gauge and its underlying strategies from existence.


```solidity
function removeGauge(BaseV2Gauge gauge) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`gauge`|`BaseV2Gauge`|gauge address to remove.|


### addBribeToGauge

Adds a new bribe to the gauge if the bribe address is already pre-approved by governance.


```solidity
function addBribeToGauge(BaseV2Gauge gauge, address bribeToken) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`gauge`|`BaseV2Gauge`|address of the gauge to add a new bribe.|
|`bribeToken`|`address`|address of the token to bribe the gauge with.|


### removeBribeFromGauge

Removes a given bribe from a gauge, contingent on the removal being pre-approved by governance.


```solidity
function removeBribeFromGauge(BaseV2Gauge gauge, address bribeToken) external;
```

## Errors
### GaugeAlreadyExists
Throws when trying to add a gauge that already exists.


```solidity
error GaugeAlreadyExists();
```

### NotOwnerOrBribesFactoryOwner
Throws when the caller is not the owner or BribesFactory owner.


```solidity
error NotOwnerOrBribesFactoryOwner();
```

### InvalidGauge
Throws when removing an invalid gauge.


```solidity
error InvalidGauge();
```

