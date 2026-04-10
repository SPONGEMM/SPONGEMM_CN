# 快速开始

SPONGE（Simulation Package Toward Next GEneration of molecular modelling）是一套分子动力学模拟引擎，支持 CUDA、HIP（AMD GPU / 海光 DCU）以及多种 CPU SIMD 后端。

## 安装 pixi

SPONGE 使用 [pixi](https://pixi.sh) 管理依赖和构建流程。

### Linux / macOS

```bash
curl -fsSL https://pixi.sh/install.sh | bash
```

中国镜像：

```bash
curl -fsSL https://conda.spongemm.cn/pixi/install.sh | bash
```

### Windows

```powershell
powershell -ExecutionPolicy ByPass -c "irm https://pixi.sh/install.ps1 | iex"
```

中国镜像：

```powershell
powershell -ExecutionPolicy ByPass -c "irm https://conda.spongemm.cn/pixi/install.ps1 | iex"
```

## 从二进制包安装

如果你希望直接使用预编译好的 SPONGE，可安装已经发布的二进制包，而不必从源码构建。

### 选择合适的软件包

| 软件包 | 硬件 | 平台 |
|---------|------|------|
| `sponge-cuda13` | NVIDIA GPU（驱动 >= 570） | Linux x86_64, Windows x64 |
| `sponge-cuda12` | NVIDIA GPU（驱动 >= 525） | Linux x86_64, Windows x64 |
| `sponge-cpu` | 仅 CPU | Linux x86_64 / aarch64, Windows x64, macOS ARM64 |
| `sponge-cpu-mpi` | CPU + MPI | Linux x86_64 / aarch64 |

### 使用 pixi global 安装

```bash
pixi project channel add https://conda.spongemm.cn
pixi add sponge-xxx
```

## 构建 SPONGE

### 选择环境

根据你的硬件选择合适的构建环境：

| 环境 | 硬件 |
|-------------|------|
| `dev-cuda13` | NVIDIA GPU（推荐） |
| `dev-cuda12` | NVIDIA GPU（旧驱动） |
| `dev-hip` | AMD GPU / 海光 DCU（要求系统已安装 HIP/ROCm） |
| `dev-cpu` | CPU |
| `dev-cpu-mpi` | CPU + MPI |

### 编译

```bash
pixi install -e dev-cuda13
pixi run -e dev-cuda13 configure
pixi run -e dev-cuda13 compile
```

构建完成后，`SPONGE` 可执行文件会被安装到对应的 pixi 环境中。

### 验证

```bash
pixi run -e dev-cuda13 which SPONGE
pixi run -e dev-cuda13 SPONGE --help
```

## 运行模拟

准备一个 TOML 输入文件 `mdin.spg.toml`：

```toml
md_name = "NVT water"
mode = "nvt"
step_limit = 50000
dt = 0.002
cutoff = 8.0
default_in_file_prefix = "WAT"
constrain_mode = "SHAKE"
thermostat = "middle_langevin"
thermostat_tau = 0.1
thermostat_seed = 2026
target_temperature = 300.0
write_information_interval = 1000
```

运行：

```bash
pixi run -e dev-cuda13 SPONGE -mdin mdin.spg.toml
```

或者先进入环境：

```bash
pixi shell -e dev-cuda13
SPONGE -mdin mdin.spg.toml
```

## 运行基准与验证

```bash
pixi run -e dev-cuda13 perf-amber
pixi run -e dev-cuda13 perf-nonortho
pixi run -e dev-cuda13 vali-thermostat
pixi run -e dev-cuda13 vali-barostat
```

## 下一步

- [构建指南](/文档/SPONGE2.0/build-guide/) — 更完整的多平台构建说明
- [输入参考](/文档/SPONGE2.0/input-reference/) — 完整的 TOML 输入参数文档
- [贡献指南](/文档/SPONGE2.0/contributing/) — 代码风格与贡献流程
