# IRootPort

**Author:**
MaiaDAO

Ulyses `RootPort` implementation for Root Omnichain Environment deployment.
This contract is used to manage the deposit and withdrawal of assets
between the Root Omnichain Environment an every Branch Chain in response to
Root Bridge Agents requests. Manages Bridge Agents and their factories as well as
key governance enabled actions such as adding new chains and bridge agent factories.


## Functions
### getBridgeAgentManager


```solidity
function getBridgeAgentManager(address _rootBridgeAgent) external view returns (address);
```

### isChainId


```solidity
function isChainId(uint256 _chainId) external view returns (bool);
```

### isBridgeAgentFactory


```solidity
function isBridgeAgentFactory(address _bridgeAgentFactory) external view returns (bool);
```

### isGlobalAddress


```solidity
function isGlobalAddress(address _globalAddress) external view returns (bool);
```

### isRouterApproved

Mapping from Underlying Address to isUnderlying (bool).


```solidity
function isRouterApproved(VirtualAccount _userAccount, address _router) external returns (bool);
```

### getGlobalTokenFromLocal

View Function returns Token's Global Address from it's local address.


```solidity
function getGlobalTokenFromLocal(address _localAddress, uint256 _fromChain) external view returns (address);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_localAddress`|`address`|The address of the token in the local chain.|
|`_fromChain`|`uint256`|The chainId of the chain where the token is deployed.|


### getLocalTokenFromGlobal

View Function returns Token's Local Address from it's global address.


```solidity
function getLocalTokenFromGlobal(address _globalAddress, uint256 _fromChain) external view returns (address);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_globalAddress`|`address`|The address of the token in the global chain.|
|`_fromChain`|`uint256`|The chainId of the chain where the token is deployed.|


### getLocalTokenFromUnder

View Function that returns the local token address from the underlying token address.


```solidity
function getLocalTokenFromUnder(address _underlyingAddress, uint256 _fromChain) external view returns (address);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_underlyingAddress`|`address`|The address of the underlying token.|
|`_fromChain`|`uint256`|The chainId of the chain where the token is deployed.|


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


### getUnderlyingTokenFromLocal

View Function returns a underlying token address from it's local address.


```solidity
function getUnderlyingTokenFromLocal(address _localAddress, uint256 _fromChain) external view returns (address);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_localAddress`|`address`|The address of the token in the local chain.|
|`_fromChain`|`uint256`|The chainId of the chain where the token is deployed.|


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

View Function returns True if Local Token and is also already added in another branch chain, false otherwise.


```solidity
function isLocalToken(address _localAddress, uint24 _fromChain, uint24 _toChain) external view returns (bool);
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


### getWrappedNativeToken

View Function returns wrapped native token address for a given chain.


```solidity
function getWrappedNativeToken(uint256 _chainId) external view returns (address);
```

### getGasPoolInfo

View Function returns the gasPoolAddress for a given chain.


```solidity
function getGasPoolInfo(uint256 _chainId)
    external
    view
    returns (bool zeroForOneOnInflow, uint24 priceImpactPercentage, address gasTokenGlobalAddress, address poolAddress);
