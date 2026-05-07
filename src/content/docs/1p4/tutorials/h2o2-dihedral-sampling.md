---
title: "SPONGE增强抽样案例"
description: "SPONGE 1.4 教程。"
version: "SPONGE 1.4"
section: "教程"
---

<h1 id="sponge增强抽样案例">SPONGE增强抽样案例</h1>
<blockquote>
<p>更新时间：<br>
2024/01/01</p>
</blockquote>
<h2 id="程序安装">程序安装</h2>
<p>见<a class="is-internal-link is-valid-page" href="/docs/1p4/tutorials/linux-install">Linux下的安装</a>和<a class="is-internal-link is-valid-page" href="/docs/1p4/tutorials/windows-install">Windows下的安装</a></p>
<h2 id="什么是增强抽样">什么是增强抽样？</h2>
<p>通常，我们的分子动力学（MD）模拟在某一力场下进行，有势能函数</p>
<p><span class="katex-display"><span class="katex"><span class="katex-mathml"><math display="block" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>U</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow>U(x)
</math></span><span aria-hidden="true" class="katex-html"><span class="base"><span style="height:1em;vertical-align:-0.25em;" class="strut"></span><span style="margin-right:0.10903em;" class="mord mathnormal">U</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span></span></span></span></span></p><p>在该势能函数下，如果我们得不到需要的结果，此时可以使用增强抽样算法，在势能函数上添加上我们人为设定的偏置势（bias）</p>
<p><span class="katex-display"><span class="katex"><span class="katex-mathml"><math display="block" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msup><mi>U</mi><mo rspace="0em" lspace="0em" mathvariant="normal">′</mo></msup><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mi>U</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>+</mo><msub><mi>U</mi><mrow><mi>b</mi><mi>i</mi><mi>a</mi><mi>s</mi></mrow></msub><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow>U'(x) = U(x) + U_{bias} (x)
</math></span><span aria-hidden="true" class="katex-html"><span class="base"><span style="height:1.051892em;vertical-align:-0.25em;" class="strut"></span><span class="mord"><span style="margin-right:0.10903em;" class="mord mathnormal">U</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span style="height:0.801892em;" class="vlist"><span style="top:-3.113em;margin-right:0.05em;"><span style="height:2.7em;" class="pstrut"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span style="margin-right:0.2777777777777778em;" class="mspace"></span><span class="mrel">=</span><span style="margin-right:0.2777777777777778em;" class="mspace"></span></span><span class="base"><span style="height:1em;vertical-align:-0.25em;" class="strut"></span><span style="margin-right:0.10903em;" class="mord mathnormal">U</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span style="margin-right:0.2222222222222222em;" class="mspace"></span><span class="mbin">+</span><span style="margin-right:0.2222222222222222em;" class="mspace"></span></span><span class="base"><span style="height:1em;vertical-align:-0.25em;" class="strut"></span><span class="mord"><span style="margin-right:0.10903em;" class="mord mathnormal">U</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span style="height:0.33610799999999996em;" class="vlist"><span style="top:-2.5500000000000003em;margin-left:-0.10903em;margin-right:0.05em;"><span style="height:2.7em;" class="pstrut"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">b</span><span class="mord mathnormal mtight">i</span><span class="mord mathnormal mtight">a</span><span class="mord mathnormal mtight">s</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span style="height:0.15em;" class="vlist"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span></span></span></span></span></p><p>添加偏置势的模拟当然和真实模拟不同，但是可以根据计算进行转化，其理论基础是各系综下热力学量的分布函数计算，例如正则系综下有</p>
<p><span class="katex-display"><span class="katex"><span class="katex-mathml"><math display="block" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>p</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn>1</mn><mi>Q</mi></mfrac><mrow><mi mathvariant="normal">e</mi><mi mathvariant="normal">x</mi><mi mathvariant="normal">p</mi></mrow><mo stretchy="false">(</mo><mo>−</mo><mi>β</mi><mi>U</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow>p(x) = \frac {1}{Q} {\rm exp}(-\beta U(x))
</math></span><span aria-hidden="true" class="katex-html"><span class="base"><span style="height:1em;vertical-align:-0.25em;" class="strut"></span><span class="mord mathnormal">p</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span style="margin-right:0.2777777777777778em;" class="mspace"></span><span class="mrel">=</span><span style="margin-right:0.2777777777777778em;" class="mspace"></span></span><span class="base"><span style="height:2.20188em;vertical-align:-0.8804400000000001em;" class="strut"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span style="height:1.32144em;" class="vlist"><span style="top:-2.314em;"><span style="height:3em;" class="pstrut"></span><span class="mord"><span class="mord mathnormal">Q</span></span></span><span style="top:-3.23em;"><span style="height:3em;" class="pstrut"></span><span style="border-bottom-width:0.04em;" class="frac-line"></span></span><span style="top:-3.677em;"><span style="height:3em;" class="pstrut"></span><span class="mord"><span class="mord">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span style="height:0.8804400000000001em;" class="vlist"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mord"><span class="mord"><span class="mord mathrm">e</span><span class="mord mathrm">x</span><span class="mord mathrm">p</span></span></span><span class="mopen">(</span><span class="mord">−</span><span style="margin-right:0.05278em;" class="mord mathnormal">β</span><span style="margin-right:0.10903em;" class="mord mathnormal">U</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mclose">)</span></span></span></span></span></p><p>这样我们模拟得到的结果每个出现的概率均做一个重加权即可，也即乘上<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mrow><mi mathvariant="normal">e</mi><mi mathvariant="normal">x</mi><mi mathvariant="normal">p</mi></mrow><mo stretchy="false">(</mo><mi>β</mi><msub><mi>U</mi><mrow><mi>b</mi><mi>i</mi><mi>a</mi><mi>s</mi></mrow></msub><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow>{\rm exp}(\beta U_{bias}(x))</math></span><span aria-hidden="true" class="katex-html"><span class="base"><span style="height:1em;vertical-align:-0.25em;" class="strut"></span><span class="mord"><span class="mord"><span class="mord mathrm">e</span><span class="mord mathrm">x</span><span class="mord mathrm">p</span></span></span><span class="mopen">(</span><span style="margin-right:0.05278em;" class="mord mathnormal">β</span><span class="mord"><span style="margin-right:0.10903em;" class="mord mathnormal">U</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span style="height:0.33610799999999996em;" class="vlist"><span style="top:-2.5500000000000003em;margin-left:-0.10903em;margin-right:0.05em;"><span style="height:2.7em;" class="pstrut"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">b</span><span class="mord mathnormal mtight">i</span><span class="mord mathnormal mtight">a</span><span class="mord mathnormal mtight">s</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span style="height:0.15em;" class="vlist"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mclose">)</span></span></span></span></p>
<p><span class="katex-display"><span class="katex"><span class="katex-mathml"><math display="block" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msup><mi>p</mi><mo rspace="0em" lspace="0em" mathvariant="normal">′</mo></msup><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn>1</mn><mi>Q</mi></mfrac><mrow><mi mathvariant="normal">e</mi><mi mathvariant="normal">x</mi><mi mathvariant="normal">p</mi></mrow><mo stretchy="false">(</mo><mo>−</mo><mi>β</mi><msup><mi>U</mi><mo rspace="0em" lspace="0em" mathvariant="normal">′</mo></msup><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn>1</mn><mi>Q</mi></mfrac><mrow><mi mathvariant="normal">e</mi><mi mathvariant="normal">x</mi><mi mathvariant="normal">p</mi></mrow><mo stretchy="false">(</mo><mo>−</mo><mi>β</mi><mo stretchy="false">(</mo><mi>U</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>+</mo><msub><mi>U</mi><mrow><mi>b</mi><mi>i</mi><mi>a</mi><mi>s</mi></mrow></msub><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo><mo stretchy="false">)</mo><mo>=</mo><mi>p</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mrow><mi mathvariant="normal">e</mi><mi mathvariant="normal">x</mi><mi mathvariant="normal">p</mi></mrow><mo stretchy="false">(</mo><mo>−</mo><mi>β</mi><msub><mi>U</mi><mrow><mi>b</mi><mi>i</mi><mi>a</mi><mi>s</mi></mrow></msub><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow>p'(x) = \frac {1}{Q} {\rm exp}(-\beta U'(x)) = \frac {1}{Q} {\rm exp}(-\beta (U(x) + U_{bias}(x))) = p(x) {\rm exp}(-\beta U_{bias}(x))
</math></span><span aria-hidden="true" class="katex-html"><span class="base"><span style="height:1.051892em;vertical-align:-0.25em;" class="strut"></span><span class="mord"><span class="mord mathnormal">p</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span style="height:0.801892em;" class="vlist"><span style="top:-3.113em;margin-right:0.05em;"><span style="height:2.7em;" class="pstrut"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span style="margin-right:0.2777777777777778em;" class="mspace"></span><span class="mrel">=</span><span style="margin-right:0.2777777777777778em;" class="mspace"></span></span><span class="base"><span style="height:2.20188em;vertical-align:-0.8804400000000001em;" class="strut"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span style="height:1.32144em;" class="vlist"><span style="top:-2.314em;"><span style="height:3em;" class="pstrut"></span><span class="mord"><span class="mord mathnormal">Q</span></span></span><span style="top:-3.23em;"><span style="height:3em;" class="pstrut"></span><span style="border-bottom-width:0.04em;" class="frac-line"></span></span><span style="top:-3.677em;"><span style="height:3em;" class="pstrut"></span><span class="mord"><span class="mord">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span style="height:0.8804400000000001em;" class="vlist"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mord"><span class="mord"><span class="mord mathrm">e</span><span class="mord mathrm">x</span><span class="mord mathrm">p</span></span></span><span class="mopen">(</span><span class="mord">−</span><span style="margin-right:0.05278em;" class="mord mathnormal">β</span><span class="mord"><span style="margin-right:0.10903em;" class="mord mathnormal">U</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span style="height:0.801892em;" class="vlist"><span style="top:-3.113em;margin-right:0.05em;"><span style="height:2.7em;" class="pstrut"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mclose">)</span><span style="margin-right:0.2777777777777778em;" class="mspace"></span><span class="mrel">=</span><span style="margin-right:0.2777777777777778em;" class="mspace"></span></span><span class="base"><span style="height:2.20188em;vertical-align:-0.8804400000000001em;" class="strut"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span style="height:1.32144em;" class="vlist"><span style="top:-2.314em;"><span style="height:3em;" class="pstrut"></span><span class="mord"><span class="mord mathnormal">Q</span></span></span><span style="top:-3.23em;"><span style="height:3em;" class="pstrut"></span><span style="border-bottom-width:0.04em;" class="frac-line"></span></span><span style="top:-3.677em;"><span style="height:3em;" class="pstrut"></span><span class="mord"><span class="mord">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span style="height:0.8804400000000001em;" class="vlist"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mord"><span class="mord"><span class="mord mathrm">e</span><span class="mord mathrm">x</span><span class="mord mathrm">p</span></span></span><span class="mopen">(</span><span class="mord">−</span><span style="margin-right:0.05278em;" class="mord mathnormal">β</span><span class="mopen">(</span><span style="margin-right:0.10903em;" class="mord mathnormal">U</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span style="margin-right:0.2222222222222222em;" class="mspace"></span><span class="mbin">+</span><span style="margin-right:0.2222222222222222em;" class="mspace"></span></span><span class="base"><span style="height:1em;vertical-align:-0.25em;" class="strut"></span><span class="mord"><span style="margin-right:0.10903em;" class="mord mathnormal">U</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span style="height:0.33610799999999996em;" class="vlist"><span style="top:-2.5500000000000003em;margin-left:-0.10903em;margin-right:0.05em;"><span style="height:2.7em;" class="pstrut"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">b</span><span class="mord mathnormal mtight">i</span><span class="mord mathnormal mtight">a</span><span class="mord mathnormal mtight">s</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span style="height:0.15em;" class="vlist"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mclose">)</span><span class="mclose">)</span><span style="margin-right:0.2777777777777778em;" class="mspace"></span><span class="mrel">=</span><span style="margin-right:0.2777777777777778em;" class="mspace"></span></span><span class="base"><span style="height:1em;vertical-align:-0.25em;" class="strut"></span><span class="mord mathnormal">p</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mord"><span class="mord"><span class="mord mathrm">e</span><span class="mord mathrm">x</span><span class="mord mathrm">p</span></span></span><span class="mopen">(</span><span class="mord">−</span><span style="margin-right:0.05278em;" class="mord mathnormal">β</span><span class="mord"><span style="margin-right:0.10903em;" class="mord mathnormal">U</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span style="height:0.33610799999999996em;" class="vlist"><span style="top:-2.5500000000000003em;margin-left:-0.10903em;margin-right:0.05em;"><span style="height:2.7em;" class="pstrut"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">b</span><span class="mord mathnormal mtight">i</span><span class="mord mathnormal mtight">a</span><span class="mord mathnormal mtight">s</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span style="height:0.15em;" class="vlist"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mclose">)</span></span></span></span></span></p><h2 id="为什么使用增强抽样">为什么使用增强抽样</h2>
<p>这里，我们构建一个<a class="is-asset-link" href="/assets/docs/1p4/tutorials/h2o2-dihedral-sampling/h2o2-sampling.zip">过氧化氢的模型体系</a>，解压后的文件目录下为</p>
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
<p>这个模型体系中，我取消掉了过氧化氢的LJ和静电，只保留了键长、键角、二面角等内坐标的势能，让例子更简单以更方便了解原理和程序使用。</p>
<p>我们查看<code>H2O2_dihedral.txt</code>文件，有</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-plain">2
2 0 1 3 2 0.3 0.4
2 0 1 3 3 0.1 -0.6
</code></pre>
<p>根据SPONGE文档中的<a class="is-internal-link is-valid-page" href="/docs/1p4/file-formats">文件格式</a>和<a class="is-internal-link is-valid-page" href="/docs/1p4/modules">模块功能</a>，我们可以知道这相当于势能函数</p>
<p><span class="katex-display"><span class="katex"><span class="katex-mathml"><math display="block" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>U</mi><mo stretchy="false">(</mo><mi>ϕ</mi><mo stretchy="false">)</mo><mo>=</mo><mn>0.3</mn><mo stretchy="false">(</mo><mn>1</mn><mo>+</mo><mi>c</mi><mi>o</mi><mi>s</mi><mo stretchy="false">(</mo><mn>2</mn><mi>ϕ</mi><mo>−</mo><mn>0.4</mn><mo stretchy="false">)</mo><mo stretchy="false">)</mo><mo>+</mo><mn>0.1</mn><mo stretchy="false">(</mo><mn>1</mn><mo>+</mo><mi>c</mi><mi>o</mi><mi>s</mi><mo stretchy="false">(</mo><mn>3</mn><mi>ϕ</mi><mo>+</mo><mn>0.6</mn><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow>U(\phi) = 0.3 (1 + cos(2\phi - 0.4)) + 0.1 (1 + cos(3\phi + 0.6))
</math></span><span aria-hidden="true" class="katex-html"><span class="base"><span style="height:1em;vertical-align:-0.25em;" class="strut"></span><span style="margin-right:0.10903em;" class="mord mathnormal">U</span><span class="mopen">(</span><span class="mord mathnormal">ϕ</span><span class="mclose">)</span><span style="margin-right:0.2777777777777778em;" class="mspace"></span><span class="mrel">=</span><span style="margin-right:0.2777777777777778em;" class="mspace"></span></span><span class="base"><span style="height:1em;vertical-align:-0.25em;" class="strut"></span><span class="mord">0</span><span class="mord">.</span><span class="mord">3</span><span class="mopen">(</span><span class="mord">1</span><span style="margin-right:0.2222222222222222em;" class="mspace"></span><span class="mbin">+</span><span style="margin-right:0.2222222222222222em;" class="mspace"></span></span><span class="base"><span style="height:1em;vertical-align:-0.25em;" class="strut"></span><span class="mord mathnormal">c</span><span class="mord mathnormal">o</span><span class="mord mathnormal">s</span><span class="mopen">(</span><span class="mord">2</span><span class="mord mathnormal">ϕ</span><span style="margin-right:0.2222222222222222em;" class="mspace"></span><span class="mbin">−</span><span style="margin-right:0.2222222222222222em;" class="mspace"></span></span><span class="base"><span style="height:1em;vertical-align:-0.25em;" class="strut"></span><span class="mord">0</span><span class="mord">.</span><span class="mord">4</span><span class="mclose">)</span><span class="mclose">)</span><span style="margin-right:0.2222222222222222em;" class="mspace"></span><span class="mbin">+</span><span style="margin-right:0.2222222222222222em;" class="mspace"></span></span><span class="base"><span style="height:1em;vertical-align:-0.25em;" class="strut"></span><span class="mord">0</span><span class="mord">.</span><span class="mord">1</span><span class="mopen">(</span><span class="mord">1</span><span style="margin-right:0.2222222222222222em;" class="mspace"></span><span class="mbin">+</span><span style="margin-right:0.2222222222222222em;" class="mspace"></span></span><span class="base"><span style="height:1em;vertical-align:-0.25em;" class="strut"></span><span class="mord mathnormal">c</span><span class="mord mathnormal">o</span><span class="mord mathnormal">s</span><span class="mopen">(</span><span class="mord">3</span><span class="mord mathnormal">ϕ</span><span style="margin-right:0.2222222222222222em;" class="mspace"></span><span class="mbin">+</span><span style="margin-right:0.2222222222222222em;" class="mspace"></span></span><span class="base"><span style="height:1em;vertical-align:-0.25em;" class="strut"></span><span class="mord">0</span><span class="mord">.</span><span class="mord">6</span><span class="mclose">)</span><span class="mclose">)</span></span></span></span></span></p><p>首先我们进入到压缩文件的normal_md文件夹中，在该文件夹中直接运行SPONGE。</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-bash">SPONGE -mdin mdin.txt
</code></pre>
<p>在我们的mdin中，我们设置了我们的cv输入文件是cv.txt，其内容是</p>
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
<p>我们在其中定义了一个名叫torsion，类型为dihedral，参数原子是2、0、1、3的CV</p>
<p>模拟结束过后，得到结果文件mdout.txt，我们使用以下python脚本（<a class="is-external-link" href="http://xn--analysis-t39lw14llk3cjbbpz8n.py">该目录下的analysis.py</a>）进行分析</p>
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
<p>可见模拟得到的势能面与设定的二面角能量大致一致。虽然结果仍然不尽如人意，但是相信如果我们增加有限的模拟时长就能获得更好的采样结果。</p>
<p>那么我们现在进入bad_normal_md文件夹中，在这个文件夹中，我们的mdin中指定了替代默认dihedral的文件，在该文件中</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-plain">2
2 0 1 3 2 15 0.4
2 0 1 3 3 5 -0.6
</code></pre>
<p><span class="katex-display"><span class="katex"><span class="katex-mathml"><math display="block" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>U</mi><mo stretchy="false">(</mo><mi>ϕ</mi><mo stretchy="false">)</mo><mo>=</mo><mn>15</mn><mo stretchy="false">(</mo><mn>1</mn><mo>+</mo><mi>c</mi><mi>o</mi><mi>s</mi><mo stretchy="false">(</mo><mn>2</mn><mi>ϕ</mi><mo>−</mo><mn>0.4</mn><mo stretchy="false">)</mo><mo stretchy="false">)</mo><mo>+</mo><mn>5</mn><mo stretchy="false">(</mo><mn>1</mn><mo>+</mo><mi>c</mi><mi>o</mi><mi>s</mi><mo stretchy="false">(</mo><mn>3</mn><mi>ϕ</mi><mo>+</mo><mn>0.6</mn><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow>U(\phi) = 15 (1 + cos(2\phi - 0.4)) + 5 (1 + cos(3\phi + 0.6))
</math></span><span aria-hidden="true" class="katex-html"><span class="base"><span style="height:1em;vertical-align:-0.25em;" class="strut"></span><span style="margin-right:0.10903em;" class="mord mathnormal">U</span><span class="mopen">(</span><span class="mord mathnormal">ϕ</span><span class="mclose">)</span><span style="margin-right:0.2777777777777778em;" class="mspace"></span><span class="mrel">=</span><span style="margin-right:0.2777777777777778em;" class="mspace"></span></span><span class="base"><span style="height:1em;vertical-align:-0.25em;" class="strut"></span><span class="mord">1</span><span class="mord">5</span><span class="mopen">(</span><span class="mord">1</span><span style="margin-right:0.2222222222222222em;" class="mspace"></span><span class="mbin">+</span><span style="margin-right:0.2222222222222222em;" class="mspace"></span></span><span class="base"><span style="height:1em;vertical-align:-0.25em;" class="strut"></span><span class="mord mathnormal">c</span><span class="mord mathnormal">o</span><span class="mord mathnormal">s</span><span class="mopen">(</span><span class="mord">2</span><span class="mord mathnormal">ϕ</span><span style="margin-right:0.2222222222222222em;" class="mspace"></span><span class="mbin">−</span><span style="margin-right:0.2222222222222222em;" class="mspace"></span></span><span class="base"><span style="height:1em;vertical-align:-0.25em;" class="strut"></span><span class="mord">0</span><span class="mord">.</span><span class="mord">4</span><span class="mclose">)</span><span class="mclose">)</span><span style="margin-right:0.2222222222222222em;" class="mspace"></span><span class="mbin">+</span><span style="margin-right:0.2222222222222222em;" class="mspace"></span></span><span class="base"><span style="height:1em;vertical-align:-0.25em;" class="strut"></span><span class="mord">5</span><span class="mopen">(</span><span class="mord">1</span><span style="margin-right:0.2222222222222222em;" class="mspace"></span><span class="mbin">+</span><span style="margin-right:0.2222222222222222em;" class="mspace"></span></span><span class="base"><span style="height:1em;vertical-align:-0.25em;" class="strut"></span><span class="mord mathnormal">c</span><span class="mord mathnormal">o</span><span class="mord mathnormal">s</span><span class="mopen">(</span><span class="mord">3</span><span class="mord mathnormal">ϕ</span><span style="margin-right:0.2222222222222222em;" class="mspace"></span><span class="mbin">+</span><span style="margin-right:0.2222222222222222em;" class="mspace"></span></span><span class="base"><span style="height:1em;vertical-align:-0.25em;" class="strut"></span><span class="mord">0</span><span class="mord">.</span><span class="mord">6</span><span class="mclose">)</span><span class="mclose">)</span></span></span></span></span></p><p>我们的势能函数直接乘了50，此时室温并不足以使得这个虚假的过氧化氢翻过二面角势垒</p>
<p>我们接下来也跑相同时间的MD模拟</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-bash">SPONGE -mdin mdin.txt
</code></pre>
<p>用上面相同脚本分析，得到结果如下：</p>
<p><img alt="bad_normal_md.png" src="/assets/docs/1p4/tutorials/h2o2-dihedral-sampling/bad_normal_md.webp"></p>
<p>可见，此时模拟得到的结果已经非常不好，需要使用增强抽样算法。</p>
<h2 id="伞形抽样">伞形抽样</h2>
<p>进入umbrella_sampling文件夹中，我们首先看看我们的cv.txt文件</p>
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
<p>这里，除了和普通md里一样的cv.txt以外，还加入了restrain部分，也就是简谐势限制。其中的参考值设为了res_cv_ref，由外部输入指定</p>
<p>编写python脚本<code>run.py</code>批量运行</p>
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
<p>最后获得了50份mdout</p>
<p>对于umbrella sampling，因为轨迹涉及很多个bias，需要使用WHAM算法重加权。我们使用下列脚本分析</p>
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
<p>最终得到的结果为</p>
<p><img alt="umbrella_sampling.png" src="/assets/docs/1p4/tutorials/h2o2-dihedral-sampling/umbrella_sampling.webp"><img alt="" src="/assets/docs/1p4/tutorials/h2o2-dihedral-sampling/umbrella_sampling.webp"></p>
<p>可见效果较好</p>
<h2 id="埋拓动力学">埋拓动力学</h2>
<p>进入umbrella_sampling文件夹中，我们首先看看我们的cv.txt文件</p>
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
<p>这里，除了和普通md里一样的cv.txt以外，还加入了meta1d部分。具体含义可查询<a class="is-external-link" href="https://spongemm.readthedocs.io/zh_CN/latest/CV%E7%B3%BB%E7%BB%9F/CV%E7%B3%BB%E7%BB%9F.html">SPONGE文档</a></p>
<p>我们接下来也跑相同时间的MD模拟</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-bash">SPONGE -mdin mdin.txt
</code></pre>
<p>使用下列脚本进行分析结果</p>
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
<p>这里使用了两种得到结果的方式，一种是重加权，另外一种是直接使用metadynamics添加的势能函数的相反数，两种方式在此例中得到的效果相同。</p>
<blockquote>
<p>使用metadynamics添加的势能函数的相反数得到自由能曲面时，因为使用了well-tempered metadynamics，所以实际上还要乘上一个因子，这个因子为</p>
<p><span class="katex-display"><span class="katex"><span class="katex-mathml"><math display="block" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mfrac><mrow><mi mathvariant="normal">w</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">m</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">_</mi><mi mathvariant="normal">f</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">c</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">r</mi></mrow><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo>+</mo><mrow><mi mathvariant="normal">w</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">m</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">_</mi><mi mathvariant="normal">f</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">c</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">r</mi></mrow></mrow></mfrac></mrow>\frac {\rm welltemp\_factor} {k_B T + {\rm welltemp\_factor}}
</math></span><span aria-hidden="true" class="katex-html"><span class="base"><span style="height:2.39044em;vertical-align:-0.996em;" class="strut"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span style="height:1.39444em;" class="vlist"><span style="top:-2.314em;"><span style="height:3em;" class="pstrut"></span><span class="mord"><span class="mord"><span style="margin-right:0.03148em;" class="mord mathnormal">k</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span style="height:0.32833099999999993em;" class="vlist"><span style="top:-2.5500000000000003em;margin-left:-0.03148em;margin-right:0.05em;"><span style="height:2.7em;" class="pstrut"></span><span class="sizing reset-size6 size3 mtight"><span style="margin-right:0.05017em;" class="mord mathnormal mtight">B</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span style="height:0.15em;" class="vlist"><span></span></span></span></span></span></span><span style="margin-right:0.13889em;" class="mord mathnormal">T</span><span style="margin-right:0.2222222222222222em;" class="mspace"></span><span class="mbin">+</span><span style="margin-right:0.2222222222222222em;" class="mspace"></span><span class="mord"><span class="mord"><span style="margin-right:0.01389em;" class="mord mathrm">w</span><span class="mord mathrm">e</span><span class="mord mathrm">l</span><span class="mord mathrm">l</span><span class="mord mathrm">t</span><span class="mord mathrm">e</span><span class="mord mathrm">m</span><span class="mord mathrm">p</span><span style="margin-right:0.02778em;" class="mord mathrm">_</span><span style="margin-right:0.07778em;" class="mord mathrm">f</span><span class="mord mathrm">a</span><span class="mord mathrm">c</span><span class="mord mathrm">t</span><span class="mord mathrm">o</span><span class="mord mathrm">r</span></span></span></span></span><span style="top:-3.23em;"><span style="height:3em;" class="pstrut"></span><span style="border-bottom-width:0.04em;" class="frac-line"></span></span><span style="top:-3.6999999999999997em;"><span style="height:3em;" class="pstrut"></span><span class="mord"><span class="mord"><span style="margin-right:0.01389em;" class="mord mathrm">w</span><span class="mord mathrm">e</span><span class="mord mathrm">l</span><span class="mord mathrm">l</span><span class="mord mathrm">t</span><span class="mord mathrm">e</span><span class="mord mathrm">m</span><span class="mord mathrm">p</span><span style="margin-right:0.02778em;" class="mord mathrm">_</span><span style="margin-right:0.07778em;" class="mord mathrm">f</span><span class="mord mathrm">a</span><span class="mord mathrm">c</span><span class="mord mathrm">t</span><span class="mord mathrm">o</span><span class="mord mathrm">r</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span style="height:0.996em;" class="vlist"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></span></p><p>这里该因子<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mo>=</mo><mfrac><mn>50</mn><mrow><mn>0.596148</mn><mo>+</mo><mn>50</mn></mrow></mfrac><mo>≈</mo><mn>1</mn></mrow>=\frac {50} {0.596148 + 50} \approx1</math></span><span aria-hidden="true" class="katex-html"><span class="base"><span style="height:0.36687em;vertical-align:0em;" class="strut"></span><span class="mrel">=</span><span style="margin-right:0.2777777777777778em;" class="mspace"></span></span><span class="base"><span style="height:1.2484389999999999em;vertical-align:-0.403331em;" class="strut"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span style="height:0.845108em;" class="vlist"><span style="top:-2.655em;"><span style="height:3em;" class="pstrut"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">0</span><span class="mord mtight">.</span><span class="mord mtight">5</span><span class="mord mtight">9</span><span class="mord mtight">6</span><span class="mord mtight">1</span><span class="mord mtight">4</span><span class="mord mtight">8</span><span class="mbin mtight">+</span><span class="mord mtight">5</span><span class="mord mtight">0</span></span></span></span><span style="top:-3.23em;"><span style="height:3em;" class="pstrut"></span><span style="border-bottom-width:0.04em;" class="frac-line"></span></span><span style="top:-3.394em;"><span style="height:3em;" class="pstrut"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">5</span><span class="mord mtight">0</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span style="height:0.403331em;" class="vlist"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span style="margin-right:0.2777777777777778em;" class="mspace"></span><span class="mrel">≈</span><span style="margin-right:0.2777777777777778em;" class="mspace"></span></span><span class="base"><span style="height:0.64444em;vertical-align:0em;" class="strut"></span><span class="mord">1</span></span></span></span></p>
</blockquote>
<h2 id="选择性温度积分增强抽样">选择性温度积分增强抽样</h2>
<p>注意，这里的例子本质是一个针对CV的抽样例子，并不太适合SITS，但原理是相同的</p>
<h3 id="观察">观察</h3>
<p>首先，我们需要观察我们的体系。</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-bash">SPONGE -mdin observation.in
</code></pre>
<p>在这个in文件里，我们加入了的额外命令是</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-plain">SITS
{
    mode = observation
    atom_numbers = 4
}
sits_dihedral_in_file = H2O2_dihedral.txt
</code></pre>
<p>其中，SITS_mode = observation 表示观察，SITS_atom_numbers = 4表示我们对前4个原子的非键作用进行ITS，而sits_dihedral_in_file则指明我们希望进行ITS的二面角<br>
运行时，我们主要观察其中的SITS_AA_kAB这一部分，这一部分是我们最终希望增强的能量。我们根据这个值的最小出现的值，减去一个预估的保留值，设置pe_b。<br>
如此处，SITS_AA_kAB为9左右，我们预估后面会降低的值为20，设置的pe_b因此为-(9-20) = 11。</p>
<blockquote class="is-warning">
<p>这里的pe_b选择是基于体系的。你需要合理调节pe_b的值，否则系统很有可能出现崩溃!</p>
</blockquote>
<p>接下来，我们就进行迭代处理</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-bash">SPONGE -mdin iteration.in
</code></pre>
<p>在这个in文件里，我们加入了的额外命令是</p>
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
<p>这个部分新增包括积分的最高温度、积分的最低温度和积分的离散格点数，以及上面提到的pe_b。这些参数都是可以调节的，而较差的参数可能会引起势能函数突变，进而模拟崩溃。</p>
<p>该步模拟后，最重要的就是获得SITS_nk_rest.txt文件，该文件包含了不同温度的自由能信息，我们用该文件进行生产模拟</p>
<pre class="prismjs line-numbers" v-pre="true"><code class="language-bash">SPONGE -mdin production.in
</code></pre>
<p>在这个in文件里，我们加入了的额外命令是</p>
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
<p>这部分新增加的就是iteration部分获得的SITS_nk_rest.txt作为输入，给到nk_in_file命令。</p>
<p>模拟结束后使用下列脚本进行分析</p>
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
<p>得到结果如下：</p>
<p><img alt="sits.png" src="/assets/docs/1p4/tutorials/h2o2-dihedral-sampling/sits.webp"></p>

