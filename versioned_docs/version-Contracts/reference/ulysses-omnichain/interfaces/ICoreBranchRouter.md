# ICoreBranchRouter
[Git Source](https://github.com/Maia-DAO/2023-09-maia-remediations/blob/main/src/interfaces/ICoreBranchRouter.sol)

**Author:**
MaiaDAO

Core Branch Router implementation for deployment in Branch Chains.
This contract is allows users to permissionlessly add new tokens
or Bridge Agents to the system. As well as executes key governance
enabled system functions (i.e. `addBridgeAgentFactory`).

*Func IDs for calling these functions through messaging layer:
CROSS-CHAIN MESSAGING FUNCIDs
-----------------------------
FUNC ID      | FUNC NAME
-------------+---------------
0x01         | addGlobalToken
0x02         | addBridgeAgent
0x03         | toggleBranchBridgeAgentFactory
0x04         | removeBranchBridgeAgent
0x05         | manageStrategyToken
0x06         | managePortStrategy*


## Functions
### addGlobalToken

Function to deploy/add a token already present in the global environment to a branch chain.


```solidity
function addGlobalToken(address _globalAddress, uint256 _dstChainId, GasParams[3] calldata _gasParams)
    external
    payable;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_globalAddress`|`address`|the address of the global virtualized token.|
|`_dstChainId`|`uint256`|the chain to which the token will be added.|
|`_gasParams`|`GasParams[3]`|Gas parameters for remote execution.|


### addLocalToken

Function to add a token that's not available in the global environment from this branch chain.


```solidity
function addLocalToken(address _underlyingAddress, GasParams calldata _gasParams) external payable;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_underlyingAddress`|`address`|the address of the token to be added.|
|`_gasParams`|`GasParams`|Gas parameters for remote execution.|


## Errors
### UnrecognizedBridgeAgent

```solidity
error UnrecognizedBridgeAgent();
```

### UnrecognizedBridgeAgentFactory

```solidity
error UnrecognizedBridgeAgentFactory();
```

