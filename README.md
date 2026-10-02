<p align="center"><img src="./assets/hero.svg" width="100%" alt="Delivery Planner"/></p>

> **A provider-neutral planning and governance workspace for PM / Delivery / PMO decisions.**  
> It combines execution facts with planner-owned capacity, scenarios, baselines, governance and value data without collapsing them into one fake “status”.

<table>
<tr>
<td align="center"><b>Next.js</b><br/><sub>product shell</sub></td>
<td align="center"><b>Node 24</b><br/><sub>runtime</sub></td>
<td align="center"><b>PostgreSQL</b><br/><sub>planning state</sub></td>
<td align="center"><b>Jira Cloud</b><br/><sub>implemented external adapter</sub></td>
<td align="center"><b>Planner Native</b><br/><sub>internal execution mode</sub></td>
<td align="center"><b>Unknown ≠ zero</b><br/><sub>first-class state</sub></td>
</tr>
</table>

## Product workspace

<p align="center"><img src="./assets/actual-surfaces.svg" width="100%" alt="Delivery Planner workspace"/></p>

<table>
<tr>
<td width="33%" valign="top"><b>Portfolio / PMO</b><br/><sub>See project health, risks, overdue/unassigned/unestimated work, capacity conflicts and trends across projects.</sub></td>
<td width="33%" valign="top"><b>Project / Delivery</b><br/><sub>Plan work, demand, allocations, milestones, risks, actions, changes, requirements, decisions and release readiness.</sub></td>
<td width="33%" valign="top"><b>People / Resources</b><br/><sub>Model calendars, absences, partial allocation, generic resources, shared-service contention and coverage gaps.</sub></td>
</tr>
</table>

## The planning model

<p align="center"><img src="./assets/readme-semantics.svg" width="100%" alt="Delivery Planner terms"/></p>

> **The important part is not the dashboard. It is the semantics.**  
> The system preserves the difference between what is estimated, needed, assigned, forecast and formally approved.

## Provider vs Planner

<p align="center"><img src="./assets/readme-ownership.svg" width="100%" alt="Provider and planner ownership"/></p>

<table>
<tr>
<td width="50%" valign="top"><b>Provider-neutral does not mean every provider is implemented.</b><br/><sub>Jira Cloud is the implemented external adapter. Other names in the provider registry can exist as catalogue/future capabilities and must never appear as fake “Connected”.</sub></td>
<td width="50%" valign="top"><b>Planner Native is not another external connector.</b><br/><sub>It is the internal execution mode for organisations that want Planner-owned projects/work items without Jira or another external provider.</sub></td>
</tr>
</table>

## Decision path

<p align="center"><img src="./assets/flow-visual.svg" width="100%" alt="Decision path"/></p>

<table>
<tr>
<td width="33%" valign="top"><b>Append-only facts</b><br/><sub>Estimate revisions, approvals and invalidations preserve previous history instead of overwriting it.</sub></td>
<td width="33%" valign="top"><b>Provenance</b><br/><sub>Derived schedules, forecasts and attention signals retain their inputs, policy/algorithm, warnings and as-of basis.</sub></td>
<td width="33%" valign="top"><b>Explicit uncertainty</b><br/><sub>Missing estimate, assignee, capability or evidence remains visible instead of silently becoming 0 / false / green.</sub></td>
</tr>
</table>

## Architecture

<p align="center"><img src="./assets/architecture-visual.svg" width="100%" alt="Delivery Planner architecture"/></p>

<table>
<tr>
<td width="33%" valign="top"><b>Web application</b><br/><sub>Next.js shell and REST/OpenAPI boundary.</sub></td>
<td width="33%" valign="top"><b>Domain / application layer</b><br/><sub>Planning rules, policies, deterministic scheduling and explicit ownership boundaries.</sub></td>
<td width="33%" valign="top"><b>Worker / persistence</b><br/><sub>PostgreSQL/Drizzle persistence plus provider sync and background work.</sub></td>
</tr>
</table>

## Engineering signature

<p align="center"><img src="./assets/engineering-signature.svg" width="100%" alt="Engineering signature"/></p>

<details>
<summary><b>Current maturity / non-goals</b></summary>

- The repository is pre-production; identity, Jira provisioning, secrets, network, monitoring and deployment still need target-environment setup.
- No claim of automatic staffing/matching, employee scoring, attrition prediction, payroll/HR, external notification delivery or Jira write-back.
- Finance and protected stakeholder data remain permission-gated.

</details>