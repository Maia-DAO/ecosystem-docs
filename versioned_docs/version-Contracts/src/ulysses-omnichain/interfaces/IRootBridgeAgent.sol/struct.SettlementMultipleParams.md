# SettlementMultipleParams
[Git Source](https://github.com/Maia-DAO/test-env-V2/blob/84b5f9e8695c91ddb02f27bb3dfb1c652f55ced4/ulysses-omnichain/interfaces/IRootBridgeAgent.sol)


```solidity
struct SettlementMultipleParams {
    uint8 numberOfAssets;
    uint32 settlementNonce;
    address recipient;
    address[] hTokens;
    address[] tokens;
    uint256[] amounts;
    uint256[] deposits;
}
```
