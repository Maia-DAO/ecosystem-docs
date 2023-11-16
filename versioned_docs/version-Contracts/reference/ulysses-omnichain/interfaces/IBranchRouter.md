# IBranchRouter
[Git Source](https://github.com/Maia-DAO/2023-09-maia-remediations/blob/main/src/interfaces/IBranchRouter.sol)

**Author:**
MaiaDAO

Base Branch Contract for interfacing with Branch Bridge Agents.
This contract for deployment in Branch Chains of the Ulysses Omnichain System,
additional logic can be implemented to perform actions before sending cross-chain
requests, as well as in response to requests from the Root Omnichain Environment.


## Functions
### localPortAddress

External function to return the Branch Chain's Local Port Address.


```solidity
function localPortAddress() external view returns (address);
```

### localBridgeAgentAddress

Address for local Branch Bridge Agent who processes requests and interacts with local port.


```solidity
function localBridgeAgentAddress() external view returns (address);
```

### bridgeAgentExecutorAddress

Local Bridge Agent Executor Address.


```solidity
function bridgeAgentExecutorAddress() external view returns (address);
```

### callOut

Function to perform a call to the Root Omnichain Router without token deposit.

*ACTION ID: 1 (Call without deposit)*


```solidity
function callOut(bytes calldata params, GasParams calldata gParams) external payable;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`params`|`bytes`|enconded parameters to execute on the root chain.|
|`gParams`|`GasParams`|gas parameters for the cross-chain call.|


### callOutAndBridge

Function to perform a call to the Root Omnichain Router while depositing a single asset.

*ACTION ID: 2 (Call with single deposit)*


```solidity
function callOutAndBridge(bytes calldata params, DepositInput calldata dParams, GasParams calldata gParams)
    external
    payable;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`params`|`bytes`|encoded parameters to execute on the root chain.|
|`dParams`|`DepositInput`|additional token deposit parameters.|
|`gParams`|`GasParams`|gas parameters for the cross-chain call.|


### callOutAndBridgeMultiple

Function to perform a call to the Root Omnichain Router while depositing two or more assets.

*ACTION ID: 3 (Call with multiple deposit)*


```solidity
function callOutAndBridgeMultiple(
    bytes calldata params,
    DepositMultipleInput calldata dParams,
    GasParams calldata gParams
) external payable;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`params`|`bytes`|encoded parameters to execute on the root chain.|
|`dParams`|`DepositMultipleInput`|additional token deposit parameters.|
|`gParams`|`GasParams`|gas parameters for the cross-chain call.|


### getDepositEntry

External function that returns a given deposit entry.


```solidity
function getDepositEntry(uint32 depositNonce) external view returns (Deposit memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`depositNonce`|`uint32`|Identifier for user deposit.|


### retryDeposit

Function to retry a deposit that has failed.


```solidity
function retryDeposit(uint32 _depositNonce, bytes calldata _params, GasParams calldata _gParams) external payable;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_depositNonce`|`uint32`|Identifier for user deposit.|
|`_params`|`bytes`|encoded router parameters to execute on the root chain.|
|`_gParams`|`GasParams`|gas parameters for the cross-chain call.|


### executeNoSettlement

Function responsible of executing a branch router response.


```solidity
function executeNoSettlement(bytes calldata params) external payable;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`params`|`bytes`|data received from messaging layer.|


### executeSettlement

*Function responsible of executing a crosschain request without any deposit.*


```solidity
function executeSettlement(bytes calldata params, SettlementParams calldata sParams) external payable;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`params`|`bytes`|data received from messaging layer.|
|`sParams`|`SettlementParams`|SettlementParams struct.|


### executeSettlementMultiple

*Function responsible of executing a crosschain request which contains
cross-chain deposit information attached.*


```solidity
function executeSettlementMultiple(bytes calldata params, SettlementMultipleParams calldata sParams) external payable;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`params`|`bytes`|data received from messaging layer.|
|`sParams`|`SettlementMultipleParams`|SettlementParams struct containing deposit information.|


## Errors
### UnrecognizedFunctionId

```solidity
error UnrecognizedFunctionId();
```

### UnrecognizedBridgeAgentExecutor

```solidity
error UnrecognizedBridgeAgentExecutor();
```

