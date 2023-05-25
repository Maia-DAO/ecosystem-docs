---
id: ERC20Gauges
title: ERC20Gauges
---

**Inherits:**
[ERC20MultiVotes](/erc-20/ERC20MultiVotes.sol/abstract.ERC20MultiVotes.md), ReentrancyGuard, [IERC20Gauges](/erc-20/interfaces/IERC20Gauges.sol/interface.IERC20Gauges.md)


## State Variables
### gaugeCycleLength
the length of a gauge cycle


```solidity
uint32 public immutable override gaugeCycleLength;
```


### incrementFreezeWindow
the period at the end of a cycle where votes cannot increment


```solidity
uint32 public immutable override incrementFreezeWindow;
```


### getUserGaugeWeight
a mapping from users to gauges to a user's allocated weight to that gauge


```solidity
mapping(address => mapping(address => uint112)) public override getUserGaugeWeight;
```


### getUserWeight
a mapping from a user to their total allocated weight across all gauges

*NOTE this may contain weights for deprecated gauges*


```solidity
mapping(address => uint112) public override getUserWeight;
```


### _getGaugeWeight
a mapping from a gauge to the total weight allocated to it

*NOTE this may contain weights for deprecated gauges*


```solidity
mapping(address => Weight) internal _getGaugeWeight;
```


### _totalWeight
the total global allocated weight ONLY of live gauges


```solidity
Weight internal _totalWeight;
```


### _userGauges

```solidity
mapping(address => EnumerableSet.AddressSet) internal _userGauges;
```


### _gauges

```solidity
EnumerableSet.AddressSet internal _gauges;
```


### _deprecatedGauges

```solidity
EnumerableSet.AddressSet internal _deprecatedGauges;
```


### maxGauges
the default maximum amount of gauges a user can allocate to.

*if this number is ever lowered, or a contract has an override, then existing addresses MAY have more gauges allocated to. Use `numUserGauges` to check this.*


```solidity
uint256 public override maxGauges;
```


### canContractExceedMaxGauges
an approved list for contracts to go above the max gauge limit.


```solidity
mapping(address => bool) public override canContractExceedMaxGauges;
```


## Functions
### constructor

Construct a new ERC20Gauges


```solidity
constructor(uint32 _gaugeCycleLength, uint32 _incrementFreezeWindow);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_gaugeCycleLength`|`uint32`|the length of a gauge cycle in seconds|
|`_incrementFreezeWindow`|`uint32`|the length of the grace period in seconds|


### getGaugeCycleEnd

returns the end of the current cycle. This is the next unix timestamp which evenly divides `gaugeCycleLength`


```solidity
function getGaugeCycleEnd() external view returns (uint32);
```

### _getGaugeCycleEnd


```solidity
function _getGaugeCycleEnd() internal view returns (uint32);
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

### _getStoredWeight


```solidity
function _getStoredWeight(Weight storage gaugeWeight, uint32 currentCycle) internal view returns (uint112);
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

returns the set of live gauges


```solidity
function gauges(uint256 offset, uint256 num) external view returns (address[] memory values);
```

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

returns the set of gauges the user has allocated to, may be live or deprecated.


```solidity
function userGauges(address user, uint256 offset, uint256 num) external view returns (address[] memory values);
```

### numUserGauges

returns the number of user gauges


```solidity
function numUserGauges(address user) external view returns (uint256);
```

### userUnusedVotes


```solidity
function userUnusedVotes(address user) public view override returns (uint256);
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
function incrementGauge(address gauge, uint112 weight) external nonReentrant returns (uint112 newUserWeight);
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


### _incrementGaugeWeight

Increment the weight of a gauge for a user

*This function calls accrueBribes for the gauge to ensure the gauge handles the balance change.*


```solidity
function _incrementGaugeWeight(address user, address gauge, uint112 weight, uint32 cycle) internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`user`|`address`|the user to increment the weight of|
|`gauge`|`address`|the gauge to increment the weight of|
|`weight`|`uint112`|the weight to increment by|
|`cycle`|`uint32`|the cycle to increment the weight for|


### _incrementUserAndGlobalWeights

Increment the weight of a gauge for a user and the total weight


```solidity
function _incrementUserAndGlobalWeights(address user, uint112 weight, uint32 cycle)
    internal
    returns (uint112 newUserWeight);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`user`|`address`|the user to increment the weight of|
|`weight`|`uint112`|the weight to increment by|
|`cycle`|`uint32`|the cycle to increment the weight for|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`newUserWeight`|`uint112`|the new user's weight|


### incrementGauges

increment a list of gauges with some weights for the caller


```solidity
function incrementGauges(address[] calldata gaugeList, uint112[] calldata weights)
    external
    nonReentrant
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
function decrementGauge(address gauge, uint112 weight) external nonReentrant returns (uint112 newUserWeight);
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


