---
title: "Linux下SPONGE及配套软件的安装"
description: "SPONGE 1.4 教程。"
version: "SPONGE 1.4"
section: "教程"
---

<h1 id="linux下sponge及配套软件的安装">Linux下SPONGE及配套软件的安装</h1>
<blockquote>
<p>更新时间<br>
2024/01/01</p>
</blockquote>
<h2 id="引入">引入</h2>
<p>本教程包含在Ubuntu 18.04（包含可视化桌面）操作系统下的SPONGE及其配套软件的安装。涉及的软件有：</p>
<ul>
<li>CudaSPONGE：分子动力学模拟主程序</li>
<li>Xponge：分子动力学前后处理软件</li>
<li>VMD：分子动力学可视化软件</li>
</ul>
<h2 id="从源码安装cudasponge">从源码安装CudaSPONGE</h2>
<h3 id="确认cuda版本">确认CUDA版本</h3>
<p>正常情况下，拥有可视化桌面的系统是已经安装有显卡驱动的，而卸载显卡驱动可能导致很多复杂问题，一般根据你的显卡驱动版本去寻找可以使用的CUDA版本。</p>
<p>可以使用命令<code>nvidia-smi</code>获取驱动版本和支持的最高CUDA版本。</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-bash">nvidia-smi
</code></pre>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-bash">Sat Sep 24 12:27:21 2022       
+-----------------------------------------------------------------------------+
| NVIDIA-SMI 460.141.03  Driver Version: 460.141.03    CUDA version: 11.2     |
|-------------------------------+----------------------+----------------------+
| GPU  Name        Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. ECC |
| Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. |
|===============================+======================+======================|
|   0  Quadro RTX 4000     On   | 00000000:17:00.0 Off |                  N/A |
| 30%   38C    P8     8W / 125W |    173MiB /  8192MiB |      0%      Default |
+-------------------------------+----------------------+----------------------+
</code></pre>
<p>可见我现在操作的电脑最高支持的版本是11.2。</p>
<p>另外部分低版本驱动下的nvidia-smi不显示可以使用的CUDA版本，可以前往<a class="is-external-link" href="https://docs.nvidia.com/cuda/cuda-toolkit-release-notes/index.html#cuda-major-component-versions__table-cuda-toolkit-driver-versions">Release Notes :: CUDA Toolkit Documentation (nvidia.com)</a>网站查询支持的显卡驱动版本和CUDA版本。</p>
<h3 id="编译器的安装">编译器的安装</h3>
<p>正确情况下，Linux系统下自带gcc编译器，不需要额外设置，除非你的操作系统过老，以致于gcc版本也太低，此时需升级gcc编译器。</p>
<h3 id="下载cuda">下载CUDA</h3>
<p>前往cuda官网<a class="is-external-link" href="https://developer.nvidia.com/cuda-toolkit-archive">CUDA Toolkit Archive | NVIDIA Developer</a>下载，按照提示根据你的情况选择正确的版本，以及平台信息，选择local安装器，按照下方的提示在命令行中输入命令即可</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/l1.webp"></p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/l2.webp"></p>
<p>正常情况下，安装时只勾选toolkit即可。</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/l3.webp"></p>
<p>随后需要设置环境变量。Ubuntu默认的环境变量在<code>~/.bashrc</code>中设置，可使用下列代码设置</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-bash">echo 'export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/usr/local/cuda-11.2/lib64:/usr/local/cuda-11.2/lib' &gt;&gt; ~/.bashrc
echo 'export PATH=$PATH:/usr/local/cuda-11.2/bin' &gt;&gt; ~/.bashrc
</code></pre>
<p>其中的<code>cuda-11.2</code>更改为你安装的对应的cuda版本</p>
<p>安装完毕后输入<code>nvcc -V</code>，不报错即为安装成功</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-bash">nvcc -V
</code></pre>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-bash">nvcc: NVIDIA (R) Cuda compiler driver
Copyright (c) 2005-2020 NVIDIA Corporation
Built on Mon_Nov_30_19:08:53_PST_2020
Cuda compilation tools, release 11.2, V11.2.67
Build cuda_11.2.r11.2/compiler.29373293_0
</code></pre>
<h3 id="sponge程序包的安装">SPONGE程序包的安装</h3>
<p>前往SPONGE官网<a class="is-internal-link is-valid-page" href="/install/1p4">SPONGE (spongemm.cn)</a>下载</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/23.webp"></p>
<p>下载完成后，是一个zip文件包，使用<code>unzip</code>命令将其解压以后，打开其中的SPONGE文件夹，使用以下命令安装，其中12是指用12个线程进行编译</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-bash">make install -j 12
</code></pre>
<p>安装好以后，在该文件夹下直接运行<code>./SPONGE</code>命令，能够正常运行即为安装成功</p>
<h2 id="xponge的安装">Xponge的安装</h2>
<h3 id="xponge的安装-1">Xponge的安装</h3>
<p>前往官网<a class="is-external-link" href="https://docs.conda.io/en/latest/miniconda.html">Miniconda — conda documentation</a>下载安装最新版miniconda，随后使用以下命令</p>
<p>注意，miniconda的安装不是必须的，你可以直接从pip install Xponge一步开始进行。</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-bash">conda create -n Xponge python -y
conda activate Xponge
pip install Xponge
Xponge test
</code></pre>
<p>如果最终出现</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-bash">3 test case(s) for base - base
...
</code></pre>
<p>那么即安装成功。</p>
<h3 id="将sponge与xponge关联">将SPONGE与Xponge关联</h3>
<p>逐行运行以下命令（其中<code>~/Desktop/SPONGE</code>请修改为你自己的SPONGE文件夹）</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-bash">Xponge.mdrun -set ~/Desktop/SPONGE
Xponge.mdrun SPONGE
rm mdinfo.txt mdout.txt
</code></pre>
<p>得到下列结果即绑定成功</p>
<p><img alt="41.png" src="/assets/docs/1p4/tutorials/install/41.png"></p>
<h2 id="vmd的安装">VMD的安装</h2>
<h3 id="vmd主程序的安装">VMD主程序的安装</h3>
<p>前往vmd官网<a class="is-external-link" href="https://www.ks.uiuc.edu/Research/vmd/">VMD - Visual Molecular Dynamics (uiuc.edu)</a>，此处推荐下载最新的1.9.4版本</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/42.png"></p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/43.png"></p>
<p>一直点击，下载即可，下载后会得到一个压缩包，解压以后打开进入解压的文件夹中，然后依次运行下列命令</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-bash">sudo ./configure LINUXAMD64 #LINUXAMD64 can be replaced according to your OS
./configure
cd src
sudo make install
</code></pre>
<h3 id="安装sponge的vmd插件">安装SPONGE的VMD插件</h3>
<p>在SPONGE官网<a class="is-internal-link is-valid-page" href="/install/1p4">SPONGE (spongemm.cn)</a>下载vmd插件</p>
<p>下载后是一个zip文件，解压后可自行阅读其中的<code>README</code>文件进行配置，最终打开VMD，并在新文件格式中找到SPONGE相关格式即为安装成功</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/50.png"></p>

