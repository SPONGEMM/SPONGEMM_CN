---
title: "Xponge.forcefield.base.nb14_extra_base"
description: "SPONGE 1.4 的 Xponge API 文档。"
version: "SPONGE 1.4"
section: "Xponge 文档"
---

<h1 id="xpongeforcefieldbasenb14_extra_base"><a href="/docs/1p4/xponge#xpongeforcefieldbasenb14_extra_base">¶</a> Xponge.forcefield.base.nb14_extra_base</h1>
<p>This <strong>module</strong> is the basic setting for the force field format of 3-parameter non bonded 1-4 interactions</p>
<h2 id="subpackages"><a href="/docs/1p4/xponge#subpackages">¶</a> subpackages</h2>
<h2 id="submodules"><a href="/docs/1p4/xponge#submodules">¶</a> submodules</h2>
<h2 id="functions"><a href="/docs/1p4/xponge#functions">¶</a> functions</h2>
<h3 id="get_nb14_extra_lj"><a href="/docs/1p4/xponge#get_nb14_extra_lj">¶</a> get_nb14_extra_lj</h3>
<p>This <strong>function</strong> is used to get the LJ parameters for the extra nb14 interactions</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>atom1</td>
<td>the Atom instance</td>
</tr>
<tr>
<td>atom2</td>
<td>the Atom instance</td>
</tr>
</tbody>
</table></div>
<div><table>
<thead>
<tr>
<th>return</th>
<th>the A and B coefficients of LJ</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h3 id="exclude_to_nb14_extra"><a href="/docs/1p4/xponge#exclude_to_nb14_extra">¶</a> exclude_to_nb14_extra</h3>
<p>This <strong>function</strong> is used to calculate nb14_extra instead of non-bonded interactions for atom1 and atom2</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>molecule</td>
<td>the Molecule instance</td>
</tr>
<tr>
<td>atom1</td>
<td>the Atom instance</td>
</tr>
<tr>
<td>atom2</td>
<td>the Atom instance</td>
</tr>
</tbody>
</table></div>
<div><table>
<thead>
<tr>
<th>return</th>
<th>None</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h3 id="nb14_to_nb14_extra"><a href="/docs/1p4/xponge#nb14_to_nb14_extra">¶</a> nb14_to_nb14_extra</h3>
<p>This <strong>function</strong> is used to convert nb14 to nb14_extra</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>molecule</td>
<td>the Molecule instance</td>
</tr>
</tbody>
</table></div>
<div><table>
<thead>
<tr>
<th>return</th>
<th>None</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h3 id="write_nb14"><a href="/docs/1p4/xponge#write_nb14">¶</a> write_nb14</h3>
<p>This <strong>function</strong> is used to write SPONGE input file</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>self</td>
<td>the Molecule instance</td>
</tr>
</tbody>
</table></div>
<div><table>
<thead>
<tr>
<th>return</th>
<th>the string to write</th>
</tr>
</thead>
<tbody></tbody>
</table></div>

