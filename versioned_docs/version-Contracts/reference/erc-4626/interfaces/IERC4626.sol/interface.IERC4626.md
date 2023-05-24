# IERC4626
[Git Source](https://github.com/Maia-DAO/test-env-V2/blob/84b5f9e8695c91ddb02f27bb3dfb1c652f55ced4/erc-4626/interfaces/IERC4626.sol)


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


### withdraw

Withdraw assets from the Vault.


```solidity
function withdraw(uint256 assets, address receiver, address owner) external returns (uint256 shares);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`assets`|`uint256`|The amount of assets to withdraw.|
|`receiver`|`address`|The address to receive the assets.|
|`owner`|`address`|The address to receive the shares.|


### redeem

Redeem shares from the Vault.


```solidity
function redeem(uint256 shares, address receiver, address owner) external returns (uint256 assets);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint256`|The amount of shares to redeem.|
|`receiver`|`address`|The address to receive the assets.|
|`owner`|`address`|The address to receive the shares.|


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

Preview the amount of shares that would be received for a given amount of assets.


```solidity
function previewDeposit(uint256 assets) external view returns (uint256);
```

### previewMint

Previews the amount of assets that would be received for minting a given amount of shares


```solidity
function previewMint(uint256 shares) external view returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint256`|The amount of shares to mint|


### previewWithdraw

Previews the amount of shares that would be received for a withdraw of a given amount of assets.


```solidity
function previewWithdraw(uint256 assets) external view returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`assets`|`uint256`|The amount of assets to withdraw.|


### previewRedeem

Previews the amount of assets that would be received for a redeem of a given amount of shares.


```solidity
function previewRedeem(uint256 shares) external view returns (uint256);
```

### maxDeposit

Returns the max amount of assets that can be deposited into the Vault.


```solidity
function maxDeposit(address) external view returns (uint256);
```

### maxMint

Returns the max amount of shares that can be minted from the Vault.


```solidity
function maxMint(address) external view returns (uint256);
```

### maxWithdraw

Returns the max amount of assets that can be withdrawn from the Vault.


```solidity
function maxWithdraw(address owner) external view returns (uint256);
```

### maxRedeem

Returns the max amount of shares that can be redeemed from the Vault.


```solidity
function maxRedeem(address owner) external view returns (uint256);
```

## Events
### Deposit

```solidity
event Deposit(address indexed caller, address indexed owner, uint256 assets, uint256 shares);
```

### Withdraw

```solidity
event Withdraw(address indexed caller, address indexed receiver, address indexed owner, uint256 assets, uint256 shares);
```

