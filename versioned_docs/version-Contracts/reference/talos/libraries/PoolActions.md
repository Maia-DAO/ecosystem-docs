---
id: PoolActions
title: PoolActions
---

**Author:**
MaiaDAO

This library is created to conduct a variety of swap, burn and add liquidity methods.


## Functions
### swapToEqualAmounts


```solidity
function swapToEqualAmounts(ActionParams memory actionParams, int24 baseThreshold) internal;
```

### rerange


```solidity
function rerange(
    INonfungiblePositionManager nonfungiblePositionManager,
    ActionParams memory actionParams,
    uint24 poolFee
)
    internal
    returns (int24 tickLower, int24 tickUpper, uint256 amount0, uint256 amount1, uint256 tokenId, uint128 liquidity);
```

### getThisPositionTicks


```solidity
function getThisPositionTicks(IUniswapV3Pool pool, ERC20 token0, ERC20 token1, int24 baseThreshold, int24 tickSpacing)
    private
    view
    returns (uint256 balance0, uint256 balance1, int24 tickLower, int24 tickUpper);
```

## Events
### Snapshot
Shows current Optimizer's balances


```solidity
event Snapshot(uint256 totalAmount0, uint256 totalAmount1);
```

## Structs
### SwapCallbackData

```solidity
struct SwapCallbackData {
    bool zeroForOne;
}
```

### ActionParams

```solidity
struct ActionParams {
    IUniswapV3Pool pool;
    ITalosOptimizer optimizer;
    ERC20 token0;
    ERC20 token1;
    int24 tickSpacing;
}
```

