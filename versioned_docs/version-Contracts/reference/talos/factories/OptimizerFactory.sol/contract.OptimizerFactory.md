# OptimizerFactory

**Inherits:**
[IOptimizerFactory](/talos/interfaces/IOptimizerFactory.sol/interface.IOptimizerFactory.md)

**Author:**
Maia DAO (https://github.com/Maia-DAO)


## State Variables
### optimizers

```solidity
TalosOptimizer[] public optimizers;
```


### optimizerIds

```solidity
mapping(TalosOptimizer => uint256) public optimizerIds;
```


## Functions
### getOptimizers


```solidity
function getOptimizers() external view returns (TalosOptimizer[] memory);
```

### constructor

Construct a new Optimizer Factory contract.


```solidity
constructor();
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
|`_twapDuration`|`uint32`||
|`_maxTwapDeviation`|`int24`||
|`_tickRangeMultiplier`|`int24`||
|`_priceImpactPercentage`|`uint24`||
|`_maxTotalSupply`|`uint256`||
|`owner`|`address`|The owner of the optimizer|


