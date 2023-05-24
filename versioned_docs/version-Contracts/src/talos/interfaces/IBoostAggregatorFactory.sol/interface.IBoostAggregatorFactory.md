# IBoostAggregatorFactory
[Git Source](https://github.com/Maia-DAO/test-env-V2/blob/84b5f9e8695c91ddb02f27bb3dfb1c652f55ced4/talos/interfaces/IBoostAggregatorFactory.sol)

**Author:**
Maia DAO (https://github.com/Maia-DAO)

This contract is responsible for creating new BoostAggregators.


## Functions
### uniswapV3Staker

Underlying uniV3Staker contract


```solidity
function uniswapV3Staker() external view returns (UniswapV3Staker);
```

### hermes

Underlying hermes token contract.


```solidity
function hermes() external view returns (ERC20);
```

### boostAggregators

Holds every boost created by the factory.


```solidity
function boostAggregators(uint256) external view returns (BoostAggregator);
```

### boostAggregatorIds

Maps every created boost to an incremental id.


```solidity
function boostAggregatorIds(BoostAggregator) external view returns (uint256);
```

### getBoostAggregators

Returns the boost aggregators created by the factory.


```solidity
function getBoostAggregators() external view returns (BoostAggregator[] memory);
```

### createBoostAggregator

Creates a new boostAggregator


```solidity
function createBoostAggregator(address owner) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`owner`|`address`|The owner of the boostAggregator|


## Errors
### InvalidOwner
Thrown when the owner of the BoostAggregator is the zero address.


```solidity
error InvalidOwner();
```

