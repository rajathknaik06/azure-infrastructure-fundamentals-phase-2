# Security Decisions

## Identity and access
- Use Microsoft Entra ID for workforce and application identity integration where appropriate.
- Assign Azure RBAC roles to groups where practical rather than managing many individual assignments.
- Apply least privilege and use the narrowest practical scope.
- Separate Azure management-plane roles from data-plane and database permissions.
- Use managed identities for supported application-to-Azure-service authentication.
- Require MFA and appropriate identity protections for administrators and users.

## Network security
- Use HTTPS for public web traffic.
- Prefer private connectivity to database and storage services where the application design and service tiers support it.
- Configure private DNS correctly when using private endpoints.
- Use NSGs on supported subnets and network interfaces; review effective rules and priorities.
- Avoid exposing administrative ports to the public internet.

## Data protection
- Restrict storage access and disable anonymous access unless there is a documented need.
- Use appropriate database authentication and permissions.
- Consider encryption, backup, retention and recovery requirements.
- Never commit passwords, access keys, connection strings, certificates or SAS tokens to GitHub.

## Monitoring and governance
- Review Activity Log and relevant diagnostic/application logs.
- Configure useful alerts and review them periodically.
- Review role assignments and unused resources.
- Protect sensitive logs and apply appropriate retention.

## Limitations
These are design recommendations for a learning project, not a completed security assessment. A production implementation requires threat modelling, service-specific configuration review, testing and organisational policy approval.
