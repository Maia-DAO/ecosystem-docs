# RootBridgeAgent
[Git Source](https://github.com/Maia-DAO/2023-09-maia-remediations/blob/main/src/RootBridgeAgent.sol)

**Inherits:**
[IRootBridgeAgent](/src/ulysses-omnichain/interfaces/IRootBridgeAgent.md), [BridgeAgentConstants](/src/ulysses-omnichain/interfaces/BridgeAgentConstants.md)

**Author:**
MaiaDAO


## State Variables
### localChainId
Local Chain Id


```solidity
uint16 public immutable localChainId;
```


### factoryAddress
Bridge Agent Factory Address.


```solidity
address public immutable factoryAddress;
```


### rootRouterAddress
Local Core Root Router Address


```solidity
address public immutable rootRouterAddress;
```


### rootPortAddress
Local Port Address where funds deposited from this chain are stored.


```solidity
address public immutable rootPortAddress;
```


### lzEndpointAddress
Local Layer Zero Endpoint Address for cross-chain communication.


```solidity
address public immutable lzEndpointAddress;
```


### bridgeAgentExecutorAddress
Address of Root Bridge Agent Executor.


```solidity
address public immutable bridgeAgentExecutorAddress;
```


### pendingBridgeAgentManagerAddress
Address of the pending Root Bridge Agent Manager.


```solidity
address public pendingBridgeAgentManagerAddress;
```


### getBranchBridgeAgent
Chain -> Branch Bridge Agent Address. For N chains, each Root Bridge Agent Address has M =< N Branch Bridge Agent Address.


```solidity
mapping(uint256 chainId => address branchBridgeAgent) public getBranchBridgeAgent;
```


### getBranchBridgeAgentPath
Message Path for each connected Branch Bridge Agent as bytes for Layzer Zero interaction = localAddress + destinationAddress abi.encodePacked()


```solidity
mapping(uint256 chainId => bytes branchBridgeAgentPath) public getBranchBridgeAgentPath;
```


### isBranchBridgeAgentAllowed
If true, bridge agent manager has allowed for a new given branch bridge agent to be synced/added.


```solidity
mapping(uint256 chainId => bool allowed) public isBranchBridgeAgentAllowed;
```


### settlementNonce
Deposit nonce used for identifying the transaction.


```solidity
uint32 public settlementNonce;
```


### getSettlement
Mapping from Settlement nonce to Settlement Struct.


```solidity
mapping(uint256 nonce => Settlement settlementInfo) public getSettlement;
```


### executionState
If true, the bridge agent has already served a request with this nonce from  a given chain. Chain -> Nonce -> Bool


```solidity
mapping(uint256 chainId => mapping(uint256 nonce => uint256 state)) public executionState;
```


### _unlocked
Re-entrancy lock modifier state.


```solidity
uint256 internal _unlocked = 1;
```


## Functions
### constructor

Constructor for Bridge Agent.


```solidity
constructor(uint16 _localChainId, address _lzEndpointAddress, address _rootPortAddress, address _rootRouterAddress);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_localChainId`|`uint16`|Local Chain Id.|
|`_lzEndpointAddress`|`address`|Local Layerzero Endpoint Address.|
|`_rootPortAddress`|`address`|Local Port Address.|
|`_rootRouterAddress`|`address`|Local Port Address.|


### receive


```solidity
receive() external payable;
```

### getSettlementEntry

External function that returns a given settlement entry.


```solidity
function getSettlementEntry(uint32 _settlementNonce) external view override returns (Settlement memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_settlementNonce`|`uint32`|Identifier for token settlement.|


### callOut

External function performs call to LayerZero Endpoint Contract for cross-chain messaging.

*Internal function performs call to LayerZero Endpoint Contract for cross-chain messaging.*


```solidity
function callOut(
    address payable _gasRefundee,
    address _recipient,
    uint16 _dstChainId,
    bytes calldata _params,
    GasParams calldata _gParams
) external payable override lock requiresRouter;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_gasRefundee`|`address payable`|Address to return excess gas deposited in `msg.value` to.|
|`_recipient`|`address`|address to receive any outstanding gas on the destination chain.|
|`_dstChainId`|`uint16`|Chain to bridge to.|
|`_params`|`bytes`|Calldata for function call.|
|`_gParams`|`GasParams`|Gas Parameters for cross-chain message.|


### callOutAndBridge

External function to move assets from root chain to branch omnichain environment.


```solidity
function callOutAndBridge(
    address payable _settlementOwnerAndGasRefundee,
    address _recipient,
    uint16 _dstChainId,
    bytes calldata _params,
    SettlementInput calldata _sParams,
    GasParams calldata _gParams,
    bool _hasFallbackToggled
) external payable override lock requiresRouter;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_settlementOwnerAndGasRefundee`|`address payable`|the effective owner of the settlement this address receives excess gas deposited on source chain for a cross-chain call and is allowed to redeeming assets after a failed settlement fallback. This address' Virtual Account is also allowed.|
|`_recipient`|`address`|recipient of bridged tokens and any outstanding gas on the destination chain.|
|`_dstChainId`|`uint16`|chain to bridge to.|
|`_params`|`bytes`|parameters for function call on branch chain.|
|`_sParams`|`SettlementInput`|settlement parameters for asset bridging to branch chains.|
|`_gParams`|`GasParams`|Gas Parameters for cross-chain message.|
|`_hasFallbackToggled`|`bool`|Flag to toggle fallback function.|


### callOutAndBridgeMultiple

External function to move assets from branch chain to root omnichain environment.


```solidity
function callOutAndBridgeMultiple(
    address payable _settlementOwnerAndGasRefundee,
    address _recipient,
    uint16 _dstChainId,
    bytes calldata _params,
    SettlementMultipleInput calldata _sParams,
    GasParams calldata _gParams,
    bool _hasFallbackToggled
) external payable override lock requiresRouter;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_settlementOwnerAndGasRefundee`|`address payable`|the effective owner of the settlement this address receives excess gas deposited on source chain for a cross-chain call and is allowed to redeeming assets after a failed settlement fallback. This address' Virtual Account is also allowed.|
|`_recipient`|`address`|recipient of bridged tokens.|
|`_dstChainId`|`uint16`|chain to bridge to.|
|`_params`|`bytes`|parameters for function call on branch chain.|
|`_sParams`|`SettlementMultipleInput`|settlement parameters for asset bridging to branch chains.|
|`_gParams`|`GasParams`|Gas Parameters for cross-chain message.|
|`_hasFallbackToggled`|`bool`|Flag to toggle fallback function.|


### retrySettlement

Function to retry a user's Settlement balance.


```solidity
function retrySettlement(
    address _settlementOwnerAndGasRefundee,
    uint32 _settlementNonce,
    address _recipient,
    bytes calldata _params,
    GasParams calldata _gParams,
    bool _hasFallbackToggled
) external payable override requiresRouter lock;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_settlementOwnerAndGasRefundee`|`address`|owner of the settlement and gas refundee.|
|`_settlementNonce`|`uint32`|Identifier for token settlement.|
|`_recipient`|`address`|recipient of bridged tokens and any outstanding gas on the destination chain.|
|`_params`|`bytes`|Calldata for function call in branch chain.|
|`_gParams`|`GasParams`|Gas Parameters for cross-chain message.|
|`_hasFallbackToggled`|`bool`|Flag to toggle fallback function.|


### retrieveSettlement

Function that allows retrieval of failed Settlement's foricng fallback to be triggered.


```solidity
function retrieveSettlement(uint32 _settlementNonce, GasParams calldata _gParams) external payable lock;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_settlementNonce`|`uint32`|Identifier for token settlement.|
|`_gParams`|`GasParams`|Gas Parameters for cross-chain message.|


### redeemSettlement

Function that allows redemption of failed Settlement's global tokens.


```solidity
function redeemSettlement(uint32 _settlementNonce, address _recipient) external override lock;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_settlementNonce`|`uint32`||
|`_recipient`|`address`|recipient of redeemed root/global tokens.|


### bridgeIn

Function to move assets from branch chain to root omnichain environment.

*Called in response to Bridge Agent Executor.*


```solidity
function bridgeIn(address _recipient, DepositParams memory _dParams, uint256 _srcChainId)
    public
    override
    requiresAgentExecutor;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_recipient`|`address`|recipient of bridged token.|
|`_dParams`|`DepositParams`|Cross-Chain Deposit of Multiple Tokens Params.|
|`_srcChainId`|`uint256`|chain to bridge from.|


### bridgeInMultiple

Function to move assets from branch chain to root omnichain environment.

*Called in response to Bridge Agent Executor.*


```solidity
function bridgeInMultiple(address _recipient, DepositMultipleParams calldata _dParams, uint256 _srcChainId)
    external
    override
    requiresAgentExecutor;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_recipient`|`address`|recipient of bridged tokens.|
|`_dParams`|`DepositMultipleParams`|Cross-Chain Deposit of Multiple Tokens Params.|
|`_srcChainId`|`uint256`|chain to bridge from.|


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
) public payable override requiresEndpoint(_endpoint, _srcChainId, _srcAddress);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_endpoint`|`address`|address of the LayerZero Endpoint Contract.|
|`_srcChainId`|`uint16`||
|`_srcAddress`|`bytes`|address path of the recipient + sender.|
|`_payload`|`bytes`|Calldata for function call.|


### forceResumeReceive

DEPOSIT FLAG: 7 (retrySettlement)
DEPOSIT FLAG: 8 (retrieveDeposit)


```solidity
function forceResumeReceive(uint16 _srcChainId, bytes calldata _srcAddress) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_srcChainId`|`uint16`|the chainId of the source chain|
|`_srcAddress`|`bytes`|the contract address of the source contract at the source chain|


### _execute

Internal function requests execution from Root Bridge Agent Executor Contract.


```solidity
function _execute(uint256 _depositNonce, bytes memory _calldata, uint16 _srcChainId) private;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_depositNonce`|`uint256`|Identifier for nonce being executed.|
|`_calldata`|`bytes`|Payload of message to be executed by the Root Bridge Agent Executor Contract.|
|`_srcChainId`|`uint16`|Chain ID of source chain where request originates from.|


### _execute

Internal function requests execution from Root Bridge Agent Executor Contract.


```solidity
function _execute(
    bool _hasFallbackToggled,
    uint32 _depositNonce,
    address _gasRefundee,
    bytes memory _calldata,
    uint16 _srcChainId
) private;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_hasFallbackToggled`|`bool`|if true, fallback on execution failure is toggled on.|
|`_depositNonce`|`uint32`|Identifier for nonce being executed.|
|`_gasRefundee`|`address`|address to refund gas to in case of fallback being triggered.|
|`_calldata`|`bytes`|Calldata to be executed by the Root Bridge Agent Executor Contract.|
|`_srcChainId`|`uint16`|Chain ID of source chain where request originates from.|


### _encodeAdapterParams

Internal function to encode the Adapter Params for LayerZero Endpoint.

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
|`_callee`|`address`|Address of the Branch Bridge Agent.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes`|Gas limit for cross-chain call.|


