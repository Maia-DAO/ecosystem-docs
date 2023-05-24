# DeployVanilla
[Git Source](https://github.com/Maia-DAO/test-env-V2/blob/84b5f9e8695c91ddb02f27bb3dfb1c652f55ced4/talos/TalosStrategyVanilla.sol)

This library deploys talos vanilla strategies


## Functions
### createTalosV3Vanilla


```solidity
function createTalosV3Vanilla(
    IUniswapV3Pool pool,
    ITalosOptimizer optimizer,
    INonfungiblePositionManager nonfungiblePositionManager,
    address strategyManager,
    address owner
) public returns (TalosBaseStrategy);
```

