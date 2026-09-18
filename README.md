<p align="center">
  <img width="100%" src="https://capsule-render.vercel.app/api?type=waving&height=190&color=0:0D1117,50:1F6FEB,100:8250DF&text=Delivery%20Planner&fontSize=42&fontColor=FFFFFF&fontAlignY=38&desc=Planning%20%E2%80%A2%20Governance%20%E2%80%A2%20Forecasting&descSize=16&descAlignY=60" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" />
  <img src="https://img.shields.io/badge/Drizzle-C5F74F?style=for-the-badge&logo=drizzle&logoColor=000" />
  <img src="https://img.shields.io/badge/OpenAPI-6BA539?style=for-the-badge&logo=openapiinitiative&logoColor=white" />
</p>

# Delivery Planner — public engineering showcase

A provider-neutral workspace for **planning, delivery governance, resource capacity, forecasting and portfolio visibility**.

The production repository is private. This public repository documents the architecture, engineering decisions and selected sanitised examples without publishing proprietary implementation.

## Why this project exists

Execution systems are good at recording work. They are usually weaker at answering:

- What is actually committed?
- What is only a forecast?
- Which demand is covered by real capacity?
- Which dependencies can move the date?
- What changed since the approved baseline?
- Which decisions can be traced back to their inputs?

Delivery Planner separates those concepts instead of collapsing them into a single "status".

## Architecture

```mermaid
flowchart LR
    U[Web client] --> A[Versioned REST API]
    A --> D[(PostgreSQL)]
    A --> P[Planning & governance domain]
    A --> R[Provider registry]
    W[Background worker] --> D
    W --> R
    R --> J[Jira adapter]
    R --> X[Other provider boundaries]
    P --> F[Forecasts / scenarios / baselines]
```

### Core design

- **Modular monolith**: Next.js application + Node background worker.
- **PostgreSQL + Drizzle** for persistent domain state.
- **Versioned REST/OpenAPI** contract.
- **Provider adapter boundary** so execution systems do not own planning semantics.
- Explicit separation of **estimate, demand, allocation, scenario, forecast and baseline**.
- Append-only revisions for decision-relevant facts.
- Tenant-aware permissions, audit events and integration-token handling.
- Integration, E2E, schema, security and release checks in CI.

## Engineering highlights

| Area | Approach |
|---|---|
| Planning | Deterministic resource-constrained scenarios |
| Capacity | Explicit demand, allocation and partial coverage |
| Governance | Risks, issues, changes, decisions, escalations |
| Forecasting | Reproducible inputs + as-of basis + warnings |
| Integrations | Provider capability registry + adapter boundary |
| Security | Server-side permissions, tenancy checks, auditability |
| Delivery | Baselines are approved facts; forecasts remain forecasts |

## A principle I care about

> **Unknown is a state, not zero.**

Missing capacity, missing provider capability or missing forecast evidence should stay visible instead of silently turning into a green dashboard.

## Repository map

- [Architecture](docs/ARCHITECTURE.md)
- [Domain model](docs/DOMAIN_MODEL.md)
- [Sanitised provider adapter example](examples/provider-adapter.ts)

## Source availability

This is a **showcase repository**, not the full product source. The private codebase contains the complete application, migrations, tests, deployment configuration and integration logic.
