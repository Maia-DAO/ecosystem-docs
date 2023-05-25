---
id: IAnycallConfig
title: IAnycallConfig
---

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

