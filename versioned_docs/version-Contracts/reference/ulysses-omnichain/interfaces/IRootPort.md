# IRootPort
[Git Source](https://github.com/Maia-DAO/2023-09-maia-remediations/blob/main/src/interfaces/IRootPort.sol)

**Author:**
MaiaDAO

Ulysses `RootPort` implementation for Root Omnichain Environment deployment.
This contract is used to manage the deposit and withdrawal of assets
between the Root Omnichain Environment and every Branch Chain in response to
Root Bridge Agents requests. Manages Bridge Agents and their factories as well as
key governance enabled actions such as adding new chains and bridge agent factories.


## Functions
### isChainId

View Function returns True if the chain Id has been added to the system.


```solidity
function isChainId(uint256 _chainId) external view returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_chainId`|`uint256`|The Layer Zero chainId of the chain.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|bool True if the chain Id has been added to the system.|


### getBridgeAgentManager

View Function returns bridge agent manager for a given root bridge agent.


```solidity
function getBridgeAgentManager(address _rootBridgeAgent) external view returns (address);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_rootBridgeAgent`|`address`|address of the root bridge agent.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|address address of the bridge agent manager.|


### isBridgeAgentFactory

View Function returns True if the bridge agent factory has been added to the system.


```solidity
function isBridgeAgentFactory(address _bridgeAgentFactory) external view returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_bridgeAgentFactory`|`address`|The address of the bridge agent factory.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|bool True if the bridge agent factory has been added to the system.|


### isGlobalAddress

View Function returns True if the address corresponds to a global token.


```solidity
function isGlobalAddress(address _globalAddress) external view returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_globalAddress`|`address`|The address of the token in the global chain.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|bool True if the address corresponds to a global token.|


### getGlobalTokenFromLocal

View Function returns Token's Global Address from it's local address.


```solidity
function getGlobalTokenFromLocal(address _localAddress, uint256 _srcChainId) external view returns (address);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_localAddress`|`address`|The address of the token in the local chain.|
|`_srcChainId`|`uint256`|The chainId of the chain where the token is deployed.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|address The address of the global token.|


### getLocalTokenFromGlobal

View Function returns Token's Local Address from it's global address.


```solidity
function getLocalTokenFromGlobal(address _globalAddress, uint256 _srcChainId) external view returns (address);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_globalAddress`|`address`|The address of the token in the global chain.|
|`_srcChainId`|`uint256`|The chainId of the chain where the token is deployed.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|address The address of the local token.|


### getLocalTokenFromUnderlying

View Function that returns the local token address from the underlying token address.


```solidity
function getLocalTokenFromUnderlying(address _underlyingAddress, uint256 _srcChainId) external view returns (address);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_underlyingAddress`|`address`|The address of the underlying token.|
|`_srcChainId`|`uint256`|The chainId of the chain where the token is deployed.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|address The address of the local token.|


### getLocalToken

Function that returns Local Token's Local Address on another chain.


```solidity
function getLocalToken(address _localAddress, uint256 _srcChainId, uint256 _dstChainId)
    external
    view
    returns (address);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_localAddress`|`address`|The address of the token in the local chain.|
|`_srcChainId`|`uint256`|The chainId of the chain where the token is deployed.|
|`_dstChainId`|`uint256`|The chainId of the chain where the token is deployed.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|address The address of the local token in the destination chain.|


### getUnderlyingTokenFromLocal

View Function returns a underlying token address from it's local address.


```solidity
function getUnderlyingTokenFromLocal(address _localAddress, uint256 _srcChainId) external view returns (address);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_localAddress`|`address`|The address of the token in the local chain.|
|`_srcChainId`|`uint256`|The chainId of the chain where the token is deployed.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|address The address of the underlying token.|


### getUnderlyingTokenFromGlobal

Returns the underlying token address given it's global address.


```solidity
function getUnderlyingTokenFromGlobal(address _globalAddress, uint256 _srcChainId) external view returns (address);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_globalAddress`|`address`|The address of the token in the global chain.|
|`_srcChainId`|`uint256`|The chainId of the chain where the token is deployed.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|address The address of the underlying token.|


### isGlobalToken

View Function returns True if Global Token is already added in current chain, false otherwise.


```solidity
function isGlobalToken(address _globalAddress, uint256 _srcChainId) external view returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_globalAddress`|`address`|The address of the token in the global chain.|
|`_srcChainId`|`uint256`|The chainId of the chain where the token is deployed.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|bool True if Global Token is already added in current chain, false otherwise.|


### isLocalToken

View Function returns True if Local Token is already added in current chain, false otherwise.


```solidity
function isLocalToken(address _localAddress, uint256 _srcChainId) external view returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_localAddress`|`address`|The address of the token in the local chain.|
|`_srcChainId`|`uint256`|The chainId of the chain where the token is deployed.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|bool True if Local Token is already added in current chain, false otherwise.|


### isLocalToken

View Function returns True if Local Token is already added in destination chain, false otherwise.


```solidity
function isLocalToken(address _localAddress, uint256 _srcChainId, uint256 _dstChainId) external view returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_localAddress`|`address`|The address of the token in the local chain.|
|`_srcChainId`|`uint256`|The chainId of the chain where the token is deployed.|
|`_dstChainId`|`uint256`|The chainId of the chain where the token is deployed.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|bool True if Local Token is already added in current chain, false otherwise.|


### isUnderlyingToken

View Function returns True if the underlying Token is already added in given chain, false otherwise.


```solidity
function isUnderlyingToken(address _underlyingToken, uint256 _srcChainId) external view returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_underlyingToken`|`address`|The address of the underlying token.|
|`_srcChainId`|`uint256`|The chainId of the chain where the token is deployed.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|bool True if the underlying Token is already added in given chain, false otherwise.|


### getUserAccount

View Function returns Virtual Account of a given user.


```solidity
function getUserAccount(address _user) external view returns (VirtualAccount);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_user`|`address`|The address of the user.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`VirtualAccount`|VirtualAccount user virtual account.|


### isRouterApproved

View Function returns True if the router is approved by user request to use their virtual account.


```solidity
function isRouterApproved(VirtualAccount _userAccount, address _router) external returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_userAccount`|`VirtualAccount`|The virtual account of the user.|
|`_router`|`address`|The address of the router.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|bool True if the router is approved by user request to use their virtual account.|


### setBridgeAgentManager

Allows a root bridge agent to update it's bridge agent manager address.


```solidity
function setBridgeAgentManager(address _newManager) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_newManager`|`address`|address of the new bridge agent manager.|


### bridgeToRoot

Updates root port state to match a new deposit.


```solidity
function bridgeToRoot(address _to, address _hToken, uint256 _amount, uint256 _deposit, uint256 _srcChainId) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_to`|`address`|recipient of bridged tokens.|
|`_hToken`|`address`|address of the hToken to bridge.|
|`_amount`|`uint256`|amount of hTokens to bridge.|
|`_deposit`|`uint256`|amount of underlying tokens to deposit.|
|`_srcChainId`|`uint256`|chainId of the chain where the tokens are being bridged from.|


### bridgeToBranch

Updates root port state to match hTokens being bridged to branch.


```solidity
function bridgeToBranch(address _from, address _hToken, uint256 _amount, uint256 _deposit, uint256 _dstChainId)
    external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_from`|`address`|depositor of the hTokens to bridge.|
|`_hToken`|`address`|address of the hToken to bridge.|
|`_amount`|`uint256`|amount of hTokens to bridge.|
|`_deposit`|`uint256`|amount of underlying tokens to deposit.|
|`_dstChainId`|`uint256`|chainId of the chain where the tokens are being bridged to.|


### bridgeToRootFromLocalBranch

Bridges hTokens from the local arbitrum branch for usage in the root port.


```solidity
function bridgeToRootFromLocalBranch(address _from, address _hToken, uint256 _amount) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_from`|`address`|sender of the hTokens to bridge.|
|`_hToken`|`address`|address of the hToken to bridge.|
|`_amount`|`uint256`|amount of hTokens to bridge.|


### bridgeToLocalBranchFromRoot

Bridges hTokens from the root port to the local arbitrum branch.


```solidity
function bridgeToLocalBranchFromRoot(address _to, address _hToken, uint256 _amount) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_to`|`address`|recipient of the bridged tokens.|
|`_hToken`|`address`|address of the hToken to bridge.|
|`_amount`|`uint256`|amount of hTokens to bridge.|


### burnFromLocalBranch

Burns tokens from the Arbitrum Branch Port withdrawer address.


```solidity
function burnFromLocalBranch(address _from, address _hToken, uint256 _amount) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_from`|`address`|sender of the tokens to burn.|
|`_hToken`|`address`|address of the hToken to burn.|
|`_amount`|`uint256`|amount of tokens to burn.|


### mintToLocalBranch

Mints new root hTokens to the recipient address in reflection of Artbitrum Branch Port deposit.


```solidity
function mintToLocalBranch(address _to, address _hToken, uint256 _amount) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_to`|`address`|recipient of the newly minted tokens.|
|`_hToken`|`address`|address of the hToken to mint.|
|`_amount`|`uint256`|amount of tokens to mint.|


### setAddresses

Setter function to add a new underlying token to the system. Includes the creation of a new local hToken
and global hToken.


```solidity
function setAddresses(address _globalAddress, address _localAddress, address _underlyingAddress, uint256 _srcChainId)
    external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_globalAddress`|`address`|new root hToken address to set.|
|`_localAddress`|`address`|new origin chain local hToken address to set.|
|`_underlyingAddress`|`address`|new underlying/native token address to set.|
|`_srcChainId`|`uint256`|chainId of the chain where the token is deployed.|


### setLocalAddress

Setter function to update a Global hToken's Local hToken Address.


```solidity
function setLocalAddress(address _globalAddress, address _localAddress, uint256 _srcChainId) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_globalAddress`|`address`|new hToken address to update.|
|`_localAddress`|`address`|new underlying/native token address to set.|
|`_srcChainId`|`uint256`||


### fetchVirtualAccount

Gets the virtual account given a user address. Creates a new virtual account if one does not exist.


```solidity
function fetchVirtualAccount(address _user) external returns (VirtualAccount account);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_user`|`address`|address of the user to get the virtual account for.|


### toggleVirtualAccountApproved

Toggles the approval of a router for virtual account usage.

*Allows for a router to interact/spend from a user's virtual account.*


```solidity
function toggleVirtualAccountApproved(VirtualAccount _userAccount, address _router) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_userAccount`|`VirtualAccount`|virtual account to toggle the approval for.|
|`_router`|`address`|router to toggle the approval for.|


### addBridgeAgent

Adds a new bridge agent to the system.


```solidity
function addBridgeAgent(address _manager, address _bridgeAgent) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_manager`|`address`|address of the manager of the bridge agent.|
|`_bridgeAgent`|`address`|address of the bridge agent to add.|


### syncBranchBridgeAgentWithRoot

Sets the address of the branch bridge agent connected to a root bridge agent for a given chain.


```solidity
function syncBranchBridgeAgentWithRoot(address _newBranchBridgeAgent, address _rootBridgeAgent, uint256 _srcChainId)
    external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_newBranchBridgeAgent`|`address`|address of the new branch bridge agent.|
|`_rootBridgeAgent`|`address`|address of the root bridge agent.|
|`_srcChainId`|`uint256`|chainId of the chain to set the bridge agent for.|


### toggleBridgeAgentFactory

Toggles the status of a bridge agent factory.


```solidity
function toggleBridgeAgentFactory(address _bridgeAgentFactory) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_bridgeAgentFactory`|`address`|address of the bridge agent factory to toggle.|


### addNewChain

Adds a new chain to the root port lists of chains and adds core branch contracts to system.


```solidity
function addNewChain(
    address _coreBranchBridgeAgentAddress,
    uint256 _chainId,
    string memory _wrappedGasTokenName,
    string memory _wrappedGasTokenSymbol,
    uint8 _wrappedGasTokenDecimals,
    address _newLocalBranchWrappedNativeTokenAddress,
    address _newUnderlyingBranchWrappedNativeTokenAddress
) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_coreBranchBridgeAgentAddress`|`address`|address of the core branch bridge agent|
|`_chainId`|`uint256`|chainId of the new chain|
|`_wrappedGasTokenName`|`string`|gas token name of the new chain|
|`_wrappedGasTokenSymbol`|`string`|gas token symbol of the new chain|
|`_wrappedGasTokenDecimals`|`uint8`|gas token decimals of the new chain|
|`_newLocalBranchWrappedNativeTokenAddress`|`address`|address of the wrapped native local hToken of the new chain|
|`_newUnderlyingBranchWrappedNativeTokenAddress`|`address`|new branch address of the underlying wrapped native token|


### addEcosystemToken

Adds an ecosystem hToken to a branch chain


```solidity
function addEcosystemToken(address ecoTokenGlobalAddress) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`ecoTokenGlobalAddress`|`address`|ecosystem token global address|


### setCoreRootRouter

Sets the core root router and bridge agent


```solidity
function setCoreRootRouter(address _coreRootRouter, address _coreRootBridgeAgent) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_coreRootRouter`|`address`|address of the core root router|
|`_coreRootBridgeAgent`|`address`|address of the core root bridge agent|


### setCoreBranchRouter

Sets the core branch router and bridge agent


```solidity
function setCoreBranchRouter(
    address _refundee,
    address _coreBranchRouter,
    address _coreBranchBridgeAgent,
    uint16 _dstChainId,
    GasParams calldata _gParams
) external payable;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_refundee`|`address`|address of the refundee|
|`_coreBranchRouter`|`address`|address of the core branch router|
|`_coreBranchBridgeAgent`|`address`|address of the core branch bridge agent|
|`_dstChainId`|`uint16`|chainId of the destination chain|
|`_gParams`|`GasParams`|gas params for the transaction|


### syncNewCoreBranchRouter

Syncs a new core branch router and bridge agent.


```solidity
function syncNewCoreBranchRouter(address _coreBranchRouter, address _coreBranchBridgeAgent, uint16 _dstChainId)
    external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_coreBranchRouter`|`address`|address of the core branch router|
|`_coreBranchBridgeAgent`|`address`|address of the core branch bridge agent|
|`_dstChainId`|`uint16`|chainId of the destination chain|


### sweep

Allows governance to withdraw any native tokens accumulated from failed transactions.


```solidity
function sweep(address _to) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_to`|`address`|address to transfer ETH to.|


## Events
### NewChainAdded
Emitted when a new chain is added to the system.


```solidity
event NewChainAdded(uint256 indexed chainId);
```

### BridgeAgentFactoryToggled
Emitted when a new bridge agent factory is added or removed.


```solidity
event BridgeAgentFactoryToggled(address indexed bridgeAgentFactory);
```

### BridgeAgentToggled
Emitted when a new bridge agent is added or removed.


```solidity
event BridgeAgentToggled(address indexed bridgeAgent);
```

### BridgeAgentSynced
Emitted when a new branch bridge agent is added to a root bridge agent.


```solidity
event BridgeAgentSynced(address indexed bridgeAgent, address indexed rootBridgeAgent, uint256 indexed srcChainId);
```

### VirtualAccountCreated
Emitted when a new Virtual Account is created.


```solidity
event VirtualAccountCreated(address indexed user, address account);
```

### LocalTokenAdded
Emitted when a new local token is added to the system.


```solidity
event LocalTokenAdded(
    address indexed underlyingAddress, address indexed localAddress, address indexed globalAddress, uint256 chainId
);
```

### GlobalTokenAdded
Emitted when a new global token is added to the system.


```solidity
event GlobalTokenAdded(address indexed localAddress, address indexed globalAddress, uint256 indexed chainId);
```

### EcosystemTokenAdded
Emitted when a new Ecosystem Token is added to the system.


```solidity
event EcosystemTokenAdded(address indexed ecoTokenGlobalAddress);
```

### CoreRootSet
Emitted when the Core Root Router and Bridge Agent are set.


```solidity
event CoreRootSet(address indexed coreRootRouter, address indexed coreRootBridgeAgent);
```

### CoreBranchSet
Emitted when a new Core Branch Router and Bridge Agent are set.


```solidity
event CoreBranchSet(address indexed coreBranchRouter, address indexed coreBranchBridgeAgent, uint16 indexed dstChainId);
```

### CoreBranchSynced
Emitted when a new Core Branch Router and Bridge Agent are synced with the root environment.


```solidity
event CoreBranchSynced(
    address indexed coreBranchRouter, address indexed coreBranchBridgeAgent, uint16 indexed dstChainId
);
```

## Errors
### RenounceOwnershipNotAllowed
Error emitted when owner tries to renounce ownership.


```solidity
error RenounceOwnershipNotAllowed();
```

### SetUpEnded
Error emitted when Set Up period is over.


```solidity
error SetUpEnded();
```

### SetUpCoreEnded
Error emitted when Core Set Up period is over.


```solidity
error SetUpCoreEnded();
```

### UnableToMint
Error emitted when hToken minting fails.


```solidity
error UnableToMint();
```

### InsufficientBalance
Error emitted when hToken bridging fails due to insufficient balance.


```solidity
error InsufficientBalance();
```

### InvalidGlobalAddress
Error emitted when an invalid global token address is provided.


```solidity
error InvalidGlobalAddress();
```

### InvalidLocalAddress
Error emitted when an invalid local token address is provided.


```solidity
error InvalidLocalAddress();
```

### InvalidUnderlyingAddress
Error emitted when an invalid underlying token address is provided.


```solidity
error InvalidUnderlyingAddress();
```

### InvalidUserAddress
Error emitted when zero address is provided for Virtual Account creation.


```solidity
error InvalidUserAddress();
```

### InvalidCoreRootRouter
Error emitted when zero address is provided for CoreRootRouter.


```solidity
error InvalidCoreRootRouter();
```

### InvalidCoreRootBridgeAgent
Error emitted when zero address is provided for CoreRootBridgeAgent.


```solidity
error InvalidCoreRootBridgeAgent();
```

### InvalidCoreBranchRouter
Error emitted when zero address is provided for CoreBranchRouter.


```solidity
error InvalidCoreBranchRouter();
```

### InvalidCoreBrancBridgeAgent
Error emitted when zero address is provided for CoreBranchBridgeAgent.


```solidity
error InvalidCoreBrancBridgeAgent();
```

### InvalidRootBridgeAgentFactory
Error emitted when zero address is provided for RootBridgeAgentFactory.


```solidity
error InvalidRootBridgeAgentFactory();
```

### InvalidBranchPort
Error emitted when zero address is provided for Branch Port.


```solidity
error InvalidBranchPort();
```

### UnrecognizedBridgeAgentFactory
Error emitted when caller is not a Bridge Agent Factory.


```solidity
error UnrecognizedBridgeAgentFactory();
```

### UnrecognizedBridgeAgent
Error emitted when caller is not a Bridge Agent.


```solidity
error UnrecognizedBridgeAgent();
```

### UnrecognizedCoreRootRouter
Error emitted when caller is not the Core Root Router.


```solidity
error UnrecognizedCoreRootRouter();
```

### UnrecognizedLocalBranchPort
Error emitted when caller is not the Arbitrum Branch


```solidity
error UnrecognizedLocalBranchPort();
```

### UnrecognizedCoreRootBridgeAgent
Error emitted when Core Root Bridge Agent being added isn't added as Bridge Agent yet.


```solidity
error UnrecognizedCoreRootBridgeAgent();
```

### AlreadyAddedChain
Error emitted when trying to add a chain that already exists.


```solidity
error AlreadyAddedChain();
```

### AlreadyAddedEcosystemToken
Error emitted when trying to add a token that already exists as an Ecosystem Token.


```solidity
error AlreadyAddedEcosystemToken();
```

### AlreadyAddedBridgeAgent
Error emitted when trying to add a Bridge Agent that already exists.


```solidity
error AlreadyAddedBridgeAgent();
```

### AlreadyAddedBridgeAgentFactory
Error emitted when trying to add a Bridge Agent Factory that already exists.


```solidity
error AlreadyAddedBridgeAgentFactory();
```

### BridgeAgentNotAllowed
Error emitted when trying to add a chain to a Root Bridge Agent without a Bridge Agent Manager allowing.


```solidity
error BridgeAgentNotAllowed();
```

