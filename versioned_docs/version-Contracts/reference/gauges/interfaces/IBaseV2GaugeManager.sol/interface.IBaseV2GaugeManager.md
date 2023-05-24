# IBaseV2GaugeManager
[Git Source](https://github.com/Maia-DAO/test-env-V2/blob/84b5f9e8695c91ddb02f27bb3dfb1c652f55ced4/gauges/interfaces/IBaseV2GaugeManager.sol)

**Author:**
Maia DAO (https://github.com/Maia-DAO)

Interface for the BaseV2GaugeManager contract that handles the
management of gauges and gauge factories.

*Only this contract can add/remove gauges to bHermesWeight and bHermesBoost.*


## Functions
### admin

Address that holds admin power over the contract.


```solidity
function admin() external view returns (address);
```

### bHermesGaugeWeight

Represent the underlying gauge voting power of bHermes.


```solidity
function bHermesGaugeWeight() external view returns (bHermesGauges);
```

### bHermesGaugeBoost

Represents the boosting power of bHermes.


```solidity
function bHermesGaugeBoost() external view returns (bHermesBoost);
```

### gaugeFactories

Array that holds every gauge factory.


```solidity
function gaugeFactories(uint256) external view returns (BaseV2GaugeFactory);
```

### gaugeFactoryIds

Maps each gauge factory to an incremental id.


```solidity
function gaugeFactoryIds(BaseV2GaugeFactory) external view returns (uint256);
```

### activeGaugeFactories

Holds all the active gauge factories.


```solidity
function activeGaugeFactories(BaseV2GaugeFactory) external view returns (bool);
```

### getGaugeFactories

Returns all the gauge factories (including the inactive ones).


```solidity
function getGaugeFactories() external view returns (BaseV2GaugeFactory[] memory);
```

### newEpoch

Function to call at the beginning of every epoch.


```solidity
function newEpoch() external;
```

### newEpoch

Performs the necessary operations of the beginning of the new epoch for a given gauge ids range.


```solidity
function newEpoch(uint256 start, uint256 end) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`start`|`uint256`|initial gauge id to perform the actions.|
|`end`|`uint256`|end gauge id to perform the actions.|


### addGauge

Adds a gauge to a bhermes position.


```solidity
function addGauge(address gauge) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`gauge`|`address`|gauge address to add.|


### removeGauge

Removes a gauge to a bhermes position.


```solidity
function removeGauge(address gauge) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`gauge`|`address`|gauge address to remove.|


### addGaugeFactory

Adds a gauge factory to the manager.


```solidity
function addGaugeFactory(BaseV2GaugeFactory gaugeFactory) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`gaugeFactory`|`BaseV2GaugeFactory`|gauge factory address to add to the manager.|


### removeGaugeFactory

Removes a gauge factory from the manager.


```solidity
function removeGaugeFactory(BaseV2GaugeFactory gaugeFactory) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`gaugeFactory`|`BaseV2GaugeFactory`|gauge factory address to remove to the manager.|


### changebHermesGaugeOwner

Changes the ownership of the bHermes gauge boost and gauge weight properties.


```solidity
function changebHermesGaugeOwner(address newOwner) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newOwner`|`address`|address of the new owner.|


### changeAdmin

Changes the admin powers of the manager.


```solidity
function changeAdmin(address newAdmin) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newAdmin`|`address`|address of the new admin.|


## Events
### AddedGaugeFactory
Emitted when a new gauge factory is added.


```solidity
event AddedGaugeFactory(address gaugeFactory);
```

### RemovedGaugeFactory
Emitted when a gauge factory is removed.


```solidity
event RemovedGaugeFactory(address gaugeFactory);
```

### ChangedbHermesGaugeOwner
Emitted when changing bHermes GaugeWeight and GaugeWeight owner.


```solidity
event ChangedbHermesGaugeOwner(address newOwner);
```

### ChangedAdmin
Emitted when changing admin.


```solidity
event ChangedAdmin(address newAdmin);
```

## Errors
### GaugeFactoryAlreadyExists
*Throws when trying to add a gauge factory that already exists.*


```solidity
error GaugeFactoryAlreadyExists();
```

### NotActiveGaugeFactory
*Throws when the caller is not an active gauge factory.*


```solidity
error NotActiveGaugeFactory();
```

### NotAdmin
*Throws when the caller is not the admin.*


```solidity
error NotAdmin();
```

