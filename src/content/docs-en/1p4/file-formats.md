---
title: "File Formats"
description: "CudaSPONGE file format reference for SPONGE 1.4."
version: "SPONGE 1.4"
section: "CudaSPONGE Docs"
order: 3
---

> This page was translated by GPT-5.5 AI.

> All atom indices are counted from 0.

# Control Files

## `mdin`

```
        The first line is the title line and is required
        # Text after a hash sign is a comment
        # command = value
        mode = NVT
        thermostat = middle_langevin
        # Braces A { B = C } represent A_B = C
        middle_langevin
        {
            gamma = 10
        }
        # Two hash signs comment out the entire brace block
        ## amber
        {
            parm7 = test.parm7
            rst7 = test.rst7
        }
        default_in_file_prefix = example
```

Commands in `mdin` can also be entered on the command line. For example, the above is equivalent to:

```
SPONGE -mode NVT -thermostat middle_langevin -middle_langevin_gamma 10 -default_in_file_prefix example
```

## `cv_in_file`

```
        # Text after a hash sign is a comment
        # command = value
        ####################
        # Define virtual atoms
        ####################
        com1 # Any name that does not duplicate a built-in keyword
        {
            vatom_type = center_of_mass
            atom = 3 5 7
        }
        com2
        {
            vatom_type = center_of_mass
            atom = 4 6 9
        }
        ####################
        # CV definitions
        ####################
        rmsd_test # Any name that does not duplicate a built-in keyword
        {
            CV_type = rmsd
            atom_in_file = test_atom.txt
            coordinate_in_file = test_coordinate.txt
        }
         nice_day # Any name that does not duplicate a built-in keyword
        {
            CV_type = angle
            atom = com1 3 com2 # A virtual atom name can be used wherever an integer input is required
        }
        ######################
        # CV usage
        ######################
        print
        {
            CV = nice_day rmsd_test
        }
        restrain
        {
            CV = rmsd_test
            weight = middle_langevin_gamma # Values requiring an integer or floating-point number can use variables from mdin
            reference = 0.
        }
        ##meta1d # Double hash signs comment out the entire brace block
        {
            CV = nice_day
            dCV = 0.01
            CV_minimal = 0
            CV_maximum = 3.14
            height = 10
            sigma = 0.1
            welltemp_factor = 50
        }
        ###################
        # System control
        ###################
        dont_check_input = 0
```

# Force Field Files

## AMBER Format

`amber_parm7`
`amber_rst7`
See the AMBER official website.

## `bond_in_file`

```
            Total number of bonds
            Atom a Atom b Force constant Equilibrium position
            ...
            Atom a Atom b Force constant Equilibrium position
```

## `angle_in_file`

```
            Total number of bond angles
            Atom a Atom b Atom c Force constant Equilibrium position
            ...
            Atom a Atom b Atom c Force constant Equilibrium position
```

## `dihedral_in_file`

```
            Total number of dihedrals
            Atom a Atom b Atom c Atom d Periodicity Force constant Phase angle
            ...
            Atom a Atom b Atom c Atom d Periodicity Force constant Phase angle
```

## `nb14_in_file`

```
            Total number of nb14 entries
            Atom a Atom b LJ scaling factor Electrostatic scaling factor
            ...
            Atom a Atom b LJ scaling factor Electrostatic scaling factor
```

## `cmap_in_file`

```
            Number of cmap types Total number of cmaps
            Resolution of cmap type 1 Resolution of cmap type 2 ... Resolution of cmap type x

            Parameters for cmap type 1, with Resolution of cmap type 1^2 entries in total

            Parameters for cmap type 2, with Resolution of cmap type 2^2 entries in total

            ...

            Parameters for cmap type x, with Resolution of cmap type x^2 entries in total

            Atom a Atom b Atom c Atom d Atom e cmap type
            ...
            Atom a Atom b Atom c Atom d Atom e cmap type
```

## `LJ_in_file`

