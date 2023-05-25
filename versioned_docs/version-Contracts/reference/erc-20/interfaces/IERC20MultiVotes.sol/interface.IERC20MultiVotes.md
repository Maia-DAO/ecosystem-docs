# IERC20MultiVotes

an ERC20 extension that allows delegations to multiple delegatees up to a user's balance on a given block.


## Functions
### checkpoints

Get the `pos`-th checkpoint for `account`.


```solidity
function checkpoints(address account, uint32 pos) external view returns (Checkpoint memory);
```

### numCheckpoints

Get number of checkpoints for `account`.


```solidity
function numCheckpoints(address account) external view returns (uint32);
```

### freeVotes

Gets the amount of unallocated votes for `account`.


```solidity
function freeVotes(address account) external view returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`account`|`address`|the address to get free votes of.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|the amount of unallocated votes.|


### getVotes

Gets the current votes balance for `account`.


```solidity
function getVotes(address account) external view returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`account`|`address`|the address to get votes of.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|the amount of votes.|


### userUnusedVotes

helper function exposing the amount of weight available to allocate for a user


```solidity
function userUnusedVotes(address user) external view returns (uint256);
```

### getPriorVotes

Retrieve the number of votes for `account` at the end of `blockNumber`.


```solidity
function getPriorVotes(address account, uint256 blockNumber) external view returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`account`|`address`|the address to get votes of.|
|`blockNumber`|`uint256`|the block to calculate votes for.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|the amount of votes.|


### maxDelegates

the maximum amount of delegates for a user at a given time


```solidity
function maxDelegates() external view returns (uint256);
```

### canContractExceedMaxDelegates

an approve list for contracts to go above the max delegate limit.


```solidity
function canContractExceedMaxDelegates(address) external view returns (bool);
```

### setMaxDelegates

set the new max delegates per user. Requires auth by `authority`.


```solidity
function setMaxDelegates(uint256 newMax) external;
```

### setContractExceedMaxDelegates

set the canContractExceedMaxDelegates flag for an account.


```solidity
function setContractExceedMaxDelegates(address account, bool canExceedMax) external;
```

### userDelegatedVotes

mapping from a delegator to the total number of delegated votes.


```solidity
function userDelegatedVotes(address) external view returns (uint256);
```

### delegatesVotesCount

Get the amount of votes currently delegated by `delegator` to `delegatee`.


```solidity
function delegatesVotesCount(address delegator, address delegatee) external view returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`delegator`|`address`|the account which is delegating votes to `delegatee`.|
|`delegatee`|`address`|the account receiving votes from `delegator`.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|the total amount of votes delegated to `delegatee` by `delegator`|


### delegates

Get the list of delegates from `delegator`.


```solidity
function delegates(address delegator) external view returns (address[] memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`delegator`|`address`|the account which is delegating votes to delegates.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address[]`|the list of delegated accounts.|


### delegateCount

Get the number of delegates from `delegator`.


```solidity
function delegateCount(address delegator) external view returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`delegator`|`address`|the account which is delegating votes to delegates.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|the number of delegated accounts.|


### incrementDelegation

Delegate `amount` votes from the sender to `delegatee`.

*requires "freeVotes(msg.sender) > amount" and will not exceed max delegates*


```solidity
function incrementDelegation(address delegatee, uint256 amount) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`delegatee`|`address`|the receivier of votes.|
|`amount`|`uint256`|the amount of votes received.|


### undelegate

Undelegate `amount` votes from the sender from `delegatee`.


```solidity
function undelegate(address delegatee, uint256 amount) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`delegatee`|`address`|the receivier of undelegation.|
|`amount`|`uint256`|the amount of votes taken away.|


### delegate

Delegate all votes `newDelegatee`. First undelegates from an existing delegate. If `newDelegatee` is zero, only undelegates.

*undefined for `delegateCount(msg.sender) > 1`
NOTE This is meant for backward compatibility with the `ERC20Votes` and `ERC20VotesComp` interfaces from OpenZeppelin.*


```solidity
function delegate(address newDelegatee) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newDelegatee`|`address`|the receiver of votes.|


## Events
### MaxDelegatesUpdate
emitted when updating the maximum amount of delegates per user


```solidity
event MaxDelegatesUpdate(uint256 oldMaxDelegates, uint256 newMaxDelegates);
```

### CanContractExceedMaxDelegatesUpdate
emitted when updating the canContractExceedMaxDelegates flag for an account


```solidity
event CanContractExceedMaxDelegatesUpdate(address indexed account, bool canContractExceedMaxDelegates);
```

### Delegation
*Emitted when a `delegator` delegates `amount` votes to `delegate`.*


```solidity
event Delegation(address indexed delegator, address indexed delegate, uint256 amount);
```

### Undelegation
*Emitted when a `delegator` undelegates `amount` votes from `delegate`.*


```solidity
event Undelegation(address indexed delegator, address indexed delegate, uint256 amount);
```

### DelegateVotesChanged
*Emitted when a token transfer or delegate change results in changes to an account's voting power.*


```solidity
event DelegateVotesChanged(address indexed delegate, uint256 previousBalance, uint256 newBalance);
```

### DelegateChanged
An event thats emitted when an account changes its delegate

*this is used for backward compatibility with OZ interfaces for ERC20Votes and ERC20VotesComp.*


```solidity
event DelegateChanged(address indexed delegator, address indexed fromDelegate, address indexed toDelegate);
```

## Errors
### BlockError
thrown when trying to read from an invalid block.


```solidity
error BlockError();
```

### DelegationError
*thrown when attempting to delegate more votes than an address has free, or exceeding the max delegates*


```solidity
error DelegationError();
```

### UndelegationVoteError
*thrown when attempting to undelegate more votes than the delegatee has unused.*


```solidity
error UndelegationVoteError();
```

## Structs
### Checkpoint
A checkpoint for marking the number of votes from a given block.


```solidity
struct Checkpoint {
    uint32 fromBlock;
    uint224 votes;
}
```

