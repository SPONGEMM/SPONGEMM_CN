---
title: "Simulation of Sodium Chloride Crystals"
description: "SPONGE 1.4 tutorial."
version: "SPONGE 1.4"
section: "Tutorials"
---

> This page was translated by GPT-5.5 AI.

<h1 id="氯化钠晶体的模拟">Simulation of Sodium Chloride Crystals</h1>
<h2 id="引入">Introduction</h2>
<p>This tutorial mainly reproduces the core simulation part of a paper published in Acta Physica Sinica.</p>
<blockquote>
<p>Shouxin Cui, Lingcang Cai, Haiquan Hu, Yongxin Guo, Shikai Xiang, Fuqian Jing. Molecular dynamics calculation of thermophysical parameters of sodium chloride crystals under high temperature and high pressure. Acta Physica Sinica, 2005, 54(6): 2826-2831. doi: 10.7498/aps.54.2826</p>
</blockquote>
<h2 id="建模">Model Building</h2>
<p>The force field used in the original paper is relatively complex. This tutorial only discusses basic MD and is not intended to fully reproduce the reported results, so the force field used here is the sodium ion and chloride ion force field bundled with the TIP3P water model in Xponge.</p>
<blockquote>
<p>In Suk Joung and Thomas E. Cheatham, Determination of Alkali and Halide Monovalent Ion Parameters for Use in Explicitly Solvated Biomolecular Simulations, The Journal of Physical Chemistry B 2008 112 (30), 9020-9041, DOI: 10.1021/jp8001614</p>
</blockquote>
<p>Following the original paper,</p>
<p>use Xponge for model building. Write the Python script <code>build.py</code> as follows:</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-python"># Import the Xponge module
import Xponge
# Import the force field
import Xponge.forcefield.amber.tip3p
# Define the structural unit: NA at (0,0,0) and CL at (4,0,0)
# The 4 Angstrom value is arbitrary here; it only needs to avoid an overly short distance.
# The MD simulation will equilibrate it to the correct position.
mol0 = NA + CL
mol0.residues[-1].CL.x = 4
# Define the cubic fill region from (0,0,0) to (64,64,64)
region = Xponge.BlockRegion(0, 0, 0, 64, 64, 64)
# Define the periodic box from (0,0,0) to (70,70,70)
box = Xponge.BlockRegion(0, 0, 0, 65, 65, 65)
# Define the lattice: an fcc crystal with an 8 Angstrom unit-lattice spacing
lattice = Xponge.Lattice("fcc", mol0, 8)
# Create the cells
mol = lattice.Create(box, region)
# Save the files
Save_PDB(mol, "NaCl.pdb")
Save_SPONGE_Input(mol, "NaCl")
</code></pre>
<p>Run the following commands in the command line:</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-bash">python build.py
vmd NaCl.pdb
</code></pre>
<p>After adjusting several visualization settings, the following visualization results are obtained:</p>
<p><img alt="1.png" src="/assets/docs/1p4/tutorials/nacl-high-pressure/1.webp"></p>
<p><img alt="2.png" src="/assets/docs/1p4/tutorials/nacl-high-pressure/2.webp"></p>
<h2 id="动力学模拟">Molecular Dynamics Simulation</h2>
<h3 id="最小化">Minimization</h3>
<p>Enter the following command in the command line to perform 5000 steps of gradient-descent minimization:</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-bash">SPONGE -default_in_file_prefix NaCl -mode minimization -step_limit 5000 -rst min
</code></pre>
<p>The meaning of each part is as follows:</p>
<ul>
<li><code>SPONGE</code><br>
The CUDA SPONGE program</li>
<li><code>-default_in_file_prefix NaCl</code><br>
The default prefix of the input files is <code>NaCl</code>, corresponding to <code>Save_SPONGE_Input(mol, “NaCl”)</code> in the model-building process</li>
<li><code>-mode minimization</code><br>
Run minimization, using the variable-step-size gradient descent algorithm by default</li>
<li><code>-step_limit 5000</code><br>
The total number of steps is 5000</li>
<li><code>-rst min</code><br>
The prefix of the generated coordinate and velocity files is <code>min</code>. That is, the generated coordinate file is <code>min_coordinate.txt</code>, and the generated velocity file is <code>min_velocity.txt</code> (the velocity file has no obvious significance for minimization)</li>
</ul>
<h3 id="h-300-k-40-gpa下的npt模拟">NPT Simulation at 300 K and 40 GPa</h3>
<p>Enter the following command in the command line to perform a 50000-step NPT ensemble simulation:</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-bash">SPONGE -default_in_file_prefix NaCl -coordinate_in_file min_coordinate.txt -mode NPT -dt 1e-3 -step_limit 55000 -thermostat middle_langevin -middle_langevin_gamma 10 -barostat berendsen_barostat -target_temperature 300 -target_pressure 400000 -mdout 40GPa.out -rst 40GPa -crd 40GPa.dat -box 40GPa.box
</code></pre>
<p>The meaning of each part is as follows:</p>
<ul>
<li><code>SPONGE</code><br>
The CUDA SPONGE program</li>
<li><code>-default_in_file_prefix NaCl</code><br>
The default prefix of the input files is <code>NaCl</code>, corresponding to <code>Save_SPONGE_Input(mol, “NaCl”)</code> in the model-building process</li>
<li><code>-coordinate_in_file min_coordinate.txt</code><br>
Use the coordinates from the minimization result as the initial coordinates for the simulation</li>
<li><code>-mode NPT</code><br>
Run an NPT simulation</li>
<li><code>-dt 1e-3</code><br>
The simulation time step is 1e-3 ps, namely 1 fs</li>
<li><code>-step_limit 5000</code><br>
The total number of steps is 50000</li>
<li><code>-thermostat middle_langevin</code><br>
Use the middle Langevin method for temperature control</li>
<li><code>-middle_langevin_gamma 10</code><br>
The temperature-control frequency is 10 ps^-1. Note that the default value here is 1. Because the pressure in this simulation is very high, the default frequency may be too low to keep the temperature under control</li>
<li><code>-barostat berendsen_barostat</code><br>
Use the Berendsen method for pressure control</li>
<li><code>-target_temperature 300</code><br>
Control the temperature to 300 K</li>
<li><code>-target_pressure 400000</code><br>
Control the pressure to 400000 bar (40 GPa)</li>
<li><code>-mdout 40GPa.out</code><br>
Write the log file to <code>40GPa.out</code></li>
</ul>
<h3 id="h-300-k-0-gpa下的npt模拟">NPT Simulation at 300 K and 0 GPa</h3>
<p>Enter the following command in the command line to perform a 50000-step NPT ensemble simulation. Here, the result obtained at 40 GPa is used as the input condition.</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-bash">SPONGE -default_in_file_prefix NaCl -coordinate_in_file 40GPa_coordinate.txt -velocity_in_file 40GPa_velocity.txt -mode NPT -dt 1e-3 -step_limit 55000 -thermostat middle_langevin -middle_langevin_gamma 10 -barostat berendsen_barostat -target_temperature 300 -target_pressure 1 -mdout 0GPa.out  -crd 0GPa.dat -box 0GPa.box
</code></pre>
<p>The meanings of the options are the same as above, except that the additional command <code>-velocity_in_file 40GPa_velocity.txt</code> is added to provide the initial velocities.</p>
<h2 id="分析与讨论">Analysis and Discussion</h2>
<h3 id="轨迹可视化">Trajectory Visualization</h3>
<p>Use VMD for visualization. The 40 GPa trajectory is used as an example:</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-bash">vmd -sponge_mass NaCl_mass.txt 40GPa.dat
</code></pre>
<h3 id="结果分析">Result Analysis</h3>
<p>Write the analysis script <code>analysis.py</code>:</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-python">import numpy as np
import matplotlib.pyplot as plt
import Xponge
from Xponge.analysis import MdoutReader
mdout1 = MdoutReader("0GPa.out")
mdout2 = MdoutReader("40GPa.out")
plt.plot(mdout1.time, mdout1.density, label="0 GPa")
plt.plot(mdout1.time, mdout2.density, label="40 GPa")
plt.legend()
plt.show()
density1 = np.mean(mdout1.density)
density2 = np.mean(mdout2.density)
print(density1, density2, density1/density2)
</code></pre>
<p>The results are as follows:</p>
<p><img alt="3.png" src="/assets/docs/1p4/tutorials/nacl-high-pressure/3.webp"></p>
<p>The average densities are <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2.126</mn><mtext> </mtext><mrow><mi mathvariant="normal">g</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">c</mi><msup><mi mathvariant="normal">m</mi><mrow><mo>−</mo><mn>3</mn></mrow></msup></mrow></mrow>2.126\,{\rm g/cm^{-3}}</math></span><span aria-hidden="true" class="katex-html"><span class="base"><span style="height:1.064108em;vertical-align:-0.25em;" class="strut"></span><span class="mord">2</span><span class="mord">.</span><span class="mord">1</span><span class="mord">2</span><span class="mord">6</span><span style="margin-right:0.16666666666666666em;" class="mspace"></span><span class="mord"><span class="mord"><span style="margin-right:0.01389em;" class="mord mathrm">g</span><span class="mord mathrm">/</span><span class="mord mathrm">c</span><span class="mord"><span class="mord mathrm">m</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span style="height:0.8141079999999999em;" class="vlist"><span style="top:-3.063em;margin-right:0.05em;"><span style="height:2.7em;" class="pstrut"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">−</span><span class="mord mathrm mtight">3</span></span></span></span></span></span></span></span></span></span></span></span></span></span> and <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2.999</mn><mtext> </mtext><mrow><mi mathvariant="normal">g</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">c</mi><msup><mi mathvariant="normal">m</mi><mrow><mo>−</mo><mn>3</mn></mrow></msup></mrow></mrow>2.999\,{\rm g/cm^{-3}}</math></span><span aria-hidden="true" class="katex-html"><span class="base"><span style="height:1.064108em;vertical-align:-0.25em;" class="strut"></span><span class="mord">2</span><span class="mord">.</span><span class="mord">9</span><span class="mord">9</span><span class="mord">9</span><span style="margin-right:0.16666666666666666em;" class="mspace"></span><span class="mord"><span class="mord"><span style="margin-right:0.01389em;" class="mord mathrm">g</span><span class="mord mathrm">/</span><span class="mord mathrm">c</span><span class="mord"><span class="mord mathrm">m</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span style="height:0.8141079999999999em;" class="vlist"><span style="top:-3.063em;margin-right:0.05em;"><span style="height:2.7em;" class="pstrut"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">−</span><span class="mord mathrm mtight">3</span></span></span></span></span></span></span></span></span></span></span></span></span></span>, respectively, and the relative density is <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0.709</mn></mrow>0.709</math></span><span aria-hidden="true" class="katex-html"><span class="base"><span style="height:0.64444em;vertical-align:0em;" class="strut"></span><span class="mord">0</span><span class="mord">.</span><span class="mord">7</span><span class="mord">0</span><span class="mord">9</span></span></span></span>.</p>
<h3 id="讨论">Discussion</h3>
<h4 id="密度绝对值">Absolute Density</h4>
<p>Sodium chloride is a common crystal. Its density at room temperature and ambient pressure is known to be about <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2.1</mn><mtext> </mtext><mrow><mi mathvariant="normal">g</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">c</mi><msup><mi mathvariant="normal">m</mi><mrow><mo>−</mo><mn>3</mn></mrow></msup></mrow></mrow>2.1\,{\rm g/cm^{-3}}</math></span><span aria-hidden="true" class="katex-html"><span class="base"><span style="height:1.064108em;vertical-align:-0.25em;" class="strut"></span><span class="mord">2</span><span class="mord">.</span><span class="mord">1</span><span style="margin-right:0.16666666666666666em;" class="mspace"></span><span class="mord"><span class="mord"><span style="margin-right:0.01389em;" class="mord mathrm">g</span><span class="mord mathrm">/</span><span class="mord mathrm">c</span><span class="mord"><span class="mord mathrm">m</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span style="height:0.8141079999999999em;" class="vlist"><span style="top:-3.063em;margin-right:0.05em;"><span style="height:2.7em;" class="pstrut"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">−</span><span class="mord mathrm mtight">3</span></span></span></span></span></span></span></span></span></span></span></span></span></span>, while the result obtained in this simulation is <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2.126</mn><mtext> </mtext><mrow><mi mathvariant="normal">g</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">c</mi><msup><mi mathvariant="normal">m</mi><mrow><mo>−</mo><mn>3</mn></mrow></msup></mrow></mrow>2.126\,{\rm g/cm^{-3}}</math></span><span aria-hidden="true" class="katex-html"><span class="base"><span style="height:1.064108em;vertical-align:-0.25em;" class="strut"></span><span class="mord">2</span><span class="mord">.</span><span class="mord">1</span><span class="mord">2</span><span class="mord">6</span><span style="margin-right:0.16666666666666666em;" class="mspace"></span><span class="mord"><span class="mord"><span style="margin-right:0.01389em;" class="mord mathrm">g</span><span class="mord mathrm">/</span><span class="mord mathrm">c</span><span class="mord"><span class="mord mathrm">m</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span style="height:0.8141079999999999em;" class="vlist"><span style="top:-3.063em;margin-right:0.05em;"><span style="height:2.7em;" class="pstrut"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">−</span><span class="mord mathrm mtight">3</span></span></span></span></span></span></span></span></span></span></span></span></span></span></p>
<h4 id="密度相对值">Relative Density</h4>
<p>The original paper mainly contains volume-change curves. Comparing the data at 40 GPa and 0 GPa gives a ratio of about <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0.62</mn></mrow>0.62</math></span><span aria-hidden="true" class="katex-html"><span class="base"><span style="height:0.64444em;vertical-align:0em;" class="strut"></span><span class="mord">0</span><span class="mord">.</span><span class="mord">6</span><span class="mord">2</span></span></span></span>, while the value from this simulation is <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0.709</mn></mrow>0.709</math></span><span aria-hidden="true" class="katex-html"><span class="base"><span style="height:0.64444em;vertical-align:0em;" class="strut"></span><span class="mord">0</span><span class="mord">.</span><span class="mord">7</span><span class="mord">0</span><span class="mord">9</span></span></span></span>, which is somewhat high.</p>
<p><img alt="4.png" src="/assets/docs/1p4/tutorials/nacl-high-pressure/4.webp"></p>
<h4 id="分析">Analysis</h4>
<p>The simulation results in this tutorial all have a certain degree of error, because this tutorial is only a rough simulation rather than a research article. The main source of error should be the force field: the force field used here was mainly fitted for room-temperature and ambient-pressure conditions, so it has relatively large errors under high-temperature and high-pressure conditions.</p>
