---
id: BranchBridgeAgentExecutor
title: BranchBridgeAgentExecutor
---

**Inherits:**
Ownable

This contract is used for requesting token deposit clearance and
executing transactions in response to requests from the root environment.

*Execution is "sandboxed" meaning upon tx failure both token deposits
and interactions with external contracts should be reverted and caught.*


## State Variables
### PARAMS_START
AnyExec Decode Consts


```solidity
uint8 internal constant PARAMS_START = 1;
```


### PARAMS_START_SIGNED

```solidity
uint8 internal constant PARAMS_START_SIGNED = 21;
```


### PARAMS_END_SIGNED_OFFSET

```solidity
uint8 internal constant PARAMS_END_SIGNED_OFFSET = 26;
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
uint8 internal constant PARAMS_TKN_SET_SIZE = 128;
```


### PARAMS_GAS_OUT

```solidity
uint8 internal constant PARAMS_GAS_OUT = 16;
```


### PARAMS_TKN_START
ClearTokens Decode Consts


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
constructor();
```

### executeNoSettlement

Function to execute a crosschain request without any settlement.

*SETTLEMENT FLAG: 0 (No settlement)*


```solidity
function executeNoSettlement(address _router, bytes calldata _data)
    external
    onlyOwner
    returns (bool success, bytes memory result);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_router`|`address`|Address of the router contract to execute the request.|
|`_data`|`bytes`|Data received from messaging layer.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`success`|`bool`|Boolean indicating if the operation was successful.|
|`result`|`bytes`|Result of the execution.|


### executeWithSettlement

Function to execute a crosschain request with a single settlement.

*SETTLEMENT FLAG: 1 (Single Settlement)*


```solidity
function executeWithSettlement(address _recipient, address _router, bytes calldata _data)
    external
    onlyOwner
    returns (bool success, bytes memory result);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_recipient`|`address`|Address of the recipient of the settlement.|
|`_router`|`address`|Address of the router contract to execute the request.|
|`_data`|`bytes`|Data received from messaging layer.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`success`|`bool`|Boolean indicating if the operation was successful.|
|`result`|`bytes`|Result of the execution.|


### executeWithSettlementMultiple

Function to execute a crosschain request with multiple settlements.

*SETTLEMENT FLAG: 2 (Multiple Settlements)*


```solidity
function executeWithSettlementMultiple(address _recipient, address _router, bytes calldata _data)
    external
    onlyOwner
    returns (bool success, bytes memory result);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_recipient`|`address`|Address of the recipient of the settlement.|
|`_router`|`address`|Address of the router contract to execute the request.|
|`_data`|`bytes`|Data received from messaging layer.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`success`|`bool`|Boolean indicating if the operation was successful.|
|`result`|`bytes`|Result of the execution.|


