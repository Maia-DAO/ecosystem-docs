# UlyssesPoolDeployer
[Git Source](https://github.com/Maia-DAO/test-env-V2/blob/84b5f9e8695c91ddb02f27bb3dfb1c652f55ced4/ulysses-amm/factories/UlyssesFactory.sol)


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


