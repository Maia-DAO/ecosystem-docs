---
id: IMultiRewardsDepot
title: IMultiRewardsDepot
---

**Author:**
Maia DAO (https://github.com/Maia-DAO)

Holds multiple rewards to be distributed to Flywheel Rewards distributor contracts.
When `getRewards()` is called by an added flywheel rewards, it transfers
its balance of the associated assets to its flywheel rewards contract.
⠉⠉⠉⠉⠉⠉⠉⠉⢉⠟⣩⠋⠉⠉⢩⠟⠉⣹⠋⡽⠉⠉⠉⠉⠉⠉⠉⠉⡏⠉⠉⠉⠉⠉⠉⠹⠹⡉⠉⠉⢙⠻⡍⠉⠉⠹⡍⠉⠉⠉
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠰⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡟⠀⠀⠀⠀⠀⠀⠀⠈⢻⡽⣄⠀⠀⠀⠙⣄⠀⠻⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢯⣎⢧⡀⠀⠀⠘⢦⠀⢹⡄⠀⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠀⢀⣀⣠⣤⣶⠾⠷⠞⢿⡏⠻⣄⠀⠀⠈⢧⡀⢻⡄⠀⢆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣾⡾⠟⠛⠉⠁⠀⠀⠀⠀⠈⢳⡀⠈⢳⡀⠀⠀⠻⣄⢹⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣄⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠸⠉⢹⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢳⡀⠀⠙⢦⡀⠀⠘⢦⣻⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢰⠀⠀⠀⠀⠀⠀⡆⠀⠀⢸⡀⠀⠀⠀⠀⠀⠀⠀⠈⡇⠀⠀⠈⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠱⣄⠀⠀⠙⢦⡀⠀⠉⢻⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁
⠀⠀⠀⠀⠀⠀⠀⠀⢸⣟⠀⠀⠀⠀⣷⢣⣀⣀⠘⣧⠀⠀⠀⣶⠀⠀⠀⠀⢹⡄⠀⠀⠸⡆⠀⠀⠀⣀⣀⡤⠴⠶⠶⠶⠶⠘⠦⠤⣀⡀⠉⠳⢤⡀⢳⡀⠀⠀⠀⠀⠀⠀⠀⠀⡼
⠀⠀⠀⠀⠀⠀⠀⠀⢸⡿⡆⠀⠀⠀⠸⣾⠉⠉⠁⢿⡆⠀⠀⠘⢧⠀⠀⠀⠀⢳⡀⠀⠀⢳⡴⠚⠉⢀⣀⢀⣠⣶⣶⣿⣿⣿⣿⣧⣤⣀⣀⠀⠀⠈⠓⢧⡀⠀⠀⠀⠀⠀⠀⢰⡁
⠀⠀⠀⠀⠀⠀⠀⠀⠠⣧⢿⡆⠀⠀⠀⡜⣇⠀⠀⠘⣿⣄⡀⠀⠈⢣⡀⠀⠀⠀⢻⣆⠀⠈⢷⡀⣺⢿⣾⣿⡿⠛⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡀⠀⠈⢷⠀⠀⠀⠀⠀⢀⠿⠃
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⢳⡀⠀⠀⢧⠈⢦⡀⠀⠘⣏⠛⣦⣀⣀⣙⠦⠤⢤⠤⠽⠗⠀⠀⢸⣭⣾⡿⠋⠀⣤⣤⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡀⢸⠀⠀⠀⠀⠀⢀⣀⠀
⠀⠀⠀⠀⠀⣦⠀⠀⠀⠘⡆⠀⢳⠲⣄⢘⣷⠬⣥⣄⡀⠈⠂⠀⠉⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠘⠛⠙⠃⠀⠀⣼⣿⣿⣿⡿⠿⠁⠛⢛⣿⣿⣿⣿⡟⣿⢺⠀⠀⠀⠀⠀⢸⣿⡇
⠸⡄⢆⠀⠀⠈⣷⣄⠀⠀⠹⡆⢀⡴⠚⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠺⣿⣿⡿⠿⠀⠀⠀⠘⠿⢿⣿⣿⠇⠟⢨⠀⡄⠀⠀⠀⠀⢻⣷
⢰⣳⡸⣧⡀⠀⠘⣿⣶⣄⣀⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣿⡀⢀⠀⢀⠐⠞⢀⣼⠿⠃⠀⠀⢸⣼⠁⠀⠀⠀⠀⠈⠏
⠈⢇⠹⡟⠙⢦⡀⠘⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⠿⠤⠴⠾⠟⠛⠉⠁⠀⠀⠀⠀⢸⠃⠀⠀⠀⠀⠀⢸⠀
⢃⡘⣆⠘⣦⡀⠋⠀⠈⠛⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⠏⠀⠀⠀⠀⠀⠀⠟⠁
⠀⣷⡘⣆⠈⢷⣄⡀⠀⠐⣽⡄⠀⠀⠀⢀⣠⣾⣿⣶⣶⣶⠶⠤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠏⠀⠀⠀⠀⠀⠀⡀⠀⠀
⠀⠉⢳⡘⢆⠈⢦⢁⡤⢄⡀⢷⡀⢀⢰⣿⡿⠟⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠁⠀⠀⠀⠀⠀⠀⠀⡄⠀⠀
⠀⠀⢸⠛⣌⠇⠀⢻⠀⠀⠙⢎⢷⣀⡿⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⣇
⠀⠀⠀⠀⠈⢳⣄⡘⡆⠀⠀⠘⢧⡩⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⠏⠈
⠀⠀⠀⠀⠀⠀⡟⢽⣧⠀⠀⠀⠈⢿⣮⣳⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⡏⠀⠀
⠀⠀⠀⠀⠀⣸⡇⠈⠹⣇⠀⠀⠀⠘⣿⡀⠈⠙⠒⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⠀⠀⠀
⠀⠀⠀⠀⠀⣿⠁⠀⠀⢿⡀⠀⠀⠀⠹⡷⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣴⣶⣾⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⠃⠀⠀⠀
⢷⡇⠀⠀⢠⠇⠀⠀⡄⢀⣇⠀⠀⠀⠀⢷⠹⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⡤⠤⠖⣚⣯⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⡟⠀⠀⠀⠀
⠀⠙⣦⠀⡜⠀⠀⢸⠁⣸⣻⡄⠀⠀⠀⠸⣇⢹⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⣤⣖⣞⣩⣥⣴⠶⠾⠟⠋⠄⠀⠀⠈⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⣠⣿⣿⡿⠀⠀⠀⠀⠀
⠀⠀⠈⢳⡄⠀⢀⡟⢠⡇⠙⣇⠀⠀⠀⠀⢻⡀⠘⢧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⡏⢻⣇⠀⠀⠀⠀⠀⠀⣠⠞⡽⠁⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⠃⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠙⣆⡘⠀⡞⠀⠀⢿⡀⠀⠀⠀⠀⣧⠀⠀⣿⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠦⡙⢦⣀⣀⡠⠴⢊⡡⠞⠁⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀
⢄⠀⠀⠀⠀⠈⠳⣼⠄⠀⢀⣼⣧⠀⠀⠀⠀⢸⣆⢠⡧⣼⠉⠳⢤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠒⠶⠖⠊⣉⡀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠠
⠀⠳⡄⠀⠀⠀⠀⠙⢧⡀⢠⡿⢻⡀⠀⠀⠀⠀⢻⣤⠼⠿⠤⢤⣄⣈⡿⠲⠤⣄⣀⡤⠖⢶⠀⠀⠀⠀⠀⠀⠀⠈⠁⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠂
⠀⠀⠙⣄⠀⠀⠀⠀⠈⢳⣼⠃⢠⡇⠀⠀⠀⠀⠘⡇⠀⠀⠀⠀⠀⢉⡓⣶⣴⠞⠉⠀⢀⢻⣧⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠙⣧⠀⠀⠀⠀⠀⠹⣦⣶⢿⣦⠀⠀⠀⠀⠹⡄⠀⠀⠀⠀⣰⣿⡟⠁⠀⠀⢠⢿⣟⠛⠛⠛⠛⠒⠦⣤⣄⡀⠀⠀⢀⣠⣴⣿⣿⣿⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠐⠋⣧⠀⠀⠀⠀⠀⠈⠧⣼⢹⠀⠀⠀⠀⠀⢱⡀⠀⠀⢰⣿⡟⠀⠀⠀⢀⢏⣿⡙⠲⢦⣄⣀⡀⠀⠀⠀⣿⠋⠉⠹⣿⣿⣿⣿⣿⣿⣿⠟⠁⠀⠀⠀⠀⠀⡐⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢳⡀⠀⠀⠀⠀⠀⡨⣉⡀⠈⠀⠀⠀⠀⢷⡀⠀⣾⡿⠀⠀⠀⠀⡞⣾⣿⣿⣷⣶⣤⣤⣭⣽⣶⣿⡏⠀⠀⠀⠹⢿⣿⣿⣿⠿⠋⠀⠀⠀⠀⢀⡴⠋⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢀⣀⡞⢻⠃⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢳⣰⡿⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠘⠛⢧⣄⡀⠀⠀⢀⣶⠞⠋⠀⠀⠀⠀⠀⠀⠀


## Functions
### getRewards

returns available reward amount and transfer them to rewardsContract.

*msg.sender needs to be an added Flywheel Rewards distributor contract.
Transfers all associated assets to msg.sender.*


```solidity
function getRewards() external returns (uint256 balance);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`balance`|`uint256`|available reward amount for strategy.|


### addAsset

Adds an asset to be distributed by a given contract.


```solidity
function addAsset(address rewardsContract, address asset) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`rewardsContract`|`address`|address of the rewards contract to attach the asset to.|
|`asset`|`address`|address of the asset to be distributed.|


### removeAsset

Removes an asset from the reward contract that distributes the rewards.


```solidity
function removeAsset(address rewardsContract) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`rewardsContract`|`address`|address of the contract to remove the asset from being distributed.|


## Events
### AssetAdded
Emitted when a new asset and rewards contract are added.


```solidity
event AssetAdded(address indexed rewardsContract, address indexed asset);
```

### AssetRemoved
Emitted when an asset is removed from a rewards contract.


```solidity
event AssetRemoved(address indexed rewardsContract, address indexed asset);
```

## Errors
### ErrorAddingAsset
Error thrown when trying to add existing flywheel rewards or assets.


```solidity
error ErrorAddingAsset();
```

### ErrorRemovingAsset
Error thrown when trying to remove non-existing flywheel rewards.


```solidity
error ErrorRemovingAsset();
```

