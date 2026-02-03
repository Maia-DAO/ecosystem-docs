---
id: overview
title: Overview
---

# I. Governance Overview

Proposals for governance within the Hermes Protocol are systematically classified into <u>5-tiers of severity</u>, reflecting their respective levels of impact. At the pinnacle of this hierarchy is Severity 5, denoting proposals with the potential for the most substantial influence, as determined by the scope of the actions they authorize. These actions range from minor modifications (severity 1), such as adjusting the allocation of voting rights, to more consequential alterations, including changes to the Ulysses Pool or the issuance of new Hermes tokens. This stratification ensures that governance activities are appropriately scaled to the importance of each proposal, facilitating informed and effective decision-making.

Governance within the Hermes Protocol is exclusively managed by community members holding the vote-locked $HERMES token, also known as `bHERMES-Governance`.

The framework governing this process which includes,`Severity Levels`, `Minimum & Maximum Thresholds`, Voting Requirements including `Voting Period`, `Voting Delay`, `Quorum`, `Max Operations` and lastly `Actions` permitted are outlined in a table format in the following chart.

| Level | Threshold | Voting Period | Voting Delay | Quorum | Max Operations | Actions |
|-------|:---------:|:-------------:|:------------:|:------:|:--------------:|---------|
| 1     | ![0.1%](# '0.1 - 1%')  | ![3 days](# '24 hrs to 1 week')   | ![1 block](# '1 block to 1 week')   | 1%     | 10 Actions     | ADD_GAUGE; REMOVE_GAUGE; SET_MIN_WIDTH; |
| 2     | ![0.25%](# '0.25 - 2.5%') | ![1 week](# '2 days to 2 weeks')  | ![1 block](# '1 block to 1 week')   | 2%     | 10 Actions     | ADD_PARTNER; ADD_PARTNER_VAULT; REMOVE_PARTNER; REMOVE_PARTNER_VAULT; |
| 3     | ![0.5%](# '0.5 - 5%') | ![2 weeks](# '1 week to 3 weeks') | ![1 block](# '1 block to 1 week')   | 4%     | 10 Actions     | ADD_GAUGE_SYSTEM; REMOVE_GAUGE_SYSTEM; SET_DAO; SET_DAO_SHARE; SET_TAIL_EMISSION; |
| 4     | ![0.75%](# '0.75 - 7.5%') | ![3 weeks](# '2 weeks to 4 weeks') | ![1 block](# '1 block to 1 week')  | 8%     | 10 Actions     | TRANSFER_TOKEN_HERMES_TREASURY; APPROVE_TOKEN_HERMES_TREASURY; ADD_ECOSYSTEM_TOKEN; SWEEP_ROOT; ADD_NEW_CHAIN; TOGGLE_BRIDGE_AGENT_FACTORY_ROOT; SWEEP_BRANCH; TOGGLE_BRIDGE_AGENT_FACTORY_BRANCH; TOGGLE_STRATEGY_TOKEN; UPDATE_STRATEGY_TOKEN; TOGGLE_PORT_STRATEGY; UPDATE_PORT_STRATEGY; |
| 5     | ![1%](# '1 - 10%') | ![5 weeks](# '2 weeks to 6 weeks') | ![1 block](# '1 block to 1 week')  | 16%    | 10 Actions     | CHANGE_BRIBES_FLYWHEEL_BOOSTER; CHANGE_UTILITY_ADMIN; |

---

## **A. Definitions**

### **Level**
Indicates the severity of the proposal within the governance structure. **Level 1** represents the least severe proposals, while **Level 5** includes the most severe proposals.

### **Threshold**
This represents the range of voting power required to participate in the decision-making process for a proposal. The **minimum threshold** is the lowest percentage of total GovToken (aka bHERMES-Governance) votes needed to consider a proposal, and the **maximum threshold** is the highest percentage allowed.

### **Voting Period**
The time frame during which votes can be cast for a proposal. This period varies depending on the severity level, ranging from as short as **24 hours** to as long as **6 weeks**.

### **Voting Delay**
The time interval between the proposal's submission and the start of the voting period. This delay allows members to review and consider the proposal before voting begins.

### **Quorum**
The minimum percentage of total GovToken votes required for the voting results to be considered valid. This ensures that a significant portion of the community participates in the decision-making process.

### **Max Operations**
The maximum number of actions or changes that can be executed under a single proposal. This limit helps maintain focus and prevents over-complication of proposals.

### **Actions**
Specific changes or operations that can be proposed and voted on at each severity level. These actions range from adding or removing gauges at **Level 1** to more impactful decisions like core contract updates at **Level 5**.

## **B. Next Steps in Understanding Governance**

This page gives a general overview of the fundamental aspects of governance within the Hermes Protocol. This includes the objective, requirements, and a brief overview of the severity levels. 

In the following sections, you will find a detailed analysis of each severity level, including the specific actions allowed, the processes to follow, and the implications of these actions.

### 1. [**Severity Levels & Implications**][severity]

### 2. [**Governance Process**][process]

### 3. **Actions**
- [Treasury Management][action-treasury]
- [Gauge Management][action-gauge]

[severity]: ../governance/02-severity.md
[process]: ../governance/process/01-governance-process.md
[action-treasury]: ../governance/actions/treasury/01-overview.md
[action-gauge]: ../governance/actions/gauges/01-overview.md