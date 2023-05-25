# GovernorBravoDelegator

**Inherits:**
[GovernorBravoDelegatorStorage](/out-of-scope/governance/GovernorBravoInterfaces.sol/contract.GovernorBravoDelegatorStorage.md), [GovernorBravoEvents](/out-of-scope/governance/GovernorBravoInterfaces.sol/contract.GovernorBravoEvents.md)


## Functions
### constructor


```solidity
constructor(
    address timelock_,
    address govToken_,
    address admin_,
    address implementation_,
    uint256 votingPeriod_,
    uint256 votingDelay_,
    uint256 proposalThreshold_
) public;
```

### _setImplementation

Called by the admin to update the implementation of the delegator


```solidity
function _setImplementation(address implementation_) public;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`implementation_`|`address`|The address of the new implementation for delegation|


### delegateTo

Internal method to delegate execution to another contract

*It returns to the external caller whatever the implementation returns or forwards reverts*


```solidity
function delegateTo(address callee, bytes memory data) internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`callee`|`address`|The contract to delegatecall|
|`data`|`bytes`|The raw data to delegatecall|


### fallback

*Delegates execution to an implementation contract.
It returns to the external caller whatever the implementation returns
or forwards reverts.*


```solidity
fallback() external payable;
```

