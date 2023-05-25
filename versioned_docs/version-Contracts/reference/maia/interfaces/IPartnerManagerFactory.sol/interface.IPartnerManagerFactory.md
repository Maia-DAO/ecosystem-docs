# IPartnerManagerFactory

**Author:**
Maia DAO (https://github.com/Maia-DAO)

This contract is used to manage the list of partners and vaults.


## Functions
### bHermes

The bHermes token.


```solidity
function bHermes() external view returns (ERC20);
```

### partners

Returns the partner manager at the given index.


```solidity
function partners(uint256) external view returns (PartnerManager);
```

### vaults

Returns the vault at the given index.


```solidity
function vaults(uint256) external view returns (IBaseVault);
```

### partnerIds

Returns the partner's list index for the given partner manager.


```solidity
function partnerIds(PartnerManager) external view returns (uint256);
```

### vaultIds

Returns the vault's list index for the given vault.


```solidity
function vaultIds(IBaseVault) external view returns (uint256);
```

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
function addPartner(PartnerManager newPartnerManager) external;
```

### addVault

Used to add a new vault to the list of vaults.


```solidity
function addVault(IBaseVault newVault) external;
```

### removePartner

Used to remove a partner manager from the list of partners.


```solidity
function removePartner(PartnerManager partnerManager) external;
```

### removeVault

Used to remove a vault from the list of vaults.


```solidity
function removeVault(IBaseVault vault) external;
```

## Events
### AddedPartner
Emitted when a new partner manager is added.


```solidity
event AddedPartner(PartnerManager partnerManager, uint256 id);
```

### AddedVault
Emitted when a new vault is added.


```solidity
event AddedVault(IBaseVault vault, uint256 id);
```

### RemovedPartner
Emitted when a partner manager is removed.


```solidity
event RemovedPartner(PartnerManager indexed partnerManager);
```

### RemovedVault
Emitted when a vault is removed.


```solidity
event RemovedVault(IBaseVault indexed vault);
```

## Errors
### InvalidPartnerManager
Error thrown when the partner manager is not found.


```solidity
error InvalidPartnerManager();
```

### InvalidVault
Error thrown when the vault is not found.


```solidity
error InvalidVault();
```

