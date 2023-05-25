# BaseV2GaugeFactory

**Inherits:**
Ownable, [IBaseV2GaugeFactory](/gauges/interfaces/IBaseV2GaugeFactory.sol/interface.IBaseV2GaugeFactory.md)


## State Variables
### gaugeManager
The gauge factory manager


```solidity
BaseV2GaugeManager public immutable override gaugeManager;
```


### bHermesBoostToken
The bHermes token used for boost accounting


```solidity
bHermesBoost public immutable override bHermesBoostToken;
```


### bribesFactory
The factory of bribe flywheels


```solidity
BribesFactory public immutable override bribesFactory;
```


### gauges
Stores all the gauges created by the factory.


```solidity
BaseV2Gauge[] public override gauges;
```


### gaugeIds
Mapping that assigns each gauge an incremental Id for internal use.


```solidity
mapping(BaseV2Gauge => uint256) public override gaugeIds;
```


### activeGauges
Mapping to keep track of active gauges.


```solidity
mapping(BaseV2Gauge => bool) public override activeGauges;
```


### strategyGauges
Associates a strategy address with a gauge.


```solidity
mapping(address => BaseV2Gauge) public override strategyGauges;
```


## Functions
### constructor

Creates a new gauge factory


```solidity
constructor(BaseV2GaugeManager _gaugeManager, bHermesBoost _bHermesBoost, BribesFactory _bribesFactory, address _owner);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_gaugeManager`|`BaseV2GaugeManager`|The gauge manager to use|
|`_bHermesBoost`|`bHermesBoost`|The bHermes boost token to use|
|`_bribesFactory`|`BribesFactory`|The bribes factory to use|
|`_owner`|`address`|The owner of the factory|


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

Function to be called after a new epoch begins.


```solidity
function newEpoch(uint256 start, uint256 end) external;
```

### createGauge

Creates a new gauge for the given strategy


```solidity
function createGauge(address strategy, bytes memory data) external onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`strategy`|`address`|The strategy address to create a gauge for|
|`data`|`bytes`|The information to pass to create a new gauge.|


### afterCreateGauge


```solidity
function afterCreateGauge(address strategy, bytes memory data) internal virtual;
```

### newGauge


```solidity
function newGauge(address strategy, bytes memory data) internal virtual returns (BaseV2Gauge gauge);
```

### removeGauge

Removes a gauge and its underlying strategies from existence.


```solidity
function removeGauge(BaseV2Gauge gauge) external onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`gauge`|`BaseV2Gauge`|gauge address to remove.|


### addBribeToGauge

Adds a new bribe to the gauge if the bribe address is already pre-approved by governance.


```solidity
function addBribeToGauge(BaseV2Gauge gauge, address bribeToken) external onlyOwnerOrBribesFactoryOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`gauge`|`BaseV2Gauge`|address of the gauge to add a new bribe.|
|`bribeToken`|`address`|address of the token to bribe the gauge with.|


### removeBribeFromGauge

Removes a given bribe from a gauge, contingent on the removal being pre-approved by governance.


```solidity
function removeBribeFromGauge(BaseV2Gauge gauge, address bribeToken) external onlyOwnerOrBribesFactoryOwner;
```

### onlyOwnerOrBribesFactoryOwner


```solidity
modifier onlyOwnerOrBribesFactoryOwner();
```

