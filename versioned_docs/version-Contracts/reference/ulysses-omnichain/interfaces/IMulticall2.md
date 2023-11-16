# IMulticall2
[Git Source](https://github.com/Maia-DAO/2023-09-maia-remediations/blob/main/src/interfaces/IMulticall2.sol)

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

