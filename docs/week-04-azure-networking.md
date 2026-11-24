# Week 4 — Azure Networking

## Goal
Understand Virtual Networks, subnets, CIDR, private and public IP addresses, DNS and routing.

## Key concepts
- **Virtual Network (VNet):** A logically isolated network in Azure.
- **Subnet:** A range of IP addresses within a VNet used to organise workloads.
- **CIDR:** Notation used to describe IP address ranges, for example `10.10.0.0/16`.
- **Private IP:** Address used for communication within private networks and connected networks.
- **Public IP:** Address that can provide internet-reachable connectivity when configured and permitted.
- **DNS:** Resolves names to IP addresses.
- **Route:** Determines where network traffic is directed.

## Example network plan (illustrative only)

```text
VNet: 10.10.0.0/16
├── app-subnet:      10.10.1.0/24
├── private-endpoints: 10.10.2.0/24
└── admin-subnet:    10.10.3.0/24
```

Ensure subnet ranges do not overlap with each other or connected networks.

## Practice
Draw a VNet with two or three subnets. Label the address ranges and explain which workloads belong in each subnet.

## Interview practice
**What is a subnet?** A smaller IP address range within a VNet used to segment and organise network resources.

## Outcome
Design a basic Azure network on paper.
