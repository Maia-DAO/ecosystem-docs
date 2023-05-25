---
id: IERC4626PartnerManager
title: IERC4626PartnerManager
---

**Author:**
Maia DAO (https://github.com/Maia-DAO)

Partner Manager is an ERC-4626 compliant Partner token which:
distributes bHermes utility tokens (Weight, Boost, Governance)
in exchange for staking Partner tokens.


## Functions
### factory

The partner manager factory.


```solidity
function factory() external view returns (PartnerManagerFactory);
```

### bHermesToken

The bHermes token.


```solidity
function bHermesToken() external view returns (bHermes);
```

### bHermesRate

The bHermes rate is used to determine how much hermes
can be claimed by one share.


```solidity
function bHermesRate() external view returns (uint256);
```

### updateUnderlyingBalance

Updates the bHermes underlying balance.

*Claims all outstanding underlying bHermes utility tokens for this contract.*


```solidity
function updateUnderlyingBalance() external;
```

### claimOutstanding

Claims all outstanding underlying bHermes utility tokens for msg.sender.


```solidity
function claimOutstanding() external;
```

### migratePartnerVault

Migrates assets to new Partner Vault.

*Must be a Vault recognized by PartnerManagerFactory.*


```solidity
function migratePartnerVault(address newPartnerVault) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newPartnerVault`|`address`|destination Partner Vault.|


### increaseConversionRate

Allows owner to raise the conversion rate used for deposit.
Conversion rate can only be raised. Sets the ratio
between pbHermes<\>bHermes. If the ratio is 1 it means that
1 $pbHermes has 1 $bHermes worth of voting power.

*Maximum increase of conversion rate up to:
`bHermes.balanceOf(address(partnerVault)) / totalSupply()`.*


```solidity
function increaseConversionRate(uint256 newRate) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newRate`|`uint256`|new bHermes to pbHermes conversion rate. represents the value that correlates partnerToken with bHermes voting power.|


## Events
### AccrueRewards
Emitted when a user's rewards accrue to a given strategy.


```solidity
event AccrueRewards(address indexed user, uint256 rewardsDelta, uint256 rewardsIndex);
```

### ClaimRewards
Emitted when a user claims accrued rewards.


```solidity
event ClaimRewards(address indexed user, uint256 amount);
```

### MigratePartnerVault
Emitted when a partner vault is migrated.


```solidity
event MigratePartnerVault(address indexed oldPartnerVault, address indexed newPartnerVault);
```

## Errors
### UnrecognizedVault
*throws when trying to migrate to an invalid partner vault.*


```solidity
error UnrecognizedVault();
```

### InvalidRate
*throws when trying to new bHermesRate is smaller than the last one.*


```solidity
error InvalidRate();
```

### InsufficientBacking
*throws when trying to increase bHermesRate to an invalid value.*


```solidity
error InsufficientBacking();
```

### InsufficientUnderlying
*throws when a user does not have not enough claimed balance for transfer.*


```solidity
error InsufficientUnderlying();
```

### ExceedsMaxDeposit
*throws when trying to mint more than the contract can support.*


```solidity
error ExceedsMaxDeposit();
```

