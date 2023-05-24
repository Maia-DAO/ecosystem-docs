# IERC20Gauges
[Git Source](https://github.com/Maia-DAO/test-env-V2/blob/84b5f9e8695c91ddb02f27bb3dfb1c652f55ced4/erc-20/interfaces/IERC20Gauges.sol)

**Author:**
Maia DAO (https://github.com/Maia-DAO)

This contract is meant to be used to support gauge style votes with weights associated with resource allocation.
Only after delegating to himself can a user allocate weight to a gauge.
Holders can allocate weight in any proportion to supported gauges.
A "gauge" is represented by an address that would receive the resources periodically or continuously.
For example, gauges can be used to direct token emissions, similar to Curve or Hermes V1.
Alternatively, gauges can be used to direct another quantity such as relative access to a line of credit.
The contract's Ownable <https://github.com/Vectorized/solady/blob/main/auth/Ownable.sol> manages the gauge set and cap.
"Live" gauges are in the set.
Users can only add weight to live gauges but can remove weight from live or deprecated gauges.
Gauges can be deprecated and reinstated; and will maintain any non-removed weight from before.

*SECURITY NOTES: `maxGauges` is a critical variable to protect against gas DOS attacks upon token transfer.
This must be low enough to allow complicated transactions to fit in a block.
Weight state is preserved on the gauge and user level even when a gauge is removed, in case it is re-added.
This maintains the state efficiently, and global accounting is managed only on the `_totalWeight`*


## Functions
### getUserWeight

a mapping from a user to their total allocated weight across all gauges


```solidity
function getUserWeight(address) external view returns (uint112);
```

### gaugeCycleLength

the length of a gauge cycle


```solidity
function gaugeCycleLength() external view returns (uint32);
```

### incrementFreezeWindow

the period at the end of a cycle where votes cannot increment


```solidity
function incrementFreezeWindow() external view returns (uint32);
```

### getUserGaugeWeight

a mapping from users to gauges to a user's allocated weight to that gauge


```solidity
function getUserGaugeWeight(address, address) external view returns (uint112);
```

### getGaugeCycleEnd

returns the end of the current cycle. This is the next unix timestamp which evenly divides `gaugeCycleLength`


```solidity
function getGaugeCycleEnd() external view returns (uint32);
```

### getGaugeWeight

returns the current weight of a given gauge


```solidity
function getGaugeWeight(address gauge) external view returns (uint112);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`gauge`|`address`|address of the gauge to get the weight from|


### getStoredGaugeWeight

returns the stored weight of a given gauge. This is the snapshotted weight as-of the end of the last cycle.


```solidity
function getStoredGaugeWeight(address gauge) external view returns (uint112);
```

### totalWeight

returns the current total allocated weight


```solidity
function totalWeight() external view returns (uint112);
```

### storedTotalWeight

returns the stored total allocated weight


```solidity
function storedTotalWeight() external view returns (uint112);
```

### gauges

returns the set of live gauges


```solidity
function gauges() external view returns (address[] memory);
```

### gauges

returns a paginated subset of live gauges


```solidity
function gauges(uint256 offset, uint256 num) external view returns (address[] memory values);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`offset`|`uint256`|the index of the first gauge element to read|
|`num`|`uint256`|the number of gauges to return|


### isGauge

returns true if `gauge` is not in deprecated gauges


```solidity
function isGauge(address gauge) external view returns (bool);
```

### numGauges

returns the number of live gauges


```solidity
function numGauges() external view returns (uint256);
```

### deprecatedGauges

returns the set of previously live but now deprecated gauges


```solidity
function deprecatedGauges() external view returns (address[] memory);
```

### numDeprecatedGauges

returns the number of live gauges


```solidity
function numDeprecatedGauges() external view returns (uint256);
```

### userGauges

returns the set of gauges the user has allocated to, may be live or deprecated.


```solidity
function userGauges(address user) external view returns (address[] memory);
```

### isUserGauge

returns true if `gauge` is in user gauges


```solidity
function isUserGauge(address user, address gauge) external view returns (bool);
```

### userGauges

returns a paginated subset of gauges the user has allocated to, may be live or deprecated.


```solidity
function userGauges(address user, uint256 offset, uint256 num) external view returns (address[] memory values);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`user`|`address`|the user to return gauges from.|
|`offset`|`uint256`|the index of the first gauge element to read.|
|`num`|`uint256`|the number of gauges to return.|


### numUserGauges

returns the number of user gauges


```solidity
function numUserGauges(address user) external view returns (uint256);
```

### calculateGaugeAllocation

helper function for calculating the proportion of a `quantity` allocated to a gauge


```solidity
function calculateGaugeAllocation(address gauge, uint256 quantity) external view returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`gauge`|`address`|the gauge to calculate the allocation of|
|`quantity`|`uint256`|a representation of a resource to be shared among all gauges|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|the proportion of `quantity` allocated to `gauge`. Returns 0 if a gauge is not live, even if it has weight.|


### incrementGauge

increment a gauge with some weight for the caller


```solidity
function incrementGauge(address gauge, uint112 weight) external returns (uint112 newUserWeight);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`gauge`|`address`|the gauge to increment|
|`weight`|`uint112`|the amount of weight to increment on a gauge|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`newUserWeight`|`uint112`|the new user weight|


### incrementGauges

increment a list of gauges with some weights for the caller


```solidity
function incrementGauges(address[] memory gaugeList, uint112[] memory weights)
    external
    returns (uint256 newUserWeight);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`gaugeList`|`address[]`|the gauges to increment|
|`weights`|`uint112[]`|the weights to increment by|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`newUserWeight`|`uint256`|the new user weight|


### decrementGauge

decrement a gauge with some weight for the caller


```solidity
function decrementGauge(address gauge, uint112 weight) external returns (uint112 newUserWeight);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`gauge`|`address`|the gauge to decrement|
|`weight`|`uint112`|the amount of weight to decrement on a gauge|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`newUserWeight`|`uint112`|the new user weight|


### decrementGauges

decrement a list of gauges with some weights for the caller


```solidity
function decrementGauges(address[] memory gaugeList, uint112[] memory weights)
    external
    returns (uint112 newUserWeight);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`gaugeList`|`address[]`|the gauges to decrement|
|`weights`|`uint112[]`|the list of weights to decrement on the gauges|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`newUserWeight`|`uint112`|the new user weight|


### maxGauges

the default maximum amount of gauges a user can allocate to.

*if this number is ever lowered, or a contract has an override, then existing addresses MAY have more gauges allocated to. Use `numUserGauges` to check this.*


```solidity
function maxGauges() external view returns (uint256);
```

### canContractExceedMaxGauges

an approved list for contracts to go above the max gauge limit.


```solidity
function canContractExceedMaxGauges(address) external view returns (bool);
```

### addGauge

add a new gauge. Requires auth by `authority`.


```solidity
function addGauge(address gauge) external returns (uint112);
```

### removeGauge

remove a new gauge. Requires auth by `authority`.


```solidity
function removeGauge(address gauge) external;
```

### replaceGauge

replace a gauge. Requires auth by `authority`.


```solidity
function replaceGauge(address oldGauge, address newGauge) external;
```

### setMaxGauges

set the new max gauges. Requires auth by `authority`.

*if this is set to a lower number than the current max, users MAY have more gauges active than the max. Use `numUserGauges` to check this.*


```solidity
function setMaxGauges(uint256 newMax) external;
```

### setContractExceedMaxGauges

set the canContractExceedMaxGauges flag for an account.


```solidity
function setContractExceedMaxGauges(address account, bool canExceedMax) external;
```

## Events
### IncrementGaugeWeight
emitted when incrementing a gauge


```solidity
event IncrementGaugeWeight(address indexed user, address indexed gauge, uint256 weight, uint32 cycleEnd);
```

### DecrementGaugeWeight
emitted when decrementing a gauge


```solidity
event DecrementGaugeWeight(address indexed user, address indexed gauge, uint256 weight, uint32 cycleEnd);
```

### AddGauge
emitted when adding a new gauge to the live set.


```solidity
event AddGauge(address indexed gauge);
```

### RemoveGauge
emitted when removing a gauge from the live set.


```solidity
event RemoveGauge(address indexed gauge);
```

### MaxGaugesUpdate
emitted when updating the max number of gauges a user can delegate to.


```solidity
event MaxGaugesUpdate(uint256 oldMaxGauges, uint256 newMaxGauges);
```

### CanContractExceedMaxGaugesUpdate
emitted when changing a contract's approval to go over the max gauges.


```solidity
event CanContractExceedMaxGaugesUpdate(address indexed account, bool canContractExceedMaxGauges);
```

## Errors
### SizeMismatchError
thrown when trying to increment/decrement a mismatched number of gauges and weights.


```solidity
error SizeMismatchError();
```

### MaxGaugeError
thrown when trying to increment over the max allowed gauges.


```solidity
error MaxGaugeError();
```

### OverWeightError
thrown when incrementing over a user's free weight.


```solidity
error OverWeightError();
```

### IncrementFreezeError
thrown when incrementing during the frozen window.


```solidity
error IncrementFreezeError();
```

### InvalidGaugeError
thrown when trying to increment or remove a non-live gauge, or add a live gauge.


```solidity
error InvalidGaugeError();
```

## Structs
### Weight
a struct representing a user's weight allocation to a gauge


```solidity
struct Weight {
    uint112 storedWeight;
    uint112 currentWeight;
    uint32 currentCycle;
}
```

