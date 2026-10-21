---
title: "约束算法"
description: "SPONGE 2.0 约束算法，译自主仓库文档。"
version: "SPONGE 2.0"
section: "SPONGE 2.0 文档"
order: 10
---

> 本页由 GPT-6-Astra 整理并翻译。SPONGE 2.0 正处于敏捷开发中，功能、参数和文档可能随版本变动；最新版本信息请参照 GitHub 仓库中的 [docs](https://github.com/SPONGEMM/SPONGE/tree/master/docs) 和 [skills](https://github.com/SPONGEMM/SPONGE/tree/master/skills) 文档。
>
> [本页对应的源文档快照](https://github.com/SPONGEMM/SPONGE/blob/317ae56b76da8d12816e9570ff7bd77a270ac48e/docs/input-reference/constraint.md)。

# 约束算法参数

## 约束模式

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `constrain_mode` | string | 无，禁用约束 | 约束算法 |

`constrain_mode` 可选值：

| 取值 | 说明 |
|------|------|
| `"SETTLE"` | 专用于刚性水分子的 SETTLE 算法（三角形约束） |
| `"SHAKE"` | 通用键长约束 SHAKE 算法 |

基本约束列表通过 `[constrain]` 前缀配置：

```toml
constrain_mode = "SHAKE"

[constrain]
mass = 3.3
```

## SETTLE 参数

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `settle_disable` | bool | `false` | 顶层开关，完全禁用 SETTLE |

## SHAKE 参数

| 参数 | 所属分组 | 类型 | 默认值 | 说明 |
|------|----------|------|--------|------|
| `iteration_numbers` | `SHAKE` | int | `25` | 最大迭代次数 |
| `step_length` | `SHAKE` | float | `1.0` | 步长／阻尼因子 |

## `[constrain]` 参数

| 参数 | 所属分组 | 类型 | 默认值 | 说明 |
|------|----------|------|--------|------|
| `in_file` | `constrain` | string | - | 额外键约束列表文件 |
| `mass` | `constrain` | float | `3.3`；设置 `in_file` 时为 `0.0` | 自动约束涉及质量低于此阈值原子的键 |
| `angle` | `constrain` | bool | `false` | 保留参数，目前未实现 |

