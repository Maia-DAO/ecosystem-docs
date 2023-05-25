---
id: TalosManager
title: TalosManager
---

**Inherits:**
[AutomationCompatibleInterface](/talos/interfaces/AutomationCompatibleInterface.sol/interface.AutomationCompatibleInterface.md), [ITalosManager](/talos/interfaces/ITalosManager.sol/interface.ITalosManager.md)


## State Variables
### ticksFromLowerRebalance
ticks from lower range to rebalance


```solidity
int24 public immutable ticksFromLowerRebalance;
```


### ticksFromUpperRebalance
ticks from upper range to rebalance


```solidity
int24 public immutable ticksFromUpperRebalance;
```


### ticksFromLowerRerange
ticks from lower range to rerange


```solidity
int24 public immutable ticksFromLowerRerange;
```


### ticksFromUpperRerange
ticks from upper range to rerange


```solidity
int24 public immutable ticksFromUpperRerange;
```


### strategy
TALOS strategy to rebalance or rerange


```solidity
ITalosBaseStrategy public immutable strategy;
```


## Functions
### constructor

Construct a new Talos Strategy Manager contract.


```solidity
constructor(
    address _strategy,
    int24 _ticksFromLowerRebalance,
    int24 _ticksFromUpperRebalance,
    int24 _ticksFromLowerRerange,
    int24 _ticksFromUpperRerange
);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_strategy`|`address`|Strategy to manage.|
|`_ticksFromLowerRebalance`|`int24`|Ticks from lower tick to rebalance.|
|`_ticksFromUpperRebalance`|`int24`|Ticks from upper tick to rebalance.|
|`_ticksFromLowerRerange`|`int24`|Ticks from lower tick to rerange.|
|`_ticksFromUpperRerange`|`int24`|Ticks from upper tick to rerange.|


### getRebalance

Returns true if strategy needs to be rebalanced

*Checks if current tick is in range, returns true if not*


```solidity
function getRebalance(ITalosBaseStrategy position) private view returns (bool);
```

### getRerange

Returns true if strategy needs to be reranged

*Checks if current tick is in range, returns true if not*


```solidity
function getRerange(ITalosBaseStrategy position) private view returns (bool);
```

### checkUpkeep

method that is simulated by the keepers to see if any work actually
needs to be performed. This method does does not actually need to be
executable, and since it is only ever simulated it can consume lots of gas.

*To ensure that it is never called, you may want to add the
cannotExecute modifier from KeeperBase to your implementation of this
method.*


```solidity
function checkUpkeep(bytes calldata) external view override returns (bool upkeepNeeded, bytes memory performData);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes`||

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`upkeepNeeded`|`bool`|boolean to indicate whether the keeper should call performUpkeep or not.|
|`performData`|`bytes`|bytes that the keeper should call performUpkeep with, if upkeep is needed. If you would like to encode data to decode later, try `abi.encode`.|


### performUpkeep

Rebalances or Reranges an Optimizer's positions.

*The input to this method should not be trusted, and the caller of the
method should not even be restricted to any single registry. Anyone should
be able call it, and the input should be validated, there is no guarantee
that the data passed in is the performData returned from checkUpkeep. This
could happen due to malicious keepers, racing keepers, or simply a state
change while the performUpkeep transaction is waiting for confirmation.
Always validate the data passed in.*


```solidity
function performUpkeep(bytes calldata) external override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes`||


