# GovernorBravoEvents
[Git Source](https://github.com/Maia-DAO/test-env-V2/blob/84b5f9e8695c91ddb02f27bb3dfb1c652f55ced4/out-of-scope/governance/GovernorBravoInterfaces.sol)


## Events
### ProposalCreated
An event emitted when a new proposal is created


```solidity
event ProposalCreated(
    uint256 id,
    address proposer,
    address[] targets,
    uint256[] values,
    string[] signatures,
    bytes[] calldatas,
    uint256 startBlock,
    uint256 endBlock,
    string description
);
```

### VoteCast
An event emitted when a vote has been cast on a proposal


```solidity
event VoteCast(address indexed voter, uint256 proposalId, uint8 support, uint256 votes, string reason);
```

### ProposalCanceled
An event emitted when a proposal has been canceled


```solidity
event ProposalCanceled(uint256 id);
```

### ProposalQueued
An event emitted when a proposal has been queued in the Timelock


```solidity
event ProposalQueued(uint256 id, uint256 eta);
```

### ProposalExecuted
An event emitted when a proposal has been executed in the Timelock


```solidity
event ProposalExecuted(uint256 id);
```

### VotingDelaySet
An event emitted when the voting delay is set


```solidity
event VotingDelaySet(uint256 oldVotingDelay, uint256 newVotingDelay);
```

### VotingPeriodSet
An event emitted when the voting period is set


```solidity
event VotingPeriodSet(uint256 oldVotingPeriod, uint256 newVotingPeriod);
```

### NewImplementation
Emitted when implementation is changed


```solidity
event NewImplementation(address oldImplementation, address newImplementation);
```

### ProposalThresholdSet
Emitted when proposal threshold is set


```solidity
event ProposalThresholdSet(uint256 oldProposalThreshold, uint256 newProposalThreshold);
```

### NewPendingAdmin
Emitted when pendingAdmin is changed


```solidity
event NewPendingAdmin(address oldPendingAdmin, address newPendingAdmin);
```

### NewAdmin
Emitted when pendingAdmin is accepted, which means admin is updated


```solidity
event NewAdmin(address oldAdmin, address newAdmin);
```

### WhitelistAccountExpirationSet
Emitted when whitelist account expiration is set


```solidity
event WhitelistAccountExpirationSet(address account, uint256 expiration);
```

### WhitelistGuardianSet
Emitted when the whitelistGuardian is set


```solidity
event WhitelistGuardianSet(address oldGuardian, address newGuardian);
```

