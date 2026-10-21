---
title: "恒温器"
description: "SPONGE 2.0 恒温器，译自主仓库文档。"
version: "SPONGE 2.0"
section: "SPONGE 2.0 文档"
order: 7
---

> 本页由 GPT-6-Astra 整理并翻译。SPONGE 2.0 正处于敏捷开发中，功能、参数和文档可能随版本变动；最新版本信息请参照 GitHub 仓库中的 [docs](https://github.com/SPONGEMM/SPONGE/tree/master/docs) 和 [skills](https://github.com/SPONGEMM/SPONGE/tree/master/skills) 文档。
>
> [本页对应的源文档快照](https://github.com/SPONGEMM/SPONGE/blob/317ae56b76da8d12816e9570ff7bd77a270ac48e/docs/input-reference/thermostat.md)。

# 恒温器参数

SPONGE 在 `nvt` 和 `npt` 模式下需要恒温器。

TOML 输入推荐使用分组形式：

```toml
mode = "nvt"
target_temperature = 300.0

[thermostat]
mode = "middle_langevin"
tau = 0.1
seed = 2026
```

解析器也接受旧版扁平参数 `thermostat`、`thermostat_tau` 和 `thermostat_seed`，但新文档推荐使用上述 TOML 分组形式。

## 选择恒温器

| 参数 | 所属分组 | 类型 | 默认值 | 说明 |
|------|----------|------|--------|------|
| `mode` | `thermostat` | string | NVT/NPT 必填 | 恒温算法 |

支持的取值：

| 取值 | 说明 |
|------|------|
| `"middle_langevin"` | Middle Langevin 动力学 |
| `"langevin"` | `middle_langevin` 的弃用别名 |
| `"andersen"` | Andersen 恒温器 |
| `"berendsen_thermostat"` | Berendsen 恒温器 |
| `"bussi_thermostat"` | Bussi 速度重缩放恒温器 |
| `"nose_hoover_chain"` | Nosé–Hoover 链恒温器 |

## 顶层参数

| 参数 | 所属位置 | 类型 | 默认值 | 说明 |
|------|----------|------|--------|------|
| `target_temperature` | 顶层 | float | `300.0` | 目标温度，单位 K |
| `velocity_max` | 顶层 | float | 禁用 | 部分恒温器使用的速度上限 |

`target_temperature` 不属于 `[thermostat]`，必须保留在顶层；温度变化计划也作用于此参数。

## 通用恒温器参数

| 参数 | 所属分组 | 类型 | 默认值 | 说明 |
|------|----------|------|--------|------|
| `tau` | `thermostat` | float | `1.0` | 耦合时间常数，单位 ps |
| `seed` | `thermostat` | int | 随机 | 随机恒温器的随机种子 |

说明：

- `middle_langevin`、`andersen`、`bussi_thermostat` 使用 `seed`。
- `berendsen_thermostat` 和 `nose_hoover_chain` 不读取 `seed`。
- `middle_langevin` 在内部将 `tau` 转换为摩擦系数 `gamma = 1 / tau`。
- `andersen` 将 `tau` 转换为内部碰撞更新间隔。

## 各算法参数

### `middle_langevin`

```toml
[thermostat]
mode = "middle_langevin"
tau = 0.1
seed = 2026
```

使用 `thermostat` 分组下的 `tau`、`seed`，以及顶层 `velocity_max`。

### `andersen`

```toml
[thermostat]
mode = "andersen"
tau = 0.1
seed = 2026
```

使用 `thermostat` 分组下的 `tau`、`seed`，以及顶层 `velocity_max`。

### `berendsen_thermostat`

```toml
[thermostat]
mode = "berendsen_thermostat"
tau = 0.1
```

仅使用 `thermostat` 分组下的 `tau`。

### `bussi_thermostat`

```toml
[thermostat]
mode = "bussi_thermostat"
tau = 0.1
seed = 2026
```

使用 `thermostat` 分组下的 `tau` 和 `seed`。新的 H5 检查点将 Bussi 随机流保存为带类型的可移植 Philox 状态；标准库标量随机数引擎的文本形式仅在读取旧检查点时兼容接受。

### `nose_hoover_chain`

```toml
[thermostat]
mode = "nose_hoover_chain"
tau = 0.2

[nose_hoover_chain]
length = 3
restart_input = "nhc_restart.in"
restart_output = "nhc_restart.out"
crd = "nhc_crd.dat"
vel = "nhc_vel.dat"
```

额外参数：

| 参数 | 所属分组 | 类型 | 默认值 | 说明 |
|------|----------|------|--------|------|
| `length` | `nose_hoover_chain` | int | `1` | 链长度 |
| `restart_input` | `nose_hoover_chain` | string | - | 从文件读取初始链状态 |
| `restart_output` | `nose_hoover_chain` | string | - | 将链状态写入文件 |
| `crd` | `nose_hoover_chain` | string | - | 输出链坐标轨迹 |
| `vel` | `nose_hoover_chain` | string | - | 输出链速度轨迹 |

`nose_hoover_chain` 也读取顶层 `velocity_max`。

## 温度变化计划

温度变化计划由顶层参数控制，不属于 `[thermostat]`：

| 参数 | 类型 | 说明 |
|------|------|------|
| `target_temperature_schedule_mode` | string | `"step"`（阶梯变化）或 `"linear"`（线性变化） |
| `target_temperature_schedule_steps` | array | 内联计划：`[{ step = N, value = T }, ...]` |
| `target_temperature_schedule_file` | string | TOML 计划文件路径 |

内联 `target_temperature_schedule_steps` 仅在主 mdin 文件为 TOML 时有效。

```toml
target_temperature = 300.0
target_temperature_schedule_mode = "linear"
target_temperature_schedule_steps = [
    { step = 0, value = 100.0 },
    { step = 10000, value = 300.0 },
    { step = 50000, value = 300.0 },
]
```

