# UniswapV3Gauge
[Git Source](https://github.com/Maia-DAO/test-env-V2/blob/84b5f9e8695c91ddb02f27bb3dfb1c652f55ced4/gauges/UniswapV3Gauge.sol)

**Inherits:**
[BaseV2Gauge](/gauges/BaseV2Gauge.sol/abstract.BaseV2Gauge.md), [IUniswapV3Gauge](/gauges/interfaces/IUniswapV3Gauge.sol/interface.IUniswapV3Gauge.md)


## State Variables
### uniswapV3Staker
The Uniswap V3 Staker contract


```solidity
address public immutable override uniswapV3Staker;
```


### minimumWidth
The minimum width of the Uniswap V3 position to be eligible for staking


```solidity
uint24 public override minimumWidth;
```


## Functions
### constructor

Constructs the UniswapV3Gauge contract.


```solidity
constructor(
    FlywheelGaugeRewards _flywheelGaugeRewards,
    address _uniswapV3Staker,
    address _uniswapV3Pool,
    uint24 _minimumWidth,
    address _owner
) BaseV2Gauge(_flywheelGaugeRewards, _uniswapV3Pool, _owner);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_flywheelGaugeRewards`|`FlywheelGaugeRewards`|The FlywheelGaugeRewards contract.|
|`_uniswapV3Staker`|`address`|The UniswapV3Staker contract.|
|`_uniswapV3Pool`|`address`|The UniswapV3Pool contract.|
|`_minimumWidth`|`uint24`|The minimum width.|
|`_owner`|`address`|The owner of the contract.|


### distribute

Distributes weekly emissions to the Uniswap V3 Staker for the current epoch.

*must be called during the 12-hour offset after an epoch ends
or rewards will be queued for the next epoch.*


```solidity
function distribute(uint256 amount) internal override;
```

### setMinimumWidth

Sets the minimum width

*Only the owner can call this function*


```solidity
function setMinimumWidth(uint24 _minimumWidth) external onlyOwner;
```

### onlyStrategy

Only the UniswapV3Staker contract can attach and detach users.


```solidity
modifier onlyStrategy() override;
```

