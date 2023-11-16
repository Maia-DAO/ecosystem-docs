# AddressCodeSize
[Git Source](https://github.com/Maia-DAO/2023-09-maia-remediations/blob/main/src/lib/AddressCodeSize.sol)

Library for checking the size of a contract's code.

*Used for checking if an address is a contract or an EOA.*


## Functions
### isContract


```solidity
function isContract(address addr) internal view returns (bool);
```

### isEOA


```solidity
function isEOA(address addr) internal view returns (bool);
```

