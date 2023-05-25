# UniswapV3Staker

**Inherits:**
[IUniswapV3Staker](/uni-v3-staker/interfaces/IUniswapV3Staker.sol/interface.IUniswapV3Staker.md), Multicallable


## State Variables
### gaugePool
returns the pool address for a given gauge.


```solidity
mapping(address => IUniswapV3Pool) public gaugePool;
```


### gauges
gauges[IUniswapV3Pool] => UniswapV3Gauge


```solidity
mapping(IUniswapV3Pool => UniswapV3Gauge) public gauges;
```


### bribeDepots
bribeDepots[IUniswapV3Pool] => bribeDepot;


```solidity
mapping(IUniswapV3Pool => address) public bribeDepots;
```


### poolsMinimumWidth
poolsMinimumWidth[IUniswapV3Pool] => minimumWidth


```solidity
mapping(IUniswapV3Pool => uint24) public poolsMinimumWidth;
```


### incentives
Represents a staking incentive


```solidity
mapping(bytes32 => Incentive) public override incentives;
```


### deposits
Returns information about a deposited NFT


```solidity
mapping(uint256 => Deposit) public override deposits;
```


### _userAttachements
stakes[user][pool] => tokenId of attached position of user per pool


```solidity
mapping(address => mapping(IUniswapV3Pool => uint256)) private _userAttachements;
```


### _stakes
*stakes[tokenId][incentiveHash] => Stake*


```solidity
mapping(uint256 => mapping(bytes32 => Stake)) private _stakes;
```


### stakedIncentiveKey
*stakedIncentives[tokenId] => incentiveIds*


```solidity
mapping(uint256 => IncentiveKey) private stakedIncentiveKey;
```


### rewards
Returns amounts of reward tokens owed to a given address according to the last time all stakes were updated


```solidity
mapping(address => uint256) public override rewards;
```


### tokenIdRewards
For external accounting purposes only.

*tokenIdRewards[owner] => tokenIdRewards*


```solidity
mapping(uint256 => uint256) public tokenIdRewards;
```


### uniswapV3GaugeFactory
The address of the Uniswap V3 Gauge Factory


```solidity
IUniswapV3GaugeFactory public immutable uniswapV3GaugeFactory;
```


### factory
The Uniswap V3 Factory


```solidity
IUniswapV3Factory public immutable override factory;
```


### nonfungiblePositionManager
The nonfungible position manager with which this staking contract is compatible


```solidity
INonfungiblePositionManager public immutable override nonfungiblePositionManager;
```


### maxIncentiveStartLeadTime
The max amount of seconds into the future the incentive startTime can be set


```solidity
uint256 public immutable override maxIncentiveStartLeadTime;
```


### minter
Address to send undistributed rewards


```solidity
address public immutable minter;
```


### hermes
The reward token


```solidity
address public immutable hermes;
```


### hermesGaugeBoost
bHermes boost token


```solidity
bHermesBoost public immutable hermesGaugeBoost;
```


## Functions
### stakes

Returns information about a staked liquidity NFT


```solidity
function stakes(uint256 tokenId, bytes32 incentiveId)
    public
    view
    override
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


### userAttachements

Returns tokenId of the attached position of user per pool

*Returns 0 if no position is attached*


```solidity
function userAttachements(address user, IUniswapV3Pool pool) external view override returns (uint256);
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


### constructor


```solidity
constructor(
    IUniswapV3Factory _factory,
    INonfungiblePositionManager _nonfungiblePositionManager,
    IUniswapV3GaugeFactory _uniswapV3GaugeFactory,
    bHermesBoost _hermesGaugeBoost,
    uint256 _maxIncentiveStartLeadTime,
    address _minter,
    address _hermes
);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_factory`|`IUniswapV3Factory`|the Uniswap V3 factory|
|`_nonfungiblePositionManager`|`INonfungiblePositionManager`|the NFT position manager contract address|
|`_uniswapV3GaugeFactory`|`IUniswapV3GaugeFactory`||
|`_hermesGaugeBoost`|`bHermesBoost`||
|`_maxIncentiveStartLeadTime`|`uint256`|the max duration of an incentive in seconds|
|`_minter`|`address`||
|`_hermes`|`address`||


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


### onERC721Received

*Upon receiving a Uniswap V3 ERC721, create the token deposit and
_stakes in current incentive setting owner to `from`.*


```solidity
function onERC721Received(address, address from, uint256 tokenId, bytes calldata) external override returns (bytes4);
```

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
    view
    override
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


### restakeToken


```solidity
function restakeToken(uint256 tokenId) external;
```

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

Unstakes a Uniswap V3 LP token from all it's staked incentives


```solidity
function unstakeToken(IncentiveKey memory key, uint256 tokenId) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`key`|`IncentiveKey`||
|`tokenId`|`uint256`|The ID of the token to unstake|


### _unstakeToken


```solidity
function _unstakeToken(IncentiveKey memory key, uint256 tokenId, bool isNotRestake) private;
```

### stakeToken

Stakes a Uniswap V3 LP token


```solidity
function stakeToken(uint256 tokenId) external override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`tokenId`|`uint256`|The ID of the token to stake|


### _stakeToken

*Stakes a deposited token without doing an already staked in another position check*


```solidity
function _stakeToken(uint256 tokenId, IUniswapV3Pool pool, int24 tickLower, int24 tickUpper, uint128 liquidity)
    private;
```

### updateGauges

Updates the gauge for the given pool

*Adds gauge to a pool and updates bribeDepot and poolMinimumWidth*


```solidity
function updateGauges(IUniswapV3Pool uniswapV3Pool) external;
```

### updateBribeDepot

Updates the bribeDepot for the given pool


```solidity
function updateBribeDepot(IUniswapV3Pool uniswapV3Pool) public;
```

### updatePoolMinimumWidth

Updates the poolMinimumWidth for the given pool


```solidity
function updatePoolMinimumWidth(IUniswapV3Pool uniswapV3Pool) public;
```

