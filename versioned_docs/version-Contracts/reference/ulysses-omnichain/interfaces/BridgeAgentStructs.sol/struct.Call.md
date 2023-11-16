# Call
[Git Source](https://github.com/Maia-DAO/2023-09-maia-remediations/blob/main/src/interfaces/IVirtualAccount.sol)

Call structure based off `Multicall2` contract for aggregating calls.


```solidity
struct Call {
    address target;
    bytes callData;
}
```