### _performCall

Internal function performs call to Layer Zero Endpoint Contract for cross-chain messaging.


```solidity
function _performCall(
    uint16 _dstChainId,
    address payable _gasRefundee,
    bytes memory _payload,
    GasParams calldata _gParams,
    uint256 _baseExecutionGas
) internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_dstChainId`|`uint16`|Layer Zero Chain ID of destination chain.|
|`_gasRefundee`|`address payable`|address to refund excess gas to.|
|`_payload`|`bytes`|Payload of message to be sent to Layer Zero Endpoint Contract.|
|`_gParams`|`GasParams`|Gas parameters for cross-chain message execution.|
|`_baseExecutionGas`|`uint256`|Minimum gas required for cross-chain call.|


### _performFallbackCall

Internal function performs call to Layerzero Enpoint Contract for cross-chain messaging.


```solidity
function _performFallbackCall(address payable _gasRefundee, uint32 _depositNonce, uint16 _dstChainId) internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_gasRefundee`|`address payable`|address to refund excess gas to.|
|`_depositNonce`|`uint32`|branch deposit nonce.|
|`_dstChainId`|`uint16`|Chain ID of destination chain.|


### _createSettlement

Function to settle a single asset and perform a remote call to a branch chain.


```solidity
function _createSettlement(
    uint32 _settlementNonce,
    address _settlementOwner,
    address _recipient,
    uint16 _dstChainId,
    bytes memory _params,
    address _globalAddress,
    uint256 _amount,
    uint256 _deposit,
    bool _hasFallbackToggled
) internal returns (bytes memory _payload);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_settlementNonce`|`uint32`|Identifier for token settlement.|
|`_settlementOwner`|`address`|address of settlement owner.|
|`_recipient`|`address`|destination chain token receiver address.|
|`_dstChainId`|`uint16`|branch chain to bridge to.|
|`_params`|`bytes`|params for branch bridge agent and router execution.|
|`_globalAddress`|`address`|global address of the token in root chain.|
|`_amount`|`uint256`|amount of hTokens to be bridged out.|
|`_deposit`|`uint256`|amount of underlying tokens to be cleared from branch port.|
|`_hasFallbackToggled`|`bool`|if true, fallback is toggled on.|


