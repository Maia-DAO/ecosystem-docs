---
id: RootBridgeAgent
title: RootBridgeAgent
---

**Inherits:**
[IRootBridgeAgent](/ulysses-omnichain/interfaces/IRootBridgeAgent.sol/interface.IRootBridgeAgent.md)


## State Variables
### PARAMS_START
AnyExec Consts


```solidity
uint8 internal constant PARAMS_START = 1;
```


### PARAMS_START_SIGNED

```solidity
uint8 internal constant PARAMS_START_SIGNED = 21;
```


### PARAMS_ADDRESS_SIZE

```solidity
uint8 internal constant PARAMS_ADDRESS_SIZE = 20;
```


### PARAMS_GAS_IN

```solidity
uint8 internal constant PARAMS_GAS_IN = 32;
```


### PARAMS_GAS_OUT

```solidity
uint8 internal constant PARAMS_GAS_OUT = 16;
```


### PARAMS_TKN_START
BridgeIn Consts


```solidity
uint8 internal constant PARAMS_TKN_START = 5;
```


### PARAMS_AMT_OFFSET

```solidity
uint8 internal constant PARAMS_AMT_OFFSET = 64;
```


### PARAMS_DEPOSIT_OFFSET

```solidity
uint8 internal constant PARAMS_DEPOSIT_OFFSET = 96;
```


### localChainId
Local Chain Id


```solidity
uint24 public immutable localChainId;
```


### wrappedNativeToken
Local Wrapped Native Token


```solidity
WETH9 public immutable wrappedNativeToken;
```


### factoryAddress
Bridge Agent Factory Address.


```solidity
address public immutable factoryAddress;
```


### daoAddress
Address of DAO.


```solidity
address public immutable daoAddress;
```


### localRouterAddress
Local Core Root Router Address


```solidity
address public immutable localRouterAddress;
```


### localPortAddress
Address for Local Port Address where funds deposited from this chain are stored.


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


### bridgeAgentExecutorAddress
Address of Root Bridge Agent Executor.


```solidity
address public immutable bridgeAgentExecutorAddress;
```


### getBranchBridgeAgent
Chain -> Branch Bridge Agent Address. For N chains, each Root Bridge Agent Address has M =< N Branch Bridge Agent Address.


```solidity
mapping(uint256 => address) public getBranchBridgeAgent;
```


### isBranchBridgeAgentAllowed
If true, bridge agent manager has allowed for a new given branch bridge agent to be synced/added.


```solidity
mapping(uint256 => bool) public isBranchBridgeAgentAllowed;
```


### settlementNonce
Deposit nonce used for identifying transaction.


```solidity
uint32 public settlementNonce;
```


### getSettlement
Mapping from Settlement nonce to Deposit Struct.


```solidity
mapping(uint32 => Settlement) public getSettlement;
```


### executionHistory
If true, bridge agent has already served a request with this nonce from  a given chain. Chain -> Nonce -> Bool


```solidity
mapping(uint256 => mapping(uint32 => bool)) public executionHistory;
```


### MIN_FALLBACK_RESERVE

```solidity
uint256 internal constant MIN_FALLBACK_RESERVE = 155_000;
```


### MIN_EXECUTION_OVERHEAD

```solidity
uint256 internal constant MIN_EXECUTION_OVERHEAD = 255_000;
```


### initialGas

```solidity
uint256 public initialGas;
```


### userFeeInfo

```solidity
UserFeeInfo public userFeeInfo;
```


### accumulatedFees

```solidity
uint256 public accumulatedFees;
```


### GLOBAL_DIVISIONER

```solidity
uint24 private constant GLOBAL_DIVISIONER = 1e6;
```


### approvedGasPool

```solidity
mapping(address => bool) private approvedGasPool;
```


### _unlocked
Modifier for a simple re-entrancy check.


```solidity
uint256 internal _unlocked = 1;
```


## Functions
### constructor

Constructor for Bridge Agent.


```solidity
constructor(
    WETH9 _wrappedNativeToken,
    uint24 _localChainId,
    address _daoAddress,
    address _localAnyCallAddress,
    address _localAnyCallExecutorAddress,
    address _localPortAddress,
    address _localRouterAddress
);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_wrappedNativeToken`|`WETH9`|Local Wrapped Native Token.|
|`_localChainId`|`uint24`|Local Chain Id.|
|`_daoAddress`|`address`|Address of DAO.|
|`_localAnyCallAddress`|`address`|Local Anycall Address.|
|`_localAnyCallExecutorAddress`|`address`||
|`_localPortAddress`|`address`|Local Port Address.|
|`_localRouterAddress`|`address`|Local Port Address.|


