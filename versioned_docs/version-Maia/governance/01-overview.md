---
id: overview
title: Overview
---

MaiaDAO’s governance is carried out solely by community members that hold the vote-locked version of the token.
The following are examples of most matters that fall under its purview:
1. Treasury Management Proposals
2. Supply Management Proposals

## Severity Levels Overview

| Threshold | Voting Period | Voting Delay | Quorum | Max Operations | Actions |
|:---------:|:-------------:|:------------:|:------:|:--------------:|---------|
| ![0.5%](# '0.5 - 5%') | ![2 weeks](# '1 week to 3 weeks') | ![1 block](# '1 block to 1 week') | 8% | 10 Actions | TRANSFER_TOKEN_MAIA_TREASURY; APPROVE_TOKEN_MAIA_TREASURY; MINT_MAIA; |

---

## **A. Definitions**

### **Threshold**
This represents the range of voting power required to participate in the decision-making process for a proposal. The **minimum threshold** is the lowest percentage of total GovToken (aka bHERMES-Governance) votes needed to consider a proposal, and the **maximum threshold** is the highest percentage allowed.

### **Voting Period**
The time frame during which votes can be cast for a proposal. Range from as short as **1 week** to **3 weeks**.

### **Voting Delay**
The time interval between the proposal's submission and the start of the voting period. This delay allows members to review and consider the proposal before voting begins.

### **Quorum**
The minimum percentage of total GovToken votes required for the voting results to be considered valid. This ensures that a significant portion of the community participates in the decision-making process.

### **Max Operations**
The maximum number of actions or changes that can be executed under a single proposal. This limit helps maintain focus and prevents over-complication of proposals.

### **Actions**
Specific changes or operations that can be proposed and voted on at each severity level. These actions range from transferring treasury assets to minting new Maia.

## **B. Next Steps in Understanding Governance**

In the following sections, you will find the specific actions supported by governance, the processes to follow, and the implications of these actions.

### 1. [**Governance Process**][process]

### 2. **Actions**
- [Treasury Management][action-treasury]
- [Supply Management][action-supply]

[severity]: ../governance/02-severity.md
[process]: ../governance/process/01-governance-process.md
[action-treasury]: ../governance/actions/treasury/01-overview.md
[action-supply]: ../governance/actions/gauges/01-overview.md