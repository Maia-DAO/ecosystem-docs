# IBranchBridgeAgent

[Git Source](https://github.com/Maia-DAO/2023-09-maia-remediations/blob/main/src/interfaces/IBranchBridgeAgent.sol)

**Inherits:**
[ILayerZeroReceiver](/src/ulysses-omnichain/interfaces/ILayerZeroReceiver.md)

**Author:**
MaiaDAO

Contract for deployment in Branch Chains of Omnichain System, responsible for
interfacing with Users and Routers acting as a middleman to access LayerZero cross-chain
messaging and requesting/depositing assets in the Branch Chain's Ports.

Bridge Agents allow for the encapsulation of business logic as well as the standardized
cross-chain communication, allowing for the creation of custom Routers to perform
actions as a response to remote user requests. This contract for deployment in the Branch
Chains of the Ulysses Omnichain Liquidity System.
The Branch Bridge Agent is responsible for sending/receiving requests to/from the LayerZero Messaging Layer
for execution, as well as requests tokens clearances and tx execution to the `BranchBridgeAgentExecutor`.
Remote execution is "sandboxed" within 2 different layers/nestings:

- 1: Upon receiving a request from LayerZero Messaging Layer to avoid blocking future requests due to
  execution reversion, ensuring our app is Non-Blocking.
  (See https://github.com/LayerZero-Labs/solidity-examples/blob/8e62ebc886407aafc89dbd2a778e61b7c0a25ca0/contracts/lzApp/NonblockingLzApp.sol)
- 2: The call to `BranchBridgeAgentExecutor` is in charge of requesting token deposits for each remote
  interaction as well as performing the Router calls, if any of the calls initiated by the Router lead
  to an invalid state change both the token deposit clearances as well as the external interactions
  will be reverted and caught by the `BranchBridgeAgent`.

**BRANCH BRIDGE AGENT SETTLEMENT FLAGs** Func IDs for calling these functions through the messaging layer

| ID   | DESCRIPTION                                                                                       |
| ---- | ------------------------------------------------------------------------------------------------- |
| 0x01 | Call to Branch without Settlement.                                                                |
| 0x02 | Call to Branch with Settlement.                                                                   |
| 0x03 | Call to Branch with Settlement of Multiple Tokens.                                                |
| 0x04 | Call to `retrieveSettlement()`. (trigger `_fallback` for a settlement that has not been executed) |
| 0x05 | Call to `_fallback()`. (reopens a deposit for asset redemption)                                   |

Encoding Scheme for different Root Bridge Agent Deposit Flags:

- ht = hToken
- t = Token
- A = Amount
- D = Deposit
- b = bytes
- n = number of assets

| Flag   | Deposit Info                | Token Info              | DATA |
| ------ | --------------------------- | ----------------------- | ---- |
| 1 byte | 4-25 bytes                  | 104 or (128 \* n) bytes | ...  |
|        |                             | hT - t - A - D          |      |
| 0x1    | 20b(recipient) + 4b(nonce)  |          ---            | ...  |
| 0x2    | 20b(recipient) + 4b(nonce)  | 20b + 20b + 32b + 32b   | ...  |
| 0x3    | 1b(n) + 20b(recipient) + 4b | 32b + 32b + 32b + 32b   | ...  |

**Generic Contract Interaction Flow:**
BridgeAgent.lzReceive() -> BridgeAgentExecutor.execute() -> Router.execute()

## Functions

### localPortAddress

External function to return the Branch Chain's Local Port Address.

```solidity
function localPortAddress() external view returns (address);
```

**Returns**

| Name     | Type      | Description                               |
| -------- | --------- | ----------------------------------------- |
| `<none>` | `address` | address of the Branch Chain's Local Port. |

### bridgeAgentExecutorAddress

External function to return the Branch Bridge Agent Executor Address.

```solidity
function bridgeAgentExecutorAddress() external view returns (address);
```

**Returns**

| Name     | Type      | Description                                  |
| -------- | --------- | -------------------------------------------- |
| `<none>` | `address` | address of the Branch Bridge Agent Executor. |

### getDepositEntry

External function that returns a given deposit entry.

```solidity
function getDepositEntry(uint32 depositNonce) external view returns (Deposit memory);
```

**Parameters**

| Name           | Type     | Description                  |
| -------------- | -------- | ---------------------------- |
| `depositNonce` | `uint32` | Identifier for user deposit. |

### callOut

Function to perform a call to the Root Omnichain Router without token deposit.

_DEPOSIT ID: 1 (Call without deposit)_

```solidity
function callOut(address payable gasRefundee, bytes calldata params, GasParams calldata gasParams) external payable;
```

**Parameters**

| Name          | Type              | Description                                               |
| ------------- | ----------------- | --------------------------------------------------------- |
| `gasRefundee` | `address payable` | Address to return excess gas deposited in `msg.value` to. |
| `params`      | `bytes`           | enconded parameters to execute on the root chain router.  |
| `gasParams`   | `GasParams`       | gas parameters for the cross-chain call.                  |

### callOutAndBridge

Function to perform a call to the Root Omnichain Router while depositing a single asset.

_DEPOSIT ID: 2 (Call with single deposit)_

```solidity
function callOutAndBridge(
    address payable depositOwnerAndGasRefundee,
    bytes calldata params,
    DepositInput memory depositParams,
    GasParams calldata gasParams
) external payable;
```

**Parameters**

| Name                         | Type              | Description                                                                 |
| ---------------------------- | ----------------- | --------------------------------------------------------------------------- |
| `depositOwnerAndGasRefundee` | `address payable` | Deposit owner and address to return excess gas deposited in `msg.value` to. |
| `params`                     | `bytes`           | enconded parameters to execute on the root chain router.                    |
| `depositParams`              | `DepositInput`    | additional token deposit parameters.                                        |
| `gasParams`                  | `GasParams`       | gas parameters for the cross-chain call.                                    |

### callOutAndBridgeMultiple

Function to perform a call to the Root Omnichain Router while depositing two or more assets.

_DEPOSIT ID: 3 (Call with multiple deposit)_

```solidity
function callOutAndBridgeMultiple(
    address payable depositOwnerAndGasRefundee,
    bytes calldata params,
    DepositMultipleInput memory depositParams,
    GasParams calldata gasParams
) external payable;
```

**Parameters**

| Name                         | Type                   | Description                                                                 |
| ---------------------------- | ---------------------- | --------------------------------------------------------------------------- |
| `depositOwnerAndGasRefundee` | `address payable`      | Deposit owner and address to return excess gas deposited in `msg.value` to. |
| `params`                     | `bytes`                | enconded parameters to execute on the root chain router.                    |
| `depositParams`              | `DepositMultipleInput` | additional token deposit parameters.                                        |
| `gasParams`                  | `GasParams`            | gas parameters for the cross-chain call.                                    |

### callOutSigned

Perform a call to the Root Omnichain Router without token deposit with msg.sender information.

_msg.sender is gasRefundee in signed calls._

_DEPOSIT ID: 4 (Call without deposit and verified sender)_

```solidity
function callOutSigned(bytes calldata params, GasParams calldata gasParams) external payable;
```

**Parameters**

| Name        | Type        | Description                                              |
| ----------- | ----------- | -------------------------------------------------------- |
| `params`    | `bytes`     | enconded parameters to execute on the root chain router. |
| `gasParams` | `GasParams` | gas parameters for the cross-chain call.                 |

### callOutSignedAndBridge

Function to perform a call to the Root Omnichain Router while depositing a single asset msg.sender.

_msg.sender is depositOwnerAndGasRefundee in signed calls._

_DEPOSIT ID: 5 (Call with single deposit and verified sender)_

```solidity
function callOutSignedAndBridge(
    bytes calldata params,
    DepositInput memory depositParams,
    GasParams calldata gasParams,
    bool hasFallbackToggled
) external payable;
```

**Parameters**

| Name                 | Type           | Description                                              |
| -------------------- | -------------- | -------------------------------------------------------- |
| `params`             | `bytes`        | enconded parameters to execute on the root chain router. |
| `depositParams`      | `DepositInput` | additional token deposit parameters.                     |
| `gasParams`          | `GasParams`    | gas parameters for the cross-chain call.                 |
| `hasFallbackToggled` | `bool`         | flag to indicate if the fallback function was toggled.   |

### callOutSignedAndBridgeMultiple

Function to perform a call to the Root Omnichain Router while
depositing two or more assets with msg.sender.

_msg.sender is depositOwnerAndGasRefundee in signed calls._

_DEPOSIT ID: 6 (Call with multiple deposit and verified sender)_

```solidity
function callOutSignedAndBridgeMultiple(
    bytes calldata params,
    DepositMultipleInput memory depositParams,
    GasParams calldata gasParams,
    bool hasFallbackToggled
) external payable;
```

**Parameters**

| Name                 | Type                   | Description                                              |
| -------------------- | ---------------------- | -------------------------------------------------------- |
| `params`             | `bytes`                | enconded parameters to execute on the root chain router. |
| `depositParams`      | `DepositMultipleInput` | additional token deposit parameters.                     |
| `gasParams`          | `GasParams`            | gas parameters for the cross-chain call.                 |
| `hasFallbackToggled` | `bool`                 | flag to indicate if the fallback function was toggled.   |

### retryDeposit

Function to perform a call to the Root Omnichain Environment
retrying a failed non-signed deposit that hasn't been executed yet.

```solidity
function retryDeposit(address owner, uint32 depositNonce, bytes calldata params, GasParams calldata gasParams)
    external
    payable;
```

**Parameters**

| Name           | Type        | Description                                     |
| -------------- | ----------- | ----------------------------------------------- |
| `owner`        | `address`   | address of the deposit owner.                   |
| `depositNonce` | `uint32`    | Identifier for user deposit.                    |
| `params`       | `bytes`     | parameters to execute on the root chain router. |
| `gasParams`    | `GasParams` | gas parameters for the cross-chain call.        |

### retryDepositSigned

Function to perform a call to the Root Omnichain Environment
retrying a failed signed deposit that hasn't been executed yet.

```solidity
function retryDepositSigned(
    uint32 depositNonce,
    bytes calldata params,
    GasParams calldata gasParams,
    bool hasFallbackToggled
) external payable;
```

**Parameters**

| Name                 | Type        | Description                                            |
| -------------------- | ----------- | ------------------------------------------------------ |
| `depositNonce`       | `uint32`    | Identifier for user deposit.                           |
| `params`             | `bytes`     | parameters to execute on the root chain router.        |
| `gasParams`          | `GasParams` | gas parameters for the cross-chain call.               |
| `hasFallbackToggled` | `bool`      | flag to indicate if the fallback function was toggled. |

### retrieveDeposit

External function to request tokens back to branch chain after failing omnichain environment interaction.

_DEPOSIT ID: 8_

```solidity
function retrieveDeposit(uint32 depositNonce, GasParams calldata gasParams) external payable;
```

**Parameters**

| Name           | Type        | Description                              |
| -------------- | ----------- | ---------------------------------------- |
| `depositNonce` | `uint32`    | Identifier for user deposit to retrieve. |
| `gasParams`    | `GasParams` | gas parameters for the cross-chain call. |

### redeemDeposit

External function to retry a failed Deposit entry on this branch chain.

```solidity
function redeemDeposit(uint32 depositNonce, address recipient) external;
```

**Parameters**

| Name           | Type      | Description                             |
| -------------- | --------- | --------------------------------------- |
| `depositNonce` | `uint32`  | Identifier for user deposit.            |
| `recipient`    | `address` | address to receive the redeemed tokens. |

### redeemDeposit

External function to retry a failed Deposit entry on this branch chain.

```solidity
function redeemDeposit(uint32 depositNonce, address recipient, address localTokenAddress) external;
```

**Parameters**

| Name                | Type      | Description                             |
| ------------------- | --------- | --------------------------------------- |
| `depositNonce`      | `uint32`  | Identifier for user deposit.            |
| `recipient`         | `address` | address to receive the redeemed tokens. |
| `localTokenAddress` | `address` | address of the local token to redeem.   |

### retrySettlement

External function to retry a failed Settlement entry on the root chain.

_DEPOSIT ID: 7_

```solidity
function retrySettlement(
    uint32 settlementNonce,
    bytes calldata params,
    GasParams[2] calldata gasParams,
    bool hasFallbackToggled
) external payable;
```

**Parameters**

| Name                 | Type           | Description                                                                             |
| -------------------- | -------------- | --------------------------------------------------------------------------------------- |
| `settlementNonce`    | `uint32`       | Identifier for user settlement.                                                         |
| `params`             | `bytes`        | parameters to execute on the root chain router.                                         |
| `gasParams`          | `GasParams[2]` | gas parameters for the cross-chain call to root chain and for the settlement to branch. |
| `hasFallbackToggled` | `bool`         | flag to indicate if the fallback function should be toggled.                            |

### bridgeIn

Function to request balance clearance from a Port to a given user.

```solidity
function bridgeIn(address recipient, address hToken, address token, uint256 amount, uint256 deposit) external;
```

**Parameters**

| Name        | Type      | Description                                                |
| ----------- | --------- | ---------------------------------------------------------- |
| `recipient` | `address` | token receiver.                                            |
| `hToken`    | `address` | local hToken addresse to clear balance for.                |
| `token`     | `address` | native / underlying token addresse to clear balance for.   |
| `amount`    | `uint256` | amounts of hToken to clear balance for.                    |
| `deposit`   | `uint256` | amount of native / underlying tokens to clear balance for. |

### bridgeInMultiple

Function to request balance clearance from a Port to a given address.

```solidity
function bridgeInMultiple(address recipient, SettlementMultipleParams calldata sParams) external;
```

**Parameters**

| Name        | Type                       | Description                             |
| ----------- | -------------------------- | --------------------------------------- |
| `recipient` | `address`                  | token receiver.                         |
| `sParams`   | `SettlementMultipleParams` | encode packed multiple settlement info. |

## Events

### LogExecute

```solidity
event LogExecute(uint256 indexed nonce);
```

### LogFallback

```solidity
event LogFallback(uint256 indexed nonce);
```

## Errors

### UnknownFlag

```solidity
error UnknownFlag();
```

### ExecutionFailure

```solidity
error ExecutionFailure();
```

### LayerZeroUnauthorizedCaller

```solidity
error LayerZeroUnauthorizedCaller();
```

### LayerZeroUnauthorizedEndpoint

```solidity
error LayerZeroUnauthorizedEndpoint();
```

### AlreadyExecutedTransaction

```solidity
error AlreadyExecutedTransaction();
```

### InvalidInput

```solidity
error InvalidInput();
```

### InsufficientGas

```solidity
error InsufficientGas();
```

### NotDepositOwner

```solidity
error NotDepositOwner();
```

### DepositRetryUnavailableUseCallout

```solidity
error DepositRetryUnavailableUseCallout();
```

### DepositRedeemUnavailable

```solidity
error DepositRedeemUnavailable();
```

### DepositAlreadyRetrieved

```solidity
error DepositAlreadyRetrieved();
```

### UnrecognizedRouter

```solidity
error UnrecognizedRouter();
```

### UnrecognizedBridgeAgentExecutor

```solidity
error UnrecognizedBridgeAgentExecutor();
```

### InvalidLocalAddress

```solidity
error InvalidLocalAddress();
```