### getSettlementEntry

External function that returns a given settlement entry.


```solidity
function getSettlementEntry(uint32 _settlementNonce) external view returns (Settlement memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_settlementNonce`|`uint32`|Identifier for token settlement.|


### retrySettlement

Function to retry a user's Settlement balance.


```solidity
function retrySettlement(uint32 _settlementNonce, uint128 _remoteExecutionGas) external payable;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_settlementNonce`|`uint32`|Identifier for token settlement.|
|`_remoteExecutionGas`|`uint128`|Identifier for token settlement.|


### redeemSettlement

Function that allows redemption of failed Settlement's global tokens.


```solidity
function redeemSettlement(uint32 _depositNonce) external lock;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_depositNonce`|`uint32`|Identifier for token deposit.|


### callOut

External function performs call to AnycallProxy Contract for cross-chain messaging.

*Internal function performs call to AnycallProxy Contract for cross-chain messaging.*


```solidity
function callOut(address _recipient, bytes memory _data, uint24 _toChain) external payable lock requiresRouter;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_recipient`|`address`|address to receive any outstanding gas on the destination chain.|
|`_data`|`bytes`||
|`_toChain`|`uint24`|Chain to bridge to.|


### callOutAndBridge

External function to move assets from root chain to branch omnichain envirsonment.


```solidity
function callOutAndBridge(
    address _owner,
    address _recipient,
    bytes memory _data,
    address _globalAddress,
    uint256 _amount,
    uint256 _deposit,
    uint24 _toChain
) external payable lock requiresRouter;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_owner`|`address`|address allowed for redeeming assets after a failed settlement fallback. This address' Virtual Account is also allowed.|
|`_recipient`|`address`|recipient of bridged tokens and any outstanding gas on the destination chain.|
|`_data`|`bytes`|parameters for function call on branch chain.|
|`_globalAddress`|`address`|global token to be moved.|
|`_amount`|`uint256`|amount of ´token´.|
|`_deposit`|`uint256`|amount of native / underlying token.|
|`_toChain`|`uint24`|chain to bridge to.|


### callOutAndBridgeMultiple

External function to move assets from branch chain to root omnichain environment.


```solidity
function callOutAndBridgeMultiple(
    address _owner,
    address _recipient,
    bytes memory _data,
    address[] memory _globalAddresses,
    uint256[] memory _amounts,
    uint256[] memory _deposits,
    uint24 _toChain
) external payable lock requiresRouter;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_owner`|`address`|address allowed for redeeming assets after a failed settlement fallback. This address' Virtual Account is also allowed.|
|`_recipient`|`address`|recipient of bridged tokens.|
|`_data`|`bytes`|parameters for function call on branch chain.|
|`_globalAddresses`|`address[]`|global tokens to be moved.|
|`_amounts`|`uint256[]`|amounts of token.|
|`_deposits`|`uint256[]`|amounts of underlying / token.|
|`_toChain`|`uint24`|chain to bridge to.|


### bridgeIn

Function to move assets from branch chain to root omnichain environment. Called in response to Bridge Agent Executor.


```solidity
function bridgeIn(address _recipient, DepositParams memory _dParams, uint24 _fromChain) public requiresAgentExecutor;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_recipient`|`address`||
|`_dParams`|`DepositParams`|Cross-Chain Deposit of Multiple Tokens Params.|
|`_fromChain`|`uint24`|chain to bridge from.|


### bridgeInMultiple

Function to move assets from branch chain to root omnichain environment. Called in response to Bridge Agent Executor.

*Since the input data is encodePacked we need to parse it:
1. First byte is the number of assets to be bridged in. Equals length of all arrays.
2. Next 4 bytes are the nonce of the deposit.
3. Last 32 bytes after the token related information are the chain to bridge to.
4. Token related information starts at index PARAMS_TKN_START is encoded as follows:
1. N * 32 bytes for the hToken address.
2. N * 32 bytes for the underlying token address.
3. N * 32 bytes for the amount of hTokens to be bridged in.
4. N * 32 bytes for the amount of underlying tokens to be bridged in.
5. Each of the 4 token related arrays are of length N and start at the following indexes:
1. PARAMS_TKN_START [hToken address has no offset from token information start].
2. PARAMS_TKN_START + (PARAMS_ADDRESS_SIZE * N)
3. PARAMS_TKN_START + (PARAMS_AMT_OFFSET * N)
4. PARAMS_TKN_START + (PARAMS_DEPOSIT_OFFSET * N)*


```solidity
function bridgeInMultiple(address _recipient, DepositMultipleParams memory _dParams, uint24 _fromChain)
    external
    requiresAgentExecutor;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_recipient`|`address`||