### _createSettlementMultiple

Function to settle multiple assets and perform a remote call to a branch chain.


```solidity
function _createSettlementMultiple(
    uint32 _settlementNonce,
    address _settlementOwner,
    address _recipient,
    uint16 _dstChainId,
    address[] memory _globalAddresses,
    uint256[] memory _amounts,
    uint256[] memory _deposits,
    bytes memory _params,
    bool _hasFallbackToggled
) internal returns (bytes memory _payload);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_settlementNonce`|`uint32`|Identifier for token settlement.|
|`_settlementOwner`|`address`|address of settlement owner.|
|`_recipient`|`address`|destination chain token receiver address.|
|`_dstChainId`|`uint16`|branch chain to bridge to.|
|`_globalAddresses`|`address[]`|addresses of the global tokens in root chain.|
|`_amounts`|`uint256[]`|amounts of hTokens to be bridged out.|
|`_deposits`|`uint256[]`|amounts of underlying tokens to be cleared from branch port.|
|`_params`|`bytes`|params for branch bridge agent and router execution.|
|`_hasFallbackToggled`|`bool`|if true, fallback is toggled on.|


### _retrySettlement

Internal function performs call to Layer Zero Endpoint Contract for cross-chain messaging.


```solidity
function _retrySettlement(
    bool _hasFallbackToggled,
    address[] memory _hTokens,
    address[] memory _tokens,
    uint256[] memory _amounts,
    uint256[] memory _deposits,
    bytes calldata _params,
    uint32 _settlementNonce,
    address payable _gasRefundee,
    address _recipient,
    uint16 _dstChainId,
    GasParams calldata _gParams
) internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_hasFallbackToggled`|`bool`|if true, fallback is toggled on.|
|`_hTokens`|`address[]`|deposited global token address.|
|`_tokens`|`address[]`|deposited global token address.|
|`_amounts`|`uint256[]`|amounts of total hTokens + Tokens output.|
|`_deposits`|`uint256[]`|amount of underlying/native tokens to output.|
|`_params`|`bytes`|Payload of message to be sent to Layer Zero Endpoint Contract.|
|`_settlementNonce`|`uint32`|Identifier for token settlement.|
|`_gasRefundee`|`address payable`|address of token owner and gas refundee.|
|`_recipient`|`address`|destination chain receiver address.|
|`_dstChainId`|`uint16`|Chain ID of destination chain.|
|`_gParams`|`GasParams`|Gas parameters for cross-chain message execution.|


