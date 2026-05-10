---
title: "氯化钠晶体的模拟"
description: "SPONGE 1.4 教程。"
version: "SPONGE 1.4"
section: "教程"
---

<h1 id="氯化钠晶体的模拟">氯化钠晶体的模拟</h1>
<h2 id="引入">引入</h2>
<p>本文主要复刻物理学报上的一篇文献的核心模拟部分</p>
<blockquote>
<p>崔守鑫, 蔡灵仓, 胡海泉, 郭永新, 向士凯, 经福谦. 氯化钠晶体在高温高压下热物理参数的分子动力学计算. 物理学报, 2005, 54(6): 2826-2831. doi: 10.7498/aps.54.2826</p>
</blockquote>
<h2 id="建模">建模</h2>
<p>原文使用力场较为复杂，本文只讨论基础MD，并非为了完整重现结果，因此力场使用Xponge中TIP3P水模型中附带的钠离子和氯离子力场</p>
<blockquote>
<p>In Suk Joung and Thomas E. Cheatham, Determination of Alkali and Halide Monovalent Ion Parameters for Use in Explicitly Solvated Biomolecular Simulations, The Journal of Physical Chemistry B 2008 112 (30), 9020-9041, DOI: 10.1021/jp8001614</p>
</blockquote>
<p>参照原文献</p>
<p>使用Xponge建模，编写python脚本<code>build.py</code>如下</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-python">#导入Xponge模块
import Xponge
#引入力场
import Xponge.forcefield.amber.tip3p
#定义结构基元，(0,0,0)的NA和(4,0,0)的CL
#此处4埃取值较为任意，不要太近即可，MD模拟能将其平衡至正确位置
mol0 = NA + CL
mol0.residues[-1].CL.x = 4
#定义从(0,0,0)到(64,64,64)的正方体填充区域
region = Xponge.BlockRegion(0, 0, 0, 64, 64, 64)
#定义从(0,0,0)到(70,70,70)的周期性盒子
box = Xponge.BlockRegion(0, 0, 0, 65, 65, 65)
#定义点阵，单位点阵间距8埃的fcc晶体
lattice = Xponge.Lattice("fcc", mol0, 8)
#创建元胞
mol = lattice.Create(box, region)
#保存
Save_PDB(mol, "NaCl.pdb")
Save_SPONGE_Input(mol, "NaCl")
</code></pre>
<p>使用命令行执行</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-bash">python build.py
vmd NaCl.pdb
</code></pre>
<p>调整部分可视化设置，获得可视化结果：</p>
<p><img alt="1.png" src="/assets/docs/1p4/tutorials/nacl-high-pressure/1.webp"></p>
<p><img alt="2.png" src="/assets/docs/1p4/tutorials/nacl-high-pressure/2.webp"></p>
<h2 id="动力学模拟">动力学模拟</h2>
<h3 id="最小化">最小化</h3>
<p>在命令行中输入以下命令，进行5000步的梯度下降最小化</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-bash">SPONGE -default_in_file_prefix NaCl -mode minimization -step_limit 5000 -rst min
</code></pre>
<p>各部分的含义：</p>
<ul>
<li><code>SPONGE</code><br>
CUDA SPONGE的程序</li>
<li><code>-default_in_file_prefix NaCl</code><br>
输入文件的默认前缀为<code>NaCl</code>，对应于建模过程中<code>Save_SPONGE_Input(mol, “NaCl”)</code></li>
<li><code>-mode minimization</code><br>
运行最小化，默认采用变步长的梯度下降算法</li>
<li><code>-step_limit 5000</code><br>
总步数5000步</li>
<li><code>-rst min</code><br>
生成的坐标和速度文件的前缀是<code>min</code>，也即生成的坐标文件为<code>min_coordinate.txt</code>，生成的速度文件为<code>min_velocity.txt</code>（对最小化而言速度文件无明显意义）</li>
</ul>
<h3 id="h-300-k-40-gpa下的npt模拟">300 K, 40 GPa下的NPT模拟</h3>
<p>在命令行中输入以下命令，进行50000步的NPT系综模拟</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-bash">SPONGE -default_in_file_prefix NaCl -coordinate_in_file min_coordinate.txt -mode NPT -dt 1e-3 -step_limit 55000 -thermostat middle_langevin -middle_langevin_gamma 10 -barostat berendsen_barostat -target_temperature 300 -target_pressure 400000 -mdout 40GPa.out -rst 40GPa -crd 40GPa.dat -box 40GPa.box
</code></pre>
<p>各部分的含义：</p>
<ul>
<li><code>SPONGE</code><br>
CUDA SPONGE的程序</li>
<li><code>-default_in_file_prefix NaCl</code><br>
输入文件的默认前缀为<code>NaCl</code>，对应于建模过程中<code>Save_SPONGE_Input(mol, “NaCl”)</code></li>
<li><code>-coordinate_in_file min_coordinate.txt</code><br>
使用最小化的结果的坐标作为初始坐标进行模拟</li>
<li><code>-mode NPT</code><br>
运行NPT模拟</li>
<li><code>-dt 1e-3</code><br>
模拟的步长1e-3皮秒，也即1飞秒</li>
<li><code>-step_limit 5000</code><br>
总步数50000步</li>
<li><code>-thermostat middle_langevin</code><br>
使用middle langevin方法控温</li>
<li><code>-middle_langevin_gamma 10</code><br>
控温的频率为10 ps^-1。注意此处默认值为1，而本模拟中压强过大，使用默认值频率太低可能无法控制住温度</li>
<li><code>-barostat berendsen_barostat</code><br>
使用berendsen方法控压</li>
<li><code>-target_temperature 300</code><br>
控温至300开</li>
<li><code>-target_pressure 400000</code><br>
控压至400000 bar（40 GPa）</li>
<li><code>-mdout 40GPa.out</code><br>
记录文件打印至<code>40GPa.out</code></li>
</ul>
<h3 id="h-300-k-0-gpa下的npt模拟">300 K, 0 GPa下的NPT模拟</h3>
<p>在命令行中输入以下命令，进行50000步的NPT系综模拟。此处以40 GPa下获得的结果作为输入条件</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-bash">SPONGE -default_in_file_prefix NaCl -coordinate_in_file 40GPa_coordinate.txt -velocity_in_file 40GPa_velocity.txt -mode NPT -dt 1e-3 -step_limit 55000 -thermostat middle_langevin -middle_langevin_gamma 10 -barostat berendsen_barostat -target_temperature 300 -target_pressure 1 -mdout 0GPa.out  -crd 0GPa.dat -box 0GPa.box
</code></pre>
<p>各部分的含义同上，只额外添加了命令<code>-velocity_in_file 40GPa_velocity.txt</code>，添加了初始速度。</p>
<h2 id="分析与讨论">分析与讨论</h2>
<h3 id="轨迹可视化">轨迹可视化</h3>
<p>使用VMD进行可视化，以40GPa的轨迹为例</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-bash">vmd -sponge_mass NaCl_mass.txt 40GPa.dat
</code></pre>
<h3 id="结果分析">结果分析</h3>
<p>编写分析脚本<code>analysis.py</code></p>
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
<p>获得结果分别为：</p>
<p><img alt="3.png" src="/assets/docs/1p4/tutorials/nacl-high-pressure/3.webp"></p>
<p>密度平均值分别为<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2.126</mn><mtext> </mtext><mrow><mi mathvariant="normal">g</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">c</mi><msup><mi mathvariant="normal">m</mi><mrow><mo>−</mo><mn>3</mn></mrow></msup></mrow></mrow>2.126\,{\rm g/cm^{-3}}</math></span><span aria-hidden="true" class="katex-html"><span class="base"><span style="height:1.064108em;vertical-align:-0.25em;" class="strut"></span><span class="mord">2</span><span class="mord">.</span><span class="mord">1</span><span class="mord">2</span><span class="mord">6</span><span style="margin-right:0.16666666666666666em;" class="mspace"></span><span class="mord"><span class="mord"><span style="margin-right:0.01389em;" class="mord mathrm">g</span><span class="mord mathrm">/</span><span class="mord mathrm">c</span><span class="mord"><span class="mord mathrm">m</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span style="height:0.8141079999999999em;" class="vlist"><span style="top:-3.063em;margin-right:0.05em;"><span style="height:2.7em;" class="pstrut"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">−</span><span class="mord mathrm mtight">3</span></span></span></span></span></span></span></span></span></span></span></span></span></span>与<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2.999</mn><mtext> </mtext><mrow><mi mathvariant="normal">g</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">c</mi><msup><mi mathvariant="normal">m</mi><mrow><mo>−</mo><mn>3</mn></mrow></msup></mrow></mrow>2.999\,{\rm g/cm^{-3}}</math></span><span aria-hidden="true" class="katex-html"><span class="base"><span style="height:1.064108em;vertical-align:-0.25em;" class="strut"></span><span class="mord">2</span><span class="mord">.</span><span class="mord">9</span><span class="mord">9</span><span class="mord">9</span><span style="margin-right:0.16666666666666666em;" class="mspace"></span><span class="mord"><span class="mord"><span style="margin-right:0.01389em;" class="mord mathrm">g</span><span class="mord mathrm">/</span><span class="mord mathrm">c</span><span class="mord"><span class="mord mathrm">m</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span style="height:0.8141079999999999em;" class="vlist"><span style="top:-3.063em;margin-right:0.05em;"><span style="height:2.7em;" class="pstrut"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">−</span><span class="mord mathrm mtight">3</span></span></span></span></span></span></span></span></span></span></span></span></span></span>，密度相对值为<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0.709</mn></mrow>0.709</math></span><span aria-hidden="true" class="katex-html"><span class="base"><span style="height:0.64444em;vertical-align:0em;" class="strut"></span><span class="mord">0</span><span class="mord">.</span><span class="mord">7</span><span class="mord">0</span><span class="mord">9</span></span></span></span>。</p>
<h3 id="讨论">讨论</h3>
<h4 id="密度绝对值">密度绝对值</h4>
<p>氯化钠是常见晶体，我们熟悉其密度常温常压下约为<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2.1</mn><mtext> </mtext><mrow><mi mathvariant="normal">g</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">c</mi><msup><mi mathvariant="normal">m</mi><mrow><mo>−</mo><mn>3</mn></mrow></msup></mrow></mrow>2.1\,{\rm g/cm^{-3}}</math></span><span aria-hidden="true" class="katex-html"><span class="base"><span style="height:1.064108em;vertical-align:-0.25em;" class="strut"></span><span class="mord">2</span><span class="mord">.</span><span class="mord">1</span><span style="margin-right:0.16666666666666666em;" class="mspace"></span><span class="mord"><span class="mord"><span style="margin-right:0.01389em;" class="mord mathrm">g</span><span class="mord mathrm">/</span><span class="mord mathrm">c</span><span class="mord"><span class="mord mathrm">m</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span style="height:0.8141079999999999em;" class="vlist"><span style="top:-3.063em;margin-right:0.05em;"><span style="height:2.7em;" class="pstrut"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">−</span><span class="mord mathrm mtight">3</span></span></span></span></span></span></span></span></span></span></span></span></span></span>，而本次模拟中获得的结果为<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2.126</mn><mtext> </mtext><mrow><mi mathvariant="normal">g</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">c</mi><msup><mi mathvariant="normal">m</mi><mrow><mo>−</mo><mn>3</mn></mrow></msup></mrow></mrow>2.126\,{\rm g/cm^{-3}}</math></span><span aria-hidden="true" class="katex-html"><span class="base"><span style="height:1.064108em;vertical-align:-0.25em;" class="strut"></span><span class="mord">2</span><span class="mord">.</span><span class="mord">1</span><span class="mord">2</span><span class="mord">6</span><span style="margin-right:0.16666666666666666em;" class="mspace"></span><span class="mord"><span class="mord"><span style="margin-right:0.01389em;" class="mord mathrm">g</span><span class="mord mathrm">/</span><span class="mord mathrm">c</span><span class="mord"><span class="mord mathrm">m</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span style="height:0.8141079999999999em;" class="vlist"><span style="top:-3.063em;margin-right:0.05em;"><span style="height:2.7em;" class="pstrut"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">−</span><span class="mord mathrm mtight">3</span></span></span></span></span></span></span></span></span></span></span></span></span></span></p>
<h4 id="密度相对值">密度相对值</h4>
<p>原文献中主要包含体积变化曲线，对比40 GPa和0 GPa下的数据，约为<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0.62</mn></mrow>0.62</math></span><span aria-hidden="true" class="katex-html"><span class="base"><span style="height:0.64444em;vertical-align:0em;" class="strut"></span><span class="mord">0</span><span class="mord">.</span><span class="mord">6</span><span class="mord">2</span></span></span></span>的倍数，本次模拟数值为<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0.709</mn></mrow>0.709</math></span><span aria-hidden="true" class="katex-html"><span class="base"><span style="height:0.64444em;vertical-align:0em;" class="strut"></span><span class="mord">0</span><span class="mord">.</span><span class="mord">7</span><span class="mord">0</span><span class="mord">9</span></span></span></span>偏高</p>
<p><img alt="4.png" src="/assets/docs/1p4/tutorials/nacl-high-pressure/4.webp"></p>
<h4 id="分析">分析</h4>
<p>本次模拟结果均存在一定误差，因为本教程只是粗略模拟，而非科研文章。误差主要来源应来自力场，本文使用的力场主要对常温常压进行拟合，在高温高压场景下误差较大。</p>

