---
id: CheckParamsLib
title: CheckParamsLib
---


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


