# Operations, Monitoring and Cost Control

## Monitoring plan

| Signal | Example investigation |
|---|---|
| App availability | Check App Service status and availability tests |
| Request/response performance | Investigate slow requests and dependencies |
| Application exceptions | Review application logs |
| Database performance | Review query performance and connection errors |
| Storage access failures | Check identity permissions, networking and logs |
| Azure resource changes | Review Activity Log |

## Alert examples
- Application availability failure.
- Sustained high CPU or other relevant resource metric.
- Elevated application error rate.
- Database performance threshold.
- Cost budget threshold notification.

Set thresholds and evaluation windows based on workload behaviour. Avoid noisy alerts.

## Cost-management plan
1. Estimate costs using the Azure Pricing Calculator.
2. Select appropriate service tiers and resource sizes.
3. Configure a budget and notification thresholds.
4. Review Cost Analysis by service and resource.
5. Review monitoring ingestion and retention costs.
6. Deallocate temporary compute resources.
7. Remove unused resources only after dependency and retention checks.

A budget is a tracking and notification mechanism, not a guaranteed spending cap. Actual costs depend on region, usage, service tier, discounts, taxes and billing terms.

## Cleanup checklist
- [ ] Identify the owner and purpose of each resource.
- [ ] Confirm the resource is no longer required.
- [ ] Check application dependencies.
- [ ] Confirm backups and data-retention requirements.
- [ ] Review disks, snapshots, public IPs and other related resources.
- [ ] Delete only approved resources.
- [ ] Verify remaining resources and costs afterward.

## Operational review cadence
For a learning environment, review resources after each lab. For a real environment, establish a schedule based on operational and governance requirements.
