---
id: BranchBridgeAgent
title: BranchBridgeAgent
---

**Inherits:**
[IBranchBridgeAgent](/ulysses-omnichain/interfaces/IBranchBridgeAgent.sol/interface.IBranchBridgeAgent.md)


## State Variables
### PARAMS_START
AnyExec Decode Consts


```solidity
uint8 internal constant PARAMS_START = 1;
```


### PARAMS_START_SIGNED

```solidity
uint8 internal constant PARAMS_START_SIGNED = 21;
```


### PARAMS_ENTRY_SIZE

```solidity
uint8 internal constant PARAMS_ENTRY_SIZE = 32;
```


### PARAMS_GAS_OUT

```solidity
uint8 internal constant PARAMS_GAS_OUT = 16;
```


### PARAMS_TKN_START
ClearTokens Decode Consts


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


### rootChainId
Chain Id for Root Chain where liqudity is virtualized(e.g. 4).


```solidity
uint256 public immutable rootChainId;
```


### localChainId
Chain Id for Local Chain.


```solidity
uint256 public immutable localChainId;
```


### wrappedNativeToken
Address for Local Wrapped Native Token.


```solidity
WETH9 public immutable wrappedNativeToken;
```


### rootBridgeAgentAddress
Address for Bridge Agent who processes requests submitted for the Root Router Address where cross-chain requests are executed in the Root Chain.


```solidity
address public immutable rootBridgeAgentAddress;
```


### localAnyCallAddress
Address for Local AnycallV7 Proxy Address where cross-chain requests are sent to the Root Chain Router.


```solidity
address public immutable localAnyCallAddress;
```


### localAnyCallExecutorAddress
Address for Local Anyexec Address where cross-chain requests from the Root Chain Router are received locally.


```solidity
address public immutable localAnyCallExecutorAddress;
```


### localRouterAddress
Address for Local Router used for custom actions for different hApps.


```solidity
address public immutable localRouterAddress;
```


### localPortAddress
Address for Local Port Address where funds deposited from this chain are kept, managed and supplied to different Port Strategies.


```solidity
address public immutable localPortAddress;
```


### bridgeAgentExecutorAddress

```solidity
address public bridgeAgentExecutorAddress;
```


### depositNonce
Deposit nonce used for identifying transaction.


```solidity
uint32 public depositNonce;
```


### getDeposit
Mapping from Pending deposits hash to Deposit Struct.


```solidity
mapping(uint32 => Deposit) public getDeposit;
```


### executionHistory
If true, bridge agent has already served a request with this nonce from  a given chain. Chain -> Nonce -> Bool


```solidity
mapping(uint32 => bool) public executionHistory;
```


### remoteCallDepositedGas

```solidity
uint256 public remoteCallDepositedGas;
```


### MIN_FALLBACK_RESERVE

```solidity
uint256 internal constant MIN_FALLBACK_RESERVE = 185_000;
```


### MIN_EXECUTION_OVERHEAD

```solidity
uint256 internal constant MIN_EXECUTION_OVERHEAD = 260_000;
```


### TRANSFER_OVERHEAD

```solidity
uint256 internal constant TRANSFER_OVERHEAD = 24_000;
```


### _unlocked
Modifier for a simple re-entrancy check.


```solidity
uint256 internal _unlocked = 1;
```


## Functions
### constructor


```solidity
constructor(
    WETH9 _wrappedNativeToken,
    uint256 _rootChainId,
    uint256 _localChainId,
    address _rootBridgeAgentAddress,
    address _localAnyCallAddress,
    address _localAnyCallExecutorAddress,
    address _localRouterAddress,
    address _localPortAddress
);
```

### getDepositEntry

*External function that returns a given deposit entry.*


```solidity
function getDepositEntry(uint32 _depositNonce) external view returns (Deposit memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_depositNonce`|`uint32`|Identifier for user deposit.|


### callOut

Function to perform a call to the Root Omnichain Router without token deposit.

*DEPOSIT ID: 1 (Call without deposit)*


```solidity
function callOut(bytes calldata _params, uint128 _remoteExecutionGas) external payable lock requiresFallbackGas;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_params`|`bytes`||
|`_remoteExecutionGas`|`uint128`||


### callOutAndBridge

Function to perform a call to the Root Omnichain Router while depositing a single asset.

*DEPOSIT ID: 2 (Call with single deposit)*


```solidity
function callOutAndBridge(bytes calldata _params, DepositInput memory _dParams, uint128 _remoteExecutionGas)
    external
    payable
    lock
    requiresFallbackGas;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_params`|`bytes`||
