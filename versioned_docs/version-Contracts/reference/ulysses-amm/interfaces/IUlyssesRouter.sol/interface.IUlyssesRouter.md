# IUlyssesRouter

**Author:**
Maia DAO (https://github.com/Maia-DAO)

This contract routes and adds/removes liquidity from Ulysses Pools
deployed by the Ulysses Factory, it allows users to set maximum slippage.
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠞⠉⢀⣶⠞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠑⠢⣝⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠞⠁⠀⢠⣿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣷⡀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠞⠁⠀⠀⢠⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢷⡄⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠋⠀⠀⠀⠀⢀⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢻⡄⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣸⠁⢀⡴⠃⠀⠀⣼⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢧⡀⠀⠀⢻⡄⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢰⡏⢠⠞⠀⠀⠀⢠⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡄⠀⠀⠀⢹⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣄⠀⠀⢳⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣼⣱⠋⠀⠀⠀⠀⠸⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⢰⠀⠀⠀⣿⡄⠀⠀⠀⠀⠀⠐⠦⡀⠀⠀⠀⠀⠀⠀⠀⠸⣧⠀⠸⡇⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣿⠇⠀⠀⠀⠀⠀⠀⠀⢀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡇⢸⠀⠀⠀⣿⣷⣄⠀⠀⠀⠀⠀⠀⠈⢦⡀⠀⠀⠀⠀⠀⠀⠸⣧⢀⣇⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢸⠯⠀⠀⠀⠀⠀⠀⠀⠀⣼⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣇⠈⡇⠀⠀⢻⡀⠙⠷⣄⠀⠀⠀⠀⠀⠀⠹⣦⠀⠀⠀⠀⠀⠀⣿⣿⣿⡆⠀⠀
⠀⠀⠀⠀⠀⢠⡟⠀⠀⠀⢀⡄⠀⠀⠀⢠⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣽⠇⢻⡄⡇⠀⠀⢸⣷⡀⠀⠈⠳⢄⠀⠀⠀⠀⠀⠘⣆⠀⠀⠀⠀⠀⢨⣿⣿⣇⠀⠀
⠀⠀⠀⠀⠀⡞⠀⠀⠀⢀⡞⠀⠀⠀⠀⣾⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⣿⠀⠘⣇⡇⠀⠀⢸⡌⠻⣷⣤⡀⠀⠉⠀⠀⠀⠀⠀⠘⣧⠀⠀⠀⠀⣿⣿⣿⣿⡀⠀
⠀⠀⠀⠀⣼⠁⠀⠀⠀⣼⠃⠀⠀⠀⢠⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡇⣰⡟⠀⠀⢹⡇⠀⠀⣼⠇⠀⠸⣍⠉⠙⠶⢤⣀⡀⠀⠀⠀⠘⡆⠀⠀⢠⣿⣿⣿⣿⡇⠀
⠀⠀⠀⢰⣣⠃⢰⠁⢀⡇⠀⠀⠀⠀⢸⣽⠀⢠⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⢠⠏⡇⠀⠀⠸⡇⠀⠀⢻⠀⠀⠀⠈⢿⡲⢄⠀⠀⠈⣄⠀⠀⠀⠸⡆⠀⢸⣿⣿⣿⣿⡇⠀
⠀⠀⢠⣧⡟⠀⡼⠀⢸⠀⠀⠀⠀⠀⣿⡿⡄⢸⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⢀⣏⡟⢰⠇⠀⠀⢰⠇⠀⢰⣾⠀⠀⠀⠀⠀⢸⣟⣦⣄⠀⠈⠻⣧⣄⠀⠹⠀⢸⣿⣿⣿⣿⣿⠀
⠀⠰⡫⢻⠁⢰⡇⠀⡞⠀⢠⠂⢀⠀⡿⠀⡇⠘⡆⠀⠀⠀⠀⠘⣆⠀⠀⠀⢸⡿⠀⣾⠀⠀⠀⢸⢀⠀⣼⣾⠀⠀⠀⠀⠀⠀⠻⣌⠙⠿⣦⡀⠘⢿⣦⠀⠀⢸⣿⣿⣿⣿⣿⠀
⠀⠀⠀⣼⠀⣾⠃⢰⡇⠀⡞⠀⢸⠀⡇⠀⢻⡄⡇⠀⠀⠀⠀⠀⢻⠀⠀⠀⣿⠁⠀⡏⠀⠀⠀⣸⡎⢠⡏⢏⡆⠀⠀⠀⠀⠀⠀⠙⢯⡶⣄⡈⠒⠀⠹⣧⠀⢻⣿⣿⣿⣿⣿⠀
⠀⠀⠀⡇⢰⣿⠀⣼⡇⢠⡇⠀⢸⡄⡇⠀⠀⢻⣻⡀⠰⡀⠀⠀⠈⣇⠀⢸⡟⠓⢺⠓⠶⠦⢤⣿⢁⣾⣀⣈⣻⡀⠀⠀⠀⠀⠀⠀⠈⢿⡑⠛⠷⣤⠀⠘⠄⠀⢻⣿⣿⣿⣿⠀
⠀⠀⠀⡇⡾⢯⠀⣿⡇⢸⡇⠀⢸⣇⡧⠤⠤⠒⠻⣇⠀⢳⡀⠀⠀⠸⡆⢸⠁⠀⡞⠀⠀⠀⣸⢇⠞⠁⠀⠀⠈⠳⠄⠀⠀⠀⠀⠀⠀⢀⣽⣍⢓⣮⣷⣄⡀⠀⠀⠻⣿⣿⡇⠀
⠀⠀⠀⣇⡇⢸⠀⡿⣇⢸⣧⠀⢸⢿⣳⠀⣀⣀⡀⠙⣦⠈⣷⡄⠀⠀⠹⣼⠀⣰⠃⠀⠔⢺⣏⣉⣩⣽⣂⣀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠊⣤⣾⠛⢁⣴⣮⣷⠀⠀⠀⠯⠿⡇⠀
⠀⠀⠀⢹⡇⠘⣧⣧⣹⣜⢿⠀⣾⣀⢻⣷⣭⣭⣍⣑⠊⢧⡘⡟⢦⡀⠀⠹⡤⠃⠀⢀⣀⣬⡿⢿⣿⣿⣿⣿⣿⣶⣶⣤⣤⠀⠀⢰⢇⡾⠉⣠⠞⠛⡏⠹⣽⡇⠀⠀⠀⠀⣿⠀
⠀⠀⠀⠀⢳⡼⠋⣻⣿⠉⠻⣇⣿⡿⣿⡟⢻⠿⣿⣿⣿⣭⡳⣿⣄⠙⢾⣦⡹⣄⠀⠀⠀⠀⠀⠀⣥⣼⠛⣿⣿⣿⣿⣹⠏⠀⢀⣿⡞⠀⣼⢛⢷⠀⡇⠀⢸⡇⠀⢰⠀⢧⢸⠀
⠀⠀⠀⠀⣼⠁⣰⢃⡇⡰⠀⢹⣾⡿⡌⠳⠀⢰⣿⣟⣿⡿⡅⠀⠉⠁⠀⠈⠉⠺⠧⠀⠀⠀⠀⠀⠘⢯⣋⣉⡉⣹⠓⠃⠀⠀⢸⠞⠀⠀⣝⢁⡾⠀⠁⢀⡾⠁⠀⠘⠀⠸⣾⠀
⠀⠀⠀⡸⠁⣰⠃⢸⣧⠇⠀⢸⠀⠙⢿⣆⠀⠀⠉⠳⠤⠤⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠛⠛⠋⠀⠀⠀⠀⢼⠀⠀⣀⣼⡿⠀⠀⣠⡞⠀⠀⠀⠀⡇⠀⢹⠀
⠀⠀⣰⠇⣴⠃⠀⣼⡞⠀⠀⢸⠀⠀⠀⢻⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠀⠰⠿⠝⠋⣡⣾⠋⠀⠀⠀⠀⠀⡇⠀⢸⠀
⠀⢀⡿⣴⠋⠀⠀⣿⠃⠀⠀⣿⡀⠀⠀⠀⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣴⣾⡿⠃⠀⠀⠀⠀⠀⠀⡇⠀⠀⡇
⠀⢸⣴⠇⠀⠀⢰⠇⠀⠀⢰⠿⡇⠀⡀⠀⢸⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⡿⠋⡇⣿⠀⠀⢀⠀⠀⠀⠀⠀⡇⠀⠀⢱
⢠⣏⠏⠀⠀⢀⡞⠀⠀⢠⡞⠀⡇⢸⠀⠀⠀⢿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⡿⣿⡇⣸⡹⢻⠀⠀⡸⠀⠀⠀⠀⠀⡇⠀⠀⠘
⢸⢻⠀⠀⠀⡾⠀⠀⠀⣾⠃⢠⡇⣼⠀⠀⠀⠘⣷⡀⠀⠀⠀⠀⠀⠀⠀⢀⣀⡤⠴⠶⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣾⠋⠀⣸⣧⣏⡇⢸⠀⢀⡇⠀⠀⠀⠀⠀⡇⠀⠀⠀
⡾⡸⠀⠀⣼⠁⠀⠀⣸⡟⠀⣾⣇⡟⠀⠀⠀⠀⢻⡷⣄⠀⣴⠒⠒⠒⠚⠛⠥⠤⠤⢤⣜⣯⢧⠀⠀⠀⠀⠀⠀⠀⣰⠋⠀⠀⠀⣿⠉⣽⢧⢸⠇⢸⠁⠀⠀⠀⠀⠀⡇⢀⠁⠀
⠀⡇⠀⣰⠁⠀⠀⣼⠃⡇⢀⣇⣿⠁⠀⠀⠀⠀⢀⠇⢺⣿⠃⠀⠈⠑⠒⠲⠦⠤⣤⣀⠸⡈⢻⡀⠀⠀⠀⢀⣠⠞⠁⠀⠀⠀⠀⢻⡷⠃⠘⣿⣆⡏⠀⠀⠀⠀⠀⠀⡇⠘⠀⢀
⠀⡇⣠⠇⠀⠀⣴⠁⢀⣇⡼⣿⠃⠀⠀⠀⠀⢀⡞⠀⣼⡏⠀⠀⠀⣀⠀⠀⠀⠀⠀⠈⢧⢷⡼⠁⠀⣀⣶⡟⠁⠀⠀⠀⠀⠀⢠⠞⠁⠀⠀⠘⣿⠃⠀⠀⠀⠀⠀⠀⡇⠀⠀⠜
⠀⣧⠋⠀⠀⣼⣷⣾⣍⣁⠀⠁⠀⠀⠀⢀⡤⠏⢀⣴⣿⠁⠀⠀⠀⠀⠙⠓⠲⠤⣄⠀⢸⣼⣣⣴⣾⠿⠋⠀⠀⠀⠀⠀⢀⡴⠋⠀⠀⠀⠀⢰⡇⠀⠀⠀⠀⠀⠀⠀⢁⣀⣼⡤
⠀⠃⠀⢀⡾⡉⠀⠀⢹⣏⠛⠶⢤⣴⣾⣯⣤⡶⢿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣇⢀⣿⣿⠟⠁⠀⠀⠀⠀⠀⣀⡴⠟⠁⠀⠀⠀⠀⢀⣾⠀⠀⠀⠀⠀⠀⠀⠀⡿⠀⠀⠀


## Functions
### ulyssesFactory

Returns the Ulysses Factory address


```solidity
function ulyssesFactory() external view returns (UlyssesFactory);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`UlyssesFactory`|ulyssesFactory The Ulysses Factory address|


### addLiquidity

Adds liquidity to a pool


```solidity
function addLiquidity(uint256 amount, uint256 minOutput, uint256 poolId) external returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`amount`|`uint256`|The amount of tokens to add|
|`minOutput`|`uint256`|The minimum amount of LP tokens to receive|
|`poolId`|`uint256`|The pool to add liquidity to|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|lpReceived amount of LP tokens received|


### removeLiquidity

Removes liquidity from a pool


```solidity
function removeLiquidity(uint256 amount, uint256 minOutput, uint256 poolId) external returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`amount`|`uint256`|The amount of LP tokens to remove|
|`minOutput`|`uint256`|The minimum amount of tokens to receive|
|`poolId`|`uint256`|The pool to remove liquidity from|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|tokensReceived amount of tokens received|


### swap

Swaps tokens from one pool to another


```solidity
function swap(uint256 amount, uint256 minOutput, Route[] calldata routes) external returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`amount`|`uint256`|The amount of tokens to swap|
|`minOutput`|`uint256`|The minimum amount of tokens to receive|
|`routes`|`Route[]`|The routes to take for the swap to occur|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|tokensReceived amount of tokens received|


## Errors
### OutputTooLow
Thrown when the output amount is less than the minimum output amount


```solidity
error OutputTooLow();
```

### UnrecognizedUlyssesLP
Thrown when the Ulysses pool is not recognized


```solidity
error UnrecognizedUlyssesLP();
```

## Structs
### Route
A route for a swap


```solidity
struct Route {
    uint128 from;
    uint128 to;
}
```

