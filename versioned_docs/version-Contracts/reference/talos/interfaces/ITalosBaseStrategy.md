---
id: ITalosBaseStrategy
title: ITalosBaseStrategy
---

**Inherits:**
IERC721Receiver

**Author:**
Maia DAO (https://github.com/Maia-DAO)

This contract is responsible for managing a Uniswap V3 Non Fungible Position.
TalosBaseStrategy allows the implementation two managing functions:
- rerange
- rebalance
Both these actions are performed according to Talos Optimzer's values.
The underlying Uniswap V3 Pool NFT can be staked in any other contract by
using internal hooks.


## Functions
### tokenId

The token ID of the NFT held by the Position


```solidity
function tokenId() external view returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|tokenId of the position|


### liquidity

The total liquidity held by the position


```solidity
function liquidity() external view returns (uint128);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint128`|liquidity of the position|


### protocolFees0

Accrued protocol fees in terms of token0


```solidity
function protocolFees0() external view returns (uint256);
```

### protocolFees1

Accrued protocol fees in terms of token1


```solidity
function protocolFees1() external view returns (uint256);
```

### tickLower

The lower tick of the range


```solidity
function tickLower() external view returns (int24);
```

### tickUpper

The upper tick of the range


```solidity
function tickUpper() external view returns (int24);
```

### initialized

Checks if Optimizer is initialized


```solidity
function initialized() external view returns (bool);
```

### token0

The first of the two tokens of the pool, sorted by address


```solidity
function token0() external view returns (ERC20);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`ERC20`|The token contract address|


### token1

The second of the two tokens of the pool, sorted by address


```solidity
function token1() external view returns (ERC20);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`ERC20`|The token contract address|


### tickSpacing

The pool tick spacing

*Ticks can only be used at multiples of this value, minimum of 1 and always positive
e.g.: a tickSpacing of 3 means ticks can be initialized every 3rd tick, i.e., ..., -6, -3, 0, 3, 6, ...
This value is an int24 to avoid casting even though it is always positive.*


```solidity
function tickSpacing() external view returns (int24);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`int24`|The tick spacing|


### poolFee

The fee from Uniswap pool


```solidity
function poolFee() external view returns (uint24);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint24`|poolFee|


### pool

A Uniswap pool facilitates swapping and automated market-making between any two assets that strictly conform
to the ERC20 specification


```solidity
function pool() external view returns (IUniswapV3Pool);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`IUniswapV3Pool`|The address of the Uniswap V3 Pool|


### optimizer

The TalosOptimizer of this position


```solidity
function optimizer() external view returns (ITalosOptimizer);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`ITalosOptimizer`|optimizer of this position|


### strategyManager

This position's strategy manager.

*Can call rebalance and rerange.*


```solidity
function strategyManager() external view returns (address);
```

### nonfungiblePositionManager

The nonfungiblePositionManager to manage NFTs


```solidity
function nonfungiblePositionManager() external view returns (INonfungiblePositionManager);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`INonfungiblePositionManager`|nonfungiblePositionManager|


### init

Initializes the Optimizer with the given parameters.

*Makes first deposit and mints tokenId.*


```solidity
function init(uint256 amount0Desired, uint256 amount1Desired, address receiver)
    external
    returns (uint256 shares, uint256 amount0, uint256 amount1);
```

### deposit

Deposits tokens in proportion to the Optimizer's current ticks.


```solidity
function deposit(uint256 amount0Desired, uint256 amount1Desired, address receiver)
    external
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
function redeem(uint256 shares, uint256 amount0Min, uint256 amount1Min, address receiver, address owner)
    external
    returns (uint256 amount0, uint256 amount1);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint256`|burned|
|`amount0Min`|`uint256`|Min amount of token0 to withdraw|
|`amount1Min`|`uint256`|Min amount of token1 to withdraw|
|`receiver`|`address`|address that tokens should be transfered|
|`owner`|`address`|of the shares to be burned|

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
function rerange() external;
```

### rebalance

Updates Optimizer's positions. Can only be called by the strategy manager.

*Swaps imbalanced token. Finds base position and limit position for imbalanced token if
we don't have balance during swap because of price impact.
mints all amounts to this position (including earned fees)*


```solidity
function rebalance() external;
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


### collectProtocolFees

Used to withdraw accumulated protocol fees.


```solidity
function collectProtocolFees(uint256 amount0, uint256 amount1) external;
```

## Events
### RewardPaid
Emitted when user collects his fee share


```solidity
event RewardPaid(address indexed sender, uint256 fees0, uint256 fees1);
```

### Initialize
Emitted when TalosV3 Optimizer is initialized


```solidity
event Initialize(
    uint256 indexed tokenId,
    address indexed caller,
    address indexed owner,
    uint256 amount0,
    uint256 amount1,
    uint256 shares
);
```

### Deposit
Emitted when TalosV3 Optimizer is deposited


```solidity
event Deposit(address indexed caller, address indexed owner, uint256 amount0, uint256 amount1, uint256 shares);
```

### Redeem
Emitted when TalosV3 Optimizer is redeemed


```solidity
event Redeem(
    address indexed caller,
    address indexed receiver,
    address indexed owner,
    uint256 amount0,
    uint256 amount1,
    uint256 shares
);
```

### Rerange
Emitted when TalosV3 Optimizer changes the position in the pool


```solidity
event Rerange(uint256 indexed tokenId, int24 tickLower, int24 tickUpper, uint256 amount0, uint256 amount1);
```

### Snapshot
Shows current Optimizer's balances


```solidity
event Snapshot(uint256 totalAmount0, uint256 totalAmount1);
```

## Errors
### NotStrategyManager
Error emitted when caller is not the strategy manager


```solidity
error NotStrategyManager();
```

### AlreadyInitialized
Error emitted when trying to initialize an already initialized pool


```solidity
error AlreadyInitialized();
```

### ExceedingMaxTotalSupply
Error emitted when trying to add more liquidity than maxTotalSupply


```solidity
error ExceedingMaxTotalSupply();
```

### CallerIsNotPool
Error emitted when caller is not the Uniswap V3 Pool


```solidity
error CallerIsNotPool();
```

### AmountsAreZero
Error emitted when both amounts are zero


```solidity
error AmountsAreZero();
```

### RedeemingZeroShares
Error emitted when widthdrawing zero shares


```solidity
error RedeemingZeroShares();
```

### ReceiverIsZeroAddress
Error emitted when receiver is zero address


```solidity
error ReceiverIsZeroAddress();
```

### Token0AmountIsBiggerThanProtocolFees

```solidity
error Token0AmountIsBiggerThanProtocolFees();
```

### Token1AmountIsBiggerThanProtocolFees

```solidity
error Token1AmountIsBiggerThanProtocolFees();
```

## Structs
### SwapCallbackData
Any data passed through by the caller via the IUniswapV3PoolActions#swap call


```solidity
struct SwapCallbackData {
    bool zeroForOne;
}
```

