---
title: "输入命令"
description: "SPONGE 1.4 的 CudaSPONGE 输入命令、参数类型、默认值和常用设置说明。"
version: "SPONGE 1.4"
section: "CudaSPONGE 文档"
order: 1
---

# 示例

### `命令名`：类型->`默认值`

※※※※※

类型项目：

| 英文名 | 中文名 | 备注 |
| --- | --- | --- |
| float | 浮点数 | 基本类型 |
| int | 整数 | 基本类型 |
| string | 字符串 | 基本类型 |
| enum | 选项 | 可选值详见具体命令 |
| bool | 布尔值 | 0 或1 |
| file | 文件名 | 文件路径中不要存在空格 |
| CV | CV | 由`cv_in_file`定义的CV |
| 【类型1】【符号】【类型2】 | 由【符号】分割的【类型1】和【类型2】 | 例："int int"表示由空格分割的两个整数 |
| [【类型】] | 以空格分割的一连串的【类型】 | 例：”[int]“表示一连串的整数 |
| 【类型】【符号】...【符号】【类型】 | 以【符号】分割的一连串的【类型】 | 例："float/.../float"表示一连串以"/"分割的浮点数 |

※的数量表示该命令需要设定的频率

| ※数 | 设定频率 |
| --- | --- |
| ※ | 开发测试时设定 |
| ※※ | 使用时很少设定 |
| ※※※ | 使用时根据体系设定 |
| ※※※※ | 使用时经常设定 |
| ※※※※※ | 使用时通常设定 |

# MD核心

## 系统信息

### `mdin`：file->`mdin.txt`

※※※※※
命令控制输入文件

### `cv_in_file`：file

※※※
CV控制输入文件

### `pbc`: bool->`1`

※※※
是否启用周期性边界条件

### `mode`: enum

※※※※※
使用模式

| 可选值 | 含义 |
| --- | --- |
| NVE | NVE系综模拟 |
| NVT | NVT系综模拟 |
| NPT | NPT系综模拟 |
| minimization | 能量最小化 |
| rerun | 重跑轨迹 |

### `dt`: float->`1e-3`(非最小化); `1e-8`(最小化)

※※※※※
步长[ps]，仅在非重跑模式下可用

### `step_limit`: int->`1000`

※※※※※
模拟的总步数，仅在非重跑模式下可用

### `thermostat`: enum

※※※※※
使用的控温方式，仅在NVT模式和NPT模式下可用
可选值见[模块功能](/docs/1p4/modules)

### `target_temperature`: float->`300.0`

※※※※
模拟的系综温度[K]，仅在NVT模式和NPT模式下可用

### `barostat`: enum

※※※※※
使用的控压方式，仅在NPT模式下可用
可选值见[模块功能](/docs/1p4/modules)

### `target_pressure`: float->`1.0`

※※※※
模拟的系综压强[bar]，仅在NPT模式下可用

### `velocity_max`: float->`-1`

※※※
粒子速度的最大值[22.45 埃/皮秒]，防止某个粒子因为偶然速度过大造成系统崩溃。负数不作检查。

> 如需设置，300 K下的参考值为20

### `default_in_file_prefix`: string

※※※※※
定义后，`xxx_in_file` 会自动寻找对应的的文件
如`coordinate_in_file` 会自动寻找`default_in_file_prefix`_coordinate.txt

### `coordinate_in_file`: file

※※※※※
坐标输入文件

### `velocity_in_file`: file

※※※※
速度输入文件

### `mass_in_file`: file

※※
质量输入文件

### `charge_in_file`: file

※※
电荷输入文件

### `residue_in_file`: file

※※
残基输入文件

### `end_pause`: bool->`0`

※※
结束程序时是否需要额外输入一个回车

### `device`: int->`0`

※※※
使用的GPU设备编号

### `dont_check_input`: bool->`0`

※※
不输出输入产生的警告

> 不输出警告很危险，请确保你明白这些警告的意义

## AMBER兼容

