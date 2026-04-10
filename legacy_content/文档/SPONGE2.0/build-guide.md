# 构建指南

## 构建流程

```bash
pixi install -e <env>
pixi run -e <env> configure
pixi run -e <env> compile
```

编译后的可执行文件会安装到 `$CONDA_PREFIX/bin/SPONGE`，构建产物则位于 `build-<env>` 目录。

## 环境说明

| 环境 | 用途 | 并行后端 |
|-------------|------|-------------|
| `dev-cuda13` | CUDA 13 开发环境（推荐） | CUDA |
| `dev-cuda12` | CUDA 12 开发环境 | CUDA |
| `dev-hip` | AMD GPU / 海光 DCU 开发环境 | HIP |
| `dev-cpu` | CPU 开发环境 | 默认 `none`，可手动指定 SIMD |
| `dev-cpu-mpi` | CPU + MPI 开发环境 | 默认 `none` + MPI，可手动指定 SIMD |
| `cuda13` / `cuda12` / `hip` / `cpu` / `cpu-mpi` | 仅构建环境（不含开发工具） | 对应后端 |

`dev-*` 环境会附带开发工具，如 python、pytest、clang-format、ruff 等。基准测试和格式化任务只在 `dev-*` 环境中提供。

## CUDA 构建

```bash
pixi run -e dev-cuda13 configure
pixi run -e dev-cuda13 compile
```

pixi 会自动安装 `cuda-nvcc`、`libcufft-dev`、`libcublas-dev` 等 CUDA 依赖。

默认使用 4 线程并行编译，可通过位置参数调整：

```bash
pixi run -e dev-cuda13 compile 8
```

## HIP 构建

```bash
pixi run -e dev-hip configure
pixi run -e dev-hip compile
```

> 注意：pixi 不负责安装 HIP/ROCm SDK。你需要先在系统中完成安装，例如通过 `apt install`、官方 ROCm 仓库或 `module load`。CMake 会通过 PATH 中的 `hipcc` / `hipconfig` 检测 HIP 环境。

## CPU 构建

```bash
pixi run -e dev-cpu configure
pixi run -e dev-cpu configure avx2
pixi run -e dev-cpu compile
```

可用的 SIMD 后端：

| x86_64 | ARM |
|--------|-----|
| `avx512`, `avx2`, `avx`, `sse42` | `sve2`, `sve`, `neon` |

## CPU + MPI 构建

```bash
pixi run -e dev-cpu-mpi configure
pixi run -e dev-cpu-mpi compile
```

该环境会自动加入 `-DMPI=ON` 以及 MPI 编译器配置。

## 平台差异

| 平台 | 编译器 | 数学库 | 说明 |
|----------|----------|-------------|------|
| Linux x86_64 | GCC 11（conda） | MKL | CUDA + MPI 需要 NCCL |
| Linux aarch64 | GCC 11（conda） | OpenBLAS + FFTW | 支持 SVE/NEON |
| Windows x64 | MSVC (vs2022) | MKL | 可能需要先执行 `pixi run install-msvc` |
| macOS ARM | Clang 22.1 | OpenBLAS + FFTW | 仅支持 CPU 后端 |

## 全局编译设置

以下设置在 `cmake/utils/common.cmake` 中固定：

- C++ 标准：C++17
- 构建类型：Release
- 快速数学：`-ffast-math` / `/fp:fast` / `--use_fast_math`
- OpenMP：默认启用

## 代码格式化

```bash
pixi run -e dev-cuda13 format
pixi run -e dev-cuda13 format-check
```

更多内容见 [贡献指南](/文档/SPONGE2.0/contributing/)。

## 打包

```bash
pixi run -e dev-cuda13 package-conda
```

会在 `packaging/outputs/` 中生成 `.conda` 包。

## 常见问题

### configure 找不到 CUDA

请确认你使用的是 CUDA 环境（`dev-cuda12` 或 `dev-cuda13`），不要在 CPU 环境中手动指定 `-DPARALLEL=cuda`。

### nvcc 报出 "incompatible redefinition for option compiler-bindir"

这是 conda 环境下已知的警告，不影响构建，可忽略。

### 误用了系统编译器或系统库

如果 pixi 已经提供所需依赖，可使用 `pixi install -e <env> --clean-envs` 重建干净环境。若依赖外部工具链（例如 Windows 的 MSVC 或 HIP/ROCm），则需要先手动设置环境变量。

### format 报告缺少 BOM

C++ 文件要求使用 UTF-8 with BOM。运行 `pixi run format` 可自动修复。

### 清理构建目录

```bash
rm -rf build-dev-cuda13
rm -rf build-*
```
