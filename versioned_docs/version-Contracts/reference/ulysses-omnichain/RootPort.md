---
id: RootPort
title: RootPort
---

**Inherits:**
Ownable, [IRootPort](/ulysses-omnichain/interfaces/IRootPort.sol/interface.IRootPort.md)


## State Variables
### localChainId
Local Chain Id


```solidity
uint24 public immutable localChainId;
```


### wrappedNativeTokenAddress
wrapped native token address


```solidity
address public immutable wrappedNativeTokenAddress;
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
mapping(address => VirtualAccount) public getUserAccount;
```


### isRouterApproved
Holds the mapping from Virtual account to router address => bool.

Stores whether a router is approved to spend a virtual account.


```solidity
mapping(VirtualAccount => mapping(address => bool)) public isRouterApproved;
```


### isChainId
Mapping from address to Bridge Agent.


```solidity
mapping(uint256 => bool) public isChainId;
```


### isBridgeAgent
Mapping from address to isBridgeAgent (bool).


```solidity
mapping(address => bool) public isBridgeAgent;
```


### bridgeAgents
Bridge Agents deployed in root chain.


```solidity
address[] public bridgeAgents;
```


### bridgeAgentsLenght
Number of bridgeAgents deployed in current chain.


```solidity
uint256 public bridgeAgentsLenght;
```


### getBridgeAgentManager
Mapping address Bridge Agent => address Bridge Agent Manager


```solidity
mapping(address => address) public getBridgeAgentManager;
```


### isBridgeAgentFactory
Mapping from Underlying Address to isUnderlying (bool).


```solidity
mapping(address => bool) public isBridgeAgentFactory;
```


### bridgeAgentFactories
Bridge Agents deployed in root chain.


```solidity
address[] public bridgeAgentFactories;
```


### bridgeAgentFactoriesLenght
Number of Bridge Agents deployed in current chain.


```solidity
uint256 public bridgeAgentFactoriesLenght;
```


### isGlobalAddress
Mapping with all global hTokens deployed in the system.


```solidity
mapping(address => bool) public isGlobalAddress;
```


### getGlobalTokenFromLocal
ChainId -> Local Address -> Global Address


```solidity
mapping(address => mapping(uint256 => address)) public getGlobalTokenFromLocal;
```


### getLocalTokenFromGlobal
ChainId -> Global Address -> Local Address


```solidity
mapping(address => mapping(uint256 => address)) public getLocalTokenFromGlobal;
```


### getLocalTokenFromUnder
ChainId -> Underlying Address -> Local Address


```solidity
mapping(address => mapping(uint256 => address)) public getLocalTokenFromUnder;
```


### getUnderlyingTokenFromLocal
Mapping from Local Address to Underlying Address.


```solidity
mapping(address => mapping(uint256 => address)) public getUnderlyingTokenFromLocal;
```


### getWrappedNativeToken
Mapping from chainId to Wrapped Native Token Address


```solidity
mapping(uint256 => address) public getWrappedNativeToken;
```


### getGasPoolInfo
Mapping from chainId to Gas Pool Address


```solidity
mapping(uint256 => GasPoolInfo) public getGasPoolInfo;
```


### _setup

```solidity
bool internal _setup;
```


## Functions
### constructor


```solidity
constructor(uint24 _localChainId, address _wrappedNativeToken);
```

### initialize


```solidity
function initialize(address _bridgeAgentFactory, address _coreRootRouter) external onlyOwner;
```

### initializeCore


```solidity
function initializeCore(
    address _coreRootBridgeAgent,
    address _coreLocalBranchBridgeAgent,
    address _localBranchPortAddress
) external onlyOwner;
```

### forefeitOwnership

Function for transfering ownership of the contract to another address.


```solidity
function forefeitOwnership(address _owner) external onlyOwner;
```

### renounceOwnership

Function being overrriden to prevent mistakenly renouncing ownership.


```solidity
function renounceOwnership() public payable override onlyOwner;
```

### getLocalToken

Function that returns Local Token's Local Address on another chain.


