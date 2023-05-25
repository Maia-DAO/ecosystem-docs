# BoostAggregator

**Inherits:**
Ownable, [IBoostAggregator](/talos/interfaces/IBoostAggregator.sol/interface.IBoostAggregator.md)


## State Variables
### nonfungiblePositionManager
nonfungiblePositionManager contract


```solidity
INonfungiblePositionManager public immutable nonfungiblePositionManager;
```


### uniswapV3Staker
uniswapV3Staker contract


```solidity
UniswapV3Staker public immutable uniswapV3Staker;
```


### hermesGaugeBoost
hermesGaugeBoost token


```solidity
bHermesBoost public immutable hermesGaugeBoost;
```


### hermes
hermes token


```solidity
ERC20 public immutable hermes;
```


### userToRewardsDepot
mapping of user to rewardsDepot


```solidity
mapping(address => address) public userToRewardsDepot;
```


### tokenIdToUser
mapping of tokenId to user


```solidity
mapping(uint256 => address) public tokenIdToUser;
```


### tokenIdRewards
mapping of tokenId to user


```solidity
mapping(uint256 => uint256) public tokenIdRewards;
```


### whitelistedAddresses
mapping of whitelisted addresses


```solidity
mapping(address => bool) public whitelistedAddresses;
```


### protocolRewards
protocol rewards


```solidity
uint256 public protocolRewards;
```


### protocolFee
protocol fee


```solidity
uint256 public protocolFee = 2000;
```


### DIVISIONER

```solidity
uint256 private constant DIVISIONER = 10000;
```


## Functions
### constructor

Creates a new BoostAggregator


```solidity
constructor(UniswapV3Staker _uniswapV3Staker, ERC20 _hermes, address _owner);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_uniswapV3Staker`|`UniswapV3Staker`|The UniswapV3Staker contract|
|`_hermes`|`ERC20`|The hermes token contract|
|`_owner`|`address`|The owner of this contract|


### onERC721Received

*msg.sender not validated to be nonfungiblePositionManager in order to allow
whitelisted addresses to retrieve NFTs incorrectly sent to this contract*


```solidity
function onERC721Received(address, address from, uint256 tokenId, bytes calldata)
    external
    override
    onlyWhitelisted
    returns (bytes4);
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

*protocol rewards stay in stake contract*


```solidity
function addWhitelistedAddress(address user) external onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`user`|`address`|address of user|


### removeWhitelistedAddress

remove whitelisted address from staking using this contract


```solidity
function removeWhitelistedAddress(address user) external onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`user`|`address`|address of user|


### setProtocolFee

set protocol fee


```solidity
function setProtocolFee(uint256 _protocolFee) external onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_protocolFee`|`uint256`|protocol fee|


### withdrawProtocolFees

withdraw protocol fees


```solidity
function withdrawProtocolFees(address to) external onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`to`|`address`|address to withdraw to|


### withdrawAllGaugeBoost

withdraw all bHermesBoost


```solidity
function withdrawAllGaugeBoost(address to) external onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`to`|`address`|address to withdraw to|


### withdrawGaugeBoost

withdraw bHermesBoost

*May run out of gas.*


```solidity
function withdrawGaugeBoost(address to, uint256 amount) external onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`to`|`address`|address to withdraw to|
|`amount`|`uint256`|amount of boost to withdraw|


### decrementGaugesBoostIndexed

decrement all bHermesBoost

*May run out of gas.*


```solidity
function decrementGaugesBoostIndexed(uint256 boost, uint256 offset, uint256 num) external onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`boost`|`uint256`|amount of boost to withdraw|
|`offset`|`uint256`|offset of boost to withdraw|
|`num`|`uint256`|number of boost to withdraw|


### onlyWhitelisted

*only whitelisted addresses*


```solidity
modifier onlyWhitelisted();
```

