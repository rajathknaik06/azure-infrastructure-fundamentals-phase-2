# Week 1 — Azure Cloud Basics

## Goal
Understand cloud computing, Azure, regions, availability zones, subscriptions, resource groups and resources.

## Key concepts
- **Cloud computing:** On-demand access to computing services over a network, commonly with usage-based pricing.
- **Microsoft Azure:** Microsoft's cloud platform for compute, storage, networking, databases, identity and other services.
- **Region:** A geographic area containing Azure datacenters.
- **Availability zone:** A physically separate location within a supported region, designed to improve resilience.
- **Subscription:** A management and billing boundary for Azure resources.
- **Resource group:** A logical container for related Azure resources.
- **Resource:** An individual Azure service instance, such as a VM, storage account or database.

## Resource hierarchy

```text
Microsoft Entra tenant (identity boundary)
└── Management group (optional)
    └── Subscription
        └── Resource group
            ├── Virtual machine
            ├── Storage account
            └── Virtual network
```

A tenant is an identity boundary; it is not the same as an Azure subscription.

## Practice
1. Explore the Azure portal.
2. Find the subscriptions and resource groups available to your account.
3. Open a resource and identify its type, region and resource group.

## Interview practice
**What is a resource group?** A logical container for Azure resources that can be managed together.
**What is a subscription?** A boundary used for billing and management of Azure resources.

## Outcome
Explain how Azure resources are organised.
