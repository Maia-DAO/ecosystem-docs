# CoreRootRouter
[Git Source](https://github.com/Maia-DAO/2023-09-maia-remediations/blob/main/src/CoreRootRouter.sol)

**Inherits:**
[IRootRouter](/src/ulysses-omnichain/interfaces/IRootRouter.md), Ownable

**Author:**
MaiaDAO

2

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
### _setup
Boolean to indicate if the contract is in set up mode.


```solidity
bool internal _setup;
```


### rootChainId
Root Chain Layer Zero Identifier.


```solidity
uint256 public immutable rootChainId;
```


### rootPortAddress
Address for Local Port Address where funds deposited from this chain are kept
managed and supplied to different Port Strategies.


```solidity
address public immutable rootPortAddress;
```


### bridgeAgentAddress
Bridge Agent to manage remote execution and cross-chain assets.


```solidity
address payable public bridgeAgentAddress;
```


### bridgeAgentExecutorAddress
Bridge Agent Executor Address.


```solidity
address public bridgeAgentExecutorAddress;
```


### hTokenFactoryAddress
ERC20 hToken Root Factory Address.


```solidity
address public hTokenFactoryAddress;
```


## Functions
### constructor

Constructor for Core Root Router.


```solidity
constructor(uint256 _rootChainId, address _rootPortAddress);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_rootChainId`|`uint256`|layer zero root chain id.|
|`_rootPortAddress`|`address`|address of the Root Port.|


### initialize


```solidity
function initialize(address _bridgeAgentAddress, address _hTokenFactory) external onlyOwner;
```

### addBranchToBridgeAgent

Add a new Chain (Branch Bridge Agent and respective Router) to a Root Bridge Agent.


```solidity
function addBranchToBridgeAgent(
    address _rootBridgeAgent,
    address _branchBridgeAgentFactory,
    address _newBranchRouter,
    address _refundee,
    uint16 _dstChainId,
    GasParams[2] calldata _gParams
) external payable;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_rootBridgeAgent`|`address`||
|`_branchBridgeAgentFactory`|`address`|Address of the branch Bridge Agent Factory.|
|`_newBranchRouter`|`address`|Address of the new branch router.|
|`_refundee`|`address`|Address of the excess gas receiver.|
|`_dstChainId`|`uint16`|Chain Id of the branch chain where the new Bridge Agent will be deployed.|
|`_gParams`|`GasParams[2]`|Gas parameters for remote execution.|


### toggleBranchBridgeAgentFactory

Add or Remove a Branch Bridge Agent Factory.


```solidity
function toggleBranchBridgeAgentFactory(
    address _rootBridgeAgentFactory,
    address _branchBridgeAgentFactory,
    address _refundee,
    uint16 _dstChainId,
    GasParams calldata _gParams
) external payable onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_rootBridgeAgentFactory`|`address`|Address of the root Bridge Agent Factory.|
|`_branchBridgeAgentFactory`|`address`|Address of the branch Bridge Agent Factory.|
|`_refundee`|`address`|Receiver of any leftover execution gas upon reaching the destination network.|
|`_dstChainId`|`uint16`|Chain Id of the branch chain where the new Bridge Agent will be deployed.|
|`_gParams`|`GasParams`|Gas parameters for remote execution.|


### toggleStrategyToken

Add or Remove a Strategy Token.

*Must be between 7000 and 9999 (70% and 99.99%). Can be any value if the token is being de-activated.*


```solidity
function toggleStrategyToken(
    address _underlyingToken,
    uint256 _minimumReservesRatio,
    address _refundee,
    uint16 _dstChainId,
    GasParams calldata _gParams
) external payable onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_underlyingToken`|`address`|Address of the underlying token to be added for use in Branch strategies.|
|`_minimumReservesRatio`|`uint256`|Minimum Branch Port reserves ratio for the underlying token.|
|`_refundee`|`address`|Receiver of any leftover execution gas upon reaching destination network.|
|`_dstChainId`|`uint16`|Chain Id of the branch chain where the new Bridge Agent will be deployed.|
|`_gParams`|`GasParams`|Gas parameters for remote execution.|


### updateStrategyToken

Update an active Strategy Token's minimum reserves ratio.


```solidity
function updateStrategyToken(
    address _underlyingToken,
    uint256 _minimumReservesRatio,
    address _refundee,
    uint16 _dstChainId,
    GasParams calldata _gParams
) external payable onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_underlyingToken`|`address`|Address of the underlying token to be added for use in Branch strategies.|
|`_minimumReservesRatio`|`uint256`|Minimum Branch Port reserves ratio for the underlying token.|
|`_refundee`|`address`|Receiver of any leftover execution gas upon reaching destination network.|
|`_dstChainId`|`uint16`|Chain Id of the branch chain where the new Bridge Agent will be deployed.|
|`_gParams`|`GasParams`|Gas parameters for remote execution.|


### togglePortStrategy

Add or Remove a Port Strategy.


```solidity
function togglePortStrategy(
    address _portStrategy,
    address _underlyingToken,
    uint256 _dailyManagementLimit,
    uint256 _reserveRatioManagementLimit,
    address _refundee,
    uint16 _dstChainId,
    GasParams calldata _gParams
) external payable onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_portStrategy`|`address`|Address of the Port Strategy to be added for use in Branch strategies.|
|`_underlyingToken`|`address`|Address of the underlying token to be added for use in Branch strategies.|
|`_dailyManagementLimit`|`uint256`|Daily management limit of the given token for the Port Strategy.|
|`_reserveRatioManagementLimit`|`uint256`|Total reserves management limit of the given token for the Port Strategy.|
|`_refundee`|`address`|Receiver of any leftover execution gas upon reaching destination network.|
|`_dstChainId`|`uint16`|Chain Id of the branch chain where the new Bridge Agent will be deployed.|
|`_gParams`|`GasParams`|Gas parameters for remote execution.|


### updatePortStrategy

Update a Port Strategy.


```solidity
function updatePortStrategy(
    address _portStrategy,
    address _underlyingToken,
    uint256 _dailyManagementLimit,
    uint256 _reserveRatioManagementLimit,
    address _refundee,
    uint16 _dstChainId,
    GasParams calldata _gParams
) external payable onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_portStrategy`|`address`|Address of the Port Strategy to be added for use in Branch strategies.|
|`_underlyingToken`|`address`|Address of the underlying token to be added for use in Branch strategies.|
|`_dailyManagementLimit`|`uint256`|Daily management limit of the given token for the Port Strategy.|
|`_reserveRatioManagementLimit`|`uint256`|Total reserves management limit of the given token for the Port Strategy.|
|`_refundee`|`address`|Receiver of any leftover execution gas upon reaching destination network.|
|`_dstChainId`|`uint16`|Chain Id of the branch chain where the new Bridge Agent will be deployed.|
|`_gParams`|`GasParams`|Gas parameters for remote execution.|


### setCoreBranch

Set the Core Branch Router and Bridge Agent.


```solidity
function setCoreBranch(
    address _refundee,
    address _coreBranchRouter,
    address _coreBranchBridgeAgent,
    uint16 _dstChainId,
    GasParams calldata _gParams
) external payable;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_refundee`|`address`|Receiver of any leftover execution gas upon reaching destination network.|
|`_coreBranchRouter`|`address`|Address of the Core Branch Router.|
|`_coreBranchBridgeAgent`|`address`|Address of the Core Branch Bridge Agent.|
|`_dstChainId`|`uint16`|Chain Id of the branch chain where the new Bridge Agent will be deployed.|
|`_gParams`|`GasParams`|Gas parameters for remote execution.|


### sweep

Allows governance to claim any native tokens accumulated from failed transactions.


```solidity
function sweep(address _refundee, address _recipient, uint16 _dstChainId, GasParams calldata _gParams)
    external
    payable
    onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_refundee`|`address`|Receiver of any excess msg.value sent to Layer Zero on source chain.|
|`_recipient`|`address`|address to transfer ETH to on destination chain.|
|`_dstChainId`|`uint16`||
|`_gParams`|`GasParams`|gasParameters for remote execution|


### retrySettlement

Function to execute Branch Bridge Agent initiated requests to retry a settlement.


```solidity
function retrySettlement(uint32, address, bytes calldata, GasParams calldata, bool) external payable override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint32`||
|`<none>`|`address`||
|`<none>`|`bytes`||
|`<none>`|`GasParams`||
|`<none>`|`bool`||


### executeRetrySettlement

Function to execute Branch Bridge Agent initiated requests to retry a settlement.


```solidity
function executeRetrySettlement(address, uint32, address, bytes calldata, GasParams calldata, bool, uint16)
    public
    payable
    override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`||
|`<none>`|`uint32`||
|`<none>`|`address`||
|`<none>`|`bytes`||
|`<none>`|`GasParams`||
|`<none>`|`bool`||
|`<none>`|`uint16`||


### execute

Function responsible of executing a crosschain request without any deposit.


```solidity
function execute(bytes calldata _encodedData, uint16 _srcChainId) external payable override requiresExecutor;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_encodedData`|`bytes`||
|`_srcChainId`|`uint16`||


### executeDepositSingle

FUNC ID: 1 (_addGlobalToken)
FUNC ID: 2 (_addLocalToken)
FUNC ID: 3 (_setLocalToken)
FUNC ID: 4 (_syncBranchBridgeAgent)
Unrecognized Function Selector


```solidity
function executeDepositSingle(bytes memory, DepositParams memory, uint16) external payable override requiresExecutor;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes`||
|`<none>`|`DepositParams`||
|`<none>`|`uint16`||


### executeDepositMultiple

Function responsible of executing a crosschain request which contains cross-chain deposit information for multiple assets attached.


```solidity
function executeDepositMultiple(bytes calldata, DepositMultipleParams memory, uint16)
    external
    payable
    override
    requiresExecutor;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes`||
|`<none>`|`DepositMultipleParams`||
|`<none>`|`uint16`||


### executeSigned

Function responsible of executing a crosschain request with msg.sender without any deposit.


```solidity
function executeSigned(bytes memory, address, uint16) external payable override requiresExecutor;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes`||
|`<none>`|`address`||
|`<none>`|`uint16`||


### executeSignedDepositSingle

Function responsible of executing a crosschain request which contains cross-chain deposit information and msg.sender attached.


```solidity
function executeSignedDepositSingle(bytes memory, DepositParams memory, address, uint16)
    external
    payable
    override
    requiresExecutor;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes`||
|`<none>`|`DepositParams`||
|`<none>`|`address`||
|`<none>`|`uint16`||


### executeSignedDepositMultiple

Function responsible of executing a crosschain request which contains cross-chain deposit information for multiple assets and msg.sender attached.


```solidity
function executeSignedDepositMultiple(bytes memory, DepositMultipleParams memory, address, uint16)
    external
    payable
    override
    requiresExecutor;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes`||
|`<none>`|`DepositMultipleParams`||
|`<none>`|`address`||
|`<none>`|`uint16`||


### _addLocalToken

Function to add a new local to the global environment. Called from branch chain.


```solidity
function _addLocalToken(
    address _underlyingAddress,
    address _localAddress,
    string memory _name,
    string memory _symbol,
    uint8 _decimals,
    uint16 _srcChainId
) internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_underlyingAddress`|`address`|the token's underlying/native chain address.|
|`_localAddress`|`address`|the token's address.|
|`_name`|`string`|the token's name.|
|`_symbol`|`string`|the token's symbol.|
|`_decimals`|`uint8`|the token's decimals.|
|`_srcChainId`|`uint16`|the token's origin chain Id.|


### _addGlobalToken

Internal function to add a global token to a specific chain. Must be called from a branch.


```solidity
function _addGlobalToken(address _refundee, address _globalAddress, uint16 _dstChainId, GasParams[2] memory _gParams)
    internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_refundee`|`address`|Address of the excess gas receiver.|
|`_globalAddress`|`address`|global token to be added.|
|`_dstChainId`|`uint16`|chain to which the Global Token will be added.|
|`_gParams`|`GasParams[2]`|Gas parameters for remote execution.|


### _setLocalToken

Internal function to set the local token on a specific chain for a global token.


```solidity
function _setLocalToken(address _globalAddress, address _localAddress, uint16 _dstChainId) internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_globalAddress`|`address`|global token to be updated.|
|`_localAddress`|`address`|local token to be added.|
|`_dstChainId`|`uint16`|local token's chain.|


### _syncBranchBridgeAgent

*Internal function sync a Root Bridge Agent with a newly created BRanch Bridge Agent.*


```solidity
function _syncBranchBridgeAgent(address _newBranchBridgeAgent, address _rootBridgeAgent, uint256 _srcChainId)
    internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_newBranchBridgeAgent`|`address`|new branch bridge agent address|
|`_rootBridgeAgent`|`address`|new branch bridge agent address|
|`_srcChainId`|`uint256`|branch chain id.|


### requiresExecutor

Modifier verifies the caller is the Bridge Agent Executor.


```solidity
modifier requiresExecutor();
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