### _checkSettlementOwner


```solidity
function _checkSettlementOwner(address caller, address settlementOwner) internal view;
```

### _updateStateOnBridgeOut

Updates the token balance state by moving assets from root omnichain environment to branch chain,
when a user wants to bridge out tokens from the root bridge agent chain.


```solidity
function _updateStateOnBridgeOut(
    address _depositor,
    address _globalAddress,
    address _localAddress,
    address _underlyingAddress,
    uint256 _amount,
    uint256 _deposit,
    uint16 _dstChainId
) internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_depositor`|`address`|address of the token depositor.|
|`_globalAddress`|`address`|address of the global token.|
|`_localAddress`|`address`|address of the local token.|
|`_underlyingAddress`|`address`|address of the underlying token.|
|`_amount`|`uint256`|amount of hTokens to be bridged out.|
|`_deposit`|`uint256`|amount of underlying tokens to be bridged out.|
|`_dstChainId`|`uint16`|chain to bridge to.|


### approveBranchBridgeAgent

Adds a new branch bridge agent to a given branch chainId


```solidity
function approveBranchBridgeAgent(uint256 _branchChainId) external override requiresManager;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_branchChainId`|`uint256`|chainId of the branch chain|


### syncBranchBridgeAgent

Updates the address of the branch bridge agent


```solidity
function syncBranchBridgeAgent(address _newBranchBridgeAgent, uint256 _branchChainId) external override requiresPort;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_newBranchBridgeAgent`|`address`|address of the new branch bridge agent|
|`_branchChainId`|`uint256`|chainId of the branch chain|


### transferManagementRole

Allows current bridge agent manager to allowlist a successor address.


```solidity
function transferManagementRole(address _newManager) external override requiresManager;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_newManager`|`address`|address of the new bridge agent manager.|


### acceptManagementRole

Used by the new bridge agent manager to accept the management role.


```solidity
function acceptManagementRole() external override;
```

### lock

Modifier for a simple re-entrancy check.


```solidity
modifier lock();
```

### requiresRouter

Internal function to verify msg sender is Bridge Agent's Router.


```solidity
modifier requiresRouter();
```

### requiresEndpoint

Modifier verifies the caller is the Layerzero Enpoint or Local Branch Bridge Agent.


```solidity
modifier requiresEndpoint(address _endpoint, uint16 _srcChain, bytes calldata _srcAddress) virtual;
```

### requiresAgentExecutor

Modifier that verifies msg sender is Bridge Agent Executor.

*Allow eth_estimateGas to be called by zero address to mock layerzero's endpoint.*


```solidity
modifier requiresAgentExecutor();
```

### requiresPort

Modifier that verifies msg sender is the Local Port.


```solidity
modifier requiresPort();
```

### requiresManager

Modifier that verifies msg sender is the Bridge Agent's Manager.


```solidity
modifier requiresManager();
```

