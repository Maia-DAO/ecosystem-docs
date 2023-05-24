# RewardMath
[Git Source](https://github.com/Maia-DAO/test-env-V2/blob/84b5f9e8695c91ddb02f27bb3dfb1c652f55ced4/uni-v3-staker/libraries/RewardMath.sol)

Allows computing rewards given some parameters of boost, stakes and incentives


## Functions
### computeBoostedSecondsInsideX128

Compute the amount of rewards owed given parameters of the incentive and stake


```solidity
function computeBoostedSecondsInsideX128(
    uint256 stakedDuration,
    uint128 liquidity,
    uint128 boostAmount,
    uint128 boostTotalSupply,
    uint160 secondsPerLiquidityInsideInitialX128,
    uint160 secondsPerLiquidityInsideX128
) internal pure returns (uint160 boostedSecondsInsideX128);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`stakedDuration`|`uint256`|The duration staked or 1 week if larger than 1 week|
|`liquidity`|`uint128`|The amount of liquidity, assumed to be constant over the period over which the snapshots are measured|
|`boostAmount`|`uint128`|The amount of boost tokens staked|
|`boostTotalSupply`|`uint128`|The total amount of boost tokens staked|
|`secondsPerLiquidityInsideInitialX128`|`uint160`|The seconds per liquidity of the liquidity tick range as of the beginning of the period|
|`secondsPerLiquidityInsideX128`|`uint160`|The seconds per liquidity of the liquidity tick range as of the current block timestamp|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`boostedSecondsInsideX128`|`uint160`|The total liquidity seconds inside the position's range for the duration of the stake, adjusted to account for boost|


### computeBoostedRewardAmount

Compute the amount of rewards owed given parameters of the incentive and stake


```solidity
function computeBoostedRewardAmount(
    uint256 totalRewardUnclaimed,
    uint160 totalSecondsClaimedX128,
    uint256 startTime,
    uint256 endTime,
    uint160 secondsInsideX128,
    uint256 currentTime
) internal pure returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`totalRewardUnclaimed`|`uint256`|The total amount of unclaimed rewards left for an incentive|
|`totalSecondsClaimedX128`|`uint160`|How many full liquidity seconds have been already claimed for the incentive|
|`startTime`|`uint256`|When the incentive rewards began in epoch seconds|
|`endTime`|`uint256`|When rewards are no longer being dripped out in epoch seconds|
|`secondsInsideX128`|`uint160`|The total liquidity seconds inside the position's range for the duration of the stake|
|`currentTime`|`uint256`|The current block timestamp, which must be greater than or equal to the start time|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|reward The amount of rewards owed|


