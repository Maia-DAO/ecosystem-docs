# ArbitrumBranchBridgeAgentFactory
[Git Source](https://github.com/Maia-DAO/2023-09-maia-remediations/blob/main/src/factories/ArbitrumBranchBridgeAgentFactory.sol)

**Inherits:**
[BranchBridgeAgentFactory](/src/ulysses-omnichain/factories/BranchBridgeAgentFactory.sol/contract.BranchBridgeAgentFactory.md)

**Author:**
MaiaDAO

Factory contract for allowing permissionless deployment of
new Arbitrum Branch Bridge Agents which are in charge of
managing the deposit and withdrawal of assets between the
branch chains and the omnichain environment.


## Functions
### constructor

Constructor for Bridge Agent Factory Contract.


```solidity
constructor(
    uint16 _rootChainId,
    address _rootBridgeAgentFactoryAddress,
    address _localCoreBranchRouterAddress,
    address _localPortAddress,
    address _owner
)
    BranchBridgeAgentFactory(
        _rootChainId,
        _rootChainId,
        _rootBridgeAgentFactoryAddress,
        address(0),
        _localCoreBranchRouterAddress,
        _localPortAddress,
        _owner
    );
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_rootChainId`|`uint16`|Root Chain Layer Zero Id.|
|`_rootBridgeAgentFactoryAddress`|`address`|Root Bridge Agent Factory Address.|
|`_localCoreBranchRouterAddress`|`address`|Local Core Branch Router Address.|
|`_localPortAddress`|`address`|Local Branch Port Address.|
|`_owner`|`address`|Owner of the contract.|


### _deployBridgeAgent

Internal function to deploy a new arbitrum branch bridge agent.


```solidity
function _deployBridgeAgent(address _rootBridgeAgentAddress, address _newBranchRouterAddress)
    internal
    override
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


