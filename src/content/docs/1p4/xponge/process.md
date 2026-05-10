---
title: "Xponge.process"
description: "SPONGE 1.4 的 Xponge API 文档。"
version: "SPONGE 1.4"
section: "Xponge 文档"
---

<h1 id="xpongeprocess"><a href="/docs/1p4/xponge#xpongeprocess">¶</a> Xponge.process</h1>
<p>This <strong>module</strong> is used to process topology and conformations</p>
<h2 id="subpackages"><a href="/docs/1p4/xponge#subpackages">¶</a> subpackages</h2>
<h2 id="submodules"><a href="/docs/1p4/xponge#submodules">¶</a> submodules</h2>
<h2 id="functions"><a href="/docs/1p4/xponge#functions">¶</a> functions</h2>
<h3 id="impose_bond"><a href="/docs/1p4/xponge#impose_bond">¶</a> impose_bond</h3>
<p>This <strong>function</strong> is used to impose the distance in <code>molecule</code> between <code>atom1</code> and <code>atom2</code> to <code>length</code></p>
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
<td>a <code>Molecule</code> instance</td>
</tr>
<tr>
<td>atom1</td>
<td>the base atom, which will not change its coordinate</td>
</tr>
<tr>
<td>atom2</td>
<td>the atom to change its coordinate to fit the length</td>
</tr>
<tr>
<td>length</td>
<td>distance in the unit of angstrom</td>
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
<h3 id="impose_angle"><a href="/docs/1p4/xponge#impose_angle">¶</a> impose_angle</h3>
<p>This <strong>function</strong> is used to impose the angle in <code>molecule</code> between <code>atom1</code>, <code>atom2</code> and <code>atom3</code> to <code>angle</code>.</p>
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
<td>a <code>Molecule</code> instance</td>
</tr>
<tr>
<td>atom1</td>
<td>the base atom, which will not change its coordinate</td>
</tr>
<tr>
<td>atom2</td>
<td>the base atom, which will not change its coordinate</td>
</tr>
<tr>
<td>atom3</td>
<td>the atom to change its coordinate to fit the angle</td>
</tr>
<tr>
<td>angle</td>
<td>angle in the unit of rad</td>
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
<h3 id="impose_dihedral"><a href="/docs/1p4/xponge#impose_dihedral">¶</a> impose_dihedral</h3>
<p>This <strong>function</strong> is used to impose the dihedral in <code>molecule</code> between <code>atom1</code>, <code>atom2</code>, <code>atom3</code> and <code>atom4</code> to <code>dihedral</code>.</p>
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
<td>a <code>Molecule</code> instance</td>
</tr>
<tr>
<td>atom1</td>
<td>the base atom, which will not change its coordinate</td>
</tr>
<tr>
<td>atom2</td>
<td>the base atom, which will not change its coordinate</td>
</tr>
<tr>
<td>atom3</td>
<td>the atom to change its coordinate to fit the angle</td>
</tr>
<tr>
<td>atom4</td>
<td>the atom to change its coordinate to fit the angle</td>
</tr>
<tr>
<td>dihedral</td>
<td>dihedral angle in the unit of rad</td>
</tr>
<tr>
<td>keep_atom3</td>
<td>whether the other atoms linked to atom3 will be rotated</td>
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
<h3 id="add_solvent_box"><a href="/docs/1p4/xponge#add_solvent_box">¶</a> add_solvent_box</h3>
<p>This <strong>function</strong> adds a box full of solvents to a molecule.</p>
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
<td>the molecule to add the box, either a <code>Molecule</code> or a <code>ResidueType</code></td>
</tr>
<tr>
<td>solvent</td>
<td>the solvent molecule, either a <code>Molecule</code> or a <code>ResidueType</code></td>
</tr>
<tr>
<td>distance</td>
<td>the distance between the <code>molecule</code> and the box in the unit of Angstrom. This can be an <code>int</code> or a <code>float</code>, and it can be also a list of them with the length 3 or 6, which represents the 3 or 6 directions respectively.</td>
</tr>
<tr>
<td>tolerance</td>
<td>the distance between two molecules. 2.5 for default.</td>
</tr>
<tr>
<td>n_solvent</td>
<td>the number of solvent molecules.</td>
</tr>
</tbody>
</table></div>
<div><table>
<thead>
<tr>
<th>return</th>
<th>the Molecule instance</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h3 id="h_mass_repartition"><a href="/docs/1p4/xponge#h_mass_repartition">¶</a> h_mass_repartition</h3>
<p>This <strong>function</strong> repartition the mass of light atoms to the connected heavy atoms. This can help the simulation run with a time step of 4 fs.</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>molecules</td>
<td>a <code>Molecule</code></td>
</tr>
<tr>
<td>repartition_mass</td>
<td>if the mass of the atom is not greater than this value, it will be seen as a light atom. 1.1 for default and in the unit of Dalton.</td>
</tr>
<tr>
<td>repartition_rate</td>
<td>The mass of the light atom will multiplied by this value.</td>
</tr>
<tr>
<td>exclude_residue_name</td>
<td>the residue name which will not do the repartition. "WAT" for default.</td>
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
<h3 id="solvent_replace"><a href="/docs/1p4/xponge#solvent_replace">¶</a> solvent_replace</h3>
<p>This <strong>function</strong> replaces the solvent to some other molecules randomly.</p>
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
<td>a <code>Molecule</code> instance</td>
</tr>
<tr>
<td>select</td>
<td>a <strong>function</strong> to decide which residues should be replaced, or a Residue, a ResidueType or a Molecule with only one Residue, which the residues to be replaced have the same name</td>
</tr>
<tr>
<td>toreplace</td>
<td>a dict, which stores the mapping of molecules to replace and the number of molecules. Every molecule should be a <code>ResidueType</code>, a <code>Residue</code> or a <code>Molecule</code> with only one <code>Residue</code>.</td>
</tr>
<tr>
<td>sort</td>
<td>whether to sort the residues after replacing</td>
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
<h3 id="main_axis_rotate"><a href="/docs/1p4/xponge#main_axis_rotate">¶</a> main_axis_rotate</h3>
<p>This <strong>function</strong> rotates the main axis of the molecule to the desired direction</p>
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
<td>a <code>Molecule</code> instance</td>
</tr>
<tr>
<td>direction_long</td>
<td>a list of three <code>int</code> or <code>float</code> to represent the direction vector. The long main axis will rotate to this direction.</td>
</tr>
<tr>
<td>direction_middle</td>
<td>a list of three <code>int</code> or <code>float</code> to represent the direction vector. The middle main axis will rotate to this direction.</td>
</tr>
<tr>
<td>direction_short</td>
<td>a list of three <code>int</code> or <code>float</code> to represent the direction vector. The short main axis will rotate to this direction.</td>
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
<h3 id="get_peptide_from_sequence"><a href="/docs/1p4/xponge#get_peptide_from_sequence">¶</a> get_peptide_from_sequence</h3>
<p>This <strong>function</strong> is used to get a peptide from the sequence</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>sequence</td>
<td>a string, the serial</td>
</tr>
<tr>
<td>charged_terminal</td>
<td>whether to change the terminal residues to the corresponding charged residue</td>
</tr>
</tbody>
</table></div>
<div><table>
<thead>
<tr>
<th>return</th>
<th>a Molecule instance, the peptide</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h3 id="optimize"><a href="/docs/1p4/xponge#optimize">¶</a> optimize</h3>
<p>This <strong>function</strong> is used to optimize the structure of the Molecule instance</p>
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
<td>the molecule to optimize</td>
</tr>
<tr>
<td>step</td>
<td>the limited step for each epoch for minimization, 2000 for default</td>
</tr>
<tr>
<td>only_bad_coordinate</td>
<td>whether to optimize all the atoms or the atoms whose coordinates are bad</td>
</tr>
<tr>
<td>dt</td>
<td>the start dt for minimization</td>
</tr>
<tr>
<td>pbc</td>
<td>whether to use the periodic box condition</td>
</tr>
<tr>
<td>extra_commands</td>
<td>a dict, with the extra commands to pass to the MD engine</td>
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
<h3 id="region"><a href="/docs/1p4/xponge#region">¶</a> Region</h3>
<p>This <strong>abstract class</strong> is used to define a region</p>
<h4 id="side"><a href="/docs/1p4/xponge#side">¶</a> side</h4>
<p>This <strong>function</strong> is used to set the side of the region"</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>side</td>
<td>either "in" or "out"</td>
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
<h3 id="intersectregion"><a href="/docs/1p4/xponge#intersectregion">¶</a> IntersectRegion</h3>
<p>This <strong>class</strong> is used to get the interset region of some regions</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>*regions</td>
<td>the regions</td>
</tr>
</tbody>
</table></div>
<h3 id="unionregion"><a href="/docs/1p4/xponge#unionregion">¶</a> UnionRegion</h3>
<p>This <strong>class</strong> is used to get the union region of some regions</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>*regions</td>
<td>the regions</td>
</tr>
</tbody>
</table></div>
<h3 id="blockregion"><a href="/docs/1p4/xponge#blockregion">¶</a> BlockRegion</h3>
<p>This <strong>class</strong> is used to define a block region</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>x_low</td>
<td>the lowest x coordinate of the block region</td>
</tr>
<tr>
<td>y_low</td>
<td>the lowest y coordinate of the block region</td>
</tr>
<tr>
<td>z_low</td>
<td>the lowest z coordinate of the block region</td>
</tr>
<tr>
<td>x_high</td>
<td>the highest x coordinate of the block region</td>
</tr>
<tr>
<td>y_high</td>
<td>the highest y coordinate of the block region</td>
</tr>
<tr>
<td>z_high</td>
<td>the highest z coordinate of the block region</td>
</tr>
<tr>
<td>side</td>
<td>either "in" or "out"</td>
</tr>
<tr>
<td>boundary</td>
<td>whether the boudary is seen as in the region</td>
</tr>
</tbody>
</table></div>
<h3 id="sphereregion"><a href="/docs/1p4/xponge#sphereregion">¶</a> SphereRegion</h3>
<p>This <strong>class</strong> is used to define a sphere region</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>x</td>
<td>the x coordinate of the sphere origin</td>
</tr>
<tr>
<td>y</td>
<td>the y coordinate of the sphere origin</td>
</tr>
<tr>
<td>z</td>
<td>the z coordinate of the sphere origin</td>
</tr>
<tr>
<td>r</td>
<td>the radius of the sphere</td>
</tr>
<tr>
<td>side</td>
<td>either "in" or "out"</td>
</tr>
<tr>
<td>boundary</td>
<td>whether the boudary is seen as in the region</td>
</tr>
</tbody>
</table></div>
<h3 id="frustumregion"><a href="/docs/1p4/xponge#frustumregion">¶</a> FrustumRegion</h3>
<p>This <strong>class</strong> is used to define a frustum region</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>x1</td>
<td>the x coordinate of the first circle origin</td>
</tr>
<tr>
<td>y1</td>
<td>the y coordinate of the first circle origin</td>
</tr>
<tr>
<td>z1</td>
<td>the z coordinate of the first circle origin</td>
</tr>
<tr>
<td>r1</td>
<td>the radius of the first circle origin</td>
</tr>
<tr>
<td>x2</td>
<td>the x coordinate of the second circle origin</td>
</tr>
<tr>
<td>y2</td>
<td>the y coordinate of the second circle origin</td>
</tr>
<tr>
<td>z2</td>
<td>the z coordinate of the second circle origin</td>
</tr>
<tr>
<td>r2</td>
<td>the radius of the second circle origin</td>
</tr>
<tr>
<td>side</td>
<td>either "in" or "out"</td>
</tr>
<tr>
<td>boundary</td>
<td>whether the boudary is seen as in the region</td>
</tr>
</tbody>
</table></div>
<h3 id="prismregion"><a href="/docs/1p4/xponge#prismregion">¶</a> PrismRegion</h3>
<p>This <strong>class</strong> is used to define a prism (parallelepiped) region</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>x0</td>
<td>the x coordinate of the origin</td>
</tr>
<tr>
<td>y0</td>
<td>the y coordinate of the origin</td>
</tr>
<tr>
<td>z0</td>
<td>the z coordinate of the origin</td>
</tr>
<tr>
<td>x1</td>
<td>the x coordinate of the first basis vector</td>
</tr>
<tr>
<td>y1</td>
<td>the y coordinate of the first basis vector</td>
</tr>
<tr>
<td>z1</td>
<td>the z coordinate of the first basis vector</td>
</tr>
<tr>
<td>x2</td>
<td>the x coordinate of the second basis vector</td>
</tr>
<tr>
<td>y2</td>
<td>the y coordinate of the second basis vector</td>
</tr>
<tr>
<td>zz</td>
<td>the z coordinate of the second basis vector</td>
</tr>
<tr>
<td>x3</td>
<td>the x coordinate of the third basis vector</td>
</tr>
<tr>
<td>y3</td>
<td>the y coordinate of the third basis vector</td>
</tr>
<tr>
<td>z3</td>
<td>the z coordinate of the third basis vector</td>
</tr>
<tr>
<td>side</td>
<td>either "in" or "out"</td>
</tr>
<tr>
<td>boundary</td>
<td>whether the boudary is seen as in the region</td>
</tr>
</tbody>
</table></div>
<h3 id="lattice"><a href="/docs/1p4/xponge#lattice">¶</a> Lattice</h3>
<p>This <strong>class</strong> is used to help with the process of the lattice</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>style</td>
<td>the style of the lattice. "custom", "template:NAME" or the key values in Lattice.styles</td>
</tr>
<tr>
<td>basis_molecule</td>
<td>the unit to repeat, a Residue, a ResidueType or a Molecule</td>
</tr>
<tr>
<td>scale</td>
<td>the scale of the lattice</td>
</tr>
<tr>
<td>origin</td>
<td>a list with 3 numbers, the origin of the lattice. [0,0,0] for default.</td>
</tr>
<tr>
<td>cell_length</td>
<td>the length of the unit cell. [1,1,1] for default.</td>
</tr>
<tr>
<td>cell_angle</td>
<td>the angle of the unit cell. [90,90,90] for default.</td>
</tr>
<tr>
<td>basis_position</td>
<td>a list of lists, every sublist has 3 numbers for coordinates.</td>
</tr>
<tr>
<td>spacing</td>
<td>a list with 3 numbers, the spacing distance in three cell basis vectors.</td>
</tr>
<tr>
<td>periodic_bonds</td>
<td>a set of atom pair names. This can be from ResidueType.remove_periodic_connectivity</td>
</tr>
<tr>
<td>periodic_cutoff</td>
<td>a float. 3 for default. The cutoff of the bond to be recognized as periodic or not</td>
</tr>
</tbody>
</table></div>
<h4 id="create"><a href="/docs/1p4/xponge#create">¶</a> create</h4>
<p>This <strong>function</strong> is used to create basis molecules to the region in the box</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>box</td>
<td>the box of the system</td>
</tr>
<tr>
<td>region</td>
<td>the region to create the basis_molecule</td>
</tr>
<tr>
<td>mol</td>
<td>if <code>mol</code> the Molecule instance is provided, basis molecules will be added to <code>mol</code></td>
</tr>
</tbody>
</table></div>
<div><table>
<thead>
<tr>
<th>return</th>
<th>a new Molecule instance, or the Molecule instance <code>mol</code></th>
</tr>
</thead>
<tbody></tbody>
</table></div>

