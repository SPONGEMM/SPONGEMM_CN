---
title: "Xponge.helper.gromacs"
description: "SPONGE 1.4 的 Xponge API 文档。"
version: "SPONGE 1.4"
section: "Xponge 文档"
---

<h1 id="xpongehelpergromacs"><a href="/docs/1p4/xponge#xpongehelpergromacs">¶</a> Xponge.helper.gromacs</h1>
<p>This <strong>module</strong> contains functions to interact with gromacs</p>
<h2 id="subpackages"><a href="/docs/1p4/xponge#subpackages">¶</a> subpackages</h2>
<h2 id="submodules"><a href="/docs/1p4/xponge#submodules">¶</a> submodules</h2>
<h2 id="functions"><a href="/docs/1p4/xponge#functions">¶</a> functions</h2>
<h3 id="sort_atoms_by_gro"><a href="/docs/1p4/xponge#sort_atoms_by_gro">¶</a> sort_atoms_by_gro</h3>
<p>This <strong>function</strong> sorts the atoms in a Xponge.Molecule according to the index in a gro file</p>
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
<td>a Xponge.Molecule</td>
</tr>
<tr>
<td>gro</td>
<td>the gro file</td>
</tr>
</tbody>
</table></div>
<h3 id="rtp_to_mol2"><a href="/docs/1p4/xponge#rtp_to_mol2">¶</a> rtp_to_mol2</h3>
<p>This <strong>function</strong> convert a rtp file into several mol2 files</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>rtp</td>
<td>the name of the rtp file</td>
</tr>
<tr>
<td>prefix</td>
<td>the output prefix for the mol files</td>
</tr>
</tbody>
</table></div>
<h3 id="read_tdb"><a href="/docs/1p4/xponge#read_tdb">¶</a> read_tdb</h3>
<p>This <strong>function</strong> reads a tdb file and according to the rule modify the mol2 file</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>tdb</td>
<td>the name of the tdb file</td>
</tr>
<tr>
<td>rule</td>
<td>the rule to use</td>
</tr>
<tr>
<td>mol2_in</td>
<td>the input mol2 file</td>
</tr>
<tr>
<td>mol2_out</td>
<td>the output mol2 file</td>
</tr>
<tr>
<td>newname</td>
<td>the new name of the residue</td>
</tr>
</tbody>
</table></div>

