# ITalosBaseStrategyFactory

**Author:**
Maia DAO (https://github.com/Maia-DAO)

This contract is used to create new TalosBaseStrategy contracts.


## Functions
### nonfungiblePositionManager

Returns the nonfungible position manager used by the factory.


```solidity
function nonfungiblePositionManager() external view returns (INonfungiblePositionManager);
```

### optimizerFactory

Returns the optimizer factory used by this contract.


```solidity
function optimizerFactory() external view returns (OptimizerFactory);
```

### strategies

Keeps track of the strategies created by the factory.


```solidity
function strategies(uint256) external view returns (TalosBaseStrategy);
```

### strategyIds

Maps the created strategies to an incremental id.


```solidity
function strategyIds(TalosBaseStrategy) external view returns (uint256);
```

### getStrategies

Returns all the strategies created by the factory.


```solidity
function getStrategies() external view returns (TalosBaseStrategy[] memory);
```

### createTalosBaseStrategy

Creates a new strategy


```solidity
function createTalosBaseStrategy(
    IUniswapV3Pool pool,
    ITalosOptimizer optimizer,
    address strategyManager,
    bytes memory data
) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`pool`|`IUniswapV3Pool`|The address of the pool to create a talos strategy for.|
|`optimizer`|`ITalosOptimizer`|Address of the optimizer attached to the strategy.|
|`strategyManager`|`address`|Address of the manager of the strategy.|
|`data`|`bytes`|Additional data needed to create the strategy|


## Errors
### UnrecognizedOptimizer
Error emitted when the optimizer is not recognized.


```solidity
error UnrecognizedOptimizer();
```

### UnrecognizedStrategyManager
Error emitted when the strategy manager is not recognized.


```solidity
error UnrecognizedStrategyManager();
```

