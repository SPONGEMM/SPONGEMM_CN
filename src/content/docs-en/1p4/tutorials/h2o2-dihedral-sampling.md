---
title: "SPONGE Enhanced Sampling Example"
description: "SPONGE 1.4 tutorial."
version: "SPONGE 1.4"
section: "Tutorials"
---

> This page was translated by GPT-5.5 AI.

<h1 id="sponge-enhanced-sampling-example">SPONGE Enhanced Sampling Example</h1>
<blockquote>
<p>Last updated:<br>
2024/01/01</p>
</blockquote>
<h2 id="program-installation">Program Installation</h2>
<p>See <a class="is-internal-link is-valid-page" href="/en/docs/1p4/tutorials/linux-install">Installation on Linux</a> and <a class="is-internal-link is-valid-page" href="/en/docs/1p4/tutorials/windows-install">Installation on Windows</a>.</p>
<h2 id="what-is-enhanced-sampling">What Is Enhanced Sampling?</h2>
<p>Usually, our molecular dynamics (MD) simulations are performed under a given force field with a potential energy function</p>

$$
U(x)
$$

<p>If the required result cannot be obtained under this potential energy function, an enhanced sampling algorithm can be used. In this case, a manually defined bias potential is added to the potential energy function:</p>

$$
U'(x) = U(x) + U_{bias}(x)
$$

<p>A simulation with an added bias potential is, of course, different from the real unbiased simulation, but the result can be transformed through calculation. The theoretical basis is the distribution function of thermodynamic quantities in each ensemble. For example, in the canonical ensemble,</p>

$$
p(x) = \frac {1}{Q} {\rm exp}(-\beta U(x))
$$

<p>Therefore, each occurrence probability in the simulation result only needs to be reweighted, that is, multiplied by ${\rm exp}(\beta U_{bias}(x))$:</p>

$$
p'(x) = \frac {1}{Q} {\rm exp}(-\beta U'(x)) = \frac {1}{Q} {\rm exp}(-\beta (U(x) + U_{bias}(x))) = p(x) {\rm exp}(-\beta U_{bias}(x))
$$

<h2 id="why-use-enhanced-sampling">Why Use Enhanced Sampling?</h2>
<p>Here, we build a <a class="is-asset-link" href="/assets/docs/1p4/tutorials/h2o2-dihedral-sampling/h2o2-sampling.zip">hydrogen peroxide model system</a>. After decompression, the file directory is as follows:</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-plain">│  H2O2_angle.txt
│  H2O2_bond.txt
│  H2O2_charge.txt
│  H2O2_coordinate.txt
│  H2O2_dihedral.txt
│  H2O2_exclude.txt
│  H2O2_LJ.txt
│  H2O2_mass.txt
│  H2O2_nb14.txt
│  H2O2_residue.txt
│
├─bad_normal_md
│      analysis.py
│      cv.txt
│      H2O2_dihedral.txt
│      mdin.txt
│
├─metadynamics
│      analysis.py
│      cv.txt
│      H2O2_dihedral.txt
│      mdin.txt
│
├─normal_md
│      analysis.py
│      cv.txt
│      mdin.txt
│
├─sits
│      analysis.py
│      cv.txt
│      H2O2_dihedral.txt
│      iteration.in
│      observation.in
│      production.in
│
└─umbrella_sampling
        analysis.py
        cv.txt
        H2O2_dihedral.txt
        min.in
        run.in
        run.py
</code></pre>
<p>In this model system, I removed the LJ and electrostatic interactions of hydrogen peroxide and kept only the potential energy terms for internal coordinates such as bond lengths, bond angles, and dihedral angles. This makes the example simpler and makes it easier to understand the principle and program usage.</p>
<p>Open the <code>H2O2_dihedral.txt</code> file:</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-plain">2
2 0 1 3 2 0.3 0.4
2 0 1 3 3 0.1 -0.6
</code></pre>
<p>According to the <a class="is-internal-link is-valid-page" href="/en/docs/1p4/file-formats">file formats</a> and <a class="is-internal-link is-valid-page" href="/en/docs/1p4/modules">module functions</a> in the SPONGE documentation, we know that this corresponds to the potential energy function</p>

