# RewardsDepot
[Git Source](https://github.com/Maia-DAO/test-env-V2/blob/84b5f9e8695c91ddb02f27bb3dfb1c652f55ced4/rewards/depots/RewardsDepot.sol)

**Inherits:**
[IRewardsDepot](/rewards/interfaces/IRewardsDepot.sol/interface.IRewardsDepot.md)


## Functions
### getRewards

returns available reward amount and transfer them to rewardsContract.

*Can only be called by Flywheel Rewards distributor contract.*


```solidity
function getRewards() external virtual returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|balance available reward amount for strategy.|


### transferRewards

Transfer balance of token to rewards contract


```solidity
function transferRewards(address _asset, address _rewardsContract) internal returns (uint256 balance);
```

### onlyFlywheelRewards


```solidity
modifier onlyFlywheelRewards() virtual;
```