> AMBER的文件只在早期测试中使用，并保存了下来，但在后期的功能实现中，很多功能已不支持对AMBER格式文件的读取

### `amber_parm7`: file

※※
AMBER格式的拓扑输入文件

### `amber_rst7`: file

※※
AMBER格式的坐标输入文件

### `amber_irest`: bool->`1`

※
AMBER格式的坐标输入文件的参数，用以下逻辑判断该文件中是否包含速度信息

- 若设为 0，则无速度信息
- 若设为 1，则：
  - `amber_rst7` 中不包含时间信息，则无速度信息
  - `amber_rst7` 中包含时间信息，则有速度信息

## 输出信息

### `make_output_whole`: [int-int]

※※※
使得 `make_output_whole` 定义的原子对在输出轨迹时映射在同一个周期性边界内

### `write_information_interval`: int->`1000`

※※※※
每隔 `write_information_interval` 步输出一次轨迹

### `write_mdout_interval`: int->`write_information_interval`

※※※
每隔 `write_mdout_interval` 步输出一次mdout文件

### `write_restart_file_interval`: int->`step_limit`

※※※
每隔 `write_restart_file_interval` 步输出一次重开文件

### `crd`: file->`mdcrd.dat`

※※※
轨迹文件

### `box`: file->`mdbox.txt`

※※※
盒子轨迹文件

### `rst`: string->`restart`

※※※

- 若起始坐标通过 `amber_rst7` 传入，则为输出重开文件名；
- 若起始坐标通过 `coordinate_in_file` 传入，则为输出重开文件的前缀

### `frc`: file

※※※
力轨迹文件

### `vel`: file

※※※
速度轨迹文件

## 轨迹重跑

### `frame_limit`: int

※※※
重跑的总步数

### `rerun_start`: int->`0`

※※※
重跑模式下，从第 `rerun_start` 帧后开始读轨迹文件

### `rerun_strip`: int->`0`

※※※
重跑模式下，开始之后，每次读轨迹跳过 `rerun_strip` 帧

## 非键信息

### `skin`: float->`2.0`

※※
非键"皮肤"厚度[埃]
当某个原子移动超过 `skin` * `skin_permit` 以后，将会更新近邻表。近邻表将包含每个原子周围 `skin` + `cutoff` 内的粒子

### `cutoff`: float->`10.0`

※※※※※
非键截断距离[埃]

> 默认参数10.0埃对于非周期性边界条件下的模拟太小

### `exclude_in_file`: file

※※
非键排除表输入文件

# 近邻表

### `neighbor_list_refresh_interval`: int->`0`

※※※
近邻表更新的间隔步数，若不为正，则任一原子移动超过 `skin` * `neighbor_list_skin_permit` 后自动更新

### `neighbor_list_max_atom_in_grid_numbers`: int->`80`

※※
近邻表中每个格子里最多的原子数量，用于分配内存

### `neighbor_list_max_neighbor_numbers`: int->`1200`

※※
每个原子最多近邻数量，用于分配内存

### `neighbor_list_skin_permit`: float->`0.5`

※※※
自动更新近邻表的逻辑里，允许原子移动的skin的比例。当`neighbor_list_skin_permit` = 0.5时是准确的，更大的值计算会更快但精度会有所下降

# PME

### `PME_update_interval`: int->`1`

※※※
多步长更新的设置参数，PME长程部分每间隔`PME_Update_Interval`步更新一次

### `PME_print_detail`: bool->`0`

※※
将PME各部分的结果详细打印出来

### `PME_replaced_by_PMC_IZ`: bool->`0`

※※※
使用PMC_IZ而非PME进行计算

### `PME_fftx`: int->`按1埃每格选取最近的接近4的数`

※※
傅里叶变化在x方向的格点数

### `PME_ffty`: int->`按1埃每格选取最近的接近4的数`

※※
傅里叶变化在y方向的格点数

### `PME_fftz`: int->`按1埃每格选取最近的接近4的数`

