# IMulticall2
[Git Source](https://github.com/Maia-DAO/test-env-V2/blob/84b5f9e8695c91ddb02f27bb3dfb1c652f55ced4/ulysses-omnichain/interfaces/IMulticall2.sol)

**Authors:**
Michael Elliot <mike@makerdao.com>, Joshua Levine <joshua@makerdao.com>, Nick Johnson <arachnid@notdot.net>


## Functions
### aggregate


```solidity
function aggregate(Call[] memory calls) external returns (uint256 blockNumber, bytes[] memory returnData);
```

## Structs
### Call

```solidity
struct Call {
    address target;
    bytes callData;
}
```

### Result

```solidity
struct Result {
    bool success;
    bytes returnData;
}
```

