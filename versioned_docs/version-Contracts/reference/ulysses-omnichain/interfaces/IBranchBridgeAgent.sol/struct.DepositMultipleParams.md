# DepositMultipleParams


```solidity
struct DepositMultipleParams {
    uint8 numberOfAssets;
    uint32 depositNonce;
    address[] hTokens;
    address[] tokens;
    uint256[] amounts;
    uint256[] deposits;
    uint24 toChain;
    uint128 depositedGas;
}
```

