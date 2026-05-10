---
title: "丙氨酸十二肽的折叠"
description: "SPONGE 1.4 教程。"
version: "SPONGE 1.4"
section: "教程"
---

<h1 id="丙氨酸十二肽的折叠">丙氨酸十二肽的折叠</h1>
<blockquote>
<p>更新时间：<br>
2024/01/01</p>
</blockquote>
<p>主要内容：</p>
<ol>
<li>使用Xponge构建一个丙氨酸十二肽的隐式溶剂模型</li>
<li>使用SPONGE的1.4版本模拟</li>
<li>使用VMD可视化</li>
</ol>
<h2 id="软件安装">软件安装</h2>
<p>见<a class="is-internal-link is-valid-page" href="/docs/1p4/tutorials/linux-install">Linux下的安装</a>和<a class="is-internal-link is-valid-page" href="/docs/1p4/tutorials/windows-install">Windows下的安装</a></p>
<h2 id="建模">建模</h2>
<p>打开终端，呼出python</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-bash">python
</code></pre>
<p>在python终端内，依次输入下面的python命令</p>
<h3 id="h-1-导入需要的模块">1. 导入需要的模块</h3>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-python">import Xponge #Xponge本体
import Xponge.forcefield.amber.ff19sb  #使用的力场
from Xponge.forcefield.special import gb #使用的隐式溶剂模型GB
</code></pre>
<h3 id="h-2-获得xponge的分子实例">2. 获得Xponge的分子实例</h3>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-python">mol = NALA + ALA * 10 + CALA
</code></pre>
<h3 id="h-3-设置gb参数">3. 设置GB参数</h3>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-python">gb.Set_GB_Radius(mol)
</code></pre>
<h3 id="h-4-保存输入文件">4. 保存输入文件</h3>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-python">Save_PDB(mol, "ALA.pdb")
Save_SPONGE_Input(mol, "ALA")
</code></pre>
<h2 id="动力学模拟">动力学模拟</h2>
<p>在文件夹里用你喜欢的文本编辑器构建<code>mdin.txt</code>文件：</p>
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
<p>各命令的含义可见<a class="is-internal-link is-valid-page" href="/docs/1p4/commands">输入命令</a></p>
<p>然后在终端里输入命令</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-bash">SPONGE -mdin mdin.txt
</code></pre>
<h2 id="分析与讨论">分析与讨论</h2>
<h3 id="结果分析">结果分析</h3>
<p>可读取生成的<code>mdout.txt</code>获取能量数据。使用下面的python脚本读取能量变化数据</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-python">from Xponge.analysis import MdoutReader
mdout = MdoutReader("mdout.txt")
import matplotlib.pyplot as plt
plt.plot(mdout.time, mdout.potential)
plt.show()
</code></pre>
<p>可得</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/alanine-folding/1.webp"></p>
<p>也可以使用VMD对轨迹可视化</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-bash">vmd -sponge_mass ./ALA_mass.txt mdcrd.dat
</code></pre>
<p><img alt="" src="/assets/docs/1p4/tutorials/alanine-folding/2.gif"></p>

