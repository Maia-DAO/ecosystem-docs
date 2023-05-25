---
id: ArbitrumCoreBranchRouter
title: ArbitrumCoreBranchRouter
---

**Inherits:**
[CoreBranchRouter](./CoreBranchRouter)

**Author:**
MaiaDAO

Core Branch Router implementation for Arbitrum deployment.
This contract is responsible for permissionlessly adding new
tokens or Bridge Agents to the system as well as key governance
enabled system functions (i.e. `addBridgeAgentFactory`).

The function `addGlobalToken` is used to add a global token to a
given Branch Chain is not available since the Arbitrum Branch is
in the same network as the Root Environment.

Func IDs for calling these functions through messaging layer:

| FUNC ID | FUNC NAME                      |
| ------- | ------------------------------ |
| 0x02    | addBridgeAgent                 |
| 0x03    | toggleBranchBridgeAgentFactory |
| 0x04    | removeBranchBridgeAgent        |
| 0x05    | manageStrategyToken            |
| 0x06    | managePortStrategy             |

## Functions

### constructor

```solidity
constructor(address _hTokenFactoryAddress, address _localPortAddress)
    CoreBranchRouter(_hTokenFactoryAddress, _localPortAddress);
```

### addLocalToken

This function is used to add a local token to the system.

```solidity
function addLocalToken(address _underlyingAddress) external payable override;
```

**Parameters**

| Name                 | Type      | Description                                  |
| -------------------- | --------- | -------------------------------------------- |
| `_underlyingAddress` | `address` | Address of the underlying token to be added. |

### \_receiveAddBridgeAgent

Add a new Branch Bridge Agent and respective Router to a Root Bridge Agent.

_FUNC ID: 4_

```solidity
function _receiveAddBridgeAgent(
    address _newBranchRouter,
    address _branchBridgeAgentFactory,
    address _rootBridgeAgent,
    address _rootBridgeAgentFactory,
    uint128
) internal override;
```

**Parameters**

| Name                        | Type      | Description                                     |
| --------------------------- | --------- | ----------------------------------------------- |
| `_newBranchRouter`          | `address` | the address of the new branch router.           |
| `_branchBridgeAgentFactory` | `address` | the address of the branch bridge agent factory. |
| `_rootBridgeAgent`          | `address` | the address of the root bridge agent.           |
| `_rootBridgeAgentFactory`   | `address` | the address of the root bridge agent factory.   |
| `<none>`                    | `uint128` |                                                 |

### anyExecuteNoSettlement

```solidity
function anyExecuteNoSettlement(bytes calldata _data)
    external
    override
    requiresAgentExecutor
    returns (bool success, bytes memory result);
```
