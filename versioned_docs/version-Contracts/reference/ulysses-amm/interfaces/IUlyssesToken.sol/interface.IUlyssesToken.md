# IUlyssesToken

**Author:**
Maia DAO (https://github.com/Maia-DAO)

ERC4626 multiple token implementation intended for Ulysses Pools.
Balances are always 1 : 1 with the underlying assets.

*Allows to add/remove new tokens and change exisiting weights
but there needs to be at least 1 token and the caller is
responsible of making sure the Ulysses Token has the correct
number of assets to change weights or add a new token, or
the call will fail.
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡀⠀⠀⠀⠀
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡄⠀⠀⠀
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆⠀⠀
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⠀
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣉⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢇⠀
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁⠀⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡺⠀
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀
⣿⣿⣿⣿⣿⣿⣿⣿⠃⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠤⠔⠒⢁⣀⣀⣿⢿⣿⡿⠹⣿⣿⣿⣿⣿⠛⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⠀
⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠹⠿⣿⣿⣿⣿⣿⣿⡏⡟⡹⣃⣴⠖⠛⠉⠉⠉⢻⢸⣿⣷⡀⠹⣿⣿⣿⡏⠀⢧⠹⣿⣿⣿⣿⣿⣿⡟⡄⠀
⣿⣿⣿⣿⣿⣿⠏⡏⠀⠉⠙⠂⠙⢿⣿⣿⣿⣿⠇⠀⠙⢹⠃⠀⠀⠀⠀⠀⠀⠨⡿⠘⢷⠀⠈⢿⣿⡇⠀⢸⢠⣿⣿⣿⣿⣿⣿⣿⠀⠀
⣿⣿⣿⣿⣿⣿⡶⠟⠛⠛⠛⠻⣆⠀⠻⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀⠀⢀⡀⠀⢸⠃⠀⠈⣧⠀⠀⢻⡇⠀⠸⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀
⣿⣿⣿⣿⣿⣿⠀⠈⠀⠀⠀⠀⠀⠀⠀⠈⠟⠀⠀⠀⠀⠀⠀⠀⠀⠐⠇⠈⠢⡈⠀⠀⠀⣿⡇⠀⠘⡇⠀⢀⠙⢿⣿⣿⡟⠑⠋⠀⠀⠀
⣿⣿⣿⣿⣇⢿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢦⡀⠀⠁⠢⢰⢻⣇⠀⠀⡇⠀⢸⣄⠀⠹⣿⠀⠀⠀⠀⠀⠀
⣿⣿⣿⣿⣿⣌⠙⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢎⡷⡄⠀⠐⣼⣿⠀⠀⢈⠀⠈⣿⠆⠀⠈⣧⣀⠀⠀⠀⠀
⣿⣿⣿⣿⣿⣿⡦⡀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⢳⡀⠀⠘⣿⡆⠀⢸⠀⠀⢻⠀⠀⡼⢴⣹⡧⣄⡀⠀
⣿⣿⣿⣿⣿⣿⣷⡈⠁⠀⠀⠀⠀⠀⠀⠀⠀⠉⠀⠀⠀⠀⠀⠀⠀⣀⠔⠉⠀⠀⠘⣇⠀⠀⠘⡇⠀⠀⡇⠀⡞⠀⣼⢓⢶⣡⢟⣉⢉⠳
⠻⣿⣿⣿⣿⣿⣿⣿⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡠⠔⠊⠀⠀⠀⠀⠀⣰⡿⠀⠀⠠⠁⠀⢀⠃⢀⡇⣼⡗⣡⢓⣴⢫⡴⠉⡴
⠀⠈⠻⣿⣿⣿⣿⣿⣿⣿⡂⠀⠀⠀⠀⠰⠂⠀⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⢀⡼⠋⠀⠀⠀⠀⠀⠀⠀⠀⠘⣰⠣⡏⣱⢻⣴⢻⣜⠃⢌
⠀⠀⠀⢹⣿⣿⣿⣿⣿⣿⣷⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡴⢿⠀⠀⠀⠀⠀⠀⠀⠀⢀⠄⢠⢻⢻⢚⣱⠻⡤⢳⢜⡢⠦
⠀⠀⠀⠀⠉⠻⢯⡙⠿⣿⣿⣿⣿⣶⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠞⠁⠈⢢⠀⠀⠀⠀⠀⠀⡠⠃⣠⠃⢸⡼⢏⡼⣩⢾⡹⢞⡰⢮
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢧⠹⣿⡿⡏⠛⣿⣦⣄⡀⠀⠀⠀⣨⠞⠁⠀⠁⠀⠀⠑⢄⡀⠀⠀⠎⢀⠔⠁⠀⢸⡗⢊⣲⡭⠞⣽⠣⡥⢪
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⡇⠃⡰⠋⠀⠉⠛⠷⢶⣾⠏⠀⠀⠀⠀⠀⠀⠀⠀⠈⠒⢠⡴⠃⠀⠀⠀⢸⡝⣫⢮⡹⢯⢼⣫⠡⠆
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠂⡼⠁⠀⠀⠀⠀⠀⢠⡏⡈⠂⠄⣀⠀⠀⠀⠀⠀⢀⡴⠋⠀⠀⠀⠀⠀⣿⣞⣱⣚⢮⣙⢮⡡⠆⡚
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣷⣦⣀⠀⠀⠀⠀⢸⠃⠀⠁⠐⠂⠀⠀⠁⢉⠿⣿⣦⡀⠀⠀⠀⠀⢠⡿⣏⢲⣸⢬⣊⢾⡱⢽⠰
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣿⣿⢻⣷⣦⣀⠀⣸⠀⠀⠀⠀⠀⠀⠀⣴⢿⠀⠘⣿⣿⣦⠀⠀⠀⡘⡷⡊⠱⣘⠶⢉⢎⠱⠄⠁*


## Functions
### addAsset

Calculates the total amount of assets of a given Ulysses token.


```solidity
function addAsset(address asset, uint256 _weight) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`asset`|`address`|The address of the asset to add.|
|`_weight`|`uint256`|The weight of the asset to add.|


### removeAsset

Removes an asset from the Ulysses token.


```solidity
function removeAsset(address asset) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`asset`|`address`|The address of the asset to remove.|


### setWeights

Sets the weights of the assets in the Ulysses token.


```solidity
function setWeights(uint256[] memory _weights) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_weights`|`uint256[]`|The weights of the assets in the Ulysses token.|


## Errors
### AssetAlreadyAdded
Error emitted when trying to add an asset that is already part of the Ulysses token.


```solidity
error AssetAlreadyAdded();
```

### CannotRemoveLastAsset
Error emitted when trying to remove the last asset of the Ulysses token.


```solidity
error CannotRemoveLastAsset();
```

### InvalidWeightsLength
Error emitted when trying to set weights with an invalid length.


```solidity
error InvalidWeightsLength();
```

