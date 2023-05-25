# IBaseVault

**Author:**
Maia DAO (https://github.com/Maia-DAO)

This contract allows for the management of bHermes utility tokens.
Should be able to retrieve applied tokens at any time and transfer
back to its owner(s).
NOTE: When added to a partner manager, the vault should use any
utility tokens that are forfeited to it after calling `applyAll()`.
Should be able to retrieve applied tokens at any time and transfer
back to the vault when `clearAll()` is called.


## Functions
### applyWeight


```solidity
function applyWeight() external;
```

### applyBoost


```solidity
function applyBoost() external;
```

### applyGovernance


```solidity
function applyGovernance() external;
```

### applyAll


```solidity
function applyAll() external;
```

### clearWeight


```solidity
function clearWeight(uint256 amount) external;
```

### clearBoost


```solidity
function clearBoost(uint256 amount) external;
```

### clearGovernance


```solidity
function clearGovernance(uint256 amount) external;
```

### clearAll


```solidity
function clearAll() external;
```