|`_dParams`|`DepositInput`||
|`_remoteExecutionGas`|`uint128`||


### callOutAndBridgeMultiple

Function to perform a call to the Root Omnichain Router while depositing two or more assets.

*DEPOSIT ID: 3 (Call with multiple deposit)*


```solidity
function callOutAndBridgeMultiple(
    bytes calldata _params,
    DepositMultipleInput memory _dParams,
    uint128 _remoteExecutionGas
) external payable lock requiresFallbackGas;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_params`|`bytes`||
|`_dParams`|`DepositMultipleInput`||
|`_remoteExecutionGas`|`uint128`||


### callOutSigned

Function to perform a call to the Root Omnichain Router without token deposit with msg.sender information.

*DEPOSIT ID: 4 (Call without deposit and verified sender)*


```solidity
function callOutSigned(bytes calldata _params, uint128 _remoteExecutionGas) external payable lock requiresFallbackGas;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_params`|`bytes`||
|`_remoteExecutionGas`|`uint128`||


### callOutSignedAndBridge

Function to perform a call to the Root Omnichain Router while depositing a single asset msg.sender.

*DEPOSIT ID: 5 (Call with single deposit and verified sender)*


```solidity
function callOutSignedAndBridge(bytes calldata _params, DepositInput memory _dParams, uint128 _remoteExecutionGas)
    external
    payable
    lock
    requiresFallbackGas;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_params`|`bytes`||
|`_dParams`|`DepositInput`||
|`_remoteExecutionGas`|`uint128`||


### callOutSignedAndBridgeMultiple

Function to perform a call to the Root Omnichain Router while depositing two or more assets with msg.sender.

*DEPOSIT ID: 6 (Call with multiple deposit and verified sender)*


```solidity
function callOutSignedAndBridgeMultiple(
    bytes calldata _params,
    DepositMultipleInput memory _dParams,
    uint128 _remoteExecutionGas
) external payable lock requiresFallbackGas;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_params`|`bytes`||
|`_dParams`|`DepositMultipleInput`||
|`_remoteExecutionGas`|`uint128`||


### retryDeposit

Function to perform a call to the Root Omnichain Environment retrying a failed deposit that hasn't been executed yet.


```solidity
function retryDeposit(
    bool _isSigned,
    uint32 _depositNonce,
    bytes calldata _params,
    uint128 _remoteExecutionGas,
    uint24 _toChain
) external payable lock requiresFallbackGas;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_isSigned`|`bool`|Flag to indicate if the deposit was signed.|
|`_depositNonce`|`uint32`|Identifier for user deposit.|
|`_params`|`bytes`|parameters to execute on the root chain router.|
|`_remoteExecutionGas`|`uint128`|gas allocated for remote branch execution.|
|`_toChain`|`uint24`|Destination chain for interaction.|


### retrySettlement

External function to retry a failed Settlement entry on the root chain.

*DEPOSIT ID: 7*


```solidity
function retrySettlement(uint32 _settlementNonce, uint128 _gasToBoostSettlement)
    external
    payable
    lock
    requiresFallbackGas;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_settlementNonce`|`uint32`|Identifier for user settlement.|
|`_gasToBoostSettlement`|`uint128`|Amount of gas to boost settlement.|


### retrieveDeposit

External function to request tokens back to branch chain after a failed omnichain environment interaction.

*DEPOSIT ID: 8*


```solidity
function retrieveDeposit(uint32 _depositNonce) external payable lock requiresFallbackGas;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_depositNonce`|`uint32`|Identifier for user deposit to retrieve.|


### _sendRetrieveOrRetry


```solidity
function _sendRetrieveOrRetry(bytes memory _data) internal;
```

### redeemDeposit

External function to retry a failed Deposit entry on this branch chain.


```solidity
function redeemDeposit(uint32 _depositNonce) external lock;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_depositNonce`|`uint32`|Identifier for user deposit.|


### performSystemCallOut

Internal function performs call to AnycallProxy Contract for cross-chain messaging.

*DEPOSIT ID: 0 (System Call / Response)*


```solidity
function performSystemCallOut(
    address _depositor,
    bytes calldata _params,
    uint128 _gasToBridgeOut,
    uint128 _remoteExecutionGas
) external payable lock requiresRouter;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_depositor`|`address`||
|`_params`|`bytes`||
|`_gasToBridgeOut`|`uint128`||
|`_remoteExecutionGas`|`uint128`||


### performCallOut

Internal function performs call to AnycallProxy Contract for cross-chain messaging.

*DEPOSIT ID: 1 (Call without Deposit)*


