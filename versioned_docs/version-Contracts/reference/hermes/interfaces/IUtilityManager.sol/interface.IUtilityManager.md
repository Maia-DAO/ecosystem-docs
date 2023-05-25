# IUtilityManager

**Author:**
Maia DAO (https://github.com/Maia-DAO)

When implemented, this contract allows for the management
of bHermes utility tokens.


## Functions
### gaugeWeight

bHermes Underlying Token responsible for allocating gauge weights.


```solidity
function gaugeWeight() external view returns (bHermesGauges);
```

### gaugeBoost

bHermes Underlying Token for user boost accounting.


```solidity
function gaugeBoost() external view returns (bHermesBoost);
```

### governance

bHermes Underlying Token which grants governance rights.


```solidity
function governance() external view returns (ERC20Votes);
```

### userClaimedWeight

Mapping of different user's bHermes Gauge Weight withdrawn from vault.


```solidity
function userClaimedWeight(address) external view returns (uint256);
```

### userClaimedBoost

Mapping of different user's bHermes Boost withdrawn from vault.


```solidity
function userClaimedBoost(address) external view returns (uint256);
```

### userClaimedGovernance

Mapping of different user's bHermes Governance withdrawn from vault.


```solidity
function userClaimedGovernance(address) external view returns (uint256);
```

### forfeitMultiple

Forfeits the same amounts of multiple utility tokens.


```solidity
function forfeitMultiple(uint256 amount) external;
```

### forfeitMultipleAmounts

Forfeits multiple amounts of multiple utility tokens.


```solidity
function forfeitMultipleAmounts(uint256 weight, uint256 boost, uint256 _governance) external;
```

### forfeitWeight

Forfeits amounts of weight utility token.


```solidity
function forfeitWeight(uint256 amount) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`amount`|`uint256`|The amount to send to partner manager|


### forfeitBoost

Forfeits amounts of boost utility token.


```solidity
function forfeitBoost(uint256 amount) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`amount`|`uint256`|The amount to send to partner manager|


### forfeitGovernance

Forfeits amounts of governance utility token.


```solidity
function forfeitGovernance(uint256 amount) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`amount`|`uint256`|The amount to send to partner manager|


### claimMultiple

Claims the same amounts of multiple utility tokens.


```solidity
function claimMultiple(uint256 amount) external;
```

### claimMultipleAmounts

Claims multiple amounts of multiple utility tokens.


```solidity
function claimMultipleAmounts(uint256 weight, uint256 boost, uint256 _governance) external;
```

### claimWeight

Claims amounts of weight utility token.


```solidity
function claimWeight(uint256 amount) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`amount`|`uint256`|The amount to send to partner manager|


### claimBoost

Claims amounts of boost utility token.


```solidity
function claimBoost(uint256 amount) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`amount`|`uint256`|The amount to send to partner manager|


### claimGovernance

Claims amounts of governance utility token.


```solidity
function claimGovernance(uint256 amount) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`amount`|`uint256`|The amount to send to partner manager|


## Events
### ForfeitWeight
Emitted when a user forfeits weight.


```solidity
event ForfeitWeight(address indexed user, uint256 amount);
```

### ForfeitBoost
Emitted when a user forfeits boost.


```solidity
event ForfeitBoost(address indexed user, uint256 amount);
```

### ForfeitGovernance
Emitted when a user forfeits governance.


```solidity
event ForfeitGovernance(address indexed user, uint256 amount);
```

### ClaimWeight
Emitted when a user claims weight.


```solidity
event ClaimWeight(address indexed user, uint256 amount);
```

### ClaimBoost
Emitted when a user claims boost.


```solidity
event ClaimBoost(address indexed user, uint256 amount);
```

### ClaimGovernance
Emitted when a user claims governance.


```solidity
event ClaimGovernance(address indexed user, uint256 amount);
```

## Errors
### InsufficientShares
Insufficient vault shares for action.


```solidity
error InsufficientShares();
```

