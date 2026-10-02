<p align="center"><img src="./assets/hero.svg" width="100%" alt="Delivery Planner"/></p>

<table>
<tr>
<td width="50%" valign="top">

### What it is

A provider-neutral planning and governance workspace built around a strict semantic model.

> **Unknown is not zero.**

Estimate, commitment, demand, allocation, forecast and baseline are intentionally different objects.

</td>
<td width="50%" valign="top">

### What it demonstrates

- portfolio and project planning
- resource demand and allocation
- scenario planning
- approved baselines
- provider facts vs planner facts
- attention signals with provenance
- Jira Cloud / Planner Native boundaries
- deterministic planning logic

</td>
</tr>
</table>

<img src="./assets/actual-surfaces.svg" width="100%" alt="Delivery Planner surfaces"/>

<br/>

<table>
<tr>
<td width="52%" valign="top">
<img src="./assets/core-model.svg" width="100%" alt="Planning core model"/>
</td>
<td width="48%" valign="top">

### Planning semantics

The product is designed so that the UI cannot silently rewrite the meaning of the underlying data.

A provider may report execution facts. The planner still owns its own estimates, demand, allocation, scenarios and baselines.

</td>
</tr>
</table>

<br/>

<table>
<tr>
<td width="48%" valign="top">

### Product surface

Planning, delivery/control, governance, portfolio/people reporting, integrations and value tracking stay connected but semantically distinct.

</td>
<td width="52%" valign="top">
<img src="./assets/features.svg" width="100%" alt="Product surface"/>
</td>
</tr>
</table>

<img src="./assets/overview.svg" width="100%" alt="Planning semantics"/>

<br/>

<table>
<tr>
<td width="52%" valign="top">
<img src="./assets/architecture-visual.svg" width="100%" alt="Architecture"/>
</td>
<td width="48%" valign="top">

### Architecture

A modular Next.js / Node.js application with:

- pure planning rules in the domain layer
- PostgreSQL persistence
- worker/integration paths for provider sync
- explicit capability reporting
- deterministic calculations
- quality gates around changes

</td>
</tr>
</table>

<img src="./assets/flow-visual.svg" width="100%" alt="Decision path"/>

<br/>

<img src="./assets/engineering-signature.svg" width="100%" alt="Engineering signature"/>

<p align="center"><sub>Private source · public engineering showcase</sub></p>