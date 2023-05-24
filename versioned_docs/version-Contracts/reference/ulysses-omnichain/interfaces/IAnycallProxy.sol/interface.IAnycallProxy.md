# IAnycallProxy
[Git Source](https://github.com/Maia-DAO/test-env-V2/blob/84b5f9e8695c91ddb02f27bb3dfb1c652f55ced4/ulysses-omnichain/interfaces/IAnycallProxy.sol)

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

