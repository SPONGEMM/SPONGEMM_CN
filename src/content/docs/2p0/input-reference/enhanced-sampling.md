---
title: "增强采样"
description: "SPONGE 2.0 增强采样，译自主仓库文档。"
version: "SPONGE 2.0"
section: "SPONGE 2.0 文档"
order: 14
---

> 本页由 GPT-6-Astra 整理并翻译。SPONGE 2.0 正处于敏捷开发中，功能、参数和文档可能随版本变动；最新版本信息请参照 GitHub 仓库中的 [docs](https://github.com/SPONGEMM/SPONGE/tree/master/docs) 和 [skills](https://github.com/SPONGEMM/SPONGE/tree/master/skills) 文档。
>
> [本页对应的源文档快照](https://github.com/SPONGEMM/SPONGE/blob/317ae56b76da8d12816e9570ff7bd77a270ac48e/docs/input-reference/enhanced-sampling.md)。

# 增强采样参数

## 集体变量（CV）

| 参数 | 类型 | 说明 |
|------|------|------|
| `cv_in_file` | string | 集体变量定义文件路径 |

CV 定义从 `cv_in_file` 指向的文件加载。新 CV 文件推荐使用 TOML；旧版分块格式仍保留兼容。支持的 CV 类型、虚拟原子、输出方式和完整示例见[集体变量指南](/docs/2p0/input-reference/collective-variables)。

`sponge.input.v2` 协议数据包将 CV 虚拟原子保存为 `/cv/virtual_atom/<name>` 下的带类型 HDF5 对象。每个对象包含 `type`、`atom_indices`、`enabled_default`；`center` 类型还包含 `weight`。普通 CV 可通过 `/cv/<name>/atom_refs` 混合引用真实原子索引和虚拟原子名称，无需嵌入长篇旧版配置字符串。

## Metadynamics

通过 `[META]` 或 `[meta]` 分组配置：

| 参数 | 类型 | 说明 |
|------|------|------|
| `sink` | string | Sink metadynamics 模式 |

详细参数见 [SinkMeta](/docs/2p0/input-reference/sinkmeta)。

## SITS

SITS 参数位于 `[SITS]` 分组下：

```toml
[SITS]
mode = "iteration"
atom_numbers = "ALL"
k_numbers = 40
T_low = 300.0
T_high = 600.0
record_interval = 1
update_interval = 100
```

### 通用参数

| 参数 | 所属分组 | 类型 | 默认值 | 说明 |
|------|----------|------|--------|------|
| `mode` | `SITS` | string | 必填 | SITS 运行模式 |
| `atom_in_file` | `SITS` | string | - | 用文件定义选择性增强的原子分区 |
| `atom_numbers` | `SITS` | int 或 string | 未设置 `atom_in_file` 时必填 | 从开头计入选择性增强集合的原子数，或 `"ALL"` / `"ITS"` |
| `cross_enhance_factor` | `SITS` | float | `0.5` | 交叉项增强因子 |
| `fb_interval` | `SITS` | int | `1` | 反馈偏置更新间隔 |

必须且只能选择一种原子选择方式：`atom_in_file` 或 `atom_numbers`。

### 迭代／生产阶段参数

| 参数 | 所属分组 | 类型 | 默认值 | 说明 |
|------|----------|------|--------|------|
| `k_numbers` | `SITS` | int | `40` | 温度点数 |
| `T_low` | `SITS` | float | - | 自动生成温度序列的下限 |
| `T_high` | `SITS` | float | - | 自动生成温度序列的上限 |
| `T` | `SITS` | 斜杠分隔字符串 | - | 显式温度序列，替代 `T_low` / `T_high` |
| `record_interval` | `SITS` | int | `1` | 能量记录间隔 |
| `update_interval` | `SITS` | int | `100` | 参数更新间隔 |
| `pe_a` | `SITS` | float | `1.0` | 能量乘性缩放系数 |
| `pe_b` | `SITS` | float | `0.0` | 能量加性偏移 |
| `fb_bias` | `SITS` | float | `0.0` | 施加到 `fb` 的额外偏置 |
| `nk_rest` | `SITS` | bool | `iteration` 中为 `false`，其他模式为 `true` | 是否读取重启 `Nk` |
| `nk_in_file` | `SITS` | string | `nk_rest = true` 或 `production` 模式时必填 | `Nk` 重启输入文件 |
| `nk_fix` | `SITS` | bool | `iteration` 中为 `false`，其他模式为 `true` | 运行时是否固定 `Nk` |
| `nk_rest_file` | `SITS` | string | 自动生成 | `nk_fix = false` 时输出 `Nk` 重启值的文件 |
| `nk_traj_file` | `SITS` | string | 自动生成 | `nk_fix = false` 时输出 `Nk` 历史的文件 |

`mode` 可选值：

| 取值 | 说明 |
|------|------|
| `"observation"` | 观测阶段 |
| `"iteration"` | 迭代阶段 |
| `"production"` | 生产阶段 |
| `"empirical"` | 经验模式 |
| `"amd"` | AMD 模式 |
| `"gamd"` | GaMD 模式 |

### Empirical / AMD / GaMD 参数

| 参数 | 所属分组 | 类型 | 默认值 | 说明 |
|------|----------|------|--------|------|
| `pe_a` | `SITS` | float | `amd` / `gamd` 必填，`empirical` 中为 `1.0` | 偏置强度参数 |
| `pe_b` | `SITS` | float | `amd` / `gamd` 必填，`empirical` 中为 `0.0` | 偏置阈值参数 |
| `T_low` | `SITS` | float | `empirical` 中必填 | 温度下限 |
| `T_high` | `SITS` | float | `empirical` 中必填 | 温度上限 |

说明：

- `amd`、`gamd` 和 `empirical` 不使用完整的 `k_numbers` / `Nk` 更新流程。
- 当前源码把 `T` 读取为斜杠分隔字符串，而不是 TOML 数值数组。

