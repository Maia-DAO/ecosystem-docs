---
id: TalosOptimizer
title: TalosOptimizer
---

**Inherits:**
Ownable, [ITalosOptimizer](/talos/interfaces/ITalosOptimizer.sol/interface.ITalosOptimizer.md)


## State Variables
### maxTotalSupply

```solidity
uint256 public override maxTotalSupply;
```


### twapDuration
Period of time that we observe for price slippage


```solidity
uint32 public override twapDuration;
```


### maxTwapDeviation
Maximum deviation of time weighted average price in ticks


```solidity
int24 public override maxTwapDeviation;
```


### tickRangeMultiplier
Tick multiplier for base range calculation


```solidity
int24 public override tickRangeMultiplier;
```


### priceImpactPercentage
The price impact percentage during swap denominated in hundredths of a bip, i.e. 1e-6


```solidity
uint24 public override priceImpactPercentage;
```


## Functions
### constructor

Constructor for Optimizer


```solidity
constructor(
    uint32 _twapDuration,
    int24 _maxTwapDeviation,
    int24 _tickRangeMultiplier,
    uint24 _priceImpactPercentage,
    uint256 _maxTotalSupply,
    address _owner
);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_twapDuration`|`uint32`|TWAP duration in seconds for rebalance check|
|`_maxTwapDeviation`|`int24`|Max deviation from TWAP during rebalance|
|`_tickRangeMultiplier`|`int24`|Used to determine base order range|
|`_priceImpactPercentage`|`uint24`|The price impact percentage during swap in hundredths of a bip, i.e. 1e-6|
|`_maxTotalSupply`|`uint256`|Maximum TLP value that could be minted|
|`_owner`|`address`||


### setMaxTotalSupply

Sets the total max supply which can only be changed by the governance address.


```solidity
function setMaxTotalSupply(uint256 _maxTotalSupply) external onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_maxTotalSupply`|`uint256`|amount to set as max supply.|


### setTwapDuration

Sets the total twap duration which can only be changed by the governance address.


```solidity
function setTwapDuration(uint32 _twapDuration) external onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_twapDuration`|`uint32`|explicit twap duration in seconds|


### setMaxTwapDeviation

Sets the max twap deviation which can only be changed by the governance address.


```solidity
function setMaxTwapDeviation(int24 _maxTwapDeviation) external onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_maxTwapDeviation`|`int24`|explicit max twap devitation in ticks|


### setTickRange

Function to set the tick range of a optimizer strategy


```solidity
function setTickRange(int24 _tickRangeMultiplier) external onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_tickRangeMultiplier`|`int24`|Used to determine base order range|


### setPriceImpact

Function to change the price impact % of the optimizer strategy.


```solidity
function setPriceImpact(uint24 _priceImpactPercentage) external onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_priceImpactPercentage`|`uint24`|The price impact percentage during swap in hundredths of a bip, i.e. 1e-6|


