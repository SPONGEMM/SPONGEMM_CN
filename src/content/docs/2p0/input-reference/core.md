---
title: "核心模拟参数"
description: "SPONGE 2.0 核心模拟参数，译自主仓库文档。"
version: "SPONGE 2.0"
section: "SPONGE 2.0 文档"
order: 5
---

> 本页由 GPT-6-Astra 整理并翻译。SPONGE 2.0 正处于敏捷开发中，功能、参数和文档可能随版本变动；最新版本信息请参照 GitHub 仓库中的 [docs](https://github.com/SPONGEMM/SPONGE/tree/master/docs) 和 [skills](https://github.com/SPONGEMM/SPONGE/tree/master/skills) 文档。
>
> [本页对应的源文档快照](https://github.com/SPONGEMM/SPONGE/blob/317ae56b76da8d12816e9570ff7bd77a270ac48e/docs/input-reference/core.md)。

# 核心模拟参数

## 模拟任务名称

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `md_name` | string | `"Default SPONGE MD Task Name"` | 模拟任务名称 |

## 模拟模式

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `mode` | string | **必填** | 模拟模式 |

`mode` 可选值：

| 取值 | 说明 |
|------|------|
| `"nve"` | 微正则系综，能量保持不变 |
| `"nvt"` | 正则系综，温度保持不变，需要恒温器 |
| `"npt"` | 等温等压系综，需要恒温器和恒压器 |
| `"minimization"` / `"min"` | 能量最小化 |
| `"rerun"` | 轨迹重新分析 |

## 周期性边界条件

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `pbc` | bool | `true` | 启用周期性边界条件 |

`pbc = false` 时进入非周期计算路径。此路径不能用于 `npt`，不支持多进程模式，并要求设置足够大的盒子。

## 时间与步数

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `step_limit` | int | `1000` | 模拟总步数 |
| `dt` | float | `0.001` | 时间步长，单位 ps |
| `frame_limit` | int | - | rerun 模式的帧数上限 |

## 相互作用截断

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `cutoff` | float | `8.0` | 非键相互作用截断距离，单位 Å |
| `skin` | float | `2.0` | 邻居表缓冲距离，单位 Å |

## 目标温度与压力

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `target_temperature` | float | `300.0` | 顶层目标温度，单位 K，用于 NVT/NPT |
| `target_pressure` | float | `1.0` | 顶层目标压力，单位 bar，用于 NPT |

即使恒温器和恒压器参数写在 `[thermostat]`、`[barostat]` 下，这两个参数也必须保留在顶层。

温度和压力还支持通过顶层 `target_temperature_schedule_*`、`target_pressure_schedule_*` 参数设置变化计划，详见[恒温器](/docs/2p0/input-reference/thermostat)和[恒压器](/docs/2p0/input-reference/barostat)。

## 初始速度

除非显式请求初始化，否则 SPONGE 保留所选输入加载器提供的速度：

```toml
[initial_velocity]
mode = "maxwell"
seed = 202607220001
```

`mode = "maxwell"` 按第零步的目标温度采样速度，去除质心运动；对于受约束体系，在不改变坐标的情况下将速度投影到 SHAKE/SETTLE 约束流形，再按最终体系自由度重新缩放。

`seed` 为必填项，必须是 `0..INT64_MAX` 范围内的整数，与恒温器随机种子独立。此模式仅适用于动力学模拟，不适用于最小化或 rerun。

## 工作目录

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `workspace` | string | mdin 文件所在目录 | 工作目录，可使用绝对或相对路径 |