```solidity
function performCallOut(
    address _depositor,
    bytes calldata _params,
    uint128 _gasToBridgeOut,
    uint128 _remoteExecutionGas
) external payable lock requiresRouter;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_depositor`|`address`||
|`_params`|`bytes`||
|`_gasToBridgeOut`|`uint128`||
|`_remoteExecutionGas`|`uint128`||


### performCallOutAndBridge

Function to perform a call to the Root Omnichain Router while depositing a single asset.

*DEPOSIT ID: 2 (Call with single asset Deposit)*


```solidity
function performCallOutAndBridge(
    address _depositor,
    bytes calldata _params,
    DepositInput memory _dParams,
    uint128 _gasToBridgeOut,
    uint128 _remoteExecutionGas
) external payable lock requiresRouter;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_depositor`|`address`||
|`_params`|`bytes`||
|`_dParams`|`DepositInput`||
|`_gasToBridgeOut`|`uint128`||
|`_remoteExecutionGas`|`uint128`||


### performCallOutAndBridgeMultiple

Function to perform a call to the Root Omnichain Router while depositing two or more assets.

*DEPOSIT ID: 3 (Call with multiple deposit)*


```solidity
function performCallOutAndBridgeMultiple(
    address _depositor,
    bytes calldata _params,
    DepositMultipleInput memory _dParams,
    uint128 _gasToBridgeOut,
    uint128 _remoteExecutionGas
) external payable lock requiresRouter;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_depositor`|`address`||
|`_params`|`bytes`||
|`_dParams`|`DepositMultipleInput`||
|`_gasToBridgeOut`|`uint128`||
|`_remoteExecutionGas`|`uint128`||


### clearToken

Function to request balance clearance from a Port to a given user.


```solidity
function clearToken(address _recipient, address _hToken, address _token, uint256 _amount, uint256 _deposit)
    external
    requiresAgentExecutor;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_recipient`|`address`|token receiver.|
|`_hToken`|`address`| local hToken addresse to clear balance for.|
|`_token`|`address`| native / underlying token addresse to clear balance for.|
|`_amount`|`uint256`|amounts of hToken to clear balance for.|
|`_deposit`|`uint256`|amount of native / underlying tokens to clear balance for.|


### clearTokens

Function to request balance clearance from a Port to a given address.


```solidity
function clearTokens(bytes calldata _sParams, address _recipient)
    external
    requiresAgentExecutor
    returns (SettlementMultipleParams memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_sParams`|`bytes`|encode packed multiple settlement info.|
|`_recipient`|`address`||


### _callOut

Function to perform a call to the Root Omnichain Router without token deposit.

*ACTION ID: 1 (Call without deposit)*


```solidity
function _callOut(address _depositor, bytes calldata _params, uint128 _gasToBridgeOut, uint128 _remoteExecutionGas)
    internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_depositor`|`address`|address of the user that will deposit the funds.|
|`_params`|`bytes`|RLP enconded parameters to execute on the root chain.|
|`_gasToBridgeOut`|`uint128`|gas allocated for the cross-chain call.|
|`_remoteExecutionGas`|`uint128`|gas allocated for branch chain execution.|


### _callOutAndBridge

Function to perform a call to the Root Omnichain Router while depositing a single asset.

*ACTION ID: 2 (Call with single deposit)*


```solidity
function _callOutAndBridge(
    address _depositor,
    bytes calldata _params,
    DepositInput memory _dParams,
    uint128 _gasToBridgeOut,
    uint128 _remoteExecutionGas
) internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_depositor`|`address`|address of the user that will deposit the funds.|
|`_params`|`bytes`|RLP enconded parameters to execute on the root chain.|
|`_dParams`|`DepositInput`|additional token deposit parameters.|
|`_gasToBridgeOut`|`uint128`|gas allocated for the cross-chain call.|
|`_remoteExecutionGas`|`uint128`|gas allocated for branch chain execution.|


### _callOutAndBridgeMultiple

Function to perform a call to the Root Omnichain Router while depositing two or more assets.

*ACTION ID: 3 (Call with multiple deposit)*


```solidity
function _callOutAndBridgeMultiple(
    address _depositor,
    bytes calldata _params,
    DepositMultipleInput memory _dParams,
    uint128 _gasToBridgeOut,
    uint128 _remoteExecutionGas
) internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_depositor`|`address`||
|`_params`|`bytes`|RLP enconded parameters to execute on the root chain.|
|`_dParams`|`DepositMultipleInput`|additional token deposit parameters.|
|`_gasToBridgeOut`|`uint128`|gas allocated for the cross-chain call.|
|`_remoteExecutionGas`|`uint128`|gas allocated for branch chain execution.|


