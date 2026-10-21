---
title: "源码编译指南"
description: "SPONGE 2.0 源码编译指南，译自主仓库文档。"
version: "SPONGE 2.0"
section: "SPONGE 2.0 文档"
order: 2
---

> 本页由 GPT-6-Astra 整理并翻译。SPONGE 2.0 正处于敏捷开发中，功能、参数和文档可能随版本变动；最新版本信息请参照 GitHub 仓库中的 [docs](https://github.com/SPONGEMM/SPONGE/tree/master/docs) 和 [skills](https://github.com/SPONGEMM/SPONGE/tree/master/skills) 文档。
>
> [本页对应的源文档快照](https://github.com/SPONGEMM/SPONGE/blob/317ae56b76da8d12816e9570ff7bd77a270ac48e/docs/build-guide.md)。

# 源码编译指南

## 构建流程

```bash
pixi install -e <env>             # install dependencies
pixi run -e <env> configure       # CMake configure
pixi run -e <env> compile         # build and install into the environment
```

可执行文件安装到 `$CONDA_PREFIX/bin/SPONGE`，构建产物放在 `build-<env>` 中。

## 环境选择

| 环境 | 用途 | 并行后端 |
|------|------|----------|
| `dev-cuda13` | CUDA 13 开发（推荐） | CUDA |
| `dev-cuda12` | CUDA 12 开发 | CUDA |
| `dev-hip` | AMD GPU／海光 DCU 开发 | HIP |
| `dev-cpu` | CPU 开发 | 默认为 `none`，可手动指定 SIMD |
| `dev-cpu-mpi` | CPU + MPI 开发 | 默认为 `none` + MPI，可手动指定 SIMD |
| `cuda13` / `cuda12` / `hip` / `cpu` / `cpu-mpi` | 仅构建，不含开发工具 | 对应后端 |

`dev-*` 环境包含 Python、pytest、clang-format、ruff 等开发工具。基准测试和格式化任务仅在这些环境中提供。

## CUDA 构建

```bash
pixi run -e dev-cuda13 configure
pixi run -e dev-cuda13 compile
```

Pixi 会自动安装 `cuda-nvcc`、`libcufft-dev`、`libcublas-dev` 等 CUDA 依赖。

默认使用 4 个线程并行编译，可通过位置参数调整：

```bash
pixi run -e dev-cuda13 compile 8     # 8 threads
```

## HIP 构建

```bash
pixi run -e dev-hip configure
pixi run -e dev-hip compile
```

> **注意：** Pixi 不会安装 HIP/ROCm SDK。请提前通过系统包管理器（如 `apt install`）、ROCm 官方软件源或 `module load` 配置好 SDK。CMake 通过系统 PATH 中的 `hipcc` / `hipconfig` 检测 HIP 环境。

## CPU 构建

```bash
pixi run -e dev-cpu configure          # defaults to no SIMD
pixi run -e dev-cpu configure avx2     # specify AVX2
pixi run -e dev-cpu compile
```

可用的 SIMD 后端：

| x86_64 | ARM |
|--------|-----|
| `avx512`、`avx2`、`avx`、`sse42` | `sve2`、`sve`、`neon` |

## CPU + MPI 构建

```bash
pixi run -e dev-cpu-mpi configure
pixi run -e dev-cpu-mpi compile
```

此环境会自动添加 `-DMPI=ON` 及 MPI 编译器配置。

## 平台差异

| 平台 | 编译器 | 数学库 | 说明 |
|------|--------|--------|------|
| Linux x86_64 | GCC 11（conda） | MKL | CUDA + MPI 需要 NCCL |
| Linux aarch64 | GCC 11（conda） | OpenBLAS + FFTW | 支持 SVE/NEON |
| Windows x64 CPU | Intel oneAPI 2026.1.1 `icx-cl` | MKL | 需要 VS 2022 C++ Build Tools 14.44+ 和 Windows SDK |
| Windows x64 CUDA | NVCC + MSVC（vs2022） | CUDA 库 | 可能需要先运行 `pixi run install-msvc` |
| macOS ARM | Clang 22.1 | OpenBLAS + FFTW | 仅支持 CPU 后端 |

Windows CPU 构建使用 Intel oneAPI `icx-cl` 编译 C 和 C++。`pixi run -e dev-cpu configure` 会在 `tools/oneapi` 中自动安装锁定版本的编译器环境；Intel 软件包与项目的 LLVM JIT 依赖分开管理。本地构建和 CI 使用相同入口。

VS C++ Build Tools 和 Windows SDK 需要以管理员权限单独安装；`vs2022_win-64` 包仅负责激活已有安装。头文件和导入库需要 VS 2022 C++ 工具集 14.44 或更新版本：预编译 LLVM 22 库依赖较新的 STL 符号，14.39 无法提供。仅更新可再发行运行库不会更新这些构建时库。

CUDA 环境仍使用 MSVC 作为 NVCC 的主机编译器。Windows CPU 任务使用独立的 `build-<environment>-oneapi` 目录，不复用已有的 MSVC/Clang 构建缓存。

单元测试依次运行 `pixi run -e dev-cpu configure-tests`、`pixi run -e dev-cpu compile` 和 `pixi run -e dev-cpu test`；安装后可运行常规基准测试任务。若要在 PowerShell 中启用可选的 HDF5 运行时测试，请在运行 `test` 前设置 `$env:SPONGE_H5_ENABLE_RUNTIME_SMOKE = "1"`。Windows CPU CI 使用两个 OpenMP/MKL 线程运行这些测试。

运行时软件包包含提供 Intel 数学函数的 `intel-cmplr-lib-rt`；OpenMP 使用 conda-forge 的 `llvm-openmp` 兼容 DLL，并与 MKL 共用。安装预编译软件包的最终用户不需要编译器环境。

## 全局编译设置

以下设置固定在 `cmake/utils/common.cmake` 中：

- C++ 标准：C++17。
- 构建类型：Release。
- 快速数学选项：`-ffast-math` / `/fp:fast` / `--use_fast_math`。
- OpenMP：始终启用。

## 格式化

```bash
pixi run -e dev-cuda13 format        # auto-fix
pixi run -e dev-cuda13 format-check  # check only
```

详见[开发与贡献指南](/docs/2p0/contributing)。

## 打包

```bash
pixi run -e dev-cuda13 package-conda
```

生成的 `.conda` 软件包位于 `packaging/outputs/`。

## 常见问题

### configure 找不到 CUDA

确认使用的是 CUDA 环境（`dev-cuda12` 或 `dev-cuda13`）。不要在 CPU 环境中指定 `-DPARALLEL=cuda`。

### nvcc 提示 “incompatible redefinition for option compiler-bindir”

这是 conda 环境下的已知警告，不影响构建，可以忽略。

### 错误地选用了系统编译器或库

当所有依赖均由 Pixi 提供时，可运行 `pixi install -e <env> --clean-envs` 重建干净环境。但如果依赖外部工具链（Windows 上的 MSVC、HIP/ROCm），需要先自行配置环境变量，再运行 Pixi。

### format 提示缺少 BOM

C++ 文件要求 UTF-8 with BOM 编码。运行 `pixi run format` 可自动修复。

### 清理构建目录

```bash
rm -rf build-dev-cuda13   # clean a specific environment
rm -rf build-*            # clean all
```

