# IRootRouter
[Git Source](https://github.com/Maia-DAO/2023-09-maia-remediations/blob/main/src/interfaces/IRootRouter.sol)

**Author:**
MaiaDAO

Base Branch Contract for interfacing with Root Bridge Agents.
This contract for deployment in the Root Chain of the Ulysses Omnichain System,
additional logic can be implemented to perform actions before sending cross-chain
requests to Branch Chains, as well as in response to remote requests.


## Functions
### retrySettlement

Function to execute Branch Bridge Agent initiated requests to retry a settlement.


```solidity
function retrySettlement(
    uint32 _settlementNonce,
    address _recipient,
    bytes calldata _params,
    GasParams calldata _gParams,
    bool _hasFallbackToggled
) external payable;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_settlementNonce`|`uint32`|settlement nonce.|
|`_recipient`|`address`|recipient address.|
|`_params`|`bytes`|data received from messaging layer.|
|`_gParams`|`GasParams`|gas parameters.|
|`_hasFallbackToggled`|`bool`|flag to indicate if fallback has been toggled.|


### executeRetrySettlement

Function to execute Branch Bridge Agent initiated requests to retry a settlement.


```solidity
function executeRetrySettlement(
    address _owner,
    uint32 _settlementNonce,
    address _recipient,
    bytes calldata _params,
    GasParams calldata _gParams,
    bool _hasFallbackToggled,
    uint16 _srcChainId
) external payable;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_owner`|`address`|user account address.|
|`_settlementNonce`|`uint32`|settlement nonce.|
|`_recipient`|`address`|recipient address.|
|`_params`|`bytes`|data received from messaging layer.|
|`_gParams`|`GasParams`|gas parameters.|
|`_hasFallbackToggled`|`bool`|flag to indicate if fallback has been toggled.|
|`_srcChainId`|`uint16`|chain where the request originated from.|


### execute

Function responsible of executing a crosschain request without any deposit.


```solidity
function execute(bytes memory params, uint16 srcChainId) external payable;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`params`|`bytes`|data received from messaging layer.|
|`srcChainId`|`uint16`|chain where the request originated from.|


### executeDepositSingle

Function responsible of executing a crosschain request which contains cross-chain deposit information attached.


```solidity
function executeDepositSingle(bytes memory params, DepositParams memory dParams, uint16 srcChainId) external payable;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`params`|`bytes`|execution data received from messaging layer.|
|`dParams`|`DepositParams`|cross-chain deposit information.|
|`srcChainId`|`uint16`|chain where the request originated from.|


### executeDepositMultiple

Function responsible of executing a crosschain request which contains cross-chain deposit information for multiple assets attached.


```solidity
function executeDepositMultiple(bytes memory params, DepositMultipleParams memory dParams, uint16 srcChainId)
    external
    payable;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`params`|`bytes`|execution data received from messaging layer.|
|`dParams`|`DepositMultipleParams`|cross-chain multiple deposit information.|
|`srcChainId`|`uint16`|chain where the request originated from.|


### executeSigned

Function responsible of executing a crosschain request with msg.sender without any deposit.


```solidity
function executeSigned(bytes memory params, address userAccount, uint16 srcChainId) external payable;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`params`|`bytes`|execution data received from messaging layer.|
|`userAccount`|`address`|user account address.|
|`srcChainId`|`uint16`|chain where the request originated from.|


### executeSignedDepositSingle

Function responsible of executing a crosschain request which contains cross-chain deposit information and msg.sender attached.


```solidity
function executeSignedDepositSingle(
    bytes memory params,
    DepositParams memory dParams,
    address userAccount,
    uint16 srcChainId
) external payable;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`params`|`bytes`|execution data received from messaging layer.|
|`dParams`|`DepositParams`|cross-chain deposit information.|
|`userAccount`|`address`|user account address.|
|`srcChainId`|`uint16`|chain where the request originated from.|


### executeSignedDepositMultiple

Function responsible of executing a crosschain request which contains cross-chain deposit information for multiple assets and msg.sender attached.


```solidity
function executeSignedDepositMultiple(
    bytes memory params,
    DepositMultipleParams memory dParams,
    address userAccount,
    uint16 srcChainId
) external payable;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`params`|`bytes`|execution data received from messaging layer.|
|`dParams`|`DepositMultipleParams`|cross-chain multiple deposit information.|
|`userAccount`|`address`|user account address.|
|`srcChainId`|`uint16`|chain where the request originated from.|


## Errors
### UnrecognizedFunctionId

```solidity
error UnrecognizedFunctionId();
```

### UnrecognizedBridgeAgent

```solidity
error UnrecognizedBridgeAgent();
```

### UnrecognizedBridgeAgentExecutor

```solidity
error UnrecognizedBridgeAgentExecutor();
```

