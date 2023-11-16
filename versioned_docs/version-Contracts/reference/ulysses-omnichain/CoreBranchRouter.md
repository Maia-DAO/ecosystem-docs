# CoreBranchRouter
[Git Source](https://github.com/Maia-DAO/2023-09-maia-remediations/blob/main/src/CoreBranchRouter.sol)

**Inherits:**
[ICoreBranchRouter](/src/ulysses-omnichain/interfaces/ICoreBranchRouter.md), [BaseBranchRouter](/src/ulysses-omnichain/BaseBranchRouter.md)

**Author:**
MaiaDAO


## State Variables
### hTokenFactoryAddress
hToken Factory Address.


```solidity
address public immutable hTokenFactoryAddress;
```


## Functions
### constructor

Constructor for Core Branch Router.


```solidity
constructor(address _hTokenFactoryAddress) BaseBranchRouter;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_hTokenFactoryAddress`|`address`|Branch hToken Factory Address.|


### addGlobalToken

This function is used to add a global token to a branch.


```solidity
function addGlobalToken(address _globalAddress, uint256 _dstChainId, GasParams[3] calldata _gParams) external payable;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_globalAddress`|`address`|Address of the token to be added.|
|`_dstChainId`|`uint256`|Chain Id of the chain to which the deposit is being added.|
|`_gParams`|`GasParams[3]`|Gas parameters for remote execution.|


### addLocalToken

This function is used to add a local token to the system.


```solidity
function addLocalToken(address _underlyingAddress, GasParams calldata _gParams) external payable virtual;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_underlyingAddress`|`address`|Address of the underlying token to be added.|
|`_gParams`|`GasParams`|Gas parameters for remote execution.|


### executeNoSettlement

Function responsible of executing a branch router response.


```solidity
function executeNoSettlement(bytes calldata _params) external payable virtual override requiresAgentExecutor;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_params`|`bytes`||


### _receiveAddGlobalToken

_receiveAddGlobalToken
_receiveAddBridgeAgent
_toggleBranchBridgeAgentFactory
_toggleStrategyToken
_updateStrategyToken
_togglePortStrategy
_updatePortStrategy
_setCoreBranchRouter
_sweep
Unrecognized Function Selector

Function to deploy/add a token already active in the global environment in the Root Chain.
Must be called from another chain.

*FUNC ID: 1*

*all hTokens have 18 decimals.*


```solidity
function _receiveAddGlobalToken(
    address _globalAddress,
    string memory _name,
    string memory _symbol,
    uint8 _decimals,
    address _refundee,
    GasParams memory _gParams
) internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_globalAddress`|`address`|the address of the global virtualized token.|
|`_name`|`string`|token name.|
|`_symbol`|`string`|token symbol.|
|`_decimals`|`uint8`||
|`_refundee`|`address`|the address of the excess gas receiver.|
|`_gParams`|`GasParams`|Gas parameters for remote execution.|


### _receiveAddBridgeAgent

Function to deploy/add a token already active in the global environment in the Root Chain.
Must be called from another chain.

*FUNC ID: 2*

*all hTokens have 18 decimals.*


```solidity
function _receiveAddBridgeAgent(
    address _newBranchRouter,
    address _branchBridgeAgentFactory,
    address _rootBridgeAgent,
    address _rootBridgeAgentFactory,
    address _refundee,
    GasParams memory _gParams
) internal virtual;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_newBranchRouter`|`address`|the address of the new branch router.|
|`_branchBridgeAgentFactory`|`address`|the address of the branch bridge agent factory.|
|`_rootBridgeAgent`|`address`|the address of the root bridge agent.|
|`_rootBridgeAgentFactory`|`address`|the address of the root bridge agent factory.|
|`_refundee`|`address`|the address of the excess gas receiver.|
|`_gParams`|`GasParams`|Gas parameters for remote execution.|


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


### _toggleStrategyToken

Function to add/remove a token to be used by Port Strategies.

*FUNC ID: 4*


```solidity
function _toggleStrategyToken(address _underlyingToken, uint256 _minimumReservesRatio) internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_underlyingToken`|`address`|the address of the underlying token.|
|`_minimumReservesRatio`|`uint256`|the minimum reserves ratio the Port must have.|


### _updateStrategyToken

Function to update the minimum reserves ratio of a token to be used by Port Strategies.

*FUNC ID: 5*


```solidity
function _updateStrategyToken(address _underlyingToken, uint256 _minimumReservesRatio) internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_underlyingToken`|`address`|the address of the underlying token.|
|`_minimumReservesRatio`|`uint256`|the minimum reserves ratio the Port must have.|


### _togglePortStrategy

Function to add or remove a strategy that manages balances of a strategy token from this branch's port.
Must be called from another chain.

*FUNC ID: 6*


```solidity
function _togglePortStrategy(
    address _portStrategy,
    address _underlyingToken,
    uint256 _dailyManagementLimit,
    uint256 _reserveRatioManagementLimit
) internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_portStrategy`|`address`|the address of the port strategy.|
|`_underlyingToken`|`address`|the address of the underlying token.|
|`_dailyManagementLimit`|`uint256`|the daily management limit.|
|`_reserveRatioManagementLimit`|`uint256`|the reserve ratio management limit.|


### _updatePortStrategy

Function to update a strategy that manages balances of a strategy token from this branch's port.
Must be called from another chain.

*FUNC ID: 7*


```solidity
function _updatePortStrategy(
    address _portStrategy,
    address _underlyingToken,
    uint256 _dailyManagementLimit,
    uint256 _reserveRatioManagementLimit
) internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_portStrategy`|`address`|the address of the port strategy.|
|`_underlyingToken`|`address`|the address of the underlying token.|
|`_dailyManagementLimit`|`uint256`|the daily management limit.|
|`_reserveRatioManagementLimit`|`uint256`|the reserve ratio management limit.|


