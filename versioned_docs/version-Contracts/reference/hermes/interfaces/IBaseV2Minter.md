---
id: IBaseV2Minter
title: IBaseV2Minter
---

**Inherits:**
[IRewardsStream](/rewards/interfaces/IFlywheelGaugeRewards.sol/interface.IRewardsStream.md)

**Author:**
Maia DAO (https://github.com/Maia-DAO)

Codifies the minting rules as per b(3,3), abstracted from the token to support
any ERC4626 with any token that allows minting. Responsible for minting new tokens.


## Functions
### underlying

Underlying token that the contract has minting powers over.


```solidity
function underlying() external view returns (address);
```

### vault

ERC4626 vault that receives emissions via rebases, which later will be distributed throughout the depositors.


```solidity
function vault() external view returns (ERC4626);
```

### flywheelGaugeRewards

Holds the rewards for the current cycle and distributes them to the gauges.


```solidity
function flywheelGaugeRewards() external view returns (FlywheelGaugeRewards);
```

### dao

Represents the address of the DAO.


```solidity
function dao() external view returns (address);
```

### daoShare

Represents the percentage of the emissions that will be sent to the DAO.


```solidity
function daoShare() external view returns (uint256);
```

### tailEmission

Represents the percentage of the circulating supply
that will be distributed every epoch as rewards


```solidity
function tailEmission() external view returns (uint256);
```

### weekly

Represents the weekly emissions.


```solidity
function weekly() external view returns (uint256);
```

### activePeriod

Represents the timestamp of the beginning of the new cycle.


```solidity
function activePeriod() external view returns (uint256);
```

### initialize

Initializes contract state. Called once when the contract is
deployed to initialize the contract state.


```solidity
function initialize(FlywheelGaugeRewards _flywheelGaugeRewards) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_flywheelGaugeRewards`|`FlywheelGaugeRewards`|address of the flywheel gauge rewards contract.|


### setTailEmission

Changes the current tail emissions.


```solidity
function setTailEmission(uint256 _tail_emission) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_tail_emission`|`uint256`|amount to set as the tail emission|


### setDao

Sets the address of the DAO.


```solidity
function setDao(address _dao) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_dao`|`address`|address of the DAO.|


### setDaoShare

Sets the share of the DAO rewards.


```solidity
function setDaoShare(uint256 _dao_share) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_dao_share`|`uint256`|share of the DAO rewards.|


### circulatingSupply

Calculates circulating supply as total token supply - locked supply


```solidity
function circulatingSupply() external view returns (uint256);
```

### weeklyEmission

Calculates tail end (infinity) emissions, starts set as 2% of total supply.


```solidity
function weeklyEmission() external view returns (uint256);
```

### calculateGrowth

Calculate inflation and adjust burn balances accordingly.


```solidity
function calculateGrowth(uint256 _minted) external view returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_minted`|`uint256`|Amount of minted bhermes|


### updatePeriod

Updates critical information surrounding emissions, such as
the weekly emissions, and mints the tokens for the previous week rewards.
Update period can only be called once per cycle (1 week)


```solidity
function updatePeriod() external returns (uint256);
```

### getRewards

Distributes the weekly emissions to flywheelGaugeRewards contract.


```solidity
function getRewards() external returns (uint256 totalQueuedForCycle);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`totalQueuedForCycle`|`uint256`|represents the amounts of rewards to be distributed.|


## Events
### Mint

```solidity
event Mint(address indexed sender, uint256 weekly, uint256 circulatingSupply, uint256 growth, uint256 dao_share);
```

## Errors
### NotFlywheelGaugeRewards
*Throws when the caller of `getRewards()` is not the flywheelGaugeRewards contract.*


```solidity
error NotFlywheelGaugeRewards();
```

### NotInitializer
*Throws when the caller of `intialize()` is not the initializer contract.*


```solidity
error NotInitializer();
```

### TailEmissionTooHigh
*Throws when new tail emission is higher than 10%.*


```solidity
error TailEmissionTooHigh();
```

### DaoShareTooHigh
*Throws when the new dao share is higher than 30%.*


```solidity
error DaoShareTooHigh();
```

