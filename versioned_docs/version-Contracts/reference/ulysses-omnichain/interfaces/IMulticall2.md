---
id: IMulticall2
title: IMulticall2
---

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

