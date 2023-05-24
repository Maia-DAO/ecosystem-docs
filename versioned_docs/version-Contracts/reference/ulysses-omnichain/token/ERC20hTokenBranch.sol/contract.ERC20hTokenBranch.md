# ERC20hTokenBranch
[Git Source](https://github.com/Maia-DAO/test-env-V2/blob/84b5f9e8695c91ddb02f27bb3dfb1c652f55ced4/ulysses-omnichain/token/ERC20hTokenBranch.sol)

**Inherits:**
ERC20, Ownable, [IERC20hTokenBranch](/ulysses-omnichain/interfaces/IERC20hTokenBranch.sol/interface.IERC20hTokenBranch.md)


## Functions
### constructor


```solidity
constructor(string memory _name, string memory _symbol, address _owner)
    ERC20(string(string.concat("Hermes - ", _name)), string(string.concat("h-", _symbol)), 18);
```

### mint

Function to mint tokens in the Branch Chain.


```solidity
function mint(address account, uint256 amount) external override onlyOwner returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`account`|`address`|Address of the account to receive the tokens.|
|`amount`|`uint256`|Amount of tokens to be minted.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|Boolean indicating if the operation was successful.|


### burn

Function to burn tokens in the Branch Chain.


```solidity
function burn(uint256 value) public override onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`value`|`uint256`|Amount of tokens to be burned.|


