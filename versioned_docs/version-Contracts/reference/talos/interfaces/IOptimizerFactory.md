---
id: IOptimizerFactory
title: IOptimizerFactory
---

**Author:**
Maia DAO (https://github.com/Maia-DAO)

This contract is responsible for creating new Talos Optimizers.


## Functions
### optimizers

list of all created optimizers


```solidity
function optimizers(uint256) external view returns (TalosOptimizer);
```

### optimizerIds

mapping of optimizer to its index in the optimizers array


```solidity
function optimizerIds(TalosOptimizer) external view returns (uint256);
```

### getOptimizers

Returns all optimizers created by the factory.


```solidity
function getOptimizers() external view returns (TalosOptimizer[] memory);
```

### createTalosOptimizer

Creates a new optimizer


```solidity
function createTalosOptimizer(
    uint32 _twapDuration,
    int24 _maxTwapDeviation,
    int24 _tickRangeMultiplier,
    uint24 _priceImpactPercentage,
    uint256 _maxTotalSupply,
    address owner
) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_twapDuration`|`uint32`|The duration of the TWAP|
|`_maxTwapDeviation`|`int24`|The maximum deviation of the TWAP|
|`_tickRangeMultiplier`|`int24`|The tick range multiplier|
|`_priceImpactPercentage`|`uint24`|The price impact percentage|
|`_maxTotalSupply`|`uint256`|The maximum total supply for Talos LPs|
|`owner`|`address`|The owner of the optimizer|


