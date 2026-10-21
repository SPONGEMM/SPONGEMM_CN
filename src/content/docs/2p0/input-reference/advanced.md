---
title: "高级参数"
description: "SPONGE 2.0 高级参数，译自主仓库文档。"
version: "SPONGE 2.0"
section: "SPONGE 2.0 文档"
order: 16
---

> 本页由 GPT-6-Astra 整理并翻译。SPONGE 2.0 正处于敏捷开发中，功能、参数和文档可能随版本变动；最新版本信息请参照 GitHub 仓库中的 [docs](https://github.com/SPONGEMM/SPONGE/tree/master/docs) 和 [skills](https://github.com/SPONGEMM/SPONGE/tree/master/skills) 文档。
>
> [本页对应的源文档快照](https://github.com/SPONGEMM/SPONGE/blob/317ae56b76da8d12816e9570ff7bd77a270ac48e/docs/input-reference/advanced.md)。

# 高级参数

## 设备与并行

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `device` | string | 自动检测 | GPU 设备编号 |
| `device_optimized_block` | int | - | GPU 线程块大小优化 |

## 区域分解

MPI 区域分解参数从 `[DOM_DEC]` 分组读取：

```toml
[DOM_DEC]
update_interval = 100
split_nx = 2
split_ny = 2
split_nz = 1
```

| 参数 | 所属分组 | 类型 | 默认值 | 说明 |
|------|----------|------|--------|------|
| `update_interval` | `DOM_DEC` | int | `100` | 区域分解刷新间隔 |
| `split_nx` | `DOM_DEC` | int | 自动 | X 方向划分数 |
| `split_ny` | `DOM_DEC` | int | 自动 | Y 方向划分数 |
| `split_nz` | `DOM_DEC` | int | 自动 | Z 方向划分数 |

省略划分数时，SPONGE 根据 PP MPI 进程数和盒子几何自动选择。当前 MPI 区域分解只支持正交盒子。

## 能量最小化

最小化专用参数位于 `[minimization]` 分组：

```toml
mode = "minimization"

[minimization]
dynamic_dt = 1
max_move = 0.1
beta1 = 0.9
epsilon = 1e-4
```

| 参数 | 所属分组 | 类型 | 默认值 | 说明 |
|------|----------|------|--------|------|
| `dynamic_dt` | `minimization` | int | `1` | 使用类似 ADAM 的动态步长最小化器 |
| `max_move` | `minimization` | float | `0.1` | 每步最大坐标位移，单位 Å |
| `momentum_keep` | `minimization` | float | `dynamic_dt = 0` 时为 `0.0` | 梯度下降模式中的动量保留系数 |
| `beta1` | `minimization` | float | `0.9` | `dynamic_dt != 0` 时使用的第一个 ADAM 参数 |
| `beta2` | `minimization` | float | 当前源码为 `0.9` | `dynamic_dt != 0` 时使用的第二个 ADAM 参数 |
| `epsilon` | `minimization` | float | `1e-4` | `dynamic_dt != 0` 时使用的数值稳定项 |

`dynamic_dt != 0` 时，SPONGE 在内部将 `dt` 重设为 `3e-4 ps`。`dynamic_dt = 0` 时使用极小的固定 `dt`，走梯度下降路径。

## Rerun 模式

`rerun` 使用常规顶层轨迹文件参数，以及若干专用扁平参数：

```toml
mode = "rerun"
crd = "traj.dat"
box = "traj.box"
vel = "traj.vel"
frame_limit = 1000
rerun_start = 0
rerun_strip = 0
rerun_need_box_update = 0
```

| 参数 | 所属位置 | 类型 | 默认值 | 说明 |
|------|----------|------|--------|------|
| `crd` | 顶层 | string | 必填 | rerun 坐标轨迹输入 |
| `box` | 顶层 | string | 必填 | rerun 盒子轨迹输入 |
| `vel` | 顶层 | string | 可选 | rerun 速度轨迹输入 |
| `frame_limit` | 顶层 | int | - | 最大处理帧数 |
| `rerun_frame_limit` | 顶层 | int | `frame_limit` 的别名 | 兼容别名 |
| `rerun_start` | 顶层 | int | `0` | 起始帧偏移 |
| `rerun_strip` | 顶层 | int | `0` | 两个处理帧之间跳过的帧数 |
| `rerun_need_box_update` | 顶层 | int | `0` | rerun 时是否更新盒子形变张量 |

当前源码使用扁平的 `rerun_*` 参数，而不是 `[rerun]` TOML 分组。

## 墙限制

### 硬墙

硬墙范围通过 `[hard_wall]` 前缀配置：

```toml
[hard_wall]
x_low = 0.0
x_high = 40.0
```

| 参数 | 所属分组 | 类型 | 说明 |
|------|----------|------|------|
| `x_low`、`x_high` | `hard_wall` | float | X 方向硬墙位置 |
| `y_low`、`y_high` | `hard_wall` | float | Y 方向硬墙位置 |
| `z_low`、`z_high` | `hard_wall` | float | Z 方向硬墙位置 |

硬墙不能用于 `npt` 模式。

### 软墙

提供配置文件以启用软墙：

```toml
[soft_walls]
in_file = "soft_walls.txt"
```

| 参数 | 所属分组 | 类型 | 说明 |
|------|----------|------|------|
| `in_file` | `soft_walls` | string | 软墙配置文件路径 |

## ReaxFF 反应力场

通过 `[REAXFF]` 分组配置：

```toml
[REAXFF]
in_file = "ffield.reax.cho"
type_in_file = "atom_types.txt"
```

| 参数 | 类型 | 说明 |
|------|------|------|
| `in_file` | string | ReaxFF 参数文件 |
| `type_in_file` | string | 原子类型映射文件 |

## 广义 Born 模型

广义 Born 模型参数通过 `[gb]` 分组配置：

```toml
[gb]
in_file = "gb.txt"
epsilon = 78.5
radii_offset = 0.09
radii_cutoff = 25.0
```

| 参数 | 所属分组 | 类型 | 默认值 | 说明 |
|------|----------|------|--------|------|
| `in_file` | `gb` | string | - | 原生 GB 参数文件 |
| `epsilon` | `gb` | float | `78.5` | 相对介电常数 |
| `radii_offset` | `gb` | float | `0.09` | 从自身半径中扣除的偏移量 |
| `radii_cutoff` | `gb` | float | `cutoff` | 构建有效 Born 半径时的截断距离 |

## 软核 LJ

通过 `LJ_soft_core_in_file` 提供原生软核 LJ 参数文件后，SPONGE 还会读取以下顶层炼金参数：

| 参数 | 所属位置 | 类型 | 默认值 | 说明 |
|------|----------|------|--------|------|
| `lambda_lj` | 顶层 | float | 必填 | 软核 LJ 耦合参数 |
| `soft_core_alpha` | 顶层 | float | `0.5` | 软核 alpha 参数 |
| `soft_core_powfer` | 顶层 | float | `1.0` | 软核幂参数 |
| `soft_core_sigma` | 顶层 | float | `3.0` | 软核 sigma 参数 |
| `soft_core_sigma_min` | 顶层 | float | `0.0` | 有效 sigma 项的下限 |

当前源码中，这些参数位于顶层，不嵌套于 `[LJ_soft_core]`。

## 自定义力

| 参数 | 所属分组 | 类型 | 说明 |
|------|----------|------|------|
| `in_file` | `pairwise_force` | string | 成对力配置文件 |
| `in_file` | `listed_forces` | string | 列表力配置文件 |

## 周期性分子的输出映射

| 参数 | 所属位置 | 类型 | 默认值 | 说明 |
|------|----------|------|--------|------|
| `force_whole_output` | 顶层 | bool | `false` | 对周期体系强制采用完整分子输出映射 |
| `make_output_whole` | 顶层 | string | - | 以 `atom_i-atom_j` 对提供额外连接边，辅助重建完整分子 |

这些参数仅在 `pbc = true` 时有效。

## 溶剂 LJ 快速路径

| 参数 | 所属位置 | 类型 | 默认值 | 说明 |
|------|----------|------|--------|------|
| `solvent_LJ` | 顶层 | bool | 自动 | 启用水专用的溶剂 LJ 快速路径 |

GPU 构建中，若省略 `solvent_LJ`，SPONGE 可能对位于末尾、满足条件的纯水残基自动启用此路径。显式设置该参数会覆盖自动判断。

## 插件

插件由顶层 `plugin` 参数配置，其值为空白分隔的动态库路径列表。目前不使用 TOML 表接口。

## 控制参数

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `command_only` | bool | `false` | 仅使用命令行参数，跳过 mdin 文件 |
| `dont_check_input` | bool | `false` | 跳过未使用参数检查 |
| `end_pause` | bool | `false` | 模拟结束后暂停 |

