---
title: "Xponge.forcefield.base.lj_base"
description: "SPONGE 1.4 的 Xponge API 文档。"
version: "SPONGE 1.4"
section: "Xponge 文档"
---

<h1 id="xpongeforcefieldbaselj_base"><a href="/docs/1p4/xponge#xpongeforcefieldbaselj_base">¶</a> Xponge.forcefield.base.lj_base</h1>
<p>This <strong>module</strong> is the basic setting for the force field property of Lennard-Jones</p>
<h2 id="subpackages"><a href="/docs/1p4/xponge#subpackages">¶</a> subpackages</h2>
<h2 id="submodules"><a href="/docs/1p4/xponge#submodules">¶</a> submodules</h2>
<h2 id="functions"><a href="/docs/1p4/xponge#functions">¶</a> functions</h2>
<h3 id="lorentz_berthelot_for_a"><a href="/docs/1p4/xponge#lorentz_berthelot_for_a">¶</a> lorentz_berthelot_for_a</h3>
<p>This <strong>function</strong> is used to calculate the A coefficient for Lorentz_Berthelot mix rule</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>epsilon1</td>
<td>the epsilon parameter of the first atom</td>
</tr>
<tr>
<td>rmin1</td>
<td>the rmin parameter of the first atom</td>
</tr>
<tr>
<td>epsilon2</td>
<td>the epsilon parameter of the second atom</td>
</tr>
<tr>
<td>rmin2</td>
<td>the rmin parameter of the second atom</td>
</tr>
</tbody>
</table></div>
<div><table>
<thead>
<tr>
<th>return</th>
<th>the A coefficient for the atom pair</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h3 id="lorentz_berthelot_for_b"><a href="/docs/1p4/xponge#lorentz_berthelot_for_b">¶</a> lorentz_berthelot_for_b</h3>
<p>This <strong>function</strong> is used to calculate the B coefficient for Lorentz_Berthelot mix rule</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>epsilon1</td>
<td>the epsilon parameter of the first atom</td>
</tr>
<tr>
<td>rmin1</td>
<td>the rmin parameter of the first atom</td>
</tr>
<tr>
<td>epsilon2</td>
<td>the epsilon parameter of the second atom</td>
</tr>
<tr>
<td>rmin2</td>
<td>the rmin parameter of the second atom</td>
</tr>
</tbody>
</table></div>
<div><table>
<thead>
<tr>
<th>return</th>
<th>the B coefficient for the atom pair</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h3 id="good_hope_for_a"><a href="/docs/1p4/xponge#good_hope_for_a">¶</a> good_hope_for_a</h3>
<p>This <strong>function</strong> is used to calculate the A coefficient for Good-Hope mix rule</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>epsilon1</td>
<td>the epsilon parameter of the first atom</td>
</tr>
<tr>
<td>rmin1</td>
<td>the rmin parameter of the first atom</td>
</tr>
<tr>
<td>epsilon2</td>
<td>the epsilon parameter of the second atom</td>
</tr>
<tr>
<td>rmin2</td>
<td>the rmin parameter of the second atom</td>
</tr>
</tbody>
</table></div>
<div><table>
<thead>
<tr>
<th>return</th>
<th>the A coefficient for the atom pair</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h3 id="good_hope_for_b"><a href="/docs/1p4/xponge#good_hope_for_b">¶</a> good_hope_for_b</h3>
<p>This <strong>function</strong> is used to calculate the B coefficient for Good-Hope mix rule</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>epsilon1</td>
<td>the epsilon parameter of the first atom</td>
</tr>
<tr>
<td>rmin1</td>
<td>the rmin parameter of the first atom</td>
</tr>
<tr>
<td>epsilon2</td>
<td>the epsilon parameter of the second atom</td>
</tr>
<tr>
<td>rmin2</td>
<td>the rmin parameter of the second atom</td>
</tr>
</tbody>
</table></div>
<div><table>
<thead>
<tr>
<th>return</th>
<th>the B coefficient for the atom pair</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h3 id="write_lj"><a href="/docs/1p4/xponge#write_lj">¶</a> write_lj</h3>
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
<h3 id="lj_todo"><a href="/docs/1p4/xponge#lj_todo">¶</a> lj_todo</h3>
<p>This <strong>function</strong> is used to get MindSponge system and energy</p>
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
<tr>
<td>sys_kwarg</td>
<td>a dict, the kwarg for system</td>
</tr>
<tr>
<td>ene_kwarg</td>
<td>a dict, the kwarg for force field</td>
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

