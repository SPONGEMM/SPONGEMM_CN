---
title: "Module Features"
description: "CudaSPONGE module feature reference for SPONGE 1.4."
version: "SPONGE 1.4"
section: "CudaSPONGE Documentation"
order: 2
---

> This page was translated by GPT-5.5 AI.

# Force Field

## Short-Range Interactions

### 1-2 Interactions

#### Harmonic Bond

Potential energy form:

$$
E = \sum k (r_{ab} - r_0) ^ 2
$$

$r_{ab}$: distance between $a$ and $b$
$k$, $r_0$: force-field parameters

#### Soft Harmonic Bond

Potential energy form:

$$
E = \sum \lambda k (r_{ab} - r_0) ^ 2 / (1 + \alpha \lambda (r_{ab} - r_0) ^ 2)
$$

$r_{ab}$: distance between $a$ and $b$
$\lambda$, $\alpha$, $k$, $r_0$: force-field parameters

### 1-3 Interactions

#### Harmonic Bond Angle

Potential energy form:

$$
E = \sum k (\theta_{abc} - \theta_0) ^ 2
$$

$\theta_{abc}$: angle $abc$
$k$, $\theta_0$: force-field parameters

#### Urey\_Bradley Bond Angle

Potential energy form:

$$
E = \sum k_1 (r_{ac} - r_0) ^ 2 + k_2 (\theta_{abc} - \theta_0) ^ 2
$$

$r_{ac}$: distance between $a$ and $c$
$\theta_{abc}$: angle $abc$
$k_1$, $k_2$, $r_0$, $\theta_0$: force-field parameters

### 1-4 Interactions

#### Periodic Dihedral

Potential energy form:

$$
E = \sum k (1 + cos(n \phi_{abcd} - \phi_0))
$$

$\phi_{abcd}$: dihedral angle $abcd$
$n$, $k$, $\phi_0$: force-field parameters

#### Harmonic Dihedral

Potential energy form:

$$
E = \sum k (\phi_{abcd} - \phi_0) ^ 2
$$

$\phi_{abcd}$: dihedral angle $abcd$
$k$, $\phi_0$: force-field parameters

#### Two-Parameter 1-4 Nonbonded Interaction

Potential energy form:

$$
E = \sum k_{LJ} * E_{LJ} + k_{\text{Coulomb}} * E_{\text{Coulomb}}
$$

$E_{LJ}$, $E_{\text{Coulomb}}$: uncorrected LJ potential energy and Coulomb potential energy
$k_{LJ}$, $k_{\text{Coulomb}}$: force-field parameters

#### Three-Parameter 1-4 Nonbonded Interaction

Potential energy form:

$$
E = \sum A r_{ab}^{-12} - B r_{ab}^{-6} + C q_a q_b r_{ab}^{-1}
$$

$r_{ab}$: distance between $a$ and $b$

$q_a$, $q_b$: charge of $a$ and charge of $b$
$A$, $B$, $C$: force-field parameters

### 1-5 Interactions

#### CMAP

Potential energy form:

$$
E = \sum \sum_{i=0}^4 \sum_{j=0}^4 k_{ij} \phi_{abcd}^i \phi_{bcde}^j
$$

$\phi_{abcd}$: dihedral angle $abcd$
$\phi_{bcde}$: dihedral angle $bcde$
$k_{ij}$: force-field parameters

## Particle-Particle Interactions

### Van der Waals Interaction

#### LJ Potential

Potential energy form:

$$
E = \sum A r_{ab}^{-12} - B r_{ab}^{-6}
$$

$r_{ab}$: distance between $a$ and $b$
$A$, $B$: force-field parameters

### Electrostatic Interaction

#### Coulomb Potential

Potential energy form:

$$
E = \sum q_a q_b r_{ab}^{-1}
$$

$r_{ab}$: distance between $a$ and $b$
$q_a$, $q_b$: charge of $a$ and charge of $b$

## Other

### Virtual Atom

$$
\begin{array}{ll}
\text{Type 0:} & z_0 = 2 h - z_1 \\
\text{Type 1:} & \vec r_{01} = a * \vec r_{21} \\
\text{Type 2:} & \vec r_{01} = a * \vec r_{21} + b \vec r_{31} \\
\text{Type 3:} & \vec r_{01} = d * (\vec r_{21} + k \vec r_{31}) / |\vec r_{21} + k \vec r_{31}|
\end{array}
$$

Here, $0$ denotes the virtual atom, and the other numbers denote the coordinates of the atoms on which the virtual atom depends.
$a$, $b$, $d$, $k$, and $h$ are force-field parameters; $\vec r$ denotes displacement; and $x$, $y$, and $z$ are the coordinates along the three directions.

### Position Restraint

$$
E = k \sum r_{i,ref}^2
$$

$r_{i,ref}$: distance between $i$ and its reference point
$k$ and the reference-point position: force-field parameters

# Temperature Control

## Langevin Dynamics

> This method is still retained in the program, but avoid using it when possible because **middle Langevin** consistently performs better than **Langevin**.

Implementation pseudocode:

```
    acceleration = force / mass
    acceleration -= friction_factor * velocity
    acceleration += sqrt(2 * friction_factor * ensemble_temperature * Boltzmann_factor / dt / mass) * standard_Gaussian_random_number
    velocity += acceleration * dt
    if (velocity > maximum_velocity)
    {
        velocity = maximum_velocity
    }
    coordinates += velocity * dt
```

## Middle Langevin Thermostat