### _noDepositCall

Internal function to move assets from branch chain to root omnichain environment. Naive assets are deposited and hTokens are bridgedOut.


```solidity
function _noDepositCall(address _depositor, bytes memory _data, uint128 _gasToBridgeOut) internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_depositor`|`address`|token depositor.|
|`_data`|`bytes`|data to be sent to cross-chain messaging layer.|
|`_gasToBridgeOut`|`uint128`|gas allocated for the cross-chain call.|


### _depositAndCall

Internal function to move assets from branch chain to root omnichain environment. Naive assets are deposited and hTokens are bridgedOut.


```solidity
function _depositAndCall(
    address _depositor,
    bytes memory _data,
    address _hToken,
    address _token,
    uint256 _amount,
    uint256 _deposit,
    uint128 _gasToBridgeOut
) internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_depositor`|`address`|token depositor.|
|`_data`|`bytes`|data to be sent to cross-chain messaging layer.|
|`_hToken`|`address`|Local Input hToken Address.|
|`_token`|`address`|Native / Underlying Token Address.|
|`_amount`|`uint256`|Amount of Local hTokens deposited for trade.|
|`_deposit`|`uint256`|Amount of native tokens deposited for trade.|
|`_gasToBridgeOut`|`uint128`|gas allocated for the cross-chain call.|


### _depositAndCallMultiple

*Internal function to move assets from branch chain to root omnichain environment. Naive assets are deposited and hTokens are bridgedOut.*


```solidity
function _depositAndCallMultiple(
    address _depositor,
    bytes memory _data,
    address[] memory _hTokens,
    address[] memory _tokens,
    uint256[] memory _amounts,
    uint256[] memory _deposits,
    uint128 _gasToBridgeOut
) internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_depositor`|`address`|token depositor.|
|`_data`|`bytes`|data to be sent to cross-chain messaging layer.|
|`_hTokens`|`address[]`|Local Input hToken Address.|
|`_tokens`|`address[]`|Native / Underlying Token Address.|
|`_amounts`|`uint256[]`|Amount of Local hTokens deposited for trade.|
|`_deposits`|`uint256[]`| Amount of native tokens deposited for trade.|
|`_gasToBridgeOut`|`uint128`|gas allocated for the cross-chain call.|


### _createGasDeposit

*Function to create a pending deposit.*


```solidity
function _createGasDeposit(address _user, uint128 _gasToBridgeOut) internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_user`|`address`|user address.|
|`_gasToBridgeOut`|`uint128`|gas allocated for omnichain execution.|


### _createDepositSingle

*Function to create a pending deposit.*


```solidity
function _createDepositSingle(
    address _user,
    address _hToken,
    address _token,
    uint256 _amount,
    uint256 _deposit,
    uint128 _gasToBridgeOut
) internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_user`|`address`|user address.|
|`_hToken`|`address`|deposited local hToken addresses.|
|`_token`|`address`|deposited native / underlying Token addresses.|
|`_amount`|`uint256`|amounts of hTokens input.|
|`_deposit`|`uint256`|amount of deposited underlying / native tokens.|
|`_gasToBridgeOut`|`uint128`|gas allocated for omnichain execution.|


### _createDepositMultiple

Function to create a pending deposit.


```solidity
function _createDepositMultiple(
    address _user,
    address[] memory _hTokens,
    address[] memory _tokens,
    uint256[] memory _amounts,
    uint256[] memory _deposits,
    uint128 _gasToBridgeOut
) internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_user`|`address`|user address.|
|`_hTokens`|`address[]`|deposited local hToken addresses.|
|`_tokens`|`address[]`|deposited native / underlying Token addresses.|
|`_amounts`|`uint256[]`|amounts of hTokens input.|
|`_deposits`|`uint256[]`|amount of deposited underlying / native tokens.|
|`_gasToBridgeOut`|`uint128`|gas allocated for omnichain execution.|


### _depositGas


```solidity
function _depositGas(uint128 _gasToBridgeOut) internal virtual;
```

### _getAndIncrementDepositNonce

Function that returns Deposit nonce and increments counter.


```solidity
function _getAndIncrementDepositNonce() internal returns (uint32);
```

### _redeemDeposit

*External function to clear / refund a user's failed deposit.*


```solidity
function _redeemDeposit(uint32 _depositNonce) internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_depositNonce`|`uint32`|Identifier for user deposit.|


### _clearToken

Function to request balance clearance from a Port to a given user.


