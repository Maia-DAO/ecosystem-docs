# TalosStrategyStaked
[Git Source](https://github.com/Maia-DAO/test-env-V2/blob/84b5f9e8695c91ddb02f27bb3dfb1c652f55ced4/talos/TalosStrategyStaked.sol)

**Inherits:**
[TalosStrategySimple](/talos/strategies/TalosStrategySimple.sol/abstract.TalosStrategySimple.md), [ITalosStrategyStaked](/talos/interfaces/ITalosStrategyStaked.sol/interface.ITalosStrategyStaked.md)


## State Variables
### boostAggregator
The boostAggregator to stake NFTs in Uniswap V3 Staker


```solidity
BoostAggregator public immutable override boostAggregator;
```


### flywheel
flywheel core responsible for assigning strategy rewards to its respective users.


```solidity
FlywheelCoreInstant public immutable flywheel;
```


### stakeFlag
staking flag indicating if the NFT is staked or not.


```solidity
bool private stakeFlag = false;
```


## Functions
### constructor

Construct a new Talos Strategy Staked contract.


```solidity
constructor(
    IUniswapV3Pool _pool,
    ITalosOptimizer _optimizer,
    BoostAggregator _boostAggregator,
    address _strategyManager,
    FlywheelCoreInstant _flywheel,
    address _owner
) TalosStrategySimple(_pool, _optimizer, _boostAggregator.nonfungiblePositionManager(), _strategyManager, _owner);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_pool`|`IUniswapV3Pool`|Uniswap V3 Pool to manage.|
|`_optimizer`|`ITalosOptimizer`|Talos Optimizer to use.|
|`_boostAggregator`|`BoostAggregator`|BoostAggregator to stake NFTs in Uniswap V3 Staker|
|`_strategyManager`|`address`|Strategy manager to use.|
|`_flywheel`|`FlywheelCoreInstant`|flywheel core responsible for assigning strategy rewards to its respective users.|
|`_owner`|`address`|Owner of the contract.|


### transfer


```solidity
function transfer(address _to, uint256 _amount) public override returns (bool);
```

### transferFrom


```solidity
function transferFrom(address _from, address _to, uint256 _amount) public override returns (bool);
```

### beforeRedeem

Hook that is called before a position is redeemed.

*Responsible for collecting and accruing user rewards*


```solidity
function beforeRedeem(uint256 _tokenId, address _owner) internal override;
```

### afterRedeem

Hook that is called after a position is redeemed.

*Responsible for staking the position in the UniswapV3Staker*


```solidity
function afterRedeem(uint256 _tokenId) internal override;
```

### beforeDeposit

Hook that is called before a position is deposited.

*Responsible for collecting and accruing user rewards*


```solidity
function beforeDeposit(uint256 _tokenId, address _receiver) internal override;
```

### afterDeposit

Hook that is called after a position is deposited.

*Responsible for staking the position in the UniswapV3Staker*


```solidity
function afterDeposit(uint256 _tokenId) internal override;
```

### beforeRerange

Hook that is called before a position is reranged.

*Responsible for collecting and accruing strategy rewards*


```solidity
function beforeRerange(uint256 _tokenId) internal override;
```

### afterRerange

Hook that is called after a position is reranged.

*Responsible for staking the position in the UniswapV3Staker*


```solidity
function afterRerange(uint256 _tokenId) internal override;
```

### _earnFees

Collects fees from the pool


```solidity
function _earnFees(uint256 _tokenId) internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_tokenId`|`uint256`|where to collect fees from|


### _unstake

Unstakes all tokens from a specific tokenId


```solidity
function _unstake(uint256 _tokenId) internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_tokenId`|`uint256`|where to unstake from|


### _stake

Stakes a specific pre existing position


```solidity
function _stake(uint256 _tokenId) internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_tokenId`|`uint256`|position that needs to be staked|


