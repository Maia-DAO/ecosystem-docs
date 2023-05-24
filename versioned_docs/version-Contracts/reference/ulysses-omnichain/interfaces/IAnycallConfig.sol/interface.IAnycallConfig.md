# IAnycallConfig
[Git Source](https://github.com/Maia-DAO/test-env-V2/blob/84b5f9e8695c91ddb02f27bb3dfb1c652f55ced4/ulysses-omnichain/interfaces/IAnycallConfig.sol)

IAnycallConfig interface of the anycall config


## Functions
### calcSrcFees


```solidity
function calcSrcFees(address _app, uint256 _toChainID, uint256 _dataLength) external view returns (uint256);
```

### executionBudget


```solidity
function executionBudget(address _app) external view returns (uint256);
```

### deposit


```solidity
function deposit(address _account) external payable;
```

### withdraw


```solidity
function withdraw(uint256 _amount) external;
```

