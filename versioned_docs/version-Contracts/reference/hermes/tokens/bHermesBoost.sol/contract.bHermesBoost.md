# bHermesBoost

**Inherits:**
[ERC20Boost](/erc-20/ERC20Boost.sol/abstract.ERC20Boost.md), [IbHermesUnderlying](/hermes/interfaces/IbHermesUnderlying.sol/interface.IbHermesUnderlying.md)

**Author:**
Maia DAO (https://github.com/Maia-DAO)

An ERC20 with an embedded attachment mechanism to
keep track of boost allocations to gauges.


## State Variables
### bHermes



```solidity
address public immutable bHermes;
```


## Functions
### constructor


```solidity
constructor(address _owner) ERC20("bHermes Boost", "bHERMES-B", 18);
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

