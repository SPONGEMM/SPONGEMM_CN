---
title: "Reference Manual"
description: "CudaSPONGE reference manual for SPONGE 1.4."
version: "SPONGE 1.4"
section: "CudaSPONGE Documentation"
order: 6
---

> This page was translated by GPT-5.5 AI.

# CudaSPONGE Reference Manual

## 1. Preface and Disclaimer

This manual is organized with reference to the GROMACS reference manual [[1.1]](#references1_1), but it is not a Chinese translation of that manual. Instead, it follows a similar structure to describe the various settings in CudaSPONGE. In fact, after reading the code of many MD simulation packages, one can see that almost every MD package makes appropriate adjustments to algorithms from the literature. CudaSPONGE also contains such adjustments, and explaining them is the purpose of this reference manual.

This manual is incomplete. Because the authors have limited time, and because our highest priority is improving SPONGE, this manual does not aim to be exhaustive. It is still being improved, and some information may be incomplete or not fully correct.

Comments on both form and content are welcome. Relevant information can be added directly in the discussion on this page.

## 2. SPONGE

"Molecular simulation" is an interesting term. In Chinese, the same phrase can be used to translate two English expressions: molecular simulation and molecular modeling. Although these two expressions can also be translated in ways that distinguish them from each other, in many Chinese contexts both are still rendered as "molecular simulation". Molecular modeling broadly refers to the general process of describing complex chemical systems through various molecular models, with the goal of understanding and predicting macroscopic properties from detailed atomic-scale knowledge. Molecular simulation, by contrast, usually refers to specific atom-based simulation methods represented by molecular dynamics simulations and Monte Carlo simulations.

The full name of SPONGE is "Simulation Package tOwards Next GEneration molecular modeling", that is, a simulation package for next-generation molecular modeling. The name contains two uses of "simulation", but their meanings differ as described above. The name also shows that the head phrase of SPONGE is "Simulation Package", meaning simulation software. Its core still focuses mainly on molecular simulation, while its goal is to become a next-generation molecular modeling tool, meaning that its direction is more comprehensive and more advanced molecular modeling. At present, SPONGE is mainly a molecular dynamics simulation tool, with several additional molecular simulation capabilities.

## 3. Basic Mathematical Definitions

### 3.1 Matrix and Vector Definitions

This document involves many physical quantities. Matrices and vectors are written in bold, such as the force vector $\mathbf{F}$ and pressure tensor $\mathbf{\Pi}$; scalars are written in italics, such as the force magnitude $F$. A vector is regarded as a matrix whose row or column dimension is 1. A row vector has one row, and a column vector has one column.

Unless otherwise stated, vectors are row vectors. For example, the force vector of a particle has shape $(1,3)$:

$$
\mathbf{F} =
\left(
\begin{array}{ccc}
F_x & F_y & F_z
\end{array}
\right)
\tag{3-1}
$$

In CudaSPONGE, the corresponding vector is represented by the data structure `VECTOR`.

For a matrix $\mathbf{Y}$ with shape $(m,n)$, its derivative with respect to a scalar $x$ is written as $\frac{\partial\mathbf{Y}}{\partial x}$. The result is a matrix with shape $(m,n)$, defined as:

$$
\frac{\partial\mathbf{Y}}{\partial x} =
\left(
\begin{array}{cccc}
\frac{\partial y_{11}}{\partial x} & \frac{\partial y_{12}}{\partial x} & \cdots & \frac{\partial y_{1n}}{\partial x} \\
\frac{\partial y_{21}}{\partial x} & \frac{\partial y_{22}}{\partial x} & \cdots & \frac{\partial y_{2n}}{\partial x} \\
\cdots & \cdots & \ddots & \cdots \\
\frac{\partial y_{m1}}{\partial x} & \frac{\partial y_{m1}}{\partial x} & \cdots & \frac{\partial y_{mn}}{\partial x} \\
\end{array}
\right)
\tag{3-2}
$$

For a matrix $\mathbf{Y}$ with shape $(p,q)$, its derivative with respect to a matrix $\mathbf{X}$ with shape $(m,n)$ is written as $\frac{\partial\mathbf{Y}}{\partial\mathbf{X}}$. The result is a matrix with shape $(mn,pq)$, defined as:

$$
\frac{\partial \mathbf{Y}}{\partial \mathbf{X}} =
\left(
\begin{array}{cccccc}
\frac{\partial y_{11}}{\partial x_{11}} & \frac{\partial y_{21}}{\partial x_{11}} & \cdots & \frac{\partial y_{p1}}{\partial x_{11}} & \cdots & \frac{\partial y_{pq}}{\partial x_{11}} \\
\frac{\partial y_{11}}{\partial x_{21}} & \frac{\partial y_{21}}{\partial x_{21}} & \cdots & \frac{\partial y_{p1}}{\partial x_{21}} & \cdots & \frac{\partial y_{pq}}{\partial x_{21}} \\
\cdots & \cdots & \ddots & \cdots &\ddots & \cdots \\
\frac{\partial y_{11}}{\partial x_{mn}} & \frac{\partial y_{21}}{\partial x_{mn}} & \cdots & \frac{\partial y_{p1}}{\partial x_{mn}} & \cdots & \frac{\partial y_{pq}}{\partial x_{mn}} \\
\end{array}
\right)
\tag{3-3}
$$

This derivative convention, in which the denominator is expanded first, is called denominator layout. The derivative convention expanded by the numerator is called numerator layout, and the two are transposes of each other.

For a matrix $\mathbf{X}$ with shape $(m,n)$ and a matrix $\mathbf{Y}$ with shape $(n,l)$, their matrix product is written as $\mathbf{X}\mathbf{Y}$. The result is a matrix with shape $(m,l)$, defined as:

$$
\mathbf{X}\mathbf{Y} =
\left(
\begin{array}{cccc}
\sum_i^n x_{1i}y_{i1} & \sum_i^n x_{1i}y_{i2} & \cdots & \sum_i^n x_{1i}y_{il} \\
\sum_i^n x_{2i}y_{i1} & \sum_i^n x_{2i}y_{i2} & \cdots & \sum_i^n x_{2i}y_{il} \\
\cdots & \cdots & \ddots & \cdots \\
\sum_i^n x_{mi}y_{m1} & \sum_i^n x_{mi}y_{i2} & \cdots & \sum_i^n x_{mi}y_{il} \\
\end{array}
\right)
\tag{3-4}
$$

For a matrix $\mathbf{X}$ with shape $(m,n)$ and a matrix $\mathbf{Y}$ with shape $(m,n)$, their inner product is written as ${\rm tr}(\mathbf{X}^{\rm T}\mathbf{Y})$. The result is a scalar, defined as:

$$
{\rm tr}(\mathbf{X}^{\rm T}\mathbf{Y}) = \sum_i^m\sum_j^n x_{ij}y_{ij}
\tag{3-5}
$$

For a matrix $\mathbf{X}$ with shape $(m,n)$ and a matrix $\mathbf{Y}$ with shape $(p,q)$, their outer product is written as $\mathbf{X} \otimes \mathbf{Y}$. The result is a matrix with shape $(mp,qn)$, defined as:

$$
\mathbf{X} \otimes \mathbf{Y} =
\left(
\begin{array}{cccc}
x_{11}\mathbf{Y} & x_{12}\mathbf{Y} & \cdots & x_{1n}\mathbf{Y} \\
x_{21}\mathbf{Y} & x_{22}\mathbf{Y} & \cdots & x_{2n}\mathbf{Y} \\
\cdots & \cdots & \ddots & \cdots \\
x_{m1}\mathbf{Y} & x_{m2}\mathbf{Y} & \cdots & x_{mn}\mathbf{Y} \\
\end{array}
\right)
\tag{3-6}
$$

From the definitions above, several important results follow, including the chain rule for derivatives:

$$
\frac{\partial \mathbf{Z}}{\partial \mathbf{X}} =
\frac{\partial \mathbf{Y}}{\partial \mathbf{X}}
\frac{\partial \mathbf{Z}}{\partial \mathbf{Y}}
\tag{3-7}
$$

For any $\mathbf{Y}=\mathbf{A}\mathbf{X}\mathbf{B}$,

$$
\frac{\partial \mathbf{Y}}{\partial \mathbf{X}} =
\mathbf{B} \otimes \mathbf{A}^{\rm T}
\tag{3-8}
$$

$$
$$

### 3.2 Unit System

CudaSPONGE uses its own unit system internally. Units used for data exchange outside the program are set according to the specific situation.

The internal units are:

| Physical quantity | Unit | Explanation |
| --- | --- | --- |
| Length | Å | $\rm 10^{-10}\ m$ |
| Time | 20.455 fs | $\rm 20.455 \times 10^{-12}\ s$ |
| Velocity | Å/(20.455 fs) | Length unit divided by time unit |
| Charge | 18.2223 e | e is the elementary charge |
| Mass | Da | 1/12 of the mass of a carbon-12 atom |
| Temperature | K | Thermodynamic temperature scale |
| Energy | kcal/mol | $\rm 1\ kcal/mol = 4.184\ kJ/mol$ |
| Force | kcal/mol/Å |  |
| Pressure | $\rm 1.4395\times10^{-5}\ bar$ | $N_{\rm A}/( 4.184\times10^{28})$ |

The charge unit is chosen so that, in this unit system, the coefficient in Coulomb's law is 1:

$$
E_{\rm Coulomb} = \frac{q_1q_2}{r_{12}} \tag{3-9}
$$

The time unit is chosen so that, in this unit system, the coefficient in the kinetic-energy calculation is $\frac{1}{2}$:

$$
E_{\rm kinetic} = \frac{1}{2}mv^2 \tag{3-10}
$$

The pressure unit is chosen so that, in this unit system, the coefficient in the calculation of volume work is 1:

$$
W = PV \tag{3-11}
$$

## 4. Molecular Dynamics

Molecular dynamics is based on classical mechanics. Here it is briefly described through Newtonian mechanics and Hamiltonian mechanics.

### 4.1 Newtonian Mechanics

For any system, we can calculate the force $\mathbf{F}$ at any time, and then use Newton's laws to calculate particle velocities $\mathbf{v}$ and positions $\mathbf{r}$:

$$
\left\{
\begin{array}{l}
\frac{d\mathbf{v}}{dt}=\frac{\mathbf{F}}{m} \\
\frac{d\mathbf{r}}{dt}=\mathbf{v}
\end{array}
\right.
\tag{4-1}
$$

Integrating this system of differential equations over time $t$ gives the motion of particles over time. In SPONGE, the leapfrog method is used as the integration method:

$$
\left\{
\begin{array}{l}
\mathbf{v}(t+0.5\Delta t)=\mathbf{v}(t-0.5\Delta t) + \frac{\mathbf{F}}{m} \Delta t\\
\mathbf{r}(t+\Delta t)=\mathbf{r}(t) + \mathbf{v}(t+0.5\Delta t)\Delta t
\end{array}
\right.
\tag{4-2}
$$

### 4.2 Hamiltonian Mechanics

In Hamiltonian mechanics, the Hamiltonian $\mathscr{H}$ is defined using canonical coordinates $\{q\}$ and canonical momenta $\{p\}$. It can usually be written as the sum of kinetic energy $T(\{p\})$ and potential energy $U(\{q\})$:

$$
\mathscr{H}=T + U \tag{4-3}
$$

Hamilton's canonical equations are:

$$
\left\{
\begin{array}{l}
\frac{dp_i}{dt} = -\frac {\partial \mathscr{H}}{\partial q_i} \\
\frac{dq_i}{dt} = \frac {\partial \mathscr{H}}{\partial p_i} \\
\end{array}
\right.
\tag{4-4}
$$

It is easy to see that equations (4-1) and (4-4) are actually completely equivalent, only written differently.

Phase space is the space containing all canonical coordinates and canonical momenta of the system. At a time $t$, for an infinitesimal volume element $d\mathbf{q}d\mathbf{p}$, the probability density that the system appears at that point is $\rho(\mathbf{q},\mathbf{p},t)$. This quantity is also called the distribution function.

A key equation in molecular dynamics simulation is the Liouville equation, which states that the distribution function is constant along any trajectory in phase space:

$$
\frac{d\rho(\mathbf{q},\mathbf{p},t)}{dt} = 0 \tag{4-5}
$$

Expanding equation (4-5) gives:

$$
\frac {\partial \rho}{\partial t} + \sum_i(\frac {\partial \rho}{\partial q_i} \frac {dq_i}{dt}+ \frac {\partial \rho}{\partial p_i}\frac {dp_i}{dt}) = 0 \tag{4-6}
$$

Using Hamilton's canonical equations (4-4) to replace the total time-derivative terms in equation (4-6), and defining the Liouville operator

$$
i\hat L= \sum_i\Big(\frac{\partial \mathscr H}{\partial p_i} \frac{\partial}{\partial q_i} - \frac{\partial \mathscr H}{\partial q_i} \frac{\partial}{\partial p_i}\Big)
\tag{4-7}
$$

gives the Liouville equation:

$$
\frac{\partial \rho} {\partial t} = -i\hat L \rho
\tag{4-8}
$$

This equation is very similar to the time-dependent Schrödinger equation, differing only by a factor of $\hbar$:

$$
i\hbar \frac{\partial \varphi} {\partial t} = \hat H \varphi
\tag{4-9}
$$

Solving the differential equation shown in equation (4-8) gives:

$$
\rho(\mathbf{q},\mathbf{p},t) = {\rm exp}(-i\hat Lt)\rho(\mathbf{q},\mathbf{p},0) \tag{4-10}
$$

For this exponential form, there is the Trotter-Suzuki decomposition:

$$
{\rm exp}(-i(\hat A + \hat B)t) \approx {\rm exp}(-i\hat At) {\rm exp}(-i\hat Bt) \tag{4-11}
$$

The Trotter-Suzuki decomposition is very important. First, using $t =\frac{t}{\Delta t}{\Delta t}$, the evolution can be decomposed into $\big({\rm exp}(-i\hat L\Delta t)\big)^{\frac{t}{\Delta t}}$, meaning that a long simulation can be split into many short simulations. Similarly, the kinetic and potential energy terms in $\mathscr H$ can be separated, meaning that velocities and positions can be updated in sequence. This decomposition is also used later in temperature and pressure control.

## 5. Periodic Boundary Conditions (PBC)

### 5.1 Three-Dimensional Periodic Boundary Conditions

Most simulations use three-dimensional periodic boundary conditions, meaning that the simulation contains only one unit cell, while the system is treated as an infinite spatial repetition of that cell. The following figure is an example of two-dimensional PBC from the GROMACS manual.
![pbctric.png](/assets/docs/1p4/pbctric.png)

A unit cell can be described by the lengths of its three edges, $l_x$, $l_y$, and $l_z$, and the angles $\alpha$, $\beta$, and $\gamma$. It can also be described by constructing a box matrix $\mathbf{b}$ from the vectors of the three edges. By choosing a suitable coordinate system, the first edge $\mathbf{l}_x$ can be placed on the $x$ axis, the second edge $\mathbf{l}_y$ can be placed in the $xy$ plane, and the third edge $\mathbf{l}_z$ can have an arbitrary position. The box matrix $\mathbf{b}$ is then a triangular matrix. Here, each row of the matrix is taken as a row vector of an edge, so the matrix can be written as a lower triangular matrix:

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
\begin{array}{lll}
b_{xx} & 0 & 0 \\
b_{yx} & b_{yy} & 0 \\
b_{zx} & b_{zy} & b_{zz}
\end{array}
\right)
\tag{5-1}
$$

The volume is $V = {\rm det}(\mathbf{b}) = b_{xx}b_{yy}b_{zz}$. The inverse matrix $\mathbf{b}^{-1}$ is also lower triangular, and each of its columns is a column vector in reciprocal space.

The conversion between fractional coordinates $\mathbf{s}$ and Cartesian coordinates $\mathbf{r}$ for any position or displacement is:

$$
\left\{
\begin{array}{l}
\mathbf{s} = \mathbf{r} \mathbf{b}^{-1}\\
\mathbf{r} = \mathbf{s} \mathbf{b}
\end{array}
\right.
\tag{5-2}
$$

Under periodic boundaries, the shortest mapped displacement $\mathbf{r}_{ij}$ between particles $i$ and $j$ is:

$$
\mathbf{r}_{ij} = \mathbf{r}_i - \mathbf{r}_j - {\rm floor}((\mathbf{r}_i - \mathbf{r}_j)\mathbf{b}^{-1}+\mathbf{C})\mathbf{b}
\tag{5-3}
$$

where $\mathbf{C} = (0.5\ 0.5\ 0.5)$, and ${\rm floor}$ means taking the floor of each vector component.

In simulations, particle sums are usually required to include only particles within the cutoff distance $r_c$. Particles must not see their own images within $r_c$, so periodic boundaries require the box lengths to be larger than twice the cutoff distance:

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

Translating a particle's Cartesian coordinates by any number of periods is equivalent for the system. It does not affect the simulation itself, only visualization in the output trajectory. When CudaSPONGE stores particle coordinates, it always stores them as positive values closest to the origin while preserving molecular integrity.

### 5.2 Other Boundary Conditions

The implementation in CudaSPONGE essentially contains only three-dimensional periodic boundary conditions, but by modifying their use they can be treated as other boundary conditions.

For simulations with non-periodic boundary conditions, CudaSPONGE stores an additional set of coordinates without periodic mapping for computing nonbonded interactions. Bonded interactions, however, still use the conditions under periodic boundary conditions, so the box edge lengths must be set large enough in the input to avoid errors.

For pseudo-two-dimensional periodic boundary conditions, the non-periodic dimension can only be the z axis. In the z direction, short-range nonbonded interactions and bonded interactions are still treated as under periodic boundary conditions, so the z-axis box length must be set carefully. For long-range nonbonded interactions, an additional PMC-IZ algorithm is provided [[5.1]](#references5_1).

## 6. Constraints

Here, "constrain" and "constraint" are translated as "constraint", while "restrain" and "restraint" are translated as "restraint". The distinction is defined as follows: a constraint is enforced by an algorithm, whereas a restraint adds an energy penalty term.

### 6.1 SETTLE

SETTLE is an iterative analytical solution for preserving the shape of water. By default, if a constraint algorithm is used, SETTLE is applied to water. The SETTLE implementation is based on reference [[6.1]](#references6_1), but it does not require the triangle to be isosceles and also adds corrections for velocity and pressure.

### 6.2 SHAKE

SHAKE computes constraints iteratively. Its implementation mainly follows references [[6.2]](#renferences6_2) and [[6.3]](#references6_3).

The main idea is as follows. For a pair of particles whose displacement before the update is $\mathbf{r_0}$, after the update the force is repeatedly corrected, and the coordinates and pressure are recalculated, until the distance reaches the preset distance $d$.

Assuming that the distance after the $i$-th update is $\mathbf{r}_i$, the corrective force $\mathbf{F}$ applied in this iteration is:

$$
\mathbf{F}=\frac{1}{2}\frac{\mathbf{r}_i^2-d^2}{\mathbf{r}_i \mathbf{r}_0}\mathbf{r_0}
\tag{6-1}
$$

If angles need to be constrained, CudaSPONGE can convert the angle constraint into a distance constraint using the law of cosines. However, such constraints are usually unphysical, difficult to converge, and provide little help for increasing the time step, so constraining angles is not recommended.

## 7. Temperature Control

Temperature control mainly changes particle velocities. The Trotter-Suzuki decomposition mentioned above tells us that velocity and position updates can be iterated sequentially. Similarly, for temperature control, the corresponding correction to particle velocities can also be iterated separately, although there are several different ways to compute it. We use $\hat T(\Delta t) = {\rm exp}(-i\hat L_T\Delta t)$ to denote the temperature-control iteration, $\hat r(\Delta t) = {\rm exp}(-i\hat L_r\Delta t)$ to denote position iteration, and $\hat v(\Delta t) = {\rm exp}(-i\hat L_v\Delta t)$ to denote velocity iteration. Typical decompositions are:

$$
\begin{array}{lll}
{\rm exp}(-i\hat L \Delta t) & \approx & \hat v(\frac {\Delta t}{2}) \hat T(\Delta t) \hat r(\Delta t)\hat v(\frac {\Delta t}{2}) \\
& \approx &\hat v(\frac {\Delta t}{2})\hat r(\frac {\Delta t}{2}) \hat T(\Delta t)\hat r(\frac {\Delta t}{2})\hat v(\frac {\Delta t}{2}) \\
\end{array}
\tag{7-1}
$$

The first iteration scheme is called the ordinary iteration scheme, and the second is called the middle iteration scheme. The design of the latter mainly follows reference [[7.1]](#references7_1).

### 7.1 Andersen Temperature Control

The Andersen thermostat controls temperature by periodically redistributing velocities of particles in an *NVE* ensemble according to the Maxwell-Boltzmann distribution. In the SPONGE implementation, velocities of all atoms are redistributed after a specified number of steps. The velocity redistribution interval should not be set too small; otherwise, dynamical information is lost and the velocity time autocorrelation function is weakened.

### 7.2 Berendsen Temperature Control

Berendsen temperature control is a velocity-scaling thermostat. Suppose the system is placed in a heat bath with temperature $T_0$, and the system temperature is $T(t)$. Assume that heat conduction between the system and the heat bath phenomenologically follows Fourier's law:

$$
\begin{array}{l}
\frac{d T}{d t} = \frac{1}{\tau} \left[T_0 - T(t)\right]
\end{array}
\tag{7-2}
$$

Here, $\tau$ has the dimension of time and is therefore called the relaxation time. Taylor-expanding $T(t+\Delta t/2)$ about $t-\Delta t/2$ gives:

$$
\begin{array}{l}
T\left(t + \frac{\Delta t}{2}\right) = T\left(t - \frac{\Delta t}{2}\right) + \left[ \frac{dT}{dt} \right]_{t - \Delta t / 2} \cdot \Delta t + \mathcal{O}\left[(\Delta t)^2\right]
\end{array}
\tag{7-3}
$$

Applying Fourier's law gives:

$$
\begin{array}{ll}
\frac{T(t + \Delta t/2)}{T(t - \Delta t/2)} &\approx 1 + \frac{1}{T(t - \Delta t/2)} \cdot \frac{1}{\tau} [T_0 - T(t - \Delta t/2)] \cdot \Delta t \\
&= 1 + \left[ \frac{T_0}{T(t - \Delta t/2)} - 1 \right] \cdot \frac{\Delta t}{\tau} \equiv \lambda^2 \\
\end{array}
\tag{7-4}
$$

The scaling factor $\lambda$ is:

$$
\begin{array}{l}
\lambda = \sqrt{1 + \left[ \frac{T_0}{T(t - \Delta t/2)} - 1 \right] \cdot \frac{\Delta t}{\tau}} = \sqrt{1 + \left( \frac{T_0 - T}{T} \right) \cdot \frac{\Delta t}{\tau}}
\end{array}
\tag{7-5}
$$

The system temperature is controlled by applying this scaling factor to particle velocities.

### 7.3 Bussi Temperature Control

Bussi temperature control introduces a Wiener random term on the basis of Berendsen temperature control to ensure the correct kinetic-energy distribution:

$$
\begin{array}{l}
\lambda = \sqrt{1 + \left( \frac{T_0 - T}{T} \right) \cdot \frac{\Delta t}{\tau}} + 2 \sqrt{\frac{T_0}{T f \tau}} \mathrm{d} W
\end{array}
\tag{7-6}
$$

Here, $f$ is the number of degrees of freedom of the system, and $\mathrm{d}W$ is a Wiener process. Note that in both Berendsen and Bussi temperature control, the scaling factor $\lambda$ is limited to the range $0.8$ to $1.2$ to avoid simulation crashes when it becomes too large.

### 7.4 Langevin Temperature Control

The middle Langevin thermostat introduces fluctuation and damping terms through the Langevin equation to control the system temperature. For particle $i$, the Langevin equation is:

$$
\begin{array}{l}
m_i \frac{d^2 \mathbf{r}_i}{dt^2} = \mathbf{F}_i - \gamma m_i \frac{d \mathbf{r}_i}{dt} + \sqrt{2 \gamma m_i k_B T} \, \mathbf{R}_i(t)
\end{array}
\tag{7-7}
$$

Here, $\gamma$ is the friction coefficient, and $\mathbf{R}_i(t)$ is a standard Wiener process. The damping force and random force jointly regulate the system temperature and keep it at the desired temperature, with a strict normal distribution. Both Langevin temperature-control algorithms are implemented in SPONGE. The middle Langevin thermostat is superior to the traditional algorithm for sampling the configurational marginal distribution; with the same finite time interval, it can produce more accurate results for configuration-dependent thermodynamic properties.

### 7.5 Nose-Hoover Chain Temperature Control

## 8. Pressure Control

Pressure control mainly changes the periodic boundary conditions. Similar to the decomposition in equation (7.1) introduced in the temperature-control section, CudaSPONGE mainly uses the following decomposition for pressure control, where $\hat P(\Delta t) = {\rm exp}(-i\hat L_P\Delta t)$ denotes the pressure-control iteration:

$$
\begin{array}{lll}
{\rm exp}(-i\hat L \Delta t) & \approx & \hat v(\frac {\Delta t}{2}) \hat P(\Delta t) \hat T(\Delta t) \hat r(\Delta t)\hat v(\frac {\Delta t}{2}) \\
& \approx & \hat v(\frac {\Delta t}{2}) \hat P(\Delta t) \hat r(\frac {\Delta t}{2}) \hat T(\Delta t)\hat r(\frac {\Delta t}{2})\hat v(\frac {\Delta t}{2}) \\
\end{array}
\tag{8-1}
$$

For the NPT ensemble, the canonical coordinates are now the fractional coordinates $\mathbf{s}_i$ and the components of the box matrix $\mathbf{b}$. We can substitute $\mathbf{s}_i$ and $\mathbf{b}$ together into the adiabatic Lagrange equation:

$$
\begin{array}{l}
L = (T - U)_{system} + (T-U)_{box} \\
= \frac{1}{2} \sum_{i=1}^N m_i \dot{\bold{s_i}}^T \mathbf{b}^T \mathbf{b} \dot{\bold{s_i}} - \sum_{i<j}^N \Phi({r_{ij}} )
+ \frac{1}{2} m_g \mathrm{tr}\left( \dot{\mathbf{b}}^T \dot{\mathbf{b}} \right) - p_{ext} V \\
= \frac{1}{2} \sum_{i=1}^N m_i \dot{\bold{s_i}}^T \bold{G} \dot{\bold{s_i}} - \sum_{i<j}^N \Phi({r_{ij}})
+ \frac{1}{2} m_g \mathrm{tr}\left( \dot{\mathbf{b}}^T \dot{\mathbf{b}} \right) - p_{ext} V
\end{array}
\tag{8-2}
$$

Here, the metric matrix is $\bold{G} = \mathbf{b}^T \mathbf{b}$, $m_g$ is a generalized mass, and $p_{ext}$ is the external pressure. Substitution into the Euler-Lagrange equations gives the dynamical evolution equations for particles and the box:

$$
\begin{array}{l}
\displaystyle \frac{d}{dt}\left(\frac{\partial L}{\partial \dot{\mathbf{s}}_i}\right)
- \frac{\partial L}{\partial \mathbf{s}_i}=0 \\
\displaystyle \frac{d}{dt}\left(\frac{\partial L}{\partial \dot{\mathbf{b}}}\right)
- \frac{\partial L}{\partial \mathbf{b}}=0
\end{array}
\tag{8-3}
$$

The pressure tensor, also called the stress tensor or pressure tensor in different contexts, is defined as:

$$
\begin{aligned}
\mathbf{\Pi}=&-\left(
\begin{array}{lll}
P_{\rm ext} & 0 & 0 \\
0 & P_{\rm ext} & 0 \\
0 & 0 & P_{\rm ext} + \gamma_s/b_{zz} \\
\end{array}
\right) \\
&+ \frac{1}{V}
\left[
\sum_i m_i
\left(
\begin{array}{lll}
v_{ix} v_{ix} & v_{ix} v_{iy} & v_{ix} v_{iz} \\
v_{iy} v_{ix} & v_{iy} v_{iy} & v_{iy} v_{iz} \\
v_{iz} v_{ix} & v_{iz} v_{iy} & v_{iz} v_{iz} \\
\end{array}
\right) \right. \\
&\left.\qquad -
\left(
\begin{array}{lll}
\frac{\partial U}{\partial b_{xx}} & \frac{\partial U}{\partial b_{xy}} & \frac{\partial U}{\partial b_{xz}} \\
\frac{\partial U}{\partial b_{yx}} & \frac{\partial U}{\partial b_{yy}} & \frac{\partial U}{\partial b_{yz}} \\
\frac{\partial U}{\partial b_{zx}} & \frac{\partial U}{\partial b_{zy}} & \frac{\partial U}{\partial b_{zz}} \\
\end{array}
\right)
\mathbf{b}^{\rm T}
\right]
\end{aligned}
\tag{8-4}
$$

In the equation above, for the partial derivatives of the potential energy with respect to the box, the independent variables of the potential energy are the box $\mathbf{b}$ and the fractional coordinates $\mathbf{s}_i$. $P_{\rm ext}$ is the external pressure, and $\gamma_s$ is the total external surface tension in the xy direction, meaning the sum of the external surface tensions of all surfaces in the xy direction. The second term is the internal pressure. Within the second term, the first subterm is the kinetic contribution to the internal pressure, while the second subterm is the potential-energy contribution, also called the virial. Note that in CudaSPONGE the virial includes the preceding minus sign.

If isotropic, semiisotropic, or semianisotropic changes are needed, constraints can be forcibly imposed on the basis of the anisotropic form. The constrained $\mathbf{\Pi}'$ values replacing the original $\mathbf{\Pi}$ are:

$$
\mathbf{\Pi}'=
\left\{
\begin{array}{lll}
\frac{1}{3}\left(
\begin{array}{lll}
{\rm Tr}(\mathbf{\Pi}) & 0 & 0 \\
0 & {\rm Tr}(\mathbf{\Pi}) & 0 \\
0 & 0 & {\rm Tr}(\mathbf{\Pi}) \\
\end{array}
\right) & {\rm isotropic} \\
\left(
\begin{array}{lll}
\frac{1}{2}(\mathbf{\Pi}_{xx} + \mathbf{\Pi}_{yy}) & 0 & 0 \\
0 & \frac{1}{2}(\mathbf{\Pi}_{xx} + \mathbf{\Pi}_{yy}) & 0 \\
0 & 0 & \mathbf{\Pi}_{zz} \\
\end{array} \right) & {\rm semiisotropic} \\
\left(
\begin{array}{lll}
\mathbf{\Pi}_{xx} & 0 & 0 \\
0 & \mathbf{\Pi}_{yy} & 0 \\
0 & 0 & \mathbf{\Pi}_{zz} \\
\end{array} \right) & {\rm semianisotropic} \\
\end{array}
\right.
\tag{8-5}
$$

On this basis, SPONGE also provides an option to forcibly constrain any diagonal element of $\mathbf{\Pi}$ to 0.

If the potential energy $U$ satisfies $dU=\sum_{ij} d\mathbf{r}_{ij} \frac{\partial U}{\partial \mathbf{r}_{ij}}=-\sum_{ij} d\mathbf{r}_{ij} \mathbf{F}_{ij}^{\rm T}$, then the virial calculation can be simplified by expanding the matrices and applying the chain rule:

$$
-
\left(
\begin{array}{lll}
\frac{\partial U}{\partial b_{xx}} & \frac{\partial U}{\partial b_{xy}} & \frac{\partial U}{\partial b_{xz}} \\
\frac{\partial U}{\partial b_{yx}} & \frac{\partial U}{\partial b_{yy}} & \frac{\partial U}{\partial b_{yz}} \\
\frac{\partial U}{\partial b_{zx}} & \frac{\partial U}{\partial b_{zy}} & \frac{\partial U}{\partial b_{zz}} \\
\end{array}
\right)
\mathbf{b}^{\rm T} = \sum_{ij}\mathbf{r}^{\rm T}_{ij}\mathbf{F}_{ij}
\tag{8-6}
$$

Similarly, if, when computing some part $U_0$ of the potential energy, it can be guaranteed that the distance between any two particles does not exceed half the box length, then the virial of that part can also be simplified using particle coordinates $\mathbf{r}_i$ and forces $\mathbf{F}_i$. This is useful for bonded interactions:

$$
-
\left(
\begin{array}{lll}
\frac{\partial U}{\partial b_{xx}} & \frac{\partial U}{\partial b_{xy}} & \frac{\partial U}{\partial b_{xz}} \\
\frac{\partial U}{\partial b_{yx}} & \frac{\partial U}{\partial b_{yy}} & \frac{\partial U}{\partial b_{yz}} \\
\frac{\partial U}{\partial b_{zx}} & \frac{\partial U}{\partial b_{zy}} & \frac{\partial U}{\partial b_{zz}} \\
\end{array}
\right)
\mathbf{b}^{\rm T} = \sum_i \mathbf{r}^{\rm T}_i \mathbf{F}_i
\tag{8-7}
$$

### 8.1 Andersen Pressure Control

Andersen pressure control and Andersen temperature control were both proposed in reference [[8.1]](#references8_1). The core idea is to treat the volume as an extended degree of freedom for microcanonical and/or canonical ensemble simulations. It is worth noting that in this system, the canonical coordinates are the fractional coordinates $\mathbf{f}$ of atoms rather than their Cartesian coordinates $\mathbf{r}$. Andersen's original formulation included only isotropic pressure control, while Parrinello and Rahman later proposed an anisotropic pressure-control method based on it (reference [[8.2]](#references8_2)). In SPONGE, this class of extended-ensemble algorithms is uniformly regarded as an extension of Andersen pressure control. The integration method used here is different from all currently existing methods, but overall it is relatively close to the method of Martyna, Tuckerman, Tobias, and Klein (MTTK pressure control, reference [[8.3]](#references8_3)). In the pressure-control algorithm proposed by MTTK, the Nose-Hoover algorithm is used to control box velocities. In the SPONGE implementation, the Langevin algorithm is instead used to control box velocities (reference [[8.4]](#references8_4)). We also take the reciprocal of the number of degrees of freedom to be approximately zero, namely $1/N_f \approx 0$.

Considering only the pressure-control step, the differential expressions for the Cartesian coordinate $\mathbf{r}_i$ and Cartesian velocity $\mathbf{v}_i$ of particle $i$, the Cartesian coordinate of the box $\mathbf{b}$, and the Cartesian velocity of the box $\mathbf{g}$ are:

$$
\left\{
\begin{array}{lll}
\frac{d\mathbf{r}_i}{dt} & = & \mathbf{r}_i \mathbf{g}\\
\frac{d\mathbf{v}_i}{dt} & = & -\mathbf{v}_i\mathbf{g} \\
\frac{d\mathbf{b}}{dt} & = & \mathbf{b}\mathbf{g} \\
\frac{d\mathbf{g}}{dt} & = & {\rm Langevin}(\mathbf{g})
\end{array}
\right.
\tag{8-8}
$$

In the isotropic case, $\mathbf{\Pi}$, $\mathbf{R}$, $\mathbf{g}$, and $\mathbf{b}$ in the equation above reduce respectively to the scalar pressure $P$, random number $R$, box velocity $g$, and box length $l$. The integration formula is then:

$$
\left\{
\begin{array}{lll}
\mathbf{r}'_i & = & {\rm exp}(g\Delta t)\mathbf{r}_i \\
\mathbf{v}'_i & = & (1-g\Delta t)\mathbf{v}_i \\
l' & = & {\rm exp}(g\Delta t)l \\
g' & = & {\rm exp}( -\gamma_{\rm ln} \Delta t) (g + PV \Delta t/ m_g) + \sqrt{(1 - {\rm exp}(-2\gamma_{\rm ln} \Delta t)) k_{\rm B} T / m_g} R
\end{array}
\right.
\tag{8-9}
$$

Here, $m_g$ is the mass of the box, $\gamma_{\rm ln}$ is the friction coefficient of Langevin dynamics, and $\mathbf{R}$ is a standard normally distributed random number.

In the semiisotropic case, $\mathbf{\Pi}$, $\mathbf{R}$, $\mathbf{g}$, and $\mathbf{b}$ in the equation above are all diagonal matrices. For $\forall \alpha \in \{x, y, z\}$:

$$
\left\{
\begin{array}{lll}
\mathbf{r}'_{i\alpha} & = & {\rm exp}(\mathbf{g}_{\alpha\alpha}\Delta t)\mathbf{r}_{i\alpha} \\
\mathbf{v}'_{i\alpha} & = & (1-\mathbf{g}_{\alpha\alpha}\Delta t)\mathbf{v}_{i\alpha} \\
\mathbf{b}_{\alpha\alpha}' & = & {\rm exp}(\mathbf{g}_{\alpha\alpha}\Delta t)\mathbf{b}_{\alpha\alpha} \\
\mathbf{g}_{\alpha\alpha}' & = & {\rm exp}( -\gamma_{\rm ln} \Delta t)(\mathbf{g}_{\alpha\alpha} + \Pi_{\alpha\alpha}V \Delta t/ m_g) + \sqrt{(1 - {\rm exp}(-2\gamma_{\rm ln} \Delta t)) k_{\rm B} T / m_g} R
\end{array}
\right.
\tag{8-10}
$$

In the anisotropic case, equation (8.6) is expanded for the calculation. For $\forall \alpha,\beta,\gamma \in \{x, y, z\}$ with $\alpha \neq \beta$:

$$
\left\{
\begin{array}{lll}
\mathbf{r}'_{i\alpha} & = & {\rm exp}(\sum_\gamma \frac{\mathbf{r}_{i\gamma}}{\mathbf{r}_{i\alpha}}\mathbf{g}_{\gamma\alpha}\Delta t)\mathbf{r}_{i\alpha} \\
\mathbf{v}'_{i\alpha} & = & \mathbf{v}_{i\alpha} - \sum_\gamma \mathbf{v}_{i\gamma}\mathbf{g}_{\gamma\alpha}\Delta t \\
\mathbf{b}_{\alpha\alpha}' & = & {\rm exp}(\sum_\gamma \frac{\mathbf{b}_{\alpha\gamma }}{\mathbf{b}_{\alpha\alpha}}\mathbf{g}_{\gamma\alpha}\Delta t) \mathbf{b}_{\alpha\alpha} \\
\mathbf{b}_{\alpha\beta}' & = & \mathbf{b}_{\alpha\beta} + \sum_\gamma \mathbf{b}_{\alpha\gamma}\mathbf{g}_{\gamma\beta} \Delta t \\
\mathbf{g}_{\alpha\gamma}' & = & {{\rm exp}( -\gamma_{\rm ln}\Delta t)} (\mathbf{g}_{\alpha\gamma} + \Pi_{\alpha\gamma}V \Delta t/ m_g) + \sqrt{(1 - {\rm exp}(-2\gamma_{\rm ln} \Delta t)) k_{\rm B} T / m_g} R
\end{array}
\right.
\tag{8-11}
$$

### 8.2 Berendsen Pressure Control

Starting from Andersen pressure control, taking ${\rm lim} \gamma_{\rm ln} \to \infty, T\to 0$ gives Berendsen pressure control:

$$
\mathbf{g}_{\alpha\beta} = \Pi_{\alpha\beta}V \Delta t/ m_g
\tag{8-12}
$$

### 8.3 Bussi Pressure Control

Starting from Andersen pressure control, taking ${\rm lim} \gamma_{\rm ln} \to \infty$ gives Bussi pressure control:

$$
\mathbf{g}_{\alpha\beta} = \Pi_{\alpha\beta}V \Delta t/ m_g + \sqrt{k_{\rm B} T / m_g} R
\tag{8-13}
$$

### 8.4 MC Pressure Control

## 9. Virtual Atoms

Virtual atoms, also called virtual interaction sites, virtual sites, dummy atoms, and so on, are a method for simplifying part of a complex potential energy into another virtual atom. For example, for the potential energy $U=r_0^{-6} + r_0^{-12}$, one can define $r_v=r_0 ^ 2$. Then $U=r_0^{-6} + r_v^{-6}$, which is more symmetric in form, requires only one implementation for computing sixth powers, and may sometimes have clearer physical meaning. Of course, this example is overly simple; without replacement, the potential energy would be even simpler. Common real applications include virtual atoms in TIP4P water molecules. In practice, multi-level virtual atoms can also be defined. For example, for $U=r_0^{-6} + r_0^{-12} + r_0^{-24}$, one can define $r_1=r_0 ^ 2$ and $r_2=r_1 ^ 2$, giving $U = r_0^{-6} + r_1^{-6} + r_2^{-6}$. For convenience below, real atoms are called level-0 virtual atoms. A definition whose highest virtual-atom level is n is called an ($n+1$)-level virtual atom, and the coordinate of a level-$n$ virtual atom is uniformly denoted by $\mathbf{r}_n$.

For simulations containing virtual atoms, virtual atoms are first treated as real atoms in the ordinary calculation. After the calculation, the forces must be redistributed. Differentiating the original form of the potential energy and the form containing virtual atoms gives:

$$
\begin{array}{lllll}
dU & = & d{\mathbf{b}} \left(\frac{\partial U}{\partial \mathbf{b}}\right)_{\mathbf{r}_{0}} & + & d{\mathbf{r_0}} \left(\frac{\partial U}{\partial \mathbf{r_0}}\right)_{\mathbf{b}}
\\
& = & d{\mathbf{b}} \left(\frac{\partial U}{\partial \mathbf{b}}\right)_{\mathbf{r}_{i}} & + & \sum_n d{\mathbf{r}_n} \left(\frac{\partial U}{\partial \mathbf{r}_n}\right)_{\mathbf{r}_{i,i \neq n},\mathbf{b}}
\end{array}
\tag{9-1}
$$

In the equation above, the part outside the parentheses of a partial derivative indicates the quantities held fixed when taking that partial derivative.

According to this equation, force calculation gives:

$$
\left(\frac{\partial U}{\partial \mathbf{r_0}}\right)_{\mathbf{b}} =
\sum_n \frac {d{\mathbf{r}_n}}{d\mathbf{r}_0} \left(\frac{\partial U}{\partial \mathbf{r_n}}\right)_{\mathbf{r}_{i,i \neq n},\mathbf{b}}
\tag{9-2}
$$

${d{\mathbf{r}_n}} / {d\mathbf{r}_0}$ can be computed using the chain rule.

For virial calculation, the potential energy must also be expanded in terms of the fractional coordinates $\mathbf{f}_n$ in the two cases:

$$
\begin{array}{lllll}
dU & = & d{\mathbf{b}} \left(\frac{\partial U}{\partial \mathbf{b}}\right)_{\mathbf{f}_{0}} & + & d{\mathbf{f_0}} \left(\frac{\partial U}{\partial \mathbf{f_0}}\right)_{\mathbf{b}}
\\
& = & d{\mathbf{b}} \left(\frac{\partial U}{\partial \mathbf{b}}\right)_{\mathbf{f}_{i}} & + & \sum_n d{\mathbf{f}_n} \left(\frac{\partial U}{\partial \mathbf{f}_n}\right)_{\mathbf{f}_{i,i \neq n},\mathbf{b}}
\end{array}
\tag{9-3}
$$

Combining (9-1) and (9-3):

$$
\begin{array}{llllll}
\left(\frac{\partial U}{\partial \mathbf{b}}\right)_{\mathbf{f}_{0}} & = & \left(\frac{\partial U}{\partial \mathbf{b}}\right)_{\mathbf{f}_{i}} & + & \sum_n & \left(\frac{\partial \mathbf{f}_n}{\partial \mathbf{b}}\right)_{\mathbf{f}_{0}} \left(\frac{\partial U}{\partial \mathbf{f}_n}\right)_{\mathbf{f}_{i,i \neq n},\mathbf{b}} \\
& = & \left(\frac{\partial U}{\partial \mathbf{b}}\right)_{\mathbf{f}_{i}} & - & \sum_n & \left(\frac{\partial \mathbf{f}_n}{\partial \mathbf{b}}\right)_{\mathbf{f}_{0}} \mathbf{b} \mathbf{F}_n^{\rm T}
\end{array}
\tag{9-4}
$$

The discussion above shows that the key to the calculation is obtaining the definition of $\mathbf{r}_n$.

SPONGE currently supports five forms of virtual atoms, defined as follows. The virtual-atom coordinate is denoted by $\mathbf{r}_v$.

- Type 0: depends on one atom $\mathbf{r}_0$

  $$
  \begin{array}{lll}
  \mathbf{r}_v = \mathbf{r}_0 \left(\begin{array}{lll} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & -1\end{array}\right) \\
  \mathbf{f}_v = \mathbf{f}_0 \left(\begin{array}{lll} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & -1\end{array}\right)
  \end{array}
  $$
- Type 1: depends on two atoms, $\mathbf{r}_1$ and $\mathbf{r}_2$, and one parameter $a$

  $$
  \begin{array}{l}
  \mathbf{r}_v = a \mathbf{r}_{21} \\
  \mathbf{f}_v = a \mathbf{f}_{21}
  \end{array}
  $$
- Type 2: depends on three atoms, $\mathbf{r}_1$, $\mathbf{r}_2$, and $\mathbf{r}_3$, and two parameters, $a$ and $b$

  $$
  \begin{array}{l}
  \mathbf{r}_v = a \mathbf{r}_{21} + b \mathbf{r}_{31} \\
  \mathbf{f}_v = a \mathbf{f}_{21} + b \mathbf{f}_{31}
  \end{array}
  $$
- Type 3: depends on three atoms, $\mathbf{r}_1$, $\mathbf{r}_2$, and $\mathbf{r}_3$, and two parameters, $d$ and $k$. This type currently does not support virial calculation.

  $$
  \begin{array}{l}
  \mathbf{r}_v = d * \frac{ \mathbf{r}_{12} + k \mathbf{r}_{23}} {|\mathbf{r}_{12} + k \mathbf{r}_{23}|}
  \end{array}
  $$
- Type 4: depends on $n$ atoms $\{\mathbf{r}_i\}$ and $n$ parameters\

  $$
  \begin{array}{l}
  \mathbf{r}_v = \sum_i w_i \mathbf{r}_i \\
  \mathbf{f}_v = \sum_i w_i \mathbf{f}_i
  \end{array}
  $$

# References

- [1.1] <https://doi.org/10.5281/zenodo.11148638>
- [5.1] <https://doi.org/10.1021/acs.jctc.3c01124>
- [6.1] <https://doi.org/10.1002/jcc.540130805>
- [6.2] <https://doi.org/10.1016/0021-9991(77)90098-5>
- [6.3] [https://doi.org/10.1002/(SICI)1096-987X(19980115)19:1<102::AID-JCC9>3.0.CO;2-T](https://doi.org/10.1002/(SICI)1096-987X(19980115)19:1%3C102::AID-JCC9%3E3.0.CO;2-T)
- [7.1] <https://doi.org/10.1021/acs.jpca.9b02771>
- [8.1] <https://doi.org/10.1063/1.439486>
- [8.2] <https://doi.org/10.1103/PhysRevLett.45.1196>
- [8.3] <https://doi.org/10.1080/00268979600100761>
- [8.4] <https://doi.org/10.1063/1.470648>