|`_dParams`|`DepositMultipleParams`|Cross-Chain Deposit of Multiple Tokens Params.|
|`_fromChain`|`uint24`|chain to bridge from.|


### _updateStateOnBridgeOut

Updates the token balance state by moving assets from root omnichain environment to branch chain, when a user wants to bridge out tokens from the root bridge agent chain.


```solidity
function _updateStateOnBridgeOut(
    address _sender,
    address _globalAddress,
    address _localAddress,
    address _underlyingAddress,
    uint256 _amount,
    uint256 _deposit,
    uint24 _toChain
) internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_sender`|`address`|address of the sender.|
|`_globalAddress`|`address`|address of the global token.|
|`_localAddress`|`address`|address of the local token.|
|`_underlyingAddress`|`address`|address of the underlying token.|
|`_amount`|`uint256`|amount of hTokens to be bridged out.|
|`_deposit`|`uint256`|amount of underlying tokens to be bridged out.|
|`_toChain`|`uint24`|chain to bridge to.|


### _createSettlement

Function to store a Settlement instance. Settlement should be reopened if fallback occurs.


```solidity
function _createSettlement(
    address _owner,
    address _recipient,
    address _hToken,
    address _token,
    uint256 _amount,
    uint256 _deposit,
    bytes memory _callData,
    uint24 _toChain
) internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_owner`|`address`|settlement owner address.|
|`_recipient`|`address`|destination chain reciever address.|
|`_hToken`|`address`|deposited global token address.|
|`_token`|`address`|deposited global token address.|
|`_amount`|`uint256`|amounts of total hTokens + Tokens output.|
|`_deposit`|`uint256`|amount of underlying / native token to output.|
|`_callData`|`bytes`|calldata to execute on destination Router.|
|`_toChain`|`uint24`|Destination chain identificator.|


### _createMultipleSettlement

Function to create a settlemment. Settlement should be reopened if fallback occurs.


```solidity
function _createMultipleSettlement(
    address _owner,
    address _recipient,
    address[] memory _hTokens,
    address[] memory _tokens,
    uint256[] memory _amounts,
    uint256[] memory _deposits,
    bytes memory _callData,
    uint24 _toChain
) internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_owner`|`address`|settlement owner address.|
|`_recipient`|`address`|destination chain reciever address.|
|`_hTokens`|`address[]`|deposited global token addresses.|
|`_tokens`|`address[]`|deposited global token addresses.|
|`_amounts`|`uint256[]`|amounts of total hTokens + Tokens output.|
|`_deposits`|`uint256[]`|amount of underlying / native tokens to output.|
|`_callData`|`bytes`|calldata to execute on destination Router.|
|`_toChain`|`uint24`|Destination chain identificator.|


### _retrySettlement

Function to retry a user's Settlement balance with a new amount of gas to bridge out of Root Bridge Agent's Omnichain Environment.


```solidity
function _retrySettlement(uint32 _settlementNonce) internal returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_settlementNonce`|`uint32`|Identifier for token settlement.|


### _redeemSettlement

Function to retry a user's Settlement balance.


```solidity
function _redeemSettlement(uint32 _settlementNonce) internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_settlementNonce`|`uint32`|Identifier for token settlement.|


### _reopenSettlemment

Function to reopen a user's Settlement balance as pending and thus retryable by users. Called upon anyFallback of triggered by Branch Bridge Agent.


```solidity
function _reopenSettlemment(uint32 _settlementNonce) internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_settlementNonce`|`uint32`|Identifier for token settlement.|


### _getAndIncrementSettlementNonce

Function that returns Deposit nonce and increments nonce counter.


```solidity
function _getAndIncrementSettlementNonce() internal returns (uint32);
```

### uniswapV3SwapCallback

Checks if a pool is eligible to call uniswapV3SwapCallback


