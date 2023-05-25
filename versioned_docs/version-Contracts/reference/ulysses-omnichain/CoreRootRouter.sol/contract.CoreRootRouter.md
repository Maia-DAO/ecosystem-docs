# CoreRootRouter

**Inherits:**
[IRootRouter](/ulysses-omnichain/interfaces/IRootRouter.sol/interface.IRootRouter.md), Ownable

**Author:**
MaiaDAO

Core Root Router implementation for Root Environment deployment.
This contract is responsible for permissionlessly adding new
tokens or Bridge Agents to the system as well as key governance
enabled system functions (i.e. `toggleBranchBridgeAgentFactory`).

*Func IDs for calling these functions through messaging layer:
CROSS-CHAIN MESSAGING FUNCIDs
-----------------------------
FUNC ID      | FUNC NAME
-------------+---------------
0x01         | addGlobalToken
0x02         | addLocalToken
0x03         | setLocalToken
0x04         | syncBranchBridgeAgent*


## State Variables
### wrappedNativeToken
Local Wrapped Native Token


```solidity
WETH9 public immutable wrappedNativeToken;
```


### rootChainId
Address for Local Port Address where funds deposited from this chain are kept, managed and supplied to different Port Strategies.


```solidity
uint24 public immutable rootChainId;
```


### rootPortAddress
Address for Local Port Address where funds deposited from this chain are kept, managed and supplied to different Port Strategies.


```solidity
address public immutable rootPortAddress;
```


### bridgeAgentAddress
Bridge Agent to maneg communcations and cross-chain assets.


```solidity
address payable public bridgeAgentAddress;
```


### bridgeAgentExecutorAddress

```solidity
address public bridgeAgentExecutorAddress;
```


### hTokenFactoryAddress
Uni V3 Factory Address


```solidity
address public hTokenFactoryAddress;
```


### _unlocked

```solidity
uint256 internal _unlocked = 1;
```


## Functions
### constructor


```solidity
constructor(uint24 _rootChainId, address _wrappedNativeToken, address _rootPortAddress);
```

### initialize


```solidity
function initialize(address _bridgeAgentAddress, address _hTokenFactory) external onlyOwner;
```

### addBranchToBridgeAgent

Add a new global token to the omnichain environment.


```solidity
function addBranchToBridgeAgent(
    address _rootBridgeAgent,
    address _branchBridgeAgentFactory,
    address _newBranchRouter,
    address _gasReceiver,
    uint24 _toChain,
    uint128 _remoteExecutionGas
) external payable;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_rootBridgeAgent`|`address`||
|`_branchBridgeAgentFactory`|`address`|Address of the branch Bridge Agent Factory.|
|`_newBranchRouter`|`address`|Address of the new branch router.|
|`_gasReceiver`|`address`|Address of the excess gas receiver.|
|`_toChain`|`uint24`|Chain Id of the branch chain where the new Bridge Agent will be deployed.|
|`_remoteExecutionGas`|`uint128`|gas to be bridged back to root chain.|


### _syncBranchBridgeAgent

*Internal function to add a global token to a specific chain. Must be called from a branch interface.*


```solidity
function _syncBranchBridgeAgent(address _newBranchBridgeAgent, address _rootBridgeAgent, uint24 _fromChain) internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_newBranchBridgeAgent`|`address`|new branch bridge agent address|
|`_rootBridgeAgent`|`address`|new branch bridge agent address|
|`_fromChain`|`uint24`|branch chain id.|


### _addGlobalToken

Internal function to add a global token to a specific chain. Must be called from a branch interface.


```solidity
function _addGlobalToken(uint128 _remoteExecutionGas, address _globalAddress, address _gasReceiver, uint24 _toChain)
    internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_remoteExecutionGas`|`uint128`|gas to be used in remote execution.|
|`_globalAddress`|`address`|global token to be added.|
|`_gasReceiver`|`address`|Address of the excess gas receiver.|
|`_toChain`|`uint24`|chain to which the Global Token will be added.|


### _addLocalToken

Function to add a new local to the global environment. Called from branch chain.


```solidity
function _addLocalToken(
    address _underlyingAddress,
    address _localAddress,
    string memory _name,
    string memory _symbol,
    uint24 _fromChain
) internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_underlyingAddress`|`address`|the token's underlying/native chain address.|
|`_localAddress`|`address`|the token's address.|
|`_name`|`string`|the token's name.|
|`_symbol`|`string`|the token's symbol.|
|`_fromChain`|`uint24`|the token's origin chain Id.|


### _setLocalToken

Internal function to set the local token on a specific chain for a global token.


```solidity
function _setLocalToken(address _globalAddress, address _localAddress, uint24 _toChain) internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_globalAddress`|`address`|global token to be updated.|
|`_localAddress`|`address`|local token to be added.|
|`_toChain`|`uint24`|local token's chain.|


### toggleBranchBridgeAgentFactory

Add or Remove a new global token to the omnichain environment.


```solidity
function toggleBranchBridgeAgentFactory(
    address _rootBridgeAgentFactory,
    address _branchBridgeAgentFactory,
    address _gasReceiver,
    uint24 _toChain
) external payable onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_rootBridgeAgentFactory`|`address`|Address of the root Bridge Agent Factory.|
|`_branchBridgeAgentFactory`|`address`|Address of the branch Bridge Agent Factory.|
|`_gasReceiver`|`address`|Receiver of any leftover execution gas upon reaching destination network.|
|`_toChain`|`uint24`|Chain Id of the branch chain where the new Bridge Agent will be deployed.|


### removeBranchBridgeAgent

Remove a branch bridge agent.


```solidity
function removeBranchBridgeAgent(address _branchBridgeAgent, address _gasReceiver, uint24 _toChain)
    external
    payable
    onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_branchBridgeAgent`|`address`|Address of the Branch Bridge Agent to be updated.|
