---
title: "Xponge.assign"
description: "SPONGE 1.4 的 Xponge API 文档。"
version: "SPONGE 1.4"
section: "Xponge 文档"
---

<h1 id="xpongeassign"><a href="/docs/1p4/xponge#xpongeassign">¶</a> Xponge.assign</h1>
<p>This <strong>package</strong> is used to assign the properties for atoms, residues and molecules</p>
<h2 id="subpackages"><a href="/docs/1p4/xponge#subpackages">¶</a> subpackages</h2>
<h3 id="xpongeassigntpacm4"><a href="/docs/1p4/xponge#xpongeassigntpacm4">¶</a> <a class="is-internal-link is-valid-page" href="/docs/1p4/xponge/assign/tpacm4">Xponge.assign.tpacm4</a></h3>
<h2 id="submodules"><a href="/docs/1p4/xponge#submodules">¶</a> submodules</h2>
<h3 id="xpongeassignbond_order"><a href="/docs/1p4/xponge#xpongeassignbond_order">¶</a> <a class="is-internal-link is-valid-page" href="/docs/1p4/xponge/assign/bond_order">Xponge.assign.bond_order</a></h3>
<h3 id="xpongeassigngasteiger"><a href="/docs/1p4/xponge#xpongeassigngasteiger">¶</a> <a class="is-internal-link is-valid-page" href="/docs/1p4/xponge/assign/gasteiger">Xponge.assign.gasteiger</a></h3>
<h3 id="xpongeassignphmodel"><a href="/docs/1p4/xponge#xpongeassignphmodel">¶</a> <a class="is-internal-link is-valid-page" href="/docs/1p4/xponge/assign/phmodel">Xponge.assign.phmodel</a></h3>
<h3 id="xpongeassignresp"><a href="/docs/1p4/xponge#xpongeassignresp">¶</a> <a class="is-internal-link is-valid-page" href="/docs/1p4/xponge/assign/resp">Xponge.assign.resp</a></h3>
<h2 id="functions"><a href="/docs/1p4/xponge#functions">¶</a> functions</h2>
<h3 id="get_assignment_from_smiles"><a href="/docs/1p4/xponge#get_assignment_from_smiles">¶</a> get_assignment_from_smiles</h3>
<p>This <strong>function</strong> gets an Assign instance from smiles</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>smiles</td>
<td>the smiles to get</td>
</tr>
</tbody>
</table></div>
<div><table>
<thead>
<tr>
<th>return</th>
<th>the Assign instance</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h3 id="get_assignment_from_pdb"><a href="/docs/1p4/xponge#get_assignment_from_pdb">¶</a> get_assignment_from_pdb</h3>
<p>This <strong>function</strong> gets an Assign instance from a pdb file</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>file</td>
<td>the name of the input file or an instance of io.IOBase</td>
</tr>
<tr>
<td>only_residue</td>
<td>only get the residue with the name same as <code>only_residue</code></td>
</tr>
<tr>
<td>bond_tolerance</td>
<td>the parameter to determine the atomic connections. The larger tolerance, the easier to set a bond between two atoms</td>
</tr>
<tr>
<td>total_charge</td>
<td>the total charge of the molecule used when aligning bond orders. If None is given, the total charge will not be checked</td>
</tr>
</tbody>
</table></div>
<div><table>
<thead>
<tr>
<th>return</th>
<th>the Assign instance</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h3 id="get_assignment_from_residuetype"><a href="/docs/1p4/xponge#get_assignment_from_residuetype">¶</a> get_assignment_from_residuetype</h3>
<p>This <strong>function</strong> gets an Assign instance from a ResidueType instance</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>restype</td>
<td>the ResidueType instance</td>
</tr>
</tbody>
</table></div>
<div><table>
<thead>
<tr>
<th>return</th>
<th>the Assign instance</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h3 id="get_assignment_from_xyz"><a href="/docs/1p4/xponge#get_assignment_from_xyz">¶</a> get_assignment_from_xyz</h3>
<p>This <strong>function</strong> gets an Assign instance from a xyz file</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>file</td>
<td>the name of the input file or an instance of io.IOBase</td>
</tr>
<tr>
<td>bond_tolerance</td>
<td>the parameter to determine the atomic connections. The larger tolerance, the easier to set a bond between two atoms</td>
</tr>
<tr>
<td>total_charge</td>
<td>the total charge of the molecule used when aligning bond orders. If None is given, the total charge will not be checked</td>
</tr>
</tbody>
</table></div>
<div><table>
<thead>
<tr>
<th>return</th>
<th>the Assign instance</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h3 id="get_assignment_from_mol2"><a href="/docs/1p4/xponge#get_assignment_from_mol2">¶</a> get_assignment_from_mol2</h3>
<p>This <strong>function</strong> gets an Assign instance from a mol2 file</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>file</td>
<td>the name of the input file or an instance of io.IOBase</td>
</tr>
<tr>
<td>total_charge</td>
<td>the total charge of the molecule used when aligning bond orders. If "sum" is given, the sum of the partial charges will be used; If None is given, the total charge will not be checked</td>
</tr>
</tbody>
</table></div>
<div><table>
<thead>
<tr>
<th>return</th>
<th>the Assign instance</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h3 id="get_assignment_from_cif"><a href="/docs/1p4/xponge#get_assignment_from_cif">¶</a> get_assignment_from_cif</h3>
<p>This <strong>function</strong> gets an Assign instance and a preprocessed lattice information from a cif file</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>file</td>
<td>the name of the input file or an instance of io.IOBase</td>
</tr>
<tr>
<td>total_charge</td>
<td>the total charge of the molecule used when aligning bond orders. 0 for default.</td>
</tr>
<tr>
<td>orthogonal_threshold</td>
<td>cell angle with the difference less than this parameter will be considered to be orthogonal (in degree, and 5 for default)</td>
</tr>
</tbody>
</table></div>
<div><table>
<thead>
<tr>
<th>return</th>
<th>the Assign instance and a dict which stores the preprocessed lattice information</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h2 id="classes"><a href="/docs/1p4/xponge#classes">¶</a> classes</h2>
<h3 id="assignrule"><a href="/docs/1p4/xponge#assignrule">¶</a> AssignRule</h3>
<p>This <strong>class</strong> is to be the rule to determine the atom type for one atom</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>name</td>
<td>the name of the rule</td>
</tr>
</tbody>
</table></div>
<h4 id="add_rule"><a href="/docs/1p4/xponge#add_rule">¶</a> add_rule</h4>
<p>This <strong>function</strong> is used as a <strong>decorator</strong> to add the atom type - judge function</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>atomtype</td>
<td>a string or an AtomType instance</td>
</tr>
<tr>
<td>priority</td>
<td>if more than one judge function returns True,  the atom type with higher priority will be chosen. If the priority levels of the functions are the same, the atom type which is added first will be chosen.</td>
</tr>
</tbody>
</table></div>
<div><table>
<thead>
<tr>
<th>return</th>
<th>a <strong>function</strong>, which wraps a judge function (receiving the Assign instance and the atom index and giving True or False as a result)</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h4 id="add_rings_basic_marker"><a href="/docs/1p4/xponge#add_rings_basic_marker">¶</a> add_rings_basic_marker</h4>
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
<td></td>
</tr>
<tr>
<td>rings</td>
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
<h4 id="check_rings_type"><a href="/docs/1p4/xponge#check_rings_type">¶</a> check_rings_type</h4>
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
<td></td>
</tr>
<tr>
<td>rings</td>
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
<h4 id="get_rings"><a href="/docs/1p4/xponge#get_rings">¶</a> get_rings</h4>
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
<h4 id="get_3_neighbors"><a href="/docs/1p4/xponge#get_3_neighbors">¶</a> get_3_neighbors</h4>
<div><table>
<thead>
<tr>
<th>return</th>
<th>None</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h4 id="check_pure_aromatic"><a href="/docs/1p4/xponge#check_pure_aromatic">¶</a> check_pure_aromatic</h4>
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
<h4 id="check_pure_aliphatic_and_planar"><a href="/docs/1p4/xponge#check_pure_aliphatic_and_planar">¶</a> check_pure_aliphatic_and_planar</h4>
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
<h4 id="check_out_plane_double_bond"><a href="/docs/1p4/xponge#check_out_plane_double_bond">¶</a> check_out_plane_double_bond</h4>
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
<h4 id="check_aromatic"><a href="/docs/1p4/xponge#check_aromatic">¶</a> check_aromatic</h4>
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
<h3 id="assign"><a href="/docs/1p4/xponge#assign">¶</a> Assign</h3>
<p>This <strong>class</strong> is used to assign properties for atoms, which is called an "assignment"</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>name</td>
<td>the name of the molecule</td>
</tr>
</tbody>
</table></div>
<h4 id="add_index_to_name"><a href="/docs/1p4/xponge#add_index_to_name">¶</a> add_index_to_name</h4>
<p>This <strong>function</strong> renames the atoms by adding the index to the element name</p>
<div><table>
<thead>
<tr>
<th>return</th>
<th>None</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h4 id="atom_judge"><a href="/docs/1p4/xponge#atom_judge">¶</a> atom_judge</h4>
<p>This <strong>function</strong> helps judge whether the atom belongs to the mask. For example, "O2" means an oxygen atom connected to two other atoms, "N4" means a nitrogen atom connected to four other atoms.</p>
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
<td>the index of the atom</td>
</tr>
<tr>
<td>string</td>
<td>a string mask  of a list of string masks.</td>
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
<h4 id="add_atom"><a href="/docs/1p4/xponge#add_atom">¶</a> add_atom</h4>
<p>This <strong>function</strong> adds an atom to the Assign</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>element</td>
<td>the chemical symbol for the element. "O" - oxygen, "H" - hydrogen for example.</td>
</tr>
<tr>
<td>x</td>
<td>the x coordinate</td>
</tr>
<tr>
<td>y</td>
<td>the y coordinate</td>
</tr>
<tr>
<td>z</td>
<td>the z coordinate</td>
</tr>
<tr>
<td>name</td>
<td>the name of the atom</td>
</tr>
<tr>
<td>charge</td>
<td>the charge of the atom</td>
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
<h4 id="add_atom_marker"><a href="/docs/1p4/xponge#add_atom_marker">¶</a> add_atom_marker</h4>
<p>This <strong>function</strong> adds a marker to an atom</p>
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
<td>the atom index</td>
</tr>
<tr>
<td>marker</td>
<td>the marker</td>
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
<h4 id="add_bond"><a href="/docs/1p4/xponge#add_bond">¶</a> add_bond</h4>
<p>This <strong>function</strong> adds a bond to two atoms</p>
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
<td>the index of the first atom</td>
</tr>
<tr>
<td>atom2</td>
<td>the index of the the second atom</td>
</tr>
<tr>
<td>order</td>
<td>the bond order</td>
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
<h4 id="add_bond_marker"><a href="/docs/1p4/xponge#add_bond_marker">¶</a> add_bond_marker</h4>
<p>This <strong>function</strong> adds a marker to a bond</p>
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
<td>the index of the first atom</td>
</tr>
<tr>
<td>atom2</td>
<td>the index of the the second atom</td>
</tr>
<tr>
<td>marker</td>
<td>the marker</td>
</tr>
<tr>
<td>only1</td>
<td>only add the marker to the atom1 - atom2 bond instead of the atom2 - atom1 bond</td>
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
<h4 id="delete_atom"><a href="/docs/1p4/xponge#delete_atom">¶</a> delete_atom</h4>
<p>This <strong>function</strong> deletes the atom</p>
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
<td>the index of the atom to delete</td>
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
<h4 id="delete_bond"><a href="/docs/1p4/xponge#delete_bond">¶</a> delete_bond</h4>
<p>This <strong>function</strong> deletes the bond between two atoms</p>
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
<td>the index of the first atom</td>
</tr>
<tr>
<td>atom2</td>
<td>the index of the the second atom</td>
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
<h4 id="determine_equal_atoms"><a href="/docs/1p4/xponge#determine_equal_atoms">¶</a> determine_equal_atoms</h4>
<p>This <strong>function</strong> dertermines the chemical equalvalent atoms</p>
<div><table>
<thead>
<tr>
<th>return</th>
<th>a list of equalvalent atom index lists</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h4 id="determine_ring_and_bond_type"><a href="/docs/1p4/xponge#determine_ring_and_bond_type">¶</a> determine_ring_and_bond_type</h4>
<p>This <strong>function</strong> determine the ring and the bond type</p>
<div><table>
<thead>
<tr>
<th>return</th>
<th>None</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h4 id="determine_atom_type"><a href="/docs/1p4/xponge#determine_atom_type">¶</a> determine_atom_type</h4>
<p>This <strong>function</strong> determines the atom type.</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>rule</td>
<td>a string or an AssignRule instance</td>
</tr>
</tbody>
</table></div>
<div><table>
<thead>
<tr>
<th>return</th>
<th>if the attribute "pure_string" of the rule is False, the atom types will be saved inplace and return</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h4 id="determine_connectivity"><a href="/docs/1p4/xponge#determine_connectivity">¶</a> determine_connectivity</h4>
<p>This <strong>function</strong> determines the connectivity based on atomic distances</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>simple_cutoff</td>
<td>the distance cutoff to determine whether the two atoms are connected. If None (default),</td>
</tr>
<tr>
<td>tolerance</td>
<td>the tolerance factor for the default method</td>
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
<h4 id="check_connectivity"><a href="/docs/1p4/xponge#check_connectivity">¶</a> check_connectivity</h4>
<p>This <strong>function</strong> checks whether all atoms are connected in one graph</p>
<div><table>
<thead>
<tr>
<th>return</th>
<th>True or False</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h4 id="to_residuetype"><a href="/docs/1p4/xponge#to_residuetype">¶</a> to_residuetype</h4>
<p>This <strong>function</strong> converts the Assign instance to the ResidueType instance</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>name</td>
<td>the name of the ResidueType instance</td>
</tr>
<tr>
<td>charge</td>
<td>the charge of atoms. If set to None, internal charge will be used</td>
</tr>
</tbody>
</table></div>
<div><table>
<thead>
<tr>
<th>return</th>
<th>the ResidueType instance</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h4 id="calculate_charge"><a href="/docs/1p4/xponge#calculate_charge">¶</a> calculate_charge</h4>
<p>This <strong>function</strong> calculates the partial charge for every atom.</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>method</td>
<td>the method to calculate the charge</td>
</tr>
<tr>
<td>parameters</td>
<td>the parameters to calculate the charge</td>
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
<h4 id="kekulize"><a href="/docs/1p4/xponge#kekulize">¶</a> kekulize</h4>
<p>This <strong>function</strong> kekulizes the structure.</p>
<div><table>
<thead>
<tr>
<th>return</th>
<th>None</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h4 id="uff_optimize"><a href="/docs/1p4/xponge#uff_optimize">¶</a> uff_optimize</h4>
<p>This <strong>function</strong> uses rdkit and uff to optimize the structure</p>
<h4 id="save_as_pdb"><a href="/docs/1p4/xponge#save_as_pdb">¶</a> save_as_pdb</h4>
<p>This <strong>function</strong> saves the instance as a pdb file</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
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
<h4 id="save_as_mol2"><a href="/docs/1p4/xponge#save_as_mol2">¶</a> save_as_mol2</h4>
<p>This <strong>function</strong> saves the instance as a mol2 file</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>filename</td>
<td>the name of the output file</td>
</tr>
<tr>
<td>atomtype</td>
<td>the rule of atom types.</td>
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
<h4 id="set_ph"><a href="/docs/1p4/xponge#set_ph">¶</a> set_ph</h4>
<p>This <strong>function</strong> sets the pH value, and adds or deletes the related hydrogens.</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>ph</td>
<td>the pH value</td>
</tr>
</tbody>
</table></div>
<div><table>
<thead>
<tr>
<th>return</th>
<th>the sum of final formal charge</th>
</tr>
</thead>
<tbody></tbody>
</table></div>

