---
title: "Xponge.forcefield.special.gb"
description: "SPONGE 1.4 的 Xponge API 文档。"
version: "SPONGE 1.4"
section: "Xponge 文档"
---

<h1 id="xpongeforcefieldspecialgb"><a href="/docs/1p4/xponge#xpongeforcefieldspecialgb">¶</a> <a class="is-external-link" href="http://Xponge.forcefield.special.gb">Xponge.forcefield.special.gb</a></h1>
<p>This <strong>module</strong> set the generalized Born force field</p>
<h2 id="subpackages"><a href="/docs/1p4/xponge#subpackages">¶</a> subpackages</h2>
<h2 id="submodules"><a href="/docs/1p4/xponge#submodules">¶</a> submodules</h2>
<h2 id="functions"><a href="/docs/1p4/xponge#functions">¶</a> functions</h2>
<h3 id="bondi_radii"><a href="/docs/1p4/xponge#bondi_radii">¶</a> bondi_radii</h3>
<p>This <strong>function</strong> receives an atom and sets the Bondi radii</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>atom</td>
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
<h3 id="modified_bondi_radii"><a href="/docs/1p4/xponge#modified_bondi_radii">¶</a> modified_bondi_radii</h3>
<p>This <strong>function</strong> receives an atom and sets the modified Bondi radii</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>atom</td>
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
<h3 id="write_gb_radii_and_scaler"><a href="/docs/1p4/xponge#write_gb_radii_and_scaler">¶</a> write_gb_radii_and_scaler</h3>
<p>This <strong>function</strong> is used to write gb radii and scaler when saving SPONGE inputs</p>
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
<h3 id="set_gb_radius"><a href="/docs/1p4/xponge#set_gb_radius">¶</a> set_gb_radius</h3>
<p>This <strong>function</strong> is used to set GB radius for the molecule</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>mol</td>
<td>the molecule, either a Molecule instance, a ResidueType instance or a Residue instance</td>
</tr>
<tr>
<td>radius_set</td>
<td>a function, which receives an Atom instance and sets the radius</td>
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

