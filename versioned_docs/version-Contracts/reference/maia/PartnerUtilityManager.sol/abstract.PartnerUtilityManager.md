# PartnerUtilityManager

**Inherits:**
[UtilityManager](/hermes/UtilityManager.sol/abstract.UtilityManager.md), [IPartnerUtilityManager](/maia/interfaces/IPartnerUtilityManager.sol/interface.IPartnerUtilityManager.md)


## State Variables
### partnerVault
address applying unused utility tokens.


```solidity
address public partnerVault;
```


### partnerGovernance
Partner Underlying Token which grants governance rights.


```solidity
ERC20Votes public immutable partnerGovernance;
```


### userClaimedPartnerGovernance
Mapping of different user's Partner Governance withdrawn from vault.


```solidity
mapping(address => uint256) public userClaimedPartnerGovernance;
```


## Functions
### constructor

Constructs the Utility Manager Contract.


```solidity
constructor(
    address _gaugeWeight,
    address _gaugeBoost,
    address _governance,
    address _partnerGovernance,
    address _partnerVault
) UtilityManager(_gaugeWeight, _gaugeBoost, _governance);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_gaugeWeight`|`address`|The address of the weight gauge.|
|`_gaugeBoost`|`address`|The address of the boost gauge.|
|`_governance`|`address`|The address of the governance token.|
|`_partnerGovernance`|`address`|The address of the partner governance token.|
|`_partnerVault`|`address`|The address of the partner vault.|


### forfeitMultiple

Forfeits the same amounts of multiple utility tokens.


```solidity
function forfeitMultiple(uint256 amount) public virtual override;
```

### forfeitMultipleAmounts

Forfeits multiple amounts of multiple utility tokens.


```solidity
function forfeitMultipleAmounts(uint256 weight, uint256 boost, uint256 _governance, uint256 _partnerGovernance)
    public
    virtual;
```

### forfeitWeight

Forfeits amounts of weight utility token.


```solidity
function forfeitWeight(uint256 amount) public virtual override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`amount`|`uint256`|The amount to send to partner manager|


### forfeitBoost

Forfeits amounts of boost utility token.

*Vault applies outstanding weight.*


```solidity
function forfeitBoost(uint256 amount) public virtual override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`amount`|`uint256`|The amount to send to partner manager|


### forfeitGovernance

Forfeits amounts of governance utility token.

*Vault applies outstanding boost.*


```solidity
function forfeitGovernance(uint256 amount) public virtual override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`amount`|`uint256`|The amount to send to partner manager|


### forfeitPartnerGovernance

Forfeits amounts of partner governance utility token.

*Vault applies outstanding governance.*


```solidity
function forfeitPartnerGovernance(uint256 amount) public;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`amount`|`uint256`|The amount to send to partner manager|


### claimMultiple

Claims the same amounts of multiple utility tokens.

*partnerGovernance is kept in this contract and not sent to vaults to avoid governance attacks.*


```solidity
function claimMultiple(uint256 amount) public virtual override;
```

### claimMultipleAmounts

Claims multiple amounts of multiple utility tokens.


```solidity
function claimMultipleAmounts(uint256 weight, uint256 boost, uint256 _governance, uint256 _partnerGovernance)
    public
    virtual;
```

### claimWeight

Claims amounts of weight utility token.


```solidity
function claimWeight(uint256 amount) public virtual override checkWeight(amount);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`amount`|`uint256`|The amount to send to partner manager|


### claimBoost

Claims amounts of boost utility token.

*Must transfer weight amount to this manager address.*


```solidity
function claimBoost(uint256 amount) public virtual override checkBoost(amount);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`amount`|`uint256`|The amount to send to partner manager|


### claimGovernance

Claims amounts of governance utility token.

*Must transfer boost amount to this manager address.*


```solidity
function claimGovernance(uint256 amount) public virtual override checkGovernance(amount);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`amount`|`uint256`|The amount to send to partner manager|


### claimPartnerGovernance

Claims amounts of partner governance utility token.

*Must transfer governance amount to this manager address.*


```solidity
function claimPartnerGovernance(uint256 amount) public checkPartnerGovernance(amount);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`amount`|`uint256`|The amount to send to partner manager|


### checkPartnerGovernance

*Checks available governance allows for call.*


```solidity
modifier checkPartnerGovernance(uint256 amount) virtual;
```

