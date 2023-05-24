# FlywheelGaugeRewards
[Git Source](https://github.com/Maia-DAO/test-env-V2/blob/84b5f9e8695c91ddb02f27bb3dfb1c652f55ced4/rewards/rewards/FlywheelGaugeRewards.sol)

**Inherits:**
Ownable, [IFlywheelGaugeRewards](/rewards/interfaces/IFlywheelGaugeRewards.sol/interface.IFlywheelGaugeRewards.md)


## State Variables
### gaugeToken
the gauge token for determining gauge allocations of the rewards stream


```solidity
ERC20Gauges public immutable override gaugeToken;
```


### minter
the minter contract, is a rewardsStream to collect rewards from


```solidity
IBaseV2Minter public immutable minter;
```


### rewardToken
the rewards token for this flywheel rewards contract


```solidity
address public immutable override rewardToken;
```


### gaugeCycle
the start of the current cycle


```solidity
uint32 public override gaugeCycle;
```


### gaugeCycleLength
the length of a gauge/rewards cycle


```solidity
uint32 public immutable override gaugeCycleLength;
```


### gaugeQueuedRewards
mapping from gauges to queued rewards


```solidity
mapping(ERC20 => QueuedRewards) public override gaugeQueuedRewards;
```


### nextCycle
the start of the next cycle being partially queued


```solidity
uint32 internal nextCycle;
```


### nextCycleQueuedRewards

```solidity
uint112 internal nextCycleQueuedRewards;
```


### paginationOffset

```solidity
uint32 internal paginationOffset;
```


## Functions
### constructor


```solidity
constructor(address _rewardToken, address _owner, ERC20Gauges _gaugeToken, IBaseV2Minter _minter);
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

*Update minter cycle and queue rewars if needed.
This will make this call fail if it is a new epoch, because the minter calls this function, the first call would fail with "CycleError()".
Should be called through Minter to kickoff new epoch.*


```solidity
function queueRewardsForCyclePaginated(uint256 numRewards) external;
```

### _queueRewards

Queues the rewards for the next cycle for each given gauge.

*Update minter cycle and queue rewars if needed.
This will make this call fail if it is a new epoch, because the minter calls this function, the first call would fail with "CycleError()".
Should be called through Minter to kickoff new epoch.*


```solidity
function _queueRewards(address[] memory gauges, uint32 currentCycle, uint32 lastCycle, uint256 totalQueuedForCycle)
    internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`gauges`|`address[]`|array of gauges addresses to queue rewards for.|
|`currentCycle`|`uint32`|timestamp representing the beginning of the new cycle.|
|`lastCycle`|`uint32`|timestamp representing the end of the of the last cycle.|
|`totalQueuedForCycle`|`uint256`|total number of rewards queued for the next cycle.|


### getAccruedRewards

calculate and transfer accrued rewards to flywheel core

*msg.sender is the gauge to accrue rewards for*


```solidity
function getAccruedRewards() external returns (uint256 accruedRewards);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`accruedRewards`|`uint256`|amount amounts of tokens accrued and transferred|