※※
傅里叶变化在z方向的格点数

### `PME_Direct_Tolerance`: float->`1e-5`

※※
两个单位点电荷直接部分硬截断在cutoff处的误差[kcal/mol]

### `PME_calculate_reciprocal_part`: bool->`1`

※
是否计算PME的倒空间部分

### `calculate_excluded_part`: bool->`1`

※
是否计算PME的排除表部分

# 能量最小化

### `minimization_max_move`: float->`0.1`

※※※
每步移动的最大距离[埃]

### `minimization_momentum_keep`: float->`0`

※※※
最小化时每步保持的动量的比例

### `minimization_dynamic_dt`: int->`1`

※※
是否使用动态步长，1为启用，0为不启用

### `minimization_dt_decreasing_rate`: float->`0.01`

※※
步长动态变化时的下降参数

### `minimization_dt_increasing_rate`: float->`1.01 + 0至1的随机数`

※※
步长动态变化时的上升参数

### `minimization_dt_factor`: float->`1e-4 + 1e-2 * 0至1的随机数`

※※※
步长动态变化时的dt因子

# 控温

### `andersen_thermostat_update_interval`: int->`500`

※※※※
每隔 `andersen_thermostat_update_interval` 步随机生成一次速度

### `andersen_thermostat_seed`: int->`时间`

※
随机数种子

### `berendsen_thermostat_tau`: float->`1.0`

※※※※
时间参数[ps]

### `berendsen_thermostat_stochastic_term`: bool->`0`

※※※
是否启用随机修正

### `berendsen_thermostat_seed`: int->`时间`

※
随机修正中使用的随机数种子

### `nose_hoover_chain_length`: int->`1`

※※※※
链长度

### `nose_hoover_chain_tau`: float->`1.0`

※※※※
时间常数[ps]

### `nose_hoover_chain_restart_input`: file

※※
拓展维度的初始速度和坐标

### `nose_hoover_chain_restart_output`: file

※※
拓展维度的最后速度和坐标

### `nose_hoover_chain_crd`: file

※※
拓展维度的坐标轨迹

### `nose_hoover_chain_vel`: file

※※※
拓展维度的速度轨迹

### `middle_langevin_gamma`: float->`1.0`

※※※※
摩擦因子[ps−1\rm ps^{-1}ps−1]

### `middle_langevin_seed`: int->`随机整数`

※
随机数种子

### `langevin_gamma`: float->`1.0`

※※※※
摩擦因子[ps−1\rm ps^{-1}ps−1]

### `langevin_seed`: int->`随机整数`

※
随机数种子

# 控压

### `monte_carlo_barostat_initial_ratio`: float->`0.001`

※※
初始的每个边长的变化大小与初始每个边长大小的比例

### `monte_carlo_barostat_update_interval`: int->`100`

※※
每隔 `monte_carlo_barostat_update_interval` 步进行一次体积变化尝试

### `monte_carlo_barostat_check_interval`: int->`100`

※※
每隔 `monte_carlo_barostat_check_interval` 步进行一次参数检查

### `monte_carlo_barostat_molecule_scale`: bool->`1`

※※
按分子整体控压还是按原子控压

> 如果设为0且使用了约束算法，可能会有异常表现，使得系统崩溃或体积始终无法达到平衡

### `monte_carlo_barostat_accept_rate_low`: float->`30`

※※
检查时保证蒙卡接受率至少为 `monte_carlo_barostat_accept_rate_low` %

### `monte_carlo_barostat_accept_rate_high`: float->`40`

※※
检查时保证蒙卡接受率至多为 `monte_carlo_barostat_accept_rate_high` %

### `monte_carlo_barostat_couple_dimension`: enum->`XYZ`

※※※
蒙卡控制体积的方向的耦合

| 可选值 | 含义 |
| --- | --- |
| XYZ | 各向同性 |
| NO | 各向异性 |
| XY | XY方向耦合，Z方向独立 |
| XZ | XZ方向耦合，Y方向独立 |
| YZ | YZ方向耦合，X方向独立 |

