# GovernorBravoDelegateStorageV2

**Inherits:**
[GovernorBravoDelegateStorageV1](/out-of-scope/governance/GovernorBravoInterfaces.sol/contract.GovernorBravoDelegateStorageV1.md)


## State Variables
### whitelistAccountExpirations
Stores the expiration of account whitelist status as a timestamp


```solidity
mapping(address => uint256) public whitelistAccountExpirations;
```


### whitelistGuardian
Address which manages whitelisted proposals and whitelist accounts


```solidity
address public whitelistGuardian;
```


