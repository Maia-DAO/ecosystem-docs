# Settlement
[Git Source](https://github.com/Maia-DAO/2023-09-maia-remediations/blob/main/src/interfaces/BridgeAgentStructs.sol)


```solidity
struct Settlement {
    uint16 dstChainId;
    uint80 status;
    address owner;
    address recipient;
    address[] hTokens;
    address[] tokens;
    uint256[] amounts;
    uint256[] deposits;
}
```

