---
title: "Version History"
description: "CudaSPONGE version history for SPONGE 1.4."
version: "SPONGE 1.4"
section: "CudaSPONGE Docs"
order: 5
---

> This page was translated by GPT-5.5 AI.

# Version History

## 1.4 -> 1.5

Under development...

1. PME has been modified to support large systems (number of atoms > 524280).
2. The minimization algorithm has been optimized (MADAM algorithm).

## 1.3 -> 1.4

1. Input command changes:
   A. `nve_velocity_max`, `middle_langevin_velocity_max`, `langevin_velocity_max`, and related commands have been unified as `velocity_max`.
   B. The `molecule_map_output` command has been removed, and molecule mapping has been optimized.
2. Output changes:
   A. The width of each output item has been changed from 12 characters to 15 characters.
   B. Potential energy output, coordinate output, and sub-energy terms are now aligned to the same frame.
   C. `mdinfo.txt` is refreshed in real time without buffering, so error information can be obtained immediately.
   D. The default print interval for restart files has been changed from 1000 to the last frame.
   E. All trajectory files now use an additional temporary in-memory store during output and are printed every fixed number of frames rather than steps. The default is once every 1000 frames.
3. Improved error messages:
   A. Issues caused by different GPU architectures during compilation and runtime.
   B. Issues caused by using Linux input files on Windows or Windows files on Linux.
4. Speed optimization: approximately 20% to 100% faster than 1.2.6, depending on the system.
   A. Added a separate short-range non-bonded interaction calculation for water (`solvent_LJ`), which can be disabled from the command line with `solvent_LJ = 0`.
   B. Added MD with a multiple-time-step scheme, where PME long-range interactions can be updated every fixed number of steps.
   C. Added the neighbor-list update tolerance `skin_permit`. When `skin_permit` = 0.5, updates are strict; values greater than 0.5 can improve speed.
5. Feature optimization:
   A. Unused commands have been removed from rerun mode (`mode = rerun`) to maintain accuracy during relatively long rerun-mode calculations.
   B. Molecule mapping has been optimized. Molecules crossing periodic boundaries are automatically detected and handled differently from ordinary molecules: for boundary-crossing molecules, every atom is kept inside the box; for ordinary molecules, the point with the smallest coordinates (x, y, z) is kept inside the box.
6. Added walls:
   A. Hard wall: when a particle moves beyond the wall, the corresponding velocity component is reversed.
   B. Soft wall: assigns particles a potential energy based on their distance from the wall.
7. CV adjustments:
   A. Added a new CV: `combine`, which can define custom combinations of other CVs.
   B. Added a new CV: `tabulated`, which can perform interpolation calculations on other CVs.
   C. Removed the RMSD dependency on cuBLAS.
8. NOPBC has been merged into the main program.
9. Added a plugin module that provides an entry point for external dynamic libraries.
10. Added development features:
    A. The Makefile now automatically references Makefiles in subfolders, making extension easier.
    B. Added automatic differentiation, dynamic parallelism, and just-in-time compilation features to make related functionality easier to implement.
11. Added support for metadynamics and SITS methods in the NPT ensemble.
12. Removed SPONGE\_FEP. Use rerun mode for FEP post-processing calculations instead.

## 1.2 -> 1.3

1. Simulation speed increased by approximately 5% to 10%.
2. Added a gradient descent algorithm with dynamic step size to the energy minimization algorithms.
3. Added a built-in error handling system for reporting error causes.
4. Fatal error fixes:
   A. For Berendsen temperature control, the velocity correction factor is limited to 0.1 to 10.0 to prevent the system from crashing due to excessively rapid velocity changes.
   B. Fixed a memory overflow issue in cmap.
5. Added the `make_output_whole` command, which can map two molecules into the same periodic boundary condition.
6. Command keyword changes:
   A. Word spelling corrections:
   `charge_pertubated`->`charge_perturbated`
   `compressiblity`->`compressibility`
   `dV/dt`->`dV_dt`

   B. In Monte Carlo pressure control, the command for the single direction allowed to change under anisotropic control now uses a string instead of a number.
   C. In all bool commands, the equivalent value of false is 0 and the equivalent value of true is 1.
   D. SITS commands have been simplified.
7. In TI calculations, `charge_perturbated` has been changed from a bool variable to an int variable. It represents the exponent of the charge change, namely $p$ in the following formula:

$$
E = \frac{1}{2} \sum_{ij} \frac{(q_{i,A} \lambda^p + q_{i,B} (1 - \lambda)^p) (q_{j,A} \lambda^p + q_{j,B} (1 - \lambda)^p)} {r}
$$

8. Added a CV system for enhanced sampling.

## 1.1 -> 1.2

> There is no upgrade record for this version; the content below is rough information.

1. Implemented multiple temperature and pressure control methods.
2. Improved simulation speed.
3. Added force field terms (cmap and improper dihedral).
4. Added simulation for non-periodic systems and an implicit solvent model.

## 1.0 -> 1.1

> There is no upgrade record for this version; the content below is rough information.

1. NPT ensemble simulation and fixed-step energy minimization.
2. Uses an in file as input.

## Beta -> 1.0

> There is no upgrade record for this version; the content below is rough information.

1. NVE ensemble simulation and NVT ensemble simulation.
2. Uses Amber files as input.
