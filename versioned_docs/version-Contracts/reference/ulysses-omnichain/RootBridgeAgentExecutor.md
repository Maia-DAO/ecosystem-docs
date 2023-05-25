---
id: RootBridgeAgentExecutor
title: RootBridgeAgentExecutor
---

**Inherits:**
Ownable

This contract is used for requesting token settlement clearance and
executing transaction requests from the branch chains.

*Execution is "sandboxed" meaning upon tx failure both token settlements
and interactions with external contracts should be reverted and caught.*


## State Variables
### PARAMS_START
Remote Execution Consts


```solidity
uint8 internal constant PARAMS_START = 1;
```


### PARAMS_START_SIGNED

```solidity
uint8 internal constant PARAMS_START_SIGNED = 21;
```


### PARAMS_END_OFFSET

```solidity
uint8 internal constant PARAMS_END_OFFSET = 9;
```


### PARAMS_END_SIGNED_OFFSET

```solidity
uint8 internal constant PARAMS_END_SIGNED_OFFSET = 29;
```


### PARAMS_ENTRY_SIZE

```solidity
uint8 internal constant PARAMS_ENTRY_SIZE = 32;
```


### PARAMS_ADDRESS_SIZE

```solidity
uint8 internal constant PARAMS_ADDRESS_SIZE = 20;
```


### PARAMS_TKN_SET_SIZE

```solidity
uint8 internal constant PARAMS_TKN_SET_SIZE = 104;
```


### PARAMS_TKN_SET_SIZE_MULTIPLE

```solidity
uint8 internal constant PARAMS_TKN_SET_SIZE_MULTIPLE = 128;
```


### PARAMS_GAS_IN

```solidity
uint8 internal constant PARAMS_GAS_IN = 32;
```


### PARAMS_GAS_OUT

```solidity
uint8 internal constant PARAMS_GAS_OUT = 16;
```


### PARAMS_TKN_START
BridgeIn Consts


```solidity
uint8 internal constant PARAMS_TKN_START = 5;
```


### PARAMS_AMT_OFFSET

```solidity
uint8 internal constant PARAMS_AMT_OFFSET = 64;
```


### PARAMS_DEPOSIT_OFFSET

```solidity
uint8 internal constant PARAMS_DEPOSIT_OFFSET = 96;
```


## Functions
### constructor


```solidity
constructor(address owner);
```

### executeSystemRequest

Execute a system request from a remote chain

*DEPOSIT FLAG: 0 (System request / response)*


```solidity
function executeSystemRequest(address _router, bytes calldata _data, uint24 _fromChainId)
    external
    onlyOwner
    returns (bool success, bytes memory result);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_router`|`address`|The router contract address|
|`_data`|`bytes`|The encoded request data|
|`_fromChainId`|`uint24`|The chain id of the chain that sent the request|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`success`|`bool`|Whether the request was successful|
|`result`|`bytes`|The result of the request|


### executeNoDeposit

Execute a remote request from a remote chain

*DEPOSIT FLAG: 1 (Call without Deposit)*


```solidity
function executeNoDeposit(address _router, bytes calldata _data, uint24 _fromChainId)
    external
    onlyOwner
    returns (bool success, bytes memory result);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_router`|`address`|The router contract address|
|`_data`|`bytes`|The encoded request data|
|`_fromChainId`|`uint24`|The chain id of the chain that sent the request|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`success`|`bool`|Whether the request was successful|
|`result`|`bytes`|The result of the request|


### executeWithDeposit

Execute a remote request from a remote chain

*DEPOSIT FLAG: 2 (Call with Deposit)*


```solidity
function executeWithDeposit(address _router, bytes calldata _data, uint24 _fromChainId)
    external
    onlyOwner
    returns (bool success, bytes memory result);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_router`|`address`|The router contract address|
|`_data`|`bytes`|The encoded request data|
|`_fromChainId`|`uint24`|The chain id of the chain that sent the request|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`success`|`bool`|Whether the request was successful|
|`result`|`bytes`|The result of the request|


