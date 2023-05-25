# BranchBridgeAgentFactory

**Inherits:**
Ownable, [IBranchBridgeAgentFactory](/ulysses-omnichain/interfaces/IBranchBridgeAgentFactory.sol/interface.IBranchBridgeAgentFactory.md)


## State Variables
### localChainId
Local Chain Id


```solidity
uint256 public immutable localChainId;
```


### rootChainId
Root Chain Id


```solidity
uint256 public immutable rootChainId;
```


### rootBridgeAgentFactoryAddress
Root Bridge Agent Factory Address


```solidity
address public immutable rootBridgeAgentFactoryAddress;
```


### wrappedNativeToken
Local Wrapped Native Token


```solidity
WETH9 public immutable wrappedNativeToken;
```


### localCoreBranchRouterAddress
Local Core Branch Router Address.


```solidity
address public immutable localCoreBranchRouterAddress;
```


### localPortAddress
Root Port Address


```solidity
address public immutable localPortAddress;
```


### localAnyCallAddress
Local Anycall Address


```solidity
address public immutable localAnyCallAddress;
```


### localAnyCallExecutorAddress
Local Anyexec Address


```solidity
address public immutable localAnyCallExecutorAddress;
```


## Functions
### constructor

Constructor for Bridge Agent.


```solidity
constructor(
    uint256 _localChainId,
    uint256 _rootChainId,
    address _rootBridgeAgentFactoryAddress,
    WETH9 _wrappedNativeToken,
    address _localAnyCallAddress,
    address _localAnyCallExecutorAddress,
    address _localCoreBranchRouterAddress,
    address _localPortAddress,
    address _owner
);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_localChainId`|`uint256`|Local Chain Id.|
|`_rootChainId`|`uint256`|Root Chain Id.|
|`_rootBridgeAgentFactoryAddress`|`address`|Root Bridge Agent Factory Address.|
|`_wrappedNativeToken`|`WETH9`|Local Wrapped Native Token.|
|`_localAnyCallAddress`|`address`|Local Anycall Address.|
|`_localAnyCallExecutorAddress`|`address`|Local Anyexec Address.|
|`_localCoreBranchRouterAddress`|`address`|Local Core Branch Router Address.|
|`_localPortAddress`|`address`|Local Port Address.|
|`_owner`|`address`|Owner of the contract.|


### initialize


```solidity
function initialize(address _coreRootBridgeAgent) external virtual onlyOwner;
```

### createBridgeAgent

Creates a new bridge agent for a new branch chain.


```solidity
function createBridgeAgent(
    address _newBranchRouterAddress,
    address _rootBridgeAgentAddress,
    address _rootBridgeAgentFactoryAddress
) external virtual returns (address newBridgeAgent);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_newBranchRouterAddress`|`address`|Address of the new branch router.|
|`_rootBridgeAgentAddress`|`address`|Address of the root bridge agent.|
|`_rootBridgeAgentFactoryAddress`|`address`||


