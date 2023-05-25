# CoreBranchRouter

**Inherits:**
[BaseBranchRouter](/ulysses-omnichain/BaseBranchRouter.sol/contract.BaseBranchRouter.md)


## State Variables
### hTokenFactoryAddress
hToken Factory Address.


```solidity
address public hTokenFactoryAddress;
```


### localPortAddress
Local Port Address.


```solidity
address public localPortAddress;
```


## Functions
### constructor


```solidity
constructor(address _hTokenFactoryAddress, address _localPortAddress) BaseBranchRouter;
```

### addGlobalToken

This function is used to add a global token to a branch.


```solidity
function addGlobalToken(address _globalAddress, uint24 _toChain, uint128 _remoteExecutionGas, uint128 _rootExecutionGas)
    external
    payable;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_globalAddress`|`address`|Address of the token to be added.|
|`_toChain`|`uint24`|Chain Id of the chain to which the deposit is being added.|
|`_remoteExecutionGas`|`uint128`|Gas to be used for the remote execution in destination chain.|
|`_rootExecutionGas`|`uint128`|Gas to be saved for the final root execution.|


### addLocalToken

This function is used to add a local token to the system.


```solidity
function addLocalToken(address _underlyingAddress) external payable virtual;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_underlyingAddress`|`address`|Address of the underlying token to be added.|


### _receiveAddGlobalToken

Function to deploy/add a token already active in the global environment in the Root Chain. Must be called from another chain.

*FUNC ID: 1*

*all hTokens have 18 decimals.*


```solidity
function _receiveAddGlobalToken(
    address _globalAddress,
    string memory _name,
    string memory _symbol,
    uint128 _rootExecutionGas
) internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_globalAddress`|`address`|the address of the global virtualized token.|
|`_name`|`string`|token name.|
|`_symbol`|`string`|token symbol.|
|`_rootExecutionGas`|`uint128`|the amount of gas to be used in the root execution.|


### _receiveAddBridgeAgent

Function to deploy/add a token already active in the global environment in the Root Chain. Must be called from another chain.

*FUNC ID: 2*

*all hTokens have 18 decimals.*


```solidity
function _receiveAddBridgeAgent(
    address _newBranchRouter,
    address _branchBridgeAgentFactory,
    address _rootBridgeAgent,
    address _rootBridgeAgentFactory,
    uint128 _remoteExecutionGas
) internal virtual;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_newBranchRouter`|`address`|the address of the new branch router.|
|`_branchBridgeAgentFactory`|`address`|the address of the branch bridge agent factory.|
|`_rootBridgeAgent`|`address`|the address of the root bridge agent.|
|`_rootBridgeAgentFactory`|`address`|the address of the root bridge agent factory.|
|`_remoteExecutionGas`|`uint128`|the amount of gas to be used in the remote execution.|


### _toggleBranchBridgeAgentFactory

Function to add/deactivate a Branch Bridge Agent Factory.

*FUNC ID: 3*


```solidity
function _toggleBranchBridgeAgentFactory(address _newBridgeAgentFactoryAddress) internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_newBridgeAgentFactoryAddress`|`address`|the address of the new local bridge agent factory.|


### _removeBranchBridgeAgent

Function to remove an active Branch Bridge Agent from the system.

*FUNC ID: 4*


```solidity
function _removeBranchBridgeAgent(address _branchBridgeAgent) internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_branchBridgeAgent`|`address`|the address of the local Bridge Agent to be removed.|


### _manageStrategyToken

Function to add / remove a token to be used by Port Strategies.

*FUNC ID: 5*


```solidity
function _manageStrategyToken(address _underlyingToken, uint256 _minimumReservesRatio) internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_underlyingToken`|`address`|the address of the underlying token.|
|`_minimumReservesRatio`|`uint256`|the minimum reserves ratio the Port must have.|


### _managePortStrategy

Function to deploy/add a token already active in the global enviornment in the Root Chain. Must be called from another chain.

*FUNC ID: 6*


```solidity
function _managePortStrategy(
    address _portStrategy,
    address _underlyingToken,
    uint256 _dailyManagementLimit,
    bool _isUpdateDailyLimit
) internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_portStrategy`|`address`|the address of the port strategy.|
|`_underlyingToken`|`address`|the address of the underlying token.|
|`_dailyManagementLimit`|`uint256`|the daily management limit.|
|`_isUpdateDailyLimit`|`bool`|if the daily limit is being updated.|


### anyExecuteNoSettlement

Function responsible of executing a branch router response.


```solidity
function anyExecuteNoSettlement(bytes calldata _data)
    external
    virtual
    override
    requiresAgentExecutor
    returns (bool success, bytes memory result);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_data`|`bytes`||


### fallback

_receiveAddGlobalToken
_receiveAddBridgeAgent
_toggleBranchBridgeAgentFactory
_removeBranchBridgeAgent
_manageStrategyToken
_managePortStrategy
Unrecognized Function Selector


```solidity
fallback() external payable;
```

## Errors
### UnrecognizedBridgeAgent

```solidity
error UnrecognizedBridgeAgent();
```

### UnrecognizedBridgeAgentFactory

```solidity
error UnrecognizedBridgeAgentFactory();
```

