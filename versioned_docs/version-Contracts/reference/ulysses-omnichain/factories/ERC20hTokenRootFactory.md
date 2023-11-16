# ERC20hTokenRootFactory
[Git Source](https://github.com/Maia-DAO/2023-09-maia-remediations/blob/main/src/factories/ERC20hTokenRootFactory.sol)

**Inherits:**
Ownable, [IERC20hTokenRootFactory](/src/ulysses-omnichain/interfaces/IERC20hTokenRootFactory.md)

**Author:**
MaiaDAO


## State Variables
### rootPortAddress
Root Port Address.


```solidity
address public immutable rootPortAddress;
```


### coreRootRouterAddress
Root Core Router Address, in charge of the addition of new tokens to the system.


```solidity
address public coreRootRouterAddress;
```


### hTokens
Array of all hTokens created.


```solidity
ERC20hToken[] public hTokens;
```


## Functions
### constructor

Constructor for ERC20 hToken Root Factory Contract


```solidity
constructor(address _rootPortAddress);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_rootPortAddress`|`address`|Root Port Address.|


### initialize

Function to initialize the contract.


```solidity
function initialize(address _coreRouter) external onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_coreRouter`|`address`|Address of the Root Chain's Core Router.|


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

Function to create a new hToken.


```solidity
function createToken(string memory _name, string memory _symbol, uint8 _decimals)
    external
    requiresCoreRouterOrPort
    returns (ERC20hToken newToken);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_name`|`string`|Name of the Token.|
|`_symbol`|`string`|Symbol of the Token.|
|`_decimals`|`uint8`|Decimals of the Token.|


### requiresCoreRouterOrPort

Modifier that verifies msg sender is the RootInterface Contract from Root Chain.


```solidity
modifier requiresCoreRouterOrPort();
```

