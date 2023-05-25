# UlyssesPoolDeployer


## Functions
### deployPool

Deploys a new Ulysses pool.


```solidity
function deployPool(
    uint256 id,
    address asset,
    string calldata name,
    string calldata symbol,
    address owner,
    address factory
) public returns (UlyssesPool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`id`|`uint256`|The id of the Ulysses pool.|
|`asset`|`address`|The asset of the Ulysses pool.|
|`name`|`string`|The name of the Ulysses pool.|
|`symbol`|`string`|The symbol of the Ulysses pool.|
|`owner`|`address`|The owner of the Ulysses pool.|
|`factory`|`address`|The factory of the Ulysses pool.|


