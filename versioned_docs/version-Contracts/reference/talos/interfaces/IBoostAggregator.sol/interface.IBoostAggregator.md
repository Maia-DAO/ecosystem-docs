# IBoostAggregator

**Inherits:**
IERC721Receiver

**Author:**
Maia DAO (https://github.com/Maia-DAO)

This contract is used to aggregate Uniswap V3 NFTs from multiple addresses and
stake them in the Uniswap V3 Staker contract, sharing the same boost.
This contract allows for boost management and rewards distribution. so users
can stake their NFTs and receive boosted hermes rewards.


## Functions
### nonfungiblePositionManager

nonfungiblePositionManager contract


```solidity
function nonfungiblePositionManager() external view returns (INonfungiblePositionManager);
```

### uniswapV3Staker

uniswapV3Staker contract


```solidity
function uniswapV3Staker() external view returns (UniswapV3Staker);
```

### hermesGaugeBoost

hermesGaugeBoost token


```solidity
function hermesGaugeBoost() external view returns (bHermesBoost);
```

### hermes

hermes token


```solidity
function hermes() external view returns (ERC20);
```

### userToRewardsDepot

mapping of user to rewardsDepot


```solidity
function userToRewardsDepot(address) external view returns (address);
```

### tokenIdToUser

mapping of tokenId to user


```solidity
function tokenIdToUser(uint256) external view returns (address);
```

### tokenIdRewards

mapping of tokenId to user


```solidity
function tokenIdRewards(uint256) external view returns (uint256);
```

### whitelistedAddresses

mapping of whitelisted addresses


```solidity
function whitelistedAddresses(address) external view returns (bool);
```

### protocolRewards

protocol rewards


```solidity
function protocolRewards() external view returns (uint256);
```

### protocolFee

protocol fee


```solidity
function protocolFee() external view returns (uint256);
```

### setOwnRewardsDepot

set rewards depot for msg.sender


```solidity
function setOwnRewardsDepot(address rewardsDepot) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`rewardsDepot`|`address`|address of rewards depot|


### unstakeAndWithdraw

unstake, withdraw, and claim rewards to user of tokenId


```solidity
function unstakeAndWithdraw(uint256 tokenId) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`tokenId`|`uint256`|tokenId of position|


### addWhitelistedAddress

add whitelisted address to stake using this contract


```solidity
function addWhitelistedAddress(address user) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`user`|`address`|address of user|


### removeWhitelistedAddress

remove whitelisted address from staking using this contract


```solidity
function removeWhitelistedAddress(address user) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`user`|`address`|address of user|


### setProtocolFee

set protocol fee


```solidity
function setProtocolFee(uint256 _protocolFee) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_protocolFee`|`uint256`|protocol fee|


### withdrawProtocolFees

withdraw protocol fees


```solidity
function withdrawProtocolFees(address to) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`to`|`address`|address to withdraw to|


### withdrawAllGaugeBoost

withdraw all bHermesBoost


```solidity
function withdrawAllGaugeBoost(address to) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`to`|`address`|address to withdraw to|


### withdrawGaugeBoost

withdraw bHermesBoost


```solidity
function withdrawGaugeBoost(address to, uint256 amount) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`to`|`address`|address to withdraw to|
|`amount`|`uint256`|amount of boost to withdraw|


### decrementGaugesBoostIndexed

decrement all bHermesBoost


```solidity
function decrementGaugesBoostIndexed(uint256 boost, uint256 offset, uint256 num) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`boost`|`uint256`|amount of boost to withdraw|
|`offset`|`uint256`|offset of boost to withdraw|
|`num`|`uint256`|number of boost to withdraw|


## Errors
### FeeTooHigh
*throws when trying to set fees larger than 100%*


```solidity
error FeeTooHigh();
```

### NotTokenIdOwner
*throws when msg.sender is not the tokenId owner*


```solidity
error NotTokenIdOwner();
```

