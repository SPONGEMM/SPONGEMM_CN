---
title: "开发与贡献指南"
description: "SPONGE 2.0 开发与贡献指南，译自主仓库文档。"
version: "SPONGE 2.0"
section: "SPONGE 2.0 文档"
order: 3
---

> 本页由 GPT-6-Astra 整理并翻译。SPONGE 2.0 正处于敏捷开发中，功能、参数和文档可能随版本变动；最新版本信息请参照 GitHub 仓库中的 [docs](https://github.com/SPONGEMM/SPONGE/tree/master/docs) 和 [skills](https://github.com/SPONGEMM/SPONGE/tree/master/skills) 文档。
>
> [本页对应的源文档快照](https://github.com/SPONGEMM/SPONGE/blob/317ae56b76da8d12816e9570ff7bd77a270ac48e/docs/contributing.md)。

# 开发与贡献指南

## 贡献者许可协议

合并贡献之前，对该贡献拥有权利的每个个人或组织都必须明确接受 [SPONGE 贡献者许可协议](https://github.com/SPONGEMM/SPONGE/blob/317ae56b76da8d12816e9570ff7bd77a270ac48e/CLA.md)。协议以英文版为准，中文译文见 [`CLA-zh-CN.md`](https://github.com/SPONGEMM/SPONGE/blob/317ae56b76da8d12816e9570ff7bd77a270ac48e/CLA-zh-CN.md)。

贡献者必须在 PR 中披露所有第三方材料及其许可条款。维护者须在合并前记录贡献者接受协议的情况。

## 格式化工具

| 语言 | 工具 | 版本 | 配置 |
|------|------|------|------|
| C++ | clang-format | 22.1.0 | `.clang-format` |
| Python | ruff format | 0.15.1 | `ruff.toml` |
| CMake | cmake-format | 0.6.13 | 默认配置 |

```bash
pixi run format        # auto-fix all files
pixi run format-check  # check only
```

## 文件编码

C++ 源文件（`.cpp`、`.h`、`.hpp`）必须使用 UTF-8 with BOM。`pixi run format` 会自动添加 BOM。

## C++ 风格

以 Google 风格为基础，作如下调整：

- 使用 4 个空格缩进。
- 使用 Allman 大括号风格，左大括号独占一行。
- 每行最多 80 个字符。

### 命名约定

| 对象 | 风格 | 示例 |
|------|------|------|
| 结构体 | UPPER_CASE | `PAIRWISE_FORCE` |
| 方法 | PascalCase | `Compute_Force()` |
| 变量 | lower_case | `atom_numbers` |
| 常量／宏 | UPPER_CASE | `CHAR_LENGTH_MAX` |

文件和目录沿用已有命名约定。新增模块时，请参考同级目录的命名风格。

### 核心抽象

SPONGE 使用两层抽象编写跨后端代码：

**device_api**（`SPONGE/third_party/device_backend/`）：统一的 GPU/CPU 运行时接口。

```cpp
// Use unified interface; do not call cudaMalloc / hipMalloc directly
deviceMalloc(&ptr, size);
deviceMemcpy(dst, src, size, deviceMemcpyDeviceToHost);
Launch_Device_Kernel(kernel, grid, block, args...);
```

**LaneGroup**（`SPONGE/third_party/lane_group/`）：统一的 warp/SIMD 通道级操作。

```cpp
// Use LaneGroup interface; do not write __shfl_sync or SIMD intrinsics directly
int width = LaneGroup::Width();            // CUDA: 32, AVX: 8, SSE: 4
float sum = LaneGroup::Reduce_Sum(value);  // warp/vector reduction
LaneMask mask = LaneGroup::Ballot(pred);   // predicate ballot
```

基本要求：

- 并行代码使用 `LaneGroup`，不要直接编写后端专用内建指令。
- 设备内存和流操作使用 `device_api` 宏。
- 使用 `#ifdef USE_GPU` / `USE_CUDA` / `USE_HIP` 隔离后端专用逻辑。

## Python 风格

- 每行最多 80 个字符，使用双引号和空格缩进。
- Lint 仅检查导入排序（isort）。
- 函数使用 `snake_case`，类使用 `PascalCase`，常量使用 `UPPER_CASE`。

## 提交流程

1. 编写代码。
2. 运行 `pixi run format` 修复格式。
3. 运行 `pixi run format-check` 检查。
4. 提交代码。

## 基准测试

新增或修改功能后，运行相关基准测试：

```bash
pixi run -e dev-cuda13 vali-thermostat   # thermostat validation
pixi run -e dev-cuda13 vali-barostat     # barostat validation
pixi run -e dev-cuda13 vali-cv           # collective variable validation
pixi run -e dev-cuda13 vali-misc         # miscellaneous validation
pixi run -e dev-cuda13 perf-amber        # AMBER performance
pixi run -e dev-cuda13 perf-nonortho     # non-orthogonal box
```

新增基准测试时，请遵循 `benchmarks/` 目录的现有组织方式。

