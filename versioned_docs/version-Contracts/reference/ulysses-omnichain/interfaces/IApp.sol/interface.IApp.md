# IApp

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

