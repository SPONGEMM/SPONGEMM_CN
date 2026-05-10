---
title: "Xponge.assign.bond_order"
description: "SPONGE 1.4 的 Xponge API 文档。"
version: "SPONGE 1.4"
section: "Xponge 文档"
---

<h1 id="xpongeassignbond_order"><a href="/docs/1p4/xponge#xpongeassignbond_order">¶</a> Xponge.assign.bond_order</h1>
<p>This <strong>module</strong> helps to assign bond orders</p>
<h2 id="subpackages"><a href="/docs/1p4/xponge#subpackages">¶</a> subpackages</h2>
<h2 id="submodules"><a href="/docs/1p4/xponge#submodules">¶</a> submodules</h2>
<h2 id="functions"><a href="/docs/1p4/xponge#functions">¶</a> functions</h2>
<h2 id="classes"><a href="/docs/1p4/xponge#classes">¶</a> classes</h2>
<h3 id="bondorderassignment"><a href="/docs/1p4/xponge#bondorderassignment">¶</a> BondOrderAssignment</h3>
<p>This <strong>class</strong> includes the functions to assign bond orders</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>original_penalties</td>
<td>the original penalties dict</td>
</tr>
<tr>
<td>max_stat</td>
<td>the max valence stats to iterate</td>
</tr>
<tr>
<td>assign</td>
<td>the father Assignment instance</td>
</tr>
<tr>
<td>total_charge</td>
<td>the total charge of the molecule</td>
</tr>
<tr>
<td>extra_criteria</td>
<td>a function as the extra convergence criteria. The function will receive the assignment as input, and give True or False as output.</td>
</tr>
</tbody>
</table></div>
<h4 id="main"><a href="/docs/1p4/xponge#main">¶</a> main</h4>
<p>This <strong>function</strong> is the main function to do the bond order assignment</p>
<div><table>
<thead>
<tr>
<th>return</th>
<th>True for success, False for failure</th>
</tr>
</thead>
<tbody></tbody>
</table></div>

