---
id: faqs
title: FAQ's
---

## Why do ETH swaps involve converting to WETH?

On the Hermes UI, swaps can start and end with ETH. However ETH may need to be wrapped into WETH during the swap.

Tokens must follow the ERC-20 standard to be swappable through Uniswap and since ETH was created before ERC-20 existed, WETH (Wrapped ETH) serves as an ERC-20-compatible version of ETH, enabling seamless swaps with other ERC-20 tokens.


## Why do I need to approve tokens before swapping?

When you approve tokens, you are giving permission to the Hermes platform, that uses Uniswap smart contract on the background, to spend a specific amount of tokens on your behalf.

This token approval remains valid for 30 days. Once it expires, the token will need to be reapproved.

However, the approval is done through a signature request, which does not incur any network costs.

## Why did my transaction fail?

Transactions can fail due to multiple reasons:

* **Slippage limits**: The slippage limit is the maximum difference between the expected price of a trade and the price at which the trade is executed. This slippage limit is set to 0.5% and if the slippage limit is exceeded, the transaction will fail. 

* **Insufficient funds**: If you do not have enough gas token to cover the network costs, you won't be able to execute the transaction.

* **Token not supported by Uniswap V3 contracts**: Deflationary tokens are not supported by the Uniswap v3 router. If you are trying to execute a transaction with any of these tokens, the transaction with automatically fail.

## Subgraph downtime

Hermes uses third party subgraphs which are vulnerable to experience downtime due to maintenance or other issues. This results in the inability to fetch data from the subgraph, which may cause the UI to not display the data correctly.

## Adding full range liquidity

Despite Uniswap V3 being concentrated liquidity, you can still add full range liquidity by setting the upper and lower tick to the maximum and minimum values respectively. This will allow you to provide liquidity across the entire price range of the pool.

This can be achieve by clicking the "Full range" button on the Add Liquidity page.


## What is the network fee?

The network fee is the cost of executing a transaction on a given chain. The fee depends on the chain that you are trying to execute the transaction from.

## How can I change the price slippage?

[Slippage](../overview/glossary#slippage) is the difference between the expected price of a trade and the price at which the trade is executed. The slippage limit is set to 0.5% by default, but you can change this value by clicking on the "Settings" button on the Swap page and adjusting the slippage tolerance according to your needs.

The automatic slippage percentage will be set to be between 0.1% and 5% depending on the network cost and swap size. The auto slippage is designed to give you the best swap outcome.

## What is the Token fee

A token fee is the amount that a token charges when you buy sell or transfer it, these are also know as fee on transfer tokens.