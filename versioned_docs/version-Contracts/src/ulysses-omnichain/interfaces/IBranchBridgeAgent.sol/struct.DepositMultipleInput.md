# DepositMultipleInput
[Git Source](https://github.com/Maia-DAO/test-env-V2/blob/84b5f9e8695c91ddb02f27bb3dfb1c652f55ced4/ulysses-omnichain/interfaces/IBranchBridgeAgent.sol)


```solidity
struct DepositMultipleInput {
    address[] hTokens;
    address[] tokens;
    uint256[] amounts;
    uint256[] deposits;
    uint24 toChain;
}
```
