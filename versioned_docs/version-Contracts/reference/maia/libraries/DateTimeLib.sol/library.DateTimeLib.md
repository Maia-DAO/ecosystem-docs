# DateTimeLib

**Author:**
Solady (https://github.com/vectorized/solady/blob/main/utils/DateTimeLib.sol)
Conventions:
--------------------------------------------------------------------+
Unit      | Range                | Notes                            |
--------------------------------------------------------------------|
timestamp | 0..0x1e18549868c76ff | Unix timestamp.                  |
epochDay  | 0..0x16d3e098039     | Days since 1970-01-01.           |
year      | 1970..0xffffffff     | Gregorian calendar year.         |
month     | 1..12                | Gregorian calendar month.        |
day       | 1..31                | Gregorian calendar day of month. |
weekday   | 1..7                 | The day of the week (1-indexed). |
--------------------------------------------------------------------+
All timestamps of days are rounded down to 00:00:00 UTC.

Library for date time operations.


## Functions
### getMonth

*Returns (`month`) from the number of days since 1970-01-01.
See: https://howardhinnant.github.io/date_algorithms.html
Note: Inputs outside the supported ranges result in undefined behavior.
Use {isSupportedDays} to check if the inputs is supported.*


```solidity
function getMonth(uint256 timestamp) internal pure returns (uint256 month);
```

### isTuesday

*Returns the weekday from the unix timestamp.
Monday: 1, Tuesday: 2, ....., Sunday: 7.*


```solidity
function isTuesday(uint256 timestamp) internal pure returns (bool result, uint256 startOfDay);
```

