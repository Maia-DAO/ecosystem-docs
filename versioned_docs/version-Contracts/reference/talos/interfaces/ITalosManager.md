---
id: ITalosManager
title: ITalosManager
---

**Inherits:**
[AutomationCompatibleInterface](/talos/interfaces/AutomationCompatibleInterface.sol/interface.AutomationCompatibleInterface.md)

TalosManager is a Uniswap V3 yield enhancement contract which acts as
intermediary between the user who wants to provide liquidity to specific pools
and earn fees from such actions. The contract ensures that user position is in
range and earns the maximum amount of fees available at current liquidity
utilization rate.


## Functions
### ticksFromLowerRebalance

ticks from lower range to rebalance


```solidity
function ticksFromLowerRebalance() external view returns (int24);
```

### ticksFromUpperRebalance

ticks from upper range to rebalance


```solidity
function ticksFromUpperRebalance() external view returns (int24);
```

### ticksFromLowerRerange

ticks from lower range to rerange


```solidity
function ticksFromLowerRerange() external view returns (int24);
```

### ticksFromUpperRerange

ticks from upper range to rerange


```solidity
function ticksFromUpperRerange() external view returns (int24);
```

### strategy

TALOS strategy to rebalance or rerange


```solidity
function strategy() external view returns (ITalosBaseStrategy);
```

