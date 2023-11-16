# ILayerZeroReceiver
[Git Source](https://github.com/Maia-DAO/2023-09-maia-remediations/blob/main/src/interfaces/ILayerZeroReceiver.sol)


## Functions
### lzReceive

LayerZero endpoint will invoke this function to deliver the message on the destination


```solidity
function lzReceive(uint16 _srcChainId, bytes calldata _srcAddress, uint64 _nonce, bytes calldata _payload)
    external
    payable
    returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_srcChainId`|`uint16`|the source endpoint identifier|
|`_srcAddress`|`bytes`|the source sending contract address from the source chain|
|`_nonce`|`uint64`|the ordered message nonce|
|`_payload`|`bytes`|the signed payload is the UA bytes has encoded to be sent|


### lzReceiveNonBlocking

External function to receive cross-chain messages from LayerZero Endpoint Contract without blocking.


```solidity
function lzReceiveNonBlocking(
    address _endpoint,
    uint16 _srcChainId,
    bytes calldata _srcAddress,
    bytes calldata _payload
) external payable;
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


