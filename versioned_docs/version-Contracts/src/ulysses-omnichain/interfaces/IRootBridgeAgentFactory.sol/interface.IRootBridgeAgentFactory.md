# IRootBridgeAgentFactory
[Git Source](https://github.com/Maia-DAO/test-env-V2/blob/84b5f9e8695c91ddb02f27bb3dfb1c652f55ced4/ulysses-omnichain/interfaces/IRootBridgeAgentFactory.sol)

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

