# UlyssesERC4626
[Git Source](https://github.com/Maia-DAO/test-env-V2/blob/84b5f9e8695c91ddb02f27bb3dfb1c652f55ced4/erc-4626/UlyssesERC4626.sol)

**Inherits:**
ERC20, ReentrancyGuard, [IUlyssesERC4626](/erc-4626/interfaces/IUlyssesERC4626.sol/interface.IUlyssesERC4626.md)

**Author:**
Maia DAO (https://github.com/Maia-DAO)


## State Variables
### asset

```solidity
address public immutable asset;
```


## Functions
### constructor


```solidity
constructor(address _asset, string memory _name, string memory _symbol) ERC20(_name, _symbol, 18);
```

### deposit


```solidity
function deposit(uint256 assets, address receiver) public virtual nonReentrant returns (uint256 shares);
```

### mint


```solidity
function mint(uint256 shares, address receiver) public virtual nonReentrant returns (uint256 assets);
```

### redeem


```solidity
function redeem(uint256 shares, address receiver, address owner) public virtual nonReentrant returns (uint256 assets);
```

### totalAssets


```solidity
function totalAssets() public view virtual returns (uint256);
```

### convertToShares


```solidity
function convertToShares(uint256 assets) public view virtual returns (uint256);
```

### convertToAssets


```solidity
function convertToAssets(uint256 shares) public view virtual returns (uint256);
```

### previewDeposit


```solidity
function previewDeposit(uint256 assets) public view virtual returns (uint256);
```

### previewMint


```solidity
function previewMint(uint256 shares) public view virtual returns (uint256);
```

### previewRedeem


```solidity
function previewRedeem(uint256 shares) public view virtual returns (uint256);
```

### maxDeposit


```solidity
function maxDeposit(address) public view virtual returns (uint256);
```

### maxMint


```solidity
function maxMint(address) public view virtual returns (uint256);
```

### maxRedeem


```solidity
function maxRedeem(address owner) public view virtual returns (uint256);
```

### beforeDeposit

*Should not do any external calls to prevent reentrancy.*


```solidity
function beforeDeposit(uint256 assets) internal virtual returns (uint256 shares);
```

### beforeMint

*Should not do any external calls to prevent reentrancy.*


```solidity
function beforeMint(uint256 shares) internal virtual returns (uint256 assets);
```

### afterRedeem

*Should not do any external calls to prevent reentrancy.*


```solidity
function afterRedeem(uint256 shares) internal virtual returns (uint256 assets);
```

