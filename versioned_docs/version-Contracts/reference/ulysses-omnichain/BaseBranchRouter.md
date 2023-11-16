# BaseBranchRouter
[Git Source](https://github.com/Maia-DAO/2023-09-maia-remediations/blob/main/src/BaseBranchRouter.sol)

**Inherits:**
[IBranchRouter](/src/ulysses-omnichain/interfaces/IBranchRouter.md), Ownable

**Author:**
MaiaDAO


## State Variables
### localPortAddress
External function to return the Branch Chain's Local Port Address.


```solidity
address public localPortAddress;
```


### localBridgeAgentAddress
Address for local Branch Bridge Agent who processes requests and interacts with local port.


```solidity
address public override localBridgeAgentAddress;
```


### bridgeAgentExecutorAddress
Local Bridge Agent Executor Address.


```solidity
address public override bridgeAgentExecutorAddress;
```


### _unlocked
Re-entrancy lock modifier state.


```solidity
uint256 internal _unlocked = 1;
```


## Functions
### constructor


```solidity
constructor();
```

### initialize

Initializes the Base Branch Router.


```solidity
function initialize(address _localBridgeAgentAddress) public virtual onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_localBridgeAgentAddress`|`address`|The address of the local Bridge Agent.|


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

*ACTION ID: 1 (Call without deposit)*


```solidity
function callOut(bytes calldata _params, GasParams calldata _gParams) external payable override lock;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_params`|`bytes`||
|`_gParams`|`GasParams`||


### callOutAndBridge

Function to perform a call to the Root Omnichain Router while depositing a single asset.

*ACTION ID: 2 (Call with single deposit)*


```solidity
function callOutAndBridge(bytes calldata _params, DepositInput calldata _dParams, GasParams calldata _gParams)
    external
    payable
    override
    lock;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_params`|`bytes`||
|`_dParams`|`DepositInput`||
|`_gParams`|`GasParams`||


### callOutAndBridgeMultiple

Function to perform a call to the Root Omnichain Router while depositing two or more assets.

*ACTION ID: 3 (Call with multiple deposit)*


```solidity
function callOutAndBridgeMultiple(
    bytes calldata _params,
    DepositMultipleInput calldata _dParams,
    GasParams calldata _gParams
) external payable override lock;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_params`|`bytes`||
|`_dParams`|`DepositMultipleInput`||
|`_gParams`|`GasParams`||


### retryDeposit

Function to retry a deposit that has failed.


```solidity
function retryDeposit(uint32 _depositNonce, bytes calldata _params, GasParams calldata _gParams)
    external
    payable
    override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_depositNonce`|`uint32`|Identifier for user deposit.|
|`_params`|`bytes`|encoded router parameters to execute on the root chain.|
|`_gParams`|`GasParams`|gas parameters for the cross-chain call.|


### executeNoSettlement

Function responsible of executing a branch router response.


```solidity
function executeNoSettlement(bytes calldata) external payable virtual override requiresAgentExecutor;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes`||


### executeSettlement

*Function responsible of executing a crosschain request without any deposit.*


```solidity
function executeSettlement(bytes calldata, SettlementParams memory)
    external
    payable
    virtual
    override
    requiresAgentExecutor;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes`||
|`<none>`|`SettlementParams`||


### executeSettlementMultiple

*Function responsible of executing a crosschain request which contains
cross-chain deposit information attached.*


```solidity
function executeSettlementMultiple(bytes calldata, SettlementMultipleParams memory)
    external
    payable
    virtual
    override
    requiresAgentExecutor;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes`||
|`<none>`|`SettlementMultipleParams`||


### _transferAndApproveToken

Internal function to transfer token into a contract.


```solidity
function _transferAndApproveToken(address _hToken, address _token, uint256 _amount, uint256 _deposit)
    internal
    virtual;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_hToken`|`address`|The address of the hToken.|
|`_token`|`address`|The address of the token.|
|`_amount`|`uint256`|The amount of the hToken.|
|`_deposit`|`uint256`|The amount of the token.|


### _transferAndApproveMultipleTokens

Internal function to transfer multiple tokens into a contract.


```solidity
function _transferAndApproveMultipleTokens(
    address[] memory _hTokens,
    address[] memory _tokens,
    uint256[] memory _amounts,
    uint256[] memory _deposits
) internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_hTokens`|`address[]`|The addresses of the hTokens.|
|`_tokens`|`address[]`|The addresses of the tokens.|
|`_amounts`|`uint256[]`|The amounts of the hTokens.|
|`_deposits`|`uint256[]`|The amounts of the tokens.|


### requiresAgentExecutor

Modifier that verifies msg sender is the Bridge Agent Executor.


```solidity
modifier requiresAgentExecutor();
```

### lock

Modifier for a simple re-entrancy check.


```solidity
modifier lock();
```

