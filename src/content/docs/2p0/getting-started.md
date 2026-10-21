---
title: "安装与快速开始"
description: "SPONGE 2.0 安装与快速开始，译自主仓库文档。"
version: "SPONGE 2.0"
section: "SPONGE 2.0 文档"
order: 1
---

> 本页由 GPT-6-Astra 整理并翻译。SPONGE 2.0 正处于敏捷开发中，功能、参数和文档可能随版本变动；最新版本信息请参照 GitHub 仓库中的 [docs](https://github.com/SPONGEMM/SPONGE/tree/master/docs) 和 [skills](https://github.com/SPONGEMM/SPONGE/tree/master/skills) 文档。
>
> [本页对应的源文档快照](https://github.com/SPONGEMM/SPONGE/blob/317ae56b76da8d12816e9570ff7bd77a270ac48e/docs/getting-started.md)。

# 安装与快速开始

SPONGE（Simulation Package Toward Next GEneration of molecular modelling）是一款支持 GPU 加速的分子动力学模拟引擎，支持 CUDA、HIP（AMD GPU／海光 DCU）和多种 CPU SIMD 后端。

## 安装 Pixi

SPONGE 使用 [Pixi](https://pixi.sh) 管理依赖和构建流程。

### Linux / macOS

```bash
curl -fsSL https://pixi.sh/install.sh | bash
```

国内镜像：

```bash
curl -fsSL https://conda.spongemm.cn/pixi/install.sh | bash
```

### Windows

```powershell
powershell -ExecutionPolicy ByPass -c "irm https://pixi.sh/install.ps1 | iex"
```

国内镜像：

```powershell
powershell -ExecutionPolicy ByPass -c "irm https://conda.spongemm.cn/pixi/install.ps1 | iex"
```

## 安装预编译软件包

如果希望直接使用预编译的 SPONGE，请安装已发布的软件包，无需自行编译源码。

### 选择软件包

| 软件包 | 硬件 | 平台 |
|--------|------|------|
| `sponge-cuda13` | NVIDIA GPU（驱动 >= 570） | Linux x86_64、Windows x64 |
| `sponge-cuda12` | NVIDIA GPU（驱动 >= 525） | Linux x86_64、Windows x64 |
| `sponge-cpu` | 仅 CPU | Linux x86_64 / aarch64、Windows x64、macOS ARM64 |
| `sponge-cpu-mpi` | CPU + MPI | Linux x86_64 / aarch64 |

下面以 `sponge-cpu` 为例，请根据硬件替换为表中相应的软件包。

### 在 Pixi 项目中安装

创建 Pixi 项目，添加 SPONGE 软件源，然后将软件包安装到项目环境：

```bash
pixi init sponge-project
cd sponge-project
pixi project channel add https://conda.spongemm.cn
pixi add sponge-cpu
pixi run SPONGE -v
```

如果已经位于使用 `conda-forge` 的 Pixi 项目中，只需执行最后三条命令。

### 使用 Pixi 全局安装

如果需要在项目之外运行 SPONGE，可将其安装到 Pixi 管理的全局环境：

```bash
pixi global install \
  --channel https://conda.spongemm.cn \
  --channel conda-forge \
  sponge-cpu
SPONGE -v
```

## 可选：从源码构建

大多数用户可以直接安装上述预编译软件包。需要编译源码或配置开发环境时，请参阅[源码编译指南](/docs/2p0/build-guide)。

## 运行模拟

准备 TOML 输入文件 `mdin.spg.toml`：

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

根据安装方式选择运行命令。

全局安装：

```bash
SPONGE -mdin mdin.spg.toml
```

安装在 Pixi 项目中：

```bash
pixi run SPONGE -mdin mdin.spg.toml
```

在开发环境中从源码构建：

```bash
pixi run -e dev-cuda13 SPONGE -mdin mdin.spg.toml
```

也可以先进入开发环境：

```bash
pixi shell -e dev-cuda13
SPONGE -mdin mdin.spg.toml
```

## 运行基准测试

获取源码并安装开发环境后，可以运行以下基准测试任务：

```bash
pixi run -e dev-cuda13 perf-amber       # AMBER force field performance
pixi run -e dev-cuda13 perf-nonortho    # non-orthogonal box
pixi run -e dev-cuda13 vali-thermostat  # thermostat validation
pixi run -e dev-cuda13 vali-barostat    # barostat validation
```

## 下一步

- [源码编译指南](/docs/2p0/build-guide)：各平台的详细构建说明。
- [输入参数参考](/docs/2p0/input-reference)：完整的 TOML 输入参数说明。
- [开发与贡献指南](/docs/2p0/contributing)：代码风格及贡献流程。

