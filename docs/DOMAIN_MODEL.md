# Domain model

This is a simplified public view of the domain.

```mermaid
erDiagram
    PROJECT ||--o{ ESTIMATE : has
    PROJECT ||--o{ RESOURCE_DEMAND : requires
    PROJECT ||--o{ SCENARIO : explores
    PROJECT ||--o{ BASELINE : approves
    PROJECT ||--o{ RISK : tracks
    PROJECT ||--o{ ISSUE : tracks
    PROJECT ||--o{ CHANGE_REQUEST : controls
    SCENARIO ||--o{ FORECAST : produces
    RESOURCE_DEMAND }o--o{ ALLOCATION : covered_by
```

## Semantic rules

- Estimate != commitment.
- Scenario != approved baseline.
- Forecast != baseline.
- Demand != allocation.
- Role compatibility != confirmed staffing.
- Unknown != zero / false / green.

These distinctions are deliberately encoded in the model because they protect management decisions from accidental simplification.
