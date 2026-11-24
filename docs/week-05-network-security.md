# Week 5 — Network Security

## Goal
Understand Network Security Groups (NSGs), inbound and outbound rules, ports and least privilege.

## Key concepts
- **NSG:** Contains security rules that allow or deny network traffic for supported Azure network interfaces and subnets.
- **Inbound rule:** Controls traffic entering the protected resource or subnet.
- **Outbound rule:** Controls traffic leaving it.
- **Port:** Identifies a network service endpoint, such as HTTPS on TCP 443 or SSH on TCP 22.
- **Priority:** Determines rule evaluation order; lower numerical values have higher priority.
- **Least privilege:** Permit only the traffic required for the workload.

## Illustrative administrative VM rules

| Direction | Protocol/port | Source | Action |
|---|---|---|---|
| Inbound | TCP 22 | Approved administrator IP range | Allow |
| Inbound | TCP 3389 | Approved administrator IP range, only if needed | Allow |
| Inbound | Other unnecessary ports | Any | Deny, subject to rule priority |

Do not blindly apply these rules to every workload. App Service and other managed services have different networking controls.

## Practice
Review an NSG's effective rules and explain which traffic is allowed or denied. Avoid changing shared or production rules.

## Interview practice
**What is an NSG?** A set of rules that filters network traffic to and from supported Azure network interfaces and subnets.

## Outcome
Explain how to restrict server network access.
