# IncentiveId
[Git Source](https://github.com/Maia-DAO/test-env-V2/blob/84b5f9e8695c91ddb02f27bb3dfb1c652f55ced4/uni-v3-staker/libraries/IncentiveId.sol)

**Author:**
Maia DAO (https://github.com/Maia-DAO)

This library is responsible for computing the incentive identifier.


## Functions
### compute

*Calculate the key for a staking incentive*


```solidity
function compute(IUniswapV3Staker.IncentiveKey memory key) internal pure returns (bytes32 incentiveId);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`key`|`IUniswapV3Staker.IncentiveKey`|The components used to compute the incentive identifier|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`incentiveId`|`bytes32`|The identifier for the incentive|


