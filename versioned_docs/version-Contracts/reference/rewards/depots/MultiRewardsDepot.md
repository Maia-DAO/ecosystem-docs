---
id: MultiRewardsDepot
title: MultiRewardsDepot
---

**Inherits:**
Ownable, [RewardsDepot](/rewards/depots/RewardsDepot.sol/abstract.RewardsDepot.md), [IMultiRewardsDepot](/rewards/interfaces/IMultiRewardsDepot.sol/interface.IMultiRewardsDepot.md)


## State Variables
### _assets
*_assets[rewardsContracts] => asset (reward Token)*


```solidity
mapping(address => address) private _assets;
```


### _isRewardsContract
_isRewardsContracts[rewardsContracts] => true/false


```solidity
mapping(address => bool) private _isRewardsContract;
```


### _isAsset
_isAsset[asset] => true/false


```solidity
mapping(address => bool) private _isAsset;
```


## Functions
### constructor

MultiRewardsDepot constructor


```solidity
constructor(address _owner);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_owner`|`address`|owner of the contract|


### getRewards

returns available reward amount and transfer them to rewardsContract.

*msg.sender needs to be an added Flywheel Rewards distributor contract.
Transfers all associated assets to msg.sender.*


```solidity
function getRewards() external override(RewardsDepot, IMultiRewardsDepot) onlyFlywheelRewards returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|balance available reward amount for strategy.|


### addAsset

Adds an asset to be distributed by a given contract.


```solidity
function addAsset(address rewardsContract, address asset) external onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`rewardsContract`|`address`|address of the rewards contract to attach the asset to.|
|`asset`|`address`|address of the asset to be distributed.|


### removeAsset

Removes an asset from the reward contract that distributes the rewards.


```solidity
function removeAsset(address rewardsContract) external onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`rewardsContract`|`address`|address of the contract to remove the asset from being distributed.|


### onlyFlywheelRewards

modifier to check if msg.sender is a rewards contract


```solidity
modifier onlyFlywheelRewards() override;
```

