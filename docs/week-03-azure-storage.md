# Week 3 — Azure Storage

## Goal
Understand storage accounts, Blob Storage, containers, access tiers, redundancy and access control.

## Key concepts
- **Storage account:** Top-level Azure resource that provides access to supported storage services.
- **Blob Storage:** Object storage for unstructured data such as images, documents, backups and media.
- **Container:** Logical grouping of blobs.
- **Access tiers:** Options such as Hot, Cool, Cold and Archive, with different cost and access characteristics. Availability and minimum retention rules depend on the tier and configuration.
- **Redundancy:** Options such as LRS, ZRS, GRS and GZRS provide different durability and geographic replication characteristics.
- **Access control:** Entra ID, Azure RBAC, network restrictions and (where appropriate) time-limited shared access signatures help control access.

## Example structure

```text
Storage account: placementfiles
└── Container: student-documents
    ├── resume-001.pdf
    ├── resume-002.pdf
    └── certificates/
```

## Security reminders
- Avoid anonymous public access unless there is a deliberate requirement.
- Prefer Microsoft Entra ID and least-privilege data roles where supported.
- Do not commit storage keys, connection strings or SAS tokens to GitHub.
- Choose redundancy and access tiers based on recovery and access requirements.

## Practice
Explore storage account settings, containers, access tiers and redundancy options in the portal without uploading sensitive documents.

## Interview practice
**What is Blob Storage?** Azure object storage designed for large amounts of unstructured data.

## Outcome
Understand how to store files securely in Azure.
