# IBranchBridgeAgentFactory

**Author:**
MaiaDAO

Factory contract for allowing permissionless deployment of
new Branch Bridge Agents which are in charge of managing the
deposit and withdrawal of assets between the branch chains
and the omnichain environment.


## Functions
### createBridgeAgent


```solidity
function createBridgeAgent(
    address newRootRouterAddress,
    address rootBridgeAgentAddress,
    address _rootBridgeAgentFactoryAddress
) external returns (address newBridgeAgent);
```

