# Settlement
[Git Source](https://github.com/Maia-DAO/test-env-V2/blob/84b5f9e8695c91ddb02f27bb3dfb1c652f55ced4/ulysses-omnichain/interfaces/IRootBridgeAgent.sol)


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