```
            Number of atoms Number of LJ types

            A coefficient for LJ0-LJ0
            A coefficient for LJ1-LJ0 A coefficient for LJ1-LJ1
            ...
            A coefficient for LJx-LJ0 A coefficient for LJx-LJ1 ... A coefficient for LJx-LJx

            B coefficient for LJ0-LJ0
            B coefficient for LJ1-LJ0 B coefficient for LJ1-LJ1
            ...
            B coefficient for LJx-LJ0 B coefficient for LJx-LJ1 ... B coefficient for LJx-LJx

            LJ type of atom 1
            LJ type of atom 2
            ...
            LJ type of atom n
```

## `charge_in_file`

> A special charge unit is used here so that $E = \frac {q_A q_B} {r_{AB}}$ and no force constant needs to be multiplied.
> In this unit system, one electron carries a charge of -18.2223.

```
           Number of atoms
           Charge of atom 1
           Charge of atom 2
           ...
           Charge of atom n
```

## `residue_in_file`

```
            Number of atoms Number of residues
            Number of atoms in residue 1
            Number of atoms in residue 2
            ...
            Number of atoms in residue n
```

# Custom Force Field Format Files

After providing the force field form definition files below, you must also provide force field parameter files. The force field parameter files follow the standard SPONGE built-in formats described above.

## `listed_forces_in_file`

Defines bonded interactions.

```
            [[[ Name 1 ]]]
            [[ parameters ]]
            int atom_i, int atom_j, ..., int atom_l, Parameter type (float/int) Parameter name, Parameter type (float/int) Parameter name, ... Parameter type (float/int) Parameter name
            [[ potential ]]
            Potential energy function
            E = f(r_ij, theta_ijk, phi_ijkl)
            Here, r_ij denotes the distance between atom_i and atom_j, theta_ijl denotes the corresponding angle, and phi_ijkl denotes the corresponding dihedral angle
            [[ connected_atoms ]]
            ij (indicates that atoms i and j are connected; used for periodic mapping and automatic constraint-atom detection. Leave this section empty if not needed)
            [[ constrain_distance ]]
            Name of the parameter representing the constraint distance. Leave this section empty if not needed
            [[ end ]]
            [[[ Name 2 ]]]
            ...
            [[ end ]]
            ... ...
```

## `pairwise_force_in_file`

Defines nonbonded interactions.

```
            [[[ Name ]]]
            [[ parameters ]]
            Parameter type (float/int) Parameter name, Parameter type (float/int) Parameter name, ... Parameter type (float/int) Parameter name
            [[ potential ]]
            Potential energy function
            E = f(r_ij)
            [[ with_ele ]]
            true/false
            [[ electrostatic_potential ]]
            Electrostatic potential energy function
            E_ele = f(r_ij, q_i, q_j)
            [[ end ]]
```

## `soft_walls_in_file`

Defines soft walls.

```
            [[[ Name 1 ]]]
            [[ potential ]]
            Potential energy function E = f(x, y, z)
            [[ end ]]
            [[[ Name 2 ]]]
            ...
            [[ end ]]
            ... ...
```

# Coordinate and Velocity File Formats

## `coordinate_in_file`

Input coordinate file.

```
            Number of atoms  [timestamp, optional]
            x coordinate of atom 1  y coordinate of atom 1  z coordinate of atom 1
            x coordinate of atom 2  y coordinate of atom 2  z coordinate of atom 2
            ... ...
            x coordinate of atom n  y coordinate of atom n  z coordinate of atom n
            Length of box x basis vector Length of box y basis vector Length of box z basis vector Angle between box y and z basis vectors Angle between box x and z basis vectors Angle between box x and y basis vectors
```

## `velocity_in_file`

Input velocity file. Note that velocities are in SPONGE internal units.

```
            Number of atoms  [timestamp, optional]
            x velocity of atom 1  y velocity of atom 1  z velocity of atom 1
            x velocity of atom 2  y velocity of atom 2  z velocity of atom 2
            ... ...
            x velocity of atom n  y velocity of atom n  z velocity of atom n
```
