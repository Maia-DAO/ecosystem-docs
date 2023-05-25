# IUniswapV3Staker

**Inherits:**
IERC721Receiver

**Author:**
Maia DAO (https://github.com/Maia-DAO)

Allows staking non-fungible liquidity tokens in exchange for reward tokens.
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣤⣤⣤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣾⣿⣿⣿⣿⣟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣾⣿⣿⣿⠋⣸⣿⣿⣿⣿⣿⠹⣿⣿⣿⣿⣿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣾⣿⣿⣿⡿⠁⣰⣿⣿⣿⣿⣿⣿⡄⠙⣿⣿⣿⣿⣿⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⠇⢠⣿⣿⣿⣿⢿⡟⣿⣃⣀⣹⣿⣿⣿⣿⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⣿⣿⡿⣠⠿⣟⠉⠋⠉⠀⠁⠙⣿⣿⣽⢿⣿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠞⠁⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⡿⢳⣿⢿⣧⠀⠀⠀⠀⠀⠃⠀⠛⢹⣿⣿⣿⣿⣆⢻⣆⠀⠀⠀⠀⠀⢀⡤⠖⠒⠋⢹⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣧⣿⣿⣿⡗⠀⠈⠋⠂⠀⠀⠀⠀⠀⠀⠀⠉⠑⡾⣿⣿⣿⣿⣿⠈⣿⠀⠀⢀⣤⡴⠋⠀⠀⠀⡇⢸⠀⠀⣀⠔
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢈⣟⣿⣿⣿⣧⣄⠀⠀⠁⠀⣠⠴⠒⠒⠲⡄⠀⢰⡇⣿⣿⣿⣿⣿⠀⣿⠤⠴⡋⠀⠀⠀⠀⠀⠀⢃⠀⡷⠊⠁⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡞⠹⣿⣿⣿⣿⣿⣆⠀⠀⠀⠙⠳⠶⠶⠋⠀⠀⣼⣾⣿⣿⣿⣿⡟⣸⠏⠀⠀⡇⠀⠀⠀⠀⠀⠀⢸⣀⡇⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠞⠀⠀⢻⣿⣿⣿⣿⣿⣷⣤⣄⣀⡀⠀⠀⣀⣠⠾⣿⣿⣿⣿⣿⣿⣿⢟⠀⠀⢰⠁⠀⠀⠀⠀⠀⠀⢸⡿⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⠤⠞⠁⠀⠀⠀⠰⡿⣿⣿⣿⣿⣿⣿⣿⣩⣿⠗⠛⠒⠀⣸⣿⣿⣿⣿⣿⡿⠑⢸⠀⠀⡸⠀⠀⠀⡀⠀⠀⢀⠟⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠑⢻⣿⣿⣿⣿⣿⡏⢹⠱⢄⣀⠤⠚⣿⣿⣿⣿⣿⠯⡇⠀⠀⡆⠀⡇⠀⠀⢸⠃⠀⢠⠟⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿⣿⣿⢄⠸⡇⠀⠀⠀⢺⣿⣿⣏⣿⡏⠚⣧⡀⠀⢻⡀⠇⠀⠀⣼⠀⢠⠏⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡤⢒⠟⡅⠸⣿⣿⢺⢹⡈⢦⣣⠀⠀⠀⢸⡀⢿⡿⠌⡟⠀⠀⠀⠀⠀⢣⡀⠀⠀⡏⢠⠟⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⠔⠁⠐⠃⠀⠻⡄⠀⠘⠜⠛⢧⡈⢻⡄⢀⣶⣿⡿⠀⠀⢺⠃⠀⠀⠀⠀⠀⠘⡇⠀⢸⣠⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣰⠏⣡⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⠙⢲⣽⣾⣿⣋⣤⣄⣀⣼⡇⠀⠀⠀⠀⠀⠀⢸⡀⣼⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡠⠴⠋⠁⠀⡄⡇⠀⠀⠳⣄⠀⠀⠀⠘⡆⠀⠀⠀⠀⠀⣼⣿⣿⣋⢁⣀⠉⠉⠘⡇⠀⠀⠀⠀⠀⠀⠀⢳⡍⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣇⢷⠀⠀⠀⠈⠳⣄⠀⠀⢿⠀⠀⠀⠀⠀⡛⢛⡇⠘⣟⠉⡗⠀⣤⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⡟⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡠⠤⠘⠦⣳⣤⡤⣄⣀⡬⠷⣄⡘⡄⠀⢠⠀⢸⡇⢸⣇⣴⠟⠛⣽⣲⣿⡯⡄⠀⠀⠀⠀⠀⠀⠀⠀⡇⢸⡀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠁⠀⠀⠀⠀⠈⠁⠀⠀⠀⠀⠀⠀⠙⣇⠀⡎⠀⢸⣷⣾⡟⢁⣦⣤⣭⣿⣸⡁⢻⠀⠀⠀⠀⠀⠀⠀⠀⡇⠈⣧⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣤⠇⠀⢸⡿⣟⠀⠘⢻⠁⠀⠀⠋⠉⠙⣇⠀⠀⠀⠀⠀⠀⠀⡇⠀⠙⢧⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⠀⣾⡇⠈⠃⠀⠈⣧⠀⠀⠀⠀⠀⢻⡄⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⢷⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠇⠀⠀⣿⢱⠀⠀⠀⠀⠸⡄⠀⠀⠀⠀⠸⣷⠀⠀⠀⠀⠀⠀⠁⠀⠀⠀⠘⡆⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡼⠀⠀⢠⡏⠸⡀⠀⠀⠀⠀⢻⡄⠀⠀⠀⠀⠻⡆⠀⠀⠀⠀⠸⠀⠀⠀⠀⣼⠁⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⣤⡷⢄⠇⠀⠀⠀⠀⠀⠙⢆⠀⠀⠀⠀⢿⡀⠀⠀⠀⠀⠀⠀⠀⢰⠏⡆⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⢰⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣷⡀⠀⠀⠀⠀⠀⣰⠃⣰⠃⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢣⠀⢸⣿⣟⠛⣦⢄⡀⠀⠀⠀⠀⠀⢀⣠⠤⠊⢉⡼⡇⠀⠀⠀⢀⡜⠁⣰⠃⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢦⡘⢿⣿⡄⠈⠙⠛⠿⠶⠶⠶⠯⠉⠀⠒⠈⠀⣀⣿⢀⣠⠴⠋⠠⠞⢹⠀⠀⠀


## Functions
### factory

The Uniswap V3 Factory


```solidity
function factory() external view returns (IUniswapV3Factory);
```

### nonfungiblePositionManager

The nonfungible position manager with which this staking contract is compatible


```solidity
function nonfungiblePositionManager() external view returns (INonfungiblePositionManager);
```

### maxIncentiveStartLeadTime

The max amount of seconds into the future the incentive startTime can be set


```solidity
function maxIncentiveStartLeadTime() external view returns (uint256);
```

### minter

Address to send undistributed rewards


```solidity
function minter() external view returns (address);
```

### hermes

The reward token


```solidity
function hermes() external view returns (address);
```

### hermesGaugeBoost

bHermes boost token


```solidity
function hermesGaugeBoost() external view returns (bHermesBoost);
```

### gaugePool

returns the pool address for a given gauge.


```solidity
function gaugePool(address) external view returns (IUniswapV3Pool);
```

### gauges

gauges[IUniswapV3Pool] => UniswapV3Gauge


```solidity
function gauges(IUniswapV3Pool) external view returns (UniswapV3Gauge);
```

### bribeDepots

bribeDepots[IUniswapV3Pool] => bribeDepot;


```solidity
function bribeDepots(IUniswapV3Pool) external view returns (address);
```

### poolsMinimumWidth

poolsMinimumWidth[IUniswapV3Pool] => minimumWidth


```solidity
function poolsMinimumWidth(IUniswapV3Pool) external view returns (uint24);
```

### incentives

Represents a staking incentive


```solidity
function incentives(bytes32 incentiveId)
    external
    view
    returns (uint256 totalRewardUnclaimed, uint160 totalSecondsClaimedX128, uint96 numberOfStakes);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`incentiveId`|`bytes32`|The ID of the incentive computed from its parameters|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`totalRewardUnclaimed`|`uint256`|The amount of reward token not yet claimed by users|
|`totalSecondsClaimedX128`|`uint160`|Total liquidity-seconds claimed, represented as a UQ32.128|
|`numberOfStakes`|`uint96`|The count of deposits that are currently staked for the incentive|


### deposits

Returns information about a deposited NFT


```solidity
function deposits(uint256 tokenId)
    external
    view
    returns (address owner, int24 tickLower, int24 tickUpper, uint40 stakedTimestamp);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`owner`|`address`|The owner of the deposited NFT|
|`tickLower`|`int24`|The lower tick of the range|
|`tickUpper`|`int24`|The upper tick of the range|
|`stakedTimestamp`|`uint40`|The time at which the liquidity was staked|


### userAttachements

Returns tokenId of the attached position of user per pool

*Returns 0 if no position is attached*


```solidity
function userAttachements(address user, IUniswapV3Pool pool) external view returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`user`|`address`|The address of the user|
|`pool`|`IUniswapV3Pool`|The Uniswap V3 pool|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|tokenId The ID of the attached position|


### stakes

Returns information about a staked liquidity NFT


```solidity
function stakes(uint256 tokenId, bytes32 incentiveId)
    external
    view
    returns (uint160 secondsPerLiquidityInsideInitialX128, uint128 liquidity);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`tokenId`|`uint256`|The ID of the staked token|
|`incentiveId`|`bytes32`|The ID of the incentive for which the token is staked|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`secondsPerLiquidityInsideInitialX128`|`uint160`|secondsPerLiquidity represented as a UQ32.128|
|`liquidity`|`uint128`|The amount of liquidity in the NFT as of the last time the rewards were computed|


### rewards

Returns amounts of reward tokens owed to a given address according to the last time all stakes were updated


```solidity
function rewards(address owner) external view returns (uint256 rewardsOwed);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`owner`|`address`|The owner for which the rewards owed are checked|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`rewardsOwed`|`uint256`|The amount of the reward token claimable by the owner|


### tokenIdRewards

For external accounting purposes only.

*tokenIdRewards[owner] => tokenIdRewards*


```solidity
function tokenIdRewards(uint256 tokenId) external view returns (uint256 rewards);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`tokenId`|`uint256`|The ID of the staked token|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`rewards`|`uint256`|The total amount of rewards earned by the tokenId.|


### createIncentiveFromGauge

Creates a new incentive for the gauge's pool.

*msg sender must be a registered gauge.*


```solidity
function createIncentiveFromGauge(uint256 reward) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`reward`|`uint256`|The amount of reward tokens to be distributed|


### createIncentive

Creates a new liquidity mining incentive program


```solidity
function createIncentive(IncentiveKey memory key, uint256 reward) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`key`|`IncentiveKey`|Details of the incentive to create|
|`reward`|`uint256`|The amount of reward tokens to be distributed|


### endIncentive

Ends an incentive after the incentive end time has passed and all stakes have been withdrawn


```solidity
function endIncentive(IncentiveKey memory key) external returns (uint256 refund);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`key`|`IncentiveKey`|Details of the incentive to end|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`refund`|`uint256`|The remaining reward tokens when the incentive is ended|


### withdrawToken

Withdraws a Uniswap V3 LP token `tokenId` from this contract to the recipient `to`


```solidity
function withdrawToken(uint256 tokenId, address to, bytes memory data) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`tokenId`|`uint256`|The unique identifier of an Uniswap V3 LP token|
|`to`|`address`|The address where the LP token will be sent|
|`data`|`bytes`|An optional data array that will be passed along to the `to` address via the NFT safeTransferFrom|


### claimReward

Transfers `amountRequested` of accrued `rewardToken` rewards from the contract to the recipient `to`


```solidity
function claimReward(address to, uint256 amountRequested) external returns (uint256 reward);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`to`|`address`|The address where claimed rewards will be sent to|
|`amountRequested`|`uint256`|The amount of reward tokens to claim. Claims entire reward amount if set to 0.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`reward`|`uint256`|The amount of reward tokens claimed|


### claimAllRewards

Transfers `amountRequested` of accrued `rewardToken` rewards from the contract to the recipient `to`


```solidity
function claimAllRewards(address to) external returns (uint256 reward);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`to`|`address`|The address where claimed rewards will be sent to|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`reward`|`uint256`|The amount of reward tokens claimed|


### getRewardInfo

Calculates the reward amount that will be received for the given stake


```solidity
function getRewardInfo(IncentiveKey memory key, uint256 tokenId)
    external
    returns (uint256 reward, uint160 secondsInsideX128);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`key`|`IncentiveKey`|The key of the incentive|
|`tokenId`|`uint256`|The ID of the token|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`reward`|`uint256`|The reward accrued to the NFT for the given incentive thus far|
|`secondsInsideX128`|`uint160`|The seconds inside the tick range|


### unstakeToken

Unstakes a Uniswap V3 LP token from all it's staked incentives


```solidity
function unstakeToken(uint256 tokenId) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`tokenId`|`uint256`|The ID of the token to unstake|


### unstakeToken

Unstakes a Uniswap V3 LP token


```solidity
function unstakeToken(IncentiveKey memory key, uint256 tokenId) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`key`|`IncentiveKey`|The key of the incentive for which to unstake the NFT|
|`tokenId`|`uint256`|The ID of the token to unstake|


### stakeToken

Stakes a Uniswap V3 LP token


```solidity
function stakeToken(uint256 tokenId) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`tokenId`|`uint256`|The ID of the token to stake|


### updateGauges

Updates the gauge for the given pool

*Adds gauge to a pool and updates bribeDepot and poolMinimumWidth*


```solidity
function updateGauges(IUniswapV3Pool uniswapV3Pool) external;
```

### updateBribeDepot

Updates the bribeDepot for the given pool


```solidity
function updateBribeDepot(IUniswapV3Pool uniswapV3Pool) external;
```

### updatePoolMinimumWidth

Updates the poolMinimumWidth for the given pool


```solidity
function updatePoolMinimumWidth(IUniswapV3Pool uniswapV3Pool) external;
```

## Events
### IncentiveCreated
Event emitted when a liquidity mining incentive has been created


```solidity
event IncentiveCreated(IUniswapV3Pool indexed pool, uint256 startTime, uint256 reward);
```

### IncentiveEnded
Event that can be emitted when a liquidity mining incentive has ended


```solidity
event IncentiveEnded(bytes32 indexed incentiveId, uint256 refund);
```

### DepositTransferred
Emitted when ownership of a deposit changes


```solidity
event DepositTransferred(uint256 indexed tokenId, address indexed oldOwner, address indexed newOwner);
```

### TokenStaked
Event emitted when a Uniswap V3 LP token has been staked


```solidity
event TokenStaked(uint256 indexed tokenId, bytes32 indexed incentiveId, uint128 liquidity);
```

### TokenUnstaked
Event emitted when a Uniswap V3 LP token has been unstaked


```solidity
event TokenUnstaked(uint256 indexed tokenId, bytes32 indexed incentiveId);
```

### RewardClaimed
Event emitted when a reward token has been claimed


```solidity
event RewardClaimed(address indexed to, uint256 reward);
```

### BribeDepotUpdated
Event emitted when updating the bribeDepot for a pool


```solidity
event BribeDepotUpdated(IUniswapV3Pool indexed uniswapV3Pool, address bribeDepot);
```

### PoolMinimumWidthUpdated
Event emitted when updating the poolMinimumWidth for a pool


```solidity
event PoolMinimumWidthUpdated(IUniswapV3Pool indexed uniswapV3Pool, uint24 indexed poolMinimumWidth);
```

### GaugeUpdated
Event emitted when updating the gauge address for a pool


```solidity
event GaugeUpdated(IUniswapV3Pool indexed uniswapV3Pool, address indexed uniswapV3Gauge);
```

## Errors
### InvalidGauge

```solidity
error InvalidGauge();
```

### NotCalledByOwner

```solidity
error NotCalledByOwner();
```

### IncentiveRewardMustBePositive

```solidity
error IncentiveRewardMustBePositive();
```

### IncentiveStartTimeMustBeNowOrInTheFuture

```solidity
error IncentiveStartTimeMustBeNowOrInTheFuture();
```

### IncentiveStartTimeNotAtEndOfAnEpoch

```solidity
error IncentiveStartTimeNotAtEndOfAnEpoch();
```

### IncentiveStartTimeTooFarIntoFuture

```solidity
error IncentiveStartTimeTooFarIntoFuture();
```

### IncentiveCallerMustBeRegisteredGauge

```solidity
error IncentiveCallerMustBeRegisteredGauge();
```

### IncentiveCannotBeCreatedForPoolWithNoGauge

```solidity
error IncentiveCannotBeCreatedForPoolWithNoGauge();
```

### EndIncentiveBeforeEndTime

```solidity
error EndIncentiveBeforeEndTime();
```

### EndIncentiveWhileStakesArePresent

```solidity
error EndIncentiveWhileStakesArePresent();
```

### EndIncentiveNoRefundAvailable

```solidity
error EndIncentiveNoRefundAvailable();
```

### TokenNotUniswapV3NFT

```solidity
error TokenNotUniswapV3NFT();
```

### TokenNotStaked

```solidity
error TokenNotStaked();
```

### TokenNotDeposited

```solidity
error TokenNotDeposited();
```

### InvalidRecipient

```solidity
error InvalidRecipient();
```

### TokenStakedError

```solidity
error TokenStakedError();
```

### NonExistentIncentiveError

```solidity
error NonExistentIncentiveError();
```

### RangeTooSmallError

```solidity
error RangeTooSmallError();
```

### NoLiquidityError

```solidity
error NoLiquidityError();
```

## Structs
### IncentiveKey

```solidity
struct IncentiveKey {
    IUniswapV3Pool pool;
    uint96 startTime;
}
```

### Incentive
Represents a staking incentive


```solidity
struct Incentive {
    uint256 totalRewardUnclaimed;
    uint160 totalSecondsClaimedX128;
    uint96 numberOfStakes;
}
```

### Deposit
Represents the deposit of a liquidity NFT


```solidity
struct Deposit {
    address owner;
    int24 tickLower;
    int24 tickUpper;
    uint40 stakedTimestamp;
}
```

### Stake
Represents a staked liquidity NFT


```solidity
struct Stake {
    uint160 secondsPerLiquidityInsideInitialX128;
    uint96 liquidityNoOverflow;
    uint128 liquidityIfOverflow;
}
```

