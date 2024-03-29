---
id: TalosBaseStrategyFactory
title: TalosBaseStrategyFactory
---

**Inherits:**
Ownable, [ITalosBaseStrategyFactory](/talos/interfaces/ITalosBaseStrategyFactory.sol/interface.ITalosBaseStrategyFactory.md)


## State Variables
### nonfungiblePositionManager
Returns the nonfungible position manager used by the factory.


```solidity
INonfungiblePositionManager public immutable nonfungiblePositionManager;
```


### optimizerFactory
£inheritdoc ITalosBaseStrategyFactory


```solidity
OptimizerFactory public immutable optimizerFactory;
```


### strategies
Keeps track of the strategies created by the factory.


```solidity
TalosBaseStrategy[] public strategies;
```


### strategyIds
Maps the created strategies to an incremental id.


```solidity
mapping(TalosBaseStrategy => uint256) public strategyIds;
```


## Functions
### constructor

Constructs the Talos Strategy Factory


```solidity
constructor(INonfungiblePositionManager _nonfungiblePositionManager, OptimizerFactory _optimizerFactory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_nonfungiblePositionManager`|`INonfungiblePositionManager`|The nonfungible position manager used by the factory.|
|`_optimizerFactory`|`OptimizerFactory`|The optimizer factory used by the factory.|


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


### createTalosV3Strategy

Internal function responsible for creating a new Talos Strategy


```solidity
function createTalosV3Strategy(
    IUniswapV3Pool pool,
    ITalosOptimizer optimizer,
    address strategyManager,
    bytes memory data
) internal virtual returns (TalosBaseStrategy);
```

