# IAnycallExecutor
[Git Source](https://github.com/Maia-DAO/test-env-V2/blob/84b5f9e8695c91ddb02f27bb3dfb1c652f55ced4/ulysses-omnichain/interfaces/IAnycallExecutor.sol)

IAnycallExecutor interface of the anycall executor


## Functions
### context


```solidity
function context() external view returns (address from, uint256 fromChainID, uint256 nonce);
```

### execute


```solidity
function execute(
    address _to,
    bytes calldata _data,
    address _from,
    uint256 _fromChainID,
    uint256 _nonce,
    uint256 _flags,
    bytes calldata _extdata
) external returns (bool success, bytes memory result);
```

