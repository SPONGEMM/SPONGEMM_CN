---
title: "Alanine Dodecapeptide Folding"
description: "SPONGE 1.4 tutorial."
version: "SPONGE 1.4"
section: "Tutorials"
---

> This page was translated by GPT-5.5 AI.

<h1 id="丙氨酸十二肽的折叠">Alanine Dodecapeptide Folding</h1>
<blockquote>
<p>Last updated:<br>
2024/01/01</p>
</blockquote>
<p>Main topics:</p>
<ol>
<li>Build an implicit-solvent model of alanine dodecapeptide with Xponge</li>
<li>Run the simulation with SPONGE 1.4</li>
<li>Visualize the results with VMD</li>
</ol>
<h2 id="软件安装">Software Installation</h2>
<p>See <a class="is-internal-link is-valid-page" href="/en/docs/1p4/tutorials/linux-install">Installation on Linux</a> and <a class="is-internal-link is-valid-page" href="/en/docs/1p4/tutorials/windows-install">Installation on Windows</a>.</p>
<h2 id="建模">Model Building</h2>
<p>Open a terminal and start Python:</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-bash">python
</code></pre>
<p>In the Python terminal, enter the following Python commands in order.</p>
<h3 id="h-1-导入需要的模块">1. Import the Required Modules</h3>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-python">import Xponge #Xponge itself
import Xponge.forcefield.amber.ff19sb  #The force field used
from Xponge.forcefield.special import gb #The implicit-solvent GB model used
</code></pre>
<h3 id="h-2-获得xponge的分子实例">2. Obtain the Xponge Molecule Instance</h3>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-python">mol = NALA + ALA * 10 + CALA
</code></pre>
<h3 id="h-3-设置gb参数">3. Set the GB Parameters</h3>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-python">gb.Set_GB_Radius(mol)
</code></pre>
<h3 id="h-4-保存输入文件">4. Save the Input Files</h3>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-python">Save_PDB(mol, "ALA.pdb")
Save_SPONGE_Input(mol, "ALA")
</code></pre>
<h2 id="动力学模拟">Molecular Dynamics Simulation</h2>
<p>In the working folder, create an <code>mdin.txt</code> file with your preferred text editor:</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-python">ALA12 simulation
pbc = 0
mode = NVT
dt = 2e-3
cutoff = 999
constrain_mode = SHAKE
step_limit = 5000000
thermostat = middle_langevin
default_in_file_prefix = ALA
</code></pre>
<p>For the meanings of these commands, see <a class="is-internal-link is-valid-page" href="/en/docs/1p4/commands">Input Commands</a>.</p>
<p>Then enter the following command in the terminal:</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-bash">SPONGE -mdin mdin.txt
</code></pre>
<h2 id="分析与讨论">Analysis and Discussion</h2>
<h3 id="结果分析">Result Analysis</h3>
<p>You can read the generated <code>mdout.txt</code> file to obtain the energy data. Use the following Python script to read the energy changes:</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-python">from Xponge.analysis import MdoutReader
mdout = MdoutReader("mdout.txt")
import matplotlib.pyplot as plt
plt.plot(mdout.time, mdout.potential)
plt.show()
</code></pre>
<p>The resulting plot is shown below:</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/alanine-folding/1.webp"></p>
<p>You can also use VMD to visualize the trajectory:</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-bash">vmd -sponge_mass ./ALA_mass.txt mdcrd.dat
</code></pre>
<p><img alt="" src="/assets/docs/1p4/tutorials/alanine-folding/2.gif"></p>
