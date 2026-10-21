---
title: "输入参数索引"
description: "SPONGE 2.0 输入参数索引，迁自主仓库的英文文档。"
version: "SPONGE 2.0"
section: "SPONGE 2.0 文档"
order: 4
---

> 本页由 GPT-6-Astra 整理，正文暂保留英文原文，尚未翻译。SPONGE 2.0 正处于敏捷开发中，功能、参数和文档可能随版本变动；最新版本信息请参照 GitHub 仓库中的 [docs](https://github.com/SPONGEMM/SPONGE/tree/master/docs) 和 [skills](https://github.com/SPONGEMM/SPONGE/tree/master/skills) 文档。
>
> [本页对应的源文档快照](https://github.com/SPONGEMM/SPONGE/blob/317ae56b76da8d12816e9570ff7bd77a270ac48e/docs/input-reference/README.md)。

# Input File Reference

SPONGE automatically reads `mdin.spg.toml` from the working directory. If it
is absent, the legacy `mdin.txt` input is also recognized. Use `-mdin` to
select another input file explicitly:

```bash
SPONGE -mdin mdin.spg.toml
```

## Table of Contents

- [Core Parameters](/docs/2p0/input-reference/core) — mode, steps, time step, cutoff
- [Input/Output](/docs/2p0/input-reference/io) — file specification and output control
- [Thermostat](/docs/2p0/input-reference/thermostat) — thermostat algorithms and parameters
- [Barostat](/docs/2p0/input-reference/barostat) — barostat algorithms and parameters
- [Restrain](/docs/2p0/input-reference/restrain) — atom-coordinate restrain input
- [Constraints](/docs/2p0/input-reference/constraint) — SETTLE / SHAKE
- [Neighbor List](/docs/2p0/input-reference/neighbor-list) — neighbor list configuration
- [PME Electrostatics](/docs/2p0/input-reference/pme) — Particle Mesh Ewald
- [Collective Variables](/docs/2p0/input-reference/collective-variables) — CV definitions and examples
- [Enhanced Sampling](/docs/2p0/input-reference/enhanced-sampling) — CV, MetaD, SITS
- [SinkMeta](/docs/2p0/input-reference/sinkmeta) — detailed `meta` / SinkMeta parameter reference
- [Advanced](/docs/2p0/input-reference/advanced) — device, wall constraints, ReaxFF, plugins

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

