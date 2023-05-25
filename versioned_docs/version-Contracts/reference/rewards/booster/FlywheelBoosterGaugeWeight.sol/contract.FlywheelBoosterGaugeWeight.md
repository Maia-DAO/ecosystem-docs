# FlywheelBoosterGaugeWeight

**Inherits:**
[IFlywheelBooster](/rewards/interfaces/IFlywheelBooster.sol/interface.IFlywheelBooster.md)

Flywheel is a general framework for managing token incentives.
It takes reward streams to various *strategies* such as staking LP tokens and divides them among *users* of those strategies.
The Booster module is an optional module for virtually boosting or otherwise transforming user balances.
If a booster is not configured, the strategies ERC-20 balanceOf/totalSupply will be used instead.
Boosting logic can be associated with referrals, vote-escrow, or other strategies.
SECURITY NOTE: similar to how Core needs to be notified any time the strategy user composition changes, the booster would need to be notified of any conditions which change the boosted balances atomically.
This prevents gaming of the reward calculation function by using manipulated balances when accruing.
NOTE: Gets total and user voting power allocated to each strategy.
⣿⡇⣿⣿⣿⠛⠁⣴⣿⡿⠿⠧⠹⠿⠘⣿⣿⣿⡇⢸⡻⣿⣿⣿⣿⣿⣿⣿
⢹⡇⣿⣿⣿⠄⣞⣯⣷⣾⣿⣿⣧⡹⡆⡀⠉⢹⡌⠐⢿⣿⣿⣿⡞⣿⣿⣿
⣾⡇⣿⣿⡇⣾⣿⣿⣿⣿⣿⣿⣿⣿⣄⢻⣦⡀⠁⢸⡌⠻⣿⣿⣿⡽⣿⣿
⡇⣿⠹⣿⡇⡟⠛⣉⠁⠉⠉⠻⡿⣿⣿⣿⣿⣿⣦⣄⡉⠂⠈⠙⢿⣿⣝⣿
⠤⢿⡄⠹⣧⣷⣸⡇⠄⠄⠲⢰⣌⣾⣿⣿⣿⣿⣿⣿⣶⣤⣤⡀⠄⠈⠻⢮
⠄⢸⣧⠄⢘⢻⣿⡇⢀⣀⠄⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⡀⠄⢀
⠄⠈⣿⡆⢸⣿⣿⣿⣬⣭⣴⣿⣿⣿⣿⣿⣿⣿⣯⠝⠛⠛⠙⢿⡿⠃⠄⢸
⠄⠄⢿⣿⡀⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⡾⠁⢠⡇⢀
⠄⠄⢸⣿⡇⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣏⣫⣻⡟⢀⠄⣿⣷⣾
⠄⠄⢸⣿⡇⠄⠈⠙⠿⣿⣿⣿⣮⣿⣿⣿⣿⣿⣿⣿⣿⡿⢠⠊⢀⡇⣿⣿
⠒⠤⠄⣿⡇⢀⡲⠄⠄⠈⠙⠻⢿⣿⣿⠿⠿⠟⠛⠋⠁⣰⠇⠄⢸⣿⣿⣿
⠄⠄⠄⣿⡇⢬⡻⡇⡄⠄⠄⠄⡰⢖⠔⠉⠄⠄⠄⠄⣼⠏⠄⠄⢸⣿⣿⣿
⠄⠄⠄⣿⡇⠄⠙⢌⢷⣆⡀⡾⡣⠃⠄⠄⠄⠄⠄⣼⡟⠄⠄⠄⠄⢿⣿⣿


## State Variables
### bhermes
the bHermes gauge weight contract


```solidity
bHermesGauges private immutable bhermes;
```


## Functions
### constructor

constructor


```solidity
constructor(bHermesGauges _bHermesGauges);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_bHermesGauges`|`bHermesGauges`|the bHermes gauge weight contract|


### boostedTotalSupply

calculate the boosted supply of a strategy.

*Total gauge weight allocated to the strategy*


```solidity
function boostedTotalSupply(ERC20 strategy) external view returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`strategy`|`ERC20`|the strategy to calculate boosted supply of|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|the boosted supply|


### boostedBalanceOf

Calculate the boosted balance of a user in a given strategy.

*User's gauge weight allocated to the strategy*


```solidity
function boostedBalanceOf(ERC20 strategy, address user) external view returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`strategy`|`ERC20`|the strategy to calculate boosted balance of|
|`user`|`address`|the user to calculate boosted balance of|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|the boosted balance|


