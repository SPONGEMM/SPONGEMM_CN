---
title: "原子坐标限制"
description: "SPONGE 2.0 原子坐标限制，译自主仓库文档。"
version: "SPONGE 2.0"
section: "SPONGE 2.0 文档"
order: 9
---

> 本页由 GPT-6-Astra 整理并翻译。SPONGE 2.0 正处于敏捷开发中，功能、参数和文档可能随版本变动；最新版本信息请参照 GitHub 仓库中的 [docs](https://github.com/SPONGEMM/SPONGE/tree/master/docs) 和 [skills](https://github.com/SPONGEMM/SPONGE/tree/master/skills) 文档。
>
> [本页对应的源文档快照](https://github.com/SPONGEMM/SPONGE/blob/317ae56b76da8d12816e9570ff7bd77a270ac48e/docs/input-reference/restrain.md)。

# 原子坐标限制参数

SPONGE 的原子坐标限制模块与[集体变量指南](/docs/2p0/input-reference/collective-variables)中的 CV `restrain` 是两个独立模块。

此模块在主 MD 流程中直接初始化，将指定原子限制在参考坐标附近。

## 输入形式

该模块沿用 `restrain_atom_id`、`restrain_single_weight` 等带前缀的扁平参数。

解析器会将 TOML 分组参数存为 `prefix_key`，因此以下写法与扁平参数等价，推荐新文档采用：

```toml
[restrain]
atom_id = "restrain_atom_id.txt"
coordinate_in_file = "restrain_ref.txt"
single_weight = 20.0
refcoord_scaling = "com_mol"
calc_virial = true
```

## 最小示例

```toml
[restrain]
atom_id = "restrain_atom_id.txt"
coordinate_in_file = "restrain_ref.txt"
single_weight = 20.0
```

若未提供 `coordinate_in_file` 或 `amber_rst7`，SPONGE 使用当前输入坐标作为限制参考。

## 参数列表

| 参数 | 所属分组 | 类型 | 默认值 | 说明 |
|------|----------|------|--------|------|
| `atom_id` | `restrain` | string | - | 必需的原子列表文件；设置后启用模块 |
| `coordinate_in_file` | `restrain` | string | 当前输入坐标 | 参考坐标文件 |
| `amber_rst7` | `restrain` | string | - | 从 AMBER rst7 文件读取参考坐标 |
| `single_weight` | `restrain` | float | `20.0` | 对所有受限制原子使用的各向同性权重 |
| `weight_in_file` | `restrain` | string | - | 每个原子的各向异性权重文件；未设置 `single_weight` 时使用 |
| `refcoord_scaling` | `restrain` | string | `"no"` | 盒子更新时参考坐标的缩放方式 |
| `calc_virial` | `restrain` | bool | `true` | 是否累加限制力的维里 |

## `refcoord_scaling`

支持以下取值：

| 取值 | 说明 |
|------|------|
| `"no"` | 不缩放参考坐标 |
| `"all"` | 所有参考坐标随盒子缩放 |
| `"com_ug"` | 按单元组质心缩放 |
| `"com_res"` | 按残基质心缩放 |
| `"com_mol"` | 按分子质心缩放 |

## 权重输入方式

### 各向同性权重

```toml
[restrain]
atom_id = "restrain_atom_id.txt"
single_weight = 20.0
```

对所有受限制原子使用相同的标量力常数。

### 每个原子的各向异性权重

```toml
[restrain]
atom_id = "restrain_atom_id.txt"
weight_in_file = "restrain_weight.txt"
```

`weight_in_file` 中每个受限制原子对应一组 `wx wy wz`。

## 说明

- 仅在设置 `restrain_atom_id` 或 `restrain` 分组中的 `atom_id` 时启用模块。
- `coordinate_in_file` 的优先级高于 `amber_rst7`。
- 若不提供 `single_weight`，则需要提供 `weight_in_file`。
- 此模块与 CV `restrain` 独立，必要时可在同一次模拟中同时使用。

