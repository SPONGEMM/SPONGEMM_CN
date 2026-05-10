---
title: "Xponge.build"
description: "SPONGE 1.4 的 Xponge API 文档。"
version: "SPONGE 1.4"
section: "Xponge 文档"
---

<h1 id="xpongebuild"><a href="/docs/1p4/xponge#xpongebuild">¶</a> Xponge.build</h1>
<p>This <strong>module</strong> is used to build and save</p>
<h2 id="subpackages"><a href="/docs/1p4/xponge#subpackages">¶</a> subpackages</h2>
<h2 id="submodules"><a href="/docs/1p4/xponge#submodules">¶</a> submodules</h2>
<h2 id="functions"><a href="/docs/1p4/xponge#functions">¶</a> functions</h2>
<h3 id="build_bonded_force"><a href="/docs/1p4/xponge#build_bonded_force">¶</a> build_bonded_force</h3>
<p>This <strong>function</strong> build the bonded force for the input object</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>cls</td>
<td>the object to build</td>
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
<h3 id="get_mindsponge_system_energy"><a href="/docs/1p4/xponge#get_mindsponge_system_energy">¶</a> get_mindsponge_system_energy</h3>
<p>This <strong>function</strong> gets the system and energy for mindsponge</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>cls</td>
<td>the object to save, or a list of object to save</td>
</tr>
<tr>
<td>use_pbc</td>
<td>whether to use the periodic box conditions</td>
</tr>
</tbody>
</table></div>
<div><table>
<thead>
<tr>
<th>return</th>
<th>a tuple, including the system and energy for mindsponge</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h3 id="save_sponge_input"><a href="/docs/1p4/xponge#save_sponge_input">¶</a> save_sponge_input</h3>
<p>This <strong>function</strong> saves the iput object as SPONGE inputs</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>cls</td>
<td>the object to save</td>
</tr>
<tr>
<td>prefix</td>
<td>the prefix of the output files</td>
</tr>
<tr>
<td>dirname</td>
<td>the directory to save the output files</td>
</tr>
</tbody>
</table></div>
<div><table>
<thead>
<tr>
<th>return</th>
<th>the molecule instance built</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h3 id="save_pdb"><a href="/docs/1p4/xponge#save_pdb">¶</a> save_pdb</h3>
<p>This <strong>function</strong> saves the iput object as a pdb file</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>cls</td>
<td>the object to save</td>
</tr>
<tr>
<td>filename</td>
<td>the name of the output file</td>
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
<h3 id="save_mol2"><a href="/docs/1p4/xponge#save_mol2">¶</a> save_mol2</h3>
<p>This <strong>function</strong> saves the iput object as a mol2 file</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>cls</td>
<td>the object to save</td>
</tr>
<tr>
<td>filename</td>
<td>the name of the output file</td>
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
<h3 id="save_gro"><a href="/docs/1p4/xponge#save_gro">¶</a> save_gro</h3>
<p>This <strong>function</strong> saves the iput object as a gro file</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>cls</td>
<td>the object to save</td>
</tr>
<tr>
<td>filename</td>
<td>the name of the output file</td>
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

