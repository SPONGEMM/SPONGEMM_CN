---
title: "Xponge.analysis.wham"
description: "SPONGE 1.4 的 Xponge API 文档。"
version: "SPONGE 1.4"
section: "Xponge 文档"
---

<h1 id="xpongeanalysiswham"><a href="/docs/1p4/xponge#xpongeanalysiswham">¶</a> Xponge.analysis.wham</h1>
<p>This <strong>module</strong> implements the WHAM method</p>
<h2 id="subpackages"><a href="/docs/1p4/xponge#subpackages">¶</a> subpackages</h2>
<h2 id="submodules"><a href="/docs/1p4/xponge#submodules">¶</a> submodules</h2>
<h2 id="functions"><a href="/docs/1p4/xponge#functions">¶</a> functions</h2>
<h2 id="classes"><a href="/docs/1p4/xponge#classes">¶</a> classes</h2>
<h3 id="wham"><a href="/docs/1p4/xponge#wham">¶</a> WHAM</h3>
<p>do the WHAM analysis</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>window_edges</td>
<td>the edge of the windows</td>
</tr>
<tr>
<td>temperature</td>
<td>the temperature</td>
</tr>
<tr>
<td>weight</td>
<td>the weight of the bias</td>
</tr>
<tr>
<td>references</td>
<td>the references of the bias</td>
</tr>
<tr>
<td>period</td>
<td>the period of the CV</td>
</tr>
<tr>
<td>step_limit</td>
<td>the maximum step to calculate the free energy</td>
</tr>
<tr>
<td>diff_limit</td>
<td>stop iterations when the difference reaches the diff_limit</td>
</tr>
</tbody>
</table></div>
<h4 id="get_data_from_mdout"><a href="/docs/1p4/xponge#get_data_from_mdout">¶</a> get_data_from_mdout</h4>
<p>get the CV information from the mdout files</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>mdouts</td>
<td>the file name of mdouts</td>
</tr>
<tr>
<td>cv_name</td>
<td>the name of the CV</td>
</tr>
</tbody>
</table></div>
<h4 id="bias"><a href="/docs/1p4/xponge#bias">¶</a> bias</h4>
<p>the function to get the bias</p>

