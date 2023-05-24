# DepositParams
[Git Source](https://github.com/Maia-DAO/test-env-V2/blob/84b5f9e8695c91ddb02f27bb3dfb1c652f55ced4/ulysses-omnichain/interfaces/IBranchBridgeAgent.sol)


```solidity
struct DepositParams {
    uint32 depositNonce;
    address hToken;
    address token;
    uint256 amount;
    uint256 deposit;
    uint24 toChain;
    uint128 depositedGas;
}
```

