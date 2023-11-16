# RootBridgeAgentExecutor
[Git Source](https://github.com/Maia-DAO/2023-09-maia-remediations/blob/main/src/RootBridgeAgentExecutor.sol)

**Inherits:**
Ownable, [BridgeAgentConstants](/src/ulysses-omnichain/interfaces/BridgeAgentConstants.md)

**Author:**
MaiaDAO

This contract is used for requesting token settlement clearance and
executing transaction requests from the branch chains.

*Execution is "sandboxed" meaning upon tx failure both token settlements
and interactions with external contracts should be reverted and caught.*


## State Variables
### rootRouterAddress
Router that is responsible for executing the cross-chain requests forwarded by this contract.


```solidity
IRouter public immutable rootRouterAddress;
```


## Functions
### constructor

Constructor for Root Bridge Agent Executor.


```solidity
constructor(address _rootRouterAddress);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_rootRouterAddress`|`address`|router that will execute the cross-chain requests forwarded by this contract.|


### executeNoDeposit

Execute a remote request from a remote chain

*DEPOSIT FLAG: 1 (Call without Deposit)*


```solidity
function executeNoDeposit(bytes calldata _payload, uint16 _srcChainId) external payable onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_payload`|`bytes`|The encoded request data payload|
|`_srcChainId`|`uint16`|The chain id of the chain that sent the request|


### executeWithDeposit

Execute a remote request from a remote chain

*DEPOSIT FLAG: 2 (Call with Deposit)*


```solidity
function executeWithDeposit(bytes calldata _payload, uint16 _srcChainId) external payable onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_payload`|`bytes`|The encoded request data payload|
|`_srcChainId`|`uint16`|The chain id of the chain that sent the request|


### executeWithDepositMultiple

Execute a remote request from a remote chain

*DEPOSIT FLAG: 3 (Call with multiple asset Deposit)*


```solidity
function executeWithDepositMultiple(bytes calldata _payload, uint16 _srcChainId) external payable onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_payload`|`bytes`|The encoded request data payload|
|`_srcChainId`|`uint16`|The chain id of the chain that sent the request|


### executeSignedNoDeposit

Execute a remote request from a remote chain

*DEPOSIT FLAG: 4 (Call without Deposit + msg.sender)*


```solidity
function executeSignedNoDeposit(address _account, bytes calldata _payload, uint16 _srcChainId)
    external
    payable
    onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_account`|`address`|The account that will execute the request|
|`_payload`|`bytes`|The encoded request data payload|
|`_srcChainId`|`uint16`|The chain id of the chain that sent the request|


### executeSignedWithDeposit

Execute a remote request from a remote chain with single asset deposit

*DEPOSIT FLAG: 5 (Call with Deposit + msg.sender)*


```solidity
function executeSignedWithDeposit(address _account, bytes calldata _payload, uint16 _srcChainId)
    external
    payable
    onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_account`|`address`|The account that will execute the request|
|`_payload`|`bytes`|The encoded request data payload|
|`_srcChainId`|`uint16`|The chain id of the chain that sent the request|


### executeSignedWithDepositMultiple

Execute a remote request from a remote chain with multiple asset deposit

*DEPOSIT FLAG: 6 (Call with multiple asset Deposit + msg.sender)*


```solidity
function executeSignedWithDepositMultiple(address _account, bytes calldata _payload, uint16 _srcChainId)
    external
    payable
    onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_account`|`address`|The account that will execute the request|
|`_payload`|`bytes`|The encoded request data payload|
|`_srcChainId`|`uint16`|The chain id of the chain that sent the request|


### _bridgeIn

Internal function to move assets from branch chain to root omnichain environment.


```solidity
function _bridgeIn(address _recipient, DepositParams memory _dParams, uint16 _srcChainId) internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_recipient`|`address`||
|`_dParams`|`DepositParams`|Cross-Chain Deposit of Multiple Tokens Params.|
|`_srcChainId`|`uint16`|chain to bridge from.|


### _bridgeInMultiple

Internal function to move assets from branch chain to root omnichain environment.

*Since the input data payload is encodePacked we need to parse it:
1. First byte is the number of assets to be bridged in. Equals length of all arrays.
2. Next 4 bytes are the nonce of the deposit.
3. Last 32 bytes after the token related information are the chain to bridge to.
4. Token related information starts at index PARAMS_TKN_START is encoded as follows:
1. N * 32 bytes for the hToken address.
2. N * 32 bytes for the underlying token address.
3. N * 32 bytes for the amount of hTokens to be bridged in.
4. N * 32 bytes for the amount of underlying tokens to be bridged in.
5. Each of the 4 token related arrays are of length N and start at the following indexes:
1. PARAMS_TKN_START [hToken address has no offset from token information start].
2. PARAMS_TKN_START + (PARAMS_ADDRESS_SIZE * N)
3. PARAMS_TKN_START + (PARAMS_AMT_OFFSET * N)
4. PARAMS_TKN_START + (PARAMS_DEPOSIT_OFFSET * N)*


```solidity
function _bridgeInMultiple(address _recipient, bytes calldata _dParams, uint16 _srcChainId)
    internal
    returns (DepositMultipleParams memory dParams);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_recipient`|`address`||
|`_dParams`|`bytes`|Cross-Chain Deposit of Multiple Tokens Params.|
|`_srcChainId`|`uint16`|chain to bridge from.|


