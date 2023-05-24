# VirtualAccount
[Git Source](https://github.com/Maia-DAO/test-env-V2/blob/84b5f9e8695c91ddb02f27bb3dfb1c652f55ced4/ulysses-omnichain/VirtualAccount.sol)

**Inherits:**
[IVirtualAccount](/ulysses-omnichain/interfaces/IVirtualAccount.sol/interface.IVirtualAccount.md)


## State Variables
### userAddress
Returns the address of the user that owns the VirtualAccount.


```solidity
address public immutable userAddress;
```


### localPortAddress
Returns the address of the local port.


```solidity
address public localPortAddress;
```


## Functions
### constructor


```solidity
constructor(address _userAddress, address _localPortAddress);
```

### withdrawERC20

Withdraws ERC20 tokens from the VirtualAccount.


```solidity
function withdrawERC20(address _token, uint256 _amount) external requiresApprovedCaller;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_token`|`address`|The address of the ERC20 token to withdraw.|
|`_amount`|`uint256`|The amount of tokens to withdraw.|


### withdrawERC721

Withdraws ERC721 tokens from the VirtualAccount.


```solidity
function withdrawERC721(address _token, uint256 _tokenId) external requiresApprovedCaller;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_token`|`address`|The address of the ERC721 token to withdraw.|
|`_tokenId`|`uint256`|The id of the token to withdraw.|


### call




```solidity
function call(Call[] calldata calls)
    external
    requiresApprovedCaller
    returns (uint256 blockNumber, bytes[] memory returnData);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`calls`|`Call[]`||


### onERC721Received


```solidity
function onERC721Received(address, address, uint256, bytes calldata) external pure override returns (bytes4);
```

### requiresApprovedCaller

Modifier that verifies msg sender is the RootInterface Contract from Root Chain.


```solidity
modifier requiresApprovedCaller();
```

