---
title: "Neighbor List Parameters"
description: "SPONGE 2.0 documentation: Neighbor List Parameters."
version: "SPONGE 2.0"
section: "SPONGE 2.0 Docs"
order: 11
---

> Organized by GPT-6-Astra. SPONGE 2.0 is under active, iterative development; features, parameters, and documentation may change. Consult the GitHub repository’s [docs](https://github.com/SPONGEMM/SPONGE/tree/master/docs) and [skills](https://github.com/SPONGEMM/SPONGE/tree/master/skills) for the latest version information.
>
> [Source snapshot for this page](https://github.com/SPONGEMM/SPONGE/blob/317ae56b76da8d12816e9570ff7bd77a270ac48e/docs/input-reference/neighbor-list.md).

# Neighbor List Parameters

Neighbor list parameters are set via the `[neighbor_list]` TOML section:

```toml
[neighbor_list]
max_neighbor_numbers = 1200
skin_permit = 0.5
```

## Parameter List

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `refresh_interval` | int | auto | Neighbor list rebuild interval (steps) |
| `skin_permit` | float | `0.5` | Skin distance growth allowance, used to trigger rebuilds |
| `max_neighbor_numbers` | int | `1200` | Maximum neighbors per atom |
| `max_atom_in_grid_numbers` | int | `150` | Maximum atoms per grid cell |
| `max_ghost_in_grid_numbers` | int | `150` | Maximum ghost atoms per grid cell |
| `check_overflow_interval` | int | `150` | Memory overflow check interval |
| `throw_error_when_overflow` | bool | `false` | Whether to throw an error on overflow (otherwise auto-expands) |

The rebuild strategy defaults to automatic detection based on `skin` distance. `refresh_interval = 0` enables automatic mode.

