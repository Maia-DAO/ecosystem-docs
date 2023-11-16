# IBranchBridgeAgentFactory
[Git Source](https://github.com/Maia-DAO/2023-09-maia-remediations/blob/main/src/interfaces/IBranchBridgeAgentFactory.sol)

**Author:**
MaiaDAO

Factory contract for allowing permissionless deployment of
new Branch Bridge Agents which are in charge of managing the
deposit and withdrawal of assets between the branch chains
and the omnichain environment.


## Functions
### createBridgeAgent

Creates a new Branch Bridge Agent.


```solidity
function createBridgeAgent(
    address newRootRouterAddress,
    address rootBridgeAgentAddress,
    address _rootBridgeAgentFactoryAddress
) external returns (address newBridgeAgent);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newRootRouterAddress`|`address`|New Root Router Address.|
|`rootBridgeAgentAddress`|`address`|Root Bridge Agent Address.|
|`_rootBridgeAgentFactoryAddress`|`address`|Root Bridge Agent Factory Address.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`newBridgeAgent`|`address`|New Bridge Agent Address.|


## Events
### BridgeAgentAdded

```solidity
event BridgeAgentAdded(address indexed _bridgeAgent);
```

## Errors
### UnrecognizedCoreBranchRouter

```solidity
error UnrecognizedCoreBranchRouter();
```

### InvalidInputCannotBeZeroAddress

```solidity
error InvalidInputCannotBeZeroAddress();
```

### InvalidInputFactoryMismatch

```solidity
error InvalidInputFactoryMismatch();
```

