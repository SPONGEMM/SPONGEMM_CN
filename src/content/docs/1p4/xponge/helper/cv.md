---
title: "Xponge.helper.cv"
description: "SPONGE 1.4 的 Xponge API 文档。"
version: "SPONGE 1.4"
section: "Xponge 文档"
---

<h1 id="xpongehelpercv"><a href="/docs/1p4/xponge#xpongehelpercv">¶</a> <a class="is-external-link" href="http://Xponge.helper.cv">Xponge.helper.cv</a></h1>
<p>This <strong>module</strong> helps with the definition of CVs in SPONGE</p>
<h2 id="subpackages"><a href="/docs/1p4/xponge#subpackages">¶</a> subpackages</h2>
<h2 id="submodules"><a href="/docs/1p4/xponge#submodules">¶</a> submodules</h2>
<h2 id="functions"><a href="/docs/1p4/xponge#functions">¶</a> functions</h2>
<h3 id="to_string"><a href="/docs/1p4/xponge#to_string">¶</a> to_string</h3>
<p>convert this information to a string</p>
<h3 id="to_string-1"><a href="/docs/1p4/xponge#to_string-1">¶</a> to_string</h3>
<p>convert this information to a string</p>
<h3 id="to_string-2"><a href="/docs/1p4/xponge#to_string-2">¶</a> to_string</h3>
<p>convert this information to a string</p>
<h2 id="classes"><a href="/docs/1p4/xponge#classes">¶</a> classes</h2>
<h3 id="cvsystem"><a href="/docs/1p4/xponge#cvsystem">¶</a> CVSystem</h3>
<p>This <strong>class</strong> is used to help with the definition of CVs in SPONGE</p>
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
<td>the molecule to define the CVs</td>
</tr>
</tbody>
</table></div>
<h4 id="u"><a href="/docs/1p4/xponge#u">¶</a> u</h4>
<p>the MDAnalysis.Universe of the molecule</p>
<h4 id="id2index"><a href="/docs/1p4/xponge#id2index">¶</a> id2index</h4>
<p>the MDAnalysis.Universe of the molecule</p>
<h4 id="get_atom_index"><a href="/docs/1p4/xponge#get_atom_index">¶</a> get_atom_index</h4>
<p>Convert an Xponge.Atom to int</p>
<h4><a href="/docs/1p4/xponge#remove">¶</a> remove</h4>
<p>Remove a name from the system</p>
<h4 id="add_center"><a href="/docs/1p4/xponge#add_center">¶</a> add_center</h4>
<p>Add a virtual atom with the type of "center" to the system</p>
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
<td>the name of the virtual atom</td>
</tr>
<tr>
<td>select</td>
<td>a selection string of MDAnalysis</td>
</tr>
<tr>
<td>weight</td>
<td>weight of the atoms, None for 1/N</td>
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
<h4 id="add_cv_position"><a href="/docs/1p4/xponge#add_cv_position">¶</a> add_cv_position</h4>
<p>Add a CV with the type of "position" to the system</p>
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
<td>the name of the CV</td>
</tr>
<tr>
<td>atom</td>
<td>an int or a name of virtual atom</td>
</tr>
<tr>
<td>xyz</td>
<td>the axis of the position</td>
</tr>
<tr>
<td>scaled</td>
<td>whether the posithion need to be scaled</td>
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
<h4 id="add_cv_distance"><a href="/docs/1p4/xponge#add_cv_distance">¶</a> add_cv_distance</h4>
<p>Add a CV with the type of "distance" to the system</p>
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
<td>the name of the CV</td>
</tr>
<tr>
<td>atom1</td>
<td>an int or a name of virtual atom</td>
</tr>
<tr>
<td>atom2</td>
<td>an int or a name of virtual atom</td>
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
<h4 id="add_cv_displacement"><a href="/docs/1p4/xponge#add_cv_displacement">¶</a> add_cv_displacement</h4>
<p>Add a CV with the type of "displacement" to the system</p>
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
<td>the name of the CV</td>
</tr>
<tr>
<td>atom1</td>
<td>an int or a name of virtual atom</td>
</tr>
<tr>
<td>atom2</td>
<td>an int or a name of virtual atom</td>
</tr>
<tr>
<td>xyz</td>
<td>the axis of the position</td>
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
<h4 id="add_cv_box_length"><a href="/docs/1p4/xponge#add_cv_box_length">¶</a> add_cv_box_length</h4>
<p>Add a CV with the type of "box_length" to the system</p>
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
<td>the name of the CV</td>
</tr>
<tr>
<td>xyz</td>
<td>the axis of the position</td>
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
<h4 id="add_cv_density"><a href="/docs/1p4/xponge#add_cv_density">¶</a> add_cv_density</h4>
<p>Add a CV with the type of "combination" to the system, which gives the density of the system</p>
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
<td>the name of the CV</td>
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
<h4 id="add_cv_angle"><a href="/docs/1p4/xponge#add_cv_angle">¶</a> add_cv_angle</h4>
<p>Add a CV with the type of "angle" to the system</p>
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
<td>the name of the CV</td>
</tr>
<tr>
<td>atom1</td>
<td>an int or a name of virtual atom</td>
</tr>
<tr>
<td>atom2</td>
<td>an int or a name of virtual atom</td>
</tr>
<tr>
<td>atom3</td>
<td>an int or a name of virtual atom</td>
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
<h4 id="add_cv_dihedral"><a href="/docs/1p4/xponge#add_cv_dihedral">¶</a> add_cv_dihedral</h4>
<p>Add a CV with the type of "dihedral" to the system</p>
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
<td>the name of the CV</td>
</tr>
<tr>
<td>atom1</td>
<td>an int or a name of virtual atom</td>
</tr>
<tr>
<td>atom2</td>
<td>an int or a name of virtual atom</td>
</tr>
<tr>
<td>atom3</td>
<td>an int or a name of virtual atom</td>
</tr>
<tr>
<td>atom4</td>
<td>an int or a name of virtual atom</td>
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
<h4 id="add_cv_rmsd"><a href="/docs/1p4/xponge#add_cv_rmsd">¶</a> add_cv_rmsd</h4>
<p>Add a CV with the type of "displacement" to the system</p>
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
<td>the name of the CV</td>
</tr>
<tr>
<td>select</td>
<td>a string of selection</td>
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
<h4 id="print"><a href="/docs/1p4/xponge#print">¶</a> print</h4>
<p>Add a CV to print</p>
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
<td>the name of the CV</td>
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
<h4 id="steer"><a href="/docs/1p4/xponge#steer">¶</a> steer</h4>
<p>Add a CV to steer</p>
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
<td>the name of the CV</td>
</tr>
<tr>
<td>weight</td>
<td>the weight for steering</td>
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
<h4 id="restrain"><a href="/docs/1p4/xponge#restrain">¶</a> restrain</h4>
<p>Add a CV to restrain</p>
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
<td>the name of the CV</td>
</tr>
<tr>
<td>weight</td>
<td>the weight for restraints</td>
</tr>
<tr>
<td>reference</td>
<td>the reference for restraints</td>
</tr>
<tr>
<td>start_step</td>
<td>the step to start the restraints</td>
</tr>
<tr>
<td>max_step</td>
<td>the step to reach the max weight of restraints</td>
</tr>
<tr>
<td>max_step</td>
<td>the step to reduce the weight of restraints</td>
</tr>
<tr>
<td>stop_step</td>
<td>the step to stop the restraints</td>
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
<h4 id="meta1d"><a href="/docs/1p4/xponge#meta1d">¶</a> meta1d</h4>
<p>Add a CV to do metadynamics</p>
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
<td>the name of the CV</td>
</tr>
<tr>
<td>dCV</td>
<td>the weight for meta1d</td>
</tr>
<tr>
<td>CV_minimal</td>
<td>the minimal value of the CV</td>
</tr>
<tr>
<td>CV_maximum</td>
<td>the maximum value of the CV</td>
</tr>
<tr>
<td>welltemp_factor</td>
<td>the welltemfactor value of the CV</td>
</tr>
<tr>
<td>height</td>
<td>the height of the Gaussian potential to add</td>
</tr>
<tr>
<td>sigma</td>
<td>the sigma of the Gaussian potential to add</td>
</tr>
</tbody>
</table></div>
<h4 id="output"><a href="/docs/1p4/xponge#output">¶</a> output</h4>
<p>Output the recorded system to a file</p>
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
<td>the name of the output file for cv_in_file</td>
</tr>
<tr>
<td>folder</td>
<td>the folder of the output files, the current working folder for default</td>
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

