# RootBridgeAgentFactory
[Git Source](https://github.com/Maia-DAO/2023-09-maia-remediations/blob/main/src/factories/RootBridgeAgentFactory.sol)

**Inherits:**
[IRootBridgeAgentFactory](/src/ulysses-omnichain/interfaces/IRootBridgeAgentFactory.md)

**Author:**
MaiaDAO


## State Variables
### rootChainId
Root Chain Id


```solidity
uint16 public immutable rootChainId;
```


### rootPortAddress
Root Port Address


```solidity
address public immutable rootPortAddress;
```


### lzEndpointAddress
Local Layerzero Enpoint Address


```solidity
address public immutable lzEndpointAddress;
```


## Functions
### constructor

Constructor for Bridge Agent.


```solidity
constructor(uint16 _rootChainId, address _lzEndpointAddress, address _rootPortAddress);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_rootChainId`|`uint16`|Root Chain Layer Zero Id.|
|`_lzEndpointAddress`|`address`|Layer Zero Endpoint for cross-chain communication.|
|`_rootPortAddress`|`address`|Root Port Address.|


### createBridgeAgent

Creates a new Root Bridge Agent.


```solidity
function createBridgeAgent(address _newRootRouterAddress) external returns (address newBridgeAgent);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_newRootRouterAddress`|`address`|New Root Router Address.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`newBridgeAgent`|`address`|New Bridge Agent Address.|


