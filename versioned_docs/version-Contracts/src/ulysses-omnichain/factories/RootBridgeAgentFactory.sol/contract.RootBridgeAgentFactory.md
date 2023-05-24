# RootBridgeAgentFactory
[Git Source](https://github.com/Maia-DAO/test-env-V2/blob/84b5f9e8695c91ddb02f27bb3dfb1c652f55ced4/ulysses-omnichain/factories/RootBridgeAgentFactory.sol)

**Inherits:**
[IRootBridgeAgentFactory](/ulysses-omnichain/interfaces/IRootBridgeAgentFactory.sol/interface.IRootBridgeAgentFactory.md)


## State Variables
### rootChainId
Root Chain Id


```solidity
uint24 public immutable rootChainId;
```


### wrappedNativeToken
Local Wrapped Native Token


```solidity
WETH9 public immutable wrappedNativeToken;
```


### rootPortAddress
Root Port Address


```solidity
address public immutable rootPortAddress;
```


### daoAddress
DAO Address


```solidity
address public immutable daoAddress;
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


### getBridgeAgentManager
Bridge Agent Manager


```solidity
mapping(address => address) public getBridgeAgentManager;
```


## Functions
### constructor

Constructor for Bridge Agent.


```solidity
constructor(
    uint24 _rootChainId,
    WETH9 _wrappedNativeToken,
    address _localAnyCallAddress,
    address _rootPortAddress,
    address _daoAddress
);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_rootChainId`|`uint24`|Root Chain Id.|
|`_wrappedNativeToken`|`WETH9`|Local Wrapped Native Token.|
|`_localAnyCallAddress`|`address`|Local Anycall Address.|
|`_rootPortAddress`|`address`|Local Port Address.|
|`_daoAddress`|`address`|DAO Address.|


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


