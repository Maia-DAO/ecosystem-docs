---
id: ArbitrumBranchBridgeAgent
title: ArbitrumBranchBridgeAgent
---

**Inherits:**
[BranchBridgeAgent](./BranchBridgeAgent)

**Author:**
MaiaDAO

This contract is used for interfacing with Users/Routers acting as a middleman
to access Anycall cross-chain messaging and Port communication for asset management
connecting Arbitrum Branch Chain contracts and the root omnichain environment.

_Execution gas from remote interactions is managed by `RootBridgeAgent` contract._

## Functions

### constructor

```solidity
constructor(
    WETH9 _wrappedNativeToken,
    uint256 _localChainId,
    address _rootBridgeAgentAddress,
    address _localAnyCallAddress,
    address _localAnyCallExecutorAddress,
    address _localRouterAddress,
    address _localPortAddress
)
    BranchBridgeAgent(
        _wrappedNativeToken,
        _localChainId,
        _localChainId,
        _rootBridgeAgentAddress,
        _localAnyCallAddress,
        _localAnyCallExecutorAddress,
        _localRouterAddress,
        _localPortAddress
    );
```

### depositToPort

Function to deposit a single asset to the local Port.

```solidity
function depositToPort(address underlyingAddress, uint256 amount) external payable lock;
```

**Parameters**

| Name                | Type      | Description                                      |
| ------------------- | --------- | ------------------------------------------------ |
| `underlyingAddress` | `address` | address of the underlying asset to be deposited. |
| `amount`            | `uint256` | amount to be deposited.                          |

### withdrawFromPort

Function to withdraw a single asset to the local Port.

```solidity
function withdrawFromPort(address localAddress, uint256 amount) external payable lock;
```

**Parameters**

| Name           | Type      | Description                   |
| -------------- | --------- | ----------------------------- |
| `localAddress` | `address` | local hToken to be withdrawn. |
| `amount`       | `uint256` | amount to be withdrawn.       |

### \_depositGas

Internal function to move gas to RootBridgeAgent for remote chain execution.

```solidity
function _depositGas(uint128 _gasToBridgeOut) internal override;
```

**Parameters**

| Name              | Type      | Description                    |
| ----------------- | --------- | ------------------------------ |
| `_gasToBridgeOut` | `uint128` | amount of gas to be deposited. |

### \_forceRevert

This function is used to revert the current transaction with a "no enough budget" message.

```solidity
function _forceRevert() internal pure override;
```

### \_performCall

Internal function performs call to AnycallProxy Contract for cross-chain messaging.

```solidity
function _performCall(bytes memory _callData) internal override;
```

**Parameters**

| Name        | Type    | Description                                       |
| ----------- | ------- | ------------------------------------------------- |
| `_callData` | `bytes` | bytes of the call to be sent to the AnycallProxy. |

### \_gasSwapIn

Internal that clears gas allocated for usage with remote request

```solidity
function _gasSwapIn(bytes memory gasData) internal override returns (uint256 gasAmount);
```

### \_payExecutionGas

Internal function to pay for execution gas. Overwritten Gas is processed by Root Bridge Agent contract - `depositedGas` is used to pay for execution and `gasToBridgeOut`is cleared to recipient.

```solidity
function _payExecutionGas(address _recipient, uint256) internal override;
```

### \_payFallbackGas

Internal function to pay for fallback gas. Overwritten no cross-chain messaging fallback between Arbitrum Branch Bridge Agent and Root Bridge Agent.

```solidity
function _payFallbackGas(uint32, uint256) internal override;
```

### \_replenishGas

Internal function to deposit gas to the AnycallProxy.

```solidity
function _replenishGas(uint256) internal override;
```

**Parameters**

| Name     | Type      | Description |
| -------- | --------- | ----------- |
| `<none>` | `uint256` |             |

### \_requiresExecutor

Verifies the caller is the Anycall Executor. Internal function used in modifier to reduce contract bytesize.

```solidity
function _requiresExecutor() internal view override;
```

### \_requiresFallbackGas

Verifies enough gas is deposited to pay for an eventual fallback call. Reuse to reduce contract bytesize.

```solidity
function _requiresFallbackGas() internal view override;
```

### \_requiresFallbackGas

Verifies enough gas is deposited to pay for an eventual fallback call.

```solidity
function _requiresFallbackGas(uint256) internal view override;
```

## Errors

### GasErrorOrRepeatedTx

```solidity
error GasErrorOrRepeatedTx();
```
