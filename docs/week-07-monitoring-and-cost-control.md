# Week 7 — Monitoring and Cost Control

## Goal
Understand Azure Monitor, metrics, logs, Activity Log, alerts, budgets, pricing estimates and resource cleanup.

## Key concepts
- **Azure Monitor:** Collects and analyzes monitoring data from Azure resources and applications.
- **Metrics:** Numerical measurements over time, such as CPU percentage or request counts.
- **Logs:** Records of events and diagnostic information.
- **Activity Log:** Records subscription-level control-plane operations and resource changes.
- **Alerts:** Evaluate configured conditions and trigger notifications or actions.
- **Log Analytics workspace:** A place to collect and query supported log data, commonly using KQL.
- **Cost Management:** Helps analyze and manage Azure spending.
- **Budget:** Tracks spending against a target and can trigger notifications; it is not automatically a hard spending cap.

## Metrics vs logs

| Metrics | Logs |
|---|---|
| Numerical measurements | Event and diagnostic records |
| Useful for trends and thresholds | Useful for investigation |
| Example: CPU at 90% | Example: database connection timeout |

## Cost-control habits
1. Estimate costs before deployment using the Azure Pricing Calculator.
2. Choose suitable resource sizes and regions.
3. Configure budgets and notifications.
4. Review Cost Analysis regularly.
5. Deallocate VMs when they are not needed.
6. Review disks, IPs, snapshots, databases and other resources after labs.
7. Delete unused resources only after checking dependencies and data-retention requirements.

## VM lifecycle reminder
- Shutting down inside the OS may leave the VM allocated.
- Stop (deallocate) generally stops VM compute charges, but attached disks and other resources may still incur charges.
- Deleting a VM does not necessarily remove every associated resource.

## Practice
Explore Azure Monitor, Activity Log, Cost Analysis and the Pricing Calculator. Avoid deploying resources just to complete this review.

## Outcome
Identify basic resource problems and manage cloud costs.
