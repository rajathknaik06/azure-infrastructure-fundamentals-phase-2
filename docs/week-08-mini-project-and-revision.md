# Week 8 — Mini-Project and Revision

## Goal
Bring Weeks 1–7 together in a documented Azure infrastructure design.

## Project
Design an Azure architecture for a Student Placement Portal. The portal allows students to view placement opportunities, placement officers to manage records, and users to upload documents.

## Proposed services
- Azure App Service — host the web application and API.
- Azure SQL Database — store structured student, company and placement records.
- Azure Blob Storage — store uploaded documents.
- Microsoft Entra ID — manage identities.
- Azure RBAC — manage Azure resource permissions.
- Managed identity — allow the application to authenticate to supported services without embedded credentials.
- VNet integration/private endpoints — provide private connectivity where required and supported.
- NSGs — filter traffic on supported subnets and network interfaces.
- Azure Monitor and Log Analytics — monitor and investigate.
- Cost Management — analyze spending and configure budgets.

## Project deliverables
1. Architecture diagram and traffic-flow explanation.
2. Resource group and naming plan.
3. Network and IP addressing plan.
4. Security decisions and RBAC assignments.
5. Monitoring and troubleshooting plan.
6. Cost estimate and cleanup plan.
7. Resource inventory.

## Important design notes
- App Service does not automatically reside inside a VNet. VNet integration and private endpoints are distinct configurations.
- NSGs do not automatically control all managed-service traffic.
- Database permissions are distinct from Azure management-plane RBAC.
- A budget sends configured notifications; it does not inherently stop spending.
- This is a conceptual learning design, not a production deployment.

## Outcome
Complete an Azure Infrastructure Fundamentals project and explain its design decisions.
