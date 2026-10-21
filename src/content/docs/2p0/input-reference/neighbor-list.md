---
title: "邻居表"
description: "SPONGE 2.0 邻居表，译自主仓库文档。"
version: "SPONGE 2.0"
section: "SPONGE 2.0 文档"
order: 11
---

> 本页由 GPT-6-Astra 整理并翻译。SPONGE 2.0 正处于敏捷开发中，功能、参数和文档可能随版本变动；最新版本信息请参照 GitHub 仓库中的 [docs](https://github.com/SPONGEMM/SPONGE/tree/master/docs) 和 [skills](https://github.com/SPONGEMM/SPONGE/tree/master/skills) 文档。
>
> [本页对应的源文档快照](https://github.com/SPONGEMM/SPONGE/blob/317ae56b76da8d12816e9570ff7bd77a270ac48e/docs/input-reference/neighbor-list.md)。

# 邻居表参数

邻居表通过 `[neighbor_list]` TOML 分组配置：

```toml
[neighbor_list]
max_neighbor_numbers = 1200
skin_permit = 0.5
```

## 参数列表

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `refresh_interval` | int | 自动 | 邻居表重建间隔，单位为步 |
| `skin_permit` | float | `0.5` | 触发重建所用的缓冲距离增长容许值 |
| `max_neighbor_numbers` | int | `1200` | 每个原子的最大邻居数 |
| `max_atom_in_grid_numbers` | int | `150` | 每个网格单元的最大原子数 |
| `max_ghost_in_grid_numbers` | int | `150` | 每个网格单元的最大幽灵原子数 |
| `check_overflow_interval` | int | `150` | 内存溢出检查间隔 |
| `throw_error_when_overflow` | bool | `false` | 溢出时是否报错，否则自动扩容 |

默认根据 `skin` 距离自动判断是否重建。`refresh_interval = 0` 启用自动模式。

