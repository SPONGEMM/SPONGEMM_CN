---
title: "Installing SPONGE and Related Software on Windows"
description: "SPONGE 1.4 tutorial."
version: "SPONGE 1.4"
section: "Tutorials"
---

> This page was translated by GPT-5.5 AI.

<h1 id="windows下sponge及配套软件的安装">Installing SPONGE and Related Software on Windows</h1>
<blockquote>
<p>Last updated<br>
2024/01/01</p>
</blockquote>
<h2 id="引入">Introduction</h2>
<p>This tutorial explains how to install SPONGE and its related software on the Windows operating system. The software covered includes:</p>
<ul>
<li>SPONGE: the main program for molecular dynamics simulations</li>
<li>Xponge: pre- and post-processing software for molecular dynamics</li>
<li>VMD: visualization software for molecular dynamics</li>
</ul>
<h2 id="从源码安装sponge">Installing SPONGE from Source</h2>
<h3 id="确认所需软件的版本">Confirming the Required Software Versions</h3>
<p>First, check the appropriate CUDA version for your graphics card and driver. Open the NVIDIA Control Panel.</p>
<p><img alt="19.png" src="/assets/docs/1p4/tutorials/install/19.webp"></p>
<p>Click Help - System Information.</p>
<p><img alt="20.png" src="/assets/docs/1p4/tutorials/install/20.webp"></p>
<p>In the Components section, you can see the corresponding supported CUDA version.</p>
<p><img alt="18.png" src="/assets/docs/1p4/tutorials/install/18.png"></p>
<p>Next, determine the Visual Studio compiler version you need. There is currently no simple way to judge this automatically, but you can search using relevant keywords. For example, for CUDA 11.2, you can search directly as shown below.</p>
<p><img alt="33.png" src="/assets/docs/1p4/tutorials/install/33.webp"></p>
<p>In this example, other users have used Visual Studio 2019.</p>
<p><img alt="34.png" src="/assets/docs/1p4/tutorials/install/34.webp"></p>
<h3 id="编译器的安装">Installing the Compiler</h3>
<p>On Windows, Visual Studio is recommended as the compiler. You can download it from the official website: <a class="is-external-link" href="https://docs.microsoft.com/zh-cn/visualstudio/releases/2019/release-notes">Visual Studio 2019 version 16.11 Release Notes | Microsoft Docs</a>. The Community edition of Visual Studio is free for individual users. You can change the version from the side of that page.</p>
<p><img alt="1.png" src="/assets/docs/1p4/tutorials/install/1.webp"></p>
<p>The following steps use Visual Studio 2022 as an example. After the download is complete, open the installer and click Continue.</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/2.webp"></p>
<p>After the installer spends some time downloading and setting up, you will reach the workloads page. Select Desktop development with C++.</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/3.webp"></p>
<p>You will then enter the download and installation page. Wait for the download and installation to finish.</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/4.webp"></p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/5.webp"></p>
<p>You do not need to restart immediately. You can open Visual Studio directly and skip signing in for now.</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/6.webp"></p>
<p>Configure a few appearance settings.</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/7.webp"></p>
<p>When you can see the following screen, Visual Studio has been installed successfully.</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/8.webp"></p>
<h3 id="cuda的安装">Installing CUDA</h3>
<p>Go to the official CUDA website, <a class="is-external-link" href="https://developer.nvidia.com/cuda-toolkit-archive">CUDA Toolkit Archive | NVIDIA Developer</a>, to download CUDA. Follow the prompts to select the correct version and platform information for your system, choose the local installer, and click Download.</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/9.webp"></p>
<p>After the download is complete, start the installer and choose a suitable folder for temporary files.</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/10.png"></p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/11.png"></p>
<p>Accept the license agreement.</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/12.webp"></p>
<p>On the installation options page, choose Custom installation.</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/13.webp"></p>
<p>You only need to select Development, Runtime, and Visual Studio Integration under CUDA. Select any other components according to your own needs.</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/14.webp"></p>
<p>Choose a suitable installation location.</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/15.webp"></p>
<p>Start the installation.</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/16.webp"></p>
<p>The installation is complete.</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/17.webp"></p>
<h3 id="sponge程序包的安装">Installing the SPONGE Package</h3>
<p>Go to the SPONGE official website, <a class="is-internal-link is-valid-page" href="/install/1p4">SPONGE (spongemm.cn)</a>, to download it.</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/23.webp"></p>
<p>After the download is complete, you will have a zip package. Extract it, then open the SPONGE folder inside. It contains a bat file named <code>vs_project_generator.bat</code>. Double-click this file to run it. A firewall warning may appear during the process; click Run anyway.</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/21.webp"></p>
<p>The script will automatically generate the project files. When the following prompt appears, press any key to exit.</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/22.png"></p>
<p>Return to the SPONGE folder. You should now see the following files.</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/24.png"></p>
<p>The corresponding project file is for the main SPONGE program. For compatibility reasons, the generated project file targets Visual Studio 2013, so newer versions of Visual Studio will prompt you to upgrade it after opening. Click OK.</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/26.png"></p>
<p>Click Project - Retarget Solution, then click OK again to upgrade it to your version of Visual Studio.</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/27.webp"></p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/28.webp"></p>
<p>Then click Windows Debugger in the toolbar to build and run it.</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/32.webp"></p>
<p>A black console window for the program will appear at the end. If you see the following screen, compilation was successful.</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/35.png"></p>
<p>The final executable file is generated in <code>SPONGE/x64/Release</code>. Add this folder to your environment variables.</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/36.webp"></p>
<h2 id="xponge的安装">Installing Xponge</h2>
<h3 id="miniconda的安装">Installing Miniconda</h3>
<p>Go to the official website, <a class="is-external-link" href="https://docs.conda.io/en/latest/miniconda.html">Miniconda - conda documentation</a>, and download the latest version of Miniconda.</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/37.webp"></p>
<p>Then install it using the default options throughout.</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/38.webp"></p>
<h3 id="xponge的安装-1">Installing Xponge</h3>
<p>Open the Miniconda terminal. Because test files may be generated during the process, first switch the current directory to an empty temporary folder.</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/39.webp"></p>
<p>Run the following commands line by line to install Xponge and test whether the installation succeeded.</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-">conda create -n Xponge python==3.7.5 -y
conda activate Xponge
pip install Xponge
Xponge test
</code></pre>
<p>If the final output contains</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-bash">3 test case(s) for base - base
...
</code></pre>
<p>then the installation was successful.</p>
<h3 id="将sponge与xponge关联">Associating SPONGE with Xponge</h3>
<p>Run the following commands line by line. Replace <code>D:\SPONGE\SPONGE\x64\Release</code> with your own SPONGE folder.</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-">Xponge.mdrun -set D:\SPONGE\SPONGE\x64\Release
Xponge.mdrun SPONGE
del mdinfo.txt mdout.txt
</code></pre>
<p>If you get the following result, the binding was successful.</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/41.png"></p>
<h2 id="vmd的安装">Installing VMD</h2>
<h3 id="vmd主程序的安装">Installing the Main VMD Program</h3>
<p>Go to the official VMD website, <a class="is-external-link" href="https://www.ks.uiuc.edu/Research/vmd/">VMD - Visual Molecular Dynamics (uiuc.edu)</a>. The latest 1.9.4 version is recommended here.</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/42.png"></p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/43.png"></p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/44.webp"></p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/45.webp"></p>
<p>You will need to register. You can register as needed at this step.</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/46.png"></p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/47.webp"></p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/48.webp"></p>
<h3 id="安装sponge的vmd插件">Installing the SPONGE VMD Plugin</h3>
<p>Download the VMD plugin from the SPONGE official website, <a class="is-internal-link is-valid-page" href="/install/1p4">SPONGE (spongemm.cn)</a>.</p>
<p>After downloading, you will have a zip file. Extract it and read the <code>README</code> file inside for configuration instructions. Finally, open VMD. If you can find the SPONGE-related formats under the new file formats, the installation was successful.</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/50.png"></p>
