---
title: "Xponge.helper.rdkit"
description: "SPONGE 1.4 的 Xponge API 文档。"
version: "SPONGE 1.4"
section: "Xponge 文档"
---

<h1 id="xpongehelperrdkit"><a href="/docs/1p4/xponge#xpongehelperrdkit">¶</a> Xponge.helper.rdkit</h1>
<p>This <strong>module</strong> gives the interface to the package RDKit</p>
<h2 id="subpackages"><a href="/docs/1p4/xponge#subpackages">¶</a> subpackages</h2>
<h2 id="submodules"><a href="/docs/1p4/xponge#submodules">¶</a> submodules</h2>
<h2 id="functions"><a href="/docs/1p4/xponge#functions">¶</a> functions</h2>
<h3 id="assign_to_rdmol"><a href="/docs/1p4/xponge#assign_to_rdmol">¶</a> assign_to_rdmol</h3>
<p>This <strong>function</strong> is used to convert an Xponge.Assign to a RDKit.rdMol</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>assign</td>
<td>the Assign instance</td>
</tr>
<tr>
<td>ignore_bond_type</td>
<td>set the bond type always to UNSPECIFIED</td>
</tr>
</tbody>
</table></div>
<div><table>
<thead>
<tr>
<th>return</th>
<th>the RDKit.rdMol instance</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h3 id="rdmol_to_assign"><a href="/docs/1p4/xponge#rdmol_to_assign">¶</a> rdmol_to_assign</h3>
<p>This <strong>function</strong> is used to convert a RDKit.rdMol to an Xponge.Assign</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>rdmol</td>
<td>the RDKit.rdMol instance</td>
</tr>
</tbody>
</table></div>
<div><table>
<thead>
<tr>
<th>return</th>
<th>the Xponge.Assign instance</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h3 id="insert_atom_type_to_rdmol"><a href="/docs/1p4/xponge#insert_atom_type_to_rdmol">¶</a> insert_atom_type_to_rdmol</h3>
<p>This <strong>function</strong> inserts the atom types in the force field to the RDKit.rdmol instance.</p>
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
<td>the RDKit.rdmol instance</td>
</tr>
<tr>
<td>res</td>
<td>the Residue instance corresponding to <code>mol</code></td>
</tr>
<tr>
<td>assign</td>
<td>the Assign instance corresponding to <code>mol</code></td>
</tr>
<tr>
<td>atom_type_dict</td>
<td>the dict mapping the atom type to the isotope number</td>
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
<h3 id="find_equal_atoms"><a href="/docs/1p4/xponge#find_equal_atoms">¶</a> find_equal_atoms</h3>
<p>This <strong>function</strong> is used to find the chemical equivalent atoms in the molecule</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>assign</td>
<td>the Assign instance</td>
</tr>
</tbody>
</table></div>
<div><table>
<thead>
<tr>
<th>return</th>
<th>a list of equalvalent atom index lists</th>
</tr>
</thead>
<tbody></tbody>
</table></div>

