---
id: ERC4626DepositOnly
title: ERC4626DepositOnly
---

**Inherits:**
ERC20, [IERC4626DepositOnly](/erc-4626/interfaces/IERC4626DepositOnly.sol/interface.IERC4626DepositOnly.md)

**Author:**
Maia DAO (https://github.com/Maia-DAO)


## State Variables
### asset

```solidity
ERC20 public immutable asset;
```


## Functions
### constructor


```solidity
constructor(ERC20 _asset, string memory _name, string memory _symbol) ERC20(_name, _symbol, _asset.decimals());
```

### deposit

Deposit assets into the Vault.


```solidity
function deposit(uint256 assets, address receiver) public virtual returns (uint256 shares);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`assets`|`uint256`|The amount of assets to deposit.|
|`receiver`|`address`|The address to receive the shares.|


### mint

Mint shares from the Vault.


```solidity
function mint(uint256 shares, address receiver) public virtual returns (uint256 assets);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint256`|The amount of shares to mint.|
|`receiver`|`address`|The address to receive the shares.|


### totalAssets

Gets the total amount of underlying assets held by the contract.


```solidity
function totalAssets() public view virtual returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|_totalAssets total number of underlying assets.|


### convertToShares

Calculates the amount of shares that would be received for a given amount of assets.


```solidity
function convertToShares(uint256 assets) public view virtual returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`assets`|`uint256`|The amount of assets to deposit.|


### convertToAssets

TODO: @inheritdoc IERC4626DepositOnly


```solidity
function convertToAssets(uint256 shares) public view virtual returns (uint256);
```

### previewDeposit

Previews the amount of shares that would be received for a given amount of assets.


```solidity
function previewDeposit(uint256 assets) public view virtual returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`assets`|`uint256`|The amount of assets to deposit.|


### previewMint

Previews the amount of assets that would be received for minting a given amount of shares


```solidity
function previewMint(uint256 shares) public view virtual returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint256`|The amount of shares to mint|


### maxDeposit

Returns the maximum amount of assets that can be deposited.


```solidity
function maxDeposit(address) public view virtual returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`||


### maxMint

Returns the maximum amount of shares that can be minted.


```solidity
function maxMint(address) public view virtual returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`||


### afterDeposit


```solidity
function afterDeposit(uint256 assets, uint256 shares) internal virtual;
```

