# DepositMultipleParams
[Git Source](https://github.com/Maia-DAO/2023-09-maia-remediations/blob/main/src/interfaces/BridgeAgentStructs.sol)


```solidity
struct DepositMultipleParams {
    uint8 numberOfAssets;
    uint32 depositNonce;
    address[] hTokens;
    address[] tokens;
    uint256[] amounts;
    uint256[] deposits;
}
```

