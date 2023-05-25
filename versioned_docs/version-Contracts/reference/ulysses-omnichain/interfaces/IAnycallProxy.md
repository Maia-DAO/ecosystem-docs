---
id: IAnycallProxy
title: IAnycallProxy
---

IAnycallProxy interface of the anycall proxy


## Functions
### executor


```solidity
function executor() external view returns (address);
```

### config


```solidity
function config() external view returns (address);
```

### anyCall


```solidity
function anyCall(address _to, bytes calldata _data, uint256 _toChainID, uint256 _flags, bytes calldata _extdata)
    external
    payable;
```

### anyCall


```solidity
function anyCall(string calldata _to, bytes calldata _data, uint256 _toChainID, uint256 _flags, bytes calldata _extdata)
    external
    payable;
```