```solidity
function getLocalToken(address _localAddress, uint24 _fromChain, uint24 _toChain) external view returns (address);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_localAddress`|`address`|The address of the token in the local chain.|
|`_fromChain`|`uint24`|The chainId of the chain where the token is deployed.|
|`_toChain`|`uint24`|The chainId of the chain where the token is deployed.|


### _getLocalToken

View Function returns Local Token's Local Address on another chain.


```solidity
function _getLocalToken(address _localAddress, uint256 _fromChain, uint24 _toChain) internal view returns (address);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_localAddress`|`address`|The address of the token in the local chain.|
|`_fromChain`|`uint256`|The chainId of the chain where the token is deployed.|
|`_toChain`|`uint24`|The chainId of the chain for which the token address is requested.|


### getUnderlyingTokenFromGlobal

Returns the underlying token address given it's global address.


```solidity
function getUnderlyingTokenFromGlobal(address _globalAddress, uint24 _fromChain) external view returns (address);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_globalAddress`|`address`|The address of the token in the global chain.|
|`_fromChain`|`uint24`|The chainId of the chain where the token is deployed.|


### _getUnderlyingTokenFromGlobal

Internal function that returns the underlying token address given it's global address.


```solidity
function _getUnderlyingTokenFromGlobal(address _globalAddress, uint24 _fromChain) internal view returns (address);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_globalAddress`|`address`|The address of the token in the global chain.|
|`_fromChain`|`uint24`|The chainId of the chain where the token is deployed.|


### isGlobalToken

View Function returns True if Global Token is already added in current chain, false otherwise.


```solidity
function isGlobalToken(address _globalAddress, uint24 _fromChain) external view returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_globalAddress`|`address`|The address of the token in the global chain.|
|`_fromChain`|`uint24`|The chainId of the chain where the token is deployed.|


### _isGlobalToken

Internal function that returns True if Global Token is already added in current chain, false otherwise.


```solidity
function _isGlobalToken(address _globalAddress, uint24 _fromChain) internal view returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_globalAddress`|`address`|The address of the token in the global chain.|
|`_fromChain`|`uint24`|The chainId of the chain where the token is deployed.|


### isLocalToken

View Function returns True if Local Token is already added in current chain, false otherwise.


```solidity
function isLocalToken(address _localAddress, uint24 _fromChain) external view returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_localAddress`|`address`|The address of the token in the local chain.|
|`_fromChain`|`uint24`|The chainId of the chain where the token is deployed.|


### isLocalToken

View Function returns True if Local Token is already added in current chain, false otherwise.


```solidity
function isLocalToken(address _localAddress, uint24 _fromChain, uint24 _toChain) external view returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_localAddress`|`address`|The address of the token in the local chain.|
|`_fromChain`|`uint24`|The chainId of the chain where the token is deployed.|
|`_toChain`|`uint24`||


### _isLocalToken

Internal function that returns True if Local Token and is also already added in another branch chain, false otherwise.


```solidity
function _isLocalToken(address _localAddress, uint24 _fromChain, uint24 _toChain) internal view returns (bool);
```

### isUnderlyingToken

View Function returns True if the underlying Token is already added in current chain, false otherwise.


```solidity
function isUnderlyingToken(address _underlyingToken, uint24 _fromChain) external view returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_underlyingToken`|`address`|The address of the underlying token.|
|`_fromChain`|`uint24`|The chainId of the chain where the token is deployed.|


### setAddresses

Setter function to update a Global hToken's Local hToken Address.


```solidity
function setAddresses(address _globalAddress, address _localAddress, address _underlyingAddress, uint24 _fromChain)
    external
    requiresCoreRootRouter;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_globalAddress`|`address`|new hToken address to update.|
|`_localAddress`|`address`|new underlying/native token address to set.|
|`_underlyingAddress`|`address`||
|`_fromChain`|`uint24`||


### setLocalAddress

Setter function to update a Global hToken's Local hToken Address.


```solidity
function setLocalAddress(address _globalAddress, address _localAddress, uint24 _fromChain)
    external
    requiresCoreRootRouter;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_globalAddress`|`address`|new hToken address to update.|
