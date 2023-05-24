# IERC20hTokenRoot
[Git Source](https://github.com/Maia-DAO/test-env-V2/blob/84b5f9e8695c91ddb02f27bb3dfb1c652f55ced4/ulysses-omnichain/interfaces/IERC20hTokenRoot.sol)

**Author:**
MaiaDAO.

ERC20 hToken contract deployed in the Root Chain of the Ulysses Omnichain Liquidity System.
1:1 ERC20 representation of a token deposited in a Branch Chain's Port.

*This asset is minted / burned in reflection of it's origin Branch Port balance. Should not
be burned being stored in Root Port instead if Branch hToken mint is requested.*


## Functions
### localChainId

View Function returns Local Network Identifier.


```solidity
function localChainId() external view returns (uint256);
```

### rootPortAddress

View Function returns Root Port Address.


```solidity
function rootPortAddress() external view returns (address);
```

### localBranchPortAddress

View Function returns Local Branch Port Address.


```solidity
function localBranchPortAddress() external view returns (address);
```

### factoryAddress

View Function returns the address of the Factory that deployed this token.


```solidity
function factoryAddress() external view returns (address);
```

### getTokenBalance

View Function returns Token's balance in a given Branch Chain's Port.


```solidity
function getTokenBalance(uint256 chainId) external view returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`chainId`|`uint256`|Identifier of the Branch Chain.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|Token's balance in the given Branch Chain's Port.|


### mint

Function to mint hTokens in the Root Chain to match Branch Chain deposit.


```solidity
function mint(address to, uint256 amount, uint256 chainId) external returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`to`|`address`|Address of the user that will receive the hTokens.|
|`amount`|`uint256`|Amount of hTokens to be minted.|
|`chainId`|`uint256`|Identifier of the Branch Chain.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|Boolean indicating if the mint was successful.|


### burn

Function to burn hTokens in the Root Chain to match Branch Chain withdrawal.


```solidity
function burn(address from, uint256 value, uint256 chainId) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`from`|`address`|Address of the user that will burn the hTokens.|
|`value`|`uint256`|Amount of hTokens to be burned.|
|`chainId`|`uint256`|Identifier of the Branch Chain.|


## Errors
### UnrecognizedPort

```solidity
error UnrecognizedPort();
```

