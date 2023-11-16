# IRootBridgeAgent

[Git Source](https://github.com/Maia-DAO/2023-09-maia-remediations/blob/main/src/interfaces/IRootBridgeAgent.sol)

**Inherits:**
[ILayerZeroReceiver](/src/ulysses-omnichain/interfaces/ILayerZeroReceiver.md)

**Author:**
MaiaDAO

Contract responsible for interfacing with Users and Routers acting as a middleman to
access LayerZero cross-chain messaging and Port communication for asset management.

Bridge Agents allow for the encapsulation of business logic as well as the standardized
cross-chain communication, allowing for the creation of custom Routers to perform
actions as a response to remote user requests. This contract is for deployment in the Root
Chain Omnichain Environment based on Arbitrum.
The Root Bridge Agent is responsible for sending/receiving requests to/from the LayerZero Messaging Layer for
execution, as well as requests tokens clearances and tx execution from the `RootBridgeAgentExecutor`.
Remote execution is "sandboxed" within 2 different layers/nestings:

- 1: Upon receiving a request from LayerZero Messaging Layer to avoid blocking future requests due
  to execution reversion, ensuring our app is Non-Blocking.
  (See https://github.com/LayerZero-Labs/solidity-examples/blob/8e62ebc886407aafc89dbd2a778e61b7c0a25ca0/contracts/lzApp/NonblockingLzApp.sol)
- 2: The call to `RootBridgeAgentExecutor` is in charge of requesting token deposits for each
  remote interaction as well as performing the Router calls if any of the calls initiated
  by the Router led to an invalid state change in both the token deposit clearances as well as
  the external interactions will be reverted and caught by the `RootBridgeAgent`.

**ROOT BRIDGE AGENT DEPOSIT FLAGS** Func IDs for calling these  functions through the messaging layer

| ID   | DESCRIPTION                                                                                           |
|------|-------------------------------------------------------------------------------------------------------|
| 0x01 | Call to Root Router without Deposit.                                                                  |
| 0x02 | Call to Root Router with Deposit.                                                                     |
| 0x03 | Call to Root Router with Deposit of Multiple Tokens.                                                  |
| 0x04 | Call to Root Router without Deposit + signed message.                                                 |
| 0x05 | Call to Root Router with Deposit + signed message.                                                    |
| 0x06 | Call to Root Router with Deposit of Multiple Tokens + signed message.                                 |
| 0x07 | Call to `retrySettlement()`. (retries sending a settlement w/ new calldata for execution + new gas)   |
| 0x08 | Call to `retrieveDeposit()`. (clears a deposit that has not been executed yet triggering `_fallback`) |
| 0x09 | Call to `_fallback()`. (reopens a settlement for asset redemption)                                    |

   Encoding Scheme for different Root Bridge Agent Deposit Flags:
    - ht = hToken
    - t = Token
    - A = Amount
    - D = Deposit
    - b = bytes
    - n = number of assets

|            Flag               |        Deposit Info        |             Token Info             |   DATA   |
|-------------------------------|----------------------------|------------------------------------|----------|
|           1 byte              |         4-25 bytes         |       104 or (128 * n) bytes       |   ---	 |
|                               |                            |           hT - t - A - D           |          |
| callOut = 0x01                |                 4b(nonce)  |                 ---                |   ---	 |
| callOutSingle = 0x02          |                 4b(nonce)  |        20b + 20b + 32b + 32b       |   ---	 |
| callOutMulti = 0x03           |         1b(n) + 4b(nonce)  |   	  32b + 32b + 32b + 32b       |   ---	 |
| callOutSigned = 0x04          |    20b(recip) + 4b(nonce)  |   	           ---                |   ---    |
| callOutSignedSingle = 0x05    |           20b + 4b(nonce)  |        20b + 20b + 32b + 32b       |   ---	 |
| callOutSignedMultiple = 0x06  |   20b + 1b(n) + 4b(nonce)  |        32b + 32b + 32b + 32b       |   ---	 |

**Generic Contract Interaction Flow:**
BridgeAgent.lzReceive() -> BridgeAgentExecutor.execute() -> Router.execute()

## Functions

### settlementNonce

Function that returns the current settlement nonce.

```solidity
function settlementNonce() external view returns (uint32 nonce);
```

**Returns**

| Name    | Type     | Description                             |
| ------- | -------- | --------------------------------------- |
| `nonce` | `uint32` | bridge agent's current settlement nonce |

### getSettlementEntry

External function that returns a given settlement entry.

```solidity
function getSettlementEntry(uint32 _settlementNonce) external view returns (Settlement memory);
```

**Parameters**

| Name               | Type     | Description                      |
| ------------------ | -------- | -------------------------------- |
| `_settlementNonce` | `uint32` | Identifier for token settlement. |

### bridgeAgentExecutorAddress

External function to get the Bridge Agent Executor Address.

```solidity
function bridgeAgentExecutorAddress() external view returns (address);
```

**Returns**

| Name     | Type      | Description                            |
| -------- | --------- | -------------------------------------- |
| `<none>` | `address` | address Bridge Agent Executor Address. |

### factoryAddress

External function to get the Root Bridge Agent's Factory Address.

```solidity
function factoryAddress() external view returns (address);
```

**Returns**

| Name     | Type      | Description                                  |
| -------- | --------- | -------------------------------------------- |
| `<none>` | `address` | address Root Bridge Agent's Factory Address. |

### getBranchBridgeAgent

External function to get the attached Branch Bridge Agent for a given chain.

```solidity
function getBranchBridgeAgent(uint256 _chainId) external view returns (address);
```

**Parameters**

| Name       | Type      | Description                          |
| ---------- | --------- | ------------------------------------ |
| `_chainId` | `uint256` | Chain ID of the Branch Bridge Agent. |

**Returns**

| Name     | Type      | Description                          |
| -------- | --------- | ------------------------------------ |
| `<none>` | `address` | address Branch Bridge Agent Address. |

### isBranchBridgeAgentAllowed

External function to verify a given chain has been allowed by the Root Bridge Agent's Manager
for new Branch Bridge Agent creation.

```solidity
function isBranchBridgeAgentAllowed(uint256 _chainId) external view returns (bool);
```

**Parameters**

| Name       | Type      | Description                          |
| ---------- | --------- | ------------------------------------ |
| `_chainId` | `uint256` | Chain ID of the Branch Bridge Agent. |

**Returns**

| Name     | Type   | Description                                                                   |
| -------- | ------ | ----------------------------------------------------------------------------- |
| `<none>` | `bool` | bool True if the chain has been allowed for new Branch Bridge Agent creation. |

### callOut

External function performs call to LayerZero Endpoint Contract for cross-chain messaging.

_Internal function performs call to LayerZero Endpoint Contract for cross-chain messaging._

```solidity
function callOut(
    address payable _gasRefundee,
    address _recipient,
    uint16 _dstChainId,
    bytes memory _params,
    GasParams calldata _gParams
) external payable;
```

**Parameters**

| Name           | Type              | Description                                                      |
| -------------- | ----------------- | ---------------------------------------------------------------- |
| `_gasRefundee` | `address payable` | Address to return excess gas deposited in `msg.value` to.        |
| `_recipient`   | `address`         | address to receive any outstanding gas on the destination chain. |
| `_dstChainId`  | `uint16`          | Chain to bridge to.                                              |
| `_params`      | `bytes`           | Calldata for function call.                                      |
| `_gParams`     | `GasParams`       | Gas Parameters for cross-chain message.                          |

### callOutAndBridge

External function to move assets from root chain to branch omnichain environment.

```solidity
function callOutAndBridge(
    address payable _settlementOwnerAndGasRefundee,
    address _recipient,
    uint16 _dstChainId,
    bytes calldata _params,
    SettlementInput calldata _sParams,
    GasParams calldata _gParams,
    bool _hasFallbackToggled
) external payable;
```

**Parameters**

| Name                             | Type              | Description                                                                                                                                                                                                                                   |
| -------------------------------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `_settlementOwnerAndGasRefundee` | `address payable` | the effective owner of the settlement this address receives excess gas deposited on source chain for a cross-chain call and is allowed to redeeming assets after a failed settlement fallback. This address' Virtual Account is also allowed. |
| `_recipient`                     | `address`         | recipient of bridged tokens and any outstanding gas on the destination chain.                                                                                                                                                                 |
| `_dstChainId`                    | `uint16`          | chain to bridge to.                                                                                                                                                                                                                           |
| `_params`                        | `bytes`           | parameters for function call on branch chain.                                                                                                                                                                                                 |
| `_sParams`                       | `SettlementInput` | settlement parameters for asset bridging to branch chains.                                                                                                                                                                                    |
| `_gParams`                       | `GasParams`       | Gas Parameters for cross-chain message.                                                                                                                                                                                                       |
| `_hasFallbackToggled`            | `bool`            | Flag to toggle fallback function.                                                                                                                                                                                                             |

### callOutAndBridgeMultiple

External function to move assets from branch chain to root omnichain environment.

```solidity
function callOutAndBridgeMultiple(
    address payable _settlementOwnerAndGasRefundee,
    address _recipient,
    uint16 _dstChainId,
    bytes calldata _params,
    SettlementMultipleInput calldata _sParams,
    GasParams calldata _gParams,
    bool _hasFallbackToggled
) external payable;
```

**Parameters**

| Name                             | Type                      | Description                                                                                                                                                                                                                                   |
| -------------------------------- | ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `_settlementOwnerAndGasRefundee` | `address payable`         | the effective owner of the settlement this address receives excess gas deposited on source chain for a cross-chain call and is allowed to redeeming assets after a failed settlement fallback. This address' Virtual Account is also allowed. |
| `_recipient`                     | `address`                 | recipient of bridged tokens.                                                                                                                                                                                                                  |
| `_dstChainId`                    | `uint16`                  | chain to bridge to.                                                                                                                                                                                                                           |
| `_params`                        | `bytes`                   | parameters for function call on branch chain.                                                                                                                                                                                                 |
| `_sParams`                       | `SettlementMultipleInput` | settlement parameters for asset bridging to branch chains.                                                                                                                                                                                    |
| `_gParams`                       | `GasParams`               | Gas Parameters for cross-chain message.                                                                                                                                                                                                       |
| `_hasFallbackToggled`            | `bool`                    | Flag to toggle fallback function.                                                                                                                                                                                                             |

### retrySettlement

Function to retry a user's Settlement balance.

```solidity
function retrySettlement(
    address _settlementOwnerAndGasRefundee,
    uint32 _settlementNonce,
    address _recipient,
    bytes calldata _params,
    GasParams calldata _gParams,
    bool _hasFallbackToggled
) external payable;
```

**Parameters**

| Name                             | Type        | Description                                                                   |
| -------------------------------- | ----------- | ----------------------------------------------------------------------------- |
| `_settlementOwnerAndGasRefundee` | `address`   | owner of the settlement and gas refundee.                                     |
| `_settlementNonce`               | `uint32`    | Identifier for token settlement.                                              |
| `_recipient`                     | `address`   | recipient of bridged tokens and any outstanding gas on the destination chain. |
| `_params`                        | `bytes`     | Calldata for function call in branch chain.                                   |
| `_gParams`                       | `GasParams` | Gas Parameters for cross-chain message.                                       |
| `_hasFallbackToggled`            | `bool`      | Flag to toggle fallback function.                                             |

### retrieveSettlement

Function that allows retrieval of failed Settlement's foricng fallback to be triggered.

```solidity
function retrieveSettlement(uint32 _settlementNonce, GasParams calldata _gParams) external payable;
```

**Parameters**

| Name               | Type        | Description                             |
| ------------------ | ----------- | --------------------------------------- |
| `_settlementNonce` | `uint32`    | Identifier for token settlement.        |
| `_gParams`         | `GasParams` | Gas Parameters for cross-chain message. |

### redeemSettlement

Function that allows redemption of failed Settlement's global tokens.

```solidity
function redeemSettlement(uint32 _depositNonce, address _recipient) external;
```

**Parameters**

| Name            | Type      | Description                               |
| --------------- | --------- | ----------------------------------------- |
| `_depositNonce` | `uint32`  | Identifier for token deposit.             |
| `_recipient`    | `address` | recipient of redeemed root/global tokens. |

### bridgeIn

Function to move assets from branch chain to root omnichain environment.

_Called in response to Bridge Agent Executor._

```solidity
function bridgeIn(address _recipient, DepositParams memory _dParams, uint256 _srcChainId) external;
```

**Parameters**

| Name          | Type            | Description                                    |
| ------------- | --------------- | ---------------------------------------------- |
| `_recipient`  | `address`       | recipient of bridged token.                    |
| `_dParams`    | `DepositParams` | Cross-Chain Deposit of Multiple Tokens Params. |
| `_srcChainId` | `uint256`       | chain to bridge from.                          |

### bridgeInMultiple

Function to move assets from branch chain to root omnichain environment.

_Called in response to Bridge Agent Executor._

\*Since the input data is encodePacked we need to parse it:

1. First byte is the number of assets to be bridged in. Equals length of all arrays.
2. Next 4 bytes are the nonce of the deposit.
3. Last 32 bytes after the token related information are the chain to bridge to.
4. Token related information starts at index PARAMS_TKN_START is encoded as follows:
5. N \* 32 bytes for the hToken address.
6. N \* 32 bytes for the underlying token address.
7. N \* 32 bytes for the amount of hTokens to be bridged in.
8. N \* 32 bytes for the amount of underlying tokens to be bridged in.
9. Each of the 4 token related arrays are of length N and start at the following indexes:
10. PARAMS_TKN_START [hToken address has no offset from token information start].
11. PARAMS_TKN_START + (PARAMS_ADDRESS_SIZE \* N)
12. PARAMS_TKN_START + (PARAMS_AMT_OFFSET \* N)
13. PARAMS_TKN_START + (PARAMS_DEPOSIT_OFFSET _ N)_

```solidity
function bridgeInMultiple(address _recipient, DepositMultipleParams calldata _dParams, uint256 _srcChainId) external;
```

**Parameters**

| Name          | Type                    | Description                                    |
| ------------- | ----------------------- | ---------------------------------------------- |
| `_recipient`  | `address`               | recipient of bridged tokens.                   |
| `_dParams`    | `DepositMultipleParams` | Cross-Chain Deposit of Multiple Tokens Params. |
| `_srcChainId` | `uint256`               | chain to bridge from.                          |

### approveBranchBridgeAgent

Adds a new branch bridge agent to a given branch chainId

```solidity
function approveBranchBridgeAgent(uint256 _branchChainId) external;
```

**Parameters**

| Name             | Type      | Description                 |
| ---------------- | --------- | --------------------------- |
| `_branchChainId` | `uint256` | chainId of the branch chain |

### syncBranchBridgeAgent

Updates the address of the branch bridge agent

```solidity
function syncBranchBridgeAgent(address _newBranchBridgeAgent, uint256 _branchChainId) external;
```

**Parameters**

| Name                    | Type      | Description                            |
| ----------------------- | --------- | -------------------------------------- |
| `_newBranchBridgeAgent` | `address` | address of the new branch bridge agent |
| `_branchChainId`        | `uint256` | chainId of the branch chain            |

### transferManagementRole

Allows current bridge agent manager to allowlist a successor address.

```solidity
function transferManagementRole(address _newManager) external;
```

**Parameters**

| Name          | Type      | Description                              |
| ------------- | --------- | ---------------------------------------- |
| `_newManager` | `address` | address of the new bridge agent manager. |

### acceptManagementRole

Used by the new bridge agent manager to accept the management role.

```solidity
function acceptManagementRole() external;
```

## Events

### LogExecute

```solidity
event LogExecute(uint256 indexed depositNonce, uint256 indexed srcChainId);
```

### LogFallback

```solidity
event LogFallback(uint256 indexed settlementNonce, uint256 indexed dstChainId);
```

## Errors

### ExecutionFailure

```solidity
error ExecutionFailure();
```

### GasErrorOrRepeatedTx

```solidity
error GasErrorOrRepeatedTx();
```

### AlreadyExecutedTransaction

```solidity
error AlreadyExecutedTransaction();
```

### UnknownFlag

```solidity
error UnknownFlag();
```

### NotDao

```solidity
error NotDao();
```

### LayerZeroUnauthorizedEndpoint

```solidity
error LayerZeroUnauthorizedEndpoint();
```

### LayerZeroUnauthorizedCaller

```solidity
error LayerZeroUnauthorizedCaller();
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

### UnrecognizedLocalBridgeAgent

```solidity
error UnrecognizedLocalBridgeAgent();
```

### UnrecognizedBridgeAgentManager

```solidity
error UnrecognizedBridgeAgentManager();
```

### UnrecognizedRouter

```solidity
error UnrecognizedRouter();
```

### UnrecognizedUnderlyingAddress

```solidity
error UnrecognizedUnderlyingAddress();
```

### UnrecognizedLocalAddress

```solidity
error UnrecognizedLocalAddress();
```

### SettlementRetryUnavailable

```solidity
error SettlementRetryUnavailable();
```

### SettlementRetryUnavailableUseCallout

```solidity
error SettlementRetryUnavailableUseCallout();
```

### SettlementRedeemUnavailable

```solidity
error SettlementRedeemUnavailable();
```

### SettlementRetrieveUnavailable

```solidity
error SettlementRetrieveUnavailable();
```

### NotSettlementOwner

```solidity
error NotSettlementOwner();
```

### ContractsVirtualAccountNotAllowed

```solidity
error ContractsVirtualAccountNotAllowed();
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

### InvalidInputParamsLength

```solidity
error InvalidInputParamsLength();
```

### CallerIsNotPool

```solidity
error CallerIsNotPool();
```

### AmountsAreZero

```solidity
error AmountsAreZero();
```
