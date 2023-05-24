# ERC4626MultiToken
[Git Source](https://github.com/Maia-DAO/test-env-V2/blob/84b5f9e8695c91ddb02f27bb3dfb1c652f55ced4/erc-4626/ERC4626MultiToken.sol)

**Inherits:**
ERC20, ReentrancyGuard, [IERC4626MultiToken](/erc-4626/interfaces/IERC4626MultiToken.sol/interface.IERC4626MultiToken.md)

**Author:**
Maia DAO (https://github.com/Maia-DAO)


## State Variables
### assets
Gets the address of the underlying asset at the given index.


```solidity
address[] public assets;
```


### weights
Gets the weight of the underlying asset at the given index.


```solidity
uint256[] public weights;
```


### assetId
Gets the ID of the underlying asset.

*assetId[asset] = index + 1*


```solidity
mapping(address => uint256) public assetId;
```


### totalWeights
Gets the sum of all weights.


```solidity
uint256 public totalWeights;
```


## Functions
### getAssets

Gets all the underlying assets.


```solidity
function getAssets() external view returns (address[] memory);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address[]`|assets array of all the underlying assets.|


### constructor


```solidity
constructor(address[] memory _assets, uint256[] memory _weights, string memory _name, string memory _symbol)
    ERC20(_name, _symbol, 18);
```

### receiveAssets


```solidity
function receiveAssets(uint256[] memory assetsAmounts) private;
```

### sendAssets


```solidity
function sendAssets(uint256[] memory assetsAmounts) private;
```

### deposit

Deposit assets into the Vault.


```solidity
function deposit(uint256[] calldata assetsAmounts, address receiver)
    public
    virtual
    nonReentrant
    returns (uint256 shares);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`assetsAmounts`|`uint256[]`|The amount of assets to deposit.|
|`receiver`|`address`|The address to receive the shares.|


### mint

Mint shares from the Vault.


```solidity
function mint(uint256 shares, address receiver) public virtual nonReentrant returns (uint256[] memory assetsAmounts);
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
    public
    virtual
    nonReentrant
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
function redeem(uint256 shares, address receiver, address owner)
    public
    virtual
    nonReentrant
    returns (uint256[] memory assetsAmounts);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint256`|The amount of shares to redeem.|
|`receiver`|`address`|The address to receive the assets.|
|`owner`|`address`||


### totalAssets


```solidity
function totalAssets() public view virtual returns (uint256);
```

### convertToShares

Calculates the amount of shares that would be received for a given amount of assets.


```solidity
function convertToShares(uint256[] calldata assetsAmounts) public view virtual returns (uint256 shares);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`assetsAmounts`|`uint256[]`|The amount of assets to deposit.|


### convertToAssets

Calculates the amount of assets that would be received for a given amount of shares.


```solidity
function convertToAssets(uint256 shares) public view virtual returns (uint256[] memory assetsAmounts);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint256`|The amount of shares to redeem.|


### previewDeposit

Previews the amount of shares that would be received for depositinga given amount of assets.


```solidity
function previewDeposit(uint256[] calldata assetsAmounts) public view virtual returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`assetsAmounts`|`uint256[]`|The amount of assets to deposit.|


### previewMint

Previews the amount of assets that would be received for minting a given amount of shares


```solidity
function previewMint(uint256 shares) public view virtual returns (uint256[] memory assetsAmounts);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint256`|The amount of shares to mint|


### previewWithdraw

Previews the amount of shares that would be received for a given amount of assets.


```solidity
function previewWithdraw(uint256[] calldata assetsAmounts) public view virtual returns (uint256 shares);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`assetsAmounts`|`uint256[]`|The amount of assets to withdraw.|


### previewRedeem

Previews the amount of assets that would be received for redeeming a given amount of shares


```solidity
function previewRedeem(uint256 shares) public view virtual returns (uint256[] memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint256`|The amount of shares to redeem|


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


### maxWithdraw

Returns the maximum amount of assets that can be withdrawn.


```solidity
function maxWithdraw(address owner) public view virtual returns (uint256[] memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`owner`|`address`|The address of the owner of the assets.|


### maxRedeem

Returns the maximum amount of shares that can be redeemed.


```solidity
function maxRedeem(address owner) public view virtual returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`owner`|`address`|The address of the owner of the shares.|


### beforeWithdraw


```solidity
function beforeWithdraw(uint256[] memory assetsAmounts, uint256 shares) internal virtual;
```

### afterDeposit


```solidity
function afterDeposit(uint256[] memory assetsAmounts, uint256 shares) internal virtual;
```