$$
U(\phi) = 0.3 (1 + cos(2\phi - 0.4)) + 0.1 (1 + cos(3\phi + 0.6))
$$

<p>First, enter the <code>normal_md</code> folder in the archive and run SPONGE directly in this folder.</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-bash">SPONGE -mdin mdin.txt
</code></pre>
<p>In our <code>mdin</code>, the CV input file is set to <code>cv.txt</code>, whose content is</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-plain">print
{
    CV = torsion
}
torsion
{
   CV_type = dihedral
   atom = 2 0 1 3
}
</code></pre>
<p>Here we define a CV named <code>torsion</code>. Its type is <code>dihedral</code>, and the parameter atoms are 2, 0, 1, and 3.</p>
<p>After the simulation finishes, the output file <code>mdout.txt</code> is generated. We use the following Python script (<a class="is-external-link" href="analysis.py"><code>analysis.py</code> in this directory</a>) for analysis:</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-python">from Xponge.analysis import MdoutReader
import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import gaussian_kde
t = MdoutReader("mdout.txt")
t = t.torsion
kT = 8.314 * 300 / 4184
t = np.concatenate((t, t + np.pi * 2, t - np.pi * 2))
kernel = gaussian_kde(t, bw_method=0.03)
positions = np.linspace(-np.pi, np.pi, 300)
result = kernel(positions)
result = -kT * np.log(result)
result -= min(result)
theory = 0.3 * np.cos(2 * positions - 0.4) + 0.1 * np.cos(3 * positions + 0.6)
theory -= min(theory)
plt.plot(positions, result, label="simulated results")
plt.plot(positions, theory, label="potential")
plt.legend()
plt.show()
</code></pre>
<p><img alt="normal_md.png" src="/assets/docs/1p4/tutorials/h2o2-dihedral-sampling/normal_md.webp"></p>
<p>The potential energy surface obtained from the simulation is roughly consistent with the specified dihedral energy. Although the result is still not fully satisfactory, it should become better if we increase the simulation time by a limited amount.</p>
<p>Now enter the <code>bad_normal_md</code> folder. In this folder, our <code>mdin</code> specifies a file that replaces the default dihedral file. Its content is</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-plain">2
2 0 1 3 2 15 0.4
2 0 1 3 3 5 -0.6
</code></pre>

$$
U(\phi) = 15 (1 + cos(2\phi - 0.4)) + 5 (1 + cos(3\phi + 0.6))
$$

<p>The potential energy function has been multiplied directly by 50. At this point, room temperature is not enough for this artificial hydrogen peroxide system to cross the dihedral barrier.</p>
<p>Next, run an MD simulation for the same length of time.</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-bash">SPONGE -mdin mdin.txt
</code></pre>
<p>Analyze it with the same script as above. The result is as follows:</p>
<p><img alt="bad_normal_md.png" src="/assets/docs/1p4/tutorials/h2o2-dihedral-sampling/bad_normal_md.webp"></p>
<p>It can be seen that the simulation result is now very poor, so an enhanced sampling algorithm is needed.</p>
<h2 id="umbrella-sampling">Umbrella Sampling</h2>
<p>Enter the <code>umbrella_sampling</code> folder. First, look at the <code>cv.txt</code> file:</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-plain">print
{
    CV = torsion
}
torsion
{
   CV_type = dihedral
   atom = 2 0 1 3
}
restrain
{
    CV = torsion
    weight = 200
    reference = res_cv_ref
    period = 6.283185308
}
</code></pre>
<p>Compared with the <code>cv.txt</code> used in normal MD, this file adds a <code>restrain</code> section, which applies a harmonic restraint. The reference value is set to <code>res_cv_ref</code>, which is specified by external input.</p>
<p>Write the Python script <code>run.py</code> to run the jobs in batches:</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-python">import os
import shutil
import numpy as np
for i, ref in enumerate(np.linspace(-np.pi,np.pi,50)):
    assert os.system(f"SPONGE -mdin min.in -res_cv_ref {ref}") == 0
    assert os.system(f"SPONGE -mdin run.in -res_cv_ref {ref} -coordinate_in_file restart_coordinate.txt") == 0
    shutil.copy("mdout.txt", f"{i}.mdout")
