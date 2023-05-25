# IERC4626MultiToken


## Functions
### assets

Gets the address of the underlying asset at the given index.


```solidity
function assets(uint256 index) external view returns (address asset);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`index`|`uint256`|The index of the underlying asset.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`asset`|`address`|address of the underlying asset.|


### weights

Gets the weight of the underlying asset at the given index.


```solidity
function weights(uint256 index) external view returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`index`|`uint256`|The index of the underlying asset.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|weight of the underlying asset.|


### assetId

Gets the ID of the underlying asset.

*assetId[asset] = index + 1*


```solidity
function assetId(address asset) external view returns (uint256 assetId);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`asset`|`address`|The address of the underlying asset.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`assetId`|`uint256`|ID of the underlying asset.|


### totalWeights

Gets the sum of all weights.


```solidity
function totalWeights() external view returns (uint256 totalWeights);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`totalWeights`|`uint256`|sum of all weights.|


### getAssets

Gets all the underlying assets.


```solidity
function getAssets() external view returns (address[] memory assets);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`assets`|`address[]`|array of all the underlying assets.|


### totalAssets

Calculates the total amount of assets of a given Ulysses token.


```solidity
function totalAssets() external view returns (uint256 _totalAssets);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`_totalAssets`|`uint256`|total number of underlying assets of a Ulysses token.|


### deposit

Deposit assets into the Vault.


```solidity
function deposit(uint256[] calldata assetsAmounts, address receiver) external returns (uint256 shares);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`assetsAmounts`|`uint256[]`|The amount of assets to deposit.|
|`receiver`|`address`|The address to receive the shares.|


### mint

Mint shares from the Vault.


```solidity
function mint(uint256 shares, address receiver) external returns (uint256[] memory assetsAmounts);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint256`|The amount of shares to mint.|
|`receiver`|`address`|The address to receive the shares.|


### withdraw

Withdraw assets from the Vault.


```solidity
function withdraw(uint256[] calldata assetsAmounts, address receiver, address owner)
    external
    returns (uint256 shares);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`assetsAmounts`|`uint256[]`|The amount of assets to withdraw.|
|`receiver`|`address`|The address to receive the assets.|
|`owner`|`address`|The address of the owner of the shares.|


### redeem

Redeem shares from the Vault.


```solidity
function redeem(uint256 shares, address receiver, address owner) external returns (uint256[] memory assetsAmounts);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint256`|The amount of shares to redeem.|
|`receiver`|`address`|The address to receive the assets.|
|`owner`|`address`||


### convertToShares

Calculates the amount of shares that would be received for a given amount of assets.


```solidity
function convertToShares(uint256[] calldata assetsAmounts) external view returns (uint256 shares);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`assetsAmounts`|`uint256[]`|The amount of assets to deposit.|


### convertToAssets

Calculates the amount of assets that would be received for a given amount of shares.


```solidity
function convertToAssets(uint256 shares) external view returns (uint256[] memory assetsAmounts);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint256`|The amount of shares to redeem.|


### previewDeposit

Previews the amount of shares that would be received for depositinga given amount of assets.


```solidity
function previewDeposit(uint256[] calldata assetsAmounts) external view returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`assetsAmounts`|`uint256[]`|The amount of assets to deposit.|


### previewMint

Previews the amount of assets that would be received for minting a given amount of shares


```solidity
function previewMint(uint256 shares) external view returns (uint256[] memory assetsAmounts);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint256`|The amount of shares to mint|


### previewWithdraw

Previews the amount of shares that would be received for a given amount of assets.


```solidity
function previewWithdraw(uint256[] calldata assetsAmounts) external view returns (uint256 shares);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`assetsAmounts`|`uint256[]`|The amount of assets to withdraw.|


### previewRedeem

Previews the amount of assets that would be received for redeeming a given amount of shares


```solidity
function previewRedeem(uint256 shares) external view returns (uint256[] memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint256`|The amount of shares to redeem|


### maxDeposit

Returns the maximum amount of assets that can be deposited.


```solidity
function maxDeposit(address owner) external view returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`owner`|`address`|The address of the owner of the assets.|


### maxMint

Returns the maximum amount of shares that can be minted.


```solidity
function maxMint(address owner) external view returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`owner`|`address`|The address of the owner of the shares.|


### maxWithdraw

Returns the maximum amount of assets that can be withdrawn.


```solidity
function maxWithdraw(address owner) external view returns (uint256[] memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`owner`|`address`|The address of the owner of the assets.|


### maxRedeem

Returns the maximum amount of shares that can be redeemed.


```solidity
function maxRedeem(address owner) external view returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`owner`|`address`|The address of the owner of the shares.|


## Events
### Deposit
Emitted when assets are deposited into the Vault.


```solidity
event Deposit(address indexed caller, address indexed owner, uint256[] assets, uint256 shares);
```

### Withdraw
Emitted when shares are withdrawn from the Vault.


```solidity
event Withdraw(
    address indexed caller, address indexed receiver, address indexed owner, uint256[] assets, uint256 shares
);
```

### AssetAdded
Emitted when a new asset is added to the Vault.


```solidity
event AssetAdded(address asset, uint256 weight);
```

### AssetRemoved
Emitted when an asset is removed from the Vault.


```solidity
event AssetRemoved(address asset);
```

## Errors
### ZeroAssets
Error thrown when redeeming returns 0 assets.


```solidity
error ZeroAssets();
```

### InvalidLength
Error thrown when depositing amounts array length is different than assets array length.


```solidity
error InvalidLength();
```