> Zhang, Z. et. al., Zhang Z, Liu X, Chen Z, Zheng H, Yan K, Liu J. A unified thermostat scheme for efficient configurational sampling for classical/quantum canonical ensembles via molecular dynamics. *J. Chem. Phys.* **2017** Jul 21;147(3):034109. doi: [10.1063/1.4991621](https://doi.org/10.1063/1.4991621).

Implementation pseudocode:

```
    acceleration = force / mass
    velocity += acceleration * dt
    if (velocity > maximum_velocity)
    {
        velocity = maximum_velocity
    }
    coordinates += velocity * dt / 2
    decay_coefficient = exp(-friction_factor * dt)
    velocity *= decay_coefficient
    velocity += sqrt((1 - decay_coefficient * decay_coefficient) * ensemble_temperature * Boltzmann_factor / mass) * standard_Gaussian_random_number
    coordinates += velocity * dt / 2
```

## Berendsen Thermostat

Implementation pseudocode:

```
 factor = 1 + dt / time_parameter * (ensemble_temperature / temperature - 1)
    if (random_correction)
    {
        factor += 2 * sqrt(ensemble_temperature / temperature / degrees_of_freedom / time_parameter) * standard_Gaussian_random_number);
    }
    factor = sqrt(factor)
    if (factor > 1.25)
    {
        factor = 1.25
    }
    else if (factor < 0.8)
    {
        factor = 0.8
    }
    acceleration = force / mass
    velocity += acceleration * dt
    if (velocity > maximum_velocity)
    {
        velocity = maximum_velocity
    }
    coordinates += velocity * dt
    velocity *= factor
```

## Andersen Thermostat

Implementation pseudocode:

```
if ((step - 1) % update_interval == 0)
    {
        acceleration = force / mass
        velocity += acceleration * dt
        coordinates += velocity * dt / 2
        velocity = random_velocity_from_the_Boltzmann_velocity_distribution
        if (velocity > maximum_velocity)
        {
            velocity = maximum_velocity
        }
        coordinates += velocity * dt / 2
    }
    else
    {
        acceleration = force / mass
        velocity += acceleration * dt
        if (velocity > maximum_velocity)
        {
            velocity = maximum_velocity
        }
        coordinates += velocity * dt
    }
```

## Nose-Hoover Thermostat

Implementation pseudocode:

```
    extended_dimension_mass = time_constant * time_constant / 4 / pi / pi
    extended_dimension_velocity[0] = (2 * total_kinetic_energy - degrees_of_freedom * Boltzmann_factor * ensemble_temperature) / extended_dimension_mass
    if (chain_length > 1)
    {
        extended_dimension_velocity[0] -= extended_dimension_velocity[0] * extended_dimension_velocity[1] * dt
    }
    for (int i = 1; i < chain_length - 1; i += 1)
    {
        extended_dimension_velocity[i] = extended_dimension_velocity[i - 1] * extended_dimension_velocity[i - 1] - Boltzmann_factor * ensemble_temperature) / extended_dimension_mass
        extended_dimension_velocity[i] *= dt
        extended_dimension_velocity[i] -= extended_dimension_velocity[0] * extended_dimension_velocity[1] * dt
    }
    extended_dimension_velocity[chain_length - 1] = extended_dimension_velocity[chain_length - 2] * extended_dimension_velocity[chain_length - 2] - Boltzmann_factor * ensemble_temperature / extended_dimension_mass
    extended_dimension_velocity[chain_length - 1] *= dt
    acceleration = force / mass - velocity * extended_dimension_velocity[0]
    velocity += acceleration * dt
    if (velocity > maximum_velocity)
    {
        velocity = maximum_velocity
    }
    coordinates += velocity * dt
```

# Pressure Control

## Monte Carlo Barostat

Pseudocode implementation:

```
    if (step % change_interval == 0)
    {
        record_old_energy_and_force, randomly_change_volume, calculate_new_energy_and_force
        extra_term = ensemble_pressure * (new_volume - old_volume)
        extra_term -= particle_count * Boltzmann_factor * ensemble_temperature * ln(new_volume / old_volume)
        extra_term -= surface_count * surface_tension * (new_surface_area - old_surface_area)
        acceptance_probability = exp(- (new_energy - old_energy + extra_term) / Boltzmann_factor / ensemble_temperature)
        if (not_accepted)
        {
            restore_old_volume_energy_and_force
        }
        if (trial_count % parameter_check_interval == 0)
        {
            if (acceptance_rate < minimum_acceptance_rate)
            {
                maximum_volume_change *= 0.9
            }
            if (acceptance_rate > maximum_acceptance_rate)
            {
                maximum_volume_change *= 1.1
            }
        }
    }
    NVT_iteration
    constraint_iteration
```

## Berendsen Barostat

Pseudocode implementation:

```
    NVT_iteration
    constraint_iteration
    if (step % change_interval == 0)
    {
        change_factor = 1 - change_interval * compressibility * dt / time_constant / 3 * (ensemble_pressure - pressure)
        if (enable_random_correction)
        {
            change_factor += sqrt(2 * Boltzmann_factor * ensemble_temperature * compressibility / time_constant / new_volume) / 3 * standard_normal_random_number
            velocity /= change_factor
        }
        coordinates *= change_factor
    }
```

## Andersen Barostat

Pseudocode implementation:

```
    NVT_iteration
    constraint_iteration
    if (step % change_interval == 0)
    {
        volume_velocity -= change_interval * compressibility * dt / time_constant / 3 * (ensemble_pressure - pressure) / volume_mass
        scale_volume_velocity_by_temperature
        change_factor += volume_velocity * dt
        coordinates *= change_factor
    }
```
