# IBranchRouter

**Author:**
MaiaDAO

Base Branch Contract for interfacing with Branch Bridge Agents.
This contract for deployment in Branch Chains of the Ulysses Omnichain System,
additional logic can be implemented to perform actions before sending cross-chain
requests, as well as in response to requests from the Root Omnichain Environment.


## Functions
### localBridgeAgentAddress

Address for local Branch Bridge Agent who processes requests and ineracts with local port.


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
function callOut(bytes calldata params, uint128 rootExecutionGas) external payable;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`params`|`bytes`|RLP enconded parameters to execute on the root chain.|
|`rootExecutionGas`|`uint128`|gas allocated for remote execution.|


### callOutAndBridge

Function to perform a call to the Root Omnichain Router while depositing a single asset.

*ACTION ID: 2 (Call with single deposit)*


```solidity
function callOutAndBridge(bytes calldata params, DepositInput memory dParams, uint128 rootExecutionGas)
    external
    payable;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`params`|`bytes`|RLP enconded parameters to execute on the root chain.|
|`dParams`|`DepositInput`|additional token deposit parameters.|
|`rootExecutionGas`|`uint128`|gas allocated for remote execution.|


### callOutAndBridgeMultiple

Function to perform a call to the Root Omnichain Router while depositing two or more assets.

*ACTION ID: 3 (Call with multiple deposit)*


```solidity
function callOutAndBridgeMultiple(bytes calldata params, DepositMultipleInput memory dParams, uint128 rootExecutionGas)
    external
    payable;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`params`|`bytes`|RLP enconded parameters to execute on the root chain.|
|`dParams`|`DepositMultipleInput`|additional token deposit parameters.|
|`rootExecutionGas`|`uint128`|gas allocated for remote execution.|


### retrySettlement

External function to retry a failed Settlement entry on the root chain.


```solidity
function retrySettlement(uint32 _settlementNonce, uint128 _gasToBoostSettlement) external payable;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_settlementNonce`|`uint32`|Identifier for user settlement.|
|`_gasToBoostSettlement`|`uint128`|Additional gas to boost settlement.|


### redeemDeposit

External function to retry a failed Deposit entry on this branch chain.


```solidity
function redeemDeposit(uint32 _depositNonce) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_depositNonce`|`uint32`|Identifier for user deposit.|


### getDepositEntry

External function that returns a given deposit entry.


```solidity
function getDepositEntry(uint32 _depositNonce) external view returns (Deposit memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_depositNonce`|`uint32`|Identifier for user deposit.|


### anyExecuteNoSettlement

Function responsible of executing a branch router response.


```solidity
function anyExecuteNoSettlement(bytes calldata data) external returns (bool success, bytes memory result);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`data`|`bytes`|data received from messaging layer.|


### anyExecuteSettlement

*Function responsible of executing a crosschain request without any deposit.*


```solidity
function anyExecuteSettlement(bytes calldata data, SettlementParams memory sParams)
    external
    returns (bool success, bytes memory result);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`data`|`bytes`|data received from messaging layer.|
|`sParams`|`SettlementParams`|SettlementParams struct.|


### anyExecuteSettlementMultiple

*Function responsible of executing a crosschain request which contains cross-chain deposit information attached.*


```solidity
function anyExecuteSettlementMultiple(bytes calldata data, SettlementMultipleParams memory sParams)
    external
    returns (bool success, bytes memory result);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`data`|`bytes`|data received from messaging layer.|
|`sParams`|`SettlementMultipleParams`|SettlementParams struct containing deposit information.|


## Errors
### UnrecognizedBridgeAgentExecutor

```solidity
error UnrecognizedBridgeAgentExecutor();
```

