# VirtualAccount
[Git Source](https://github.com/Maia-DAO/2023-09-maia-remediations/blob/main/src/VirtualAccount.sol)

**Inherits:**
[IVirtualAccount](/src/ulysses-omnichain/interfaces/IVirtualAccount.md), ERC1155Receiver


## State Variables
### userAddress
Returns the address of the user that owns the VirtualAccount.


```solidity
address public immutable override userAddress;
```


### localPortAddress
Returns the address of the local port.


```solidity
address public immutable override localPortAddress;
```


## Functions
### constructor

Constructor for Virtual Account.


```solidity
constructor(address _userAddress);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_userAddress`|`address`|Address of the user/owner.|


### receive


```solidity
receive() external payable;
```

### withdrawNative

Withdraws native tokens from the VirtualAccount.


```solidity
function withdrawNative(uint256 _amount) external override requiresApprovedCaller;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_amount`|`uint256`|The amount of tokens to withdraw.|


### withdrawERC20

Withdraws ERC20 tokens from the VirtualAccount.


```solidity
function withdrawERC20(address _token, uint256 _amount) external override requiresApprovedCaller;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_token`|`address`|The address of the ERC20 token to withdraw.|
|`_amount`|`uint256`|The amount of tokens to withdraw.|


### withdrawERC721

Withdraws ERC721 tokens from the VirtualAccount.


```solidity
function withdrawERC721(address _token, uint256 _tokenId) external override requiresApprovedCaller;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_token`|`address`|The address of the ERC721 token to withdraw.|
|`_tokenId`|`uint256`|The id of the token to withdraw.|


### call

Aggregate calls ensuring each call is successful. Inspired by `Multicall2` contract.


```solidity
function call(Call[] calldata calls) external override requiresApprovedCaller returns (bytes[] memory returnData);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`calls`|`Call[]`||

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`returnData`|`bytes[]`|The return data of the call.|


### payableCall

Aggregate calls with a msg value ensuring each call is successful. Inspired by `Multicall3` contract.

*Reverts if msg.value is less than the sum of the call values.*


```solidity
function payableCall(PayableCall[] calldata calls)
    public
    payable
    override
    requiresApprovedCaller
    returns (bytes[] memory returnData);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`calls`|`PayableCall[]`|The calls to make.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`returnData`|`bytes[]`|The return data of the calls.|


### onERC721Received


```solidity
function onERC721Received(address, address, uint256, bytes calldata) external pure override returns (bytes4);
```

### onERC1155Received


```solidity
function onERC1155Received(address, address, uint256, uint256, bytes calldata)
    external
    pure
    override
    returns (bytes4);
```

### onERC1155BatchReceived


```solidity
function onERC1155BatchReceived(address, address, uint256[] calldata, uint256[] calldata, bytes calldata)
    external
    pure
    override
    returns (bytes4);
```

### isContract


```solidity
function isContract(address addr) internal view returns (bool);
```

### requiresApprovedCaller

Modifier that verifies msg sender is the approved to use the virtual account. Either the owner or an approved router.


```solidity
modifier requiresApprovedCaller();
```

