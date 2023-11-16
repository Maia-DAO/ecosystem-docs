# BranchBridgeAgent
[Git Source](https://github.com/Maia-DAO/2023-09-maia-remediations/blob/main/src/BranchBridgeAgent.sol)

**Inherits:**
[IBranchBridgeAgent](/src/ulysses-omnichain/interfaces/IBranchBridgeAgent.md), [BridgeAgentConstants](/src/ulysses-omnichain/interfaces/BridgeAgentConstants.sol/BridgeAgentConstants.md)

**Author:**
MaiaDAO


## State Variables
### rootChainId
Chain Id for Root Chain where liquidity is virtualized(e.g. 4).


```solidity
uint16 public immutable rootChainId;
```


### localChainId
Chain Id for Local Chain.


```solidity
uint16 public immutable localChainId;
```


### rootBridgeAgentAddress
Address for Bridge Agent who processes requests submitted for the Root Router Address
where cross-chain requests are executed in the Root Chain.


```solidity
address public immutable rootBridgeAgentAddress;
```


### rootBridgeAgentPath
Layer Zero messaging layer path for Root Bridge Agent Address where cross-chain requests
are sent to the Root Chain Router.


```solidity
bytes private rootBridgeAgentPath;
```


### lzEndpointAddress
Local Layerzero Endpoint Address where cross-chain requests are sent to the Root Chain Router.


```solidity
address public immutable lzEndpointAddress;
```


### localRouterAddress
Address for Local Router used for custom actions for different hApps.


```solidity
address public immutable localRouterAddress;
```


### localPortAddress
Address for Local Port Address
where funds deposited from this chain are kept, managed and supplied to different Port Strategies.


```solidity
address public immutable localPortAddress;
```


### bridgeAgentExecutorAddress
Address for Bridge Agent Executor used for executing cross-chain requests.


```solidity
address public immutable bridgeAgentExecutorAddress;
```


### depositNonce
Deposit nonce used for identifying the transaction.


```solidity
uint32 public depositNonce;
```


### getDeposit
Mapping from Pending deposits hash to Deposit Struct.


```solidity
mapping(uint256 depositNonce => Deposit depositInfo) public getDeposit;
```


### executionState
If true, the bridge agent has already served a request with this nonce from a given chain.


```solidity
mapping(uint256 settlementNonce => uint256 state) public executionState;
```


### _unlocked
Re-entrancy lock modifier state.


```solidity
uint256 internal _unlocked = 1;
```


## Functions
### constructor

Constructor for Branch Bridge Agent.


```solidity
constructor(
    uint16 _rootChainId,
    uint16 _localChainId,
    address _rootBridgeAgentAddress,
    address _lzEndpointAddress,
    address _localRouterAddress,
    address _localPortAddress
);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_rootChainId`|`uint16`|Chain Id for Root Chain where liquidity is virtualized and assets are managed.|
|`_localChainId`|`uint16`|Chain Id for Local Chain.|
|`_rootBridgeAgentAddress`|`address`|Address for Bridge Agent who processes requests sent to and from the Root Chain.|
|`_lzEndpointAddress`|`address`|Local Layerzero Endpoint Address where cross-chain requests are sent to the Root Chain Router.|
|`_localRouterAddress`|`address`|Address for Local Router used for custom actions for different Omnichain dApps.|
|`_localPortAddress`|`address`|Address for Local Port Address where funds deposited from this chain are kept, managed and supplied to different Port Strategies.|


### receive


```solidity
receive() external payable;
```

### getDepositEntry

External function that returns a given deposit entry.


```solidity
function getDepositEntry(uint32 _depositNonce) external view override returns (Deposit memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_depositNonce`|`uint32`||


### callOut

Function to perform a call to the Root Omnichain Router without token deposit.

*DEPOSIT ID: 1 (Call without deposit)*


```solidity
function callOut(address payable _depositOwnerAndGasRefundee, bytes calldata _params, GasParams calldata _gParams)
    external
    payable
    override
    lock
    requiresRouter;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_depositOwnerAndGasRefundee`|`address payable`||
|`_params`|`bytes`||
|`_gParams`|`GasParams`||


### callOutAndBridge

Function to perform a call to the Root Omnichain Router while depositing a single asset.

*DEPOSIT ID: 2 (Call with single deposit)*


```solidity
function callOutAndBridge(
    address payable _depositOwnerAndGasRefundee,
    bytes calldata _params,
    DepositInput memory _dParams,
    GasParams calldata _gParams
) external payable override lock requiresRouter;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_depositOwnerAndGasRefundee`|`address payable`||
|`_params`|`bytes`||
|`_dParams`|`DepositInput`||
|`_gParams`|`GasParams`||


### callOutAndBridgeMultiple

Function to perform a call to the Root Omnichain Router while depositing two or more assets.

*DEPOSIT ID: 3 (Call with multiple deposit)*


```solidity
function callOutAndBridgeMultiple(
    address payable _depositOwnerAndGasRefundee,
    bytes calldata _params,
    DepositMultipleInput memory _dParams,
    GasParams calldata _gParams
) external payable override lock requiresRouter;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_depositOwnerAndGasRefundee`|`address payable`||
|`_params`|`bytes`||
|`_dParams`|`DepositMultipleInput`||
|`_gParams`|`GasParams`||


### callOutSigned

Perform a call to the Root Omnichain Router without token deposit with msg.sender information.

*msg.sender is gasRefundee in signed calls.*


```solidity
function callOutSigned(bytes calldata _params, GasParams calldata _gParams) external payable override lock;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_params`|`bytes`||
|`_gParams`|`GasParams`||


### callOutSignedAndBridge

Function to perform a call to the Root Omnichain Router while depositing a single asset msg.sender.

*msg.sender is depositOwnerAndGasRefundee in signed calls.*


```solidity
function callOutSignedAndBridge(
    bytes calldata _params,
    DepositInput memory _dParams,
    GasParams calldata _gParams,
    bool _hasFallbackToggled
) external payable override lock;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_params`|`bytes`||
|`_dParams`|`DepositInput`||
|`_gParams`|`GasParams`||
|`_hasFallbackToggled`|`bool`||


### callOutSignedAndBridgeMultiple

Function to perform a call to the Root Omnichain Router while
depositing two or more assets with msg.sender.

*msg.sender is depositOwnerAndGasRefundee in signed calls.*


```solidity
function callOutSignedAndBridgeMultiple(
    bytes calldata _params,
    DepositMultipleInput memory _dParams,
    GasParams calldata _gParams,
    bool _hasFallbackToggled
) external payable override lock;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_params`|`bytes`||
|`_dParams`|`DepositMultipleInput`||
|`_gParams`|`GasParams`||
|`_hasFallbackToggled`|`bool`||


### retryDeposit

Function to perform a call to the Root Omnichain Environment
retrying a failed non-signed deposit that hasn't been executed yet.


```solidity
function retryDeposit(address _owner, uint32 _depositNonce, bytes calldata _params, GasParams calldata _gParams)
    external
    payable
    override
    lock
    requiresRouter;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_owner`|`address`||
|`_depositNonce`|`uint32`||
|`_params`|`bytes`||
|`_gParams`|`GasParams`||


### retryDepositSigned

Function to perform a call to the Root Omnichain Environment
retrying a failed signed deposit that hasn't been executed yet.


```solidity
function retryDepositSigned(
    uint32 _depositNonce,
    bytes calldata _params,
    GasParams calldata _gParams,
    bool _hasFallbackToggled
) external payable override lock;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_depositNonce`|`uint32`||
|`_params`|`bytes`||
|`_gParams`|`GasParams`||
|`_hasFallbackToggled`|`bool`||


### retrieveDeposit

External function to request tokens back to branch chain after failing omnichain environment interaction.

*DEPOSIT ID: 8*


```solidity
function retrieveDeposit(uint32 _depositNonce, GasParams calldata _gParams) external payable override lock;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_depositNonce`|`uint32`||
|`_gParams`|`GasParams`||


### redeemDeposit

External function to retry a failed Deposit entry on this branch chain.


```solidity
function redeemDeposit(uint32 _depositNonce, address _recipient) external override lock;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_depositNonce`|`uint32`||
|`_recipient`|`address`||


### redeemDeposit

External function to retry a failed Deposit entry on this branch chain.


```solidity
function redeemDeposit(uint32 _depositNonce, address _recipient, address _localTokenAddress) external override lock;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_depositNonce`|`uint32`||
|`_recipient`|`address`||
|`_localTokenAddress`|`address`||


### retrySettlement

External function to retry a failed Settlement entry on the root chain.

*DEPOSIT ID: 7*


```solidity
function retrySettlement(
    uint32 _settlementNonce,
    bytes calldata _params,
    GasParams[2] calldata _gParams,
    bool _hasFallbackToggled
) external payable virtual override lock;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_settlementNonce`|`uint32`||
|`_params`|`bytes`||
|`_gParams`|`GasParams[2]`||
|`_hasFallbackToggled`|`bool`||


### bridgeIn

Function to request balance clearance from a Port to a given user.


```solidity
function bridgeIn(address _recipient, address _hToken, address _token, uint256 _amount, uint256 _deposit)
    external
    override
    requiresAgentExecutor;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_recipient`|`address`||
|`_hToken`|`address`||
|`_token`|`address`||
|`_amount`|`uint256`||
|`_deposit`|`uint256`||


### bridgeInMultiple

Function to request balance clearance from a Port to a given address.


```solidity
function bridgeInMultiple(address _recipient, SettlementMultipleParams calldata _sParams)
    external
    override
    requiresAgentExecutor;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_recipient`|`address`||
|`_sParams`|`SettlementMultipleParams`||


### lzReceive

LayerZero endpoint will invoke this function to deliver the message on the destination


```solidity
function lzReceive(uint16 _srcChainId, bytes calldata _srcAddress, uint64, bytes calldata _payload)
    public
    payable
    override
    returns (bool success);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_srcChainId`|`uint16`|the source endpoint identifier|
|`_srcAddress`|`bytes`|the source sending contract address from the source chain|
|`<none>`|`uint64`||
|`_payload`|`bytes`|the signed payload is the UA bytes has encoded to be sent|


### lzReceiveNonBlocking

External function to receive cross-chain messages from LayerZero Endpoint Contract without blocking.


```solidity
function lzReceiveNonBlocking(
    address _endpoint,
    uint16 _srcChainId,
    bytes calldata _srcAddress,
    bytes calldata _payload
) public payable override requiresEndpoint(_srcChainId, _endpoint, _srcAddress);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_endpoint`|`address`|address of the LayerZero Endpoint Contract.|
|`_srcChainId`|`uint16`||
|`_srcAddress`|`bytes`|address path of the recipient + sender.|
|`_payload`|`bytes`|Calldata for function call.|


### forceResumeReceive

Only when the BridgeAgent needs to resume the message flow in blocking mode and clear the stored payload.


```solidity
function forceResumeReceive(uint16 _srcChainId, bytes calldata _srcAddress) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_srcChainId`|`uint16`|the chainId of the source chain|
|`_srcAddress`|`bytes`|the contract address of the source contract at the source chain|


### _execute

Internal function requests execution from Branch Bridge Agent Executor Contract.


```solidity
function _execute(uint256 _settlementNonce, bytes memory _calldata) private;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_settlementNonce`|`uint256`|Identifier for nonce being executed.|
|`_calldata`|`bytes`|Calldata to be executed by the Branch Bridge Agent Executor Contract.|


### _execute


```solidity
function _execute(bool _hasFallbackToggled, uint32 _settlementNonce, address _gasRefundee, bytes memory _calldata)
    private;
```

### _encodeAdapterParams

Internal function to encode the Adapter Params for LayerZero Endpoint.

*If fallback is requested, subtract 50k gas to allow for fallback call.*

*The minimum gas required for cross-chain call is added to the requested gasLimit.*


```solidity
function _encodeAdapterParams(GasParams calldata _gParams, uint256 _baseExecutionGas, address _callee)
    internal
    pure
    returns (bytes memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_gParams`|`GasParams`|LayerZero gas information. (_gasLimit,_remoteBranchExecutionGas,_nativeTokenRecipientOnDstChain)|
|`_baseExecutionGas`|`uint256`|Minimum gas required for cross-chain call.|
|`_callee`|`address`|Address of the contract to be called on the destination chain.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes`|Gas limit for cross-chain call.|


### _performCall

Internal function performs the call to LayerZero messaging layer Endpoint for cross-chain messaging.


```solidity
function _performCall(
    address payable _gasRefundee,
    bytes memory _payload,
    GasParams calldata _gParams,
    uint256 _baseExecutionGas
) internal virtual;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_gasRefundee`|`address payable`|address to refund excess gas to.|
|`_payload`|`bytes`|params for root bridge agent execution.|
|`_gParams`|`GasParams`|LayerZero gas information. (_gasLimit,_remoteBranchExecutionGas,_nativeTokenRecipientOnDstChain)|
|`_baseExecutionGas`|`uint256`|Minimum gas required for cross-chain call.|


### _performFallbackCall

Internal function performs the call to Layerzero Endpoint Contract for cross-chain messaging.


```solidity
function _performFallbackCall(address payable _gasRefundee, uint32 _settlementNonce) internal virtual;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_gasRefundee`|`address payable`|address to refund excess gas to.|
|`_settlementNonce`|`uint32`|root settlement nonce to fallback.|


### _createDeposit

Internal function to move assets from branch chain to root omnichain environment.
Naive assets are deposited and hTokens are bridgedOut.


```solidity
function _createDeposit(
    bool isSigned,
    uint32 _depositNonce,
    address _depositOwner,
    address _hToken,
    address _token,
    uint256 _amount,
    uint256 _deposit
) internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`isSigned`|`bool`||
|`_depositNonce`|`uint32`|Identifier for user deposit.|
|`_depositOwner`|`address`|owner address of the deposit.|
|`_hToken`|`address`|Local Input hToken Address.|
|`_token`|`address`|Native/Underlying Token Address.|
|`_amount`|`uint256`|Amount of Local hTokens deposited for trade.|
|`_deposit`|`uint256`|Amount of native tokens deposited for trade.|


### _createDepositMultiple

*Internal function to move assets from branch chain to root omnichain environment.
Naive assets are deposited and hTokens are bridgedOut.*


```solidity
function _createDepositMultiple(
    bool isSigned,
    uint32 _depositNonce,
    address _depositOwner,
    address[] memory _hTokens,
    address[] memory _tokens,
    uint256[] memory _amounts,
    uint256[] memory _deposits
) internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`isSigned`|`bool`||
|`_depositNonce`|`uint32`|Identifier for user deposit.|
|`_depositOwner`|`address`|owner address of the deposit.|
|`_hTokens`|`address[]`|Local Input hToken Address.|
|`_tokens`|`address[]`|Native/Underlying Token Address.|
|`_amounts`|`uint256[]`|Amount of Local hTokens deposited for trade.|
|`_deposits`|`uint256[]`| Amount of native tokens deposited for trade.|


### _retryDeposit

Internal function for validating and retrying a deposit.


```solidity
function _retryDeposit(bytes memory _payload, GasParams calldata _gParams, uint256 _minGas) internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_payload`|`bytes`|Payload for cross-chain call.|
|`_gParams`|`GasParams`|Gas parameters for cross-chain call.|
|`_minGas`|`uint256`|Minimum gas required for cross-chain call.|


### _clearToken

Function to request balance clearance from a Port to a given user.


```solidity
function _clearToken(address _recipient, address _hToken, address _token, uint256 _amount, uint256 _deposit) internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_recipient`|`address`|token receiver.|
|`_hToken`|`address`| local hToken address to clear balance for.|
|`_token`|`address`| native/underlying token address to clear balance for.|
|`_amount`|`uint256`|amounts of hToken to clear balance for.|
|`_deposit`|`uint256`|amount of native/underlying tokens to clear balance for.|


### lock

Modifier for a simple re-entrancy check.


```solidity
modifier lock();
```

### requiresEndpoint

Modifier verifies the caller is the Layerzero Enpoint or Local Branch Bridge Agent.


```solidity
modifier requiresEndpoint(uint16 _srcChainId, address _endpoint, bytes calldata _srcAddress);
```

### _requiresEndpoint

Internal function for caller verification. To be overwritten in `ArbitrumBranchBridgeAgent'.


```solidity
function _requiresEndpoint(uint16 _srcChainId, address _endpoint, bytes calldata _srcAddress) internal view virtual;
```

### requiresRouter

Modifier that verifies caller is Branch Bridge Agent's Router.


```solidity
modifier requiresRouter();
```

### requiresAgentExecutor

Modifier that verifies caller is the Bridge Agent Executor.


```solidity
modifier requiresAgentExecutor();
```

