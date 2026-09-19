<p align="center"><img src="./assets/hero.svg" width="100%" alt="Delivery Planner"/></p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white"/>
  <img src="https://img.shields.io/badge/Drizzle-C5F74F?style=flat-square&logo=drizzle&logoColor=000"/>
  <img src="https://img.shields.io/badge/OpenAPI-6BA539?style=flat-square&logo=openapiinitiative&logoColor=white"/>
</p>

# Delivery Planner

A planning and governance product I built around one rule: **do not collapse different management facts into one convenient status**.

Estimate is not commitment. Demand is not allocation. Forecast is not baseline.

<p align="center"><img src="./assets/product-mockup.svg" width="100%" alt="Delivery Planner product mockup"/></p>

<p align="center"><sub>Illustrative records; screen hierarchy, labels and visual system are reconstructed from the private source.</sub></p>

## <code>01 / actual_surfaces</code>

<p align="center"><img src="./assets/actual-surfaces.svg" width="100%" alt="Actual product surfaces"/></p>

## <code>02 / product_surface</code>

<p align="center"><img src="./assets/features.svg" width="100%" alt="Delivery Planner features"/></p>

## <code>03 / core_model</code>

<p align="center"><img src="./assets/core-model.svg" width="100%" alt="Core planning model"/></p>

## <code>04 / system</code>

<p align="center"><img src="./assets/architecture-visual.svg" width="100%" alt="Delivery Planner architecture"/></p>

<p align="center"><img src="./assets/overview.svg" width="100%" alt="Delivery Planner system overview"/></p>

## <code>05 / decision_path</code>

<p align="center"><img src="./assets/flow-visual.svg" width="100%" alt="Delivery Planner decision flow"/></p>

## <code>06 / hard_parts</code>

| Problem | Design choice |
|---|---|
| forecasts become accidental commitments | forecast and approved baseline are different objects |
| staffing assumptions become facts | demand, allocation and coverage stay separate |
| missing data becomes green | unknown remains a first-class state |
| provider limitations disappear in UI | explicit capability registry |
| dates become impossible to explain | derived results retain inputs and basis |

> **Rule zero:** unknown is not zero.

## <code>07 / engineering_signature</code>

<p align="center">
  <img src="./assets/engineering-signature.svg" width="100%" alt="Engineering signature"/>
</p>

## <code>08 / inspect</code>

- [Architecture deep dive](docs/ARCHITECTURE.md)
- [Simplified domain model](docs/DOMAIN_MODEL.md)
- [Sanitised provider adapter](examples/provider-adapter.ts)

<details><summary><b>Why the full source is private</b></summary>

The private repository contains the complete application, migrations, tests, deployment configuration and integration logic. This showcase exposes the engineering without turning the product itself into open source.

</details>
