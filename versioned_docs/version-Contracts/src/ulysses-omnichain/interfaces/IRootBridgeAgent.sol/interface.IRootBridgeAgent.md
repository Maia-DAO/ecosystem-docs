# IRootBridgeAgent
[Git Source](https://github.com/Maia-DAO/test-env-V2/blob/84b5f9e8695c91ddb02f27bb3dfb1c652f55ced4/ulysses-omnichain/interfaces/IRootBridgeAgent.sol)

**Inherits:**
[IApp](/ulysses-omnichain/interfaces/IApp.sol/interface.IApp.md)

**Author:**
MaiaDAO

Contract responsible for interfacing with Users and Routers acting as a middleman to
access Anycall cross-chain messaging and Port communication for asset management.

*Bridge Agents allow for the encapsulation of business logic as well as the standardize
cross-chain communication, allowing for the creation of custom Routers to perform
actions as a response to remote user requests. This contract is for deployment in the Root
Chain Omnichain Environment based on Arbitrum.
This contract manages gas spenditure calling `_replenishingGas` after each remote initiated
execution, as well as requests tokens clearances and tx execution from the `RootBridgeAgentExecutor`.
Remote execution is "sandboxed" in 3 different nestings:
- 1: Anycall Messaging Layer will revert execution if by the end of the call the
balance in the executionBudget AnycallConfig contract to the Root Bridge Agent
being called is inferior to the  executionGasSpent, throwing the error `no enough budget`.
- 2: The `RootBridgeAgent` will trigger a revert all state changes if by the end of the remote initiated call
Router interaction the userDepositedGas < executionGasSpent. This is done by calling the `_forceRevert()`
internal function clearing all executionBudget from the AnycallConfig contract forcing the error `no enough budget`.
- 3: The `RootBridgeAgentExecutor` is in charge of requesting token deposits for each remote interaction as well
as performing the Router calls, if any of the calls initiated by the Router lead to an invlaid state change
both the token deposit clearances as well as the external interactions will be reverted. Yet executionGas
will still be credited by the `RootBridgeAgent`.
Func IDs for calling these  functions through messaging layer:
ROOT BRIDGE AGENT DEPOSIT FLAGS
--------------------------------------
ID           | DESCRIPTION
-------------+------------------------
0x00         | Branch Router Response.
0x01         | Call to Root Router without Deposit.
0x02         | Call to Root Router with Deposit.
0x03         | Call to Root Router with Deposit of Multiple Tokens.
0x04         | Call to Root Router without Deposit + singned message.
0x05         | Call to Root Router with Deposit + singned message.
0x06         | Call to Root Router with Deposit of Multiple Tokens + singned message.
0x07         | Call to `retrySettlement()´. (retries sending a settlement + calldata for branch execution with new gas)
0x08         | Call to `clearDeposit()´. (clears a deposit that has not been executed yet triggering `anyFallback`)
Encoding Scheme for different Root Bridge Agent Deposit Flags:
- ht = hToken
- t = Token
- A = Amount
- D = Destination
- C = ChainId
- b = bytes
- n = number of assets
___________________________________________________________________________________________________________________________
|            Flag               |        Deposit Info        |             Token Info             |   DATA   |  Gas Info   |
|           1 byte              |         4-25 bytes         |     3 + (105 or 128) * n bytes     |   ---	 |  32 bytes   |
|                               |                            |          hT - t - A - D - C        |          |             |
|_______________________________|____________________________|____________________________________|__________|_____________|
| callOutSystem = 0x0   	    |                 4b(nonce)  |            -------------           |   ---	 |  dep + bOut |
| callOut = 0x1                 |                 4b(nonce)  |            -------------           |   ---	 |  dep + bOut |
| callOutSingle = 0x2           |                 4b(nonce)  |      20b + 20b + 32b + 32b + 3b    |   ---	 |  16b + 16b  |
| callOutMulti = 0x3            |         1b(n) + 4b(nonce)  |   	32b + 32b + 32b + 32b + 3b    |   ---	 |  16b + 16b  |
| callOutSigned = 0x4           |    20b(recip) + 4b(nonce)  |   	      -------------           |   ---    |  16b + 16b  |
| callOutSignedSingle = 0x5     |           20b + 4b(nonce)  |      20b + 20b + 32b + 32b + 3b 	  |   ---	 |  16b + 16b  |
| callOutSignedMultiple = 0x6   |   20b + 1b(n) + 4b(nonce)  |      32b + 32b + 32b + 32b + 3b 	  |   ---	 |  16b + 16b  |
|_______________________________|____________________________|____________________________________|__________|_____________|
Contract Interaction Flows:
- 1) Remote to Remote:
RootBridgeAgent.anyExecute**() -> BridgeAgentExecutor.execute**() -> Router.anyExecute**() -> BridgeAgentExecutor (txExecuted) -> RootBridgeAgent (replenishedGas)
- 2) Remote to Arbitrum:
RootBridgeAgent.anyExecute**() -> BridgeAgentExecutor.execute**() -> Router.anyExecute**() -> BridgeAgentExecutor (txExecuted) -> RootBridgeAgent (replenishedGas)
- 3) Arbitrum to Arbitrum:
RootBridgeAgent.anyExecute**() -> BridgeAgentExecutor.execute**() -> Router.anyExecute**() -> BridgeAgentExecutor (txExecuted)*


