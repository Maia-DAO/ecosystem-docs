# IRootBridgeAgentFactory
[Git Source](https://github.com/Maia-DAO/2023-09-maia-remediations/blob/main/src/interfaces/IRootBridgeAgentFactory.sol)

**Author:**
MaiaDAO

Factory contract used to deploy new Root Bridge Agents responsible
which are in charge of managing the deposit and withdrawal of assets
between the branch chains and the omnichain environment.


## Functions
### createBridgeAgent


```solidity
function createBridgeAgent(address newRootRouterAddress) external returns (address newBridgeAgent);
```

## Events
### BridgeAgentAdded

```solidity
event BridgeAgentAdded(address indexed bridgeAgent, address indexed manager);
```

