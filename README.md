<p align="center"><img src="./assets/hero.svg" width="100%" alt="Delivery Planner"/></p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white"/>
  <img src="https://img.shields.io/badge/Drizzle-C5F74F?style=flat-square&logo=drizzle&logoColor=000"/>
  <img src="https://img.shields.io/badge/OpenAPI-6BA539?style=flat-square&logo=openapiinitiative&logoColor=white"/>
  <img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white"/>
</p>

# Delivery Planner

A planning and governance product I built to answer the questions execution trackers usually blur together: **what is estimated, what is staffed, what is forecast, what is approved, and why**.

> The full source stays private. This repo is the public engineering surface: architecture, domain model, trade-offs and sanitised examples.

<p align="center">
  <img src="./assets/overview.svg" width="100%" alt="System overview"/>
</p>

## <code>01 / what_i_built</code>

<table>
<tr>
<td width="33%" valign="top">

### Planning engine

Resource demand, capacity, scenarios, baselines and forecast inputs are separate domain concepts.

</td>
<td width="33%" valign="top">

### Provider boundary

Execution tools plug in through explicit capabilities instead of leaking provider-specific assumptions everywhere.

</td>
<td width="33%" valign="top">

### Governance layer

Risks, issues, changes, decisions, milestones and release readiness live next to the plan, not in a disconnected spreadsheet.

</td>
</tr>
</table>

## <code>02 / system_map</code>

~~~mermaid
flowchart LR
    UI[Next.js product shell]
    API[Versioned REST API]
    DOMAIN[Planning / governance domain]
    PG[(PostgreSQL)]
    WORKER[Background worker]
    REG[Provider registry]
    JIRA[Jira adapter]
    FUTURE[Future providers]

    UI --> API
    API --> DOMAIN
    DOMAIN --> PG
    WORKER --> PG
    DOMAIN --> REG
    WORKER --> REG
    REG --> JIRA
    REG --> FUTURE
~~~

## <code>03 / the_hard_parts</code>

| Problem | Design choice |
|---|---|
| Forecasts turning into accidental commitments | Forecast and approved baseline are different objects |
| “We need 2 backend devs” becoming “John is allocated” | Demand, allocation and coverage stay separate |
| Missing data becoming green dashboards | Unknown remains a first-class state |
| Provider limitations hidden by the UI | Capability registry reports available / partial / unavailable |
| Derived dates nobody can explain | Forecasts retain inputs, as-of basis, policy and warnings |
| Multi-tenant admin shortcuts | Server-side permissions + audit + tenancy-aware access |

## <code>04 / product_surface</code>

- Portfolio / project shell
- planning and scenario revisions
- resource demand and allocation coverage
- approved baselines
- risks / issues / change requests
- requirements / decisions / traceability
- release readiness and governance policies
- provider-neutral execution boundary
- audit and permission model
- integration / E2E / migration / security / release checks

## <code>05 / rule_zero</code>

> **Unknown is not zero. Forecast is not baseline. Estimate is not commitment.**

A lot of planning software becomes misleading because it simplifies those differences away. I built the model around keeping them visible.

## <code>06 / technical_proof</code>

- [Architecture deep dive](docs/ARCHITECTURE.md)
- [Simplified domain model](docs/DOMAIN_MODEL.md)
- [Sanitised provider adapter](examples/provider-adapter.ts)

<details>
<summary><b>Why the full source is private</b></summary>

The real repository contains the complete application, migrations, tests, deployment configuration and integration logic. I want the engineering to be inspectable without turning the product itself into open source.

</details>
