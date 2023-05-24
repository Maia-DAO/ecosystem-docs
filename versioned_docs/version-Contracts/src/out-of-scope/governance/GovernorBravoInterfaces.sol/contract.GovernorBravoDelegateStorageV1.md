# GovernorBravoDelegateStorageV1
[Git Source](https://github.com/Maia-DAO/test-env-V2/blob/84b5f9e8695c91ddb02f27bb3dfb1c652f55ced4/out-of-scope/governance/GovernorBravoInterfaces.sol)

**Inherits:**
[GovernorBravoDelegatorStorage](/out-of-scope/governance/GovernorBravoInterfaces.sol/contract.GovernorBravoDelegatorStorage.md)

For future upgrades, do not change GovernorBravoDelegateStorageV1. Create a new
contract which implements GovernorBravoDelegateStorageV1 and following the naming convention
GovernorBravoDelegateStorageVX.


## State Variables
### votingDelay
The delay before voting on a proposal may take place, once proposed, in blocks


```solidity
uint256 public votingDelay;
```


### votingPeriod
The duration of voting on a proposal, in blocks


```solidity
uint256 public votingPeriod;
```


### proposalThreshold
The number of votes required in order for a voter to become a proposer


```solidity
uint256 public proposalThreshold;
```


### initialProposalId
Initial proposal id set at become


```solidity
uint256 public initialProposalId;
```


### proposalCount
The total number of proposals


```solidity
uint256 public proposalCount;
```


### timelock
The address of the Maia Ecosystem Protocol Timelock


```solidity
TimelockInterface public timelock;
```


### govToken
The address of the Maia Ecosystem governance token


```solidity
GovTokenInterface public govToken;
```


### proposals
The official record of all proposals ever proposed


```solidity
mapping(uint256 => Proposal) public proposals;
```


### latestProposalIds
The latest proposal for each proposer


```solidity
mapping(address => uint256) public latestProposalIds;
```


## Structs
### Proposal

```solidity
struct Proposal {
    uint256 id;
    address proposer;
    uint256 eta;
    address[] targets;
    uint256[] values;
    string[] signatures;
    bytes[] calldatas;
    uint256 startBlock;
    uint256 endBlock;
    uint256 forVotes;
    uint256 againstVotes;
    uint256 abstainVotes;
    bool canceled;
    bool executed;
    mapping(address => Receipt) receipts;
}
```

### Receipt
Ballot receipt record for a voter


```solidity
struct Receipt {
    bool hasVoted;
    uint8 support;
    uint96 votes;
}
```

## Enums
### ProposalState
Possible states that a proposal may be in


```solidity
enum ProposalState {
    Pending,
    Active,
    Canceled,
    Defeated,
    Succeeded,
    Queued,
    Expired,
    Executed
}
```

