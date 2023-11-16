# RootPort
[Git Source](https://github.com/Maia-DAO/2023-09-maia-remediations/blob/main/src/RootPort.sol)

**Inherits:**
Ownable, [IRootPort](/src/ulysses-omnichain/interfaces/IRootPort.md)

**Author:**
MaiaDAO


## State Variables
### _setup
True if setup is still ongoing, false otherwise.


```solidity
bool internal _setup;
```


### _setupCore
True if core setup is still ongoing, false otherwise.


```solidity
bool internal _setupCore;
```


### localChainId
Local Chain Id


```solidity
uint256 public immutable localChainId;
```


### localBranchPortAddress
The address of local branch port responsible for handling local transactions.


```solidity
address public localBranchPortAddress;
```


### coreRootRouterAddress
The address of the core router in charge of adding new tokens to the system.


```solidity
address public coreRootRouterAddress;
```


### coreRootBridgeAgentAddress
The address of the core router in charge of adding new tokens to the system.


```solidity
address public coreRootBridgeAgentAddress;
```


### getUserAccount
Mapping from user address to Virtual Account.


```solidity
mapping(address user => VirtualAccount account) public getUserAccount;
```


### isRouterApproved
Holds the mapping from Virtual account to router address => bool.

Stores whether a router is approved to spend a virtual account.


```solidity
mapping(VirtualAccount acount => mapping(address router => bool allowed)) public isRouterApproved;
```


### isChainId
Mapping from address to Bridge Agent.


```solidity
mapping(uint256 chainId => bool isActive) public isChainId;
```


### isBridgeAgent
Mapping from address to isBridgeAgent (bool).


```solidity
mapping(address bridgeAgent => bool isActive) public isBridgeAgent;
```


### bridgeAgents
Bridge Agents deployed in root chain.


```solidity
address[] public bridgeAgents;
```


### getBridgeAgentManager
Mapping address Bridge Agent => address Bridge Agent Manager


```solidity
mapping(address bridgeAgent => address bridgeAgentManager) public getBridgeAgentManager;
```


### isBridgeAgentFactory
Mapping from Underlying Address to isUnderlying (bool).


```solidity
mapping(address bridgeAgentFactory => bool isActive) public isBridgeAgentFactory;
```


### bridgeAgentFactories
Bridge Agents deployed in root chain.


```solidity
address[] public bridgeAgentFactories;
```


### isGlobalAddress
Mapping with all global hTokens deployed in the system.


```solidity
mapping(address token => bool isGlobalToken) public isGlobalAddress;
```


### getGlobalTokenFromLocal
Local Address -> ChainId -> Global Address


```solidity
mapping(address localAddress => mapping(uint256 chainId => address globalAddress)) public getGlobalTokenFromLocal;
```


### getLocalTokenFromGlobal
Global Address -> ChainId -> Local Address


```solidity
mapping(address globalAddress => mapping(uint256 chainId => address localAddress)) public getLocalTokenFromGlobal;
```


### getLocalTokenFromUnderlying
Underlying Address -> ChainId -> Local Address


```solidity
mapping(address underlyingAddress => mapping(uint256 chainId => address localAddress)) public
    getLocalTokenFromUnderlying;
```


### getUnderlyingTokenFromLocal
Mapping from Local Address to Underlying Address.


```solidity
mapping(address localAddress => mapping(uint256 chainId => address underlyingAddress)) public
    getUnderlyingTokenFromLocal;
```


### getTotalSupplyBranches
Mapping from global address to total hToken supply allocated to branches.


```solidity
mapping(address globalAddress => uint256 totalSupplyBranches) public getTotalSupplyBranches;
```


### getBalanceOfBranch
Mapping from global address to chainId to current hToken balance allocated to chain.


```solidity
mapping(address globalAddress => mapping(uint256 chainId => uint256 balance)) public getBalanceOfBranch;
```


## Functions
### constructor

Constructor for Root Port.


```solidity
constructor(uint256 _localChainId);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_localChainId`|`uint256`|layer zero chain id of the local chain.|


### receive


```solidity
receive() external payable;
```

### initialize

Function to initialize the Root Port.


```solidity
function initialize(address _bridgeAgentFactory, address _coreRootRouter) external onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_bridgeAgentFactory`|`address`|The address of the Bridge Agent Factory.|
|`_coreRootRouter`|`address`|The address of the Core Root Router.|


### initializeCore

Function to initialize the Root Chain Core Contracts in Port Storage.


```solidity
function initializeCore(
    address _coreRootBridgeAgent,
    address _coreLocalBranchBridgeAgent,
    address _localBranchPortAddress
) external onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_coreRootBridgeAgent`|`address`|The address of the Core Root Bridge Agent.|
|`_coreLocalBranchBridgeAgent`|`address`|The address of the Core Arbitrum Branch Bridge Agent.|
|`_localBranchPortAddress`|`address`|The address of the Arbitrum Branch Port.|


### renounceOwnership

Function being overriden to prevent mistakenly renouncing ownership.


```solidity
function renounceOwnership() public payable override onlyOwner;
```

### getLocalToken

Function that returns Local Token's Local Address on another chain.


```solidity
function getLocalToken(address _localAddress, uint256 _srcChainId, uint256 _dstChainId)
    external
    view
    override
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


### _getLocalToken

View Function returns Local Token's Local Address on another chain.


```solidity
function _getLocalToken(address _localAddress, uint256 _srcChainId, uint256 _dstChainId)
    internal
    view
    returns (address);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_localAddress`|`address`|The address of the token in the local chain.|
|`_srcChainId`|`uint256`|The chainId of the chain where the token is deployed.|
|`_dstChainId`|`uint256`|The chainId of the chain for which the token address is requested.|


### getUnderlyingTokenFromGlobal

Returns the underlying token address given it's global address.


```solidity
function getUnderlyingTokenFromGlobal(address _globalAddress, uint256 _srcChainId)
    external
    view
    override
    returns (address);
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
function isGlobalToken(address _globalAddress, uint256 _srcChainId) external view override returns (bool);
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
function isLocalToken(address _localAddress, uint256 _srcChainId) external view override returns (bool);
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

View Function returns True if Local Token is already added in current chain, false otherwise.


```solidity
function isLocalToken(address _localAddress, uint256 _srcChainId, uint256 _dstChainId) external view returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_localAddress`|`address`|The address of the token in the local chain.|
|`_srcChainId`|`uint256`|The chainId of the chain where the token is deployed.|
|`_dstChainId`|`uint256`||

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|bool True if Local Token is already added in current chain, false otherwise.|


### isUnderlyingToken

View Function returns True if the underlying Token is already added in given chain, false otherwise.


```solidity
function isUnderlyingToken(address _underlyingToken, uint256 _srcChainId) external view override returns (bool);
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


### setAddresses

Setter function to add a new underlying token to the system. Includes the creation of a new local hToken
and global hToken.


```solidity
function setAddresses(address _globalAddress, address _localAddress, address _underlyingAddress, uint256 _srcChainId)
    external
    override
    requiresCoreRootRouter;
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
function setLocalAddress(address _globalAddress, address _localAddress, uint256 _srcChainId)
    external
    override
    requiresCoreRootRouter;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_globalAddress`|`address`|new hToken address to update.|
|`_localAddress`|`address`|new underlying/native token address to set.|
|`_srcChainId`|`uint256`||


### bridgeToRoot

Updates root port state to match a new deposit.


```solidity
function bridgeToRoot(address _to, address _hToken, uint256 _amount, uint256 _deposit, uint256 _srcChainId)
    external
    override
    requiresBridgeAgent
    requiresGlobalAddress(_hToken);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_to`|`address`|recipient of bridged tokens.|
|`_hToken`|`address`|address of the hToken to bridge.|
|`_amount`|`uint256`|amount of hTokens to bridge.|
|`_deposit`|`uint256`|amount of underlying tokens to deposit.|
|`_srcChainId`|`uint256`|chainId of the chain where the tokens are being bridged from.|


### _decrementBranchBalance

Function to decrement the balance of a hToken in a branch.


```solidity
function _decrementBranchBalance(address _hToken, uint256 _amount, uint256 _srcChainId) internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_hToken`|`address`|The address of the hToken.|
|`_amount`|`uint256`|The amount to decrement the balance by.|
|`_srcChainId`|`uint256`|The chainId of the chain where the hToken is being bridged from.|


### bridgeToBranch

Updates root port state to match hTokens being bridged to branch.


```solidity
function bridgeToBranch(address _from, address _hToken, uint256 _amount, uint256 _deposit, uint256 _dstChainId)
    external
    requiresBridgeAgent
    requiresGlobalAddress(_hToken);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_from`|`address`|depositor of the hTokens to bridge.|
|`_hToken`|`address`|address of the hToken to bridge.|
|`_amount`|`uint256`|amount of hTokens to bridge.|
|`_deposit`|`uint256`|amount of underlying tokens to deposit.|
|`_dstChainId`|`uint256`|chainId of the chain where the tokens are being bridged to.|


### _incrementBranchBalance

Function to increment the balance of a hToken in a branch.


```solidity
function _incrementBranchBalance(address _hToken, uint256 _amount, uint256 _dstChainId) internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_hToken`|`address`|The address of the hToken.|
|`_amount`|`uint256`|The amount to increment the balance by.|
|`_dstChainId`|`uint256`|The chainId of the chain where the hToken is being bridged to.|


### bridgeToRootFromLocalBranch

Bridges hTokens from the local arbitrum branch for usage in the root port.


```solidity
function bridgeToRootFromLocalBranch(address _from, address _hToken, uint256 _amount)
    external
    override
    requiresLocalBranchPort
    requiresGlobalAddress(_hToken);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_from`|`address`|sender of the hTokens to bridge.|
|`_hToken`|`address`|address of the hToken to bridge.|
|`_amount`|`uint256`|amount of hTokens to bridge.|


### bridgeToLocalBranchFromRoot


```solidity
function bridgeToLocalBranchFromRoot(address _to, address _hToken, uint256 _amount)
    external
    override
    requiresLocalBranchPort
    requiresGlobalAddress(_hToken);
```

### burnFromLocalBranch

Burns tokens from the Arbitrum Branch Port withdrawer address.


```solidity
function burnFromLocalBranch(address _from, address _hToken, uint256 _amount)
    external
    override
    requiresLocalBranchPort
    requiresGlobalAddress(_hToken);
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
function mintToLocalBranch(address _to, address _hToken, uint256 _amount)
    external
    override
    requiresLocalBranchPort
    requiresGlobalAddress(_hToken);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_to`|`address`|recipient of the newly minted tokens.|
|`_hToken`|`address`|address of the hToken to mint.|
|`_amount`|`uint256`|amount of tokens to mint.|


### fetchVirtualAccount

Gets the virtual account given a user address. Creates a new virtual account if one does not exist.


```solidity
function fetchVirtualAccount(address _user) external override returns (VirtualAccount account);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_user`|`address`|address of the user to get the virtual account for.|


### _addVirtualAccount

Creates a new virtual account for a user.


```solidity
function _addVirtualAccount(address _user) internal returns (VirtualAccount newAccount);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_user`|`address`|address of the user to associate a virtual account with.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`newAccount`|`VirtualAccount`|the newly created virtual account.|


### toggleVirtualAccountApproved

Toggles the approval of a router for virtual account usage.

*Allows for a router to interact/spend from a user's virtual account.*


```solidity
function toggleVirtualAccountApproved(VirtualAccount _userAccount, address _router)
    external
    override
    requiresBridgeAgent;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_userAccount`|`VirtualAccount`|virtual account to toggle the approval for.|
|`_router`|`address`|router to toggle the approval for.|


### addBridgeAgent

Adds a new bridge agent to the system.


```solidity
function addBridgeAgent(address _manager, address _bridgeAgent) external override requiresBridgeAgentFactory;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_manager`|`address`|address of the manager of the bridge agent.|
|`_bridgeAgent`|`address`|address of the bridge agent to add.|


### syncBranchBridgeAgentWithRoot

Sets the address of the branch bridge agent connected to a root bridge agent for a given chain.


```solidity
function syncBranchBridgeAgentWithRoot(address _newBranchBridgeAgent, address _rootBridgeAgent, uint256 _branchChainId)
    external
    override
    requiresCoreRootRouter;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_newBranchBridgeAgent`|`address`|address of the new branch bridge agent.|
|`_rootBridgeAgent`|`address`|address of the root bridge agent.|
|`_branchChainId`|`uint256`||


### setBridgeAgentManager

Allows a root bridge agent to update it's bridge agent manager address.


```solidity
function setBridgeAgentManager(address _newManager) external override requiresBridgeAgent;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_newManager`|`address`|address of the new bridge agent manager.|


### toggleBridgeAgentFactory

Toggles the status of a bridge agent factory.


```solidity
function toggleBridgeAgentFactory(address _bridgeAgentFactory) external override onlyOwner;
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
) external override onlyOwner;
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
function addEcosystemToken(address _ecoTokenGlobalAddress) external override onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_ecoTokenGlobalAddress`|`address`||


### setCoreRootRouter

Sets the core root router and bridge agent


```solidity
function setCoreRootRouter(address _coreRootRouter, address _coreRootBridgeAgent) external override onlyOwner;
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
) external payable override onlyOwner;
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
    external
    override
    onlyOwner;
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
function sweep(address _recipient) external override onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_recipient`|`address`||


### requiresGlobalAddress

Modifier that verifies global address is valid.


```solidity
modifier requiresGlobalAddress(address _globalAddress);
```

### requiresBridgeAgentFactory

Modifier that verifies msg sender is an active Bridge Agent Factory.


```solidity
modifier requiresBridgeAgentFactory();
```

### requiresBridgeAgent

Modifier that verifies msg sender is an active Bridge Agent.


```solidity
modifier requiresBridgeAgent();
```

### requiresCoreRootRouter

Modifier that verifies msg sender is the Root Chain's Core Router.


```solidity
modifier requiresCoreRootRouter();
```

### requiresLocalBranchPort

Modifier that verifies msg sender is the Root Chain's Local Branch Port.


```solidity
modifier requiresLocalBranchPort();
```

