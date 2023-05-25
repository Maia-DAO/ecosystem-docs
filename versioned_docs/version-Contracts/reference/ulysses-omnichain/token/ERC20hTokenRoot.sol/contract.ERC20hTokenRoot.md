# ERC20hTokenRoot

**Inherits:**
ERC20, [IERC20hTokenRoot](/ulysses-omnichain/interfaces/IERC20hTokenRoot.sol/interface.IERC20hTokenRoot.md)


## State Variables
### localChainId
View Function returns Local Network Identifier.


```solidity
uint256 public localChainId;
```


### rootPortAddress
View Function returns Root Port Address.


```solidity
address public rootPortAddress;
```


### localBranchPortAddress
View Function returns Local Branch Port Address.


```solidity
address public localBranchPortAddress;
```


### factoryAddress
View Function returns the address of the Factory that deployed this token.


```solidity
address public factoryAddress;
```


### getTokenBalance
View Function returns Token's balance in a given Branch Chain's Port.


```solidity
mapping(uint256 => uint256) public getTokenBalance;
```


## Functions
### constructor

Constructor for the ERC20hTokenRoot Contract.


```solidity
constructor(
    uint256 _localChainId,
    address _factoryAddress,
    address _rootPortAddress,
    string memory _name,
    string memory _symbol
) ERC20(string(string.concat("Hermes ", _name)), string(string.concat("h-", _symbol)), 18);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_localChainId`|`uint256`|Local Network Identifier.|
|`_factoryAddress`|`address`|Address of the Factory Contract.|
|`_rootPortAddress`|`address`|Address of the Root Port Contract.|
|`_name`|`string`|Name of the Token.|
|`_symbol`|`string`|Symbol of the Token.|


### requiresPort

*Modifier that verifies msg sender is the RootInterface Contract from Root Chain.*


```solidity
modifier requiresPort();
```

### mint

Mints new tokens and updates the total supply for the given chain.


```solidity
function mint(address to, uint256 amount, uint256 chainId) external requiresPort returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`to`|`address`|Address to mint tokens to.|
|`amount`|`uint256`|Amount of tokens to mint.|
|`chainId`|`uint256`|Chain Id of the chain to mint tokens to.|


### burn

Burns new tokens and updates the total supply for the given chain.


```solidity
function burn(address from, uint256 value, uint256 chainId) external requiresPort;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`from`|`address`|Address to burn tokens from.|
|`value`|`uint256`|Amount of tokens to burn.|
|`chainId`|`uint256`|Chain Id of the chain to burn tokens to.|


