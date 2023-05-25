# vMaia

**Inherits:**
[ERC4626PartnerManager](/maia/tokens/ERC4626PartnerManager.sol/abstract.ERC4626PartnerManager.md)

**Author:**
Maia DAO (https://github.com/Maia-DAO)

vMaia is an ERC-4626 compliant MAIA token which:
distributes bHermes utility tokens (Weight, Governance) and Maia Governance
in exchange for staking MAIA.
NOTE: Withdraw is only allowed once per month,
during the 1st Tuesday (UTC+0) of the month.


## State Variables
### currentMonth

```solidity
uint256 private currentMonth;
```


### unstakePeriodEnd

```solidity
uint256 private unstakePeriodEnd;
```


## Functions
### constructor

Initializes the vMaia token.


```solidity
constructor(
    PartnerManagerFactory _factory,
    uint256 _bHermesRate,
    ERC20 _partnerAsset,
    string memory _name,
    string memory _symbol,
    address _bhermes,
    address _partnerVault,
    address _owner
) ERC4626PartnerManager(_factory, _bHermesRate, _partnerAsset, _name, _symbol, _bhermes, _partnerVault, _owner);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_factory`|`PartnerManagerFactory`|The factory that created this contract.|
|`_bHermesRate`|`uint256`|The rate at which bHermes can be claimed.|
|`_partnerAsset`|`ERC20`|The asset that will be used to deposit to get vMaia.|
|`_name`|`string`|The name of the token.|
|`_symbol`|`string`|The symbol of the token.|
|`_bhermes`|`address`|The address of the bHermes token.|
|`_partnerVault`|`address`|The address of the partner vault.|
|`_owner`|`address`|The owner of the token.|


### checkWeight

*Checks available weight allows for the call.*


```solidity
modifier checkWeight(uint256 amount) virtual override;
```

### checkGovernance

*Checks available governance allows for the call.*


```solidity
modifier checkGovernance(uint256 amount) virtual override;
```

### checkPartnerGovernance

*Checks available partner governance allows for the call.*


```solidity
modifier checkPartnerGovernance(uint256 amount) virtual override;
```

### claimBoost

*Boost can't be claimed; does not fail. It is all used by the partner vault.*


```solidity
function claimBoost(uint256 amount) public override;
```

### beforeWithdraw

Function that performs the necessary verifications before a user can withdraw from their vMaia position.
Checks if we're inside the unstaked period, if so then the user is able to withdraw.
If we're not in the unstake period, then there will be checks to determine if this is the beginning of the month.


```solidity
function beforeWithdraw(uint256, uint256) internal override;
```

## Errors
### UnstakePeriodNotLive
*Check if unstake period has not ended yet, continue if it is the case.*

*Error thrown when trying to withdraw and it is not the first Tuesday of the month.*


```solidity
error UnstakePeriodNotLive();
```

