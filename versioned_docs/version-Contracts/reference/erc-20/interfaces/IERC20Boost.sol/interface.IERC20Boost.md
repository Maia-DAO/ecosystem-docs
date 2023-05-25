# IERC20Boost

**Author:**
Maia DAO (https://github.com/Maia-DAO)

This contract is meant to be used to represent a token that can boost holders' rewards in other contracts.
Holders can have their boost attached to gauges and cannot transfer their bHermes until they remove their boost.
Only gauges can attach and detach boost from a user. The current user's boost and total supply are stored when attaching.
The boost is then detached when the user removes their boost or when the gauge is removed.
A "gauge" is represented by an address that distributes rewards to users periodically or continuously.
For example, gauges can be used to direct token emissions, similar to Curve or Hermes V1.
Alternatively, gauges can be used to direct another quantity such as relative access to a line of credit.
This contract should serve as reference for the amount of boost a user has allocated to a gauge.
Then liquidity per user should be caculated by using this formula, from curve finance:
min(UserLiquidity, (40 * UserLiquidity) + (60 * TotalLiquidity * UserBoostBalance / BoostTotal))
"Live" gauges are in the set.
Users can only be attached to live gauges but can detach from live or deprecated gauges.
Gauges can be deprecated and reinstated; and will maintain any non-removed boost from before.

*SECURITY NOTES: decrementGaugeAllBoost can run out of gas.
Gauges should be removed individually until decrementGaugeAllBoost can be called.
After having the boost attached, getUserBoost() will return the maximum boost a user had allocated to all gauges.
Boost state is preserved on the gauge and user level even when a gauge is removed, in case it is re-added.*


## Functions
### getUserGaugeBoost

User allocated boost to a gauge and the bHermes total supply.


```solidity
function getUserGaugeBoost(address user, address gauge)
    external
    view
    returns (uint128 userGaugeBoost, uint128 totalGaugeBoost);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`user`|`address`|User address.|
|`gauge`|`address`|Gauge address.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`userGaugeBoost`|`uint128`|User allocated boost to a gauge.|
|`totalGaugeBoost`|`uint128`|The bHermes total supply when a user allocated the boost.|


### getUserBoost

Maximum boost a user had allocated to all gauges since he last called decrementAllGaugesAllBoost().


```solidity
function getUserBoost(address user) external view returns (uint256 boost);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`user`|`address`|User address.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`boost`|`uint256`|Maximum user allocated boost.|


### gauges

returns the set of live gauges


```solidity
function gauges() external view returns (address[] memory);
```

### gauges

returns a paginated subset of live gauges


```solidity
function gauges(uint256 offset, uint256 num) external view returns (address[] memory values);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`offset`|`uint256`|the index of the first gauge element to read|
|`num`|`uint256`|the number of gauges to return|


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
function freeGaugeBoost(address user) external view returns (uint256);
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

returns a paginated subset of gauges the user has allocated to, they may be live or deprecated.


```solidity
function userGauges(address user, uint256 offset, uint256 num) external view returns (address[] memory values);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`user`|`address`|the user to return gauges from.|
|`offset`|`uint256`|the index of the first gauge element to read.|
|`num`|`uint256`|the number of gauges to return.|


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
function decrementGaugeBoost(address gauge, uint256 boost) external;
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
function decrementGaugesBoostIndexed(uint256 boost, uint256 offset, uint256 num) external;
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
function addGauge(address gauge) external;
```

### removeGauge

remove a new gauge. Requires auth by `authority`.


```solidity
function removeGauge(address gauge) external;
```

### replaceGauge

replace a gauge. Requires auth by `authority`.


```solidity
function replaceGauge(address oldGauge, address newGauge) external;
```

## Events
### AddGauge
emitted when adding a new gauge to the live set.


```solidity
event AddGauge(address indexed gauge);
```

### RemoveGauge
emitted when removing a gauge from the live set.


```solidity
event RemoveGauge(address indexed gauge);
```

### Attach
emmitted when a user attaches boost to a gauge.


```solidity
event Attach(address indexed user, address indexed gauge, uint256 boost);
```

### Detach
emmitted when a user detaches boost from a gauge.


```solidity
event Detach(address indexed user, address indexed gauge);
```

### UpdateUserBoost
emmitted when a user updates their boost.


```solidity
event UpdateUserBoost(address indexed user, uint256 updatedBoost);
```

### DecrementUserGaugeBoost
emmitted when a user decrements their gauge boost.


```solidity
event DecrementUserGaugeBoost(address indexed user, address indexed gauge, uint256 UpdatedBoost);
```

## Errors
### InvalidGauge
thrown when trying to increment or remove a non-live gauge, or add a live gauge.


```solidity
error InvalidGauge();
```

### GaugeAlreadyAttached
thrown when a gauge tries to attach a position and already has one attached.


```solidity
error GaugeAlreadyAttached();
```

### AttachedBoost
thrown when a gauge tries to transfer a position but does not have enough free balance.


```solidity
error AttachedBoost();
```

## Structs
### GaugeState
User allocated boost to a gauge and bHermes total supply.


```solidity
struct GaugeState {
    uint128 userGaugeBoost;
    uint128 totalGaugeBoost;
}
```

