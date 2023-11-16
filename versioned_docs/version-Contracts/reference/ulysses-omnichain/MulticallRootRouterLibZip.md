# MulticallRootRouterLibZip
[Git Source](https://github.com/Maia-DAO/2023-09-maia-remediations/blob/main/src/MulticallRootRouterLibZip.sol)

**Inherits:**
[MulticallRootRouter](/src/ulysses-omnichain/MulticallRootRouter.sol/contract.MulticallRootRouter.md)

**Author:**
MaiaDAO

Root Router implementation for interfacing with third-party dApps present in the Root Omnichain Environment.

*Func IDs for calling these  functions through the messaging layer:
CROSS-CHAIN MESSAGING FUNCIDs
-----------------------------
FUNC ID      | FUNC NAME
-------------+---------------
0x01         | multicallNoOutput
0x02         | multicallSingleOutput
0x03         | multicallMultipleOutput*


## Functions
### constructor


```solidity
constructor(uint256 _localChainId, address _localPortAddress, address _multicallAddress)
    MulticallRootRouter(_localChainId, _localPortAddress, _multicallAddress);
```

### _decode


```solidity
function _decode(bytes calldata data) internal pure override returns (bytes memory);
```

