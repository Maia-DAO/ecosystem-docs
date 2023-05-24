# DeployBranchBridgeAgent
[Git Source](https://github.com/Maia-DAO/test-env-V2/blob/84b5f9e8695c91ddb02f27bb3dfb1c652f55ced4/ulysses-omnichain/BranchBridgeAgent.sol)


## Functions
### deploy


```solidity
function deploy(
    WETH9 _wrappedNativeToken,
    uint256 _rootChainId,
    uint256 _localChainId,
    address _rootBridgeAgentAddress,
    address _localAnyCallAddress,
    address _localAnyCallExecutorAddress,
    address _localRouterAddress,
    address _localPortAddress
) external returns (BranchBridgeAgent);
```