### `monte_carlo_barostat_only_direction`: enum

※※※
蒙卡变化时只变化某一维度

| 可选值 | 可选值 |
| --- | --- |
| X | XY |
| Y | XZ |
| Z | YZ |

> 你不能做不合法的操作，例如在要求XYZ耦合的同时只变化X维度

### `monte_carlo_barostat_surface_number`: int->`0`

※※※
体系中界面的数量

### `monte_carlo_barostat_surface_tension`: float->`0`

※※※
界面张力[mN/m]

### `berendsen_barostat_tau`: float->`1.0`

※※※※
时间常数[ps]

### `berendsen_barostat_compressibility`: float->`4.5e-5`

※※
压缩系数[bar−1\rm bar^{-1}bar−1]

### `berendsen_barostat_stochastic_term`: bool->`0`

※※※
是否加入随机修正

### `berendsen_barostat_update_interval`: int->`10 (不加随机修正); 1 (加随机修正)`

※※
每隔 `berendsen_barostat_update_interval` 步进行一次控压

### `berendsen_barostat_seed`: int->`时间`

※
随机修正的随机数种子

### `andersen_barostat_tau`: float->`1.0`

※※※※
时间常数[ps]

### `andersen_barostat_compressibility`: float->`4.5e-5`

※※
压缩系数[bar−1\rm bar^{-1}bar−1]

### `andersen_barostat_dV_dt`: float->`0`

※※※
初始体积变化速度[20.455 A˚3/fs\rm 20.455\ Å^3/fs20.455 A˚3/fs]

# 力场

> 力场文件格式请见[文件格式](/docs/1p4/file-formats)

> 力场形式请见[模块功能](/docs/1p4/modules)页

### `bond_in_file`: file

※※
简谐形式键距

### `bond_soft_in_file`: file

※※
软键

### `angle_in_file`: file

※※
简谐形式键角

### `urey_bradley_in_file`: file

※※
Urey_Bradley键角

### `dihedral_in_file`: file

※※
周期形式二面角

### `improper_in_file`: file

※※
简谐形式二面角

### `nb14_in_file`: file

修正LJ和修正静电形式的14相互作用

### `nb14_extra_in_file`: file

※※
独立LJ参数和修正静电形式的14相互作用

### `cmap_in_file`: file

※※
cmap力场

### `LJ_in_file`: file

※※
lj力场

### `vatom_in_file`: file

※※
虚拟原子力场

### `gb_in_file`: file

> 只在非周期性边界条件下使用

※※
最简单的隐式溶剂力场

### `listed_forces_in_file`: file

※※
自定义成键相互作用力场

### `pairwise_force_in_file`: file

※※
自定义非键相互作用力场

# 限制与约束

### `restrain_atom_id`: file

※※※
位置限制的原子序号

> 可以使用Xponge中的maskgen功能调用MDAnalysis生成该文件，详见`Xponge maskgen -h`

### `restrain_coordinate_in_file`: file

※※※
位置限制的参考坐标

### `restrain_amber_rst7`: file

※※
位置限制的参考坐标(amber格式)

### `restrain_weight`: float->`20.0`

※※※
位置限制的力常数[kcal/mol/A2\rm kcal/mol/A^2kcal/mol/A2]

### `constrain_mode`: enum

※※※※
约束模式

| 可选值 | 含义 |
| --- | --- |
| shake | SHAKE算法 |
| simple_constrain | 简单约束算法 |

### `constrain_mass`: float->`3.3`(未给constrain_in_file);`0`(给了constrain_in_file)

※※
质量小于 `constrain_mass` 的原子的键会被约束

### `constrain_in_file`: file

※※
明确需要约束的键长的文件

> 在大多数时候这个文件是不需要提供的，因为程序会根据 `constrain_mass` 自动生成。

### `constrain_angle`: bool->`0`

※
是否对质量小于 `constrain_mass` 的原子的键角进行约束

