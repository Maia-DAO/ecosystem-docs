# IBranchBridgeAgent
[Git Source](https://github.com/Maia-DAO/test-env-V2/blob/84b5f9e8695c91ddb02f27bb3dfb1c652f55ced4/ulysses-omnichain/interfaces/IBranchBridgeAgent.sol)

**Inherits:**
[IApp](/ulysses-omnichain/interfaces/IApp.sol/interface.IApp.md)

**Author:**
MaiaDAO

Contract for deployment in Branch Chains of Omnichain System, responible for
interfacing with Users and Routers acting as a middleman to access Anycall cross-chain
messaging and  requesting / depositing  assets in the Branch Chain's Ports.

*Bridge Agents allow for the encapsulation of business logic as well as the standardize
cross-chain communication, allowing for the creation of custom Routers to perform
actions as a response to remote user requests. This contract for deployment in the Branch
Chains of the Ulysses Omnichain Liquidity System.
This contract manages gas spenditure calling `_replenishingGas` after each remote initiated
execution, as well as requests tokens clearances and tx execution to the `BranchBridgeAgentExecutor`.
Remote execution is "sandboxed" in 3 different nestings:
- 1: Anycall Messaging Layer will revert execution if by the end of the call the
balance in the executionBudget AnycallConfig contract for the Branch Bridge Agent
being called is inferior to the executionGasSpent, throwing the error `no enough budget`.
- 2: The `BranchBridgeAgent` will trigger a revert all state changes if by the end of the remote initiated call
Router interaction the userDepositedGas < executionGasSpent. This is done by calling the `_forceRevert()`
internal function clearing all executionBudget from the AnycallConfig contract forcing the error `no enough budget`.
- 3: The `BranchBridgeAgentExecutor` is in charge of requesting token deposits for each remote interaction as well
as performing the Router calls, if any of the calls initiated by the Router lead to an invlaid state change
both the token deposit clearances as well as the external interactions will be reverted. Yet executionGas
will still be credited by the `BranchBridgeAgent`.
Func IDs for calling these functions through messaging layer:
BRANCH BRIDGE AGENT SETTLEMENT FLAGS
--------------------------------------
ID           | DESCRIPTION
-------------+------------------------
0x00         | Call to Branch without Settlement.
0x01         | Call to Branch with Settlement.
0x02         | Call to Branch with Settlement of Multiple Tokens.
Encoding Scheme for different Root Bridge Agent Deposit Flags:
- ht = hToken
- t = Token
- A = Amount
- D = Destination
- b = bytes
- n = number of assets
________________________________________________________________________________________________________________________________
|            Flag               |           Deposit Info           |             Token Info             |   DATA   |  Gas Info   |
|           1 byte              |            4-25 bytes            |        (105 or 128) * n bytes      |   ---	   |  16 bytes   |
|                               |                                  |            hT - t - A - D          |          |             |
|_______________________________|__________________________________|____________________________________|__________|_____________|
| callOut = 0x0                 |  20b(recipient) + 4b(nonce)      |            -------------           |   ---	   |     dep     |
| callOutSingle = 0x1           |  20b(recipient) + 4b(nonce)      |         20b + 20b + 32b + 32b      |   ---	   |     16b     |
| callOutMulti = 0x2            |  1b(n) + 20b(recipient) + 4b     |   	     32b + 32b + 32b + 32b      |   ---	   |     16b     |
|_______________________________|__________________________________|____________________________________|__________|_____________|
Contract Remote Interaction Flow:
BranchBridgeAgent.anyExecute**() -> BridgeAgentExecutor.execute**() -> Router.anyExecute**() -> BridgeAgentExecutor (txExecuted) -> BranchBridgeAgent (replenishedGas)*


## Functions
### bridgeAgentExecutorAddress

External function to return the Branch Bridge Agent Executor Address.


```solidity
function bridgeAgentExecutorAddress() external view returns (address);
```

### getDepositEntry

*External function that returns a given deposit entry.*


```solidity
function getDepositEntry(uint32 _depositNonce) external view returns (Deposit memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_depositNonce`|`uint32`|Identifier for user deposit.|


### callOut

Function to perform a call to the Root Omnichain Router without token deposit.

*DEPOSIT ID: 1 (Call without deposit)*


```solidity
function callOut(bytes calldata params, uint128 remoteExecutionGas) external payable;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`params`|`bytes`|enconded parameters to execute on the root chain router.|
|`remoteExecutionGas`|`uint128`|gas allocated for remote branch execution.|


### callOutAndBridge

Function to perform a call to the Root Omnichain Router while depositing a single asset.

*DEPOSIT ID: 2 (Call with single deposit)*


```solidity
function callOutAndBridge(bytes calldata params, DepositInput memory dParams, uint128 remoteExecutionGas)
    external
    payable;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`params`|`bytes`|enconded parameters to execute on the root chain router.|
|`dParams`|`DepositInput`|additional token deposit parameters.|
|`remoteExecutionGas`|`uint128`|gas allocated for remote branch execution.|


### callOutAndBridgeMultiple

Function to perform a call to the Root Omnichain Router while depositing two or more assets.

*DEPOSIT ID: 3 (Call with multiple deposit)*


```solidity
function callOutAndBridgeMultiple(
    bytes calldata params,
    DepositMultipleInput memory dParams,
    uint128 remoteExecutionGas
) external payable;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`params`|`bytes`|enconded parameters to execute on the root chain router.|
|`dParams`|`DepositMultipleInput`|additional token deposit parameters.|
|`remoteExecutionGas`|`uint128`|gas allocated for remote branch execution.|


### callOutSigned

Function to perform a call to the Root Omnichain Router without token deposit with msg.sender information.

*DEPOSIT ID: 4 (Call without deposit and verified sender)*


```solidity
function callOutSigned(bytes calldata params, uint128 remoteExecutionGas) external payable;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`params`|`bytes`|enconded parameters to execute on the root chain router.|
|`remoteExecutionGas`|`uint128`|gas allocated for remote branch execution.|


### callOutSignedAndBridge

Function to perform a call to the Root Omnichain Router while depositing a single asset msg.sender.

*DEPOSIT ID: 5 (Call with single deposit and verified sender)*


```solidity
function callOutSignedAndBridge(bytes calldata params, DepositInput memory dParams, uint128 remoteExecutionGas)
    external
    payable;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`params`|`bytes`|enconded parameters to execute on the root chain router.|
|`dParams`|`DepositInput`|additional token deposit parameters.|
|`remoteExecutionGas`|`uint128`|gas allocated for remote branch execution.|


### callOutSignedAndBridgeMultiple

Function to perform a call to the Root Omnichain Router while depositing two or more assets with msg.sender.

*DEPOSIT ID: 6 (Call with multiple deposit and verified sender)*


```solidity
function callOutSignedAndBridgeMultiple(
    bytes calldata params,
    DepositMultipleInput memory dParams,
    uint128 remoteExecutionGas
) external payable;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`params`|`bytes`|enconded parameters to execute on the root chain router.|
|`dParams`|`DepositMultipleInput`|additional token deposit parameters.|
|`remoteExecutionGas`|`uint128`|gas allocated for remote branch execution.|


### retryDeposit

Function to perform a call to the Root Omnichain Environment retrying a failed deposit that hasn't been executed yet.


```solidity
function retryDeposit(
    bool _isSigned,
    uint32 _depositNonce,
    bytes calldata _params,
    uint128 _remoteExecutionGas,
    uint24 _toChain
) external payable;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_isSigned`|`bool`|Flag to indicate if the deposit was signed.|
|`_depositNonce`|`uint32`|Identifier for user deposit.|
|`_params`|`bytes`|parameters to execute on the root chain router.|
|`_remoteExecutionGas`|`uint128`|gas allocated for remote branch execution.|
|`_toChain`|`uint24`|Destination chain for interaction.|


### retrySettlement

External function to retry a failed Settlement entry on the root chain.

*DEPOSIT ID: 7*


```solidity
function retrySettlement(uint32 _settlementNonce, uint128 _gasToBoostSettlement) external payable;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_settlementNonce`|`uint32`|Identifier for user settlement.|
|`_gasToBoostSettlement`|`uint128`|Amount of gas to boost settlement.|


### retrieveDeposit

External function to request tokens back to branch chain after a failed omnichain environment interaction.

*DEPOSIT ID: 8*


```solidity
function retrieveDeposit(uint32 _depositNonce) external payable;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_depositNonce`|`uint32`|Identifier for user deposit to retrieve.|


### redeemDeposit

External function to retry a failed Deposit entry on this branch chain.


```solidity
function redeemDeposit(uint32 _depositNonce) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_depositNonce`|`uint32`|Identifier for user deposit.|


### clearToken

Function to request balance clearance from a Port to a given user.


```solidity
function clearToken(address _recipient, address _hToken, address _token, uint256 _amount, uint256 _deposit) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_recipient`|`address`|token receiver.|
|`_hToken`|`address`| local hToken addresse to clear balance for.|
|`_token`|`address`| native / underlying token addresse to clear balance for.|
|`_amount`|`uint256`|amounts of hToken to clear balance for.|
|`_deposit`|`uint256`|amount of native / underlying tokens to clear balance for.|


### clearTokens

Function to request balance clearance from a Port to a given address.


```solidity
function clearTokens(bytes calldata _sParams, address _recipient) external returns (SettlementMultipleParams memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_sParams`|`bytes`|encode packed multiple settlement info.|
|`_recipient`|`address`||


### performSystemCallOut

Internal function performs call to AnycallProxy Contract for cross-chain messaging.

*DEPOSIT ID: 0 (System Call / Response)*

*0x00 flag allows for identifying system emitted request/responses.*


```solidity
function performSystemCallOut(
    address depositor,
    bytes memory params,
    uint128 gasToBridgeOut,
    uint128 remoteExecutionGas
) external payable;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`depositor`|`address`|address of user depositing assets.|
|`params`|`bytes`|calldata for omnichain execution.|
|`gasToBridgeOut`|`uint128`|gas allocated for the cross-chain call.|
|`remoteExecutionGas`|`uint128`|gas allocated for omnichain execution.|


### performCallOut

Internal function performs call to AnycallProxy Contract for cross-chain messaging.

*DEPOSIT ID: 1 (Call without Deposit)*


```solidity
function performCallOut(address depositor, bytes memory params, uint128 gasToBridgeOut, uint128 remoteExecutionGas)
    external
    payable;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`depositor`|`address`|address of user depositing assets.|
|`params`|`bytes`|calldata for omnichain execution.|
|`gasToBridgeOut`|`uint128`|gas allocated for the cross-chain call.|
|`remoteExecutionGas`|`uint128`|gas allocated for omnichain execution.|


### performCallOutAndBridge

Function to perform a call to the Root Omnichain Router while depositing a single asset.

*DEPOSIT ID: 2 (Call with single asset Deposit)*


```solidity
function performCallOutAndBridge(
    address depositor,
    bytes calldata params,
    DepositInput memory dParams,
    uint128 gasToBridgeOut,
    uint128 remoteExecutionGas
) external payable;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`depositor`|`address`|address of user depositing assets.|
|`params`|`bytes`|enconded parameters to execute on the root chain router.|
|`dParams`|`DepositInput`|additional token deposit parameters.|
|`gasToBridgeOut`|`uint128`|gas allocated for the cross-chain call.|
|`remoteExecutionGas`|`uint128`|gas allocated for omnichain execution.|


### performCallOutAndBridgeMultiple

Function to perform a call to the Root Omnichain Router while depositing two or more assets.

*DEPOSIT ID: 3 (Call with multiple deposit)*


```solidity
function performCallOutAndBridgeMultiple(
    address depositor,
    bytes calldata params,
    DepositMultipleInput memory dParams,
    uint128 gasToBridgeOut,
    uint128 remoteExecutionGas
) external payable;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`depositor`|`address`|address of user depositing assets.|
|`params`|`bytes`|enconded parameters to execute on the root chain router.|
|`dParams`|`DepositMultipleInput`|additional token deposit parameters.|
|`gasToBridgeOut`|`uint128`|gas allocated for the cross-chain call.|
|`remoteExecutionGas`|`uint128`|gas allocated for omnichain execution.|


### forceRevert

Function to force revert when a remote action does not have enough gas or is being retried after having been previously executed.


```solidity
function forceRevert() external;
```

### depositGasAnycallConfig

Function to deposit gas for use by the Branch Bridge Agent.


```solidity
function depositGasAnycallConfig() external payable;
```

## Events
### LogCallin

```solidity
event LogCallin(bytes1 selector, bytes data, uint256 fromChainId);
```

### LogCallout

```solidity
event LogCallout(bytes1 selector, bytes data, uint256, uint256 toChainId);
```

### LogCalloutFail

```solidity
event LogCalloutFail(bytes1 selector, bytes data, uint256 toChainId);
```

## Errors
### AnycallUnauthorizedCaller

```solidity
error AnycallUnauthorizedCaller();
```

### AlreadyExecutedTransaction

```solidity
error AlreadyExecutedTransaction();
```

### InvalidInput

```solidity
error InvalidInput();
```

### InvalidChain

```solidity
error InvalidChain();
```

### InsufficientGas

```solidity
error InsufficientGas();
```

### NotDepositOwner

```solidity
error NotDepositOwner();
```

### DepositRedeemUnavailable

```solidity
error DepositRedeemUnavailable();
```

### UnrecognizedCallerNotRouter

```solidity
error UnrecognizedCallerNotRouter();
```

### UnrecognizedBridgeAgentExecutor

```solidity
error UnrecognizedBridgeAgentExecutor();
```

