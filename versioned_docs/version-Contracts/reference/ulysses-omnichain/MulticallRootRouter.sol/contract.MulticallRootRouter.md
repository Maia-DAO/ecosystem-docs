# MulticallRootRouter

**Inherits:**
[IRootRouter](/ulysses-omnichain/interfaces/IRootRouter.sol/interface.IRootRouter.md), Ownable

**Author:**
MaiaDAO

Root Router implementation for interfacing with third party dApps present in the Root Omnichain Environment.

*Func IDs for calling these  functions through messaging layer:
CROSS-CHAIN MESSAGING FUNCIDs
-----------------------------
FUNC ID      | FUNC NAME
-------------+---------------
0x01         | multicallNoOutput
0x02         | multicallSingleOutput
0x03         | multicallMultipleOutput
0x04         | multicallSignedNoOutput
0x05         | multicallSignedSingleOutput
0x06         | multicallSignedMultipleOutput*


## State Variables
### MAX_LENGTH

```solidity
uint256 private constant MAX_LENGTH = 20 * 32;
```


### localChainId
Address for Local Port Address where funds deposited from this chain are kept, managed and supplied to different Port Strategies.


```solidity
uint256 public immutable localChainId;
```


### localPortAddress
Address for Local Port Address where funds deposited from this chain are kept, managed and supplied to different Port Strategies.


```solidity
address public immutable localPortAddress;
```


### multicallAddress
Multicall Address


```solidity
address public immutable multicallAddress;
```


### bridgeAgentAddress
Bridge Agent to maneg communcations and cross-chain assets.


```solidity
address payable public bridgeAgentAddress;
```


### bridgeAgentExecutorAddress

```solidity
address public bridgeAgentExecutorAddress;
```


### MIN_AMOUNT

```solidity
uint256 public constant MIN_AMOUNT = 10 ** 6;
```


### _unlocked
FUNC ID: 1 (multicallNoOutput)
FUNC ID: 2 (multicallSingleOutput)
FUNC ID: 3 (multicallMultipleOutput)
UNRECOGNIZED FUNC ID

Modifier for a simple re-entrancy check.


```solidity
uint256 internal _unlocked = 1;
```


## Functions
### constructor


```solidity
constructor(uint256 _localChainId, address _localPortAddress, address _multicallAddress);
```

### initialize


```solidity
function initialize(address _bridgeAgentAddress) external onlyOwner;
```

### _multicall

Function to perform a set of actions on the omnichian environment without using the user's Virtual Acccount.


```solidity
function _multicall(IMulticall.Call[] memory calls) internal returns (uint256 blockNumber, bytes[] memory returnData);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`calls`|`IMulticall.Call[]`|to be executed.|


### _approveAndCallOut

Function to call 'clearToken' on the Root Port.


```solidity
function _approveAndCallOut(
    address owner,
    address recipient,
    address outputToken,
    uint256 amountOut,
    uint256 depositOut,
    uint24 toChain
) internal virtual;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`owner`|`address`|settlement owner.|
|`recipient`|`address`|Address to receive the output hTokens.|
|`outputToken`|`address`|Address of the output hToken.|
|`amountOut`|`uint256`|Amount of output hTokens to send.|
|`depositOut`|`uint256`|Amount of output hTokens to deposit.|
|`toChain`|`uint24`|Chain Id of the destination chain.|


### _approveMultipleAndCallOut

Function to approve token spend before Bridge Agent interaction to Bridge Out of omnichian environment.


