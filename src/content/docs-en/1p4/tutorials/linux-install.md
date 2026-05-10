---
title: "Installing SPONGE and Related Software on Linux"
description: "SPONGE 1.4 tutorial."
version: "SPONGE 1.4"
section: "Tutorials"
---

> This page was translated by GPT-5.5 AI.

<h1 id="linux下sponge及配套软件的安装">Installing SPONGE and Related Software on Linux</h1>
<blockquote>
<p>Last updated<br>
2024/01/01</p>
</blockquote>
<h2 id="引入">Introduction</h2>
<p>This tutorial covers the installation of SPONGE and its related software on Ubuntu 18.04 with a graphical desktop environment. The software involved includes:</p>
<ul>
<li>CudaSPONGE: the main molecular dynamics simulation program</li>
<li>Xponge: molecular dynamics pre- and post-processing software</li>
<li>VMD: molecular dynamics visualization software</li>
</ul>
<h2 id="从源码安装cudasponge">Installing CudaSPONGE from Source</h2>
<h3 id="确认cuda版本">Confirming the CUDA Version</h3>
<p>Under normal circumstances, a system with a graphical desktop already has a graphics driver installed. Uninstalling the graphics driver may cause many complicated problems, so it is generally better to choose a usable CUDA version based on your current graphics driver version.</p>
<p>You can use the <code>nvidia-smi</code> command to obtain the driver version and the highest supported CUDA version.</p>
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
<p>As shown above, the highest version supported by the computer used here is 11.2.</p>
<p>In addition, <code>nvidia-smi</code> in some older driver versions may not display the usable CUDA version. In that case, you can visit <a class="is-external-link" href="https://docs.nvidia.com/cuda/cuda-toolkit-release-notes/index.html#cuda-major-component-versions__table-cuda-toolkit-driver-versions">Release Notes :: CUDA Toolkit Documentation (nvidia.com)</a> to check the supported graphics driver versions and CUDA versions.</p>
<h3 id="编译器的安装">Installing the Compiler</h3>
<p>Normally, Linux systems come with the gcc compiler, so no additional setup is required. If your operating system is very old and the gcc version is too low, you need to upgrade the gcc compiler.</p>
<h3 id="下载cuda">Downloading CUDA</h3>
<p>Go to the official CUDA website, <a class="is-external-link" href="https://developer.nvidia.com/cuda-toolkit-archive">CUDA Toolkit Archive | NVIDIA Developer</a>, to download CUDA. Follow the prompts to choose the correct version and platform information for your situation, select the local installer, and then enter the commands shown on the website in the command line.</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/l1.webp"></p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/l2.webp"></p>
<p>Normally, you only need to select the toolkit during installation.</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/l3.webp"></p>
<p>Next, set the environment variables. On Ubuntu, the default environment variables are set in <code>~/.bashrc</code>. You can use the following commands:</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-bash">echo 'export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/usr/local/cuda-11.2/lib64:/usr/local/cuda-11.2/lib' &gt;&gt; ~/.bashrc
echo 'export PATH=$PATH:/usr/local/cuda-11.2/bin' &gt;&gt; ~/.bashrc
</code></pre>
<p>Change <code>cuda-11.2</code> to the CUDA version you installed.</p>
<p>After installation, enter <code>nvcc -V</code>. If no error is reported, the installation is successful.</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-bash">nvcc -V
</code></pre>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-bash">nvcc: NVIDIA (R) Cuda compiler driver
Copyright (c) 2005-2020 NVIDIA Corporation
Built on Mon_Nov_30_19:08:53_PST_2020
Cuda compilation tools, release 11.2, V11.2.67
Build cuda_11.2.r11.2/compiler.29373293_0
</code></pre>
<h3 id="sponge程序包的安装">Installing the SPONGE Package</h3>
<p>Go to the official SPONGE website, <a class="is-internal-link is-valid-page" href="/install/1p4">SPONGE (spongemm.cn)</a>, to download SPONGE.</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/23.webp"></p>
<p>After the download is complete, you will obtain a zip package. Use the <code>unzip</code> command to extract it, open the SPONGE folder inside, and install it with the following command. Here, 12 means compiling with 12 threads.</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-bash">make install -j 12
</code></pre>
<p>After installation, run the <code>./SPONGE</code> command directly in that folder. If it runs normally, the installation is successful.</p>
<h2 id="xponge的安装">Installing Xponge</h2>
<h3 id="xponge的安装-1">Installing Xponge</h3>
<p>Go to the official website, <a class="is-external-link" href="https://docs.conda.io/en/latest/miniconda.html">Miniconda — conda documentation</a>, to download and install the latest version of Miniconda, and then use the following commands.</p>
<p>Note that installing Miniconda is not required. You can start directly from the <code>pip install Xponge</code> step.</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-bash">conda create -n Xponge python -y
conda activate Xponge
pip install Xponge
Xponge test
</code></pre>
<p>If the final output contains:</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-bash">3 test case(s) for base - base
...
</code></pre>
<p>then the installation is successful.</p>
<h3 id="将sponge与xponge关联">Associating SPONGE with Xponge</h3>
<p>Run the following commands line by line. Replace <code>~/Desktop/SPONGE</code> with your own SPONGE folder.</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-bash">Xponge.mdrun -set ~/Desktop/SPONGE
Xponge.mdrun SPONGE
rm mdinfo.txt mdout.txt
</code></pre>
<p>If you obtain the following result, the binding is successful.</p>
<p><img alt="41.png" src="/assets/docs/1p4/tutorials/install/41.png"></p>
<h2 id="vmd的安装">Installing VMD</h2>
<h3 id="vmd主程序的安装">Installing the Main VMD Program</h3>
<p>Go to the official VMD website, <a class="is-external-link" href="https://www.ks.uiuc.edu/Research/vmd/">VMD - Visual Molecular Dynamics (uiuc.edu)</a>. The latest 1.9.4 version is recommended here.</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/42.png"></p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/43.png"></p>
<p>Continue clicking through the prompts to download it. After downloading, you will obtain an archive. Extract it, open the extracted folder, and then run the following commands in sequence.</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-bash">sudo ./configure LINUXAMD64 #LINUXAMD64 can be replaced according to your OS
./configure
cd src
sudo make install
</code></pre>
<h3 id="安装sponge的vmd插件">Installing the SPONGE VMD Plugin</h3>
<p>Download the VMD plugin from the official SPONGE website, <a class="is-internal-link is-valid-page" href="/install/1p4">SPONGE (spongemm.cn)</a>.</p>
<p>The download is a zip file. After extracting it, you can read the included <code>README</code> file to configure it. Finally, open VMD. If you can find the SPONGE-related formats among the new file formats, the installation is successful.</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/50.png"></p>
