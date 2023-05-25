# ERC4626

**Inherits:**
ERC20, [IERC4626](/erc-4626/interfaces/IERC4626.sol/interface.IERC4626.md)

**Author:**
Solmate (https://github.com/transmissions11/solmate/blob/main/mixins/ERC4626.sol)


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


### withdraw

Withdraw assets from the Vault.


```solidity
function withdraw(uint256 assets, address receiver, address owner) public virtual returns (uint256 shares);
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
function redeem(uint256 shares, address receiver, address owner) public virtual returns (uint256 assets);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint256`|The amount of shares to redeem.|
|`receiver`|`address`|The address to receive the assets.|
|`owner`|`address`|The address to receive the shares.|


### totalAssets


```solidity
function totalAssets() public view virtual returns (uint256);
```

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

Calculates the amount of assets that would be received for a given amount of shares.


```solidity
function convertToAssets(uint256 shares) public view virtual returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint256`|The amount of shares to redeem.|


### previewDeposit

Preview the amount of shares that would be received for a given amount of assets.


```solidity
function previewDeposit(uint256 assets) public view virtual returns (uint256);
```

### previewMint

Previews the amount of assets that would be received for minting a given amount of shares


```solidity
function previewMint(uint256 shares) public view virtual returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint256`|The amount of shares to mint|


### previewWithdraw

Previews the amount of shares that would be received for a withdraw of a given amount of assets.


```solidity
function previewWithdraw(uint256 assets) public view virtual returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`assets`|`uint256`|The amount of assets to withdraw.|


### previewRedeem

Previews the amount of assets that would be received for a redeem of a given amount of shares.


```solidity
function previewRedeem(uint256 shares) public view virtual returns (uint256);
```

### maxDeposit

Returns the max amount of assets that can be deposited into the Vault.


```solidity
function maxDeposit(address) public view virtual returns (uint256);
```

### maxMint

Returns the max amount of shares that can be minted from the Vault.


```solidity
function maxMint(address) public view virtual returns (uint256);
```

### maxWithdraw

Returns the max amount of assets that can be withdrawn from the Vault.


```solidity
function maxWithdraw(address owner) public view virtual returns (uint256);
```

### maxRedeem

Returns the max amount of shares that can be redeemed from the Vault.


```solidity
function maxRedeem(address owner) public view virtual returns (uint256);
```

### beforeWithdraw


```solidity
function beforeWithdraw(uint256 assets, uint256 shares) internal virtual;
```

### afterDeposit


```solidity
function afterDeposit(uint256 assets, uint256 shares) internal virtual;
```

