---
id: TalosStrategyVanillaFactory
title: TalosStrategyVanillaFactory
---

**Inherits:**
[TalosBaseStrategyFactory](/talos/factories/TalosBaseStrategyFactory.sol/abstract.TalosBaseStrategyFactory.md)


## Functions
### constructor

Construct a new Talos Strategy Vanilla Factory


```solidity
constructor(INonfungiblePositionManager _nonfungiblePositionManager, OptimizerFactory _optimizerFactory)
    TalosBaseStrategyFactory(_nonfungiblePositionManager, _optimizerFactory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_nonfungiblePositionManager`|`INonfungiblePositionManager`|The Uniswap V3 NFT Manager|
|`_optimizerFactory`|`OptimizerFactory`|The Optimizer Factory|


### createTalosV3Strategy

Internal function responsible for creating a new Talos Strategy


```solidity
function createTalosV3Strategy(IUniswapV3Pool pool, ITalosOptimizer optimizer, address strategyManager, bytes memory)
    internal
    override
    returns (TalosBaseStrategy);
```

