---
title: "恒压器"
description: "SPONGE 2.0 恒压器，译自主仓库文档。"
version: "SPONGE 2.0"
section: "SPONGE 2.0 文档"
order: 8
---

> 本页由 GPT-6-Astra 整理并翻译。SPONGE 2.0 正处于敏捷开发中，功能、参数和文档可能随版本变动；最新版本信息请参照 GitHub 仓库中的 [docs](https://github.com/SPONGEMM/SPONGE/tree/master/docs) 和 [skills](https://github.com/SPONGEMM/SPONGE/tree/master/skills) 文档。
>
> [本页对应的源文档快照](https://github.com/SPONGEMM/SPONGE/blob/317ae56b76da8d12816e9570ff7bd77a270ac48e/docs/input-reference/barostat.md)。

# 恒压器参数

SPONGE 在 `npt` 模式下需要恒压器。

TOML 输入推荐使用分组形式：

```toml
mode = "npt"
target_pressure = 1.0

[barostat]
mode = "andersen_barostat"
seed = 2026
tau = 0.1
update_interval = 10
```

解析器也接受旧版扁平参数 `barostat`、`barostat_tau`、`barostat_update_interval` 及类似的 `barostat_*` 参数，但新文档推荐使用 TOML 分组形式。

## 选择恒压器

| 参数 | 所属分组 | 类型 | 默认值 | 说明 |
|------|----------|------|--------|------|
| `mode` | `barostat` | string | NPT 必填 | 恒压算法 |

支持的取值：

| 取值 | 说明 |
|------|------|
| `"andersen_barostat"` | 基于压力的 Andersen 恒压器 |
| `"berendsen_barostat"` | 基于压力的 Berendsen 恒压器 |
| `"bussi_barostat"` | 基于压力的 Bussi 恒压器 |
| `"monte_carlo_barostat"` | Monte Carlo 恒压器 |

## 顶层参数

| 参数 | 所属位置 | 类型 | 默认值 | 说明 |
|------|----------|------|--------|------|
| `target_pressure` | 顶层 | float | `1.0` | 目标压力，单位 bar |
| `target_surface_tensor` | 顶层 | float | `0.0` | 基于压力的恒压器所用的目标表面张力项 |

即使恒压器选项写在 `[barostat]` 下，`target_pressure` 仍须保留在顶层。

## 基于压力的恒压器

`andersen_barostat`、`berendsen_barostat` 和 `bussi_barostat` 共用以下参数。

```toml
[barostat]
mode = "andersen_barostat"
seed = 2026
tau = 0.1
compressibility = 4.5e-5
update_interval = 10
isotropy = "isotropic"
```

### 通用参数

| 参数 | 所属分组 | 类型 | 默认值 | 说明 |
|------|----------|------|--------|------|
| `seed` | `barostat` | int | 随机 | 随机压力恒压器使用的可移植 Philox 随机流种子 |
| `tau` | `barostat` | float | `1.0` | 恒压时间常数，单位 ps |
| `compressibility` | `barostat` | float | `4.5e-5` | 等温压缩系数，单位 `bar^-1` |
| `update_interval` | `barostat` | int | `10` | 压力耦合更新间隔 |
| `isotropy` | `barostat` | string | `"isotropic"` | 压力耦合模式 |

`isotropy` 支持：

| 取值 | 说明 |
|------|------|
| `"isotropic"` | 所有轴等比例缩放 |
| `"semiisotropic"` | 半各向同性耦合 |
| `"semianisotropic"` | 半各向异性耦合 |
| `"anisotropic"` | 完全各向异性耦合 |

### 盒子形变参数

| 参数 | 所属分组 | 类型 | 说明 |
|------|----------|------|------|
| `g11`、`g21`、`g22`、`g31`、`g32`、`g33` | `barostat` | float | 初始盒子速度张量元素 |
| `x_constant`、`y_constant`、`z_constant` | `barostat` | bool | 固定所选轴方向的盒子尺寸，不参与缩放 |

源码中的 `x_constant`、`y_constant`、`z_constant` 是布尔值，不是浮点数。

### 表面张力参数

基于压力的恒压器从顶层 `target_surface_tensor` 读取目标表面项。解析器也接受兼容参数 `barostat_target_surface_tensor`，但文档不推荐以其作为主要写法。

## Monte Carlo 恒压器

`monte_carlo_barostat` 使用另一套参数，目前只支持正交盒子。

```toml
[barostat]
mode = "monte_carlo_barostat"

[barostat.monte_carlo]
initial_ratio = 0.001
update_interval = 100
check_interval = 10
accept_rate_low = 30
accept_rate_high = 40
couple_dimension = "XYZ"
```

`[barostat.monte_carlo]` 是已有 `monte_carlo_barostat_*` 运行时命令的 TOML 别名分组。旧版顶层 `[monte_carlo_barostat]` 分组仍可使用。

### 参数列表

| 参数 | 所属分组 | 类型 | 默认值 | 说明 |
|------|----------|------|--------|------|
| `initial_ratio` | `monte_carlo_barostat` | float | `0.001` | 初始盒长相对变化的最大幅度 |
| `update_interval` | `monte_carlo_barostat` | int | `100` | MC 尝试间隔 |
| `check_interval` | `monte_carlo_barostat` | int | `10` | 接受率调整间隔 |
| `accept_rate_low` | `monte_carlo_barostat` | float | `30` | 目标接受率下限，单位 % |
| `accept_rate_high` | `monte_carlo_barostat` | float | `40` | 目标接受率上限，单位 % |
| `couple_dimension` | `monte_carlo_barostat` | string | `"XYZ"` | 耦合的盒子维度 |
| `only_direction` | `monte_carlo_barostat` | string | - | 限制所选耦合模式中的变化方向 |
| `surface_number` | `monte_carlo_barostat` | int | `0` | 表面数，仅用于非 `NO`、非 `XYZ` 耦合 |
| `surface_tension` | `monte_carlo_barostat` | float | `0.0` | 表面张力，仅用于非 `NO`、非 `XYZ` 耦合 |

`couple_dimension` 支持 `"XYZ"`、`"NO"`、`"XY"`、`"XZ"` 和 `"YZ"`。

## 压力变化计划

压力变化计划由顶层参数控制，不属于 `[barostat]`：

| 参数 | 类型 | 说明 |
|------|------|------|
| `target_pressure_schedule_mode` | string | `"step"`（阶梯变化）或 `"linear"`（线性变化） |
| `target_pressure_schedule_steps` | array | 内联计划：`[{ step = N, value = P }, ...]` |
| `target_pressure_schedule_file` | string | TOML 计划文件路径 |

内联 `target_pressure_schedule_steps` 仅在主 mdin 文件为 TOML 时有效。