> 启用后，对复杂体系可能会造成约束很难收敛，并且对键角的约束是不物理的，不推荐开启。

### `settle_disable`: bool->`0`

※
是否禁用settle

### `simple_constrain_iteration_numbers`: int->`25`

※
简单约束算法迭代次数

### `simple_constrain_step_length`: float->`1`

※
简单约束算法迭代步长

### `shake_iteration_numbers`: int->`25`

※
SHAKE约束算法迭代次数

### `shake_step_length`: float->`1`

※
SHAKE约束算法迭代步长

# 墙

### `hard_wall_x_low`: float

※※※
当某粒子的x分量坐标小于该值时，其x方向的速度变为正

### `hard_wall_x_high`: float

※※※
当某粒子的x分量坐标大于该值时，其x方向的速度变为负

### `hard_wall_y_low`: float

※※※
当某粒子的y分量坐标小于该值时，其y方向的速度变为正

### `hard_wall_y_high`: float

※※※
当某粒子的y分量坐标大于该值时，其y方向的速度变为负

### `hard_wall_z_low`: float

※※※
当某粒子的z分量坐标小于该值时，其z方向的速度变为正

### `hard_wall_z_high`: float

※※※
当某粒子的z分量坐标大于该值时，其z方向的速度变为负

### `soft_walls_in_file`: file

※※※
定义软墙势能函数的文件

# 选择性温度积分增强抽样

### `SITS_mode`: enume

※※※
模式

| 可选值 | 含义 |
| --- | --- |
| observation | 观察模式 |
| iteration | 迭代模式 |
| production | 生产模式 |

### `SITS_atom_in_file`: file

※※※
需要增强的原子的文件列表。该命令会使 `SITS_atom_numbers` 失效

### `SITS_atom_numbers`: int

※※※
需要增强的原子为系统中的前 `SITS_atom_numbers` 个原子。该命令在 `SITS_atom_in_file` 命令生效时无效

### `SITS_cross_enhance_factor`: float->`0.5`

※※※
AB交叉项的增强系数

### `SITS_dihedral_in_file`: file

※※※
需要增强采样的二面角，格式如同普通dihedral_in_file

---

> 以下命令仅在 `SITS_mode` 为非 `observation` 时启用

---

### `SITS_k_numbers`: int->`40`

※※※
温度的份数

### `SITS_T_high`: float

※※※
温度积分的上区间，自动使用 `SITS_k_numbers`、`SITS_T_high` 和 `SITS_T_low` 线性插值获得温度格点

### `SITS_T_low`: float

※※※
温度积分的下区间，自动使用 `SITS_k_numbers`、`SITS_T_high` 和 `SITS_T_low` 线性插值获得温度格点

### `SITS_T`: float/../float

※※
温度的格点。该命令会被 `SITS_T_high` 和 `SITS_T_low` 无效

### `SITS_record_interval`: int->`1`

※
每隔`SITS_record_interval` 步记录一次能量

### `SITS_update_interval`: int->`100`

※
每隔`SITS_update_interval` 次记录更新一次偏置能的参数

### `SITS_pe_a`: float->`1`

※※※
记录能量时的乘数因子

### `SITS_pe_b`: float->`0`

※※※
记录能量时的平移参数[kcal/mol]

### `SITS_fb_bias`: float->`0`

※※
最终fb的平移因子

### `SITS_nk_rest`: bool->`0`(迭代模式);`1`(生产模式)

※
nk参数是否重新读入

### `SITS_nk_in_file`: file

※※※
nk参数重新读入文件

### `SITS_nk_fix`: bool->`0`(迭代模式);`1`(生产模式)

※
nk参数是否不变

---

> 以下命令仅在 `SITS_nk_fix` 为 `0` 时启用

---

### `SITS_nk_rest_file`: file->`SITS_nk_rest_file`

※※※
nk重启文件

### `SITS_nk_traj_file`: file->`SITS_nk_traj.dat`

※※※
nk轨迹文件