|`_localAddress`|`address`|new underlying/native token address to set.|
|`_fromChain`|`uint24`||


### bridgeToRoot

Updates root port state to match a new deposit.


```solidity
function bridgeToRoot(address _recipient, address _hToken, uint256 _amount, uint256 _deposit, uint24 _fromChainId)
    external
    requiresBridgeAgent;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_recipient`|`address`|recipient of bridged tokens.|
|`_hToken`|`address`|address of the hToken to bridge.|
|`_amount`|`uint256`|amount of hTokens to bridge.|
|`_deposit`|`uint256`|amount of underlying tokens to deposit.|
|`_fromChainId`|`uint24`|The chainId of the chain where the token is deployed.|


### mint

Mints new hTokens to the recipient.


```solidity
function mint(address _to, address _hToken, uint256 _amount, uint24 _fromChain) internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_to`|`address`|recipient of the newly minted hTokens.|
|`_hToken`|`address`|address of the hToken to mint.|
|`_amount`|`uint256`|amount of hTokens to mint.|
|`_fromChain`|`uint24`|The chainId of the chain where the token is deployed.|


### burn

Burns hTokens from the sender address.


```solidity
function burn(address _from, address _hToken, uint256 _amount, uint24 _fromChain) external requiresBridgeAgent;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_from`|`address`|sender of the hTokens to burn.|
|`_hToken`|`address`|address of the hToken to burn.|
|`_amount`|`uint256`|amount of hTokens to burn.|
|`_fromChain`|`uint24`|The chainId of the chain where the token is deployed.|


### bridgeToRootFromLocalBranch

Bridges hTokens from the local branch to the root port.


```solidity
function bridgeToRootFromLocalBranch(address _from, address _hToken, uint256 _amount)
    external
    requiresLocalBranchPort;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_from`|`address`|sender of the hTokens to bridge.|
|`_hToken`|`address`|address of the hToken to bridge.|
|`_amount`|`uint256`|amount of hTokens to bridge.|


### bridgeToLocalBranchFromRoot


```solidity
function bridgeToLocalBranchFromRoot(address _to, address _hToken, uint256 _amount) external requiresLocalBranchPort;
```

### mintToLocalBranch

Mints new tokens to the recipient address


```solidity
function mintToLocalBranch(address _to, address _hToken, uint256 _amount) external requiresLocalBranchPort;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_to`|`address`||
|`_hToken`|`address`|address of the hToken to mint.|
|`_amount`|`uint256`|amount of tokens to mint.|


### burnFromLocalBranch

Burns tokens from the sender address


```solidity
function burnFromLocalBranch(address _from, address _hToken, uint256 _amount) external requiresLocalBranchPort;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_from`|`address`|sender of the tokens to burn.|
|`_hToken`|`address`|address of the hToken to burn.|
|`_amount`|`uint256`|amount of tokens to burn.|


### fetchVirtualAccount

Gets the virtual account given a user address.


```solidity
function fetchVirtualAccount(address _user) external requiresBridgeAgent returns (VirtualAccount account);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_user`|`address`|address of the user to get the virtual account for.|


### addVirtualAccount

Creates a new virtual account for a user.


```solidity
function addVirtualAccount(address _user) internal returns (VirtualAccount newAccount);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_user`|`address`|address of the user to associate a virtual account with.|


### toggleVirtualAccountApproved

Toggles the approval of a router for a virtual account. Allows for a router to spend a user's virtual account.


```solidity
function toggleVirtualAccountApproved(VirtualAccount _userAccount, address _router) external requiresBridgeAgent;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_userAccount`|`VirtualAccount`|virtual account to toggle the approval for.|
|`_router`|`address`|router to toggle the approval for.|


### addBridgeAgent

Adds a new bridge agent to the list of bridge agents.


```solidity
function addBridgeAgent(address _manager, address _bridgeAgent) external requiresBridgeAgentFactory;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_manager`|`address`|address of the manager of the bridge agent.|
|`_bridgeAgent`|`address`|address of the bridge agent to add.|


### syncBranchBridgeAgentWithRoot

