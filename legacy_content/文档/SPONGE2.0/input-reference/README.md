# Input File Reference

SPONGE input files use TOML format. The default filename is `mdin.spg.toml`, specified via the `-mdin` flag:

```bash
SPONGE -mdin mdin.spg.toml
```

## Table of Contents

- [Core Parameters](/文档/SPONGE2.0/input-reference/core/) — mode, steps, time step, cutoff
- [Input/Output](/文档/SPONGE2.0/input-reference/io/) — file specification and output control
- [Thermostat](/文档/SPONGE2.0/input-reference/thermostat/) — thermostat algorithms and parameters
- [Barostat](/文档/SPONGE2.0/input-reference/barostat/) — barostat algorithms and parameters
- [Restrain](/文档/SPONGE2.0/input-reference/restrain/) — atom-coordinate restrain input
- [Constraints](/文档/SPONGE2.0/input-reference/constraint/) — SETTLE / SHAKE
- [Neighbor List](/文档/SPONGE2.0/input-reference/neighbor-list/) — neighbor list configuration
- [PME Electrostatics](/文档/SPONGE2.0/input-reference/pme/) — Particle Mesh Ewald
- [Collective Variables](/文档/SPONGE2.0/input-reference/collective-variables/) — CV definitions and examples
- [Enhanced Sampling](/文档/SPONGE2.0/input-reference/enhanced-sampling/) — CV, MetaD, SITS
- [SinkMeta](/文档/SPONGE2.0/input-reference/sinkmeta/) — detailed `meta` / SinkMeta parameter reference
- [Advanced](/文档/SPONGE2.0/input-reference/advanced/) — device, wall constraints, ReaxFF, plugins

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