|`_gasReceiver`|`address`|Receiver of any leftover execution gas upon reaching destination network.|
|`_toChain`|`uint24`|Chain Id of the branch chain where the new Bridge Agent will be deployed.|


### manageStrategyToken

Add or Remove a branch bridge agent.


```solidity
function manageStrategyToken(
    address _underlyingToken,
    uint256 _minimumReservesRatio,
    address _gasReceiver,
    uint24 _toChain
) external payable onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_underlyingToken`|`address`|Address of the underlying token to be added for use in Branch strategies.|
|`_minimumReservesRatio`|`uint256`|Minimum Branch Port reserves ratio for the underlying token.|
|`_gasReceiver`|`address`|Receiver of any leftover execution gas upon reaching destination network.|
|`_toChain`|`uint24`|Chain Id of the branch chain where the new Bridge Agent will be deployed.|


### managePortStrategy

Add, Remove or update a branch bridge agent.


```solidity
function managePortStrategy(
    address _portStrategy,
    address _underlyingToken,
    uint256 _dailyManagementLimit,
    bool _isUpdateDailyLimit,
    address _gasReceiver,
    uint24 _toChain
) external payable onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_portStrategy`|`address`|Address of the Port Strategy to be added for use in Branch strategies.|
|`_underlyingToken`|`address`|Address of the underlying token to be added for use in Branch strategies.|
|`_dailyManagementLimit`|`uint256`|Daily management limit of the given token for the Port Strategy.|
|`_isUpdateDailyLimit`|`bool`|Boolean to safely indicate if the Port Strategy is being updated and not deactivated.|
|`_gasReceiver`|`address`|Receiver of any leftover execution gas upon reaching destination network.|
|`_toChain`|`uint24`|Chain Id of the branch chain where the new Bridge Agent will be deployed.|


### anyExecuteResponse

Function responsible of executing a branch router response.


```solidity
function anyExecuteResponse(bytes1 _funcId, bytes calldata _encodedData, uint24 fromChainId)
    external
    payable
    override
    requiresExecutor
    returns (bool, bytes memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_funcId`|`bytes1`||
|`_encodedData`|`bytes`||
|`fromChainId`|`uint24`|chain where the request originated from.|


### anyExecute

FUNC ID: 3 (_setLocalToken)
FUNC ID: 4 (_syncBranchBridgeAgent)
Unrecognized Function Selector


```solidity
function anyExecute(bytes1 _funcId, bytes calldata _encodedData, uint24 _fromChainId)
    external
    payable
    override
    requiresExecutor
    returns (bool, bytes memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_funcId`|`bytes1`||
|`_encodedData`|`bytes`||
|`_fromChainId`|`uint24`||


### anyExecuteDepositSingle

FUNC ID: 1 (_addGlobalToken)
FUNC ID: 2 (_addLocalToken)
Unrecognized Function Selector


```solidity
function anyExecuteDepositSingle(bytes1, bytes memory, DepositParams memory, uint24)
    external
    payable
    override
    requiresExecutor
    returns (bool, bytes memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes1`||
|`<none>`|`bytes`||
|`<none>`|`DepositParams`||
|`<none>`|`uint24`||


### anyExecuteDepositMultiple

Function responsible of executing a crosschain request which contains cross-chain deposit information for multiple assets attached.


```solidity
function anyExecuteDepositMultiple(bytes1, bytes calldata, DepositMultipleParams memory, uint24)
    external
    payable
    requiresExecutor
    returns (bool, bytes memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes1`||
|`<none>`|`bytes`||
|`<none>`|`DepositMultipleParams`||
|`<none>`|`uint24`||


### anyExecuteSigned

Reverts when called


```solidity
function anyExecuteSigned(bytes1, bytes memory, address, uint24)
    external
    payable
    override
    requiresExecutor
    returns (bool, bytes memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes1`||
|`<none>`|`bytes`||
|`<none>`|`address`||
|`<none>`|`uint24`||


### anyExecuteSignedDepositSingle

Reverts when called


```solidity
function anyExecuteSignedDepositSingle(bytes1, bytes memory, DepositParams memory, address, uint24)
    external
    payable
    override
    requiresExecutor
    returns (bool, bytes memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes1`||
|`<none>`|`bytes`||
|`<none>`|`DepositParams`||
|`<none>`|`address`||
|`<none>`|`uint24`||


### anyExecuteSignedDepositMultiple

Reverts when called


```solidity
function anyExecuteSignedDepositMultiple(bytes1, bytes memory, DepositMultipleParams memory, address, uint24)
    external
    payable
    requiresExecutor
    returns (bool, bytes memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes1`||
|`<none>`|`bytes`||
|`<none>`|`DepositMultipleParams`||
|`<none>`|`address`||
|`<none>`|`uint24`||


### lock

Modifier for a simple re-entrancy check.


```solidity
modifier lock();
```

### requiresExecutor

Modifier that requires caler to be an active branch interface.


```solidity
modifier requiresExecutor();
```

### _requiresExecutor

reuse to reduce contract bytesize


```solidity
function _requiresExecutor() internal view;
```

## Errors
### InvalidChainId

```solidity
error InvalidChainId();
```

### UnauthorizedChainId

```solidity
error UnauthorizedChainId();
```

### UnauthorizedCallerNotManager

```solidity
error UnauthorizedCallerNotManager();
```

### TokenAlreadyAdded

```solidity
error TokenAlreadyAdded();
```

### UnrecognizedGlobalToken

```solidity
error UnrecognizedGlobalToken();
```

### UnrecognizedBridgeAgentFactory

```solidity
error UnrecognizedBridgeAgentFactory();
```

