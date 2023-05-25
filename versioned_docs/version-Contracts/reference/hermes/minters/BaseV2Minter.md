---
id: BaseV2Minter
title: BaseV2Minter
---

**Inherits:**
Ownable, [IBaseV2Minter](/hermes/interfaces/IBaseV2Minter.sol/interface.IBaseV2Minter.md)


## State Variables
### week
*allows minting once per week (reset every Thursday 00:00 UTC)*


```solidity
uint256 internal constant week = 86400 * 7;
```


### base
*2% per week target emission*


```solidity
uint256 internal constant base = 1000;
```


### max_tail_emission

```solidity
uint256 internal constant max_tail_emission = 100;
```


### max_dao_share

```solidity
uint256 internal constant max_dao_share = 300;
```


### underlying
Underlying token that the contract has minting powers over.


```solidity
address public immutable override underlying;
```


### vault
ERC4626 vault that receives emissions via rebases, which later will be distributed throughout the depositors.


```solidity
ERC4626 public immutable override vault;
```


### flywheelGaugeRewards
Holds the rewards for the current cycle and distributes them to the gauges.


```solidity
FlywheelGaugeRewards public override flywheelGaugeRewards;
```


### dao
Represents the address of the DAO.


```solidity
address public override dao;
```


### daoShare
Represents the percentage of the emissions that will be sent to the DAO.


```solidity
uint256 public override daoShare = 100;
```


### tailEmission

```solidity
uint256 public override tailEmission = 20;
```


### weekly
Represents the weekly emissions.


```solidity
uint256 public override weekly;
```


### activePeriod
Represents the timestamp of the beginning of the new cycle.


```solidity
uint256 public override activePeriod;
```


### initializer

```solidity
address internal initializer;
```


## Functions
### constructor


```solidity
constructor(address _vault, address _dao, address _owner);
```

### fallback


```solidity
fallback() external;
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


### setDao

Sets the address of the DAO.


```solidity
function setDao(address _dao) external onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_dao`|`address`|address of the DAO.|


### setDaoShare

Sets the share of the DAO rewards.

*DAO can be set to address(0) to disable DAO rewards.*


```solidity
function setDaoShare(uint256 _daoShare) external onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_daoShare`|`uint256`||


### setTailEmission

Changes the current tail emissions.


```solidity
function setTailEmission(uint256 _tail_emission) external onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_tail_emission`|`uint256`|amount to set as the tail emission|


### circulatingSupply

Calculates circulating supply as total token supply - locked supply


```solidity
function circulatingSupply() public view returns (uint256);
```

### weeklyEmission

Calculates tail end (infinity) emissions, starts set as 2% of total supply.


```solidity
function weeklyEmission() public view returns (uint256);
```

### calculateGrowth

Calculate inflation and adjust burn balances accordingly.


```solidity
function calculateGrowth(uint256 _minted) public view returns (uint256);
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
function updatePeriod() public returns (uint256);
```

### getRewards

Distributes the weekly emissions to flywheelGaugeRewards contract.

*share of newWeeklyEmission emissions sent to DAO.*

*queue rewards for the cycle, anyone can call if fails
queueRewardsForCycle will call this function but won't enter
here because activePeriod was updated*


```solidity
function getRewards() external returns (uint256 totalQueuedForCycle);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`totalQueuedForCycle`|`uint256`|represents the amounts of rewards to be distributed.|


