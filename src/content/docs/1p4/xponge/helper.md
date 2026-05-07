---
title: "Xponge.helper"
description: "SPONGE 1.4 的 Xponge API 文档。"
version: "SPONGE 1.4"
section: "Xponge 文档"
---

<h1 id="xpongehelper"><a href="/docs/1p4/xponge#xpongehelper">¶</a> Xponge.helper</h1>
<p>This <strong>module</strong> is used to provide help functions and classes</p>
<h2 id="subpackages"><a href="/docs/1p4/xponge#subpackages">¶</a> subpackages</h2>
<h2 id="submodules"><a href="/docs/1p4/xponge#submodules">¶</a> submodules</h2>
<h3 id="xpongehelpercv"><a href="/docs/1p4/xponge#xpongehelpercv">¶</a> <a class="is-internal-link is-valid-page" href="/docs/1p4/xponge/helper/cv">Xponge.helper.cv</a></h3>
<h3 id="xpongehelperfile"><a href="/docs/1p4/xponge#xpongehelperfile">¶</a> <a class="is-internal-link is-valid-page" href="/docs/1p4/xponge/helper/file">Xponge.helper.file</a></h3>
<h3 id="xpongehelpergromacs"><a href="/docs/1p4/xponge#xpongehelpergromacs">¶</a> <a class="is-internal-link is-valid-page" href="/docs/1p4/xponge/helper/gromacs">Xponge.helper.gromacs</a></h3>
<h3 id="xpongehelpermath"><a href="/docs/1p4/xponge#xpongehelpermath">¶</a> <a class="is-internal-link is-valid-page" href="/docs/1p4/xponge/helper/math">Xponge.helper.math</a></h3>
<h3 id="xpongehelpernamespace"><a href="/docs/1p4/xponge#xpongehelpernamespace">¶</a> <a class="is-internal-link is-valid-page" href="/docs/1p4/xponge/helper/namespace">Xponge.helper.namespace</a></h3>
<h3 id="xpongehelperrdkit"><a href="/docs/1p4/xponge#xpongehelperrdkit">¶</a> <a class="is-internal-link is-valid-page" href="/docs/1p4/xponge/helper/rdkit">Xponge.helper.rdkit</a></h3>
<h2 id="functions"><a href="/docs/1p4/xponge#functions">¶</a> functions</h2>
<h3 id="xprint"><a href="/docs/1p4/xponge#xprint">¶</a> xprint</h3>
<p>This <strong>function</strong> is used to print some contents according to the verbose level in GlobalSetting</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>to_print</td>
<td>the contents to print</td>
</tr>
<tr>
<td>verbose</td>
<td>only print when the verbose level is not less than this value</td>
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
<h3 id="debug"><a href="/docs/1p4/xponge#debug">¶</a> debug</h3>
<p>This <strong>function</strong> sets the mode to debug or not</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>mode</td>
<td>the value to set the debug mode</td>
</tr>
</tbody>
</table></div>
<h3 id="set_unit_transfer_function"><a href="/docs/1p4/xponge#set_unit_transfer_function">¶</a> set_unit_transfer_function</h3>
<p>This <strong>function</strong> is used to return a function to add a static method  <code>_unit_transfer</code> for a class.</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>sometype</td>
<td>the class</td>
</tr>
</tbody>
</table></div>
<div><table>
<thead>
<tr>
<th>return</th>
<th>the <strong>decorator</strong></th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h3 id="add_unit_transfer_function"><a href="/docs/1p4/xponge#add_unit_transfer_function">¶</a> add_unit_transfer_function</h3>
<p>This <strong>function</strong> is used to return a function to add a static method  <code>_unit_transfer</code> for a class.</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>sometype</td>
<td>the class</td>
</tr>
</tbody>
</table></div>
<div><table>
<thead>
<tr>
<th>return</th>
<th>the <strong>decorator</strong></th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h3 id="verbose"><a href="/docs/1p4/xponge#verbose">¶</a> verbose</h3>
<p>the gloabl verbose level</p>
<h3 id="add_pdb_residue_name_mapping"><a href="/docs/1p4/xponge#add_pdb_residue_name_mapping">¶</a> add_pdb_residue_name_mapping</h3>
<p>This <strong>function</strong> is used to add the residue name mapping to the property <code>PDBResidueNameMap</code></p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>place</td>
<td>head or tail</td>
</tr>
<tr>
<td>pdb_name</td>
<td>the residue name in pdb</td>
</tr>
<tr>
<td>real_name</td>
<td>the residue name in Python</td>
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
<h3 id="set_invisible_bonded_forces"><a href="/docs/1p4/xponge#set_invisible_bonded_forces">¶</a> set_invisible_bonded_forces</h3>
<p>This <strong>function</strong> is used to disables the types of bonded forces when building.</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>types</td>
<td>the types to set</td>
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
<h3 id="set_visible_bonded_forces"><a href="/docs/1p4/xponge#set_visible_bonded_forces">¶</a> set_visible_bonded_forces</h3>
<p>This <strong>function</strong> is used to disables the types of bonded forces except named here when building.</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>types</td>
<td>the types to set</td>
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
<h2 id="classes"><a href="/docs/1p4/xponge#classes">¶</a> classes</h2>
<h3 id="xdict"><a href="/docs/1p4/xponge#xdict">¶</a> Xdict</h3>
<p>This <strong>class</strong> is used to be a dict which can give not_found_message</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>not_found_method</td>
<td>the method (function) which will accept the key and return the value when the key is not found. <strong>New From 1.2.6.7</strong></td>
</tr>
<tr>
<td>not_found_message</td>
<td>the string to print when the key is not found</td>
</tr>
</tbody>
</table></div>
<h3 id="reasonedbool"><a href="/docs/1p4/xponge#reasonedbool">¶</a> ReasonedBool</h3>
<p>This <strong>class</strong> is a boolean value with a reason</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>value</td>
<td>True or False</td>
</tr>
<tr>
<td>reason</td>
<td>the reason why the boolean value is given</td>
</tr>
</tbody>
</table></div>
<h3 id="type"><a href="/docs/1p4/xponge#type">¶</a> Type</h3>
<p>This <strong>class</strong> is the abstract class of the types (atom types, bonded force types and so on).</p>
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
<td>the name of the type</td>
</tr>
<tr>
<td>kwargs</td>
<td>parameters of the type</td>
</tr>
</tbody>
</table></div>
<h4 id="add_property"><a href="/docs/1p4/xponge#add_property">¶</a> add_property</h4>
<p>This <strong>function</strong> is used to add a property to the class</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>parm_fmt</td>
<td>a dict mapping the name and the format of the property</td>
</tr>
<tr>
<td>parm_default</td>
<td>a dict mapping the name and the default value of the property</td>
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
<h4 id="set_property_unit"><a href="/docs/1p4/xponge#set_property_unit">¶</a> set_property_unit</h4>
<p>This <strong>function</strong> is used to set the unit of the property of the class</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>prop</td>
<td>the name of the property</td>
</tr>
<tr>
<td>unit_type</td>
<td>the type of the unit</td>
</tr>
<tr>
<td>base_unit</td>
<td>the basic unit used in Python</td>
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
<h4 id="new_from_string"><a href="/docs/1p4/xponge#new_from_string">¶</a> new_from_string</h4>
<p>This <strong>function</strong> is used to update the types of the class</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>string</td>
<td>the string to update</td>
</tr>
<tr>
<td>skip_lines</td>
<td>skip the first <code>skip_lines</code> line(s)</td>
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
<h4 id="new_from_file"><a href="/docs/1p4/xponge#new_from_file">¶</a> new_from_file</h4>
<p>This <strong>function</strong> is used to update the types of the class</p>
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
<td>the name of the file</td>
</tr>
<tr>
<td>skip_lines</td>
<td>skip the first <code>skip_lines</code> line(s)</td>
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
<h4 id="new_from_dict"><a href="/docs/1p4/xponge#new_from_dict">¶</a> new_from_dict</h4>
<p>This <strong>function</strong> is used to update the types of the class</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>dic</td>
<td>the dict of the parameters</td>
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
<h4 id="get_class_name"><a href="/docs/1p4/xponge#get_class_name">¶</a> get_class_name</h4>
<p>This <strong>function</strong> gives the ._name of the class</p>
<div><table>
<thead>
<tr>
<th>return</th>
<th>the name of the class</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h4 id="clear_type"><a href="/docs/1p4/xponge#clear_type">¶</a> clear_type</h4>
<p>This <strong>function</strong> clears the instance(s) of the class</p>
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
<td>the instance name to clear. If None, all instances will be cleared</td>
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
<h4 id="set_type"><a href="/docs/1p4/xponge#set_type">¶</a> set_type</h4>
<p>This <strong>function</strong> sets the instance into the class</p>
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
<td>the instance name</td>
</tr>
<tr>
<td>toset</td>
<td>the instance to set</td>
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
<h4 id="get_type"><a href="/docs/1p4/xponge#get_type">¶</a> get_type</h4>
<p>This <strong>function</strong> gets the instance of the class</p>
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
<td>the instance name</td>
</tr>
</tbody>
</table></div>
<div><table>
<thead>
<tr>
<th>return</th>
<th>the instance to set</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h4 id="get_all_types"><a href="/docs/1p4/xponge#get_all_types">¶</a> get_all_types</h4>
<p>This <strong>function</strong> gets the all instances of the class</p>
<div><table>
<thead>
<tr>
<th>return</th>
<th>a dict mapping the name and the instance</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h4 id="update"><a href="/docs/1p4/xponge#update">¶</a> update</h4>
<p>This <strong>function</strong> is used to update the properties of the instance</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>kwargs</td>
<td>parameters to update</td>
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
<h3 id="abstractmolecule"><a href="/docs/1p4/xponge#abstractmolecule">¶</a> AbstractMolecule</h3>
<p>This abstract <strong>class</strong> is used to judge whether a class can be treated as a molecule</p>
<h3 id="atomtype"><a href="/docs/1p4/xponge#atomtype">¶</a> AtomType</h3>
<p>This <strong>class</strong> is a subclass of Type, for atom types</p>
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
<td>the name of the type</td>
</tr>
<tr>
<td>kwargs</td>
<td>parameters of the type</td>
</tr>
</tbody>
</table></div>
<h3 id="residuetype"><a href="/docs/1p4/xponge#residuetype">¶</a> ResidueType</h3>
<p>This <strong>class</strong> is a subclass of Type, for residue types</p>
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
<td>the name of the type</td>
</tr>
<tr>
<td>kwargs</td>
<td>parameters of the type</td>
</tr>
</tbody>
</table></div>
<h4><a href="/docs/1p4/xponge#head">¶</a> head</h4>
<p>the name of the first atom in the head</p>
<h4 id="tail"><a href="/docs/1p4/xponge#tail">¶</a> tail</h4>
<p>the name of the first atom in the tail</p>
<h4 id="head_next"><a href="/docs/1p4/xponge#head_next">¶</a> head_next</h4>
<p>the name of the second atom in the head</p>
<h4 id="tail_next"><a href="/docs/1p4/xponge#tail_next">¶</a> tail_next</h4>
<p>the name of the second atom in the tail</p>
<h4 id="head_length"><a href="/docs/1p4/xponge#head_length">¶</a> head_length</h4>
<p>the length of the bond connected to the last residue</p>
<h4 id="tail_length"><a href="/docs/1p4/xponge#tail_length">¶</a> tail_length</h4>
<p>the length of the bond connected to the next residue</p>
<h4 id="head_link_conditions"><a href="/docs/1p4/xponge#head_link_conditions">¶</a> head_link_conditions</h4>
<p>the link conditions to the last residue</p>
<h4 id="tail_link_conditions"><a href="/docs/1p4/xponge#tail_link_conditions">¶</a> tail_link_conditions</h4>
<p>the link conditions to the next residue</p>
<h4 id="name2atom"><a href="/docs/1p4/xponge#name2atom">¶</a> name2atom</h4>
<p>This <strong>function</strong> convert an atom name to an Atom instance</p>
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
<td>the name</td>
</tr>
</tbody>
</table></div>
<div><table>
<thead>
<tr>
<th>return</th>
<th>the Atom instance</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h4 id="atom2index"><a href="/docs/1p4/xponge#atom2index">¶</a> atom2index</h4>
<p>This <strong>function</strong> convert an Atom instance to its index</p>
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
<th>the index</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h4 id="atom2name"><a href="/docs/1p4/xponge#atom2name">¶</a> atom2name</h4>
<p>This <strong>function</strong> convert an Atom instance to its name</p>
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
<th>the name</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h4 id="name2index"><a href="/docs/1p4/xponge#name2index">¶</a> name2index</h4>
<p>This <strong>function</strong> convert an atom name to its index</p>
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
<td>the name</td>
</tr>
</tbody>
</table></div>
<div><table>
<thead>
<tr>
<th>return</th>
<th>the index</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h4 id="add_atom"><a href="/docs/1p4/xponge#add_atom">¶</a> add_atom</h4>
<p>This <strong>function</strong> is used to add an atom to the residue type.</p>
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
<td>the name of the atom</td>
</tr>
<tr>
<td>atom_type</td>
<td>the type of the atom</td>
</tr>
<tr>
<td>x</td>
<td>the coordinate x</td>
</tr>
<tr>
<td>y</td>
<td>the coordinate y</td>
</tr>
<tr>
<td>z</td>
<td>the coordinate z</td>
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
<h4 id="omit_atoms"><a href="/docs/1p4/xponge#omit_atoms">¶</a> omit_atoms</h4>
<p>This <strong>function</strong> omits some atoms from the ResidueType</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>atoms</td>
<td>the atom(s) to omit</td>
</tr>
<tr>
<td>charge</td>
<td>the total charge of the residue type after the omission. None to use the charge sum of the unomitted atoms</td>
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
<h4 id="add_connectivity"><a href="/docs/1p4/xponge#add_connectivity">¶</a> add_connectivity</h4>
<p>This <strong>function</strong> is used to add the connectivity between two atoms to the residue type.</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>atom0</td>
<td>the atom name or the Atom instance</td>
</tr>
<tr>
<td>atom1</td>
<td>the atom name or the Atom instance</td>
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
<h4 id="remove_connectivity"><a href="/docs/1p4/xponge#remove_connectivity">¶</a> remove_connectivity</h4>
<p>This <strong>function</strong> is used to remove the connectivity between two atoms from the residue type.</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>atom0</td>
<td>the atom name or the Atom instance</td>
</tr>
<tr>
<td>atom1</td>
<td>the atom name or the Atom instance</td>
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
<h4 id="remove_periodic_connectivity"><a href="/docs/1p4/xponge#remove_periodic_connectivity">¶</a> remove_periodic_connectivity</h4>
<p>This <strong>function</strong> is used to remove the connectivity between atoms larger than the given cutoff</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>cutoff</td>
<td>the cutoff distance to recognize the connectivity as periodic or unperiodic</td>
</tr>
</tbody>
</table></div>
<div><table>
<thead>
<tr>
<th>return</th>
<th>a list of the removed connected atom pair names</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h4 id="add_bonded_force"><a href="/docs/1p4/xponge#add_bonded_force">¶</a> add_bonded_force</h4>
<p>This <strong>function</strong> is used to add the bonded force to the residue type.</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>bonded_force_entity</td>
<td>the bonded force instance</td>
</tr>
<tr>
<td>typename</td>
<td>the bonded force type name. If None, get_class_name will be used to get the name</td>
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
<h4 id="deepcopy"><a href="/docs/1p4/xponge#deepcopy">¶</a> deepcopy</h4>
<p>This <strong>function</strong> is used to deep copy the instance</p>
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
<td>the new ResidueType name</td>
</tr>
<tr>
<td>forcopy</td>
<td>the key to help you find who it is from</td>
</tr>
</tbody>
</table></div>
<div><table>
<thead>
<tr>
<th>return</th>
<th>the new instance</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h3 id="entity"><a href="/docs/1p4/xponge#entity">¶</a> Entity</h3>
<p>This <strong>class</strong> is the abstract class of the entities (atoms, bonded forces, residues and so on).</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>entity_type</td>
<td>the type of the entity</td>
</tr>
<tr>
<td>name</td>
<td>the name of the entity</td>
</tr>
</tbody>
</table></div>
<h4 id="get_class_name-1"><a href="/docs/1p4/xponge#get_class_name-1">¶</a> get_class_name</h4>
<p>This <strong>function</strong> gives the name of the class</p>
<div><table>
<thead>
<tr>
<th>return</th>
<th>the name of the class</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h4 id="update-1"><a href="/docs/1p4/xponge#update-1">¶</a> update</h4>
<p>This <strong>function</strong> is used to update the properties of the instance</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>kwargs</td>
<td>the properties to update</td>
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
<h3 id="atom"><a href="/docs/1p4/xponge#atom">¶</a> Atom</h3>
<p>This <strong>class</strong> is a subclass of Entity, for atoms</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>entity_type</td>
<td>a string or a AtomType instance, the type of the entity</td>
</tr>
<tr>
<td>name</td>
<td>the name of the entity</td>
</tr>
</tbody>
</table></div>
<h4 id="extra_excluded_atoms"><a href="/docs/1p4/xponge#extra_excluded_atoms">¶</a> extra_excluded_atoms</h4>
<p>the extra excluded atoms of this atom</p>
<div><table>
<thead>
<tr>
<th>return</th>
<th>a set of atoms</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h4 id="deepcopy-1"><a href="/docs/1p4/xponge#deepcopy-1">¶</a> deepcopy</h4>
<p>This <strong>function</strong> is used to deep copy the instance</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>forcopy</td>
<td>the key to help you find who it is from</td>
</tr>
</tbody>
</table></div>
<div><table>
<thead>
<tr>
<th>return</th>
<th>the new instance</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h4 id="link_atom"><a href="/docs/1p4/xponge#link_atom">¶</a> link_atom</h4>
<p>This <strong>function</strong> is used to link atoms for building</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>link_type</td>
<td>the type to link</td>
</tr>
<tr>
<td>atom</td>
<td>the atom to link</td>
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
<h4 id="extra_exclude_atom"><a href="/docs/1p4/xponge#extra_exclude_atom">¶</a> extra_exclude_atom</h4>
<p>This <strong>function</strong> is used to extra exclude one atom</p>
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
<td>an Atom instance</td>
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
<h4 id="extra_exclude_atoms"><a href="/docs/1p4/xponge#extra_exclude_atoms">¶</a> extra_exclude_atoms</h4>
<p>This <strong>function</strong> is used to extra exclude a list of atoms</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>atom_list</td>
<td>the atom list</td>
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
<h3 id="residue"><a href="/docs/1p4/xponge#residue">¶</a> Residue</h3>
<p>This <strong>class</strong> is a subclass of Entity, for residues</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>entity_type</td>
<td>a string or a ResidueType instance, the type of the entity</td>
</tr>
<tr>
<td>name</td>
<td>the name of the entity</td>
</tr>
<tr>
<td>directly_copy</td>
<td>if True, directly copy the Residue instance from the ResidueType instance</td>
</tr>
</tbody>
</table></div>
<h4 id="set_type-1"><a href="/docs/1p4/xponge#set_type-1">¶</a> set_type</h4>
<p>This <strong>function</strong> is used to change the type of the residue to a new type</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>new_type</td>
<td>the instance or the name of the new residue type</td>
</tr>
<tr>
<td>add_missing_atoms</td>
<td>whether to add missing atoms after deleting the terminal atoms</td>
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
<h4 id="unterminal"><a href="/docs/1p4/xponge#unterminal">¶</a> unterminal</h4>
<p>This <strong>function</strong> is used to turn the terminal residue to be unterminal</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>add_missing_atoms</td>
<td>whether to add missing atoms after deleting the terminal atoms</td>
</tr>
</tbody>
</table></div>
<div><table>
<thead>
<tr>
<th>return</th>
<th>1 for success, 0 for failure</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h4 id="name2atom-1"><a href="/docs/1p4/xponge#name2atom-1">¶</a> name2atom</h4>
<p>This <strong>function</strong> convert an atom name to an Atom instance</p>
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
<td>the name</td>
</tr>
</tbody>
</table></div>
<div><table>
<thead>
<tr>
<th>return</th>
<th>the Atom instance</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h4 id="atom2index-1"><a href="/docs/1p4/xponge#atom2index-1">¶</a> atom2index</h4>
<p>This <strong>function</strong> convert an Atom instance to its index</p>
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
<th>the index</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h4 id="name2index-1"><a href="/docs/1p4/xponge#name2index-1">¶</a> name2index</h4>
<p>This <strong>function</strong> convert an atom name to its index</p>
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
<td>the name</td>
</tr>
</tbody>
</table></div>
<div><table>
<thead>
<tr>
<th>return</th>
<th>the index</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h4 id="add_atom-1"><a href="/docs/1p4/xponge#add_atom-1">¶</a> add_atom</h4>
<p>This <strong>function</strong> is used to add an atom to the residue</p>
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
<td>the name of the atom. If an Atom instance is given, only the name and type are used.</td>
</tr>
<tr>
<td>atom_type</td>
<td>the type of the atom. If None, it will copy from the ResidueType.</td>
</tr>
<tr>
<td>x</td>
<td>the coordinate x. If None, it will copy from the ResidueType.</td>
</tr>
<tr>
<td>y</td>
<td>the coordinate y. If None, it will copy from the ResidueType.</td>
</tr>
<tr>
<td>z</td>
<td>the coordinate z. If None, it will copy from the ResidueType.</td>
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
<h4 id="add_connectivity-1"><a href="/docs/1p4/xponge#add_connectivity-1">¶</a> add_connectivity</h4>
<p>This <strong>function</strong> is used to add the connectivity between two atoms to the residue entity.</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>atom0</td>
<td>the atom name or the Atom instance</td>
</tr>
<tr>
<td>atom1</td>
<td>the atom name or the Atom instance</td>
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
<h4 id="add_bonded_force-1"><a href="/docs/1p4/xponge#add_bonded_force-1">¶</a> add_bonded_force</h4>
<p>This <strong>function</strong> is used to add the bonded force to the residue entity.</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>bonded_force_entity</td>
<td>the bonded force instance</td>
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
<h4 id="add_missing_atoms"><a href="/docs/1p4/xponge#add_missing_atoms">¶</a> add_missing_atoms</h4>
<p>This <strong>function</strong> is used to add the missing atoms from the ResidueType to the residue entity.</p>
<div><table>
<thead>
<tr>
<th>return</th>
<th>None</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h4 id="deepcopy-2"><a href="/docs/1p4/xponge#deepcopy-2">¶</a> deepcopy</h4>
<p>This <strong>function</strong> is used to deep copy the instance</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>forcopy</td>
<td>the key to help you find who it is from</td>
</tr>
</tbody>
</table></div>
<div><table>
<thead>
<tr>
<th>return</th>
<th>the new instance</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h3 id="residuelink"><a href="/docs/1p4/xponge#residuelink">¶</a> ResidueLink</h3>
<p>This <strong>class</strong> is a class for the link between residues</p>
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
<td>the first atom to link</td>
</tr>
<tr>
<td>atom2</td>
<td>the second atom to link</td>
</tr>
</tbody>
</table></div>
<h4 id="get_hash"><a href="/docs/1p4/xponge#get_hash">¶</a> get_hash</h4>
<p>This <strong>function</strong> is used to get the hash value of the ResidueLink</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>one</td>
<td>one Atom or Residue of the link</td>
</tr>
<tr>
<td>other</td>
<td>the other Atom or Residue of the link</td>
</tr>
</tbody>
</table></div>
<div><table>
<thead>
<tr>
<th>return</th>
<th>the hash value</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h4 id="add_bonded_force-2"><a href="/docs/1p4/xponge#add_bonded_force-2">¶</a> add_bonded_force</h4>
<p>This <strong>function</strong> is used to add the bonded force to the residue link</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>bonded_force_entity</td>
<td>the bonded force instance</td>
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
<h4 id="deepcopy-3"><a href="/docs/1p4/xponge#deepcopy-3">¶</a> deepcopy</h4>
<p>This <strong>function</strong> is used to deep copy the instance</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>forcopy</td>
<td>the key to help you find who it is from</td>
</tr>
</tbody>
</table></div>
<div><table>
<thead>
<tr>
<th>return</th>
<th>the new instance</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h3 id="molecule"><a href="/docs/1p4/xponge#molecule">¶</a> Molecule</h3>
<p>This <strong>class</strong> is a class for molecules</p>
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
<td>a string, the name of the Molecule or a ResidueType instance</td>
</tr>
</tbody>
</table></div>
<h4 id="cast"><a href="/docs/1p4/xponge#cast">¶</a> cast</h4>
<p>This <strong>function</strong> casts a Residue, a ResidueType or a Molecule to a Molecule</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>other</td>
<td>a Residue, a ResidueType or a Molecule instance</td>
</tr>
<tr>
<td>deepcopy</td>
<td>whether to deepcopy the other instance</td>
</tr>
</tbody>
</table></div>
<div><table>
<thead>
<tr>
<th>return</th>
<th>a Molecule instance</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h4 id="set_save_sponge_input"><a href="/docs/1p4/xponge#set_save_sponge_input">¶</a> set_save_sponge_input</h4>
<p>This <strong>function</strong> is used to set the function when <code>Save_SPONGE_Input</code>.</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>keyname</td>
<td>the file prefix to save</td>
</tr>
</tbody>
</table></div>
<div><table>
<thead>
<tr>
<th>return</th>
<th>the decorator</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h4 id="del_save_sponge_input"><a href="/docs/1p4/xponge#del_save_sponge_input">¶</a> del_save_sponge_input</h4>
<p>This <strong>function</strong> is used to delete the function when <code>Save_SPONGE_Input</code>.</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>keyname</td>
<td>the file prefix to save</td>
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
<h4 id="set_mindsponge_todo"><a href="/docs/1p4/xponge#set_mindsponge_todo">¶</a> set_mindsponge_todo</h4>
<p>This <strong>function</strong> is used to set the function when <code>Save_SPONGE_Input</code>.</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>keyname</td>
<td>the file prefix to save</td>
</tr>
</tbody>
</table></div>
<div><table>
<thead>
<tr>
<th>return</th>
<th>the decorator</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h4 id="del_mindsponge_todo"><a href="/docs/1p4/xponge#del_mindsponge_todo">¶</a> del_mindsponge_todo</h4>
<p>This <strong>function</strong> is used to delete the function when <code>Save_SPONGE_Input</code>.</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>keyname</td>
<td>the file prefix to save</td>
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
<h4 id="find_spacious_direction"><a href="/docs/1p4/xponge#find_spacious_direction">¶</a> find_spacious_direction</h4>
<p>This <strong>function</strong> is used to find the most spacious (lowest atom density) direction of the givin point around the atom positions</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>point</td>
<td>a list of 3 numbers, the point to find the most spacious direction</td>
</tr>
<tr>
<td>atom_positions</td>
<td>the atom positions around the point. If None, this will use the positions of the atoms in this Molecule</td>
</tr>
</tbody>
</table></div>
<div><table>
<thead>
<tr>
<th>return</th>
<th>a numpy array with the shape (3,), the most spacious direction</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h4 id="add_residue"><a href="/docs/1p4/xponge#add_residue">¶</a> add_residue</h4>
<p>This <strong>function</strong> is used to add a residue to the molecule</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>residue</td>
<td>the residue to add, either a Residue instance or a ResidueType instance</td>
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
<h4 id="add_bonded_force-3"><a href="/docs/1p4/xponge#add_bonded_force-3">¶</a> add_bonded_force</h4>
<p>This <strong>function</strong> is used to add the bonded force to the residue type.</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>bonded_force_entity</td>
<td>the bonded force instance</td>
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
<h4 id="add_residue_link"><a href="/docs/1p4/xponge#add_residue_link">¶</a> add_residue_link</h4>
<p>This <strong>function</strong> is used to add the connectivity between two atoms of two residues in the molecule.</p>
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
<td>the first atom</td>
</tr>
<tr>
<td>atom2</td>
<td>the second atom</td>
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
<h4 id="get_residue_link"><a href="/docs/1p4/xponge#get_residue_link">¶</a> get_residue_link</h4>
<p>This <strong>function</strong> is used to get the ResidueLink between two residues</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>one</td>
<td>one Atom or Residue of the ResidueLink</td>
</tr>
<tr>
<td>other</td>
<td>the other Atom or Residue of the ResidueLink</td>
</tr>
</tbody>
</table></div>
<div><table>
<thead>
<tr>
<th>return</th>
<th>the ResidueLink or None if not found</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h4 id="del_residue_link"><a href="/docs/1p4/xponge#del_residue_link">¶</a> del_residue_link</h4>
<p>This <strong>function</strong> is used to delete the ResidueLink between two residues</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>one</td>
<td>one Atom or Residue of the ResidueLink</td>
</tr>
<tr>
<td>other</td>
<td>the other Atom or Residue of the ResidueLink</td>
</tr>
<tr>
<td>key</td>
<td>"atom" or "residue", to specify the key</td>
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
<h4 id="add_missing_atoms-1"><a href="/docs/1p4/xponge#add_missing_atoms-1">¶</a> add_missing_atoms</h4>
<p>This <strong>function</strong> is used to add the missing atoms from the ResidueType instances to the molecule.</p>
<div><table>
<thead>
<tr>
<th>return</th>
<th>None</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h4 id="set_missing_residues_info"><a href="/docs/1p4/xponge#set_missing_residues_info">¶</a> set_missing_residues_info</h4>
<p>This <strong>function</strong> is used to set the information about the missing residues</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>start</td>
<td>the residue or the residue index where the missing residues start. <code>None</code> for no starting residue.</td>
</tr>
<tr>
<td>end</td>
<td>the residue  or the residue index where the missing residues end. <code>None</code> for no ending residue.</td>
</tr>
<tr>
<td>missing_residues</td>
<td>the missing residues. The parameter can be a string separated by space, or a list of residue names, or a list of ResidueType or None. If None, the information will be deleted between start and end</td>
</tr>
</tbody>
</table></div>
<div><table>
<thead>
<tr>
<th>return</th>
<th>True for success, False for failure to set</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h4 id="clear_missing_residues_info"><a href="/docs/1p4/xponge#clear_missing_residues_info">¶</a> clear_missing_residues_info</h4>
<p>This <strong>function</strong> is used to clear the information about the missing residues</p>
<div><table>
<thead>
<tr>
<th>return</th>
<th>None</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h4 id="add_missing_residues"><a href="/docs/1p4/xponge#add_missing_residues">¶</a> add_missing_residues</h4>
<p>This <strong>function</strong> is used to add the missing residues according to the information of the missing residues.</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>add_head</td>
<td>whether to add the missing residues at the head of the chain</td>
</tr>
<tr>
<td>add_tail</td>
<td>whether to add the missing residues at the tail of the chain</td>
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
<h4 id="deepcopy-4"><a href="/docs/1p4/xponge#deepcopy-4">¶</a> deepcopy</h4>
<p>This <strong>function</strong> is used to deep copy the instance</p>
<div><table>
<thead>
<tr>
<th>return</th>
<th>the new instance</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h4 id="get_atoms"><a href="/docs/1p4/xponge#get_atoms">¶</a> get_atoms</h4>
<p>This <strong>function</strong> is used to get the atoms in the molecule.</p>
<div><table>
<thead>
<tr>
<th>return</th>
<th>a list of atoms</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h4 id="get_atom_coordinates"><a href="/docs/1p4/xponge#get_atom_coordinates">¶</a> get_atom_coordinates</h4>
<p>This <strong>function</strong> is used to get the atom coordinates</p>
<div><table>
<thead>
<tr>
<th>return</th>
<th>a numpy array, the coordinates of atoms</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h4 id="divide_into_two_parts"><a href="/docs/1p4/xponge#divide_into_two_parts">¶</a> divide_into_two_parts</h4>
<p>This <strong>function</strong> is used to divide the molecule into two parts</p>
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
<td>the first atom</td>
</tr>
<tr>
<td>atom2</td>
<td>the second atom</td>
</tr>
</tbody>
</table></div>
<div><table>
<thead>
<tr>
<th>return</th>
<th>two numpy arrays, the index of the two parts</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h4 id="restrain_position"><a href="/docs/1p4/xponge#restrain_position">¶</a> restrain_position</h4>
<p>This <strong>function</strong> is used to generate the atoms for restraints</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>select</td>
<td>a string of MDAnalysis selection</td>
</tr>
<tr>
<td>filename</td>
<td>the name of the output atom index file</td>
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
<h4 id="constrain_position"><a href="/docs/1p4/xponge#constrain_position">¶</a> constrain_position</h4>
<p>This <strong>function</strong> is used to generate the mass in file for constraints</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>select</td>
<td>a string of MDAnalysis selection</td>
</tr>
<tr>
<td>filename</td>
<td>the name of the output atom index file</td>
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
<h3 id="bondedforceentity"><a href="/docs/1p4/xponge#bondedforceentity">¶</a> BondedForceEntity</h3>
<p>This <strong>class</strong> is a subclass of Entity, for bonded forces</p>
<h4 id="deepcopy-5"><a href="/docs/1p4/xponge#deepcopy-5">¶</a> deepcopy</h4>
<p>This <strong>function</strong> is used to deep copy the instance</p>
<div><table>
<thead>
<tr>
<th>return</th>
<th>None</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h3 id="bondedforcetype"><a href="/docs/1p4/xponge#bondedforcetype">¶</a> BondedForceType</h3>
<p>This <strong>class</strong> is a subclass of Type, for bonded force types</p>
<h4 id="same_force"><a href="/docs/1p4/xponge#same_force">¶</a> same_force</h4>
<p>This <strong>function</strong> receives a list of atoms and output all the same force permutations for the list</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>atom_list</td>
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
<h3 id="pairwiseforcetype"><a href="/docs/1p4/xponge#pairwiseforcetype">¶</a> PairwiseForceType</h3>
<p>This <strong>class</strong> is a subclass of Type, for pairwise force types</p>

