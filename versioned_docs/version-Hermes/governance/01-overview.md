---
id: overview
title: Overview
---

# I. Governance Overview

Proposals for governance within the Hermes Protocol are systematically classified into <u>5-tiers of severity</u>, reflecting their respective levels of impact. At the pinnacle of this hierarchy is Severity 5, denoting proposals with the potential for the most substantial influence, as determined by the scope of the actions they authorize. These actions range from minor modifications (severity 1), such as adjusting the allocation of voting rights, to more consequential alterations, including changes to the Ulysses Pool or the issuance of new Hermes tokens. This stratification ensures that governance activities are appropriately scaled to the importance of each proposal, facilitating informed and effective decision-making.

Governance within the Hermes Protocol is exclusively managed by community members holding the vote-locked $HERMES token, also known as `veHERMES` (or `bHERMES-Governance` Token in V2).

The framework governing this process which includes,`Severity Levels`, `Minimum & Maximum Thresholds`, Voting Requirements including `Voting Period`, `Voting Delay`, `Quorum`, `Max Operations` and lastly `Actions` permitted are outlined in a table format in the following chart.

| Level |  Threshold <br/> Min - Max | Voting Period | Voting Delay | Quorum | Max Operations | Actions |
|-------|------------------------|---------------|--------------|------------|----------------|---------|
| 1     | 0.1 - 1%                | 24 hrs to 1 week | 1 block to 1 week | 4%            | 10 Actions | • Add/Remove Bribes |
| 2     | 0.25 - 2.5%             | 2 days to 2 weeks | 2 days to 1 week | 12.5%         | 10 Actions | • Add/Remove Gauges <br/> • Add/Remove Partners from Incentives Program |
| 3     | 0.5 - 5%                | 1 week to 3 weeks | 4 days to 1 week | 25%           | 10 Actions | • Add/Remove Gauge System <br/> • Add Ulysses Port to new chain |
| 4     | 0.75 - 7.5%             | 2 weeks to 4 weeks | 1 week to 2 weeks | 35%          | 10 Actions | • Change Weight Ulysses Pool <br/> • Change Weight Ulysses Token |
| 5     | 1 - 10%                 | 2 weeks to 6 weeks | 1 week to 2 weeks | 50%          | 10 Actions | •  Add/Remove New Ulysses Root Router <br/>  • Add Destinations to Ulysses Pool <br/> •  Add/Remove LP Ulysses Token <br/> • Mint Hermes |
---

## A. Defintions

<u>Level</u>: Indicates the severity of the proposal within the governance structure. Level 1 represents the least severe proposals, while Level 5 includes the most severe proposals.

<u>Min/Max Threshold</u>:This represents the range of voting power required to participate in the decision-making process for a proposal. The minimum threshold is the lowest percentage of total GovToken (aka bHERMES-Governance) votes needed to consider a proposal, and the maximum threshold is the highest percentage allowed.

<u>Voting Period</u>: The time frame during which votes can be cast for a proposal. This period varies depending on the severity level, ranging from as short as 24 hours to as long as 6 weeks.

<u>Voting Delay</u>: The time interval between the proposal's submission and the start of the voting period. This delay allows members to review and consider the proposal before voting begins.

<u>Quorum</u>: The minimum percentage of total GovToken votes required for the voting results to be considered valid. This ensures that a significant portion of the community participates in the decision-making process.

<u>Max Operations</u>: The maximum number of actions or changes that can be executed under a single proposal. This limit helps maintain focus and prevents over-complication of proposals.

<u>Actions</u>: Specific changes or operations that can be proposed and voted on at each severity level. These actions range from adding or removing bribes at Level 1 to more impactful decisions like minting Hermes tokens at Level 5.

## B. Next Steps in Understanding Governance

This page gives a general overview of the fundamental aspects of governance within the Hermes Protocol. This includes the objective, requirements, and a brief overview of the severity levels. The following sections provides an in-depth analysis of each severity level, offering insights into the specific actions permitted, the process in which to do so, and the implications of these actions.

### 1. [**Severity Levels & Implications**][severity]

### 2. [**Governance Process**][process]

### 3. **Actions**
- [Treasury Management][action-treasury]
- [Gauge Management][action-gauge]

[severity]: ../governance/02-severity.md
[process]: ../governance/process/01-governance-process.md
[action-treasury]: ../governance/actions/treasury/01-overview.md
[action-gauge]: ../governance/actions/gauges/01-overview.md