Sets the address of the bridge agent for a given chain.


```solidity
function syncBranchBridgeAgentWithRoot(address _newBranchBridgeAgent, address _rootBridgeAgent, uint24 _branchChainId)
    external
    requiresCoreRootRouter;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_newBranchBridgeAgent`|`address`|address of the new branch bridge agent.|
|`_rootBridgeAgent`|`address`|address of the root bridge agent.|
|`_branchChainId`|`uint24`||


### toggleBridgeAgent

Toggles the status of a bridge agent.


```solidity
function toggleBridgeAgent(address _bridgeAgent) external onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_bridgeAgent`|`address`|address of the bridge agent to toggle.|


### addBridgeAgentFactory

Adds a new bridge agent factory to the list of bridge agent factories.


```solidity
function addBridgeAgentFactory(address _bridgeAgentFactory) external onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_bridgeAgentFactory`|`address`|address of the bridge agent factory to add.|


### toggleBridgeAgentFactory

Toggles the status of a bridge agent factory.


```solidity
function toggleBridgeAgentFactory(address _bridgeAgentFactory) external onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_bridgeAgentFactory`|`address`|address of the bridge agent factory to toggle.|


### addNewChain

Adds a new chain to the root port lists of chains


```solidity
function addNewChain(
    address _pledger,
    uint256 _pledgedInitialAmount,
    address _coreBranchBridgeAgentAddress,
    uint24 _chainId,
    string memory _wrappedGasTokenName,
    string memory _wrappedGasTokenSymbol,
    uint24 _fee,
    uint24 _priceImpactPercentage,
    uint160 _sqrtPriceX96,
    address _nonFungiblePositionManagerAddress,
    address _newLocalBranchWrappedNativeTokenAddress,
    address _newUnderlyingBranchWrappedNativeTokenAddress
) external onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_pledger`|`address`|address of the addNewChain proposal initial liquidity pledger.|
|`_pledgedInitialAmount`|`uint256`|address of the core branch bridge agent|
|`_coreBranchBridgeAgentAddress`|`address`|address of the core branch bridge agent|
|`_chainId`|`uint24`|chainId of the new chain|
|`_wrappedGasTokenName`|`string`|gas token name of the chain to add|
|`_wrappedGasTokenSymbol`|`string`|gas token symbol of the chain to add|
|`_fee`|`uint24`|fee of the chain to add|
|`_priceImpactPercentage`|`uint24`|price impact percentage of the chain to add|
|`_sqrtPriceX96`|`uint160`|sqrt price of the chain to add|
|`_nonFungiblePositionManagerAddress`|`address`|address of the NFT position manager|
|`_newLocalBranchWrappedNativeTokenAddress`|`address`|address of the wrapped native token of the new branch|
|`_newUnderlyingBranchWrappedNativeTokenAddress`|`address`|address of the underlying wrapped native token of the new branch|


### setGasPoolInfo

Sets the gas pool info for a chain


```solidity
function setGasPoolInfo(uint24 _chainId, GasPoolInfo calldata _gasPoolInfo) external onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_chainId`|`uint24`|chainId of the chain to set the gas pool info for|
|`_gasPoolInfo`|`GasPoolInfo`|gas pool info to set|


### addEcosystemToken

Adds an ecosystem hToken to a branch chain


```solidity
function addEcosystemToken(address _ecoTokenGlobalAddress) external onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_ecoTokenGlobalAddress`|`address`||


### requiresBridgeAgentFactory

Modifier that verifies msg sender is the RootInterface Contract from Root Chain.


```solidity
modifier requiresBridgeAgentFactory();
```

### requiresBridgeAgent

Modifier that verifies msg sender is the RootInterface Contract from Root Chain.


```solidity
modifier requiresBridgeAgent();
```

### requiresCoreRootRouter

Modifier that verifies msg sender is the RootInterface Contract from Root Chain.


```solidity
modifier requiresCoreRootRouter();
```

### requiresLocalBranchPort

Modifier that verifies msg sender is the RootInterface Contract from Root Chain.


```solidity
modifier requiresLocalBranchPort();
```

