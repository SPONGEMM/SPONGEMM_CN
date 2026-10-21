---
title: "Input File Reference"
description: "SPONGE 2.0 documentation: Input File Reference."
version: "SPONGE 2.0"
section: "SPONGE 2.0 Docs"
order: 4
---

> Organized by GPT-6-Astra. SPONGE 2.0 is under active, iterative development; features, parameters, and documentation may change. Consult the GitHub repository’s [docs](https://github.com/SPONGEMM/SPONGE/tree/master/docs) and [skills](https://github.com/SPONGEMM/SPONGE/tree/master/skills) for the latest version information.
>
> [Source snapshot for this page](https://github.com/SPONGEMM/SPONGE/blob/317ae56b76da8d12816e9570ff7bd77a270ac48e/docs/input-reference/README.md).

# Input File Reference

SPONGE automatically reads `mdin.spg.toml` from the working directory. If it
is absent, the legacy `mdin.txt` input is also recognized. Use `-mdin` to
select another input file explicitly:

```bash
SPONGE -mdin mdin.spg.toml
```

## Table of Contents

- [Core Parameters](/en/docs/2p0/input-reference/core) — mode, steps, time step, cutoff
- [Input/Output](/en/docs/2p0/input-reference/io) — file specification and output control
- [Thermostat](/en/docs/2p0/input-reference/thermostat) — thermostat algorithms and parameters
- [Barostat](/en/docs/2p0/input-reference/barostat) — barostat algorithms and parameters
- [Restrain](/en/docs/2p0/input-reference/restrain) — atom-coordinate restrain input
- [Constraints](/en/docs/2p0/input-reference/constraint) — SETTLE / SHAKE
- [Neighbor List](/en/docs/2p0/input-reference/neighbor-list) — neighbor list configuration
- [PME Electrostatics](/en/docs/2p0/input-reference/pme) — Particle Mesh Ewald
- [Collective Variables](/en/docs/2p0/input-reference/collective-variables) — CV definitions and examples
- [Enhanced Sampling](/en/docs/2p0/input-reference/enhanced-sampling) — CV, MetaD, SITS
- [SinkMeta](/en/docs/2p0/input-reference/sinkmeta) — detailed `meta` / SinkMeta parameter reference
- [Advanced](/en/docs/2p0/input-reference/advanced) — device, wall constraints, ReaxFF, plugins

## Quick Examples

### NVT

```toml
md_name = "NVT water"
mode = "nvt"
step_limit = 50000
dt = 0.002
cutoff = 8.0
default_in_file_prefix = "WAT"
constrain_mode = "SHAKE"
target_temperature = 300.0
write_information_interval = 1000

[thermostat]
mode = "middle_langevin"
tau = 0.1
seed = 2026
```

### NPT

```toml
md_name = "NPT water"
mode = "npt"
step_limit = 100000
dt = 0.002
cutoff = 8.0
default_in_file_prefix = "WAT"
constrain_mode = "SHAKE"
target_temperature = 300.0
target_pressure = 1.0
write_information_interval = 1000

[thermostat]
mode = "middle_langevin"
tau = 0.1
seed = 2026

[barostat]
mode = "andersen_barostat"
tau = 0.1
update_interval = 10
```

### Energy Minimization

```toml
md_name = "minimization"
mode = "minimization"
step_limit = 1000
default_in_file_prefix = "system"
cutoff = 8.0
write_information_interval = 100
```