```solidity
function _approveMultipleAndCallOut(
    address owner,
    address recipient,
    address[] memory outputTokens,
    uint256[] memory amountsOut,
    uint256[] memory depositsOut,
    uint24 toChain
) internal virtual;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`owner`|`address`|settlement owner.|
|`recipient`|`address`|Address to receive the output tokens.|
|`outputTokens`|`address[]`|Addresses of the output hTokens.|
|`amountsOut`|`uint256[]`|Total amount of tokens to send.|
|`depositsOut`|`uint256[]`|Amounts of tokens to withdraw from destination port.|
|`toChain`|`uint24`||


### anyExecuteResponse

Function responsible of executing a branch router response.

*This function will revert when called.*


```solidity
function anyExecuteResponse(bytes1, bytes calldata, uint24) external payable override returns (bool, bytes memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes1`||
|`<none>`|`bytes`||
|`<none>`|`uint24`||


### anyExecute

Function responsible of executing a crosschain request without any deposit.

*FuncIDs
FUNC ID      | FUNC NAME
0x01         |  multicallNoOutput
0x02         |  multicallSingleOutput
0x03         |  multicallMultipleOutput*


```solidity
function anyExecute(bytes1 funcId, bytes calldata encodedData, uint24)
    external
    payable
    override
    lock
    requiresExecutor
    returns (bool, bytes memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`funcId`|`bytes1`|1 byte Router function identifier.|
|`encodedData`|`bytes`|data received from messaging layer.|
|`<none>`|`uint24`||


### anyExecuteDepositSingle

FUNC ID: 1 (multicallNoOutput)
FUNC ID: 2 (multicallSingleOutput)
FUNC ID: 3 (multicallMultipleOutput)
UNRECOGNIZED FUNC ID


```solidity
function anyExecuteDepositSingle(bytes1, bytes calldata, DepositParams calldata, uint24)
    external
    payable
    override
    returns (bool, bytes memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes1`||
|`<none>`|`bytes`||
|`<none>`|`DepositParams`||
|`<none>`|`uint24`||


### anyExecuteDepositMultiple

Function responsible of executing a crosschain request which contains cross-chain deposit information for multiple assets attached.


```solidity
function anyExecuteDepositMultiple(bytes1, bytes calldata, DepositMultipleParams calldata, uint24)
    external
    payable
    returns (bool, bytes memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes1`||
|`<none>`|`bytes`||
|`<none>`|`DepositMultipleParams`||
|`<none>`|`uint24`||


### anyExecuteSigned

Reverts when called

*FuncIDs
FUNC ID      | FUNC NAME
0x01         |  multicallNoOutput
0x02         |  multicallSingleOutput
0x03         |  multicallMultipleOutput*


```solidity
function anyExecuteSigned(bytes1 funcId, bytes calldata encodedData, address userAccount, uint24)
    external
    payable
    override
    lock
    requiresExecutor
    returns (bool, bytes memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`funcId`|`bytes1`|1 byte Router function identifier.|
|`encodedData`|`bytes`|execution data received from messaging layer.|
|`userAccount`|`address`|user account address.|
|`<none>`|`uint24`||


### anyExecuteSignedDepositSingle

FUNC ID: 1 (multicallNoOutput)
FUNC ID: 2 (multicallSingleOutput)
FUNC ID: 3 (multicallMultipleOutput)
UNRECOGNIZED FUNC ID

*FuncIDs
FUNC ID      | FUNC NAME
0x01         |  multicallNoOutput
0x02         |  multicallSingleOutput
0x03         |  multicallMultipleOutput*


```solidity
function anyExecuteSignedDepositSingle(
    bytes1 funcId,
    bytes calldata encodedData,
    DepositParams calldata,
    address userAccount,
    uint24
) external payable override requiresExecutor lock returns (bool success, bytes memory result);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`funcId`|`bytes1`|1 byte Router function identifier.|
|`encodedData`|`bytes`|execution data received from messaging layer.|
|`<none>`|`DepositParams`||
|`userAccount`|`address`|user account address.|
|`<none>`|`uint24`||


### anyExecuteSignedDepositMultiple

FUNC ID: 1 (multicallNoOutput)
FUNC ID: 2 (multicallSingleOutput)
FUNC ID: 3 (multicallMultipleOutput)
UNRECOGNIZED FUNC ID

*FuncIDs
FUNC ID      | FUNC NAME
0x01         |  multicallNoOutput
0x02         |  multicallSingleOutput
0x03         |  multicallMultipleOutput*


```solidity
function anyExecuteSignedDepositMultiple(
    bytes1 funcId,
    bytes memory encodedData,
    DepositMultipleParams calldata,
    address userAccount,
    uint24
) external payable requiresExecutor lock returns (bool success, bytes memory result);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`funcId`|`bytes1`|1 byte Router function identifier.|
|`encodedData`|`bytes`|execution data received from messaging layer.|
|`<none>`|`DepositMultipleParams`||
|`userAccount`|`address`|user account address.|
|`<none>`|`uint24`||


### lock


```solidity
modifier lock();
```

### requiresExecutor


```solidity
modifier requiresExecutor();
```

### _requiresExecutor

reuse to reduce contract bytesize


```solidity
function _requiresExecutor() internal view;
```

