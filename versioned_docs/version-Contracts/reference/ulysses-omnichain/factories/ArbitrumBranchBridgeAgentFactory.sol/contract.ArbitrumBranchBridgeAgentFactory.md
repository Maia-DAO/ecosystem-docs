# ArbitrumBranchBridgeAgentFactory
[Git Source](https://github.com/Maia-DAO/test-env-V2/blob/84b5f9e8695c91ddb02f27bb3dfb1c652f55ced4/ulysses-omnichain/factories/ArbitrumBranchBridgeAgentFactory.sol)

**Inherits:**
[BranchBridgeAgentFactory](/ulysses-omnichain/factories/BranchBridgeAgentFactory.sol/contract.BranchBridgeAgentFactory.md)

**Author:**
MaiaDAO

Factory contract for allowing permissionless deployment of
new Arbitrum Branch Bridge Agents which are in charge of
managing the deposit and withdrawal of assets between the
branch chains and the omnichain environment.


## Functions
### constructor

Constructor for Bridge Agent.


```solidity
constructor(
    uint256 _rootChainId,
    address _rootBridgeAgentFactoryAddress,
    WETH9 _wrappedNativeToken,
    address _localAnyCallAddress,
    address _localAnyCallExecutorAddress,
    address _localCoreBranchRouterAddress,
    address _localPortAddress,
    address _owner
)
    BranchBridgeAgentFactory(
        _rootChainId,
        _rootChainId,
        _rootBridgeAgentFactoryAddress,
        _wrappedNativeToken,
        _localAnyCallAddress,
        _localAnyCallExecutorAddress,
        _localCoreBranchRouterAddress,
        _localPortAddress,
        _owner
    );
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_rootChainId`|`uint256`|Local Chain Id.|
|`_rootBridgeAgentFactoryAddress`|`address`|Root Bridge Agent Factory Address.|
|`_wrappedNativeToken`|`WETH9`|Local Wrapped Native Token.|
|`_localAnyCallAddress`|`address`|Local Anycall Address.|
|`_localAnyCallExecutorAddress`|`address`|Local Anyexec Address.|
|`_localCoreBranchRouterAddress`|`address`|Local Core Branch Router Address.|
|`_localPortAddress`|`address`|Local Port Address.|
|`_owner`|`address`|Owner of the contract.|


### initialize


```solidity
function initialize(address _coreRootBridgeAgent) external override onlyOwner;
```

### createBridgeAgent

Creates a new bridge agent for a branch chain.


```solidity
function createBridgeAgent(
    address _newBranchRouterAddress,
    address _rootBridgeAgentAddress,
    address _rootBridgeAgentFactoryAddress
) external virtual override returns (address newBridgeAgent);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_newBranchRouterAddress`|`address`|Address of the new branch router.|
|`_rootBridgeAgentAddress`|`address`|Address of the root bridge agent.|
|`_rootBridgeAgentFactoryAddress`|`address`||


