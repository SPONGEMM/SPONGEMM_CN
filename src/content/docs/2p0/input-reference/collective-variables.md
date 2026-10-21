---
title: "集体变量（CV）"
description: "SPONGE 2.0 集体变量（CV），译自主仓库文档。"
version: "SPONGE 2.0"
section: "SPONGE 2.0 文档"
order: 13
---

> 本页由 GPT-6-Astra 整理并翻译。SPONGE 2.0 正处于敏捷开发中，功能、参数和文档可能随版本变动；最新版本信息请参照 GitHub 仓库中的 [docs](https://github.com/SPONGEMM/SPONGE/tree/master/docs) 和 [skills](https://github.com/SPONGEMM/SPONGE/tree/master/skills) 文档。
>
> [本页对应的源文档快照](https://github.com/SPONGEMM/SPONGE/blob/317ae56b76da8d12816e9570ff7bd77a270ac48e/docs/input-reference/collective-variables.md)。

# 集体变量（CV）指南

SPONGE 从 `mdin.spg.toml` 中的 `cv_in_file` 加载集体变量（CV）定义。

```toml
cv_in_file = "cv.toml"
```

未设置 `cv_in_file` 时，不初始化 CV 控制器。

## 支持的文件格式

推荐使用 TOML 编写 CV 文件。`cv_in_file` 指向的文件可以是：

- TOML 文件。
- 旧版分块式文本文件。

两者都会展平到同一个内部命令命名空间，但新文档和新输入文件应采用 TOML。

### 推荐的 TOML 格式

```toml
[print]
CV = ["phi", "psi"]

[phi]
CV_type = "dihedral"
atom = [4, 6, 8, 14]

[psi]
CV_type = "dihedral"
atom = [6, 8, 14, 16]
```

### 旧版分块格式

为兼容已有算例，仍支持旧版分块格式：

```text
print
{
    CV = phi psi
}
phi
{
    CV_type = dihedral
    atom = 4 6 8 14
}
psi
{
    CV_type = dihedral
    atom = 6 8 14 16
}
```

## 基本流程

1. 在 `mdin.spg.toml` 中设置 `cv_in_file`。
2. 在 CV 文件中定义一个或多个 CV 模块。
3. 在 `print`、`meta`、`steer`、`restrain` 或其他使用 CV 名称的模块中引用它们。
4. 运行 SPONGE，在 `mdout` 中查看对应输出列。

本页介绍的是 CV 侧的 `restrain`，不同于[原子坐标限制模块](/docs/2p0/input-reference/restrain)。

## 定义 CV

每个 CV 在一个命名模块中定义，其他分组通过该模块名引用它。

```toml
[distance]
CV_type = "distance"
atom = [4, 6]
```

在此示例中：

- `distance` 是 CV 模块名称。
- `CV_type = distance` 选择具体实现。
- `atom = 4 6` 提供所需原子索引。

## 内置 CV 类型

| `CV_type` | 含义 | 必需参数 |
|-------------|------|----------|
| `position_x`、`position_y`、`position_z` | 单个原子的笛卡尔坐标 | `atom`（1 个原子） |
| `scaled_position_x`、`scaled_position_y`、`scaled_position_z` | 单个原子的分数坐标 | `atom`（1 个原子） |
| `box_length_x`、`box_length_y`、`box_length_z` | 沿某个晶胞轴的盒长 | 无 |
| `distance` | 两原子间距离 | `atom`（2 个原子） |
| `displacement_x`、`displacement_y`、`displacement_z` | 两原子间周期性位移的分量 | `atom`（2 个原子） |
| `angle` | 三原子形成的角度 | `atom`（3 个原子） |
| `dihedral` | 四原子形成的二面角 | `atom`（4 个原子） |
| `combination` | 其他 CV 的代数组合 | `CV`、`function` |
| `tabulated` | 通过四阶 B 样条插值对另一 CV 作表格映射 | `CV`、`min`、`max`、`parameter` |
| `rmsd` | 相对于参考结构的 RMSD | `atom` 或 `atom_in_file`；`coordinate` 或 `coordinate_in_file` |

## RMSD CV

`rmsd` 计算所选原子集合与参考坐标集合之间的 RMSD。

原子列表和参考坐标可以用 `Xponge maskgen` 生成。

```toml
[rmsd_ala]
CV_type = "rmsd"
atom_in_file = "rmsd_atoms.txt"
coordinate_in_file = "rmsd_ref.txt"
rotate = true
```

`rotate = true` 表示在计算 RMSD 前进行最优旋转对齐。

| 参数 | 类型 | 说明 |
|------|------|------|
| `atom` | int list | 原子列表 |
| `atom_in_file` | file | 原子列表文件 |
| `coordinate` | float list | 参考坐标 |
| `coordinate_in_file` | file | 参考坐标文件 |
| `rotate` | bool | 是否在计算 RMSD 前对齐参考结构 |

## 组合 CV

`combination` 通过 JIT 编译的表达式，将一个或多个 CV 组合为新的值。

示例：

```toml
[lx]
CV_type = "box_length_x"

[ly]
CV_type = "box_length_y"

[lz]
CV_type = "box_length_z"

[example_CV]
CV_type = "combination"
CV = ["lx", "ly", "lz"]
function = "lx * ly * lz"
```

`function` 中使用的名称必须与 `CV` 列表中的名称一致。

表达式中的浮点字面量推荐使用 `1.0f` 等单精度后缀。如果表达式按浮点表达式编译却直接使用整数字面量，JIT 编译器可能失败。

| 参数 | 类型 | 说明 |
|------|------|------|
| `CV` | CV list | 参与组合的 CV |
| `function` | string | 组合表达式 |

支持的运算符和函数：

| 含义 | 语法 | 含义 | 语法 |
|------|------|------|------|
| `a + b` | `a + b` | `a - b` | `a - b` |
| `a * b` | `a * b` | `a / b` | `a / b` |
| `a` 的 `b` 次幂 | `powf(a)(b)` | `a` 的自然对数 | `logf(a)` |
| `exp(a)` | `expf(a)` | 互补误差函数 | `erfcf(a)` |
| `a` 的平方根 | `sqrtf(a)` | `a` 的余弦 | `cosf(a)` |
| `a` 的正弦 | `sinf(a)` | `a` 的正切 | `tanf(a)` |
| `a` 的反余弦 | `acosf(a)` | `a` 的反正弦 | `asinf(a)` |
| `a` 的反正切 | `atanf(a)` | `a` 的绝对值 | `fabsf(a)` |
| `a`、`b` 中的较大值 | `fmaxf(a)(b)` | `a`、`b` 中的较小值 | `fminf(a)(b)` |

## 表格映射 CV

`tabulated` 将另一 CV 通过表格映射为新值，中间值使用四阶 B 样条插值。

示例：

```toml
[lx]
CV_type = "box_length_x"

[example_CV]
CV_type = "tabulated"
CV = "lx"
min = 0.0
max = 100.0
parameter = [1.0, 4.0, 0.2, 7.0, 9.1, -11.0]
min_padding = 1.1
max_padding = 7.7
```

示例对应下表：

| CV 值 | -60 | -40 | -20 | 0 | 20 | 40 | 60 | 80 | 100 | 120 | 140 | 160 |
|-------|-----|-----|-----|---|----|----|----|----|-----|-----|-----|-----|
| 映射值 | 1.1 | 1.1 | 1.1 | 1.0 | 4.0 | 0.2 | 7.0 | 9.1 | -11.0 | 7.7 | 7.7 | 7.7 |

| 参数 | 类型 | 说明 |
|------|------|------|
| `CV` | CV | 待插值的 CV |
| `min` | float | CV 最小值 |
| `max` | float | CV 最大值 |
| `parameter` | float list | 表格中的映射值 |
| `parameter_in_file` | file | 保存映射值的文件 |
| `min_padding` | float | 低于 `min` 的填充值，仅用于插值 |
| `max_padding` | float | 高于 `max` 的填充值，仅用于插值 |

## CV 文件中的虚拟原子

CV 文件可以定义局部虚拟原子，再在后续 CV 中复用。例如，Metadynamics 中基于质心的 CV 可使用此方式。

```toml
[ML]
vatom_type = "center_of_mass"
atom_in_file = "ligand.list"

[cx]
CV_type = "position_x"
atom = "ML"
```

这里的 `ML` 不是 CV，而是一个命名虚拟原子，可以出现在通常填写原子索引的位置。

## 输出 CV 值

使用 `print` 模块，将 CV 值追加到 SPONGE 的逐步输出：

```toml
[print]
CV = ["phi", "psi"]
```

每个 CV 的输出列名就是其模块名，应避免与内置输出列重名。

| 参数 | 类型 | 说明 |
|------|------|------|
| `CV` | CV list | 需要输出的 CV |

## Restrain 限制势

`restrain` 施加谐和偏置势：

$$
U_{\rm bias} = \sum_{CV}{\rm weight} * (CV - {\rm reference})^2
$$

限制权重可以随模拟步数变化。

若 `start_step` 和 `max_step` 非零，而 `reduce_step` 和 `stop_step` 为零，权重从 0 线性增加到 `weight`。

```text
           Harmonic weight
                ↑
          weight|         +-------------
                |        /
                |       /
                |      /
                0-----+---+------------>simulation step
                   start max
```

若 `start_step` 和 `max_step` 为零，而 `reduce_step` 和 `stop_step` 非零，权重先保持为 `weight`，再线性减小到 0。

```text
           Harmonic weight
                ↑
          weight|----------------+
                |                 \
                |                  \
                |                   \
                0---------------+----+-->simulation step
                             reduce stop
```

四个步数参数均非零时，权重先增加，再保持最大值，最后减小。

```text
           Harmonic weight
                ↑
          weight|         +------+
                |        /        \
                |       /          \
                |      /            \
                0-----+---+-----+----+-->simulation step
                   start max reduce stop
```

| 参数 | 类型 | 说明 |
|------|------|------|
| `CV` | CV list | 需要限制的 CV |
| `weight` | float list | 偏置权重 |
| `reference` | float list | 参考值 |
| `period` | float list | CV 周期 |
| `start_step` | int list | `weight` 开始线性增加的步数 |
| `max_step` | int list | `weight` 达到最大值的步数 |
| `reduce_step` | int list | `weight` 开始线性减小的步数 |
| `stop_step` | int list | `weight` 变为 0 的步数 |

## Steer 线性偏置

`steer` 施加线性偏置势：

$$
U_{\rm bias} = \sum_{CV} {\rm weight} * CV
$$

| 参数 | 类型 | 说明 |
|------|------|------|
| `CV` | CV list | 施加偏置的 CV |
| `weight` | float list | 偏置权重 |

## 典型示例

### 用于 SITS 或分析的二面角 CV

```toml
[print]
CV = ["phi", "psi"]

[phi]
CV_type = "dihedral"
atom = [4, 6, 8, 14]

[psi]
CV_type = "dihedral"
atom = [6, 8, 14, 16]
```

## 与增强采样模块的关系

- `cv_in_file` 仅告诉 SPONGE 从哪里读取 CV 定义。
- `meta` 引用 CV 名称，并添加 `CV_sigma`、`CV_grid`、`CV_period` 等 Metadynamics 专用参数。
- SITS 也使用 CV 名称，但其控制参数位于 `mdin.spg.toml`。

逐项参数说明见[增强采样参数](/docs/2p0/input-reference/enhanced-sampling)和 [SinkMeta](/docs/2p0/input-reference/sinkmeta)。

