# ArbitrumCoreBranchRouter

[Git Source](https://github.com/Maia-DAO/2023-09-maia-remediations/blob/main/src/ArbitrumCoreBranchRouter.sol)

**Inherits:**
[CoreBranchRouter](/src/ulysses-omnichain/CoreBranchRouter.sol/contract.CoreBranchRouter.md)

**Author:**
MaiaDAO

Core Branch Router implementation for Arbitrum deployment.
This contract is responsible for permissionlessly adding new
tokens or Bridge Agents to the system as well as key governance
enabled system functions (i.e. `addBridgeAgentFactory`).

\*The function `addGlobalToken` is is not available since it's used
to add a global token to a given Branch Chain and the Arbitrum Branch
is already in the same network as the Root Environment and all the global
tokens.

 **CROSS-CHAIN MESSAGING FUNCIDs**
 Func IDs for calling these functions through messaging layer

 | FUNC ID | FUNC NAME                      |
 | ------- | ------------------------------ |
 | 0x02    | addBridgeAgent                 |
 | 0x03    | toggleBranchBridgeAgentFactory |
 | 0x04    | toggleStrategyToken            |
 | 0x05    | updateStrategyToken            |
 | 0x06    | togglePortStrategy             |
 | 0x07    | updatePortStrategy             |
 | 0x08    | setCoreBranchRouter            |
 | 0x09    | sweep                          |

## Functions

### constructor

Constructor for Arbitrum Core Branch Router.

```solidity
constructor() CoreBranchRouter(address(0));
```

### addLocalToken

This function is used to add a local token to the system.

```solidity
function addLocalToken(address _underlyingAddress, GasParams calldata) external payable override;
```

**Parameters**

| Name                 | Type        | Description                                  |
| -------------------- | ----------- | -------------------------------------------- |
| `_underlyingAddress` | `address`   | Address of the underlying token to be added. |
| `<none>`             | `GasParams` |                                              |

### \_receiveAddBridgeAgent

Function to deploy/add a token already active in the global environment in the Root Chain.

_Must be called from another chain._

_FUNC ID: 2_

```solidity
function _receiveAddBridgeAgent(
    address _newBranchRouter,
    address _branchBridgeAgentFactory,
    address _rootBridgeAgent,
    address _rootBridgeAgentFactory,
    address _refundee,
    GasParams memory _gParams
) internal override;
```

**Parameters**

| Name                        | Type        | Description                                     |
| --------------------------- | ----------- | ----------------------------------------------- |
| `_newBranchRouter`          | `address`   | the address of the new branch router.           |
| `_branchBridgeAgentFactory` | `address`   | the address of the branch bridge agent factory. |
| `_rootBridgeAgent`          | `address`   | the address of the root bridge agent.           |
| `_rootBridgeAgentFactory`   | `address`   | the address of the root bridge agent factory.   |
| `_refundee`                 | `address`   | the address of the excess gas receiver.         |
| `_gParams`                  | `GasParams` | Gas parameters for remote execution.            |

### executeNoSettlement

```solidity
function executeNoSettlement(bytes calldata _params) external payable override requiresAgentExecutor;
```
