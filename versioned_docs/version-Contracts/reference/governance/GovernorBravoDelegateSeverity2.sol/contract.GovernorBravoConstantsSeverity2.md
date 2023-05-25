# GovernorBravoConstantsSeverity2


## State Variables
### name
The name of this contract


```solidity
string public constant name = "bHermes Governor Bravo Severity 2";
```


### MIN_PROPOSAL_THRESHOLD
The minimum setable proposal threshold


```solidity
uint256 public constant MIN_PROPOSAL_THRESHOLD = 0.0025 ether;
```


### MAX_PROPOSAL_THRESHOLD
The maximum setable proposal threshold


```solidity
uint256 public constant MAX_PROPOSAL_THRESHOLD = 0.025 ether;
```


### MIN_VOTING_PERIOD
The minimum setable voting period


```solidity
uint256 public constant MIN_VOTING_PERIOD = 11520;
```


### MAX_VOTING_PERIOD
The max setable voting period


```solidity
uint256 public constant MAX_VOTING_PERIOD = 80640;
```


### MIN_VOTING_DELAY
The min setable voting delay


```solidity
uint256 public constant MIN_VOTING_DELAY = 11520;
```


### MAX_VOTING_DELAY
The max setable voting delay


```solidity
uint256 public constant MAX_VOTING_DELAY = 40320;
```


### quorumVotes
The number of votes in support of a proposal required in order for a quorum to be reached and for a vote to succeed


```solidity
uint256 public constant quorumVotes = 0.125 ether;
```


### proposalMaxOperations
The maximum number of actions that can be included in a proposal


```solidity
uint256 public constant proposalMaxOperations = 10;
```


### DIVISIONER
The divisor value used in percentage calculations


```solidity
uint256 public constant DIVISIONER = 1 ether;
```


