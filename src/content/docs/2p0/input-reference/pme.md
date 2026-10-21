---
title: "PME 静电"
description: "SPONGE 2.0 PME 静电，译自主仓库文档。"
version: "SPONGE 2.0"
section: "SPONGE 2.0 文档"
order: 12
---

> 本页由 GPT-6-Astra 整理并翻译。SPONGE 2.0 正处于敏捷开发中，功能、参数和文档可能随版本变动；最新版本信息请参照 GitHub 仓库中的 [docs](https://github.com/SPONGEMM/SPONGE/tree/master/docs) 和 [skills](https://github.com/SPONGEMM/SPONGE/tree/master/skills) 文档。
>
> [本页对应的源文档快照](https://github.com/SPONGEMM/SPONGE/blob/317ae56b76da8d12816e9570ff7bd77a270ac48e/docs/input-reference/pme.md)。

# PME 静电参数

当前源码通过 `PM` 模块初始化 PME，因此新的 TOML 示例优先使用 `[PM]` 分组：

```toml
[PM]
grid_spacing = 1.0
Direct_Tolerance = 1e-5
MPI_size = 1
print_detail = false
```

部分 PME 控制参数仍从兼容分组 `[PME]` 读取。这是源码中的参数读取方式，并不代表另一种算法。

## `[PM]` 参数

| 参数 | 所属分组 | 类型 | 默认值 | 说明 |
|------|----------|------|--------|------|
| `fftx` | `PM` | int | 自动 | X 方向 FFT 网格数 |
| `ffty` | `PM` | int | 自动 | Y 方向 FFT 网格数 |
| `fftz` | `PM` | int | 自动 | Z 方向 FFT 网格数 |
| `grid_spacing` | `PM` | float | `1.0` | 网格间距，单位 Å |
| `Direct_Tolerance` | `PM` | float | `1e-5` | Ewald 实空间误差容限 |
| `MPI_size` | `PM` | int | controller 中的值 | PME 进程数 |
| `print_detail` | `PM` | bool | `false` | 输出详细的 PME 能量分项 |

若省略 `fftx`、`ffty`、`fftz`，SPONGE 根据 `grid_spacing` 和当前盒子尺寸自动确定网格数。

即使存在此参数，当前源码仍拒绝 `MPI_size > 1`。

## `[PME]` 兼容参数

当前源码从 `[PME]` 分组读取以下参数：

| 参数 | 所属分组 | 类型 | 默认值 | 说明 |
|------|----------|------|--------|------|
| `update_interval` | `PME` | int | `1` | 倒空间更新间隔 |
| `calculate_reciprocal_part` | `PME` | bool | `true` | 是否计算 PME 倒空间部分 |
| `calculate_excluded_part` | `PME` | bool | `true` | 是否计算排除原子对的 PME 项 |
| `replaced_by_PMC_IZ` | `PME` | bool | `false` | 用 PMC-IZ 替代 PME 倒空间计算 |

`replaced_by_PMC_IZ = true` 不能用于 `npt` 模式。

