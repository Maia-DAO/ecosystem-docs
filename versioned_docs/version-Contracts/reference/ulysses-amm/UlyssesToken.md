---
id: UlyssesToken
title: UlyssesToken
---

**Inherits:**
[ERC4626MultiToken](/erc-4626/ERC4626MultiToken.sol/abstract.ERC4626MultiToken.md), Ownable, [IUlyssesToken](/ulysses-amm/interfaces/IUlyssesToken.sol/interface.IUlyssesToken.md)


## State Variables
### id

```solidity
uint256 public immutable id;
```


## Functions
### constructor


```solidity
constructor(
    uint256 _id,
    address[] memory _assets,
    uint256[] memory _weights,
    string memory _name,
    string memory _symbol,
    address _owner
) ERC4626MultiToken(_assets, _weights, _name, _symbol);
```

### totalAssets

Calculates the total amount of assets of a given Ulysses token.


```solidity
function totalAssets() public view override returns (uint256 _totalAssets);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`_totalAssets`|`uint256`|total number of underlying assets of a Ulysses token.|


### addAsset

Calculates the total amount of assets of a given Ulysses token.


```solidity
function addAsset(address asset, uint256 _weight) external nonReentrant onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`asset`|`address`|The address of the asset to add.|
|`_weight`|`uint256`|The weight of the asset to add.|


### removeAsset

Removes an asset from the Ulysses token.


```solidity
function removeAsset(address asset) external nonReentrant onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`asset`|`address`|The address of the asset to remove.|


### setWeights

Sets the weights of the assets in the Ulysses token.


```solidity
function setWeights(uint256[] memory _weights) external nonReentrant onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_weights`|`uint256[]`|The weights of the assets in the Ulysses token.|


### updateAssetBalances

Update the balances of the underlying assets.


```solidity
function updateAssetBalances() internal;
```

