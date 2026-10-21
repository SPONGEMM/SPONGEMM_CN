---
title: "输入参数参考"
description: "SPONGE 2.0 输入参数分类、说明与示例，译自主仓库文档。"
version: "SPONGE 2.0"
section: "SPONGE 2.0 文档"
order: 4
---

> 本页由 GPT-6-Astra 整理并翻译。SPONGE 2.0 正处于敏捷开发中，功能、参数和文档可能随版本变动；最新版本信息请参照 GitHub 仓库中的 [docs](https://github.com/SPONGEMM/SPONGE/tree/master/docs) 和 [skills](https://github.com/SPONGEMM/SPONGE/tree/master/skills) 文档。
>
> [本页对应的源文档快照](https://github.com/SPONGEMM/SPONGE/blob/317ae56b76da8d12816e9570ff7bd77a270ac48e/docs/input-reference/README.md)。

# 输入参数参考

SPONGE 会自动读取工作目录中的 `mdin.spg.toml`；若不存在，也会识别旧版 `mdin.txt`。可通过 `-mdin` 显式指定其他输入文件：

```bash
SPONGE -mdin mdin.spg.toml
```

## 参数分类

- [核心模拟参数](/docs/2p0/input-reference/core)：模拟模式、步数、时间步长和截断距离。
- [输入、输出与重启](/docs/2p0/input-reference/io)：输入文件、HDF5 数据、重启与输出控制。
- [恒温器](/docs/2p0/input-reference/thermostat)：恒温算法及参数。
- [恒压器](/docs/2p0/input-reference/barostat)：恒压算法及参数。
- [原子坐标限制](/docs/2p0/input-reference/restrain)：将原子限制在参考坐标附近。
- [约束算法](/docs/2p0/input-reference/constraint)：SETTLE / SHAKE。
- [邻居表](/docs/2p0/input-reference/neighbor-list)：邻居表配置。
- [PME 静电](/docs/2p0/input-reference/pme)：粒子网格 Ewald 方法。
- [集体变量（CV）](/docs/2p0/input-reference/collective-variables)：CV 定义与示例。
- [增强采样](/docs/2p0/input-reference/enhanced-sampling)：CV、MetaD、SITS。
- [SinkMeta](/docs/2p0/input-reference/sinkmeta)：`meta` / SinkMeta 详细参数。
- [高级参数](/docs/2p0/input-reference/advanced)：设备、墙限制、ReaxFF、插件等。

## 快速示例

### NVT

```toml
md_name = "NVT water"
mode = "nvt"
step_limit = 50000
dt = 0.002
cutoff = 8.0
default_in_file_prefix = "WAT"
constrain_mode = "SHAKE"
target_temperature = 300.0
write_information_interval = 1000

[thermostat]
mode = "middle_langevin"
tau = 0.1
seed = 2026
```

### NPT

```toml
md_name = "NPT water"
mode = "npt"
step_limit = 100000
dt = 0.002
cutoff = 8.0
default_in_file_prefix = "WAT"
constrain_mode = "SHAKE"
target_temperature = 300.0
target_pressure = 1.0
write_information_interval = 1000

[thermostat]
mode = "middle_langevin"
tau = 0.1
seed = 2026

[barostat]
mode = "andersen_barostat"
tau = 0.1
update_interval = 10
```

### 能量最小化

```toml
md_name = "minimization"
mode = "minimization"
step_limit = 1000
default_in_file_prefix = "system"
cutoff = 8.0
write_information_interval = 100
```