### _decrementGaugeWeight

Decrement the weight of a gauge for a user

*This function calls accrueBribes for the gauge to ensure the gauge handles the balance change.*


```solidity
function _decrementGaugeWeight(address user, address gauge, uint112 weight, uint32 cycle) internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`user`|`address`|the user to decrement the weight of|
|`gauge`|`address`|the gauge to decrement the weight of|
|`weight`|`uint112`|the weight to decrement by|
|`cycle`|`uint32`|the cycle to decrement the weight for|


### _decrementUserWeights

Decrement the weight of a gauge for a user and the total weight


```solidity
function _decrementUserWeights(address user, uint112 weight) internal returns (uint112 newUserWeight);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`user`|`address`|the user to decrement the weight of|
|`weight`|`uint112`|the weight to decrement by|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`newUserWeight`|`uint112`|the new user's weight|


### decrementGauges

decrement a list of gauges with some weights for the caller


```solidity
function decrementGauges(address[] calldata gaugeList, uint112[] calldata weights)
    external
    nonReentrant
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


### _writeGaugeWeight

*this function is the key to the entire contract.
The storage weight it operates on is either a global or gauge-specific weight.
The operation applied is either addition for incrementing gauges or subtraction for decrementing a gauge.*


```solidity
function _writeGaugeWeight(
    Weight storage weight,
    function(uint112, uint112) view returns (uint112) op,
    uint112 delta,
    uint32 cycle
) private;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`weight`|`Weight`|the weight to apply the operation to|
|`op`|`function (uint112, uint112) view returns (uint112)`|the operation to apply|
|`delta`|`uint112`|the amount to apply the operation by|
|`cycle`|`uint32`|the cycle to apply the operation for|


### _add112


```solidity
function _add112(uint112 a, uint112 b) private pure returns (uint112);
```

### _subtract112


```solidity
function _subtract112(uint112 a, uint112 b) private pure returns (uint112);
```

### addGauge

add a new gauge. Requires auth by `authority`.


```solidity
function addGauge(address gauge) external onlyOwner returns (uint112);
```

### _addGauge

Add a gauge to the contract


```solidity
function _addGauge(address gauge) internal returns (uint112 weight);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`gauge`|`address`|the gauge to add|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`weight`|`uint112`|the previous weight of the gauge, if it was already added|


### removeGauge

remove a new gauge. Requires auth by `authority`.


```solidity
function removeGauge(address gauge) external onlyOwner;
```

### _removeGauge

Remove a gauge from the contract


```solidity
function _removeGauge(address gauge) internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`gauge`|`address`|the gauge to remove|


### replaceGauge

replace a gauge. Requires auth by `authority`.


```solidity
function replaceGauge(address oldGauge, address newGauge) external onlyOwner;
```

### setMaxGauges

set the new max gauges. Requires auth by `authority`.

*if this is set to a lower number than the current max, users MAY have more gauges active than the max. Use `numUserGauges` to check this.*


```solidity
function setMaxGauges(uint256 newMax) external onlyOwner;
```

### setContractExceedMaxGauges

set the canContractExceedMaxGauges flag for an account.


```solidity
function setContractExceedMaxGauges(address account, bool canExceedMax) external onlyOwner;
```

### _burn

NOTE: any "removal" of tokens from a user requires userUnusedVotes < amount.
_decrementWeightUntilFree is called as a greedy algorithm to free up weight.
It may be more gas efficient to free weight before burning or transferring tokens.

Burns `amount` of tokens from `from` address.

*Frees weights and votes with a greedy algorithm if needed to burn tokens*


```solidity
function _burn(address from, uint256 amount) internal virtual override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`from`|`address`|The address to burn tokens from.|
|`amount`|`uint256`|The amount of tokens to burn.|


### transfer

Transfers `amount` of tokens from `msg.sender` to `to` address.

*Frees weights and votes with a greedy algorithm if needed to burn tokens*


```solidity
function transfer(address to, uint256 amount) public virtual override returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`to`|`address`|the address to transfer to.|
|`amount`|`uint256`|the amount to transfer.|


### transferFrom

Transfers `amount` of tokens from `from` address to `to` address.

*Frees weights and votes with a greedy algorithm if needed to burn tokens*


```solidity
function transferFrom(address from, address to, uint256 amount) public virtual override returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`from`|`address`|the address to transfer from.|
|`to`|`address`|the address to transfer to.|
|`amount`|`uint256`|the amount to transfer.|


### _decrementWeightUntilFree

A greedy algorithm for freeing weight before a token burn/transfer

*Frees up entire gauges, so likely will free more than `weight`*


```solidity
function _decrementWeightUntilFree(address user, uint256 weight) internal nonReentrant;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`user`|`address`|the user to free weight for|
|`weight`|`uint256`|the weight to free|


