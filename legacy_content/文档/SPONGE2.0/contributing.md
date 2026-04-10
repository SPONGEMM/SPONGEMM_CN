# 贡献指南

## 格式化工具

| 语言 | 工具 | 版本 | 配置 |
|----------|------|------|------|
| C++ | clang-format | 22.1.0 | `.clang-format` |
| Python | ruff format | 0.15.1 | `ruff.toml` |
| CMake | cmake-format | 0.6.13 | 默认配置 |

```bash
pixi run format
pixi run format-check
```

## 文件编码

C++ 源文件（`.cpp`, `.h`, `.hpp`）要求使用 UTF-8 with BOM。执行 `pixi run format` 时会自动补齐 BOM。

## C++ 风格

基于 Google 风格，并做以下调整：

- 4 空格缩进
- Allman 大括号风格
- 80 字符换行宽度

### 命名规则

| 元素 | 风格 | 示例 |
|---------|------|------|
| 结构体 | UPPER_CASE | `PAIRWISE_FORCE` |
| 方法 | PascalCase | `Compute_Force()` |
| 变量 | lower_case | `atom_numbers` |
| 常量 / 宏 | UPPER_CASE | `CHAR_LENGTH_MAX` |

文件和目录命名延续现有代码风格，新模块建议参考同级目录的命名方式。

### 核心抽象层

SPONGE 为了实现跨后端支持，使用了两层抽象：

**device_api**（`SPONGE/third_party/device_backend/`）  
统一 GPU / CPU 运行时接口：

```cpp
deviceMalloc(&ptr, size);
deviceMemcpy(dst, src, size, deviceMemcpyDeviceToHost);
Launch_Device_Kernel(kernel, grid, block, args...);
```

**LaneGroup**（`SPONGE/third_party/lane_group/`）  
统一 warp / SIMD lane 级操作：

```cpp
int width = LaneGroup::Width();
float sum = LaneGroup::Reduce_Sum(value);
LaneMask mask = LaneGroup::Ballot(pred);
```

建议：

- 并行代码优先使用 `LaneGroup`，不要直接写后端 intrinsic
- 设备内存和流操作优先使用 `device_api`
- 后端相关逻辑统一放在 `#ifdef USE_GPU` / `USE_CUDA` / `USE_HIP` 下

## Python 风格

- 80 字符换行宽度
- 双引号
- 空格缩进
- lint 检查 import 排序（isort）
- 函数 `snake_case`，类 `PascalCase`，常量 `UPPER_CASE`

## 提交流程

1. 编写代码
2. 运行 `pixi run format`
3. 运行 `pixi run format-check`
4. 提交代码

## 基准与验证

修改功能后，应运行相关验证或性能测试：

```bash
pixi run -e dev-cuda13 vali-thermostat
pixi run -e dev-cuda13 vali-barostat
pixi run -e dev-cuda13 vali-cv
pixi run -e dev-cuda13 vali-misc
pixi run -e dev-cuda13 perf-amber
pixi run -e dev-cuda13 perf-nonortho
```

如果新增 benchmark，建议保持 `benchmarks/` 目录中的现有组织方式。
