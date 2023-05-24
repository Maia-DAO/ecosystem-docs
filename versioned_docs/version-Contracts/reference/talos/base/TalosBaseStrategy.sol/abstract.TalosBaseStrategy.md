# TalosBaseStrategy
[Git Source](https://github.com/Maia-DAO/test-env-V2/blob/84b5f9e8695c91ddb02f27bb3dfb1c652f55ced4/talos/base/TalosBaseStrategy.sol)

**Inherits:**
Ownable, ERC20, ReentrancyGuard, [ITalosBaseStrategy](/talos/interfaces/ITalosBaseStrategy.sol/interface.ITalosBaseStrategy.md)


## State Variables
### tokenId
The token ID of the NFT held by the Position


```solidity
uint256 public override tokenId;
```


### liquidity
The total liquidity held by the position


```solidity
uint128 public override liquidity;
```


### protocolFees0
Accrued protocol fees in terms of token0


```solidity
uint256 public protocolFees0;
```


### protocolFees1
Accrued protocol fees in terms of token1


```solidity
uint256 public protocolFees1;
```


### tickLower
Current tick lower of Optimizer pool position


```solidity
int24 public override tickLower;
```


### tickUpper
Current tick higher of Optimizer pool position


```solidity
int24 public override tickUpper;
```


### initialized
Checks if Optimizer is initialized


```solidity
bool public initialized;
```


### token0
The first of the two tokens of the pool, sorted by address


```solidity
ERC20 public immutable override token0;
```


### token1
The second of the two tokens of the pool, sorted by address


```solidity
ERC20 public immutable override token1;
```


### tickSpacing
The pool tick spacing

*Ticks can only be used at multiples of this value, minimum of 1 and always positive
e.g.: a tickSpacing of 3 means ticks can be initialized every 3rd tick, i.e., ..., -6, -3, 0, 3, 6, ...
This value is an int24 to avoid casting even though it is always positive.*


```solidity
int24 public immutable override tickSpacing;
```


### poolFee
The fee from Uniswap pool


```solidity
uint24 public immutable override poolFee;
```


### pool
A Uniswap pool facilitates swapping and automated market-making between any two assets that strictly conform
to the ERC20 specification


```solidity
IUniswapV3Pool public immutable override pool;
```


### optimizer
The TalosOptimizer of this position


```solidity
ITalosOptimizer public immutable override optimizer;
```


### strategyManager
This position's strategy manager.

*Can call rebalance and rerange.*


```solidity
address public immutable strategyManager;
```


### nonfungiblePositionManager
The nonfungiblePositionManager to manage NFTs


```solidity
INonfungiblePositionManager public immutable override nonfungiblePositionManager;
```


### MULTIPLIER

```solidity
uint24 internal constant MULTIPLIER = 1e6;
```


## Functions
### constructor


```solidity
constructor(
    IUniswapV3Pool _pool,
    ITalosOptimizer _optimizer,
    INonfungiblePositionManager _nonfungiblePositionManager,
    address _strategyManager,
    address _owner
) ERC20("TALOS LP", "TLP", 18);
```

### init

Initializes the Optimizer with the given parameters.

*Makes first deposit and mints tokenId.*


```solidity
function init(uint256 amount0Desired, uint256 amount1Desired, address receiver)
    external
    virtual
    nonReentrant
    returns (uint256 shares, uint256 amount0, uint256 amount1);
```

### deposit

Deposits tokens in proportion to the Optimizer's current ticks.


```solidity
function deposit(uint256 amount0Desired, uint256 amount1Desired, address receiver)
    public
    virtual
    override
    nonReentrant
    checkDeviation
    returns (uint256 shares, uint256 amount0, uint256 amount1);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`amount0Desired`|`uint256`|Max amount of token0 to deposit|
|`amount1Desired`|`uint256`|Max amount of token1 to deposit|
|`receiver`|`address`|address that tlp should be transfered|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint256`|minted|
|`amount0`|`uint256`|Amount of token0 deposited|
|`amount1`|`uint256`|Amount of token1 deposited|


### redeem

Withdraws tokens in proportion to the Optimizer's holdings.

*Removes proportional amount of liquidity from Uniswap.*


```solidity
function redeem(uint256 shares, uint256 amount0Min, uint256 amount1Min, address receiver, address _owner)
    public
    virtual
    override
    nonReentrant
    checkDeviation
    returns (uint256 amount0, uint256 amount1);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint256`|burned|
|`amount0Min`|`uint256`|Min amount of token0 to withdraw|
|`amount1Min`|`uint256`|Min amount of token1 to withdraw|
|`receiver`|`address`|address that tokens should be transfered|
|`_owner`|`address`||

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`amount0`|`uint256`|Amount of token0 sent to recipient|
|`amount1`|`uint256`|Amount of token1 sent to recipient|


### rerange

Updates Optimizer's positions. Can only be called by the strategy manager.

*Finds base position and limit position for imbalanced token
mints all amounts to this position (including earned fees)*


```solidity
function rerange() external virtual override nonReentrant checkDeviation onlyStrategyManager;
```

### rebalance

Updates Optimizer's positions. Can only be called by the strategy manager.

*Swaps imbalanced token. Finds base position and limit position for imbalanced token if
we don't have balance during swap because of price impact.
mints all amounts to this position (including earned fees)*


```solidity
function rebalance() external virtual override nonReentrant checkDeviation onlyStrategyManager;
```

### onERC721Received


```solidity
function onERC721Received(address, address, uint256, bytes calldata) external pure override returns (bytes4);
```

### uniswapV3SwapCallback

Called to `msg.sender` after minting swaping from IUniswapV3Pool#swap.

*In the implementation you must pay to the pool for swap.*


```solidity
function uniswapV3SwapCallback(int256 amount0, int256 amount1, bytes calldata _data) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`amount0`|`int256`|The amount of token0 due to the pool for the swap|
|`amount1`|`int256`|The amount of token1 due to the pool for the swap|
|`_data`|`bytes`|Any data passed through by the caller via the IUniswapV3PoolActions#swap call|


### _withdrawAll

Redeems all liquidity for a specific tokenId


```solidity
function _withdrawAll(uint256 _tokenId) internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_tokenId`|`uint256`|position to withdraw liquidity from|


### beforeDeposit


```solidity
function beforeDeposit(uint256 _tokenId, address _receiver) internal virtual;
```

### afterDeposit


```solidity
function afterDeposit(uint256 _tokenId) internal virtual;
```

### beforeRedeem


```solidity
function beforeRedeem(uint256 _tokenId, address _owner) internal virtual;
```

### afterRedeem


```solidity
function afterRedeem(uint256 _tokenId) internal virtual;
```

### beforeRerange


```solidity
function beforeRerange(uint256 _tokenId) internal virtual;
```

### afterRerange


```solidity
function afterRerange(uint256 _tokenId) internal virtual;
```

### doRerange


```solidity
function doRerange() internal virtual returns (uint256 amount0, uint256 amount1);
```

### doRebalance


```solidity
function doRebalance() internal virtual returns (uint256 amount0, uint256 amount1);
```

### collectProtocolFees

Used to withdraw accumulated protocol fees.


```solidity
function collectProtocolFees(uint256 amount0, uint256 amount1) external nonReentrant onlyOwner;
```

### checkDeviation

Function modifier that checks if price has not moved a lot recently.
This mitigates price manipulation during rebalance and also prevents placing orders when it's too volatile.


```solidity
modifier checkDeviation();
```

### onlyStrategyManager

Function modifier that checks if msg.sender is the strategy manager.


```solidity
modifier onlyStrategyManager();
```

