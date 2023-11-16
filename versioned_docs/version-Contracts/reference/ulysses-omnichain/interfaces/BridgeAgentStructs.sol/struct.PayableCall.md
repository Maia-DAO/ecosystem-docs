# PayableCall
[Git Source](https://github.com/Maia-DAO/2023-09-maia-remediations/blob/main/src/interfaces/IVirtualAccount.sol)

Payable call structure based off `Multicall3` contract for aggreagating calls with `msg.value`.


```solidity
struct PayableCall {
    address target;
    bytes callData;
    uint256 value;
}
```

