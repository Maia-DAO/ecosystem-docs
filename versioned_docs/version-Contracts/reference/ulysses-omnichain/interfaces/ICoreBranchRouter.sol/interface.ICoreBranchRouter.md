# ICoreBranchRouter

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
0x01         | clearDeposit
0x02         | finalizeDeposit
0x03         | finalizeWithdraw
0x04         | clearToken
0x05         | clearTokens
0x06         | addGlobalToken*


## Functions
### addGlobalToken

Function to deploy/add a token already present in the global environment to a branch chain.


```solidity
function addGlobalToken(
    address _globalAddress,
    uint256 _toChain,
    uint128 _remoteExecutionGas,
    uint128 _rootExecutionGas
) external payable;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_globalAddress`|`address`|the address of the global virtualized token.|
|`_toChain`|`uint256`|the chain to which the token will be added.|
|`_remoteExecutionGas`|`uint128`|the amount of gas to be sent to the remote chain.|
|`_rootExecutionGas`|`uint128`|the amount of gas to be sent to the root chain.|


### addLocalToken

Function to add a token that's not available in the global environment to the branch chain.


```solidity
function addLocalToken(address _underlyingAddress) external payable;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_underlyingAddress`|`address`|the address of the token to be added.|


### syncBridgeAgent

Function to link a new bridge agent to the root bridge agent (which resides in Arbitrum).


```solidity
function syncBridgeAgent(address _newBridgeAgentAddress, address _rootBridgeAgentAddress) external payable;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_newBridgeAgentAddress`|`address`|the address of the new local bridge agent.|
|`_rootBridgeAgentAddress`|`address`|the address of the root bridge agent.|


