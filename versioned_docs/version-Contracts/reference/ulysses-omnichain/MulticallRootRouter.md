# MulticallRootRouter
[Git Source](https://github.com/Maia-DAO/2023-09-maia-remediations/blob/main/src/MulticallRootRouter.sol)

**Inherits:**
[IRootRouter](/src/ulysses-omnichain/interfaces/IRootRouter.md), Ownable

**Author:**
MaiaDAO

Root Router implementation for interfacing with third-party dApps present in the Root Omnichain Environment.

*Func IDs for calling these  functions through the messaging layer:
CROSS-CHAIN MESSAGING FUNCIDs
-----------------------------
FUNC ID      | FUNC NAME
-------------+---------------
0x01         | multicallNoOutput
0x02         | multicallSingleOutput
0x03         | multicallMultipleOutput*


## State Variables
### CONTRACT_BALANCE
*Used for identifying cases when this contract's balance of a token is to be used as an input
This value is equivalent to 1<<255, i.e. a singular 1 in the most significant bit.*


```solidity
uint256 internal constant CONTRACT_BALANCE = 0x8000000000000000000000000000000000000000000000000000000000000000;
```


### localChainId
Root Chain Layer Zero Identifier.


```solidity
uint256 public immutable localChainId;
```


### localPortAddress
Address for Local Port Address where assets are stored and managed.


```solidity
address public immutable localPortAddress;
```


### multicallAddress
Root Chain Multicall Address.


```solidity
address public immutable multicallAddress;
```


### bridgeAgentAddress
Bridge Agent to manage communications and cross-chain assets.


```solidity
address payable public bridgeAgentAddress;
```


### bridgeAgentExecutorAddress
Bridge Agent Executor Address.


```solidity
address public bridgeAgentExecutorAddress;
```


### _unlocked
Re-entrancy lock modifier state.


```solidity
uint256 internal _unlocked = 1;
```


## Functions
### constructor

Constructor for Multicall Root Router.


```solidity
constructor(uint256 _localChainId, address _localPortAddress, address _multicallAddress);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_localChainId`|`uint256`|local layer zero chain id.|
|`_localPortAddress`|`address`|address of the root Port.|
|`_multicallAddress`|`address`|address of the Multicall contract.|


### initialize

Initializes the Multicall Root Router.


```solidity
function initialize(address _bridgeAgentAddress) external onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_bridgeAgentAddress`|`address`|The address of the Bridge Agent.|


### callOutAndBridge

Function to call 'callOutAndBridge' on RootBridgeAgent.


```solidity
function callOutAndBridge(
    address settlementOwner,
    address recipient,
    address outputToken,
    uint256 amountOut,
    uint256 depositOut,
    uint16 dstChainId,
    GasParams memory gasParams
) external payable virtual;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`settlementOwner`|`address`|settlement owner and excess gas receiver.|
|`recipient`|`address`|Address to receive the output assets.|
|`outputToken`|`address`|Address of the output hToken.|
|`amountOut`|`uint256`|Amount of output hTokens to send.|
|`depositOut`|`uint256`|Amount of output hTokens to deposit.|
|`dstChainId`|`uint16`|Chain Id of the destination chain.|
|`gasParams`|`GasParams`|Amounts of tokens to withdraw from the destination port.|


### callOutAndBridgeMultiple

Function to call 'callOutAndBridgeMultiple' on RootBridgeAgent.


```solidity
function callOutAndBridgeMultiple(
    address settlementOwner,
    address recipient,
    address[] memory outputTokens,
    uint256[] memory amountsOut,
    uint256[] memory depositsOut,
    uint16 dstChainId,
    GasParams memory gasParams
) external payable virtual;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`settlementOwner`|`address`|settlement owner and excess gas receiver.|
|`recipient`|`address`|Address to receive the output assets.|
|`outputTokens`|`address[]`|Addresses of the output hTokens.|
|`amountsOut`|`uint256[]`|Total amount of tokens to send.|
|`depositsOut`|`uint256[]`|Amounts of tokens to withdraw from the destination port.|
|`dstChainId`|`uint16`||
|`gasParams`|`GasParams`|Amounts of tokens to withdraw from the destination port.|


### retrySettlement

Function to execute Branch Bridge Agent initiated requests to retry a settlement.


```solidity
function retrySettlement(
    uint32 _settlementNonce,
    address _recipient,
    bytes calldata _params,
    GasParams calldata _gParams,
    bool _hasFallbackToggled
) external payable override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_settlementNonce`|`uint32`|settlement nonce.|
|`_recipient`|`address`|recipient address.|
|`_params`|`bytes`|data received from messaging layer.|
|`_gParams`|`GasParams`|gas parameters.|
|`_hasFallbackToggled`|`bool`|flag to indicate if fallback has been toggled.|


### executeRetrySettlement

Function to execute Branch Bridge Agent initiated requests to retry a settlement.


```solidity
function executeRetrySettlement(
    address _owner,
    uint32 _settlementNonce,
    address _recipient,
    bytes calldata _params,
    GasParams calldata _gParams,
    bool _hasFallbackToggled,
    uint16
) public payable override requiresBridgeAgent;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_owner`|`address`|user account address.|
|`_settlementNonce`|`uint32`|settlement nonce.|
|`_recipient`|`address`|recipient address.|
|`_params`|`bytes`|data received from messaging layer.|
|`_gParams`|`GasParams`|gas parameters.|
|`_hasFallbackToggled`|`bool`|flag to indicate if fallback has been toggled.|
|`<none>`|`uint16`||


### execute

Function responsible of executing a crosschain request without any deposit.

*FuncIDs
FUNC ID      | FUNC NAME
0x01         |  multicallNoOutput
0x02         |  multicallSingleOutput
0x03         |  multicallMultipleOutput*


```solidity
function execute(bytes calldata encodedData, uint16) external payable override lock requiresExecutor;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`encodedData`|`bytes`||
|`<none>`|`uint16`||


### executeDepositSingle

FUNC ID: 1 (multicallNoOutput)
FUNC ID: 2 (multicallSingleOutput)
FUNC ID: 3 (multicallMultipleOutput)
UNRECOGNIZED FUNC ID


```solidity
function executeDepositSingle(bytes calldata, DepositParams calldata, uint16) external payable override;
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
function executeDepositMultiple(bytes calldata, DepositMultipleParams calldata, uint16) external payable;
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
function executeSigned(bytes calldata encodedData, address userAccount, uint16)
    external
    payable
    override
    lock
    requiresExecutor;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`encodedData`|`bytes`||
|`userAccount`|`address`|user account address.|
|`<none>`|`uint16`||


### executeSignedDepositSingle

Function responsible of executing a crosschain request which contains cross-chain deposit information and msg.sender attached.


```solidity
function executeSignedDepositSingle(bytes calldata encodedData, DepositParams calldata, address userAccount, uint16)
    external
    payable
    override
    requiresExecutor
    lock;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`encodedData`|`bytes`||
|`<none>`|`DepositParams`||
|`userAccount`|`address`|user account address.|
|`<none>`|`uint16`||


### executeSignedDepositMultiple

Function responsible of executing a crosschain request which contains cross-chain deposit information for multiple assets and msg.sender attached.


```solidity
function executeSignedDepositMultiple(
    bytes calldata encodedData,
    DepositMultipleParams calldata,
    address userAccount,
    uint16
) external payable override requiresExecutor lock;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`encodedData`|`bytes`||
|`<none>`|`DepositMultipleParams`||
|`userAccount`|`address`|user account address.|
|`<none>`|`uint16`||


### _executeSigned

*FuncIDs
FUNC ID      | FUNC NAME
0x01         |  multicallNoOutput
0x02         |  multicallSingleOutput
0x03         |  multicallMultipleOutput*


```solidity
function _executeSigned(bytes calldata encodedData, address userAccount) internal;
```

### _multicall

FUNC ID: 1 (multicallNoOutput)
FUNC ID: 2 (multicallSingleOutput)
FUNC ID: 3 (multicallMultipleOutput)
UNRECOGNIZED FUNC ID

Function to perform a set of actions on the omnichain environment without using the user's Virtual Acccount.


```solidity
function _multicall(IMulticall.Call[] memory calls) internal returns (uint256 blockNumber, bytes[] memory returnData);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`calls`|`IMulticall.Call[]`|to be executed.|


### _approveAndCallOut

Function to approve token spend before Bridge Agent interaction to Bridge Out of omnichain environment.


```solidity
function _approveAndCallOut(
    address settlementOwner,
    address recipient,
    address outputToken,
    uint256 amountOut,
    uint256 depositOut,
    uint16 dstChainId,
    GasParams memory gasParams
) internal virtual;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`settlementOwner`|`address`|settlement owner and excess gas receiver.|
|`recipient`|`address`|Address to receive the output assets.|
|`outputToken`|`address`|Address of the output hToken.|
|`amountOut`|`uint256`|Amount of output hTokens to send.|
|`depositOut`|`uint256`|Amount of output hTokens to deposit.|
|`dstChainId`|`uint16`|Chain Id of the destination chain.|
|`gasParams`|`GasParams`||


### _approveMultipleAndCallOut

Function to approve multiple token spend before Bridge Agent interaction to Bridge Out of omnichain environment.


```solidity
function _approveMultipleAndCallOut(
    address settlementOwner,
    address recipient,
    address[] memory outputTokens,
    uint256[] memory amountsOut,
    uint256[] memory depositsOut,
    uint16 dstChainId,
    GasParams memory gasParams
) internal virtual;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`settlementOwner`|`address`|settlement owner and excess gas receiver.|
|`recipient`|`address`|Address to receive the output assets.|
|`outputTokens`|`address[]`|Addresses of the output hTokens.|
|`amountsOut`|`uint256[]`|Total amount of tokens to send.|
|`depositsOut`|`uint256[]`|Amounts of tokens to withdraw from the destination port.|
|`dstChainId`|`uint16`||
|`gasParams`|`GasParams`||


### _decode


```solidity
function _decode(bytes calldata data) internal pure virtual returns (bytes memory);
```

### lock

Modifier for a simple re-entrancy check.


```solidity
modifier lock();
```

### requiresExecutor

Verifies the caller is the Bridge Agent Executor.


```solidity
modifier requiresExecutor();
```

### requiresBridgeAgent

Verifies the caller is the Bridge Agent Executor.


```solidity
modifier requiresBridgeAgent();
```

