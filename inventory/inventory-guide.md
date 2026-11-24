# Resource Inventory Guide

Use `resource-inventory.csv` to record actual resources you deploy or inspect.

## Suggested fields
- Resource name and type.
- Subscription and resource group.
- Region and environment.
- Owner and purpose.
- Access and network exposure.
- Monitoring status.
- Lifecycle status and review date.

## Guidance
- Keep the inventory current.
- Use `Planned` for proposed resources that do not exist.
- Use `Deployed` only after verifying the resource in Azure.
- Do not record passwords, keys, connection strings, tokens or other secrets.
- Avoid publishing sensitive internal IPs, hostnames or environment details from a real organisation.
