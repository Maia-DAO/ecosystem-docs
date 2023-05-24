# TimelockInterface
[Git Source](https://github.com/Maia-DAO/test-env-V2/blob/84b5f9e8695c91ddb02f27bb3dfb1c652f55ced4/governance/GovernorBravoInterfaces.sol)


## Functions
### delay


```solidity
function delay() external view returns (uint256);
```

### GRACE_PERIOD


```solidity
function GRACE_PERIOD() external view returns (uint256);
```

### acceptAdmin


```solidity
function acceptAdmin() external;
```

### queuedTransactions


```solidity
function queuedTransactions(bytes32 hash) external view returns (bool);
```

### queueTransaction


```solidity
function queueTransaction(address target, uint256 value, string calldata signature, bytes calldata data, uint256 eta)
    external
    returns (bytes32);
```

### cancelTransaction


```solidity
function cancelTransaction(address target, uint256 value, string calldata signature, bytes calldata data, uint256 eta)
    external;
```

### executeTransaction


```solidity
function executeTransaction(address target, uint256 value, string calldata signature, bytes calldata data, uint256 eta)
    external
    payable
    returns (bytes memory);
```

