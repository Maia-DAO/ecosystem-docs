# ERC20Boost
[Git Source](https://github.com/Maia-DAO/test-env-V2/blob/84b5f9e8695c91ddb02f27bb3dfb1c652f55ced4/erc-20/ERC20Boost.sol)

**Inherits:**
ERC20, Ownable, [IERC20Boost](/erc-20/interfaces/IERC20Boost.sol/interface.IERC20Boost.md)


## State Variables
### getUserGaugeBoost
User allocated boost to a gauge and the bHermes total supply.


```solidity
mapping(address => mapping(address => GaugeState)) public override getUserGaugeBoost;
```


### getUserBoost
Maximum boost a user had allocated to all gauges since he last called decrementAllGaugesAllBoost().


```solidity
mapping(address => uint256) public override getUserBoost;
```


### _userGauges

```solidity
mapping(address => EnumerableSet.AddressSet) internal _userGauges;
```


### _gauges

```solidity
EnumerableSet.AddressSet internal _gauges;
```


### _deprecatedGauges

```solidity
EnumerableSet.AddressSet internal _deprecatedGauges;
```


## Functions
### gauges

returns the set of live gauges


```solidity
function gauges() external view returns (address[] memory);
```

### gauges

returns the set of live gauges


```solidity
function gauges(uint256 offset, uint256 num) external view returns (address[] memory values);
```

### isGauge

returns true if `gauge` is not in deprecated gauges


```solidity
function isGauge(address gauge) external view returns (bool);
```

### numGauges

returns the number of live gauges


```solidity
function numGauges() external view returns (uint256);
```

### deprecatedGauges

returns the set of previously live but now deprecated gauges


```solidity
function deprecatedGauges() external view returns (address[] memory);
```

### numDeprecatedGauges

returns the number of live gauges


```solidity
function numDeprecatedGauges() external view returns (uint256);
```

### freeGaugeBoost

returns the set of gauges the user has allocated to, they may be live or deprecated.


```solidity
function freeGaugeBoost(address user) public view returns (uint256);
```

### userGauges

returns the set of gauges the user has allocated to, they may be live or deprecated.


```solidity
function userGauges(address user) external view returns (address[] memory);
```

### isUserGauge

returns true if `gauge` is in user gauges


```solidity
function isUserGauge(address user, address gauge) external view returns (bool);
```

### userGauges

returns the set of gauges the user has allocated to, they may be live or deprecated.


```solidity
function userGauges(address user, uint256 offset, uint256 num) external view returns (address[] memory values);
```

### numUserGauges

returns the number of user gauges


```solidity
function numUserGauges(address user) external view returns (uint256);
```

### attach

attach all user's boost to a gauge, only callable by the gauge.


```solidity
function attach(address user) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`user`|`address`|the user to attach the gauge to.|


### detach

detach all user's boost from a gauge, only callable by the gauge.


```solidity
function detach(address user) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`user`|`address`|the user to detach the gauge from.|


### updateUserBoost

Update geUserBoost for a user, loop through all _userGauges


```solidity
function updateUserBoost(address user) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`user`|`address`|the user to update the boost for.|


### decrementGaugeBoost

Remove an amount of boost from a gauge


```solidity
function decrementGaugeBoost(address gauge, uint256 boost) public;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`gauge`|`address`|the gauge to remove boost from.|
|`boost`|`uint256`|the amount of boost to remove.|


### decrementGaugeAllBoost

Remove all the boost from a gauge


```solidity
function decrementGaugeAllBoost(address gauge) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`gauge`|`address`|the gauge to remove boost from.|


### decrementAllGaugesBoost

Remove an amount of boost from all user gauges


```solidity
function decrementAllGaugesBoost(uint256 boost) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`boost`|`uint256`|the amount of boost to remove.|


### decrementGaugesBoostIndexed

Remove an amount of boost from all user gauges indexed


```solidity
function decrementGaugesBoostIndexed(uint256 boost, uint256 offset, uint256 num) public;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`boost`|`uint256`|the amount of boost to remove.|
|`offset`|`uint256`|the index of the first gauge element to read.|
|`num`|`uint256`|the number of gauges to return.|


### decrementAllGaugesAllBoost

Remove all the boost from all user gauges


```solidity
function decrementAllGaugesAllBoost() external;
```

### addGauge

add a new gauge. Requires auth by `authority`.


```solidity
function addGauge(address gauge) external onlyOwner;
```

### _addGauge


```solidity
function _addGauge(address gauge) internal;
```

### removeGauge

remove a new gauge. Requires auth by `authority`.


```solidity
function removeGauge(address gauge) external onlyOwner;
```

### _removeGauge


```solidity
function _removeGauge(address gauge) internal;
```

### replaceGauge

replace a gauge. Requires auth by `authority`.


```solidity
function replaceGauge(address oldGauge, address newGauge) external onlyOwner;
```

### _burn

NOTE: any "removal" of tokens from a user requires notAttached < amount.

Burns `amount` of tokens from `from` address.

*User must have enough free boost.*


```solidity
function _burn(address from, uint256 amount) internal override notAttached(from, amount);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`from`|`address`|The address to burn tokens from.|
|`amount`|`uint256`|The amount of tokens to burn.|


### transfer

Transfers `amount` of tokens from `msg.sender` to `to` address.

*User must have enough free boost.*


```solidity
function transfer(address to, uint256 amount) public override notAttached(msg.sender, amount) returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`to`|`address`|the address to transfer to.|
|`amount`|`uint256`|the amount to transfer.|


### transferFrom

Transfers `amount` of tokens from `from` address to `to` address.

*User must have enough free boost.*


```solidity
function transferFrom(address from, address to, uint256 amount)
    public
    override
    notAttached(from, amount)
    returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`from`|`address`|the address to transfer from.|
|`to`|`address`|the address to transfer to.|
|`amount`|`uint256`|the amount to transfer.|


### notAttached

Reverts if the user does not have enough free boost.


```solidity
modifier notAttached(address user, uint256 amount);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`user`|`address`|The user address.|
|`amount`|`uint256`|The amount of boost.|


