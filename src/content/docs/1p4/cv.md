---
title: "CV 系统"
description: "SPONGE 1.4 的 CudaSPONGE CV 系统说明。"
version: "SPONGE 1.4"
section: "CudaSPONGE 文档"
order: 4
---

# 输入控制

由`cv_in_file`控制输入命令的读取。CV系统包含CV定义、虚原子定义、CV使用和程序系统控制四部分。详细内容见[文件格式](/docs/1p4/file-formats)
各参数的类型标记见[输入命令](/docs/1p4/commands)

# 虚原子定义

在计算CV时，有时我们不直接使用多个原子的位置，而是使用虚拟原子，其位置根据其他原子生成。

## center\_of\_mass

质心

参数：

- atom ([int]): 原子列表
- atom\_in\_file (file): 原子列表文件

## center

任意权重计算的中心

参数：

- atom ([int]): 原子列表
- atom\_in\_file (file): 原子列表文件
- weight ([float]): 权重
- weight\_in\_file: 权重文件

# CV定义

## position\_x

x坐标

参数：

- atom (int): 原子

## position\_y

y坐标

参数：

- atom (int): 原子

## position\_z

z坐标

参数：

- atom (int): 原子

## scaled\_position\_x

x坐标除以盒子x轴长度

参数：

- atom (int): 原子

## scaled\_position\_y

y坐标除以盒子y轴长度

参数：

- atom (int): 原子

## scaled\_position\_z

z坐标除以盒子z轴长度

参数：

- atom (int): 原子

## box\_length\_x

盒子x轴长度

## box\_length\_y

盒子y轴长度

## box\_length\_z

盒子z轴长度

## distance

两个原子之间的距离

参数：

- atom (int int): 两个原子

## displacement\_x

两个原子之间的位移的x分量

参数：

- atom (int int): 两个原子

## displacement\_y

两个原子之间的位移的y分量

参数：

- atom (int int): 两个原子

## displacement\_z

两个原子之间的位移的z分量

参数：

- atom (int int): 两个原子

## angle

三个原子形成的角

参数：

- atom (int int int): 三个原子

## dihedral

四个原子形成的二面角

参数：

- atom (int int int int): 四个原子

## rmsd

一系列原子与参考坐标之间的RMSD值

> 原子和参考坐标可以通过 `Xponge maskgen` 来生成

参数：

- atom ([int]): 原子列表
- atom\_in\_file (file): 原子列表文件
- coordinate ([float]): 参考坐标
- coordinate\_in\_file (float): 参考坐标文件

## combination

将CV自由组合获得的值
示例：

```
                lx
        {
            CV_type = box_length_x
        }
        ly
        {
            CV_type = box_length_y
        }
        lz
        {
            CV_type = box_length_z
        }
        example_CV
        {
            CV_type = combination
            CV = lx ly lz
            function = lx * ly * lz
        }
```

> 在组合表达式中，如果涉及到浮点数，最好请在后面加上f表示单精度浮点数，例如1.0f。如果本身是浮点数使用整数可能会出现即时编译错误。

参数：

- CV ([CV]): 需要组合的CV
- function ([string]): 需要组合的函数形式
  支持的函数及其符号：

  | 函数 | 符号 | 函数 | 符号 |
  | --- | --- | --- | --- |
  | a加b | a + b | a减b | a - b |
  | a乘b | a \* b | a除以b | a / b |
  | a的b次方 | powf(a)(b) | a的自然对数 | logf(a) |
  | 自然对数的底的a次方 | expf(a) | a的误差补余函数 | erfcf(a) |
  | 开a的平方 | sqrtf(a) | a的余弦 | cosf(a) |
  | a的正弦 | sinf(a) | a的正切 | tanf(a) |
  | a的反余弦 | acosf(a) | a的反正弦 | asinf(a) |
  | a的反正切 | atanf(a) | a的绝对值 | fabsf(a) |
  | a和b中较大的一个 | fmaxf(a)(b) | a和b中较小的一个 | fminf(a)(b) |

## tabulated

对某CV进行表格化的映射。中间值通过4阶B样条线插值计算得到。
示例：

```
        lx
        {
            CV_type = box_length_x
        }
        example_CV
        {
            CV_type = tabulated
            CV = lx
            min = 0
            max = 100
            parameter = 1 4 0.2 7 9.1 -11
            min_padding = 1.1
            max_padding = 7.7
        }
```

该示例对应于下面的表格：
-60 | -40 | -20 | 0 | 20 | 40 | 60 | 80 | 100 | 120 | 140 | 160
--- |
1.1 | 1.1 | 1.1 | 1.0 | 4.0 | 0.2 | 7.0 | 9.1 | -11.0 | 7.7 | 7.7 | 7.7

参数：

- CV ([CV]): 需要插值的CV
- min (float): CV最小的值
- max (float): CV最大的值
- parameter ([float]): 映射的值列表
- parameter\_in\_file (file): 映射的值列表文件
- min\_padding (float): 比最小值更小时的填充值，只用于插值
- max\_padding (float): 比最大值更大时的填充值，只用于插值

# CV使用

## print

打印CV
参数：

- CV ([CV]):需要打印的CV

## restrain

简谐偏置势

$$
U_{\rm bias} = \sum_{CV}{\rm weight} * (CV - {\rm reference})^2
$$

权重可动态变化。

1. 如果 `start_step` 和 `max_step` 不为0， `reduce_step` 和 `stop_step` 为0，则会有下列形式

   ```
              谐振子的权重
                   ↑
             weight|         +-------------
                   |        /
                   |       /
                   |      /
                   0-----+---+------------>模拟步数
                      start max
   ```
2. 如果 `start_step` 和 `max_ste` 为0， `reduce_step` 和 `stop_step` 不为0，则会有下列形式::

   ```
              谐振子的权重
                   ↑
             weight|----------------+
                   |                 \
                   |                  \
                   |                   \
                   0---------------+----+-->模拟步数
                                reduce stop
   ```
3. 如果四个step参数均不为0，则会有下列形式::

   ```
              谐振子的权重
                   ↑
             weight|         +------+
                   |        /        \
                   |       /          \
                   |      /            \
                   0-----+---+-----+----+-->模拟步数
                      start max reduce stop
   ```

参数：

- CV ([CV]): 限制的CV
- weight ([float]): 权重
- reference ([float]): 参考值
- period ([float]): CV的周期
- start\_step ([int]): weight开始线性增加的步数
- max\_step ([int]): weight增加到最大的步数
- reduce\_step ([int]): weight开始线性减少的步数
- stop\_step ([int]): weight变为0的步数

## steer

线性偏置势

$$
U_{\rm bias} = \sum_{CV} {\rm weight} * CV
$$

参数：

- CV ([CV]): 添加偏执势的CV
- weight ([float]): 权重

## meta1d

1维的metadynamics偏置势

$$
U_{\rm bias} = \sum_t {\rm height} * N(CV_t, {\rm sigma}) * \text{welltemp系数}
$$

参数：

- CV (CV): 添加偏执势的CV
- CV\_minimal (float): CV的最小值
- CV\_maximum (float): CV的最大值
- dCV (float): 绘制格点时的格点大小
- potential\_in\_file (file): 输入的格点化的CV势能曲线文件
- CV\_period (float): CV的周期
- height (float): 添加的高斯势的高度
- sigma (float): 添加的高斯势的标准差
- wall\_height (float): CV处于最小值和最大值之间时的初始势阱深度
- welltemp\_factor (float): welltemp系数，数值越小，随着时间的增长高斯势添加越缓慢
- potential\_update\_interval (int): 势能更新的间隔
