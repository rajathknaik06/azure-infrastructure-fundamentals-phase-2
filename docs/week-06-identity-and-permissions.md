# Week 6 — Identity and Permissions

## Goal
Understand Microsoft Entra ID, authentication, authorization, users, groups, Azure RBAC and managed identities.

## Key concepts
- **Microsoft Entra ID:** Microsoft's cloud identity and access management service.
- **Tenant:** A dedicated instance of Microsoft Entra ID for an organisation.
- **Authentication:** Verifies who an identity is.
- **Authorization:** Determines what an authenticated identity is allowed to do.
- **Users and groups:** Identities and collections of identities that can be managed and assigned access.
- **Azure RBAC:** Controls access to Azure resources by assigning roles to security principals at a scope.
- **Managed identity:** An Azure-managed identity that allows supported workloads to authenticate to services without storing credentials in application code.

## Common Azure roles

| Role | General capability |
|---|---|
| Owner | Manage resources and assign access |
| Contributor | Manage resources but cannot assign Azure RBAC roles |
| Reader | View resources |
| User Access Administrator | Manage access to Azure resources within its permissions |

Data access may require separate data-plane roles, such as **Storage Blob Data Reader**. The Azure Reader role does not automatically grant access to blob contents.

## RBAC scope hierarchy

```text
Management group
└── Subscription
    └── Resource group
        └── Resource
```

Assignments at higher scopes can be inherited by child scopes.

## Managed identity types
- **System-assigned:** Tied to the lifecycle of one Azure resource.
- **User-assigned:** Created independently and can be assigned to multiple supported resources.

## Security practices
- Apply least privilege.
- Use MFA and appropriate identity protections.
- Prefer managed identities for supported workload-to-service authentication.
- Review and remove unnecessary permissions.
- Never commit secrets to source control.

## Practice
Explore Entra ID users/groups and Azure resource Access control (IAM), if available. Do not change permissions in a shared subscription.

## Outcome
Understand who can access and manage Azure resources.
