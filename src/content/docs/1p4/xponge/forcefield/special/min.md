---
title: "Xponge.forcefield.special.min"
description: "SPONGE 1.4 的 Xponge API 文档。"
version: "SPONGE 1.4"
section: "Xponge 文档"
---

<h1 id="xpongeforcefieldspecialmin"><a href="/docs/1p4/xponge#xpongeforcefieldspecialmin">¶</a> Xponge.forcefield.special.min</h1>
<p>This <strong>module</strong> is used to save parameters for special minimization</p>
<h2 id="subpackages"><a href="/docs/1p4/xponge#subpackages">¶</a> subpackages</h2>
<h2 id="submodules"><a href="/docs/1p4/xponge#submodules">¶</a> submodules</h2>
<h2 id="functions"><a href="/docs/1p4/xponge#functions">¶</a> functions</h2>
<h3 id="write_zero_mass_for_hydrogen"><a href="/docs/1p4/xponge#write_zero_mass_for_hydrogen">¶</a> write_zero_mass_for_hydrogen</h3>
<p>This <strong>function</strong> sets the mass of hydrogen and no lj atoms to zero, to freeze them</p>
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
<h3 id="write_zero_lj"><a href="/docs/1p4/xponge#write_zero_lj">¶</a> write_zero_lj</h3>
<p>This <strong>function</strong> sets all the lj parameters to zero</p>
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
<h3 id="write_zero_charge"><a href="/docs/1p4/xponge#write_zero_charge">¶</a> write_zero_charge</h3>
<p>This <strong>function</strong> sets all the charge parameters to zero</p>
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
<h3 id="save_min_bonded_parameters"><a href="/docs/1p4/xponge#save_min_bonded_parameters">¶</a> save_min_bonded_parameters</h3>
<p>This <strong>function</strong> saves parameters to only minimize bonded force when saving SPONGE inputs</p>
<div><table>
<thead>
<tr>
<th>return</th>
<th>None</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h3 id="do_not_save_min_bonded_parameters"><a href="/docs/1p4/xponge#do_not_save_min_bonded_parameters">¶</a> do_not_save_min_bonded_parameters</h3>
<p>This <strong>function</strong> does not save parameters to only minimize bonded force when saving SPONGE inputs</p>
<div><table>
<thead>
<tr>
<th>return</th>
<th>None</th>
</tr>
</thead>
<tbody></tbody>
</table></div>