```solidity
function _clearToken(address _recipient, address _hToken, address _token, uint256 _amount, uint256 _deposit) internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_recipient`|`address`|token receiver.|
|`_hToken`|`address`| local hToken addresse to clear balance for.|
|`_token`|`address`| native / underlying token addresse to clear balance for.|
|`_amount`|`uint256`|amounts of hToken to clear balance for.|
|`_deposit`|`uint256`|amount of native / underlying tokens to clear balance for.|


### _clearDeposit

Function to clear / refund a user's failed deposit. Called upon fallback in cross-chain messaging.


```solidity
function _clearDeposit(uint32 _depositNonce) internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_depositNonce`|`uint32`|Identifier for user deposit.|


### _performCall

Internal function performs call to AnycallProxy Contract for cross-chain messaging.


```solidity
function _performCall(bytes memory _calldata) internal virtual;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_calldata`|`bytes`|ABI encoded function call.|


### _payExecutionGas

Internal function repays gas used by Branch Bridge Agent to fulfill remote initiated interaction.


```solidity
function _payExecutionGas(address _recipient, uint256 _initialGas) internal virtual;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_recipient`|`address`|address to send excess gas to.|
|`_initialGas`|`uint256`|gas used by Branch Bridge Agent.|


### _payFallbackGas

Save gas left

Internal function repays gas used by Branch Bridge Agent to fulfill remote initiated interaction.


```solidity
function _payFallbackGas(uint32 _depositNonce, uint256 _initialGas) internal virtual;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_depositNonce`|`uint32`|Identifier for user deposit attatched to interaction being fallback.|
|`_initialGas`|`uint256`|gas used by Branch Bridge Agent.|


### _replenishGas

Internal function that forces a revert.


```solidity
function _replenishGas(uint256 _executionGasSpent) internal virtual;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_executionGasSpent`|`uint256`|gas used by Branch Bridge Agent.|


### _gasSwapIn

Internal that clears gas allocated for usage with remote request


```solidity
function _gasSwapIn(bytes memory gasData) internal virtual returns (uint256 gasAmount);
```

### _getContext

Internal function that returns 'from' address and 'fromChain' Id by performing an external call to AnycallExecutor Context.


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

(optional,advised) call back on the originating chain if the cross chain interaction fails
`_data` is the orignal interaction arguments exec on the destination chain


```solidity
function anyFallback(bytes calldata data)
    external
    virtual
    requiresExecutor
    returns (bool success, bytes memory result);
```

### depositGasAnycallConfig

DEPOSIT FLAG: 0, 1, 2
DEPOSIT FLAG: 3
DEPOSIT FLAG: 4, 5
DEPOSIT FLAG: 6


```solidity
function depositGasAnycallConfig() external payable;
```

### forceRevert

Function to force revert when a remote action does not have enough gas or is being retried after having been previously executed.


```solidity
function forceRevert() external requiresAgentExecutor;
```

### _forceRevert

Reverts the current transaction with a "no enough budget" message.

*This function is used to revert the current transaction with a "no enough budget" message.*


```solidity
function _forceRevert() internal virtual;
```

### _normalizeDecimals

Internal function that normalizes an input to 18 decimal places.


```solidity
function _normalizeDecimals(uint256 _amount, uint8 _decimals) internal pure returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_amount`|`uint256`|amount of tokens|
|`_decimals`|`uint8`|number of decimal places|


### _normalizeDecimalsMultiple

Internal function to normalize decimals of multiple tokens.


```solidity
function _normalizeDecimalsMultiple(uint256[] memory _deposits, address[] memory _tokens)
    internal
    view
    returns (uint256[] memory deposits);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_deposits`|`uint256[]`|Array of deposit amounts.|
|`_tokens`|`address[]`|Array of token addresses.|


### lock


```solidity
modifier lock();
```

### requiresAgentExecutor

Modifier that verifies msg sender is an active bridgeAgent.


```solidity
modifier requiresAgentExecutor();
```

### requiresExecutor

Modifier that verifies msg sender is the RootInterface Contract from Root Chain.


```solidity
modifier requiresExecutor();
```

### _requiresExecutor

reuse to reduce contract bytesize


```solidity
function _requiresExecutor() internal view virtual;
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

### requiresFallbackGas

Modifier that verifies msg sender is the RootInterface Contract from Root Chain.


```solidity
modifier requiresFallbackGas();
```

### _requiresFallbackGas

reuse to reduce contract bytesize


```solidity
function _requiresFallbackGas() internal view virtual;
```

### _requiresFallbackGas

reuse to reduce contract bytesize


```solidity
function _requiresFallbackGas(uint256 _depositedGas) internal view virtual;
```

### fallback


```solidity
fallback() external payable;
```

