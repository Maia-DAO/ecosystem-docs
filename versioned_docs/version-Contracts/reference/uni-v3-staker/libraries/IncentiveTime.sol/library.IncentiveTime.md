# IncentiveTime

**Author:**
Maia DAO (https://github.com/Maia-DAO)

This library is responsible for computing the incentive start and end times.


## State Variables
### INCENTIVES_DURATION

```solidity
uint256 private constant INCENTIVES_DURATION = 1 weeks;
```


### INCENTIVES_OFFSET

```solidity
uint256 private constant INCENTIVES_OFFSET = 12 hours;
```


## Functions
### computeStart


```solidity
function computeStart(uint256 timestamp) internal pure returns (uint96 start);
```

### computeEnd

*The start of the incentive is the start of the week (Thursday 12:00:00 UTC) that the timestamp falls in
Remove Offset, rounds down to nearest week, adds offset back*


```solidity
function computeEnd(uint256 timestamp) internal pure returns (uint96 end);
```

### getEnd

*The end of the incentive is the end of the week (Thursday 12:00:00 UTC) that the timestamp falls in
Remove Offset, rounds up to nearest week, adds offset back*


```solidity
function getEnd(uint96 start) internal pure returns (uint96 end);
```

### getEndAndDuration


```solidity
function getEndAndDuration(uint96 start, uint40 stakedTimestamp, uint256 timestamp)
    internal
    pure
    returns (uint96 end, uint256 stakedDuration);
```

## Errors
### InvalidStartTime
Throws when the staked timestamp is before the incentive start time.


```solidity
error InvalidStartTime();
```

