# IUlyssesPool
[Git Source](https://github.com/Maia-DAO/test-env-V2/blob/84b5f9e8695c91ddb02f27bb3dfb1c652f55ced4/ulysses-amm/interfaces/IUlyssesPool.sol)

**Author:**
Maia DAO (https://github.com/Maia-DAO)

This contract is stableswap AMM that uses it's implemention of
the Delta Algorithm to manage the LP's balances and transfers
between LPs.

*NOTE: Can't remove a destination, only add new ones.
Input: Transaction amount t, destination LP ID d
# On the source LP:
1: aₛ ← aₛ + t
2: bₛ,𝒹 ← bₛ,𝒹 − t
3: for x != s do
4:     diffₛ,ₓ ← max(0, lpₛ * wₛ,ₓ − lkbₓ,ₛ)
5: end for
6: Total ← ∑ₓ diffₛ,ₓ
7: for x != s do
8:     diffₛ,ₓ ← min(Total, t) * diffₛ,ₓ / Total
9: end for
10: t′ ← t - min(Total, t)
11: for ∀x do
12:     bₛ,ₓ ← bₛ,ₓ + diffₛ,ₓ + t′ * wₛ,ₓ
13: end for
14: msg = (t)
15: Send msg to LP d
# On the destination LP:
16: Receive (t) from a source LP
17: if bₛ,𝒹 < t then
18:     Reject the transfer
19: end if
20: a𝒹 ← a𝒹 − t
21: bₛ,𝒹 ← bₛ,𝒹 − t
Adapted from: Figure 4 from:
- https://www.dropbox.com/s/gf3606jedromp61/Ulysses-Solving.The.Bridging-Trilemma.pdf?dl=0
⠀⠀⠀⠀⠀⡂⠀⠀⠀⠁⠀⠀⠀⠀⠀⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⣀⡀⠀⠀⠀⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠾⢋⣁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡄⢰⣿⠄
⠀⠀⢰⠀⠀⠂⠔⠀⡂⠐⠀⠠⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⠤⢂⣉⠉⠉⠉⠁⠀⠉⠁⡀⠀⠉⠳⢶⠶⣦⣄⡀⠀⠀⠀⠀⠀⠀⠌⠙⠓⠒⠻⡦⠔⡌⣄⠤⢲⡽⠖⠪⢱⠦⣤
⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠘⠋⣠⣾⣛⣞⡛⢶⣾⣿⣶⣴⣤⣤⣤⣀⣀⢠⠂⠀⠊⡛⢷⣄⡀⠀⠀⠀⠀⠀⠂⣾⣁⢸⠀⠁⠐⢊⣱⣺⡰⠶⣚⡭⠂
⢀⠀⠄⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠄⠀⢠⣤⣴⡟⠇⣶⣠⢭⣿⣿⣿⣿⡌⠙⠻⠿⣿⣿⣿⣶⣄⡀⠀⠈⣯⢻⡷⣄⠀⠄⢀⡆⠠⢀⣤⠀⠀⠀⠀⠛⠐⢓⡁⠤⠐⢁
⡼⠀⠀⢀⠆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠆⠀⠀⣼⣿⣿⣿⣦⣠⠤⢖⣿⣿⣿⣟⣛⣿⡴⣿⣿⣿⣟⢿⣿⣿⣦⣰⠉⠻⢷⡈⢳⡄⢸⠇⢹⡦⢥⢸⠀⡄⠀⠀⠀⠈⠀⠀⢠⠂
⢡⢐⠀⠂⠀⠀⠆⠀⠀⠀⠀⠀⠀⣠⠖⠋⢰⣴⣾⣿⣿⣿⣿⠙⠛⠚⠛⠁⠙⢦⡉⠉⠉⠀⠙⣷⣭⣿⣦⣹⣿⣿⣿⣤⠐⢀⠹⣷⡹⣾⣧⢻⠐⡀⢸⠀⠀⠀⡁⠀⠀⠀⠴⠃⠀
⠂⠀⠀⠀⠈⡘⠀⠀⠀⠀⠀⠀⣰⠏⠀⢰⣾⡿⢋⣽⡿⠟⠉⠀⠀⢴⠀⠙⣆⠀⠳⡄⠀⠀⠀⠈⢿⣆⢹⣿⢿⣿⣿⣿⣆⣂⠀⢿⡇⠘⢿⣿⣷⡅⣼⢸⡇⢸⡇⠀⡀⣰⠁⠀⠀
⠸⠐⠁⢠⠣⠁⠁⠀⠀⢀⣠⣾⡏⡄⣰⣿⣿⣷⣾⠁⠀⠀⠀⠀⠀⢸⡀⠀⠘⣇⠀⠙⣆⠀⠀⠀⠀⢻⣎⠻⣾⣿⣾⣿⣿⣿⠁⣸⣷⣀⠈⢿⣿⠇⡿⢸⡇⢸⠀⠀⣷⠁⠀⠀⠀
⠂⠀⠀⡎⠄⠀⣠⣤⣾⣻⣿⡟⠀⢘⣿⣿⣿⡿⠃⠀⠀⠀⡄⠀⠀⢈⡇⠀⠀⠸⡀⠀⠀⠀⠀⠀⠀⠀⠻⡄⠀⢈⣿⠿⣿⣿⡿⠯⣿⡽⡆⠸⣿⣀⡇⢸⡇⢸⡀⠀⡟⠀⠀⠀⠀
⡈⠀⡸⠼⠐⠌⢡⠹⡍⣷⣿⣁⠰⣾⣿⢿⣿⠁⠀⠀⠀⠀⡇⠀⠀⢸⠁⠀⠀⠀⢷⠀⠀⠀⠀⠀⠀⠀⠀⢷⠀⠈⣿⣿⣿⣿⣿⣛⣿⣿⡇⠀⢻⣻⡇⣼⡇⣹⠊⠀⣧⠀⠀⠀⠀
⠀⢐⡣⢑⣨⠶⠞⠀⠃⣋⣽⣟⡘⣿⣿⣺⡿⠀⠀⠀⠀⠀⠁⠀⠀⠈⠀⠀⠀⠀⠈⡇⠐⡄⠀⠀⠀⠀⠀⠘⡆⡄⠈⠻⢿⣿⣿⣿⣿⣯⣜⠀⠀⡇⢧⣿⡇⣿⡄⢀⣿⠀⠀⠀⠀
⠨⣥⡶⠌⣡⠡⡖⠀⠈⣹⣿⣿⣿⣿⣿⠏⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢳⡀⠀⠀⠀⠀⠀⣇⢷⠀⠀⠀⢼⣿⣿⣍⡟⠻⣷⣄⢻⡈⣿⠁⣿⡇⢸⣿⠀⠀⠀⠀
⠋⠁⠀⠀⠁⠀⢩⡏⢼⣽⣿⣿⣿⣿⢷⡄⡇⠀⠀⠀⠀⠀⠀⡀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣧⠀⠀⠀⠀⠀⢸⠸⡄⠀⠀⢸⣿⣿⣿⣿⣄⠙⣿⣾⡇⠸⡆⣿⠁⢸⣿⣇⠀⠀⠀
⠀⠀⠠⢀⣪⣤⡌⠉⣼⣿⣿⣿⣿⣿⣨⡟⢣⠀⠀⠀⠀⠀⢠⣳⠃⠀⠀⠀⠀⠀⠀⠀⣄⠀⣿⡆⠀⠀⠀⠀⢸⡆⡇⠀⠀⢸⣾⣿⣿⣿⣿⣷⣼⣿⡇⠀⢹⣿⡅⣿⣿⣿⠀⠀⠀
⣤⣵⣾⣿⣿⣿⣿⠂⠝⣿⣿⣿⣿⣿⣿⠀⠈⠀⠀⠀⠀⠀⣼⠋⠀⠀⠀⠀⠀⠀⠀⠀⢿⠀⡿⢣⠀⠀⠀⢀⡼⢻⢿⠀⠀⢸⣿⣿⣿⢿⢹⢿⣿⡅⢹⠀⠀⢿⡆⣿⣿⣿⡆⠀⠀
⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣆⠀⡆⠀⠀⠀⣰⠋⠀⣆⠀⠀⠀⠀⠀⠀⠀⢸⣄⣧⣼⣦⡴⠚⢩⠇⠘⢺⣦⡆⢉⣿⣿⣿⣼⣾⡈⢻⣿⣸⡆⠀⠘⡇⣿⣿⣿⡇⠀⠀
⡿⢿⣟⣽⣿⡿⠿⠛⣉⣥⠶⠾⣿⣿⣿⢿⠀⢳⡀⠀⢰⢋⡀⠀⢸⡄⠀⠀⠀⠀⠀⠀⣿⣇⠇⠀⣧⣧⡐⣍⣴⣾⣿⡇⠀⢸⣿⣿⠹⢿⣯⠻⢿⣿⣄⣧⠀⠀⠸⣿⣿⣿⣿⣆⠀
⣿⠿⠟⣋⡡⠔⠚⠋⠁⠀⠀⠀⣧⣿⣿⡇⡆⠘⣧⡄⠀⠀⠉⠛⡓⣿⡎⠀⠀⠀⠀⠀⡿⢿⣄⡀⢹⣶⣿⠟⣻⠿⠚⣿⢀⣾⢾⣿⡀⣿⣿⠂⣺⡇⢻⣿⡆⠀⠀⢻⣿⣿⣿⣿⣆
⢰⠚⠉⠀⡀⠀⠀⠀⠀⠀⠀⢰⣿⣿⣿⣷⡇⠀⢻⣿⣦⣀⢀⡀⢹⣌⣙⣶⠤⢄⣀⠤⠇⠀⠀⠀⠀⠋⠁⠀⠀⠀⠀⢸⣺⡏⡆⢻⣿⣿⣿⠀⣿⣧⢸⣯⢧⠀⠀⠀⢿⣿⣿⣿⣿
⠂⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⠿⣿⣿⣿⣿⣧⠀⢸⣷⡀⠹⣿⡿⣟⠛⠻⣿⣿⣷⣦⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣷⡇⠃⠘⣿⣿⣿⠀⣿⣿⢸⡟⠻⡄⠀⠀⠘⣿⣟⣟⣿
⠀⠀⠀⠀⠀⠀⠀⢠⣾⠟⠁⢰⣿⣿⣿⣿⡟⡇⠀⡿⢻⠶⣄⠻⣄⠑⠶⠦⠶⠚⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠈⣼⡇⠀⠀⢹⣿⡿⢢⣿⣿⣿⣧⢠⢧⠀⠀⠀⠹⣯⣏⠀
⠀⠀⠀⢦⠀⠀⠰⣿⣷⣀⣴⣿⡿⣻⣿⣿⡇⢧⠀⡇⠈⣧⠈⣿⢶⡿⡂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⠀⠀⢠⣾⣿⡇⠀⠠⣿⢿⠀⣼⣿⣿⣿⣿⡎⣿⠀⠀⠀⠀⠹⡥⠀
⠀⠀⠀⣼⣇⠀⠀⠈⠛⢫⣿⣿⢀⣏⣿⣿⡅⢸⣸⡇⠀⣿⡄⢹⠀⠙⣿⣦⠀⠀⠀⠀⠀⠀⠠⣤⡾⢅⡈⠓⠢⡶⠋⢀⡾⠁⢠⣇⣿⣧⣾⣿⣿⣿⣿⣿⣿⣮⣳⡀⠀⠀⠀⠰⠈
⠀⠀⠀⣿⣿⡄⠀⠀⠀⠘⠻⣿⣾⠟⣿⣟⠀⠸⢃⠇⢰⣿⣇⠘⠀⠀⢻⣿⣷⣶⣤⣤⣀⣠⠞⠭⠤⠄⠙⠿⢻⣥⣴⣿⠃⠀⣾⣾⣿⣯⣿⣿⣿⣾⣟⣿⣿⣿⣿⡿⡄⠀⠀⠀⢣
⠀⠀⠀⠻⣿⣿⣆⠀⠀⠀⢀⣼⣟⢠⣿⣿⠀⠀⢸⠀⣼⣿⣿⠆⠀⠀⢸⡟⣿⣿⣿⣿⠟⠁⠀⣀⣤⡖⠂⣴⣿⣯⣿⠋⠀⠐⡿⣹⣾⠋⠗⣯⢿⣿⣿⣿⣿⣿⣿⡇⢳⡀⠀⠀⠀
⠀⠀⡂⢸⣿⣿⣿⣷⡀⢀⣿⣿⣿⣾⡿⣿⠀⠀⡜⢸⣿⣓⣾⣷⠀⠀⢸⣿⣜⣿⣯⡟⠀⠀⠀⣀⣈⠙⢶⣿⣿⣿⠇⠀⢀⣼⣇⣿⡀⢀⣤⣷⣿⣿⣿⣿⣿⣿⣿⡇⠀⠷⡀⠀⠀
⣤⣀⡞⣢⣿⣿⣿⣿⣿⣾⣿⣿⣿⣿⠁⣿⡆⢠⣧⣿⡇⠐⣿⡿⠀⠀⢸⢷⣻⣿⡟⠀⠀⠀⠀⡇⣸⠑⢦⣻⣿⠏⠀⢀⣾⣿⣸⣿⣩⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠙⡣⠀⠀
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠟⠃⣜⣿⣿⣧⣸⣿⠁⠀⠀⣿⣿⣿⡟⠀⠀⠀⠀⢰⣴⡟⠀⢀⡿⠃⠀⣠⠋⣹⡏⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠐⠤⠀
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⣿⣿⣿⡦⣿⡟⠀⠀⣼⣿⣿⣿⠓⢤⣄⣤⣴⣿⣏⣀⣠⢾⠁⠀⡴⢇⣾⣿⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⢣
⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⡻⠋⠻⠆⠀⠀⣰⣿⣿⣿⣿⣿⠇⠀⣾⣿⣿⡿⡇⠈⠒⠦⠖⢻⡟⠁⣰⠃⠈⠀⡼⢁⣼⣿⡇⣾⢈⣹⣹⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣧⠀⠀⠀⠀⠀
⣿⣿⣿⣿⣿⣿⣿⣿⢟⡵⠁⠀⠀⠀⢠⣲⠟⣿⣿⣿⣿⠏⣠⣾⣿⣿⣧⣰⠁⠀⠀⠀⠀⣾⠹⢾⠁⠀⣧⡾⣡⣾⡟⢻⡇⣿⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⣿⡆⠀⠀⠀⠀
⣿⣿⣿⣿⣿⠿⠋⠀⠞⠀⠀⠀⠀⠀⣿⢏⡾⢃⣼⠟⣡⣾⣿⣿⣿⣿⣿⡟⠀⠀⠀⠀⢠⢏⠀⢇⠀⠀⢸⣰⣿⣇⣗⣾⣇⢿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⠀⠀⠀
⢿⣿⠿⠋⣀⣤⠖⠀⠀⠀⠀⠀⠀⣼⣿⢏⣠⣞⣵⣿⣿⣿⣿⣿⣿⣟⣿⠁⠀⠀⠀⠀⣾⠀⠱⣼⡆⠀⢸⠹⣿⡄⣾⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠈⢻⣿⡄⠀⠀*


## Functions
### getBandwidth

Gets the available bandwidth for the given pool's ID, if it doesn't have a connection it will return 0


```solidity
function getBandwidth(uint256 destinationId) external view returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`destinationId`|`uint256`|The ID of a Ulysses LP|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|bandwidth The available bandwidth for the given pool's ID|


### getBandwidthStateList

Gets the bandwidth state list


```solidity
function getBandwidthStateList() external view returns (BandwidthState[] memory);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`BandwidthState[]`|bandwidthStateList The bandwidth state list|


### getProtocolFees

Calculates the amount of tokens that can be redeemed by the protocol.


```solidity
function getProtocolFees() external view returns (uint256);
```

### claimProtocolFees

Sends all outstanding protocol fees to factory owner

*Anyone can call this function*


```solidity
function claimProtocolFees() external returns (uint256 claimed);
```

### addNewBandwidth

Adds a new Ulysses LP with the requested weight

*Can't remove a destination, only add new ones*


```solidity
function addNewBandwidth(uint256 poolId, uint8 weight) external returns (uint256 index);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`poolId`|`uint256`|The ID of the destination Ulysses LP to be added|
|`weight`|`uint8`|The weight to calculate the bandwidth for the given pool's ID|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`index`|`uint256`|The index of bandwidthStateList of the newly added Ulysses LP|


### setWeight

Changes the weight of a exisiting Ulysses LP with the given ID


```solidity
function setWeight(uint256 poolId, uint8 weight) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`poolId`|`uint256`|The ID of the destination Ulysses LP to be removed|
|`weight`|`uint8`|The new weight to calculate the bandwidth for the given pool's ID|


### setFees

Sets the protocol and rebalancing fees


```solidity
function setFees(Fees calldata _fees) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_fees`|`Fees`|The new fees to be set|


### setProtocolFee

Sets the protocol fee

*Only factory owner can call this function*


```solidity
function setProtocolFee(uint256 _protocolFee) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_protocolFee`|`uint256`|The new protocol fee to be set|


### swapIn

Swaps from this Ulysses LP's underlying to the destination Ulysses LP's underlying.
Distributes amount between bandwidths in the source, having a positive rebalancing fee
Calls swapDestination of the destination Ulysses LP


```solidity
function swapIn(uint256 amount, uint256 poolId) external returns (uint256 output);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`amount`|`uint256`|The amount to be dsitributed to bandwidth|
|`poolId`|`uint256`|The ID of the destination Ulysses LP|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`output`|`uint256`|The output amount transfered to user from the destination Ulysses LP|


### swapFromPool

Swaps from the caller (source Ulysses LP's) underlying to this Ulysses LP's underlying.
Called from swapIn of the source Ulysses LP
Removes amount from the source's bandwidth, having a negative rebalancing fee

*Only Ulysses LPs added as destinations can call this function*


```solidity
function swapFromPool(uint256 amount, address user) external returns (uint256 output);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`amount`|`uint256`|The amount to be removed from source's bandwidth|
|`user`|`address`|The user to be transfered the output|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`output`|`uint256`|The output amount transfered to user|


## Events
### Swap
Emitted when a user swaps from this Ulysses LP's underlying to the destination Ulysses LP's underlying


```solidity
event Swap(address indexed caller, uint256 indexed poolId, uint256 assets);
```

## Errors
### InvalidPool
Throw when trying to re-add pool or adding itself


```solidity
error InvalidPool();
```

### NotUlyssesLP
Throw when trying to add a destination that is not a Ulysses LP


```solidity
error NotUlyssesLP();
```

### FeeError
Throw when fee would overflow


```solidity
error FeeError();
```

### AmountTooSmall
Throw when input amount is too small


```solidity
error AmountTooSmall();
```

### InvalidWeight
Throw when weight is 0 or exceeds MAX_TOTAL_WEIGHT


```solidity
error InvalidWeight();
```

### InvalidFee
Throw when settng an invalid fee


```solidity
error InvalidFee();
```

### TooManyDestinations
Throw when weight is 0 or exceeds MAX_TOTAL_WEIGHT


```solidity
error TooManyDestinations();
```

### NotInitialized
Throw when adding/removing LPs before adding any destinations


```solidity
error NotInitialized();
```

### MulDivFailed
Thrown when muldiv fails due to multiplication overflow


```solidity
error MulDivFailed();
```

### Overflow
Thrown when addition overflows


```solidity
error Overflow();
```

### Underflow
Thrown when subtraction underflows


```solidity
error Underflow();
```

## Structs
### BandwidthState
The bandwidth state of a Ulysses LP


```solidity
struct BandwidthState {
    uint248 bandwidth;
    uint8 weight;
    UlyssesPool destination;
}
```

### Fees
The fees charged to incentivize rebalancing


```solidity
struct Fees {
    uint64 lambda1;
    uint64 lambda2;
    uint64 sigma1;
    uint64 sigma2;
}
```