```solidity
function uniswapV3SwapCallback(int256 amount0, int256 amount1, bytes calldata _data) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`amount0`|`int256`|amount of token0 to swap|
|`amount1`|`int256`|amount of token1 to swap|
|`_data`|`bytes`|abi encoded data|


### _gasSwapIn

Swaps gas tokens from the given branch chain to the root chain


```solidity
function _gasSwapIn(uint256 _amount, uint24 _fromChain) internal returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_amount`|`uint256`|amount of gas token to swap|
|`_fromChain`|`uint24`|chain to swap from|


### _gasSwapOut

Swaps gas tokens from the given root chain to the branch chain


```solidity
function _gasSwapOut(uint256 _amount, uint24 _toChain) internal returns (uint256, address);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_amount`|`uint256`|amount of gas token to swap|
|`_toChain`|`uint24`|chain to swap to|


### _manageGasOut

Manages gas costs of bridging from Root to a given Branch.


```solidity
function _manageGasOut(uint24 _toChain) internal returns (uint128);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_toChain`|`uint24`|destination chain.|


### _performCall

Internal function performs call to AnycallProxy Contract for cross-chain messaging.


```solidity
function _performCall(bytes memory _calldata, uint256 _toChain) internal;
```

### _payExecutionGas

Pays for the remote call execution gas. Demands that the user has enough gas to replenish gas for the anycall config contract or forces reversion.


```solidity
function _payExecutionGas(uint128 _depositedGas, uint128 _gasToBridgeOut, uint256 _initialGas, uint24 _fromChain)
    internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_depositedGas`|`uint128`|available user gas to pay for execution.|
|`_gasToBridgeOut`|`uint128`|amount of gas needed to bridge out.|
|`_initialGas`|`uint256`|initial gas used by the transaction.|
|`_fromChain`|`uint24`|chain remote action initiated from.|


### _payFallbackGas

Updates the user deposit with the amount of gas needed to pay for the fallback function execution.


```solidity
function _payFallbackGas(uint32 _settlementNonce, uint256 _initialGas) internal virtual;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_settlementNonce`|`uint32`|nonce of the failed settlement|
|`_initialGas`|`uint256`|initial gas available for this transaction|


### _replenishGas


```solidity
function _replenishGas(uint256 _executionGasSpent) internal;
```

### _getContext

Internal function that return 'from' address and 'fromChain' Id by performing an external call to AnycallExecutor Context.


```solidity
function _getContext() internal view returns (address from, uint256 fromChainId);
```

### anyExecute

(required) call on the destination chain to exec the interaction


```solidity
function anyExecute(bytes calldata data)
    external
    virtual
    requiresExecutor
    returns (bool success, bytes memory result);
```

### anyFallback

DEPOSIT FLAG: 7 (retrySettlement)
DEPOSIT FLAG: 8 (retrieveDeposit)


```solidity
function anyFallback(bytes calldata data)
    external
    virtual
    requiresExecutor
    returns (bool success, bytes memory result);
```

### depositGasAnycallConfig

SETTLEMENT FLAG: 1 (single asset settlement)
SETTLEMENT FLAG: 1 (single asset settlement)
SETTLEMENT FLAG: 2 (multiple asset settlement)


```solidity
function depositGasAnycallConfig() external payable;
```

### forceRevert

Function to force revert when a remote action does not have enough gas or is being retried after having been previously executed.


```solidity
function forceRevert() external requiresLocalBranchBridgeAgent;
```

### _forceRevert

Reverts the current transaction with a "no enough budget" message.

*This function is used to revert the current transaction with a "no enough budget" message.*


```solidity
function _forceRevert() internal;
```

### approveBranchBridgeAgent

Adds a new branch bridge agent to a given branch chainId


```solidity
function approveBranchBridgeAgent(uint256 _branchChainId) external requiresManager;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_branchChainId`|`uint256`|chainId of the branch chain|


### syncBranchBridgeAgent

Updates the address of the branch bridge agent


```solidity
function syncBranchBridgeAgent(address _newBranchBridgeAgent, uint24 _branchChainId) external requiresPort;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_newBranchBridgeAgent`|`address`|address of the new branch bridge agent|
|`_branchChainId`|`uint24`|chainId of the branch chain|


### sweep

Function to collect excess gas fees.

*only callable by the DAO.*


```solidity
function sweep() external;
```

### lock


```solidity
modifier lock();
```

### requiresExecutor

require msg sender == active branch interface


```solidity
modifier requiresExecutor();
```

### _requiresExecutor

reuse to reduce contract bytesize


```solidity
function _requiresExecutor() internal view;
```

### requiresRouter

require msg sender == active branch interface


```solidity
modifier requiresRouter();
```

### _requiresRouter

reuse to reduce contract bytesize


```solidity
function _requiresRouter() internal view;
```

### requiresAgentExecutor

Modifier that verifies msg sender is an active bridgeAgent.


```solidity
modifier requiresAgentExecutor();
```

### requiresLocalBranchBridgeAgent

Modifier that verifies msg sender is an active bridgeAgent.


```solidity
modifier requiresLocalBranchBridgeAgent();
```

### requiresPort

Modifier that verifies msg sender is an active bridgeAgent.


```solidity
modifier requiresPort();
```

### requiresManager

Modifier that verifies msg sender is an active bridgeAgent.


```solidity
modifier requiresManager();
```

### fallback


```solidity
fallback() external payable;
```

