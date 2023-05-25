---
id: IUlyssesERC4626
title: IUlyssesERC4626
---


## Functions
### deposit

Deposit assets into the Vault.


```solidity
function deposit(uint256 assets, address receiver) external returns (uint256 shares);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`assets`|`uint256`|The amount of assets to deposit.|
|`receiver`|`address`|The address to receive the shares.|


### mint

Mint shares from the Vault.


```solidity
function mint(uint256 shares, address receiver) external returns (uint256 assets);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint256`|The amount of shares to mint.|
|`receiver`|`address`|The address to receive the shares.|


### redeem

Redeem assets from the Vault.


```solidity
function redeem(uint256 shares, address receiver, address owner) external returns (uint256 assets);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint256`||
|`receiver`|`address`|The address to receive the assets.|
|`owner`|`address`|The address of the owner of the shares.|


### convertToShares

Calculates the amount of shares that would be received for a given amount of assets.


```solidity
function convertToShares(uint256 assets) external view returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`assets`|`uint256`|The amount of assets to deposit.|


### convertToAssets

Calculates the amount of assets that would be received for a given amount of shares.


```solidity
function convertToAssets(uint256 shares) external view returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint256`|The amount of shares to redeem.|


### previewDeposit

Previews the amount of shares that would be received for depositing given amount of assets.


```solidity
function previewDeposit(uint256 assets) external view returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`assets`|`uint256`|The amount of assets to deposit.|


### previewMint

Previews the amount of assets that would be received for minting a given amount of shares


```solidity
function previewMint(uint256 shares) external view returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint256`|The amount of shares to mint|


### previewRedeem

Previews the amount of shares that would be received for redeeming a given amount of assets


```solidity
function previewRedeem(uint256 shares) external view returns (uint256);
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

```solidity
event Deposit(address indexed caller, address indexed owner, uint256 assets, uint256 shares);
```

### Withdraw

```solidity
event Withdraw(address indexed caller, address indexed receiver, address indexed owner, uint256 assets, uint256 shares);
```

## Errors
### InvalidAssetDecimals
Throw when adding an asset with decimals != 18


```solidity
error InvalidAssetDecimals();
```

