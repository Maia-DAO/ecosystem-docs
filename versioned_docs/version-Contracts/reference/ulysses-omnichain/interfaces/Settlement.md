---
id: Settlement
title: Settlement
---


```solidity
struct Settlement {
    uint24 toChain;
    uint128 gasToBridgeOut;
    address owner;
    address recipient;
    SettlementStatus status;
    address[] hTokens;
    address[] tokens;
    uint256[] amounts;
    uint256[] deposits;
    bytes callData;
}
```

