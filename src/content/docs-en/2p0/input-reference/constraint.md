---
title: "Constraint Algorithm Parameters"
description: "SPONGE 2.0 documentation: Constraint Algorithm Parameters."
version: "SPONGE 2.0"
section: "SPONGE 2.0 Docs"
order: 10
---

> Organized by GPT-6-Astra. SPONGE 2.0 is under active, iterative development; features, parameters, and documentation may change. Consult the GitHub repository’s [docs](https://github.com/SPONGEMM/SPONGE/tree/master/docs) and [skills](https://github.com/SPONGEMM/SPONGE/tree/master/skills) for the latest version information.
>
> [Source snapshot for this page](https://github.com/SPONGEMM/SPONGE/blob/317ae56b76da8d12816e9570ff7bd77a270ac48e/docs/input-reference/constraint.md).

# Constraint Algorithm Parameters

## Constraint Mode

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `constrain_mode` | string | none (constraints disabled) | Constraint algorithm |

`constrain_mode` options:

| Value | Description |
|-------|-------------|
| `"SETTLE"` | SETTLE algorithm, specialized for rigid water molecules (triangle constraints) |
| `"SHAKE"` | SHAKE algorithm, general bond length constraints |

The base constraint list is configured through the `[constrain]` prefix:

```toml
constrain_mode = "SHAKE"

[constrain]
mass = 3.3
```

## SETTLE Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `settle_disable` | bool | `false` | Top-level flag that disables SETTLE entirely |

## SHAKE Parameters

| Parameter | Scope | Type | Default | Description |
|-----------|-------|------|---------|-------------|
| `iteration_numbers` | `SHAKE` | int | `25` | Maximum SHAKE iteration count |
| `step_length` | `SHAKE` | float | `1.0` | SHAKE step length / damping factor |

## `[constrain]` Parameters

| Parameter | Scope | Type | Default | Description |
|-----------|-------|------|---------|-------------|
| `in_file` | `constrain` | string | - | Extra bond-constraint list file |
| `mass` | `constrain` | float | `3.3`, or `0.0` when `in_file` is set | Auto-constrain bonds involving atoms lighter than this threshold |
| `angle` | `constrain` | bool | `false` | Reserved, currently not implemented |

