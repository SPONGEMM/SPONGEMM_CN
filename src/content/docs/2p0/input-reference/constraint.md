---
title: "约束算法"
description: "SPONGE 2.0 约束算法，迁自主仓库的英文文档。"
version: "SPONGE 2.0"
section: "SPONGE 2.0 文档"
order: 10
---

> 本页由 GPT-6-Astra 整理，正文暂保留英文原文，尚未翻译。SPONGE 2.0 正处于敏捷开发中，功能、参数和文档可能随版本变动；最新版本信息请参照 GitHub 仓库中的 [docs](https://github.com/SPONGEMM/SPONGE/tree/master/docs) 和 [skills](https://github.com/SPONGEMM/SPONGE/tree/master/skills) 文档。
>
> [本页对应的源文档快照](https://github.com/SPONGEMM/SPONGE/blob/317ae56b76da8d12816e9570ff7bd77a270ac48e/docs/input-reference/constraint.md)。

# Constraint Algorithm Parameters

## Constraint Mode

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `constrain_mode` | string | none (constraints disabled) | Constraint algorithm |

`constrain_mode` options:

| Value | Description |
|-------|-------------|
| `"SETTLE"` | SETTLE algorithm, specialized for rigid water molecules (triangle constraints) |
| `"SHAKE"` | SHAKE algorithm, general bond length constraints |

The base constraint list is configured through the `[constrain]` prefix:

```toml
constrain_mode = "SHAKE"

[constrain]
mass = 3.3
```

## SETTLE Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `settle_disable` | bool | `false` | Top-level flag that disables SETTLE entirely |

## SHAKE Parameters

| Parameter | Scope | Type | Default | Description |
|-----------|-------|------|---------|-------------|
| `iteration_numbers` | `SHAKE` | int | `25` | Maximum SHAKE iteration count |
| `step_length` | `SHAKE` | float | `1.0` | SHAKE step length / damping factor |

## `[constrain]` Parameters

| Parameter | Scope | Type | Default | Description |
|-----------|-------|------|---------|-------------|
| `in_file` | `constrain` | string | - | Extra bond-constraint list file |
| `mass` | `constrain` | float | `3.3`, or `0.0` when `in_file` is set | Auto-constrain bonds involving atoms lighter than this threshold |
| `angle` | `constrain` | bool | `false` | Reserved, currently not implemented |

