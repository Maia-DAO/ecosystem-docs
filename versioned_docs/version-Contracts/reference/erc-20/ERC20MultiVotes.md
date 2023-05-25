---
id: ERC20MultiVotes
title: ERC20MultiVotes
---


**Inherits:**
ERC20, Ownable, [IERC20MultiVotes](/erc-20/interfaces/IERC20MultiVotes.sol/interface.IERC20MultiVotes.md)


## State Variables
### _checkpoints
votes checkpoint list per user.


```solidity
mapping(address => Checkpoint[]) private _checkpoints;
```


### maxDelegates
the maximum amount of delegates for a user at a given time


```solidity
uint256 public override maxDelegates;
```


### canContractExceedMaxDelegates
an approve list for contracts to go above the max delegate limit.


```solidity
mapping(address => bool) public override canContractExceedMaxDelegates;
```


### _delegatesVotesCount
How many votes a user has delegated to a delegatee.


```solidity
mapping(address => mapping(address => uint256)) private _delegatesVotesCount;
```


### userDelegatedVotes
How many votes a user has delegated to him.


```solidity
mapping(address => uint256) public userDelegatedVotes;
```


### _delegates
The delegatees of a user.


```solidity
mapping(address => EnumerableSet.AddressSet) private _delegates;
```


### DELEGATION_TYPEHASH

```solidity
bytes32 public constant DELEGATION_TYPEHASH = keccak256("Delegation(address delegatee,uint256 nonce,uint256 expiry)");
```


## Functions
### checkpoints

Get the `pos`-th checkpoint for `account`.


```solidity
function checkpoints(address account, uint32 pos) public view virtual returns (Checkpoint memory);
```

### numCheckpoints

Get number of checkpoints for `account`.


```solidity
function numCheckpoints(address account) public view virtual returns (uint32);
```

### freeVotes

Gets the amount of unallocated votes for `account`.


```solidity
function freeVotes(address account) public view virtual returns (uint256);
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
function getVotes(address account) public view virtual returns (uint256);
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
function userUnusedVotes(address user) public view virtual returns (uint256);
```

### getPriorVotes

Retrieve the number of votes for `account` at the end of `blockNumber`.


```solidity
function getPriorVotes(address account, uint256 blockNumber) public view virtual returns (uint256);
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


### _checkpointsLookup

*Lookup a value in a list of (sorted) checkpoints.*


```solidity
function _checkpointsLookup(Checkpoint[] storage ckpts, uint256 blockNumber) private view returns (uint256);
```

### average


```solidity
function average(uint256 a, uint256 b) internal pure returns (uint256);
```

### setMaxDelegates

set the new max delegates per user. Requires auth by `authority`.


```solidity
function setMaxDelegates(uint256 newMax) external onlyOwner;
```

### setContractExceedMaxDelegates

set the canContractExceedMaxDelegates flag for an account.


```solidity
function setContractExceedMaxDelegates(address account, bool canExceedMax) external onlyOwner;
```

### delegatesVotesCount

Get the amount of votes currently delegated by `delegator` to `delegatee`.


```solidity
function delegatesVotesCount(address delegator, address delegatee) public view virtual returns (uint256);
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
function delegates(address delegator) public view returns (address[] memory);
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
function delegateCount(address delegator) public view returns (uint256);
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
function incrementDelegation(address delegatee, uint256 amount) public virtual;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`delegatee`|`address`|the receivier of votes.|
|`amount`|`uint256`|the amount of votes received.|


### undelegate

Undelegate `amount` votes from the sender from `delegatee`.


```solidity
function undelegate(address delegatee, uint256 amount) public virtual;
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
function delegate(address newDelegatee) external virtual;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newDelegatee`|`address`|the receiver of votes.|


### _delegate

Delegates all votes from `delegator` to `delegatee`

*Reverts if delegateCount > 1*


```solidity
function _delegate(address delegator, address newDelegatee) internal virtual;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`delegator`|`address`|The address to delegate votes from|
|`newDelegatee`|`address`|The address to delegate votes to|


### _incrementDelegation

Delegates votes from `delegator` to `delegatee`

*Reverts if delegator is not approved and exceeds maxDelegates*


```solidity
function _incrementDelegation(address delegator, address delegatee, uint256 amount) internal virtual;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`delegator`|`address`|The address to delegate votes from|
|`delegatee`|`address`|The address to delegate votes to|
|`amount`|`uint256`|The amount of votes to delegate|


### _undelegate

Undelegates votes from `delegator` to `delegatee`

*Reverts if delegatee does not have enough free votes*


```solidity
function _undelegate(address delegator, address delegatee, uint256 amount) internal virtual;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`delegator`|`address`|The address to undelegate votes from|
|`delegatee`|`address`|The address to undelegate votes to|
|`amount`|`uint256`|The amount of votes to undelegate|


### _writeCheckpoint

Writes a checkpoint for `delegatee` with `delta` votes

*delegatee needs to have sufficient free votes for delegator to undelegate.
Delegatee needs to be trusted, can be either a contract or an EOA.
If delegatee does not have any free votes and doesn't change their vote delegator won't be able to undelegate.
If it is a contract, a possible safety measure is to have an emergency clear votes.*


```solidity
function _writeCheckpoint(address delegatee, function(uint256, uint256) view returns (uint256) op, uint256 delta)
    private;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`delegatee`|`address`|The address to write a checkpoint for|
|`op`|`function (uint256, uint256) view returns (uint256)`|The operation to perform on the checkpoint|
|`delta`|`uint256`|The difference in votes to write|


### _add


```solidity
function _add(uint256 a, uint256 b) private pure returns (uint256);
```

### _subtract


```solidity
function _subtract(uint256 a, uint256 b) private pure returns (uint256);
```

### _burn

NOTE: any "removal" of tokens from a user requires freeVotes(user) < amount.
_decrementVotesUntilFree is called as a greedy algorithm to free up votes.
It may be more gas efficient to free weight before burning or transferring tokens.

Burns `amount` of tokens from `from` address.

*Frees votes with a greedy algorithm if needed to burn tokens*


```solidity
function _burn(address from, uint256 amount) internal virtual override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`from`|`address`|The address to burn tokens from.|
|`amount`|`uint256`|The amount of tokens to burn.|


### transfer

Transfers `amount` of tokens from `msg.sender` to `to` address.

*Frees votes with a greedy algorithm if needed to burn tokens*


```solidity
function transfer(address to, uint256 amount) public virtual override returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`to`|`address`|the address to transfer to.|
|`amount`|`uint256`|the amount to transfer.|


### transferFrom

Transfers `amount` of tokens from `from` address to `to` address.

*Frees votes with a greedy algorithm if needed to burn tokens*


```solidity
function transferFrom(address from, address to, uint256 amount) public virtual override returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`from`|`address`|the address to transfer from.|
|`to`|`address`|the address to transfer to.|
|`amount`|`uint256`|the amount to transfer.|


### _decrementVotesUntilFree

A greedy algorithm for freeing votes before a token burn/transfer

*Frees up entire delegates, so likely will free more than `votes`*


```solidity
function _decrementVotesUntilFree(address user, uint256 votes) internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`user`|`address`|The address to free votes from.|
|`votes`|`uint256`|The amount of votes to free.|


### delegateBySig


```solidity
function delegateBySig(address delegatee, uint256 nonce, uint256 expiry, uint8 v, bytes32 r, bytes32 s) public;
```

