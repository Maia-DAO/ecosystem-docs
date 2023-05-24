# CheckParamsLib
[Git Source](https://github.com/Maia-DAO/test-env-V2/blob/84b5f9e8695c91ddb02f27bb3dfb1c652f55ced4/ulysses-omnichain/RootBridgeAgent.sol)


## Functions
### checkParams

Function to check cross-chain deposit parameters and verify deposits made on branch chain are valid.

*Local hToken must be recognized and address must match underlying if exists otherwise only local hToken is checked.*


```solidity
function checkParams(address _localPortAddress, DepositParams memory _dParams, uint24 _fromChain)
    internal
    view
    returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_localPortAddress`|`address`|Address of local Port.|
|`_dParams`|`DepositParams`|Cross Chain swap parameters.|
|`_fromChain`|`uint24`|Chain ID of the chain where the deposit was made.|