### executeWithDepositMultiple

Execute a remote request from a remote chain

*DEPOSIT FLAG: 3 (Call with multiple asset Deposit)*


```solidity
function executeWithDepositMultiple(address _router, bytes calldata _data, uint24 _fromChainId)
    external
    onlyOwner
    returns (bool success, bytes memory result);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_router`|`address`|The router contract address|
|`_data`|`bytes`|The encoded request data|
|`_fromChainId`|`uint24`|The chain id of the chain that sent the request|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`success`|`bool`|Whether the request was successful|
|`result`|`bytes`|The result of the request|


### executeSignedNoDeposit

Execute a remote request from a remote chain

*DEPOSIT FLAG: 4 (Call without Deposit + msg.sender)*


```solidity
function executeSignedNoDeposit(address _account, address _router, bytes calldata _data, uint24 _fromChainId)
    external
    onlyOwner
    returns (bool success, bytes memory result);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_account`|`address`|The account that will execute the request|
|`_router`|`address`|The router contract address|
|`_data`|`bytes`|The encoded request data|
|`_fromChainId`|`uint24`|The chain id of the chain that sent the request|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`success`|`bool`|Whether the request was successful|
|`result`|`bytes`|The result of the request|


### executeSignedWithDeposit

Execute a remote request from a remote chain with single asset deposit

*DEPOSIT FLAG: 5 (Call with Deposit + msg.sender)*


```solidity
function executeSignedWithDeposit(address _account, address _router, bytes calldata _data, uint24 _fromChainId)
    external
    onlyOwner
    returns (bool success, bytes memory result);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_account`|`address`|The account that will execute the request|
|`_router`|`address`|The router contract address|
|`_data`|`bytes`|The encoded request data|
|`_fromChainId`|`uint24`|The chain id of the chain that sent the request|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`success`|`bool`|Whether the request was successful|
|`result`|`bytes`|The result of the request|


### executeSignedWithDepositMultiple

Execute a remote request from a remote chain with multiple asset deposit

*DEPOSIT FLAG: 6 (Call with multiple asset Deposit + msg.sender)*


```solidity
function executeSignedWithDepositMultiple(address _account, address _router, bytes calldata _data, uint24 _fromChainId)
    external
    onlyOwner
    returns (bool success, bytes memory result);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_account`|`address`|The account that will execute the request|
|`_router`|`address`|The router contract address|
|`_data`|`bytes`|The encoded request data|
|`_fromChainId`|`uint24`|The chain id of the chain that sent the request|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`success`|`bool`|Whether the request was successful|
|`result`|`bytes`|The result of the request|


### executeRetrySettlement

Retry a settlement request that has not yet been executed in destination chain.

*DEPOSIT FLAG: 7 (Retry Settlement)*


```solidity
function executeRetrySettlement(uint32 _settlementNonce)
    external
    onlyOwner
    returns (bool success, bytes memory result);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_settlementNonce`|`uint32`|The settlement nonce of the request to retry.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`success`|`bool`|Whether the request was successful|
|`result`|`bytes`|The result of the request|


### _bridgeIn

Internal function to move assets from branch chain to root omnichain environment.


```solidity
function _bridgeIn(address _recipient, DepositParams memory _dParams, uint24 _fromChain) internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_recipient`|`address`||
|`_dParams`|`DepositParams`|Cross-Chain Deposit of Multiple Tokens Params.|
|`_fromChain`|`uint24`|chain to bridge from.|


### _bridgeInMultiple

Internal function to move assets from branch chain to root omnichain environment.

*Since the input data is encodePacked we need to parse it:
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
function _bridgeInMultiple(address _recipient, bytes calldata _dParams, uint24 _fromChain)
    internal
    returns (DepositMultipleParams memory dParams);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_recipient`|`address`||
|`_dParams`|`bytes`|Cross-Chain Deposit of Multiple Tokens Params.|
|`_fromChain`|`uint24`|chain to bridge from.|


