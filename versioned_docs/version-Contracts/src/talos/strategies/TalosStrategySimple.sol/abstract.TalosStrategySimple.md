# TalosStrategySimple
[Git Source](https://github.com/Maia-DAO/test-env-V2/blob/84b5f9e8695c91ddb02f27bb3dfb1c652f55ced4/talos/strategies/TalosStrategySimple.sol)

**Inherits:**
[TalosBaseStrategy](/talos/base/TalosBaseStrategy.sol/abstract.TalosBaseStrategy.md)

**Author:**
Maia DAO (https://github.com/Maia-DAO)


## Functions
### constructor


```solidity
constructor(
    IUniswapV3Pool _pool,
    ITalosOptimizer _strategy,
    INonfungiblePositionManager _nonfungiblePositionManager,
    address _strategyManager,
    address _owner
) TalosBaseStrategy(_pool, _strategy, _nonfungiblePositionManager, _strategyManager, _owner);
```

### doRerange


```solidity
function doRerange() internal override returns (uint256 amount0, uint256 amount1);
```

### doRebalance


```solidity
function doRebalance() internal override returns (uint256 amount0, uint256 amount1);
```

