---
title: "Xponge.forcefield.special.fep"
description: "SPONGE 1.4 的 Xponge API 文档。"
version: "SPONGE 1.4"
section: "Xponge 文档"
---

<h1 id="xpongeforcefieldspecialfep"><a href="/docs/1p4/xponge#xpongeforcefieldspecialfep">¶</a> Xponge.forcefield.special.fep</h1>
<p>This <strong>module</strong> gives the basic functions for fep calculations</p>
<h2 id="subpackages"><a href="/docs/1p4/xponge#subpackages">¶</a> subpackages</h2>
<h2 id="submodules"><a href="/docs/1p4/xponge#submodules">¶</a> submodules</h2>
<h2 id="functions"><a href="/docs/1p4/xponge#functions">¶</a> functions</h2>
<h3 id="save_hard_core_lj"><a href="/docs/1p4/xponge#save_hard_core_lj">¶</a> save_hard_core_lj</h3>
<p>This <strong>function</strong> is used to save hard core lj</p>
<div><table>
<thead>
<tr>
<th>return</th>
<th>None</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h3 id="save_soft_core_lj"><a href="/docs/1p4/xponge#save_soft_core_lj">¶</a> save_soft_core_lj</h3>
<p>This <strong>function</strong> is used to save soft core lj</p>
<div><table>
<thead>
<tr>
<th>return</th>
<th>None</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h3 id="write_soft_lj"><a href="/docs/1p4/xponge#write_soft_lj">¶</a> write_soft_lj</h3>
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
<td></td>
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
<h3 id="intramolecule_nb_to_nb14"><a href="/docs/1p4/xponge#intramolecule_nb_to_nb14">¶</a> intramolecule_nb_to_nb14</h3>
<p>This <strong>function</strong> convert the non bonded interactions to nb14 interactions within the molecule</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>mol_a</td>
<td>the Molecule instance</td>
</tr>
<tr>
<td>perturbating_residues</td>
<td>the residue(s) to be perturbed</td>
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
<h3 id="get_free_molecule"><a href="/docs/1p4/xponge#get_free_molecule">¶</a> get_free_molecule</h3>
<p>This <strong>function</strong> makes the molecule to be "free", having no interaction with other molecules</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>mol_a</td>
<td>the Molecule instance</td>
</tr>
<tr>
<td>perturbating_residues</td>
<td>the residues to be perturbed</td>
</tr>
<tr>
<td>intra_fep</td>
<td>whether clear intramolecular non bonded interactions</td>
</tr>
</tbody>
</table></div>
<div><table>
<thead>
<tr>
<th>return</th>
<th>a new Molecule instance</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h3 id="merge_force_field"><a href="/docs/1p4/xponge#merge_force_field">¶</a> merge_force_field</h3>
<p>This <strong>function</strong> merges one molecule in two different force fields (two Molecule instances) into one</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>mol_a</td>
<td>the Molecule instance in the initial lambda stat</td>
</tr>
<tr>
<td>mol_b</td>
<td>the Molecule instance in the final lambda stat</td>
</tr>
<tr>
<td>default_lambda</td>
<td>the lambda to scale the force if no <code>specific_lambda</code> is set for the force</td>
</tr>
<tr>
<td>specific_lambda</td>
<td>a dict to map the force to its special scale factor lambda</td>
</tr>
<tr>
<td>intra_fep</td>
<td>whether clear intramolecular non bonded interactions</td>
</tr>
</tbody>
</table></div>
<div><table>
<thead>
<tr>
<th>return</th>
<th>the Molecule instance merged</th>
</tr>
</thead>
<tbody></tbody>
</table></div>

