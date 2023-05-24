# GovernorBravoDelegateStorageV2
[Git Source](https://github.com/Maia-DAO/test-env-V2/blob/84b5f9e8695c91ddb02f27bb3dfb1c652f55ced4/out-of-scope/governance/GovernorBravoInterfaces.sol)

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


