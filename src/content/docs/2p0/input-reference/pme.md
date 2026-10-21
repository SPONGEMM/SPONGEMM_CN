---
title: "PME 静电"
description: "SPONGE 2.0 PME 静电，迁自主仓库的英文文档。"
version: "SPONGE 2.0"
section: "SPONGE 2.0 文档"
order: 12
---

> 本页由 GPT-6-Astra 整理，正文暂保留英文原文，尚未翻译。SPONGE 2.0 正处于敏捷开发中，功能、参数和文档可能随版本变动；最新版本信息请参照 GitHub 仓库中的 [docs](https://github.com/SPONGEMM/SPONGE/tree/master/docs) 和 [skills](https://github.com/SPONGEMM/SPONGE/tree/master/skills) 文档。
>
> [本页对应的源文档快照](https://github.com/SPONGEMM/SPONGE/blob/317ae56b76da8d12816e9570ff7bd77a270ac48e/docs/input-reference/pme.md)。

# PME Electrostatics Parameters

PME is initialized through the `PM` module in the current source tree, so new
TOML examples should prefer the `[PM]` scope:

```toml
[PM]
grid_spacing = 1.0
Direct_Tolerance = 1e-5
MPI_size = 1
print_detail = false
```

Some PME control keys are still read from the compatibility scope `[PME]`. This
is a source-level behavior, not a separate algorithm.

## `[PM]` Parameters

| Parameter | Scope | Type | Default | Description |
|-----------|-------|------|---------|-------------|
| `fftx` | `PM` | int | auto | FFT grid size in X |
| `ffty` | `PM` | int | auto | FFT grid size in Y |
| `fftz` | `PM` | int | auto | FFT grid size in Z |
| `grid_spacing` | `PM` | float | `1.0` | Grid spacing in angstrom |
| `Direct_Tolerance` | `PM` | float | `1e-5` | Direct-space Ewald tolerance |
| `MPI_size` | `PM` | int | controller value | PME process count |
| `print_detail` | `PM` | bool | `false` | Print detailed PME energy breakdown |

If `fftx`, `ffty`, and `fftz` are omitted, SPONGE derives them from
`grid_spacing` and the current box dimensions.

`MPI_size > 1` is currently rejected by the source code even if the key is
present.

## Compatibility Keys In `[PME]`

The following keys are read from the `[PME]` scope in the current source:

| Parameter | Scope | Type | Default | Description |
|-----------|-------|------|---------|-------------|
| `update_interval` | `PME` | int | `1` | Reciprocal-space update interval |
| `calculate_reciprocal_part` | `PME` | bool | `true` | Whether to compute reciprocal-space PME |
| `calculate_excluded_part` | `PME` | bool | `true` | Whether to compute excluded-pair PME terms |
| `replaced_by_PMC_IZ` | `PME` | bool | `false` | Replace PME reciprocal evaluation with PMC-IZ |

`replaced_by_PMC_IZ = true` cannot be used in `npt` mode.