</code></pre>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-bash">python run.py
</code></pre>
<p>Finally, 50 <code>mdout</code> files are obtained.</p>
<p>For umbrella sampling, because the trajectories involve many bias potentials, the WHAM algorithm is required for reweighting. We use the following script for analysis:</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-python">import numpy as np
import matplotlib.pyplot as plt
from Xponge.analysis import wham
"""use help(wham.WHAM) to see the help"""
w = wham.WHAM(np.linspace(-np.pi, np.pi, 51), 300, 200, np.linspace(-np.pi, np.pi, 50), 2 * np.pi)
w.get_data_from_mdout("*.mdout", "torsion")
x, y, f = w.main()
plt.plot(x, y, label="umbrella sampling")
y2 = 15 * np.cos(2 * x - 0.4) + 5 * np.cos(3 * x + 0.6)
y2 -= min(y2)
plt.plot(x, y2, label="potential")
plt.legend()
plt.show()
</code></pre>
<p>The final result is</p>
<p><img alt="umbrella_sampling.png" src="/assets/docs/1p4/tutorials/h2o2-dihedral-sampling/umbrella_sampling.webp"><img alt="" src="/assets/docs/1p4/tutorials/h2o2-dihedral-sampling/umbrella_sampling.webp"></p>
<p>The effect is good.</p>
<h2 id="metadynamics">Metadynamics</h2>
<p>Enter the <code>metadynamics</code> folder. First, look at the <code>cv.txt</code> file:</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-plain">print
{
    CV = torsion
}
torsion
{
   CV_type = dihedral
   atom = 2 0 1 3
}
meta1d
{
    CV = torsion
    dCV = 0.001
    CV_minimal = -3.142
    CV_maximum = 3.142
    CV_period = 6.284
    welltemp_factor = 50
    height = 1
    sigma = 0.5
}
</code></pre>
<p>Compared with the <code>cv.txt</code> used in normal MD, this file adds a <code>meta1d</code> section. For the specific meanings of the settings, see the <a class="is-external-link" href="https://spongemm.readthedocs.io/zh_CN/latest/CV%E7%B3%BB%E7%BB%9F/CV%E7%B3%BB%E7%BB%9F.html">SPONGE documentation</a>.</p>
<p>Next, run an MD simulation for the same length of time.</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-bash">SPONGE -mdin mdin.txt
</code></pre>
<p>Use the following script to analyze the result:</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-python">from Xponge.analysis import MdoutReader
import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import gaussian_kde
t = MdoutReader("mdout.txt")
bias = t.meta1d
t = t.torsion
kT = 8.314 * 300 / 4184
w = np.exp(bias/kT)
t = np.concatenate((t, t + np.pi * 2, t - np.pi * 2))
w = np.concatenate((w, w, w))
kernel = gaussian_kde(t, weights=w, bw_method=0.01)
positions = np.linspace(-np.pi, np.pi, 300)
result = kernel(positions)
result = -kT * np.log(result)
result -= min(result)
theory = 15 * np.cos(2 * positions - 0.4) + 5 * np.cos(3 * positions + 0.6)
theory -= min(theory)
plt.plot(positions, result, label="simulated results")
plt.plot(positions, theory, label="potential")
toread = np.loadtxt("meta1d_potential.txt", skiprows=3)
toread[:, 1] = -toread[:, 1]
toread[:, 1] -= np.min(toread[:, 1])
plt.plot(toread[:, 0], toread[:, 1], label="meta1d potential")
plt.legend()
plt.show()
</code></pre>
<p><img alt="metadynamics.png" src="/assets/docs/1p4/tutorials/h2o2-dihedral-sampling/metadynamics.webp"></p>
<p>Two ways of obtaining the result are used here. One is reweighting, and the other is directly using the negative of the potential energy function added by metadynamics. In this example, both methods give the same effect.</p>
<blockquote>
<p>When obtaining the free energy surface from the negative of the potential energy function added by metadynamics, an additional factor is actually required because well-tempered metadynamics is used. This factor is</p>

