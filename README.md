<p align="center"><img src="./assets/hero.svg" width="100%" alt="Delivery Planner"/></p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-planning_workspace-111827?style=flat-square&logo=nextdotjs"/>
  <img src="https://img.shields.io/badge/Node.js-24-339933?style=flat-square&logo=nodedotjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white"/>
  <img src="https://img.shields.io/badge/Drizzle-111827?style=flat-square"/>
  <img src="https://img.shields.io/badge/OpenAPI-6BA539?style=flat-square&logo=openapiinitiative&logoColor=white"/>
</p>

# Delivery Planner

A provider-neutral planning and governance workspace built around a deliberately strict model: **different planning facts stay different facts**.

The private implementation separates planning intent, resource demand, allocation, provider execution, scenarios, forecasts and approved baselines instead of reducing everything to a convenient status field.

> **Rule zero: unknown is not zero.**  
> Estimate is not commitment. Demand is not allocation. Forecast is not baseline.

## <code>01 / actual_surfaces</code>

<p align="center"><img src="./assets/actual-surfaces.svg" width="100%" alt="Delivery Planner actual product surfaces"/></p>

The workspace is organised around **Home, Attention, Portfolio, Projects, People, Reports, Integrations and Administration**. Project work then drills into planning, delivery/control, governance and value/learning without changing the meaning of the underlying facts.

## <code>02 / core_model</code>

<p align="center"><img src="./assets/core-model.svg" width="100%" alt="Delivery Planner core model"/></p>

The planner owns its planning semantics. Provider systems contribute execution facts, but they do not silently become the source of truth for estimates, demand, allocations or baselines.

## <code>03 / planning_semantics</code>

<p align="center"><img src="./assets/overview.svg" width="100%" alt="Delivery Planner planning semantics"/></p>

That separation is the point of the product: it makes disagreement, uncertainty and change visible instead of hiding them behind a single health colour.

## <code>04 / product_surface</code>

<p align="center"><img src="./assets/features.svg" width="100%" alt="Delivery Planner product surface"/></p>

The system covers planning, delivery control, governance, portfolio/people reporting, integrations and value tracking. Attention signals are derived from facts and retain their basis so they can be explained.

## <code>05 / system</code>

<p align="center"><img src="./assets/architecture-visual.svg" width="100%" alt="Delivery Planner system architecture"/></p>

A modular Next.js / Node.js application keeps pure planning rules in the domain layer, PostgreSQL persistence behind explicit boundaries, and external-provider sync in worker/integration paths.

## <code>06 / decision_path</code>

<p align="center"><img src="./assets/flow-visual.svg" width="100%" alt="Delivery Planner decision path"/></p>

Source data is normalised into explicit planning concepts, evaluated by deterministic planning logic and only then exposed as scenarios, baselines, attention items and reports.

## <code>07 / engineering_signature</code>

<p align="center"><img src="./assets/engineering-signature.svg" width="100%" alt="Delivery Planner engineering signature"/></p>

## <code>08 / inspect</code>

- [Architecture deep dive](docs/ARCHITECTURE.md)
- [Simplified domain model](docs/DOMAIN_MODEL.md)

<details>
<summary><b>Public / private boundary</b></summary>

The implementation is private. This repository is a sanitised engineering showcase: no production credentials, customer data, provider secrets or commercial operating data are published.

</details>