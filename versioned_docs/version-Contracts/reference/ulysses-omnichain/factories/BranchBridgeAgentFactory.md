# BranchBridgeAgentFactory
[Git Source](https://github.com/Maia-DAO/2023-09-maia-remediations/blob/main/src/factories/BranchBridgeAgentFactory.sol)

**Inherits:**
Ownable, [IBranchBridgeAgentFactory](/src/ulysses-omnichain/interfaces/IBranchBridgeAgentFactory.md)

**Author:**
MaiaDAO

Factory contract for allowing permissionless deployment of
new Branch Bridge Agents which are in charge of
managing the deposit and withdrawal of assets between the
branch chains and the omnichain environment.


## State Variables
### localChainId
Local Chain Id.


```solidity
uint16 public immutable localChainId;
```


### rootChainId
Root Chain Id.


```solidity
uint16 public immutable rootChainId;
```


### rootBridgeAgentFactoryAddress
Root Bridge Agent Factory Address.


```solidity
address public immutable rootBridgeAgentFactoryAddress;
```


### localCoreBranchRouterAddress
Local Core Branch Router Address.


```solidity
address public immutable localCoreBranchRouterAddress;
```


### localPortAddress
Root Port Address.


```solidity
address public immutable localPortAddress;
```


### lzEndpointAddress
Local Layer Zero Endpoint for cross-chain communication.


```solidity
address public immutable lzEndpointAddress;
```


## Functions
### constructor

Constructor for Bridge Agent.


```solidity
constructor(
    uint16 _localChainId,
    uint16 _rootChainId,
    address _rootBridgeAgentFactoryAddress,
    address _lzEndpointAddress,
    address _localCoreBranchRouterAddress,
    address _localPortAddress,
    address _owner
);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_localChainId`|`uint16`|Local Chain Layer Zero Id.|
|`_rootChainId`|`uint16`|Root Chain Layer Zero Id.|
|`_rootBridgeAgentFactoryAddress`|`address`|Root Bridge Agent Factory Address.|
|`_lzEndpointAddress`|`address`|Layer Zero Endpoint for cross-chain communication.|
|`_localCoreBranchRouterAddress`|`address`|Local Core Branch Router Address.|
|`_localPortAddress`|`address`|Local Branch Port Address.|
|`_owner`|`address`|Owner of the contract.|


### initialize

Function to initialize the contract.


```solidity
function initialize(address _coreRootBridgeAgent) external onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_coreRootBridgeAgent`|`address`|Address of the Root Chain's Core Root Bridge Agent.|


### createBridgeAgent

Creates a new bridge agent for a new branch chain.


```solidity
function createBridgeAgent(
    address _newBranchRouterAddress,
    address _rootBridgeAgentAddress,
    address _rootBridgeAgentFactoryAddress
) external returns (address newBridgeAgent);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_newBranchRouterAddress`|`address`|Address of the new branch router.|
|`_rootBridgeAgentAddress`|`address`|Address of the root bridge agent to connect to.|
|`_rootBridgeAgentFactoryAddress`|`address`||


### _deployBridgeAgent

Internal function to deploy a new branch bridge agent.


```solidity
function _deployBridgeAgent(address _rootBridgeAgentAddress, address _newBranchRouterAddress)
    internal
    virtual
    returns (address newBridgeAgent);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_rootBridgeAgentAddress`|`address`|Address of the root bridge agent to connect to.|
|`_newBranchRouterAddress`|`address`|Address of the new branch router.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`newBridgeAgent`|`address`|Address of the newly deployed bridge agent.|


