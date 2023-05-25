# PoolVariables

Provides functions for computing liquidity and ticks for token amounts and prices


## State Variables
### GLOBAL_DIVISIONER

```solidity
uint24 private constant GLOBAL_DIVISIONER = 1e6;
```


## Functions
### amountsForLiquidity

*Wrapper around `LiquidityAmounts.getAmountsForLiquidity()`.*


```solidity
function amountsForLiquidity(IUniswapV3Pool pool, uint128 liquidity, int24 _tickLower, int24 _tickUpper)
    internal
    view
    returns (uint256, uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`pool`|`IUniswapV3Pool`|Uniswap V3 pool|
|`liquidity`|`uint128`| The liquidity being valued|
|`_tickLower`|`int24`|The lower tick of the range|
|`_tickUpper`|`int24`|The upper tick of the range|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|amounts of token0 and token1 that corresponds to liquidity|
|`<none>`|`uint256`||


### liquidityForAmounts

*Wrapper around `LiquidityAmounts.getLiquidityForAmounts()`.*


```solidity
function liquidityForAmounts(IUniswapV3Pool pool, uint256 amount0, uint256 amount1, int24 _tickLower, int24 _tickUpper)
    internal
    view
    returns (uint128);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`pool`|`IUniswapV3Pool`|Uniswap V3 pool|
|`amount0`|`uint256`|The amount of token0|
|`amount1`|`uint256`|The amount of token1|
|`_tickLower`|`int24`|The lower tick of the range|
|`_tickUpper`|`int24`|The upper tick of the range|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint128`|The maximum amount of liquidity that can be held amount0 and amount1|


### checkRange

*Common checks for valid tick inputs.*


```solidity
function checkRange(int24 tickLower, int24 tickUpper) internal pure;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`tickLower`|`int24`|The lower tick of the range|
|`tickUpper`|`int24`|The upper tick of the range|


### floor

*Rounds tick down towards negative infinity so that it's a multiple
of `tickSpacing`.*


```solidity
function floor(int24 tick, int24 tickSpacing) internal pure returns (int24);
```

### getPositionTicks

*Gets ticks with proportion equivalent to desired amount*


```solidity
function getPositionTicks(
    IUniswapV3Pool pool,
    uint256 amount0Desired,
    uint256 amount1Desired,
    int24 baseThreshold,
    int24 tickSpacing
) internal view returns (int24 tickLower, int24 tickUpper);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`pool`|`IUniswapV3Pool`|Uniswap V3 pool|
|`amount0Desired`|`uint256`|The desired amount of token0|
|`amount1Desired`|`uint256`|The desired amount of token1|
|`baseThreshold`|`int24`|The range for upper and lower ticks|
|`tickSpacing`|`int24`|The pool tick spacing|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`tickLower`|`int24`|The lower tick of the range|
|`tickUpper`|`int24`|The upper tick of the range|


### amountsForTicks

*Gets amounts of token0 and token1 that can be stored in range of upper and lower ticks*


```solidity
function amountsForTicks(
    IUniswapV3Pool pool,
    uint256 amount0Desired,
    uint256 amount1Desired,
    int24 _tickLower,
    int24 _tickUpper
) internal view returns (uint256 amount0, uint256 amount1);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`pool`|`IUniswapV3Pool`|Uniswap V3 pool|
|`amount0Desired`|`uint256`|The desired amount of token0|
|`amount1Desired`|`uint256`|The desired amount of token1|
|`_tickLower`|`int24`|The lower tick of the range|
|`_tickUpper`|`int24`|The upper tick of the range|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`amount0`|`uint256`|amounts of token0 that can be stored in range|
|`amount1`|`uint256`|amounts of token1 that can be stored in range|


### baseTicks

*Calc base ticks depending on base threshold and tickspacing*


```solidity
function baseTicks(int24 currentTick, int24 baseThreshold, int24 tickSpacing)
    private
    pure
    returns (int24 tickLower, int24 tickUpper);
```

### amountsDirection

*Get imbalanced token*


```solidity
function amountsDirection(uint256 amount0Desired, uint256 amount1Desired, uint256 amount0, uint256 amount1)
    internal
    pure
    returns (bool zeroGreaterOne);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`amount0Desired`|`uint256`|The desired amount of token0|
|`amount1Desired`|`uint256`|The desired amount of token1|
|`amount0`|`uint256`|Amounts of token0 that can be stored in base range|
|`amount1`|`uint256`|Amounts of token1 that can be stored in base range|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`zeroGreaterOne`|`bool`|true if token0 is imbalanced. False if token1 is imbalanced|


### checkDeviation


```solidity
function checkDeviation(IUniswapV3Pool pool, int24 maxTwapDeviation, uint32 twapDuration) public view;
```

### getTwap

*Fetches time-weighted average price in ticks from Uniswap pool for specified duration*


```solidity
function getTwap(IUniswapV3Pool pool, uint32 twapDuration) private view returns (int24);
```

### getSwapToEqualAmountsParams


```solidity
function getSwapToEqualAmountsParams(
    IUniswapV3Pool _pool,
    ITalosOptimizer _strategy,
    int24 _tickSpacing,
    int24 baseThreshold,
    ERC20 _token0,
    ERC20 _token1
) internal returns (bool zeroForOne, int256 amountSpecified, uint160 sqrtPriceLimitX96);
```

## Events
### Snapshot
Shows current Optimizer's balances


```solidity
event Snapshot(uint256 totalAmount0, uint256 totalAmount1);
```

## Errors
### DeviationTooHigh

```solidity
error DeviationTooHigh();
```

### LowerTickMustBeLessThanUpperTick

```solidity
error LowerTickMustBeLessThanUpperTick();
```

### LowerTickMustBeGreaterThanMinTick

```solidity
error LowerTickMustBeGreaterThanMinTick();
```

### UpperTickMustBeLessThanMaxTick

```solidity
error UpperTickMustBeLessThanMaxTick();
```

## Structs
### Info

```solidity
struct Info {
    uint256 amount0Desired;
    uint256 amount1Desired;
    uint256 amount0;
    uint256 amount1;
    uint128 liquidity;
    int24 tickLower;
    int24 tickUpper;
}
```

