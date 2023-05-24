# UniswapV3GaugeFactory
[Git Source](https://github.com/Maia-DAO/test-env-V2/blob/84b5f9e8695c91ddb02f27bb3dfb1c652f55ced4/gauges/factories/UniswapV3GaugeFactory.sol)

**Inherits:**
[BaseV2GaugeFactory](/gauges/factories/BaseV2GaugeFactory.sol/abstract.BaseV2GaugeFactory.md), [IUniswapV3GaugeFactory](/gauges/interfaces/IUniswapV3GaugeFactory.sol/interface.IUniswapV3GaugeFactory.md)


## State Variables
### uniswapV3Staker
The uniswap v3 staker instance.


```solidity
UniswapV3Staker public immutable override uniswapV3Staker;
```


### flywheelGaugeRewards
Flywheel for the uniswap v3 staker, that is responsible for distributing the rewards.


```solidity
FlywheelGaugeRewards public immutable override flywheelGaugeRewards;
```


## Functions
### constructor

Creates a new Uniswap V3 Gauge Factory


```solidity
constructor(
    BaseV2GaugeManager _gaugeManager,
    bHermesBoost _bHermesBoost,
    IUniswapV3Factory _factory,
    INonfungiblePositionManager _nonfungiblePositionManager,
    FlywheelGaugeRewards _flywheelGaugeRewards,
    BribesFactory _bribesFactory,
    address _owner
) BaseV2GaugeFactory(_gaugeManager, _bHermesBoost, _bribesFactory, _owner);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_gaugeManager`|`BaseV2GaugeManager`|Gauge Factory manager|
|`_bHermesBoost`|`bHermesBoost`|bHermes Boost Token|
|`_factory`|`IUniswapV3Factory`|Uniswap V3 Factory|
|`_nonfungiblePositionManager`|`INonfungiblePositionManager`|Uniswap V3 Nonfungible Position Manager|
|`_flywheelGaugeRewards`|`FlywheelGaugeRewards`|Flywheel Gauge Rewards|
|`_bribesFactory`|`BribesFactory`|Bribes Factory|
|`_owner`|`address`|Owner of this contract|


### newGauge

Creates a new Uniswap V3 Gauge


```solidity
function newGauge(address strategy, bytes memory data) internal override returns (BaseV2Gauge);
```

### afterCreateGauge

Adds Gauge to UniswapV3Staker

*Updates the UniswapV3 staker with bribe and minimum width information*


```solidity
function afterCreateGauge(address strategy, bytes memory) internal override;
```

### setMinimumWidth

Sets the minimum width for gauge


```solidity
function setMinimumWidth(address gauge, uint24 minimumWidth) external onlyOwner;
```

