---
title: "SinkMeta"
description: "SPONGE 2.0 SinkMeta，译自主仓库文档。"
version: "SPONGE 2.0"
section: "SPONGE 2.0 文档"
order: 15
---

> 本页由 GPT-6-Astra 整理并翻译。SPONGE 2.0 正处于敏捷开发中，功能、参数和文档可能随版本变动；最新版本信息请参照 GitHub 仓库中的 [docs](https://github.com/SPONGEMM/SPONGE/tree/master/docs) 和 [skills](https://github.com/SPONGEMM/SPONGE/tree/master/skills) 文档。
>
> [本页对应的源文档快照](https://github.com/SPONGEMM/SPONGE/blob/317ae56b76da8d12816e9570ff7bd77a270ac48e/docs/input-reference/sinkmeta.md)。

# SinkMeta/meta 输入参数

本表根据 `SPONGE/bias/sinkmeta/config/config.cpp` 中的 `META::Initial()` 和 `SPONGE/bias/sinkmeta/meta.h` 中的默认值整理。

## `meta` 模块参数

| 参数 | 类型／形状 | 是否必需 | 默认值 | 含义与说明 |
|------|------------|----------|--------|------------|
| `CV` | string list | 是 | 无 | Meta 使用的 CV 模块名，决定维数；缺失时不初始化 META |
| `dip` | float | 否 | `0.0` | submarine/sink 行为的额外下沉项，通过 `kB*T` 加入偏置平移 |
| `welltemp_factor` | float | 否 | `1e9` | Well-tempered 偏置因子；大于 1 时启用 well-tempered 模式 |
| `Ndim` | int | 否 | `CV` 数量 | 显式维数，必须与 `CV` 列表长度一致 |
| `subhill` | flag | 否 | `false` | 启用 sub-hill（高斯）行为；只判断参数是否存在，不读取值 |
| `kde` | int | 否 | `0` | 非零时启用 KDE，并设置 `subhill=true`；同时将 sigma 缩放改为 `1.414/sigma` |
| `mask` | int | 否 | `0` | 启用 mask 模式，即 n 维区域的退出标记 |
| `maxforce` | float | 否 | `0.1` | 退出标记的边缘力判据，仅设置 `mask` 时读取 |
| `sink` | int | 否 | `0` | 非零时启用负高斯丘（sink/submarine）行为 |
| `sumhill_freq` | int | 否 | `0` | `sumhill` 累积的历史记录频率，影响 Rbias/RCT |
| `convmeta` | int | 否 | `0` | ConvolutionMeta 标志，同时设置 `do_negative=true` |
| `grw` | int | 否 | `0` | GRW 标志，同时设置 `do_negative=true` |
| `CV_period` | float array（ndim） | 是 | META 中无默认值 | 每个 CV 的周期盒长，`META::Initial()` 始终请求此参数 |
| `CV_sigma` | float array（ndim） | 是 | META 中无默认值 | 每个 CV 的高斯宽度，必须大于 0；内部保存为 sigma 的倒数 |
| `cutoff` | float array（ndim） | 否 | `3 * CV_sigma` | 查找和边界墙所用的邻居截断距离；设置后启用 `do_cutoff` |
| `potential_in_file` | string | 否 | 无 | 从文件读取势；设置后调用 `Read_Potential()`，跳过下方网格／散点设置 |
| `scatter_in_file` | string | 否 | 无 | 读取散点势文件，设置 `use_scatter=true`、`usegrid=false`，并调用 `Read_Potential()` |
| `edge_in_file` | string | 否 | `sumhill.log` | `EdgeEffect()` 使用的边缘效应缓存文件；文件存在且网格大小匹配时直接读取，否则重新生成并写入同一路径 |
| `scatter` | int | 否 | `0` | 散点数；大于 0 时使用散点而非网格 |
| `CV_minimal` | float array（ndim） | 视条件而定 | META 中无默认值 | 每个 CV 的网格最小值；不使用 `potential_in_file` 或 `scatter_in_file` 时必填 |
| `CV_maximum` | float array（ndim） | 视条件而定 | META 中无默认值 | 每个 CV 的网格最大值，必须大于 `CV_minimal`；不使用 `potential_in_file` 或 `scatter_in_file` 时必填 |
| `CV_grid` | int array（ndim） | 视条件而定 | META 中无默认值 | 每个 CV 的网格点数，必须大于 1；不使用 `potential_in_file` 或 `scatter_in_file` 时必填 |
| `height` | float | 否 | `1.0` | 初始高斯丘高度 `height_0` |
| `wall_height` | float | 否 | 无 | 启用边界墙并设置 `border_potential_height` |
| `potential_out_file` | string | 否 | `Meta_Potential.txt` | 势的输出文件名 |
| `potential_update_interval` | int | 否 | `write_information_interval` 或 `1000` | 势的写出步数间隔；小于等于 0 时强制设为 1000 |

## 使用的其他模块／全局参数

| 参数 | 所属位置 | 类型／形状 | 是否必需 | 默认值 | 含义与说明 |
|------|----------|------------|----------|--------|------------|
| `CV_point` | 各 CV 模块 | float array（散点数） | 视条件而定 | META 中无默认值 | 每个 CV 的散点坐标，仅 `scatter > 0` 时读取 |
| `write_information_interval` | Controller | int | 否 | `1000` | 全局输出间隔，作为 `potential_update_interval` 的默认值 |

## 说明

- 同时提供 `potential_in_file` 和 `scatter_in_file` 时，前者优先，源码使用 `if/else if`。
- `CV_sigma` 在内部取倒数；`kde` 模式使用 `1.414 / sigma`，其他情况使用 `1.0 / sigma`。
- 源码中的 `read_potential_file_name` 和 `write_potential_file_name` 初始值均为 `Meta_Potential.txt`。

