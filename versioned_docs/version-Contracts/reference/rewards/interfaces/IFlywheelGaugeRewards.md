---
id: IFlywheelGaugeRewards
title: IFlywheelGaugeRewards
---

**Author:**
Maia DAO (https://github.com/Maia-DAO)

Distributes rewards from a stream based on gauge weights
The contract assumes an arbitrary stream of rewards `S` of the rewardToken. It chunks the rewards into cycles of length `l`.
The allocation function for each cycle A(g, S) proportions the stream to each gauge such that SUM(A(g, S)) over all gauges <= S.
NOTE it should be approximately S, but may be less due to truncation.
Rewards are accumulated every time a new rewards cycle begins, and all prior rewards are cached in the previous cycle.
When the Flywheel Core requests accrued rewards for a specific gauge:
1. All prior rewards before this cycle are distributed
2. Rewards for the current cycle are distributed proportionally to the remaining time in the cycle.
If `e` is the cycle end, `t` is the min of e and current timestamp, and `p` is the prior updated time:
For `A` accrued rewards over the cycle, distribute `min(A * (t-p)/(e-p), A)`.


## Functions
### gaugeToken

the gauge token for determining gauge allocations of the rewards stream


```solidity
function gaugeToken() external view returns (ERC20Gauges);
```

### rewardToken

the rewards token for this flywheel rewards contract


```solidity
function rewardToken() external view returns (address);
```

### gaugeCycle

the start of the current cycle


```solidity
function gaugeCycle() external view returns (uint32);
```

### gaugeCycleLength

the length of a gauge/rewards cycle


```solidity
function gaugeCycleLength() external view returns (uint32);
```

### gaugeQueuedRewards

mapping from gauges to queued rewards


```solidity
function gaugeQueuedRewards(ERC20)
    external
    view
    returns (uint112 priorCycleRewards, uint112 cycleRewards, uint32 storedCycle);
```

### queueRewardsForCycle

Iterates over all live gauges and queues up the rewards for the cycle


```solidity
function queueRewardsForCycle() external returns (uint256 totalQueuedForCycle);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`totalQueuedForCycle`|`uint256`|the max amount of rewards to be distributed over the cycle|


### queueRewardsForCyclePaginated

Iterates over all live gauges and queues up the rewards for the cycle


```solidity
function queueRewardsForCyclePaginated(uint256 numRewards) external;
```

### getAccruedRewards

calculate and transfer accrued rewards to flywheel core

*msg.sender is the gauge to accrue rewards for*


```solidity
function getAccruedRewards() external returns (uint256 amount);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`amount`|`uint256`|amounts of tokens accrued and transferred|


## Events
### CycleStart
emitted when a cycle has completely queued and started


```solidity
event CycleStart(uint32 indexed cycleStart, uint256 rewardAmount);
```

### QueueRewards
emitted when a single gauge is queued. May be emitted before the cycle starts if the queue is done via pagination.


```solidity
event QueueRewards(address indexed gauge, uint32 indexed cycleStart, uint256 rewardAmount);
```

## Errors
### CycleError
thrown when trying to queue a new cycle during an old one.


```solidity
error CycleError();
```

### EmptyGaugesError
thrown when trying to queue with 0 gauges


```solidity
error EmptyGaugesError();
```

## Structs
### QueuedRewards
rewards queued from prior and current cycles


```solidity
struct QueuedRewards {
    uint112 priorCycleRewards;
    uint112 cycleRewards;
    uint32 storedCycle;
}
```

