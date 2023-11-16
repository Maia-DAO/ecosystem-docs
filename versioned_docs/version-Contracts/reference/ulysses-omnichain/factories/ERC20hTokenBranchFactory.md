# ERC20hTokenBranchFactory
[Git Source](https://github.com/Maia-DAO/2023-09-maia-remediations/blob/main/src/factories/ERC20hTokenBranchFactory.sol)

**Inherits:**
Ownable, [IERC20hTokenBranchFactory](/src/ulysses-omnichain/interfaces/IERC20hTokenBranchFactory.md)

**Author:**
MaiaDAO


## State Variables
### localPortAddress
Local Port Address


```solidity
address public immutable localPortAddress;
```


### localCoreRouterAddress
Local Branch Core Router Address responsible for the addition of new tokens to the system.


```solidity
address public localCoreRouterAddress;
```


### hTokens
Local hTokens deployed in the current chain.


```solidity
ERC20hToken[] public hTokens;
```


### chainName
Name of the chain for token name prefix.


```solidity
string public chainName;
```


### chainSymbol
Symbol of the chain for token symbol prefix.


```solidity
string public chainSymbol;
```


## Functions
### constructor

Constructor for ERC20 hToken Branch Factory Contract


```solidity
constructor(address _localPortAddress, string memory _chainName, string memory _chainSymbol);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_localPortAddress`|`address`|Local Chain Port Address.|
|`_chainName`|`string`|Name of the chain for token name prefix.|
|`_chainSymbol`|`string`|Symbol of the chain for token symbol prefix.|


### initialize

Function to initialize the contract.


```solidity
function initialize(address _wrappedNativeTokenAddress, address _coreRouter) external onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_wrappedNativeTokenAddress`|`address`|Address of the Local Chain's wrapped native token.|
|`_coreRouter`|`address`|Address of the Local Chain's Core Router.|


### getHTokens

Function to get the array of hTokens.


```solidity
function getHTokens() external view returns (ERC20hToken[] memory);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`ERC20hToken[]`|Array of hTokens.|


### createToken

Function to create a new Branch hToken.


```solidity
function createToken(string memory _name, string memory _symbol, uint8 _decimals, bool _addPrefix)
    external
    requiresCoreRouter
    returns (ERC20hToken newToken);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_name`|`string`|Name of the Token.|
|`_symbol`|`string`|Symbol of the Token.|
|`_decimals`|`uint8`|Decimals of the Token.|
|`_addPrefix`|`bool`|Boolean to add or not the chain prefix to the token name and symbol.|


### requiresCoreRouter

Modifier that verifies msg sender is the RootInterface Contract from Root Chain.


```solidity
modifier requiresCoreRouter();
```

