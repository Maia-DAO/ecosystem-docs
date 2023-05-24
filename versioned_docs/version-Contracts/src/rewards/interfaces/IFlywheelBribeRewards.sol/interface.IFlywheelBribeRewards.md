# IFlywheelBribeRewards
[Git Source](https://github.com/Maia-DAO/test-env-V2/blob/84b5f9e8695c91ddb02f27bb3dfb1c652f55ced4/rewards/interfaces/IFlywheelBribeRewards.sol)

**Inherits:**
[IFlywheelAcummulatedRewards](/rewards/interfaces/IFlywheelAcummulatedRewards.sol/interface.IFlywheelAcummulatedRewards.md)

**Author:**
Maia DAO (https://github.com/Maia-DAO)

Distributes rewards for allocation to voters at the end of each epoch in accordance to votes.


## Functions
### rewardsDepots

RewardsDepot for each strategy


```solidity
function rewardsDepots(ERC20) external view returns (RewardsDepot);
```

### setRewardsDepot

swap out the flywheel rewards contract


```solidity
function setRewardsDepot(RewardsDepot rewardsDepot) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`rewardsDepot`|`RewardsDepot`|the new rewards depot to set|


## Events
### AddRewardsDepot
emitted when a new rewards depot is added


```solidity
event AddRewardsDepot(address indexed strategy, RewardsDepot indexed rewardsDepot);
```

