---
title: 参考手册
description: Reference Manual
published: true
date: 2025-06-07T16:10:22.693Z
tags: 
editor: markdown
dateCreated: 2025-06-06T03:51:06.868Z
---

# CudaSPONGE参考手册

## 1.前言及免责声明

本手册参考了GROMACS的参考手册[[1.1]](#references1_1)进行组织，但并非对是其的中文翻译，而是根据其结构讲述CudsSPONGE中的各种设置——实际上对各种MD模拟软件的代码进行阅读以后就能够发现，几乎每一个MD软件都会对文献中的算法进行适当调整，而CudaSPONGE中也包含了这样的操作，也是本参考手册的意义所在。

本手册并不完整，并且由于撰稿人时间不足——我们的首要任务是改进SPONGE——本手册并不奢求完整。本手册还在不断完善中，信息可能也会不完全正确。

欢迎对形式和内容提出意见，可以直接在本页面的讨论中对相关信息进行补充。

## 2.SPONGE

分子模拟是一个非常有意思的词语，这个汉语词汇可以是英语中两个词组的翻译，分别是molecular simulation和molecular modeling。虽然这两个词组也分别有可以互相区分的翻译，例如分别翻译为分子仿真和分子建模，但在汉语语境下很多场合仍然是用分子模拟进行翻译。Molecular modeling泛指通过各种分子模型来描述复杂化学体系的一般过程，目的是根据原子尺度上的详细知识来理解和预测宏观特性，而molecular simulation则通常指代的是以分子动力学模拟和蒙特卡洛模拟为代表的具体的利用原子进行模拟的方法。

SPONGE全名为“Simulation Package tOwards Next GEneration molecular modeling”，也即面向下一代分子模拟的模拟软件，其中包含两个模拟，但是它们的意义就如上所述存在区别。从名字中也可以看出，SPONGE的中心语是Simulation Package，也即模拟软件，它的核心主要还是集中在molecular simulation，但是目的则是称为下一代分子模拟工具，也即努力方向是更全面的、更先进的molecular modeling。就目前而言，SPONGE主要还是作为一个分子动力学模拟工具，并包括一些附带的分子模拟功能。

## 3.数学基础定义

### 3.1 矩阵和矢量定义

在本文中，涉及到诸多物理量，其中矩阵和矢量均使用黑体书写，如力矢量$\mathbf{F}$，压力张量$\mathbf{\Pi}$；标量使用斜体书写，如力的大小$F$。矢量被认为是行或列的大小为1的矩阵，其中行矢量的行数为1，列矢量的列数为1。

在未加声明的情况下，矢量均为行矢量，例如某个粒子的力矢量形状为$(1,3)$

$$
\mathbf{F} = 
\left(
\begin{array}{c}
F_x & F_y & F_z
\end{array}
\right)
\tag{3-1}
$$

在CudaSPONGE的程序中，使用数据结构体`VECTOR`表示对应的矢量。

一个形状为$(m,n)$的矩阵$\mathbf{Y}$对标量$x$的导数分别记为$\frac{\partial\mathbf{Y}}{\partial x}$，结果为一个$(m,n)$的矩阵，其定义为：

$$
\frac{\partial\mathbf{Y}}{\partial x} = 
\left(
\begin{array}{c}
\frac{\partial y_{11}}{\partial x}  & \frac{\partial y_{12}}{\partial x} & \cdots & \frac{\partial y_{1n}}{\partial x} \\
\frac{\partial y_{21}}{\partial x}  & \frac{\partial y_{22}}{\partial x} & \cdots & \frac{\partial y_{2n}}{\partial x} \\
\cdots  & \cdots & \ddots & \cdots \\
\frac{\partial y_{m1}}{\partial x}  & \frac{\partial y_{m1}}{\partial x} & \cdots & \frac{\partial y_{mn}}{\partial x} \\
\end{array}
\right)
\tag{3-2}
$$

一个形状为$(p,q)$的矩阵$\mathbf{Y}$对形状为$(m,n)$的矩阵$\mathbf{X}$的导数记为$\frac{\partial\mathbf{Y}}{\partial\mathbf{X}}$，结果为一个$(mn,pq)$的矩阵，其定义为：

$$
\frac{\partial \mathbf{Y}}{\partial \mathbf{X}} = 
\left(
\begin{array}{c}
\frac{\partial y_{11}}{\partial x_{11}}  & \frac{\partial y_{21}}{\partial x_{11}} & \cdots & \frac{\partial y_{p1}}{\partial x_{11}} & \cdots & \frac{\partial y_{pq}}{\partial x_{11}} \\
\frac{\partial y_{11}}{\partial x_{21}}  & \frac{\partial y_{21}}{\partial x_{21}} & \cdots & \frac{\partial y_{p1}}{\partial x_{21}} & \cdots & \frac{\partial y_{pq}}{\partial x_{21}}  \\
\cdots  & \cdots & \ddots & \cdots &\ddots & \cdots \\
\frac{\partial y_{11}}{\partial x_{mn}}  & \frac{\partial y_{21}}{\partial x_{mn}} & \cdots & \frac{\partial y_{p1}}{\partial x_{mn}} & \cdots & \frac{\partial y_{pq}}{\partial x_{mn}}  \\ \\
\end{array}
\right)
\tag{3-3}
$$

这种先按分母展开的导数定义被称为分母布局。按分子展开的导数定义为分子布局，两者互为倒置。

一个形状为$(m,n)$的矩阵$\mathbf{X}$和一个形状为$(n,l)$的矩阵$\mathbf{Y}$点积记为$\mathbf{X}\mathbf{Y}$，结果为一个$(m,l)$的矩阵，其定义为：

$$
\mathbf{X}\mathbf{Y} =
\left(
\begin{array}{c}
\sum_i^n x_{1i}y_{i1} & \sum_i^n x_{1i}y_{i2} & \cdots & \sum_i^n x_{1i}y_{il} \\
\sum_i^n x_{2i}y_{i1} & \sum_i^n x_{2i}y_{i2} & \cdots & \sum_i^n x_{2i}y_{il} \\
\cdots  & \cdots & \ddots & \cdots \\
\sum_i^n x_{mi}y_{m1} & \sum_i^n x_{mi}y_{i2} & \cdots & \sum_i^n x_{mi}y_{il} \\
\end{array}
\right)
\tag{3-4}
$$

一个形状为$(m,n)$的矩阵$\mathbf{X}$和一个形状为$(m,n)$的矩阵$\mathbf{Y}$内积记为${\rm tr}(\mathbf{X}^{\rm T}\mathbf{Y})$，结果为一个标量，其定义为：

$$
{\rm tr}(\mathbf{X}^{\rm T}\mathbf{Y}) = \sum_i^m\sum_j^n x_{ij}y_{ij}
\tag{3-5}
$$

一个形状为$(m,n)$的矩阵$\mathbf{X}$和一个形状为$(p,q)$的矩阵$\mathbf{Y}$外积记为$\mathbf{X} \otimes \mathbf{Y}$，结果为一个形状$(mp,qn)$的矩阵，其定义为：

$$
\mathbf{X} \otimes \mathbf{Y} = 
\left(
\begin{array}{c}
x_{11}\mathbf{Y}  & x_{12}\mathbf{Y} & \cdots & x_{1n}\mathbf{Y} \\
x_{21}\mathbf{Y}  & x_{22}\mathbf{Y} & \cdots & x_{2n}\mathbf{Y} \\
\cdots  & \cdots & \ddots & \cdots \\
x_{m1}\mathbf{Y}  & x_{m2}\mathbf{Y} & \cdots & x_{mn}\mathbf{Y} \\
\end{array}
\right)
\tag{3-6}
$$

由上，有一些重要推论，包括求导的链式法则：

$$
\frac{\partial \mathbf{Z}}{\partial \mathbf{X}} = 
\frac{\partial \mathbf{Y}}{\partial \mathbf{X}} 
\frac{\partial \mathbf{Z}}{\partial \mathbf{Y}} 
\tag{3-7}
$$

对于任意$\mathbf{Y}=\mathbf{A}\mathbf{X}\mathbf{B}$，有

$$
\frac{\partial \mathbf{Y}}{\partial \mathbf{X}} = 
\mathbf{B} \otimes \mathbf{A}^{\rm T}
\tag{3-8}
$$

$$

$$

### 3.2 单位制

CudaSPONGE在程序内部使用一套自身的单位制，与程序外部的数据交换的单位根据情况进行设定。

内部的单位使用为：

| 物理量 | 单位      |   解释  |
| ------ | --------- |----------------------- |
| 长度   |     Å    |   $\rm 10^{-10}\ m$     |
| 时间   | 20.455 fs |  $\rm 20.455 \times 10^{-12}\ s$    |
| 速度   |  Å/(20.455 fs) | 长度单位除以时间单位 |
| 电荷   | 18.2223 e |   e为元电荷    |
| 质量   |    Da     | 碳12原子质量的1/12      |
| 温度   |    K     |  热力学温标     |
| 能量   |  kcal/mol |  $\rm 1\ kcal/mol = 4.184\ kJ/mol$ |
| 力     | kcal/mol/Å |                |
| 压强   | $\rm 1.4395\times10^{-5}\ bar$ |    $N_{\rm A}/( 4.184\times10^{28})$              |

其中，

电荷选择该单位的原因是希望在该单位制下，库伦定律中的系数为1，也即

$$
E_{\rm Coulomb} = \frac{q_1q_2}{r_{12}} \tag{3-9}
$$

时间选择该单位的原因是希望在该单位制下，动能计算中的系数为$\frac{1}{2}$，也即

$$
E_{\rm kinetic} = \frac{1}{2}mv^2 \tag{3-10}
$$

压强选择该单位的原因是希望在该单位制下，体积功的计算系数为1，也即

$$
W = PV \tag{3-11}
$$

## 4.分子动力学

分子动力学的基础是经典力学，在这里通过牛顿力学和哈密顿力学进行简单表述。

### 4.1 牛顿力学

对于任意体系，我们可以计算任意时刻的力$\mathbf{F}$，然后使用牛顿第三定律计算粒子的速度$\mathbf{v}$和位置$\mathbf{r}$：

$$
\left\{
\begin{array}{l}
\frac{d\mathbf{v}}{dt}=\frac{\mathbf{F}}{m} \\
\frac{d\mathbf{r}}{dt}=\mathbf{v}
\end{array}
\right.
\tag{4-1}
$$

将该微分方程组对时间$t$进行积分，就可以获得粒子随时间的运动。在SPONGE中，使用蛙跳法作为积分方法，有
$$
\left\{
\begin{array}{l}
\mathbf{v}(t+0.5\Delta t)=\mathbf{v}(t-0.5\Delta t) + \frac{\mathbf{F}}{m} \Delta t\\
\mathbf{r}(t+\Delta t)=\mathbf{r}(t) + \mathbf{v}(t+0.5\Delta t)\Delta t
\end{array}
\right.
\tag{4-2}
$$

### 4.2 哈密顿力学

在哈密顿力学框架下，使用正则坐标$\{q\}$和正则动量$\{p\}$定义哈密顿量$\mathscr{H}$，通常可以写为动能$T(\{p\})$和势能$U(\{q\})$的加和：

$$
\mathscr{H}=T + U \tag{4-3}
$$

有哈密顿正则方程：

$$
\left\{
\begin{array}{l}
\frac{dp_i}{dt} = -\frac {\partial \mathscr{H}}{\partial q_i} \\
\frac{dq_i}{dt} = \frac {\partial \mathscr{H}}{\partial p_i} \\
\end{array}
\right.
\tag{4-4}
$$

不难看出，实际上式(4-1)和式(4-4)是完全等价的，只是写法不同。

相空间是包含了体系所有正则坐标和正则动量的空间。在某时刻$t$，对于某微小体积元$d\mathbf{q}d\mathbf{p}$，该点在体系中出现的概率密度为$\rho(\mathbf{q},\mathbf{p},t)$，这个量也被称为分布函数。

在分子动力学模拟中，一个关键的方程是刘维尔方程，它认为分布函数沿着相空间的任何轨迹是常数：

$$
\frac{d\rho(\mathbf{q},\mathbf{p},t)}{dt} = 0 \tag{4-5}
$$

对式(4-5)展开，可得：

$$
\frac {\partial \rho}{\partial t} + \sum_i(\frac {\partial \rho}{\partial q_i} \frac {dq_i}{dt}+ \frac {\partial \rho}{\partial p_i}\frac {dp_i}{dt}) = 0 \tag{4-6}
$$

利用哈密顿正则方程式(4-4)替换式(4-6)中的时间全微分项，并定义刘维尔算符

$$
i\hat L= \sum_i\Big(\frac{\partial \mathscr H}{\partial p_i} \frac{\partial}{\partial q_i} - \frac{\partial \mathscr H}{\partial q_i} \frac{\partial}{\partial p_i}\Big)
\tag{4-7}
$$

可得刘维尔方程：

$$
\frac{\partial \rho} {\partial t} = -i\hat L \rho
\tag{4-8}
$$

该方程非常类似含时薛定谔方程，只相差一个系数$\hbar$。

$$
i\hbar \frac{\partial \varphi} {\partial t} = \hat H \varphi
\tag{4-9}
$$

求解式(4-8)所示的微分方程，有

$$
\rho(\mathbf{q},\mathbf{p},t) = {\rm exp}(-i\hat Lt)\rho(\mathbf{q},\mathbf{p},0) \tag{4-10}
$$

对于该指数形式，有Trotters-Suzuki分解：
$$
{\rm exp}(-i(\hat A + \hat B)t) \approx {\rm exp}(-i\hat At) {\rm exp}(-i\hat Bt) \tag{4-11}
$$

Trotters-Suzuki分解非常重要，首先是可以利用$t =\frac{t}{\Delta t}{\Delta t}$，将演化分解为$\big({\rm exp}(-i\hat L\Delta t)\big)^{\frac{t}{\Delta t}}$，也即对一个长时间模拟分解为若干个短时间模拟。类似地，也可以将$\mathscr H$中的动能和势能分开，也即先后更新速度和位置。这一分解在后续的控温和控压中也会用到。

## 5.周期性边界条件（PBC）
### 5.1 三维周期性边界条件
大部分模拟中使用三维周期性边界条件，也即认为模拟只包括一个晶胞，而该体系是该晶胞在空间中无限延展的。下图是二维PBC的示例，该图片源自GROMACS手册。
![pbctric.png](/文档/pbctric.png)
对于晶胞，可以使用三个晶胞的边的长度$l_x$、$l_y$、$l_z$和夹角$\alpha$、$\beta$、$\gamma$进行描述，也可以将三个边的矢量构造成一个盒矩阵$\mathbf{b}$进行描述。通过合理建系，我们可以让第一条边$\mathbf{l}_x$在$x$轴上，第二条边$\mathbf{l}_y$在$xy$平面上，第三条边$\mathbf{l}_z$则为任意位置。此时盒矩阵$\mathbf{b}$是一个三角矩阵。这里我们以矩阵的每一行作为边的行矢量，可以表示为一个下三角矩阵：
$$
\mathbf{b} = 
\left(
\begin{array}{l}
\mathbf{l}_x \\
\mathbf{l}_y \\
\mathbf{l}_z
\end{array}
\right)
=
\left(
\begin{array}{l}
b_{xx}   &   0    &    0 \\
b_{yx}   &   b_{yy}    &     0 \\
b_{zx}   &   b_{zy}    &     b_{zz}
\end{array}
\right)
\tag{5-1}
$$

体积$V = {\rm det}(\mathbf{b}) = b_{xx}b_{yy}b_{zz}$，逆矩阵$\mathbf{b}^{-1}$也为一个下三角矩阵，其每一列为倒空间的列矢量。

此时，任意位置和位移的分数坐标$\mathbf{s}$和笛卡尔坐标$\mathbf{r}$之间的转换关系为

$$
\left\{
\begin{array}{l}
\mathbf{s} = \mathbf{r} \mathbf{b}^{-1}\\
\mathbf{r} = \mathbf{s} \mathbf{b}
\end{array}
\right.
\tag{5-2}
$$

在周期性边界下$i$、$j$两个粒子的最短映射位移$\mathbf{r}_{ij}$则为

$$
\mathbf{r}_{ij} = \mathbf{r}_i - \mathbf{r}_j - {\rm floor}((\mathbf{r}_i - \mathbf{r}_j)\mathbf{b}^{-1}+\mathbf{C})\mathbf{b}
\tag{5-3}
$$
其中，$\mathbf{C} = (0.5\ 0.5\ 0.5)$，${\rm floor}$表示对矢量的每一个分量进行向下取整。

模拟中，通常会要求对粒子求和时只计算截断距离$r_c$以内的粒子，要求粒子不在$r_c$内不能看到自己的镜像，因此对于周期性边界要求盒子的长度大于两倍的该截断距离，也即
$$
\left\{
\begin{array}{l}
l_x > 2 * r_c \\
l_y > 2 * r_c \\
l_z > 2 * r_c
\end{array}
\right.
\tag{5-4}
$$

粒子的笛卡尔坐标平移任意个周期对于体系是等效的，本身不会影响模拟，只会影响输出轨迹中的可视化。CudaSPONGE在储存粒子坐标时，总会将其储存在距离原点最近的正数值，同时保证分子的完整性。

### 5.2 其他边界条件

CudaSPONGE的程序中的实现中本质只包含了三维周期性边界条件，但是可以将其改变视为其他周期性边界条件。
对于非周期性边界条件下的模拟，CudaSPONGE中会额外保存一套不进行周期性映射的坐标，用于计算非键相互作用。而对于成键相互作用仍然使用周期性边界条件下的条件，因此在输入时需要将盒子边长设大，防止出错。
对于伪2维周期性边界条件，非周期性维度只能是z轴。对于z轴方向，非键近程作用和成键作用处理仍然与周期性边界条件时相同，因此需要谨慎地设置z轴的边长。对于非键远程作用，提供额外的PMC-IZ算法[[5.1]](#references5_1)。

## 6.约束

在这里，我们将constrain、constraint等翻译为约束，而restrain、restraint等翻译为限制。约束和限制的区别在这里定义为，约束是通过算法强制满足，而限制是添加能量惩罚项。

### 6.1 SETTLE

SETTLE是保持水形状的迭代解析解。默认情况下，如果使用约束算法，都将会对水使用SETTLE算法。SETTLE的实现在文献[[6.1]](#references6_1)的基础上，并没有要求等腰三角形的情况，同时也添加了对速度和压强的修正。

### 6.2 SHAKE

SHAKE是通过迭代来计算约束。SHAKE的实现主要参考了文献[[6.2]](#renferences6_2)和文献[[6.3]](#references6_3)。
其主要思路为，对于更新前位移为$\mathbf{r_0}$的一对粒子，更新后不断迭代纠正其力，再重新计算坐标和压强，使得距离能够达到预先设定的距离$d$。
假设第$i$次更新后的距离为$\mathbf{r}_i$，那么这次给的修正力$\mathbf{F}$为
$$
\mathbf{F}=\frac{1}{2}\frac{\mathbf{r}_i^2-d^2}{\mathbf{r}_i \mathbf{r}_0}\mathbf{r_0}
\tag{6-1}
$$
如果需要对角度进行约束，CudaSPONGE能够将通过余弦定理转化为对距离的约束，但通常这种约束并不物理，难以收敛，且对步长的帮助很少，因此不推荐对角度进行约束。

## 7.控温

控温主要是对粒子的速度进行更改。上文中提到了Trotter-Suzuki分解，它指导我们能够将速度和位置先后迭代。同样地，对于控温，我们也可以将对应的粒子速度的修正迭代单独进行，但这种计算是有多种不同的方式。我们使用$\hat T(\Delta t) = {\rm exp}(-i\hat L_T\Delta t)$表示控温迭代，$\hat r(\Delta t) = {\rm exp}(-i\hat L_r\Delta t)$表示迭代位置，$\hat v(\Delta t) = {\rm exp}(-i\hat L_v\Delta t)$表示迭代速度，那么典型的分解方式有：

$$

\begin{array}{l}
{\rm exp}(-i\hat L \Delta t) & \approx & \hat v(\frac {\Delta t}{2}) \hat T(\Delta t) \hat r(\Delta t)\hat v(\frac {\Delta t}{2}) \\
& \approx &\hat v(\frac {\Delta t}{2})\hat r(\frac {\Delta t}{2}) \hat T(\Delta t)\hat r(\frac {\Delta t}{2})\hat v(\frac {\Delta t}{2}) \\
\end{array}
\tag{7-1} 
$$
其中第一种迭代方案被称为普通迭代方案，第二种方式被称为居中迭代方案，该方案的设计主要参考了文献[[7.1]](#references7_1)。

### 7.1 Andersen控温
Andersen热浴通过周期性地令*NVE*系综体系中的粒子按照Maxwell-Boltzmann分布重新分配速度，从而实现控温。在SPONGE的实现中，每经过设定的步长进行全部原子的速度重分布。速度重分布步长时不宜设置过小，否则会丧失动力学信息，速度时间自相关函数减弱。

### 7.2 Berendsen控温
Berendsen控温是一种变标度控温法。假设体系被放置在温度为$T_0$的热浴中，体系温度为$T(t)$。假设体系与热浴之间的导热过程在唯象上服从Fourier定律：

$$

\begin{array}{l}
 \frac{d T}{d t} = \frac{1}{\tau} \left[T_0 - T(t)\right]
\end{array}
\tag{7-2} 
$$
其中$\tau$的量纲是时间，因此称为弛豫时间。将$T(t+\Delta \frac{1}{2})$在$t-\Delta \frac{t}{2}$处作Taylor展开：
$$
\begin{array}{l}
T\left(t + \frac{\Delta t}{2}\right) = T\left(t - \frac{\Delta t}{2}\right) + \left[ \frac{dT}{dt} \right]_{t - \Delta t / 2} \cdot \Delta t + \mathcal{O}\left[(\Delta t)^2\right]
\end{array}
\tag{7-3} 
$$
再运用Fourier定律得到
$$

\begin{array}{l}
\frac{T(t + \Delta t/2)}{T(t - \Delta t/2)} &\approx 1 + \frac{1}{T(t - \Delta t/2)} \cdot \frac{1}{\tau} [T_0 - T(t - \Delta t/2)] \cdot \Delta t \\
&= 1 + \left[ \frac{T_0}{T(t - \Delta t/2)} - 1 \right] \cdot \frac{\Delta t}{\tau} \equiv \lambda^2 \\
\end{array}
\tag{7-4}
$$
标度因子$\lambda$：
$$
\begin{array}{l}
\lambda = \sqrt{1 + \left[ \frac{T_0}{T(t - \Delta t/2)} - 1 \right] \cdot \frac{\Delta t}{\tau}} = \sqrt{1 + \left( \frac{T_0 - T}{T} \right) \cdot \frac{\Delta t}{\tau}}  
\end{array}
\tag{7-5}
$$
通过将标度因子代入粒子速度从而控制体系温度。
### 7.3 Bussi控温
Bussi控温在Berdensen的基础上引入了Weiner随机项，以保证能够给出正确的动能分布:
$$

\begin{array}{l}

\lambda = \sqrt{1 + \left( \frac{T_0 - T}{T} \right) \cdot \frac{\Delta t}{\tau}} + 2  \sqrt{\frac{T_0}{T f \tau}} \mathrm{d} W
\end{array}
\tag{7-6}
$$
其中$f$是体系自由度，$\mathrm{d}W$是Wiener过程。注意在Berendesen与Bussi控温中，标度因子$\lambda$被限制在$0.8$到$1.2$之间，以避免当其过大时导致模拟体系崩溃。
### 7.4 Langevin控温
(居中)郎之万热浴利用Langevin方程引入涨落与阻尼项，从而对系统进行控温。对于粒子$i$的运动。Langevin方程形式为：
$$
\begin{array}{l}
m_i \frac{d^2 \mathbf{r}_i}{dt^2} = \mathbf{F}_i - \gamma m_i \frac{d \mathbf{r}_i}{dt} + \sqrt{2 \gamma m_i k_B T} \, \mathbf{R}_i(t)
\end{array}
\tag{7-7}
$$

其中$\gamma$为摩擦系数，$\mathbf{R}_i(t)$为标准Weiner过程。阻尼力与随机力共同调控系统温度维持在期望温度，并严格处于正态分布。在SPONGE中两种Langevin控温均已实现，其中居中Langevin控温算法在采样构型边缘分布方面优于传统算法，当使用相同的有限时间间隔时，能够得到更精确的构型相关热力学性质的结果。

### 7.5 Nose-Hoover Chain控温


## 8.控压

控压主要是对周期性边界条件进行更改。类似于控温部分介绍的式(7.1)的分解，CudaSPONGE中对于控压主要采用如下的分解方式（$\hat P(\Delta t) = {\rm exp}(-i\hat L_P\Delta t)$表示控压迭代）

$$
\begin{array}{l}
{\rm exp}(-i\hat L \Delta t) & \approx & \hat v(\frac {\Delta t}{2}) \hat P(\Delta t) \hat T(\Delta t) \hat r(\Delta t)\hat v(\frac {\Delta t}{2}) \\
& \approx & \hat v(\frac {\Delta t}{2}) \hat P(\Delta t)  \hat r(\frac {\Delta t}{2}) \hat T(\Delta t)\hat r(\frac {\Delta t}{2})\hat v(\frac {\Delta t}{2}) \\
\end{array}
\tag{8-1} 
$$

对于NPT系综，我们此时的正则坐标是分数坐标$\mathbf{s}_i$和盒矩阵$\mathbf{b}$的各分量。可以将$\mathbf{s}_i$与$\mathbf{b}$整体代入绝热Lagrange方程：


$$
\begin{array}{l}
L  = (T - U)_{system} + (T-U)_{box}  \\
   = \frac{1}{2} \sum_{i=1}^N m_i \dot{\bold{s_i}}^T \mathbf{b}^T \mathbf{b} \dot{\bold{s_i}} - \sum_{i<j}^N \Phi({r_{ij}} )
     + \frac{1}{2} m_g \mathrm{tr}\left( \dot{\mathbf{b}}^T \dot{\mathbf{b}} \right) - p_{ext} V  \\
  = \frac{1}{2} \sum_{i=1}^N m_i \dot{\bold{s_i}}^T \bold{G} \dot{\bold{s_i}} - \sum_{i<j}^N \Phi({r_{ij}})
     + \frac{1}{2} m_g \mathrm{tr}\left( \dot{\mathbf{b}}^T \dot{\mathbf{b}} \right) - p_{ext} V 
\end{array}
\tag{8-2} 
$$
其中度规矩阵$\bold{G} = \mathbf{b}^T \mathbf{b}$， $m_g$为广义质量，$p_{ext}$为外压。代入Euler-Lagrange方程给出粒子与盒子的动力学演化方程。压强张量（又被称为应力张量、压力张量等）被定义为
$$
\mathbf{\Pi}=-\left(
\begin{array}{l}
P_{\rm ext} & 0 & 0 \\
0 & P_{\rm ext} & 0 \\
0 & 0 & P_{\rm ext} + \gamma_s/b_{zz} \\
\end{array}
\right) + \frac{1}{V}
\left[
\sum_i m_i
\left(
\begin{array}{l}
v_{ix} v_{ix} & v_{ix} v_{iy} & v_{ix} v_{iz} \\
v_{iy} v_{ix} & v_{iy} v_{iy} & v_{iy} v_{iz} \\
v_{iz} v_{ix} & v_{iz} v_{iy} & v_{iz} v_{iz} \\
\end{array}
\right) -
\left(
\begin{array}{l}
\frac{\partial U}{\partial b_{xx}} & \frac{\partial U}{\partial b_{xy}} & \frac{\partial U}{\partial b_{xz}} \\
\frac{\partial U}{\partial b_{yx}} & \frac{\partial U}{\partial b_{yy}} & \frac{\partial U}{\partial b_{yz}} \\
\frac{\partial U}{\partial b_{zx}} & \frac{\partial U}{\partial b_{zy}} & \frac{\partial U}{\partial b_{zz}} \\
\end{array}
\right)
\mathbf{b}^{\rm T}
\right]
\tag{8-4} 
$$

上式中，势能对盒子的偏导数中，势能的自变量是盒子$\mathbf{b}$以及分数坐标$\mathbf{s}_i$，$P_{\rm ext}$是外压，$\gamma_s$是总外xy表面张力（xy方向的所有表面的外表面张力之和），第二项为内压，第二项中的第一小项是动能贡献的内压，第二小项是势能贡献的内压，也被称为维里。注意在CudaSPONGE程序中维里包含前面的负号。

如果我们需要各向同性（Isotropic）或半各向同性（Semiisotropic）或半各向异性（Semianisotropic）变化，可以在各向异性（Anisotropic）的基础上强行施加约束，三种约束后的$\mathbf{\Pi}'$代替原来的$\mathbf{\Pi}$分别为：

$$
\mathbf{\Pi}'=
\left\{
\begin{array}{l}
\frac{1}{3}\left(
\begin{array}{l}
{\rm Tr}(\mathbf{\Pi}) & 0 & 0 \\
0 & {\rm Tr}(\mathbf{\Pi}) & 0 \\
0 & 0 & {\rm Tr}(\mathbf{\Pi}) \\
\end{array}
\right) & {\rm isotropic} \\
\left(
\begin{array}{l}
\frac{1}{2}(\mathbf{\Pi}_{xx} + \mathbf{\Pi}_{yy}) & 0 & 0 \\
0 & \frac{1}{2}(\mathbf{\Pi}_{xx} + \mathbf{\Pi}_{yy}) & 0 \\
0 & 0 & \mathbf{\Pi}_{zz} \\
\end{array} \right) & {\rm semiisotropic} \\
\left(
\begin{array}{l}
\mathbf{\Pi}_{xx} & 0 & 0 \\
0 & \mathbf{\Pi}_{yy} & 0 \\
0 & 0 & \mathbf{\Pi}_{zz} \\
\end{array} \right) & {\rm semianisotropic} \\
\end{array}
\right.
\tag{8-5}
$$

在此基础之上，SPONGE还提供了强行约束$\mathbf{\Pi}$的任意对角元为0的选择。

若势能$U$满足$dU=\sum_{ij} d\mathbf{r}_{ij} \frac{\partial U}{\partial \mathbf{r}_{ij}}=-\sum_{ij} d\mathbf{r}_{ij} \mathbf{F}_{ij}^{\rm T}$，那么对于维里的计算可以通过矩阵展开后使用链式法则简化为：

$$
-
\left(
\begin{array}{l}
\frac{\partial U}{\partial b_{xx}} & \frac{\partial U}{\partial b_{xy}} & \frac{\partial U}{\partial b_{xz}} \\
\frac{\partial U}{\partial b_{yx}} & \frac{\partial U}{\partial b_{yy}} & \frac{\partial U}{\partial b_{yz}} \\
\frac{\partial U}{\partial b_{zx}} & \frac{\partial U}{\partial b_{zy}} & \frac{\partial U}{\partial b_{zz}} \\
\end{array}
\right)
\mathbf{b}^{\rm T} = \sum_{ij}\mathbf{r}^{\rm T}_{ij}\mathbf{F}_{ij}
\tag{8-6}
$$

同样地，如果在计算势能的某部分$U_0$时，如果能保证任意两个粒子之间的距离不超过半个盒子，那么也可以使用粒子的坐标$\mathbf{r}_i$和受到的力$\mathbf{F}_i$简化计算该部分的维里，这对成键相互作用很有用处：

$$
-
\left(
\begin{array}{l}
\frac{\partial U}{\partial b_{xx}} & \frac{\partial U}{\partial b_{xy}} & \frac{\partial U}{\partial b_{xz}} \\
\frac{\partial U}{\partial b_{yx}} & \frac{\partial U}{\partial b_{yy}} & \frac{\partial U}{\partial b_{yz}} \\
\frac{\partial U}{\partial b_{zx}} & \frac{\partial U}{\partial b_{zy}} & \frac{\partial U}{\partial b_{zz}} \\
\end{array}
\right)
\mathbf{b}^{\rm T} = \sum_i \mathbf{r}^{\rm T}_i \mathbf{F}_i
\tag{8-7}
$$

### 8.1 Andersen控压

Andersen控压和Andersen控温同时在文献[[8.1]](#references8_1)中提出，其核心思想是将体积作为一个拓展自由度进行微正则系综和/或正则系综模拟，值得注意的是这个体系中，正则坐标是原子的分数坐标$\mathbf{f}$而不是笛卡尔坐标$\mathbf{r}$。Andersen提出的最初公式只包含了各向同性的控压，而Parrinello和Rahman则在此基础上提出了各向异性的控压方式（文献[[8.2]](#references8_2)。在SPONGE中，这类拓展系综的算法被统一视为Andersen控压的延伸，使用的积分方法与目前存在的各方法均不相同，但总体而言与Martyna、Tuckerman、Tobias和Klein等人（MTTK控压，文献[[8.3]](#references8_3)）较为相近。MTTK提出的控压算法中，使用了Nose-Hoover算法控制盒子的速度，而在SPONGE的实现中则使用Langevin算法控制盒子的速度（文献[[8.4]](#references8_4)），同时我们认为自由度的倒数约等于0，也即$1/N_f \approx 0$。
只看控压步骤，对第$i$个粒子的笛卡尔坐标$\mathbf{r}_i$、笛卡尔速度$\mathbf{v}_i$、盒子的笛卡尔坐标$\mathbf{b}$和笛卡尔速度$\mathbf{g}$的微分表达式如下：

$$
\left\{
\begin{array}{l}
\frac{d\mathbf{r}_i}{dt} & = & \mathbf{r}_i \mathbf{g}\\
\frac{d\mathbf{v}_i}{dt} & = & -\mathbf{v}_i\mathbf{g} \\
\frac{d\mathbf{b}}{dt} & = & \mathbf{b}\mathbf{g} \\
\frac{d\mathbf{g}}{dt} & = & {\rm Langevin}(\mathbf{g})
\end{array}
\right.
\tag{8-8}
$$

各向同性时，上式的$\mathbf{\Pi}$、$\mathbf{R}$、$\mathbf{g}$和$\mathbf{b}$分别退化为标量压强$P$、随机数$R$、盒速度$g$和盒长$l$，易得积分式：

$$
\left\{
\begin{array}{l}
\mathbf{r}'_i & = & {\rm exp}(g\Delta t)\mathbf{r}_i \\
\mathbf{v}'_i & = & (1-g\Delta t)\mathbf{v}_i \\
l' & = & {\rm exp}(g\Delta t)l \\
g' & = & {\rm exp}( -\gamma_{\rm ln} \Delta t) (g  + PV \Delta t/ m_g) + \sqrt{(1 - {\rm exp}(-2\gamma_{\rm ln} \Delta t)) k_{\rm B} T / m_g} R 
\end{array}
\right.
\tag{8-9}
$$

上式中，$m_g$是盒子的质量，$\gamma_{\rm ln}$是Langevin动力学的摩擦系数，$\mathbf{R}$是标准正态分布的随机数。

半各向同性时，上式的$\mathbf{\Pi}$、$\mathbf{R}$、$\mathbf{g}$和$\mathbf{b}$均为对角矩阵，此时对$\forall \alpha \in \{x, y, z\}$，有

$$
\left\{
\begin{array}{l}
\mathbf{r}'_{i\alpha} & = & {\rm exp}(\mathbf{g}_{\alpha\alpha}\Delta t)\mathbf{r}_{i\alpha} \\
\mathbf{v}'_{i\alpha} & = & (1-\mathbf{g}_{\alpha\alpha}\Delta t)\mathbf{v}_{i\alpha} \\
\mathbf{b}_{\alpha\alpha}' & = & {\rm exp}(\mathbf{g}_{\alpha\alpha}\Delta t)\mathbf{b}_{\alpha\alpha} \\
\mathbf{g}_{\alpha\alpha}' & = & {\rm exp}( -\gamma_{\rm ln} \Delta t)(\mathbf{g}_{\alpha\alpha} + \Pi_{\alpha\alpha}V \Delta t/ m_g) + \sqrt{(1 - {\rm exp}(-2\gamma_{\rm ln} \Delta t)) k_{\rm B} T / m_g} R
\end{array}
\right.
\tag{8-10}
$$

各向异性时，将式(8.6)展开进行计算，此时对$\forall \alpha,\beta,\gamma \in \{x, y, z\}$且$\alpha \neq \beta$，有

$$
\left\{
\begin{array}{l}
\mathbf{r}'_{i\alpha} & = & {\rm exp}(\sum_\gamma \frac{\mathbf{r}_{i\gamma}}{\mathbf{r}_{i\alpha}}\mathbf{g}_{\gamma\alpha}\Delta t)\mathbf{r}_{i\alpha} \\
\mathbf{v}'_{i\alpha} & = & \mathbf{v}_{i\alpha} - \sum_\gamma \mathbf{v}_{i\gamma}\mathbf{g}_{\gamma\alpha}\Delta t \\
\mathbf{b}_{\alpha\alpha}' & = & {\rm exp}(\sum_\gamma \frac{\mathbf{b}_{\alpha\gamma }}{\mathbf{b}_{\alpha\alpha}}\mathbf{g}_{\gamma\alpha}\Delta t) \mathbf{b}_{\alpha\alpha} \\
\mathbf{b}_{\alpha\beta}' & = & \mathbf{b}_{\alpha\beta} + \sum_\gamma \mathbf{b}_{\alpha\gamma}\mathbf{g}_{\gamma\beta} \Delta t \\
\mathbf{g}_{\alpha\gamma}' & = & {{\rm exp}( -\gamma_{\rm ln}\Delta t)} (\mathbf{g}_{\alpha\gamma} + \Pi_{\alpha\gamma}V \Delta t/ m_g) + \sqrt{(1 - {\rm exp}(-2\gamma_{\rm ln} \Delta t)) k_{\rm B} T / m_g} R
\end{array}
\right.
\tag{8-11}
$$

### 8.2 Berendsen控压

从Andersen控压出发，${\rm lim} \gamma_{\rm ln} \to \infty, T\to 0$，即有Berendsen控压

$$
\mathbf{g}_{\alpha\beta} = \Pi_{\alpha\beta}V \Delta t/ m_g
\tag{8-12}
$$

### 8.3 Bussi控压

从Andersen控压出发，${\rm lim} \gamma_{\rm ln} \to \infty$，即有Bussi控压

$$
\mathbf{g}_{\alpha\beta} = \Pi_{\alpha\beta}V \Delta t/ m_g + \sqrt{k_{\rm B} T / m_g} R
\tag{8-13}
$$
### 8.4 MC控压

## 9.虚原子

虚原子（virtual atom）也被称虚拟原子、为虚拟相互作用位点（virtual interaction site）、虚拟位点、哑原子（dump atom）等，将部分复杂的势能简化为另一个虚拟的原子的方法。例如对于势能$U=r_0^{-6} + r_0^{-12}$，可以定义$r_v=r_0 ^ 2$，此时$U=r_0^{-6} + r_v^{-6}$，形式更加对称，只需要实现一种计算6次方的代码，并且有的时候物理意义更加明显。当然，这个例子过于简单，势能不加替换更加简单，而实际使用中常见的使用例如TIP4P水分子中的虚原子。在实际使用中，还可以定义多级虚原子，例如$U=r_0^{-6} + r_0^{-12} + r_0^{-24}$，可以定义$r_1=r_0 ^ 2$和$r_2=r_1 ^ 2$，此时$U = r_0^{-6} + r_1^{-6} + r_2^{-6}$。下文为了方便叙述，将实原子称为0级虚原子，定义中的虚原子级别最大为n的称为($n+1$)级虚原子，统一用$\mathbf{r}_n$表示$n$级虚原子的坐标。

对于包含虚原子的模拟，我们先将虚原子当作真实存在的原子进行普通计算，计算完以后需要重新分配力。对势能的原始形式和包含虚原子的形式分别进行微分，有：

$$
\begin{array}{l}
dU & = & d{\mathbf{b}} \left(\frac{\partial U}{\partial \mathbf{b}}\right)_{\mathbf{r}_{0}}  & + & d{\mathbf{r_0}} \left(\frac{\partial U}{\partial \mathbf{r_0}}\right)_{\mathbf{b}} 
\\
& = & d{\mathbf{b}} \left(\frac{\partial U}{\partial \mathbf{b}}\right)_{\mathbf{r}_{i}} & + & \sum_n d{\mathbf{r}_n} \left(\frac{\partial U}{\partial \mathbf{r}_n}\right)_{\mathbf{r}_{i,i \neq n},\mathbf{b}} 
\end{array}
\tag{9-1}
$$

上式中，偏导括号外的部分表示在求偏导时不变的量。

根据上式，对于力的计算，有

$$

\left(\frac{\partial U}{\partial \mathbf{r_0}}\right)_{\mathbf{b}} = 

\sum_n \frac {d{\mathbf{r}_n}}{d\mathbf{r}_0} \left(\frac{\partial U}{\partial \mathbf{r_n}}\right)_{\mathbf{r}_{i,i \neq n},\mathbf{b}} 
\tag{9-2}
$$

${d{\mathbf{r}_n}} / {d\mathbf{r}_0}$可以用链式法则计算。

而对于维里计算，则还需要再将势能按两种情况的分数坐标$\mathbf{f}_n$进行展开，也即有

$$
\begin{array}{l}
dU & = & d{\mathbf{b}} \left(\frac{\partial U}{\partial \mathbf{b}}\right)_{\mathbf{f}_{0}}  & + & d{\mathbf{f_0}} \left(\frac{\partial U}{\partial \mathbf{f_0}}\right)_{\mathbf{b}} 
\\
& = & d{\mathbf{b}} \left(\frac{\partial U}{\partial \mathbf{b}}\right)_{\mathbf{f}_{i}} & + & \sum_n d{\mathbf{f}_n} \left(\frac{\partial U}{\partial \mathbf{f}_n}\right)_{\mathbf{f}_{i,i \neq n},\mathbf{b}} 
\end{array}
\tag{9-3}
$$

结合(9-1)和(9-3)

$$
\begin{array}{l}
\left(\frac{\partial U}{\partial \mathbf{b}}\right)_{\mathbf{f}_{0}} & = & \left(\frac{\partial U}{\partial \mathbf{b}}\right)_{\mathbf{f}_{i}}  & + & \sum_n & \left(\frac{\partial \mathbf{f}_n}{\partial \mathbf{b}}\right)_{\mathbf{f}_{0}} \left(\frac{\partial U}{\partial \mathbf{f}_n}\right)_{\mathbf{f}_{i,i \neq n},\mathbf{b}} \\
& = & \left(\frac{\partial U}{\partial \mathbf{b}}\right)_{\mathbf{f}_{i}} & - & \sum_n  & \left(\frac{\partial \mathbf{f}_n}{\partial \mathbf{b}}\right)_{\mathbf{f}_{0}} \mathbf{b} \mathbf{F}_n^{\rm T}
\end{array}
\tag{9-4}
$$

从上面的讨论中可以看到，计算最关键的就在于获得$\mathbf{r}_n$的定义。

SPONGE中，目前支持5种形式的虚原子，分别定义如下：（以$\mathbf{r}_v$表示虚原子坐标）

- 种类0：依赖一个原子$\mathbf{r}_0$

	$$
  \begin{array}{l}
  \mathbf{r}_v = \mathbf{r}_0 \left(\begin{array}{l} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & -1\end{array}\right) \\
  \mathbf{f}_v = \mathbf{f}_0 \left(\begin{array}{l} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & -1\end{array}\right)
  \end{array}
  $$


- 种类1：依赖2个原子$\mathbf{r}_1$、$\mathbf{r}_2$和1个参数$a$

	$$
  \begin{array}{l}
  \mathbf{r}_v = a \mathbf{r}_{21} \\
  \mathbf{f}_v = a \mathbf{f}_{21}
  \end{array}
  $$


- 种类2：依赖3个原子$\mathbf{r}_1$、$\mathbf{r}_2$、$\mathbf{r}_3$和2个参数$a$、$b$

	$$
  \begin{array}{l}
  \mathbf{r}_v = a \mathbf{r}_{21} + b \mathbf{r}_{31} \\
  \mathbf{f}_v = a \mathbf{f}_{21} + b \mathbf{f}_{31} 
  \end{array}
  $$


- 种类3：依赖3个原子$\mathbf{r}_1$、$\mathbf{r}_2$、$\mathbf{r}_3$和2个参数$d$、$k$。该类目前不支持计算维里。

	$$
  \begin{array}{l}
  \mathbf{r}_v = d * \frac{ \mathbf{r}_{12} + k  \mathbf{r}_{23}} {|\mathbf{r}_{12} + k \mathbf{r}_{23}|}
  \end{array}
  $$

- 种类4：依赖于$n$个原子$\{\mathbf{r}_i\}$和$n$个参数$\{w_i\}$

	$$
  \begin{array}{l}
  \mathbf{r}_v = \sum_i w_i \mathbf{r}_i \\
  \mathbf{f}_v = \sum_i w_i \mathbf{f}_i 
  \end{array}
  $$

# 参考文献
<span id="references1_1">[1.1]</span> https://doi.org/10.5281/zenodo.11148638
<span id="references5_1">[5.1]</span> https://doi.org/10.1021/acs.jctc.3c01124
<span id="references6_1">[6.1]</span> https://doi.org/10.1002/jcc.540130805
<span id="references6_2">[6.2]</span> https://doi.org/10.1016/0021-9991(77)90098-5
<span id="references6_3">[6.3]</span> [https://doi.org/10.1002/(SICI)1096-987X(19980115)19:1<102::AID-JCC9>3.0.CO;2-T](https://doi.org/10.1002/(SICI)1096-987X(19980115)19:1<102::AID-JCC9>3.0.CO;2-T)
<span id="references7_1">[7.1]</span> https://doi.org/10.1021/acs.jpca.9b02771
<span id="references8_1">[8.1]</span> https://doi.org/10.1063/1.439486
<span id="references8_2">[8.2]</span> https://doi.org/10.1103/PhysRevLett.45.1196
<span id="references8_3">[8.3]</span> https://doi.org/10.1080/00268979600100761
<span id="references8_4">[8.4]</span> https://doi.org/10.1063/1.470648