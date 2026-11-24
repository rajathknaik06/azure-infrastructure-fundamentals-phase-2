# Week 2 — Azure Virtual Machines

## Goal
Understand VMs, operating systems, CPU, RAM, disks, SSH and the difference between stopping and deallocating a VM.

## Key concepts
- **Virtual machine (VM):** A software-based computer running on Azure infrastructure.
- **Operating system:** The system software running inside the VM, such as Linux or Windows.
- **CPU:** Executes instructions and processes workloads.
- **RAM:** Temporary working memory used by running processes.
- **Disk:** Persistent storage for the operating system, applications and data.
- **SSH:** Secure remote command-line access commonly used with Linux VMs.
- **RDP:** Remote desktop access commonly used with Windows VMs.

## VM components

```text
Azure Virtual Machine
├── VM size (vCPU and memory)
├── Operating system
├── OS disk
├── Data disks (optional)
└── Network interface
```

## Stop vs deallocate
- Shutting down from inside the guest operating system does not necessarily release the Azure compute allocation.
- **Stop (deallocate)** releases compute capacity; VM compute charges generally stop, while disks and other associated resources may still cost money.
- Deleting a VM does not necessarily delete every attached or associated resource.

## Practice
Explore VM sizes, disks, networking and status in the Azure portal. Do not deploy a VM unless you understand the pricing and cleanup steps.

## Interview practice
**What is the difference between RAM and disk?** RAM is temporary working memory; disk provides persistent storage.

## Outcome
Explain how a cloud server works and identify its main components.
