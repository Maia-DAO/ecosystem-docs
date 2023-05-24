# IApp
[Git Source](https://github.com/Maia-DAO/test-env-V2/blob/84b5f9e8695c91ddb02f27bb3dfb1c652f55ced4/ulysses-omnichain/interfaces/IApp.sol)

IApp interface of the application


## Functions
### anyExecute

(required) call on the destination chain to exec the interaction


```solidity
function anyExecute(bytes calldata _data) external returns (bool success, bytes memory result);
```

### anyFallback

(optional,advised) call back on the originating chain if the cross chain interaction fails
`_data` is the orignal interaction arguments exec on the destination chain


```solidity
function anyFallback(bytes calldata _data) external returns (bool success, bytes memory result);
```

