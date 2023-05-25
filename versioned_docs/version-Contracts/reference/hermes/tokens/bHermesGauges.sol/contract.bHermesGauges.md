# bHermesGauges

**Inherits:**
[ERC20Gauges](/erc-20/ERC20Gauges.sol/abstract.ERC20Gauges.md), [IbHermesUnderlying](/hermes/interfaces/IbHermesUnderlying.sol/interface.IbHermesUnderlying.md)

**Author:**
Maia DAO (https://github.com/Maia-DAO)

Represents the underlying emission direction power of a bHermes token.
bHermesGauges is an ERC-4626 compliant bHermes token which:
votes on bribes rewards allocation for Hermes gauges in a
manipulation-resistant manner.
The bHermes owner/authority ONLY control the maximum number
and approved overrides of gauges and delegates, as well as the live gauge list.


## State Variables
### bHermes



```solidity
address public immutable bHermes;
```


## Functions
### constructor


```solidity
constructor(address _owner, uint32 _rewardsCycleLength, uint32 _incrementFreezeWindow)
    ERC20Gauges(_rewardsCycleLength, _incrementFreezeWindow)
    ERC20("bHermes Gauges", "bHERMES-G", 18);
```

### mint

Mints new bHermes underlying tokens to a specific account.


```solidity
function mint(address to, uint256 amount) external onlybHermes;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`to`|`address`|account to transfer bHermes underlying tokens to|
|`amount`|`uint256`|amount of tokens to mint.|


### onlybHermes


```solidity
modifier onlybHermes();
```

