---
id: BaseBranchRouter
title: BaseBranchRouter
---

**Inherits:**
[IBranchRouter](./interfaces/IBranchRouter), Ownable

## State Variables

### localBridgeAgentAddress

Address for local Branch Bridge Agent who processes requests and ineracts with local port.

```solidity
address public localBridgeAgentAddress;
```

### bridgeAgentExecutorAddress

Local Bridge Agent Executor Address.

```solidity
address public bridgeAgentExecutorAddress;
```

### \_unlocked

```solidity
uint256 internal _unlocked = 1;
```

## Functions

### constructor

```solidity
constructor();
```

### initialize

Contract state initialization function.

```solidity
function initialize(address _localBridgeAgentAddress) external onlyOwner;
```

### getDepositEntry

External function that returns a given deposit entry.

```solidity
function getDepositEntry(uint32 _depositNonce) external view returns (Deposit memory);
```

**Parameters**

| Name            | Type     | Description                  |
| --------------- | -------- | ---------------------------- |
| `_depositNonce` | `uint32` | Identifier for user deposit. |

### callOut

Function to perform a call to the Root Omnichain Router without token deposit.

_ACTION ID: 1 (Call without deposit)_

```solidity
function callOut(bytes calldata params, uint128 remoteExecutionGas) external payable lock;
```

**Parameters**

| Name                 | Type      | Description                                           |
| -------------------- | --------- | ----------------------------------------------------- |
| `params`             | `bytes`   | RLP enconded parameters to execute on the root chain. |
| `remoteExecutionGas` | `uint128` |                                                       |

### callOutAndBridge

Function to perform a call to the Root Omnichain Router while depositing a single asset.

_ACTION ID: 2 (Call with single deposit)_

```solidity
function callOutAndBridge(bytes calldata params, DepositInput memory dParams, uint128 remoteExecutionGas)
    external
    payable
    lock;
```

**Parameters**

| Name                 | Type           | Description                                           |
| -------------------- | -------------- | ----------------------------------------------------- |
| `params`             | `bytes`        | RLP enconded parameters to execute on the root chain. |
| `dParams`            | `DepositInput` | additional token deposit parameters.                  |
| `remoteExecutionGas` | `uint128`      |                                                       |

### callOutAndBridgeMultiple

Function to perform a call to the Root Omnichain Router while depositing two or more assets.

_ACTION ID: 3 (Call with multiple deposit)_

```solidity
function callOutAndBridgeMultiple(
    bytes calldata params,
    DepositMultipleInput memory dParams,
    uint128 remoteExecutionGas
) external payable lock;
```

**Parameters**

| Name                 | Type                   | Description                                           |
| -------------------- | ---------------------- | ----------------------------------------------------- |
| `params`             | `bytes`                | RLP enconded parameters to execute on the root chain. |
| `dParams`            | `DepositMultipleInput` | additional token deposit parameters.                  |
| `remoteExecutionGas` | `uint128`              |                                                       |

### retrySettlement

External function to retry a failed Settlement entry on the root chain.

```solidity
function retrySettlement(uint32 _settlementNonce, uint128 _gasToBoostSettlement) external payable lock;
```

**Parameters**

| Name                    | Type      | Description                         |
| ----------------------- | --------- | ----------------------------------- |
| `_settlementNonce`      | `uint32`  | Identifier for user settlement.     |
| `_gasToBoostSettlement` | `uint128` | Additional gas to boost settlement. |

### redeemDeposit

External function to retry a failed Deposit entry on this branch chain.

```solidity
function redeemDeposit(uint32 _depositNonce) external lock;
```

**Parameters**

| Name            | Type     | Description                  |
| --------------- | -------- | ---------------------------- |
| `_depositNonce` | `uint32` | Identifier for user deposit. |

### anyExecuteNoSettlement

Function responsible of executing a branch router response.

```solidity
function anyExecuteNoSettlement(bytes calldata)
    external
    virtual
    requiresAgentExecutor
    returns (bool success, bytes memory result);
```

**Parameters**

| Name     | Type    | Description |
| -------- | ------- | ----------- |
| `<none>` | `bytes` |             |

### requiresAgentExecutor

Modifier that verifies msg sender is the Bridge Agent Executor.

```solidity
modifier requiresAgentExecutor();
```

### lock

Modifier for a simple re-entrancy check.

```solidity
modifier lock();
```
