---
title: "输入、输出与重启"
description: "SPONGE 2.0 输入、输出与重启，译自主仓库文档。"
version: "SPONGE 2.0"
section: "SPONGE 2.0 文档"
order: 6
---

> 本页由 GPT-6-Astra 整理并翻译。SPONGE 2.0 正处于敏捷开发中，功能、参数和文档可能随版本变动；最新版本信息请参照 GitHub 仓库中的 [docs](https://github.com/SPONGEMM/SPONGE/tree/master/docs) 和 [skills](https://github.com/SPONGEMM/SPONGE/tree/master/skills) 文档。
>
> [本页对应的源文档快照](https://github.com/SPONGEMM/SPONGE/blob/317ae56b76da8d12816e9570ff7bd77a270ac48e/docs/input-reference/io.md)。

# 输入输出参数

SPONGE 有三种互斥的结构／拓扑输入方式：

- 由 Xponge 加载的原生文本输入。
- 由 `amber_parm7` / `amber_rst7` 加载的 AMBER 输入。
- 由 `gromacs_top` / `gromacs_gro` 加载的 GROMACS 输入。

只要存在任一 GROMACS 参数，就使用 GROMACS 加载器；否则，若存在任一 AMBER 参数，则使用 AMBER 加载器。两类均未指定时，使用原生输入。

## 输入文件

### 通用前缀

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `default_in_file_prefix` | string | - | 输入文件名前缀，自动匹配 `<prefix>_coordinate.txt` 等文件 |
| `default_out_file_prefix` | string | - | 输出文件名前缀 |

设置 `default_in_file_prefix = "WAT"` 后，SPONGE 将查找：

- `WAT_coordinate.txt`：坐标。
- `WAT_mass.txt`：质量。
- `WAT_charge.txt`：电荷。
- `WAT_LJ.txt`：LJ 参数。
- `WAT_bond.txt`：键参数。
- `WAT_exclude.txt`：排除列表。
- 以及其他对应模块文件。

### 原生输入文件

原生加载器读取一组 `<module>_in_file` 参数，常用项如下：

| 参数 | 类型 | 说明 |
|------|------|------|
| `coordinate_in_file` | string | 坐标文件路径 |
| `velocity_in_file` | string | 速度文件路径 |
| `mass_in_file` | string | 质量文件路径 |
| `charge_in_file` | string | 电荷文件路径 |
| `residue_in_file` | string | 残基归属文件 |
| `exclude_in_file` | string | 排除列表文件 |
| `bond_in_file` | string | 键参数文件 |
| `angle_in_file` | string | 键角参数文件 |
| `dihedral_in_file` | string | 二面角参数文件 |
| `improper_dihedral_in_file` | string | 非正常二面角文件 |
| `cmap_in_file` | string | CMAP 文件 |
| `lj_in_file` | string | Lennard-Jones 参数文件 |
| `LJ_soft_core_in_file` | string | 软核 Lennard-Jones 参数文件 |
| `nb14_in_file` | string | 1-4 相互作用文件 |
| `nb14_extra_in_file` | string | 额外 1-4 相互作用文件 |
| `urey_bradley_in_file` | string | Urey-Bradley 文件 |
| `virtual_atom_in_file` | string | 原生虚拟原子定义文件 |

部分模块还有专用文件，例如 `lj_soft_in_file`、`gb_in_file`，以及各模块文档中的 `in_file` 参数。

### 导入外部格式

| 参数 | 类型 | 说明 |
|------|------|------|
| `amber_parm7` | string | AMBER parm7 拓扑／参数文件 |
| `amber_rst7` | string | AMBER rst7 坐标／速度文件 |
| `gromacs_gro` | string | GROMACS .gro 坐标文件 |
| `gromacs_top` | string | GROMACS .top 拓扑文件 |
| `gromacs_include_dir` | string list | 读取 `.top` 时使用的额外包含目录 |
| `gromacs_define` | string list | 读取 `.top` 时使用的额外预处理宏定义 |

## H5 数据包输入

SPONGE 使用 HDF5 容器保存大型输入数据和重启状态，同时保留 `mdin.spg.toml` 作为可编辑的数据绑定和启动策略文件。

以下 TOML 分组分别绑定拓扑、模拟协议和重启数据包：

```toml
[input.h5.topology]
path = "topologies/protein.topology.spgt.h5"

[input.h5.protocol]
path = "protocols/metadyn.protocol.spgp.h5"

[input.h5.restart]
path = "runs/prod_0007.restart.spgr.h5"
load = "structural"
```

rerun 输入示例：

```toml
mode = "rerun"
rerun_frame_limit = 1000
rerun_start = 0
rerun_strip = 0

[input.h5.topology]
path = "topologies/protein.topology.spgt.h5"

[input.h5.protocol]
path = "protocols/analysis.protocol.spgp.h5"

[input.h5.trajectory]
path = "runs/prod.spg.h5md"
particle_stream = "all"
```

### 旧版输入对应关系

| 旧版参数 | 对应的 H5 数据包设置 |
|----------|---------------------|
| `coordinate_in_file` | `input.h5.restart.path` 中的结构位置状态 |
| `velocity_in_file` | `input.h5.restart.path` 中的结构速度状态 |
| `amber_rst7` / `rst7` | `input.h5.restart.path` |
| `crd` | `input.h5.trajectory.path` 中的位置帧 |
| `box` | `input.h5.trajectory.path` 中的盒子边矢量帧 |
| `vel` | `input.h5.trajectory.path` 中的可选速度帧 |
| `frame_limit` | 保留为顶层扁平参数，或使用 `rerun_frame_limit` |
| `rerun_start` | 保留原顶层扁平参数 |
| `rerun_strip` | 保留原顶层扁平参数 |
| `rerun_need_box_update` | 保留原顶层扁平参数 |

相同用途的 H5 输入与旧版输入互斥。例如，`input_h5_restart_path` 不能与 `coordinate_in_file`、`velocity_in_file` 或 `rst7` 同用；`input_h5_trajectory_path` 不能与 rerun 的 `crd`、`box`、`vel` 同用。

结构重启输入中的 `/particles/all/velocity/value` 是可选的。若缺失，SPONGE 在将启动状态复制到设备前，把所有原子的各速度分量设为零。恒温器可能在后续积分中引入随机运动，但输入装配阶段不会采样 Maxwell–Boltzmann 分布。

### 重启加载策略

`input.h5.restart.load = "structural"` 恢复坐标、速度、盒子、步数和时间。`dynamic` 还恢复兼容的积分器、恒温器、恒压器和随机数生成器状态；`protocol` 恢复兼容的 SITS、MetaD、限制参考和 CV 参考的续算状态；`full` 合并两者。

每个启用的模块都在应用状态前验证归属和数据模式兼容性。`custom` 是保留选项，须等显式组件列表参数定义后才能使用。

## H5 数据包输出

新的 SPONGE 数据包输出应使用结构化 H5 设置：

```toml
[output.h5.trajectory]
path = "prod.spg.h5md"
vds = true
chunk_size = 20
repair_policy = "strict"

[output.h5.restart]
path = "prod.spgr.h5"
# Required only for raw-input launches that request H5 restart output:
topology_hash = "sha256:..."
atom_order_hash = "sha256:..."
# Optional when no canonical protocol bundle exists:
protocol_hash = "sha256:..."

[output.h5.observable]
path = "prod.obs.spg.h5md"
```

当前 TOML 解析器展平后对应的参数如下：

| 展平参数名 | 类型 | 默认值 | 说明 |
|------------|------|--------|------|
| `output_h5_trajectory_path` | string | - | 标准 H5MD 轨迹输出路径，推荐后缀 `*.spg.h5md` |
| `output_h5_trajectory_vds` | bool | `false` | 使用 H5MD 分片文件及 HDF5 VDS 汇总文件 |
| `output_h5_trajectory_chunk_size` | int | `20` | VDS 文件级分片大小，以轨迹帧数计 |
| `output_h5_trajectory_repair_policy` | string | `strict` | VDS 收尾策略：`strict` 或 `complete_prefix` |
| `output_h5_restart_path` | string | - | 标准 H5 重启输出路径，推荐后缀 `*.spgr.h5` |
| `output_h5_restart_topology_hash` | string | 从 H5 拓扑推导 | 从原始输入启动并输出 H5 重启时必需的拓扑来源标识 |
| `output_h5_restart_atom_order_hash` | string | 从 H5 拓扑推导 | 从原始输入启动并输出 H5 重启时必需的原子顺序来源标识 |
| `output_h5_restart_protocol_hash` | string | 推导／可选 | 生成该文件的模拟协议来源标识 |
| `output_h5_observable_path` | string | - | 可选的仅观测量 H5MD 输出路径，推荐后缀 `*.obs.spg.h5md` |

`output_h5_trajectory_chunk_size` 仅在 `output_h5_trajectory_vds = true` 时有效。它不是 HDF5 数据集内部的数据块形状，也不改变 `write_trajectory_interval`。

仅观测量 H5MD 文件包含 `/h5md`、`/observables` 和 `/parameters`，不包含 `/particles` 轨迹字段。

H5 重启文件始终严格遵循 `sponge.input.v2` 启动格式。绑定 `input_h5_topology_path` 后，SPONGE 从拓扑和可选协议数据包推导并校验来源。由原始输入启动时，必须在 `[output.h5.restart]` 中提供 `topology_hash` 和 `atom_order_hash`；缺失时会在初始化阶段报错，而不会输出缺少来源信息的重启文件。

分片目录由写入器根据 `output_h5_trajectory_path` 内部生成，不是可配置的 mdin 参数。

`output_h5_trajectory_repair_policy = "complete_prefix"` 仅在 `output_h5_trajectory_vds = true` 时有效。它允许利用从起点开始连续完整的分片显式完成收尾，不会删除孤立分片文件。

## 旧版输出文件

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `mdout` | string | controller 默认值或 `default_out_file_prefix + ".out"` | 旧版标量输出文件 |
| `mdinfo` | string | controller 默认值或 `default_out_file_prefix + ".info"` | 旧版模拟信息／日志文件 |
| `crd` | string | - | 旧版二进制坐标轨迹，或 rerun 轨迹输入 |
| `vel` | string | - | 旧版二进制速度轨迹，或 rerun 速度输入 |
| `frc` | string | - | 旧版二进制力轨迹 |
| `box` | string | - | 旧版盒子信息轨迹，或 rerun 盒子输入 |
| `rst` | string | `SPONGE` 或 `default_out_file_prefix` | 旧版重启文件名前缀 |

启用任意标准 H5 输出后，旧版输出文件默认禁用。只有显式设置相应的旧版路径参数，才会写入对应文件。

## 输出频率控制

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `write_information_interval` | int | `1000` | mdinfo/mdout 写入间隔，单位为步 |
| `write_mdout_interval` | int | `1000` | mdout 写入间隔 |
| `write_trajectory_interval` | int | 与 `write_information_interval` 相同 | 轨迹写入间隔 |
| `write_restart_file_interval` | int | `step_limit` | 重启文件写入间隔 |
| `max_restart_export_count` | int | `1` | 轮换保留的重启文件数上限 |
| `buffer_frame` | int | `10` | 文件缓冲帧数，影响 I/O 性能 |

TOML mdin 中的 `[write.interval]` 分组支持 `information`、`trajectory`、`mdout` 和 `restart`/`restart_file`，作为对应 `write_*_interval` 参数的别名。

## 输出内容控制

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `print_zeroth_frame` | bool | `false` | 是否输出第零步帧 |
| `print_pressure` | bool | `false` | 是否向 `mdout` 追加压力和维里项 |

`mdout` 和 `mdinfo` 由 controller 管理。只有存在对应参数，或通过 `write_trajectory_interval` 启用默认坐标／盒子轨迹时，才会创建相关轨迹文件。在 H5 数据包模式下，标准数据存于 H5 输出文件，而不是这些旧版配套文件。

