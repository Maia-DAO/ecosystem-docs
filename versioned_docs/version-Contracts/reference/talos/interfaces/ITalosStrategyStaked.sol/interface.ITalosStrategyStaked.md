# ITalosStrategyStaked
[Git Source](https://github.com/Maia-DAO/test-env-V2/blob/84b5f9e8695c91ddb02f27bb3dfb1c652f55ced4/talos/interfaces/ITalosStrategyStaked.sol)

**Author:**
Maia DAO (https://github.com/Maia-DAO)

This contract is responsible for managing a Uniswap V3 Non-Fungible Position.
TalosBaseStrategy allows the strategy manager to perform two actions:
- rerange according to Talos Optimizer's values.
- rebalance 50/50 according to Talos Optimizer's values.
The underlying Uniswap V3 Pool NFT is staked in an Uniswap V3 Staker contract
and will collect all fees to be deposited as bribes if there is no incentive available.
NOTE: Staking an NFT in an Uniswap V3 Staker contract will lock receive emissions
in exchange for fees.
This means that the strategy in normal circumstances does not earn swapping fees.


## Functions
### boostAggregator

The boostAggregator to stake NFTs in Uniswap V3 Staker


```solidity
function boostAggregator() external view returns (BoostAggregator);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`BoostAggregator`|boostAggregator|


### flywheel

flywheel core responsible for assigning strategy rewards
to its respective users.


```solidity
function flywheel() external view returns (FlywheelCoreInstant);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`FlywheelCoreInstant`|flywheel|