$$
\frac {\rm welltemp\_factor} {k_B T + {\rm welltemp\_factor}}
$$

<p>Here this factor is $\frac {50} {0.596148 + 50} \approx 1$.</p>
</blockquote>
<h2 id="selective-integrated-tempering-sampling">Selective Integrated Tempering Sampling</h2>
<p>Note that this example is essentially a CV sampling example and is not very suitable for SITS, but the principle is the same.</p>
<h3 id="observation">Observation</h3>
<p>First, we need to observe the system.</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-bash">SPONGE -mdin observation.in
</code></pre>
<p>In this input file, the additional commands are</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-plain">SITS
{
    mode = observation
    atom_numbers = 4
}
sits_dihedral_in_file = H2O2_dihedral.txt
</code></pre>
<p>Here, <code>SITS_mode = observation</code> means observation, <code>SITS_atom_numbers = 4</code> means that ITS is applied to the nonbonded interactions of the first 4 atoms, and <code>sits_dihedral_in_file</code> specifies the dihedral angle on which we want to perform ITS.<br>
During the run, we mainly observe the <code>SITS_AA_kAB</code> part, which is the energy that we ultimately want to enhance. We set <code>pe_b</code> according to the minimum value observed for this quantity minus an estimated retained value.<br>
In this example, <code>SITS_AA_kAB</code> is around 9. We estimate that the later value may decrease by 20, so <code>pe_b</code> is set to <code>-(9 - 20) = 11</code>.</p>
<blockquote class="is-warning">
<p>The choice of <code>pe_b</code> is system-dependent. You need to tune <code>pe_b</code> reasonably; otherwise, the system is very likely to crash!</p>
</blockquote>
<p>Next, perform the iteration step.</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-bash">SPONGE -mdin iteration.in
</code></pre>
<p>In this input file, the additional commands are</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-plain">SITS
{
    mode = iteration
    atom_numbers = 4
    T_high = 8000
    k_numbers = 8000
    T_low = 200
    pe_b = 11
}
sits_dihedral_in_file = H2O2_dihedral.txt
</code></pre>
<p>This section adds the highest temperature for integration, the lowest temperature for integration, the number of discrete grid points for integration, and the <code>pe_b</code> mentioned above. These parameters can all be adjusted, but poor parameters may cause abrupt changes in the potential energy function and then crash the simulation.</p>
<p>After this simulation step, the most important result is the <code>SITS_nk_rest.txt</code> file, which contains free energy information at different temperatures. We use this file for the production simulation.</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-bash">SPONGE -mdin production.in
</code></pre>
<p>In this input file, the additional commands are</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-plain">SITS
{
    mode = production
    atom_numbers = 4
    T_high = 8000
    k_numbers = 8000
    T_low = 200
    pe_b = 11
    nk_in_file = SITS_nk_rest.txt
}
sits_dihedral_in_file = H2O2_dihedral.txt
</code></pre>
<p>The new part here is that <code>SITS_nk_rest.txt</code>, obtained in the iteration step, is used as input and passed to the <code>nk_in_file</code> command.</p>
<p>After the simulation finishes, use the following script for analysis:</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-python">from Xponge.analysis import MdoutReader
import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import gaussian_kde
t = MdoutReader("mdout.txt")
bias = t.SITS_bias
t = t.torsion
kT = 8.314 * 300 / 4184
w = np.exp(bias/kT)
t = np.concatenate((t, t + np.pi * 2, t - np.pi * 2))
w = np.concatenate((w, w, w))
kernel = gaussian_kde(t, weights=w, bw_method=0.01)
positions = np.linspace(-np.pi, np.pi, 300)
result = kernel(positions)
result = -kT * np.log(result)
result -= min(result)
theory = 15 * np.cos(2 * positions - 0.4) + 5 * np.cos(3 * positions + 0.6)
theory -= min(theory)
plt.plot(positions, result, label="simulated results")
plt.plot(positions, theory, label="potential")
plt.legend()
plt.show()
</code></pre>
<p>The result is as follows:</p>
<p><img alt="sits.png" src="/assets/docs/1p4/tutorials/h2o2-dihedral-sampling/sits.webp"></p>
