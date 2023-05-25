---
id: ITalosOptimizer
title: ITalosOptimizer
---

**Author:**
Maia DAO (https://github.com/Maia-DAO)

Contains Optimizer variables used by Talos LPs that may only be modified by the governance.


## Functions
### maxTotalSupply


```solidity
function maxTotalSupply() external view returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|Maximum TLP value that could be minted|


### twapDuration

Period of time that we observe for price slippage


```solidity
function twapDuration() external view returns (uint32);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint32`|time in seconds|


### maxTwapDeviation

Maximum deviation of time weighted average price in ticks


```solidity
function maxTwapDeviation() external view returns (int24);
```

### tickRangeMultiplier

Tick multiplier for base range calculation


```solidity
function tickRangeMultiplier() external view returns (int24);
```

### priceImpactPercentage

The price impact percentage during swap denominated in hundredths of a bip, i.e. 1e-6


```solidity
function priceImpactPercentage() external view returns (uint24);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint24`|The max price impact percentage|


### setMaxTotalSupply

Sets the total max supply which can only be changed by the governance address.


```solidity
function setMaxTotalSupply(uint256 _maxTotalSupply) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_maxTotalSupply`|`uint256`|amount to set as max supply.|


### setTwapDuration

Sets the total twap duration which can only be changed by the governance address.


```solidity
function setTwapDuration(uint32 _twapDuration) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_twapDuration`|`uint32`|explicit twap duration in seconds|


### setMaxTwapDeviation

Sets the max twap deviation which can only be changed by the governance address.


```solidity
function setMaxTwapDeviation(int24 _maxTwapDeviation) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_maxTwapDeviation`|`int24`|explicit max twap devitation in ticks|


### setTickRange

Function to set the tick range of a optimizer strategy


```solidity
function setTickRange(int24 _tickRangeMultiplier) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_tickRangeMultiplier`|`int24`|Used to determine base order range|


### setPriceImpact

Function to change the price impact % of the optimizer strategy.


```solidity
function setPriceImpact(uint24 _priceImpactPercentage) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_priceImpactPercentage`|`uint24`|The price impact percentage during swap in hundredths of a bip, i.e. 1e-6|


## Errors
### MaxTotalSupplyIsZero
Thrown when the maxTotalSupply is zero


```solidity
error MaxTotalSupplyIsZero();
```

### TwapDurationTooLow
Thrown when the twapDuration is too low


```solidity
error TwapDurationTooLow();
```

### MaxTwapDeviationTooLow
Thrown when the maxTwapDeviation is too low


```solidity
error MaxTwapDeviationTooLow();
```

### PriceImpactPercentageInvalid
Thrown when the priceImpactPercentage is too high or too low


```solidity
error PriceImpactPercentageInvalid();
```

