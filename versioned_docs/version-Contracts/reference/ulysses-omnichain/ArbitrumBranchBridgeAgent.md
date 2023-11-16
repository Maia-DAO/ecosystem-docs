# ArbitrumBranchBridgeAgent
[Git Source](https://github.com/Maia-DAO/2023-09-maia-remediations/blob/main/src/ArbitrumBranchBridgeAgent.sol)

**Inherits:**
[BranchBridgeAgent](/src/ulysses-omnichain/BranchBridgeAgent.sol/contract.BranchBridgeAgent.md)

**Author:**
MaiaDAO

This contract is used for interfacing with Users/Routers acting as a middleman
to access LayerZero cross-chain messaging and Port communication for asset management
connecting Arbitrum Branch Chain contracts and the root omnichain environment.


## Functions
### constructor

Constructor for Arbitrum Branch Bridge Agent.


```solidity
constructor(
    uint16 _localChainId,
    address _rootBridgeAgentAddress,
    address _localRouterAddress,
    address _localPortAddress
)
    BranchBridgeAgent(
        _localChainId,
        _localChainId,
        _rootBridgeAgentAddress,
        address(0),
        _localRouterAddress,
        _localPortAddress
    );
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_localChainId`|`uint16`|Local Chain Layer Zero Id.|
|`_rootBridgeAgentAddress`|`address`|Root Bridge Agent Address.|
|`_localRouterAddress`|`address`|Local Core Branch Router Address.|
|`_localPortAddress`|`address`|Local Branch Port Address.|


### depositToPort

Function to deposit a single asset to the local Port.


```solidity
function depositToPort(address underlyingAddress, uint256 amount) external payable lock;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`underlyingAddress`|`address`|address of the underlying asset to be deposited.|
|`amount`|`uint256`|amount to be deposited.|


### withdrawFromPort

Function to withdraw a single asset from the local Port.


```solidity
function withdrawFromPort(address globalAddress, uint256 amount) external payable lock;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`globalAddress`|`address`|local hToken to be withdrawn.|
|`amount`|`uint256`|amount to be withdrawn.|


### retrySettlement

External function to retry a failed Settlement entry on the root chain.

*This functionality should be accessed from Root environment*


```solidity
function retrySettlement(uint32, bytes calldata, GasParams[2] calldata, bool) external payable override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint32`||
|`<none>`|`bytes`||
|`<none>`|`GasParams[2]`||
|`<none>`|`bool`||


### _performCall

Internal function performs the call to LayerZero messaging layer Endpoint for cross-chain messaging.


```solidity
function _performCall(address payable, bytes memory _calldata, GasParams calldata, uint256) internal override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address payable`||
|`_calldata`|`bytes`|params for root bridge agent execution.|
|`<none>`|`GasParams`||
|`<none>`|`uint256`||


### _performFallbackCall

Internal function performs the call to Layerzero Endpoint Contract for cross-chain messaging.


```solidity
function _performFallbackCall(address payable _refundee, uint32 _settlementNonce) internal override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_refundee`|`address payable`|address to refund gas to.|
|`_settlementNonce`|`uint32`|root settlement nonce to fallback.|


### _requiresEndpoint

Verifies the caller is the Root Bridge Agent.

*Internal function used in modifier to reduce contract bytesize.*


```solidity
function _requiresEndpoint(uint16, address _endpoint, bytes calldata) internal view override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint16`||
|`_endpoint`|`address`|address of the endpoint to be verified.|
|`<none>`|`bytes`||


