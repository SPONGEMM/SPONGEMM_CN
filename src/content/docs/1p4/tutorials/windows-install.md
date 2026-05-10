---
title: "Windows下SPONGE及配套软件的安装"
description: "SPONGE 1.4 教程。"
version: "SPONGE 1.4"
section: "教程"
---

<h1 id="windows下sponge及配套软件的安装">Windows下SPONGE及配套软件的安装</h1>
<blockquote>
<p>更新时间<br>
2024/01/01</p>
</blockquote>
<h2 id="引入">引入</h2>
<p>本教程包含在Windows操作系统下的SPONGE及其配套软件的安装。涉及的软件有：</p>
<ul>
<li>SPONGE：分子动力学模拟主程序</li>
<li>Xponge：分子动力学前后处理软件</li>
<li>VMD：分子动力学可视化软件</li>
</ul>
<h2 id="从源码安装sponge">从源码安装SPONGE</h2>
<h3 id="确认所需软件的版本">确认所需软件的版本</h3>
<p>先根据自己的显卡和驱动查看合适的cuda版本，此处打开NVIDIA控制面板</p>
<p><img alt="19.png" src="/assets/docs/1p4/tutorials/install/19.webp"></p>
<p>点击其中的帮助-系统信息</p>
<p><img alt="20.png" src="/assets/docs/1p4/tutorials/install/20.webp"></p>
<p>在其组件部分可以看到对应的cuda支持版本</p>
<p><img alt="18.png" src="/assets/docs/1p4/tutorials/install/18.png"></p>
<p>随后确定自己所需的编译器visual studio版本，目前无简单判断方式，可通过搜索相应关键词，如我的11.2可直接搜索</p>
<p><img alt="33.png" src="/assets/docs/1p4/tutorials/install/33.webp"></p>
<p>查看到有其他人使用的例子为visual studio 2019</p>
<p><img alt="34.png" src="/assets/docs/1p4/tutorials/install/34.webp"></p>
<h3 id="编译器的安装">编译器的安装</h3>
<p>在Windows下，推荐使用Visual Studio作为编译器，从官方网址<a class="is-external-link" href="https://docs.microsoft.com/zh-cn/visualstudio/releases/2019/release-notes">Visual Studio 2019 版本 16.11 发行说明 | Microsoft Docs</a>下载即可，其中社区（community）版Visual Studio对于个人用户是免费的。此处的版本可以在该页面旁边进行更改。</p>
<p><img alt="1.png" src="/assets/docs/1p4/tutorials/install/1.webp"></p>
<p>接下来以Visual Studio 2022版本为例。当下载完成后打开，点击继续</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/2.webp"></p>
<p>然后等待一阵下载和安装设置后，来到工作负荷界面，选择C++桌面开发工具</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/3.webp"></p>
<p>随后即进入下载安装界面，等待下载安装完成</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/4.webp"></p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/5.webp"></p>
<p>可不先重启，直接打开即可，并暂时跳过登录</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/6.webp"></p>
<p>配置一些外观设置</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/7.webp"></p>
<p>当能够看到下面界面的时候Visual Studio即安装成功</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/8.webp"></p>
<h3 id="cuda的安装">CUDA的安装</h3>
<p>前往cuda官网<a class="is-external-link" href="https://developer.nvidia.com/cuda-toolkit-archive">CUDA Toolkit Archive | NVIDIA Developer</a>下载，按照提示根据你的情况选择正确的版本，以及平台信息，选择local安装器，点击Download即可</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/9.webp"></p>
<p>下载完成后启动安装器，选择合适的临时文件存储文件夹</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/10.png"></p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/11.png"></p>
<p>同意使用协议</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/12.webp"></p>
<p>在安装选项界面，选择自定义安装</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/13.webp"></p>
<p>只需要勾选CUDA下的Development、Runtime和Visual Studio Integration。其他部分按照个人需求勾选。</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/14.webp"></p>
<p>选择合适的安装位置</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/15.webp"></p>
<p>开始安装</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/16.webp"></p>
<p>安装结束</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/17.webp"></p>
<h3 id="sponge程序包的安装">SPONGE程序包的安装</h3>
<p>前往SPONGE官网<a class="is-internal-link is-valid-page" href="/install/1p4">SPONGE (spongemm.cn)</a>下载</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/23.webp"></p>
<p>下载完成后，是一个zip文件包，将其解压以后，打开其中的SPONGE文件夹，其中包含一个bat文件<code>vs_project_generator.bat</code>，双击运行该文件。中途可能会有防火墙提示，点击仍要运行</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/21.webp"></p>
<p>该脚本会自动生成工程文件，弹出下面的提示，按任意键退出</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/22.png"></p>
<p>回到SPONGE文件夹中，可以看到此时出现了下面的文件</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/24.png"></p>
<p>相应的工程文件对应了SPONGE的主程序。因为兼容性的考虑，生成的工程文件是visual studio 2013，因此使用较新的visual studio打开后会提示升级，点击确定即可。</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/26.png"></p>
<p>点击项目-重定目标解决方案，然后再次点击确定，即可升级到你版本的visual studio</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/27.webp"></p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/28.webp"></p>
<p>随后点击上方的生成Windows调试器即可</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/32.webp"></p>
<p>最后会运行一个程序的黑窗口，出现以下界面即为编译成功</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/35.png"></p>
<p>最后生成的可执行文件存在SPONGE/x64/Release中，将该文件夹设置到环境变量中即可</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/36.webp"></p>
<h2 id="xponge的安装">Xponge的安装</h2>
<h3 id="miniconda的安装">miniconda的安装</h3>
<p>前往官网<a class="is-external-link" href="https://docs.conda.io/en/latest/miniconda.html">Miniconda — conda documentation</a>下载最新版miniconda</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/37.webp"></p>
<p>随后一直默认选项安装即可</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/38.webp"></p>
<h3 id="xponge的安装-1">Xponge的安装</h3>
<p>打开miniconda 的终端，因为中途可能有测试文件的产生，因此请先将目录换到一个空的临时文件夹中</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/39.webp"></p>
<p>逐行运行以下命令安装Xponge并测试是否成功</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-">conda create -n Xponge python==3.7.5 -y
conda activate Xponge
pip install Xponge
Xponge test
</code></pre>
<p>如果最终出现</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-bash">3 test case(s) for base - base
...
</code></pre>
<p>那么即安装成功</p>
<h3 id="将sponge与xponge关联">将SPONGE与Xponge关联</h3>
<p>逐行运行以下命令（其中<code>D:\SPONGE\SPONGE\x64\Release</code>请修改为你自己的SPONGE文件夹）</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-">Xponge.mdrun -set D:\SPONGE\SPONGE\x64\Release
Xponge.mdrun SPONGE
del mdinfo.txt mdout.txt
</code></pre>
<p>得到下列结果即绑定成功</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/41.png"></p>
<h2 id="vmd的安装">VMD的安装</h2>
<h3 id="vmd主程序的安装">VMD主程序的安装</h3>
<p>前往vmd官网<a class="is-external-link" href="https://www.ks.uiuc.edu/Research/vmd/">VMD - Visual Molecular Dynamics (uiuc.edu)</a>，此处推荐下载最新的1.9.4版本</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/42.png"></p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/43.png"></p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/44.webp"></p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/45.webp"></p>
<p>会需要你注册，此时你随意注册即可</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/46.png"></p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/47.webp"></p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/48.webp"></p>
<h3 id="安装sponge的vmd插件">安装SPONGE的VMD插件</h3>
<p>在SPONGE官网<a class="is-internal-link is-valid-page" href="/install/1p4">SPONGE (spongemm.cn)</a>下载vmd插件</p>
<p>下载后是一个zip文件，解压后可自行阅读其中的<code>README</code>文件进行配置，最终打开VMD，并在新文件格式中找到SPONGE相关格式即为安装成功</p>
<p><img alt="" src="/assets/docs/1p4/tutorials/install/50.png"></p>

