# Deposit
[Git Source](https://github.com/Maia-DAO/2023-09-maia-remediations/blob/main/src/interfaces/BridgeAgentStructs.sol)


```solidity
struct Deposit {
    uint8 status;
    uint88 isSigned;
    address owner;
    address[] hTokens;
    address[] tokens;
    uint256[] amounts;
    uint256[] deposits;
}
```

