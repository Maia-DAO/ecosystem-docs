# SettlementMultipleParams
[Git Source](https://github.com/Maia-DAO/2023-09-maia-remediations/blob/main/src/interfaces/BridgeAgentStructs.sol)


```solidity
struct SettlementMultipleParams {
    uint8 numberOfAssets;
    address recipient;
    uint32 settlementNonce;
    address[] hTokens;
    address[] tokens;
    uint256[] amounts;
    uint256[] deposits;
}
```

