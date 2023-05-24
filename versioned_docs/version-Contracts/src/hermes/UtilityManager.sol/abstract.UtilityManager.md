# UtilityManager
[Git Source](https://github.com/Maia-DAO/test-env-V2/blob/84b5f9e8695c91ddb02f27bb3dfb1c652f55ced4/hermes/UtilityManager.sol)

**Inherits:**
[IUtilityManager](/hermes/interfaces/IUtilityManager.sol/interface.IUtilityManager.md)


## State Variables
### gaugeWeight
bHermes Underlying Token responsible for allocating gauge weights.


```solidity
bHermesGauges public immutable gaugeWeight;
```


### gaugeBoost
bHermes Underlying Token for user boost accounting.


```solidity
bHermesBoost public immutable gaugeBoost;
```


### governance
bHermes Underlying Token which grants governance rights.


```solidity
ERC20Votes public immutable governance;
```


### userClaimedWeight
Mapping of different user's bHermes Gauge Weight withdrawn from vault.


```solidity
mapping(address => uint256) public userClaimedWeight;
```


### userClaimedBoost
Mapping of different user's bHermes Boost withdrawn from vault.


```solidity
mapping(address => uint256) public userClaimedBoost;
```


### userClaimedGovernance
Mapping of different user's bHermes Governance withdrawn from vault.


```solidity
mapping(address => uint256) public userClaimedGovernance;
```


## Functions
### constructor

Constructs the UtilityManager contract.


```solidity
constructor(address _gaugeWeight, address _gaugeBoost, address _governance);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_gaugeWeight`|`address`|The address of the bHermesGauges contract.|
|`_gaugeBoost`|`address`|The address of the bHermesBoost contract.|
|`_governance`|`address`|The address of the bHermesVotes contract.|


### forfeitMultiple

Forfeits the same amounts of multiple utility tokens.


```solidity
function forfeitMultiple(uint256 amount) public virtual;
```

### forfeitMultipleAmounts

Forfeits multiple amounts of multiple utility tokens.


```solidity
function forfeitMultipleAmounts(uint256 weight, uint256 boost, uint256 _governance) public virtual;
```

### forfeitWeight

Forfeits amounts of weight utility token.


```solidity
function forfeitWeight(uint256 amount) public virtual;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`amount`|`uint256`|The amount to send to partner manager|


### forfeitBoost

Forfeits amounts of boost utility token.


```solidity
function forfeitBoost(uint256 amount) public virtual;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`amount`|`uint256`|The amount to send to partner manager|


### forfeitGovernance

Forfeits amounts of governance utility token.


```solidity
function forfeitGovernance(uint256 amount) public virtual;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`amount`|`uint256`|The amount to send to partner manager|


### claimMultiple

Claims the same amounts of multiple utility tokens.


```solidity
function claimMultiple(uint256 amount) public virtual;
```

### claimMultipleAmounts

Claims multiple amounts of multiple utility tokens.


```solidity
function claimMultipleAmounts(uint256 weight, uint256 boost, uint256 _governance) public virtual;
```

### claimWeight

Claims amounts of weight utility token.


```solidity
function claimWeight(uint256 amount) public virtual checkWeight(amount);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`amount`|`uint256`|The amount to send to partner manager|


### claimBoost

Claims amounts of boost utility token.


```solidity
function claimBoost(uint256 amount) public virtual checkBoost(amount);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`amount`|`uint256`|The amount to send to partner manager|


### claimGovernance

Claims amounts of governance utility token.


```solidity
function claimGovernance(uint256 amount) public virtual checkGovernance(amount);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`amount`|`uint256`|The amount to send to partner manager|


### checkWeight

*Checks available weight allows for call.*


```solidity
modifier checkWeight(uint256 amount) virtual;
```

### checkBoost

*Checks available boost allows for call.*


```solidity
modifier checkBoost(uint256 amount) virtual;
```

### checkGovernance

*Checks available governance allows for call.*


```solidity
modifier checkGovernance(uint256 amount) virtual;
```