## Functions
### initialGas

External function to get the intial gas available for remote request execution.


```solidity
function initialGas() external view returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|uint256 Initial gas available for remote request execution.|


### userFeeInfo

External get gas fee details for current remote request being executed.


```solidity
function userFeeInfo() external view returns (uint128, uint128);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint128`|uint256 Gas fee for remote request execution.|
|`<none>`|`uint128`|uint256 Gas fee for remote request execution.|


### bridgeAgentExecutorAddress

External function to get the Bridge Agent Executor Address.


```solidity
function bridgeAgentExecutorAddress() external view returns (address);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|address Bridge Agent Executor Address.|


### factoryAddress

External function to get the Root Bridge Agent's Factory Address.


```solidity
function factoryAddress() external view returns (address);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|address Root Bridge Agent's Factory Address.|


### getBranchBridgeAgent

External function to get the attached Branch Bridge Agent for a given chain.


```solidity
function getBranchBridgeAgent(uint256 _chainId) external view returns (address);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_chainId`|`uint256`|Chain ID of the Branch Bridge Agent.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|address Branch Bridge Agent Address.|


### isBranchBridgeAgentAllowed

External function to verify a given chain has been allowed by the Root Bridge Agent's Manager for new Branch Bridge Agent creation.


```solidity
function isBranchBridgeAgentAllowed(uint256 _chainId) external view returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_chainId`|`uint256`|Chain ID of the Branch Bridge Agent.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|bool True if the chain has been allowed for new Branch Bridge Agent creation.|


### callOut

External function performs call to AnycallProxy Contract for cross-chain messaging.

*Internal function performs call to AnycallProxy Contract for cross-chain messaging.*


```solidity
function callOut(address _recipient, bytes memory _calldata, uint24 _toChain) external payable;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_recipient`|`address`|address to receive any outstanding gas on the destination chain.|
|`_calldata`|`bytes`|Calldata for function call.|
|`_toChain`|`uint24`|Chain to bridge to.|


### callOutAndBridge

External function to move assets from root chain to branch omnichain envirsonment.


```solidity
function callOutAndBridge(
    address _owner,
    address _recipient,
    bytes memory _data,
    address _globalAddress,
    uint256 _amount,
    uint256 _deposit,
    uint24 _toChain
) external payable;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_owner`|`address`|address allowed for redeeming assets after a failed settlement fallback. This address' Virtual Account is also allowed.|
|`_recipient`|`address`|recipient of bridged tokens and any outstanding gas on the destination chain.|
|`_data`|`bytes`|parameters for function call on branch chain.|
|`_globalAddress`|`address`|global token to be moved.|
|`_amount`|`uint256`|amount of ´token´.|
|`_deposit`|`uint256`|amount of native / underlying token.|
|`_toChain`|`uint24`|chain to bridge to.|


### callOutAndBridgeMultiple

External function to move assets from branch chain to root omnichain environment.


```solidity
function callOutAndBridgeMultiple(
    address _owner,
    address _recipient,
    bytes memory _data,
    address[] memory _globalAddresses,
    uint256[] memory _amounts,
    uint256[] memory _deposits,
    uint24 _toChain
) external payable;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_owner`|`address`|address allowed for redeeming assets after a failed settlement fallback. This address' Virtual Account is also allowed.|
|`_recipient`|`address`|recipient of bridged tokens.|
|`_data`|`bytes`|parameters for function call on branch chain.|
|`_globalAddresses`|`address[]`|global tokens to be moved.|
|`_amounts`|`uint256[]`|amounts of token.|
|`_deposits`|`uint256[]`|amounts of underlying / token.|
|`_toChain`|`uint24`|chain to bridge to.|


### bridgeIn

Function to move assets from branch chain to root omnichain environment. Called in response to Bridge Agent Executor.


```solidity
function bridgeIn(address _recipient, DepositParams memory _dParams, uint24 _fromChain) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_recipient`|`address`||
|`_dParams`|`DepositParams`|Cross-Chain Deposit of Multiple Tokens Params.|
|`_fromChain`|`uint24`|chain to bridge from.|


### bridgeInMultiple

Function to move assets from branch chain to root omnichain environment. Called in response to Bridge Agent Executor.

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
function bridgeInMultiple(address _recipient, DepositMultipleParams memory _dParams, uint24 _fromChain) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_recipient`|`address`||
|`_dParams`|`DepositMultipleParams`|Cross-Chain Deposit of Multiple Tokens Params.|
|`_fromChain`|`uint24`|chain to bridge from.|


