---
id: PartnerManagerFactory
title: PartnerManagerFactory
---

**Inherits:**
Ownable, [IPartnerManagerFactory](/maia/interfaces/IPartnerManagerFactory.sol/interface.IPartnerManagerFactory.md)


## State Variables
### bHermes
The bHermes token.


```solidity
ERC20 public immutable override bHermes;
```


### partners
Returns the partner manager at the given index.


```solidity
PartnerManager[] public override partners;
```


### vaults
Returns the vault at the given index.


```solidity
IBaseVault[] public override vaults;
```


### partnerIds
Returns the partner's list index for the given partner manager.


```solidity
mapping(PartnerManager => uint256) public override partnerIds;
```


### vaultIds
Returns the vault's list index for the given vault.


```solidity
mapping(IBaseVault => uint256) public override vaultIds;
```


## Functions
### constructor

Initializes the contract with the owner and bHermes token.


```solidity
constructor(ERC20 _bHermes, address _owner);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_bHermes`|`ERC20`|The address of the bHermes token.|
|`_owner`|`address`|The owner of the contract.|


### getPartners

Used to get all partners managers created


```solidity
function getPartners() external view returns (PartnerManager[] memory);
```

### getVaults

Used to get all vaults created


```solidity
function getVaults() external view returns (IBaseVault[] memory);
```

### addPartner

Used to add a new partner manager to the list of partners.


```solidity
function addPartner(PartnerManager newPartnerManager) external onlyOwner;
```

### addVault

Used to add a new vault to the list of vaults.


```solidity
function addVault(IBaseVault newVault) external onlyOwner;
```

### removePartner

Used to remove a partner manager from the list of partners.


```solidity
function removePartner(PartnerManager partnerManager) external onlyOwner;
```

### removeVault

Used to remove a vault from the list of vaults.


```solidity
function removeVault(IBaseVault vault) external onlyOwner;
```

