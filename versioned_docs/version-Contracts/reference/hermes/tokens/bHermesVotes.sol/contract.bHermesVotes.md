# bHermesVotes

**Inherits:**
[ERC20MultiVotes](/erc-20/ERC20MultiVotes.sol/abstract.ERC20MultiVotes.md), [IbHermesUnderlying](/hermes/interfaces/IbHermesUnderlying.sol/interface.IbHermesUnderlying.md)

**Author:**
Maia DAO (https://github.com/Maia-DAO)

Represents the underlying governance power of a bHermes token.


## State Variables
### bHermes



```solidity
address public immutable bHermes;
```


## Functions
### constructor


```solidity
constructor(address _owner) ERC20("bHermes Votes", "bHERMES-V", 18);
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


### burn

Burns bHermes gauge tokens


```solidity
function burn(address from, uint256 amount) external onlybHermes;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`from`|`address`|account to burn tokens from|
|`amount`|`uint256`|amount of tokens to burn|


### onlybHermes


```solidity
modifier onlybHermes();
```

