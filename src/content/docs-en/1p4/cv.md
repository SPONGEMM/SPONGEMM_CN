---
title: "CV System"
description: "CudaSPONGE CV system documentation for SPONGE 1.4."
version: "SPONGE 1.4"
section: "CudaSPONGE Documentation"
order: 4
---

> This page was translated by GPT-5.5 AI.

# Input Control

Input commands are read through `cv_in_file`. The CV system consists of four parts: CV definitions, virtual atom definitions, CV usage, and program system control. For details, see [File Formats](/en/docs/1p4/file-formats).
For the type notation used for each parameter, see [Input Commands](/en/docs/1p4/commands).

# Virtual Atom Definitions

When calculating CVs, it is sometimes preferable to use virtual atoms instead of directly using the positions of multiple atoms. The positions of these virtual atoms are generated from other atoms.

## center\_of\_mass

Center of mass

Parameters:

- atom ([int]): atom list
- atom\_in\_file (file): atom list file

## center

Center calculated with arbitrary weights

Parameters:

- atom ([int]): atom list
- atom\_in\_file (file): atom list file
- weight ([float]): weights
- weight\_in\_file: weight file

# CV Definitions

## position\_x

x coordinate

Parameters:

- atom (int): atom

## position\_y

y coordinate

Parameters:

- atom (int): atom

## position\_z

z coordinate

Parameters:

- atom (int): atom

## scaled\_position\_x

x coordinate divided by the box length along the x axis

Parameters:

- atom (int): atom

## scaled\_position\_y

y coordinate divided by the box length along the y axis

Parameters:

- atom (int): atom

## scaled\_position\_z

z coordinate divided by the box length along the z axis

Parameters:

- atom (int): atom

## box\_length\_x

Box length along the x axis

## box\_length\_y

Box length along the y axis

## box\_length\_z

Box length along the z axis

## distance

Distance between two atoms

Parameters:

- atom (int int): two atoms

## displacement\_x

x component of the displacement between two atoms

Parameters:

- atom (int int): two atoms

## displacement\_y

y component of the displacement between two atoms

Parameters:

- atom (int int): two atoms

## displacement\_z

z component of the displacement between two atoms

Parameters:

- atom (int int): two atoms

## angle

Angle formed by three atoms

Parameters:

- atom (int int int): three atoms

## dihedral

Dihedral angle formed by four atoms

Parameters:

- atom (int int int int): four atoms

## rmsd

RMSD between a series of atoms and the reference coordinates

> The atom list and reference coordinates can be generated with `Xponge maskgen`.

Parameters:

- atom ([int]): atom list
- atom\_in\_file (file): atom list file
- coordinate ([float]): reference coordinates
- coordinate\_in\_file (float): reference coordinate file

## combination

A value obtained by freely combining CVs
Example:

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

> In combination expressions, if floating-point numbers are involved, it is best to append `f` to indicate single-precision floating point, for example `1.0f`. Using an integer where a floating-point number is expected may cause a just-in-time compilation error.

Parameters:

- CV ([CV]): CVs to be combined
- function ([string]): functional form used for the combination
  Supported functions and symbols:

  | Function | Symbol | Function | Symbol |
  | --- | --- | --- | --- |
  | a plus b | a + b | a minus b | a - b |
  | a times b | a \* b | a divided by b | a / b |
  | a to the power of b | powf(a)(b) | natural logarithm of a | logf(a) |
  | e to the power of a | expf(a) | complementary error function of a | erfcf(a) |
  | square root of a | sqrtf(a) | cosine of a | cosf(a) |
  | sine of a | sinf(a) | tangent of a | tanf(a) |
  | arccosine of a | acosf(a) | arcsine of a | asinf(a) |
  | arctangent of a | atanf(a) | absolute value of a | fabsf(a) |
  | larger of a and b | fmaxf(a)(b) | smaller of a and b | fminf(a)(b) |

## tabulated

Tabulated mapping for a CV. Intermediate values are calculated with fourth-order B-spline interpolation.
Example:

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

This example corresponds to the following table:
-60 | -40 | -20 | 0 | 20 | 40 | 60 | 80 | 100 | 120 | 140 | 160
--- |
1.1 | 1.1 | 1.1 | 1.0 | 4.0 | 0.2 | 7.0 | 9.1 | -11.0 | 7.7 | 7.7 | 7.7

Parameters:

- CV ([CV]): CV to interpolate
- min (float): minimum CV value
- max (float): maximum CV value
- parameter ([float]): list of mapped values
- parameter\_in\_file (file): mapped value list file
- min\_padding (float): padding value used when the value is smaller than the minimum; used only for interpolation
- max\_padding (float): padding value used when the value is larger than the maximum; used only for interpolation

# CV Usage

## print

Print CVs
Parameters:

- CV ([CV]): CVs to print

## restrain

Harmonic bias potential

$$
U_{\rm bias} = \sum_{CV}{\rm weight} * (CV - {\rm reference})^2
$$

The weight can change dynamically.

1. If `start_step` and `max_step` are not 0, while `reduce_step` and `stop_step` are 0, the weight has the following form:

   ```
              harmonic oscillator weight
                   ^
             weight|         +-------------
                   |        /
                   |       /
                   |      /
                   0-----+---+------------>simulation steps
                      start max
   ```
2. If `start_step` and `max_ste` are 0, while `reduce_step` and `stop_step` are not 0, the weight has the following form:

   ```
              harmonic oscillator weight
                   ^
             weight|----------------+
                   |                 \
                   |                  \
                   |                   \
                   0---------------+----+-->simulation steps
                                reduce stop
   ```
3. If all four step parameters are not 0, the weight has the following form:

   ```
              harmonic oscillator weight
                   ^
             weight|         +------+
                   |        /        \
                   |       /          \
                   |      /            \
                   0-----+---+-----+----+-->simulation steps
                      start max reduce stop
   ```

Parameters:

- CV ([CV]): CVs to restrain
- weight ([float]): weights
- reference ([float]): reference values
- period ([float]): CV periods
- start\_step ([int]): step at which weight starts to increase linearly
- max\_step ([int]): step at which weight reaches its maximum
- reduce\_step ([int]): step at which weight starts to decrease linearly
- stop\_step ([int]): step at which weight becomes 0

## steer

Linear bias potential

$$
U_{\rm bias} = \sum_{CV} {\rm weight} * CV
$$

Parameters:

- CV ([CV]): CVs to which the bias potential is added
- weight ([float]): weights

## meta1d

One-dimensional metadynamics bias potential

$$
U_{\rm bias} = \sum_t {\rm height} * N(CV_t, {\rm sigma}) * \text{welltemp factor}
$$

Parameters:

- CV (CV): CV to which the bias potential is added
- CV\_minimal (float): minimum CV value
- CV\_maximum (float): maximum CV value
- dCV (float): grid spacing used when plotting the grid
- potential\_in\_file (file): input file for the gridded CV potential energy curve
- CV\_period (float): CV period
- height (float): height of the added Gaussian potential
- sigma (float): standard deviation of the added Gaussian potential
- wall\_height (float): initial well depth when the CV is between the minimum and maximum values
- welltemp\_factor (float): welltemp factor; the smaller the value, the more slowly the Gaussian potential is added over time
- potential\_update\_interval (int): interval between potential updates
