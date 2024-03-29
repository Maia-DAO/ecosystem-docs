---
id: NFTPositionInfo
title: NFTPositionInfo
---


## Functions
### getPositionInfo


```solidity
function getPositionInfo(
    IUniswapV3Factory factory,
    INonfungiblePositionManager nonfungiblePositionManager,
    uint256 tokenId
) internal view returns (IUniswapV3Pool pool, int24 tickLower, int24 tickUpper, uint128 liquidity);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`factory`|`IUniswapV3Factory`|The address of the Uniswap V3 Factory used in computing the pool address|
|`nonfungiblePositionManager`|`INonfungiblePositionManager`|The address of the nonfungible position manager to query|
|`tokenId`|`uint256`|The unique identifier of an Uniswap V3 LP token|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`pool`|`IUniswapV3Pool`|The address of the Uniswap V3 pool|
|`tickLower`|`int24`|The lower tick of the Uniswap V3 position|
|`tickUpper`|`int24`|The upper tick of the Uniswap V3 position|
|`liquidity`|`uint128`|The amount of liquidity staked|


