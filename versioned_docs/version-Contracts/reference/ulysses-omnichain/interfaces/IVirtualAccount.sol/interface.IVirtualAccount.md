# IVirtualAccount
[Git Source](https://github.com/Maia-DAO/test-env-V2/blob/84b5f9e8695c91ddb02f27bb3dfb1c652f55ced4/ulysses-omnichain/interfaces/IVirtualAccount.sol)

**Inherits:**
IERC721Receiver

A Virtual Account allows users to manage assets and perform interactions remotely while allowing dApps to keep encapsulated user balance for accounting purposes.

*This contract is based off Maker's `Multicall2` contract, executes a set of `Call` objects if any of the perfomed call is invalid the whole batch should revert.*


## Functions
### userAddress

Returns the address of the user that owns the VirtualAccount.


```solidity
function userAddress() external view returns (address);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|The address of the user that owns the VirtualAccount.|


### localPortAddress

Returns the address of the local port.


```solidity
function localPortAddress() external view returns (address);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|The address of the local port.|


### withdrawERC20

Withdraws ERC20 tokens from the VirtualAccount.


```solidity
function withdrawERC20(address _token, uint256 _amount) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_token`|`address`|The address of the ERC20 token to withdraw.|
|`_amount`|`uint256`|The amount of tokens to withdraw.|


### withdrawERC721

Withdraws ERC721 tokens from the VirtualAccount.


```solidity
function withdrawERC721(address _token, uint256 _tokenId) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_token`|`address`|The address of the ERC721 token to withdraw.|
|`_tokenId`|`uint256`|The id of the token to withdraw.|


### call




```solidity
function call(Call[] calldata callInput) external returns (uint256 blockNumber, bytes[] memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`callInput`|`Call[]`|The call to make.|


## Errors
### CallFailed

```solidity
error CallFailed();
```

### UnauthorizedCaller

```solidity
error UnauthorizedCaller();
```

