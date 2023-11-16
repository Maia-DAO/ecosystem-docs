# IVirtualAccount
[Git Source](https://github.com/Maia-DAO/2023-09-maia-remediations/blob/main/src/interfaces/IVirtualAccount.sol)

**Inherits:**
IERC721Receiver

**Author:**
MaiaDAO

A Virtual Account allows users to manage assets and perform interactions remotely while
allowing dApps to keep encapsulated user balance for accounting purposes.

*This contract is based off `Multicall2` and `Multicall3` contract, executes a set of `Call` or `PayableCall`
objects if any of the performed calls is invalid the whole batch should revert.*


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


### withdrawNative

Withdraws native tokens from the VirtualAccount.


```solidity
function withdrawNative(uint256 _amount) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_amount`|`uint256`|The amount of tokens to withdraw.|


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

Aggregate calls ensuring each call is successful. Inspired by `Multicall2` contract.


```solidity
function call(Call[] calldata callInput) external returns (bytes[] memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`callInput`|`Call[]`|The call to make.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes[]`|The return data of the call.|


### payableCall

Aggregate calls with a msg value ensuring each call is successful. Inspired by `Multicall3` contract.

*Reverts if msg.value is less than the sum of the call values.*


```solidity
function payableCall(PayableCall[] calldata calls) external payable returns (bytes[] memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`calls`|`PayableCall[]`|The calls to make.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes[]`|The return data of the calls.|


## Errors
### CallFailed

```solidity
error CallFailed();
```

### UnauthorizedCaller

```solidity
error UnauthorizedCaller();
```