### settlementNonce

Function that returns the current settlement nonce.


```solidity
function settlementNonce() external view returns (uint32 nonce);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`nonce`|`uint32`|bridge agent's current settlement nonce|


### redeemSettlement

Function that allows redemption of failed Settlement's global tokens.


```solidity
function redeemSettlement(uint32 _depositNonce) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_depositNonce`|`uint32`|Identifier for token deposit.|


### retrySettlement

Function to retry a user's Settlement balance.


```solidity
function retrySettlement(uint32 _settlementNonce, uint128 _remoteExecutionGas) external payable;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_settlementNonce`|`uint32`|Identifier for token settlement.|
|`_remoteExecutionGas`|`uint128`|Identifier for token settlement.|


### getSettlementEntry

External function that returns a given settlement entry.


```solidity
function getSettlementEntry(uint32 _settlementNonce) external view returns (Settlement memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_settlementNonce`|`uint32`|Identifier for token settlement.|


### syncBranchBridgeAgent

Updates the address of the branch bridge agent


```solidity
function syncBranchBridgeAgent(address _newBranchBridgeAgent, uint24 _branchChainId) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_newBranchBridgeAgent`|`address`|address of the new branch bridge agent|
|`_branchChainId`|`uint24`|chainId of the branch chain|


### uniswapV3SwapCallback

Checks if a pool is eligible to call uniswapV3SwapCallback


```solidity
function uniswapV3SwapCallback(int256 amount0, int256 amount1, bytes calldata _data) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`amount0`|`int256`|amount of token0 to swap|
|`amount1`|`int256`|amount of token1 to swap|
|`_data`|`bytes`|abi encoded data|


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

### sweep

Function to collect excess gas fees.

*only callable by the DAO.*


```solidity
function sweep() external;
```

### approveBranchBridgeAgent

Adds a new branch bridge agent to a given branch chainId


```solidity
function approveBranchBridgeAgent(uint256 _branchChainId) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_branchChainId`|`uint256`|chainId of the branch chain|


## Events
### LogCallin

```solidity
event LogCallin(bytes1 selector, bytes data, uint24 fromChainId);
```

### LogCallout

```solidity
event LogCallout(bytes1 selector, bytes data, uint256, uint24 toChainId);
```

### LogCalloutFail

```solidity
event LogCalloutFail(bytes1 selector, bytes data, uint24 toChainId);
```

## Errors
### GasErrorOrRepeatedTx

```solidity
error GasErrorOrRepeatedTx();
```

### NotDao

```solidity
error NotDao();
```

### AnycallUnauthorizedCaller

```solidity
error AnycallUnauthorizedCaller();
```

### AlreadyAddedBridgeAgent

```solidity
error AlreadyAddedBridgeAgent();
```

### UnrecognizedExecutor

```solidity
error UnrecognizedExecutor();
```

### UnrecognizedPort

```solidity
error UnrecognizedPort();
```

### UnrecognizedBridgeAgent

```solidity
error UnrecognizedBridgeAgent();
```

### UnrecognizedBridgeAgentManager

```solidity
error UnrecognizedBridgeAgentManager();
```

### UnrecognizedCallerNotRouter

```solidity
error UnrecognizedCallerNotRouter();
```

### UnrecognizedUnderlyingAddress

```solidity
error UnrecognizedUnderlyingAddress();
```

### UnrecognizedLocalAddress

```solidity
error UnrecognizedLocalAddress();
```

### UnrecognizedGlobalAddress

```solidity
error UnrecognizedGlobalAddress();
```

### UnrecognizedAddressInDestination

```solidity
error UnrecognizedAddressInDestination();
```

### SettlementRedeemUnavailable

```solidity
error SettlementRedeemUnavailable();
```

### NotSettlementOwner

```solidity
error NotSettlementOwner();
```

### InsufficientBalanceForSettlement

```solidity
error InsufficientBalanceForSettlement();
```

### InsufficientGasForFees

```solidity
error InsufficientGasForFees();
```

### InvalidInputParams

```solidity
error InvalidInputParams();
```

### InvalidGasPool

```solidity
error InvalidGasPool();
```

### CallerIsNotPool

```solidity
error CallerIsNotPool();
```

### AmountsAreZero

```solidity
error AmountsAreZero();
```

