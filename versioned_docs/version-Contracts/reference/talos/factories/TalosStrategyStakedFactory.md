---
id: TalosStrategyStakedFactory
title: TalosStrategyStakedFactory
---

**Inherits:**
[TalosBaseStrategyFactory](/talos/factories/TalosBaseStrategyFactory.sol/abstract.TalosBaseStrategyFactory.md), [ITalosStrategyStakedFactory](/talos/interfaces/ITalosStrategyStakedFactory.sol/interface.ITalosStrategyStakedFactory.md)


## State Variables
### boostAggregatorFactory
The boostAggregator to stake NFTs in Uniswap V3 Staker


```solidity
BoostAggregatorFactory public immutable boostAggregatorFactory;
```


### flywheel
flywheel core responsible for assigning strategy rewards
to its respective users.


```solidity
FlywheelCoreInstant public immutable flywheel;
```


### rewards
flywheel core responsible for assigning strategy rewards
to its respective users.


```solidity
FlywheelInstantRewards public immutable rewards;
```


## Functions
### constructor

Construct a new Talos Strategy Staked Factory


```solidity
constructor(
    INonfungiblePositionManager _nonfungiblePositionManager,
    OptimizerFactory _optimizerFactory,
    BoostAggregatorFactory _boostAggregatorFactory
) TalosBaseStrategyFactory(_nonfungiblePositionManager, _optimizerFactory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_nonfungiblePositionManager`|`INonfungiblePositionManager`|The Uniswap V3 NFT Manager|
|`_optimizerFactory`|`OptimizerFactory`|The Optimizer Factory|
|`_boostAggregatorFactory`|`BoostAggregatorFactory`|The Boost Aggregator Factory|


### createTalosV3Strategy

Internal function responsible for creating a new Talos Strategy


```solidity
function createTalosV3Strategy(
    IUniswapV3Pool pool,
    ITalosOptimizer optimizer,
    address strategyManager,
    bytes memory data
) internal override returns (TalosBaseStrategy strategy);
```

