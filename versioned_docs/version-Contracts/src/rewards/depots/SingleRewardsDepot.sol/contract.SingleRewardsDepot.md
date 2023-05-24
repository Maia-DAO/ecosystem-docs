# SingleRewardsDepot
[Git Source](https://github.com/Maia-DAO/test-env-V2/blob/84b5f9e8695c91ddb02f27bb3dfb1c652f55ced4/rewards/depots/SingleRewardsDepot.sol)

**Inherits:**
[RewardsDepot](/rewards/depots/RewardsDepot.sol/abstract.RewardsDepot.md)


## State Variables
### asset
*asset (reward Token) to be stored and distributed for rewards.*


```solidity
address private immutable asset;
```


### rewardsContract
*rewardsContract to send all pending rewards to*


```solidity
address private immutable rewardsContract;
```


## Functions
### constructor

SingleRewardsDepot constructor


```solidity
constructor(address _asset);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_asset`|`address`|asset to be stored and distributed for rewards.|


### getRewards

returns available reward amount and transfer them to rewardsContract.

*Can only be called by Flywheel Rewards distributor contract.*


```solidity
function getRewards() external override onlyFlywheelRewards returns (uint256 balance);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`balance`|`uint256`|available reward amount for strategy.|


### onlyFlywheelRewards


```solidity
modifier onlyFlywheelRewards() override;
```

