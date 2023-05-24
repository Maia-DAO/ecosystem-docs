# BaseV2GaugeManager
[Git Source](https://github.com/Maia-DAO/test-env-V2/blob/84b5f9e8695c91ddb02f27bb3dfb1c652f55ced4/gauges/factories/BaseV2GaugeManager.sol)

**Inherits:**
Ownable, [IBaseV2GaugeManager](/gauges/interfaces/IBaseV2GaugeManager.sol/interface.IBaseV2GaugeManager.md)


## State Variables
### admin
Address that holds admin power over the contract.


```solidity
address public admin;
```


### bHermesGaugeWeight
Represent the underlying gauge voting power of bHermes.


```solidity
bHermesGauges public immutable bHermesGaugeWeight;
```


### bHermesGaugeBoost
Represents the boosting power of bHermes.


```solidity
bHermesBoost public immutable bHermesGaugeBoost;
```


### gaugeFactories
Array that holds every gauge factory.


```solidity
BaseV2GaugeFactory[] public gaugeFactories;
```


### gaugeFactoryIds
Maps each gauge factory to an incremental id.


```solidity
mapping(BaseV2GaugeFactory => uint256) public gaugeFactoryIds;
```


### activeGaugeFactories
Holds all the active gauge factories.


```solidity
mapping(BaseV2GaugeFactory => bool) public activeGaugeFactories;
```


## Functions
### constructor

Initializes Base V2 Gauge Factory Manager contract.


```solidity
constructor(bHermes _bHermes, address _owner, address _admin);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_bHermes`|`bHermes`|bHermes contract|
|`_owner`|`address`|can add BaseV2GaugeFactories.|
|`_admin`|`address`|can transfer ownership of bHermesWeight and bHermesBoost.|


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

Function to call at the beginning of every epoch.


```solidity
function newEpoch(uint256 start, uint256 end) external;
```

### addGauge

Adds a gauge to a bhermes position.


```solidity
function addGauge(address gauge) external onlyActiveGaugeFactory;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`gauge`|`address`|gauge address to add.|


### removeGauge

Removes a gauge to a bhermes position.


```solidity
function removeGauge(address gauge) external onlyActiveGaugeFactory;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`gauge`|`address`|gauge address to remove.|


### addGaugeFactory

Adds a gauge factory to the manager.


```solidity
function addGaugeFactory(BaseV2GaugeFactory gaugeFactory) external onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`gaugeFactory`|`BaseV2GaugeFactory`|gauge factory address to add to the manager.|


### removeGaugeFactory

Removes a gauge factory from the manager.


```solidity
function removeGaugeFactory(BaseV2GaugeFactory gaugeFactory) external onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`gaugeFactory`|`BaseV2GaugeFactory`|gauge factory address to remove to the manager.|


### changebHermesGaugeOwner

Changes the ownership of the bHermes gauge boost and gauge weight properties.


```solidity
function changebHermesGaugeOwner(address newOwner) external onlyAdmin;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newOwner`|`address`|address of the new owner.|


### changeAdmin

Changes the admin powers of the manager.


```solidity
function changeAdmin(address newAdmin) external onlyAdmin;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newAdmin`|`address`|address of the new admin.|


### onlyActiveGaugeFactory


```solidity
modifier onlyActiveGaugeFactory();
```

### onlyAdmin


```solidity
modifier onlyAdmin();
```