```

### getUserAccount


```solidity
function getUserAccount(address _user) external view returns (VirtualAccount);
```

### burn

Burns hTokens from the sender address.


```solidity
function burn(address _from, address _hToken, uint256 _amount, uint24 _fromChain) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_from`|`address`|sender of the hTokens to burn.|
|`_hToken`|`address`|address of the hToken to burn.|
|`_amount`|`uint256`|amount of hTokens to burn.|
|`_fromChain`|`uint24`|The chainId of the chain where the token is deployed.|


### bridgeToRoot

Updates root port state to match a new deposit.


```solidity
function bridgeToRoot(address _recipient, address _hToken, uint256 _amount, uint256 _deposit, uint24 _fromChainId)
    external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_recipient`|`address`|recipient of bridged tokens.|
|`_hToken`|`address`|address of the hToken to bridge.|
|`_amount`|`uint256`|amount of hTokens to bridge.|
|`_deposit`|`uint256`|amount of underlying tokens to deposit.|
|`_fromChainId`|`uint24`|The chainId of the chain where the token is deployed.|


### bridgeToRootFromLocalBranch

Bridges hTokens from the local branch to the root port.


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

Bridges hTokens from the root port to the local branch.


```solidity
function bridgeToLocalBranchFromRoot(address _to, address _hToken, uint256 _amount) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_to`|`address`|recipient of the bridged tokens.|
|`_hToken`|`address`|address of the hToken to bridge.|
|`_amount`|`uint256`|amount of hTokens to bridge.|


### mintToLocalBranch

Mints new tokens to the recipient address


```solidity
function mintToLocalBranch(address _recipient, address _hToken, uint256 _amount) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_recipient`|`address`|recipient of the newly minted tokens.|
|`_hToken`|`address`|address of the hToken to mint.|
|`_amount`|`uint256`|amount of tokens to mint.|


### burnFromLocalBranch

Burns tokens from the sender address


```solidity
function burnFromLocalBranch(address _from, address _hToken, uint256 _amount) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_from`|`address`|sender of the tokens to burn.|
|`_hToken`|`address`|address of the hToken to burn.|
|`_amount`|`uint256`|amount of tokens to burn.|


### setAddresses

Setter function to update a Global hToken's Local hToken Address.


```solidity
function setAddresses(address _globalAddress, address _localAddress, address _underlyingAddress, uint24 _fromChain)
    external;
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
function setLocalAddress(address _globalAddress, address _localAddress, uint24 _fromChain) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_globalAddress`|`address`|new hToken address to update.|
|`_localAddress`|`address`|new underlying/native token address to set.|
|`_fromChain`|`uint24`||


### fetchVirtualAccount

Gets the virtual account given a user address.


```solidity
function fetchVirtualAccount(address _user) external returns (VirtualAccount account);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_user`|`address`|address of the user to get the virtual account for.|


### toggleVirtualAccountApproved

Toggles the approval of a router for a virtual account. Allows for a router to spend a user's virtual account.


```solidity
function toggleVirtualAccountApproved(VirtualAccount _userAccount, address _router) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_userAccount`|`VirtualAccount`|virtual account to toggle the approval for.|
|`_router`|`address`|router to toggle the approval for.|


### syncBranchBridgeAgentWithRoot

Sets the address of the bridge agent for a given chain.


```solidity
function syncBranchBridgeAgentWithRoot(address _newBranchBridgeAgent, address _rootBridgeAgent, uint24 _fromChain)
    external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_newBranchBridgeAgent`|`address`|address of the new branch bridge agent.|
|`_rootBridgeAgent`|`address`|address of the root bridge agent.|
|`_fromChain`|`uint24`|chainId of the chain to set the bridge agent for.|


### addBridgeAgent

Adds a new bridge agent to the list of bridge agents.


```solidity
function addBridgeAgent(address _manager, address _bridgeAgent) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_manager`|`address`|address of the manager of the bridge agent.|
|`_bridgeAgent`|`address`|address of the bridge agent to add.|


### toggleBridgeAgent

Toggles the status of a bridge agent.


```solidity
function toggleBridgeAgent(address _bridgeAgent) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_bridgeAgent`|`address`|address of the bridge agent to toggle.|


### addBridgeAgentFactory

Adds a new bridge agent factory to the list of bridge agent factories.


```solidity
function addBridgeAgentFactory(address _bridgeAgentFactory) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_bridgeAgentFactory`|`address`|address of the bridge agent factory to add.|


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
) external;
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
function setGasPoolInfo(uint24 _chainId, GasPoolInfo calldata _gasPoolInfo) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_chainId`|`uint24`|chainId of the chain to set the gas pool info for|
|`_gasPoolInfo`|`GasPoolInfo`|gas pool info to set|


### addEcosystemToken

Adds an ecosystem hToken to a branch chain


```solidity
function addEcosystemToken(address ecoTokenGlobalAddress) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`ecoTokenGlobalAddress`|`address`|ecosystem token global address|


## Events
### BridgeAgentFactoryAdded

```solidity
event BridgeAgentFactoryAdded(address indexed bridgeAgentFactory);
```

### BridgeAgentFactoryToggled

```solidity
event BridgeAgentFactoryToggled(address indexed bridgeAgentFactory);
```

### BridgeAgentAdded

```solidity
event BridgeAgentAdded(address indexed bridgeAgent, address manager);
```

### BridgeAgentToggled

```solidity
event BridgeAgentToggled(address indexed bridgeAgent);
```

### BridgeAgentSynced

```solidity
event BridgeAgentSynced(address indexed bridgeAgent, address indexed rootBridgeAgent, uint24 indexed fromChain);
```

### NewChainAdded

```solidity
event NewChainAdded(uint24 indexed chainId);
```

### GasPoolInfoSet

```solidity
event GasPoolInfoSet(uint24 indexed chainId, GasPoolInfo gasPoolInfo);
```

### VirtualAccountCreated

```solidity
event VirtualAccountCreated(address indexed user, address account);
```

### LocalTokenAdded

```solidity
event LocalTokenAdded(address indexed underlyingAddress, address localAddress, address globalAddress, uint24 chainId);
```

### GlobalTokenAdded

```solidity
event GlobalTokenAdded(address indexed localAddress, address indexed globalAddress, uint24 chainId);
```

### EcosystemTokenAdded

```solidity
event EcosystemTokenAdded(address indexed ecoTokenGlobalAddress);
```

## Errors
### UnrecognizedBridgeAgentFactory

```solidity
error UnrecognizedBridgeAgentFactory();
```

### UnrecognizedBridgeAgent

```solidity
error UnrecognizedBridgeAgent();
```

### UnrecognizedToken

```solidity
error UnrecognizedToken();
```

### AlreadyAddedEcosystemToken

```solidity
error AlreadyAddedEcosystemToken();
```

### AlreadyAddedBridgeAgent

```solidity
error AlreadyAddedBridgeAgent();
```

### BridgeAgentNotAllowed

```solidity
error BridgeAgentNotAllowed();
```

### UnrecognizedCoreRootRouter

```solidity
error UnrecognizedCoreRootRouter();
```

### UnrecognizedLocalBranchPort

```solidity
error UnrecognizedLocalBranchPort();
```

### UnknowHTokenFactory

```solidity
error UnknowHTokenFactory();
```

