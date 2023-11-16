# BranchBridgeAgentExecutor
[Git Source](https://github.com/Maia-DAO/2023-09-maia-remediations/blob/main/src/BranchBridgeAgentExecutor.sol)

**Inherits:**
Ownable, [BridgeAgentConstants](/src/ulysses-omnichain/interfaces/BridgeAgentConstants.md)

**Author:**
MaiaDAO

This contract is used for requesting token deposit clearance and
executing transactions in response to requests from the root environment.

*Execution is "sandboxed" meaning upon tx failure both token deposits
and interactions with external contracts should be reverted and caught.*


## State Variables
### branchRouterAddress
Router that is responsible for executing the cross-chain requests forwarded by this contract.


```solidity
address public immutable branchRouterAddress;
```


## Functions
### constructor

Constructor for Branch Bridge Agent Executor.

*Sets the owner of the contract to the Branch Bridge Agent that deploys it.*


```solidity
constructor(address _branchRouterAddress);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_branchRouterAddress`|`address`|router that will execute the cross-chain requests forwarded by this contract.|


### executeNoSettlement

Function to execute a cross-chain request without any settlement.

*SETTLEMENT FLAG: 0 (No settlement)*


```solidity
function executeNoSettlement(bytes calldata _payload) external payable onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_payload`|`bytes`|Data received from the messaging layer.|


### executeWithSettlement

Function to execute a cross-chain request with a single settlement.

*Router is responsible for managing the msg.value either using it for more remote calls or sending to user.*

*SETTLEMENT FLAG: 1 (Single Settlement)*


```solidity
function executeWithSettlement(address _recipient, bytes calldata _payload) external payable onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_recipient`|`address`|Address of the recipient of the settlement.|
|`_payload`|`bytes`|Data received from the messaging layer.|


### executeWithSettlementMultiple

Function to execute a cross-chain request with multiple settlements.

*Router is responsible for managing the msg.value either using it for more remote calls or sending to user.*

*SETTLEMENT FLAG: 2 (Multiple Settlements)*


```solidity
function executeWithSettlementMultiple(address _recipient, bytes calldata _payload) external payable onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_recipient`|`address`|Address of the recipient of the settlement.|
|`_payload`|`bytes`|Data received from the messaging layer.|


### _bridgeInMultiple

Internal function to move assets from root omnichain environment to branch chain.

*Since the input data payload is encodePacked we need to parse it:
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
function _bridgeInMultiple(address _recipient, bytes calldata _sParams)
    internal
    returns (SettlementMultipleParams memory sParams);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_recipient`|`address`|Cross-Chain Settlement of Multiple Tokens Params.|
|`_sParams`|`bytes`|Cross-Chain Settlement of Multiple Tokens Params.|


