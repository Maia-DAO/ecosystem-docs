# IPartnerUtilityManager
[Git Source](https://github.com/Maia-DAO/test-env-V2/blob/84b5f9e8695c91ddb02f27bb3dfb1c652f55ced4/maia/interfaces/IPartnerUtilityManager.sol)

**Author:**
Maia DAO (https://github.com/Maia-DAO)

When implemented, this contract allows for the partner
management of bHermes utility tokens.


## Functions
### partnerVault

address applying unused utility tokens.


```solidity
function partnerVault() external view returns (address);
```

### partnerGovernance

Partner Underlying Token which grants governance rights.


```solidity
function partnerGovernance() external view returns (ERC20Votes);
```

### userClaimedPartnerGovernance

Mapping of different user's Partner Governance withdrawn from vault.


```solidity
function userClaimedPartnerGovernance(address) external view returns (uint256);
```

### forfeitMultipleAmounts

Forfeits multiple amounts of multiple utility tokens.


```solidity
function forfeitMultipleAmounts(uint256 weight, uint256 boost, uint256 _governance, uint256 partnerGovernance)
    external;
```

### forfeitPartnerGovernance

Forfeits amounts of partner governance utility token.


```solidity
function forfeitPartnerGovernance(uint256 amount) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`amount`|`uint256`|The amount to send to partner manager|


### claimMultipleAmounts

Claims multiple amounts of multiple utility tokens.


```solidity
function claimMultipleAmounts(uint256 weight, uint256 boost, uint256 _governance, uint256 partnerGovernance) external;
```

### claimPartnerGovernance

Claims amounts of partner governance utility token.


```solidity
function claimPartnerGovernance(uint256 amount) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`amount`|`uint256`|The amount to send to partner manager|


