---
title: "Xponge.load"
description: "SPONGE 1.4 的 Xponge API 文档。"
version: "SPONGE 1.4"
section: "Xponge 文档"
---

<h1 id="xpongeload"><a href="/docs/1p4/xponge#xpongeload">¶</a> Xponge.load</h1>
<p>This <strong>module</strong> is used to load and read</p>
<h2 id="subpackages"><a href="/docs/1p4/xponge#subpackages">¶</a> subpackages</h2>
<h2 id="submodules"><a href="/docs/1p4/xponge#submodules">¶</a> submodules</h2>
<h2 id="functions"><a href="/docs/1p4/xponge#functions">¶</a> functions</h2>
<h3 id="load_mol2"><a href="/docs/1p4/xponge#load_mol2">¶</a> load_mol2</h3>
<p>This <strong>function</strong> is used to load a mol2 file</p>
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
<td>ignore_atom_type</td>
<td>ignore the atom types in the mol2 file</td>
</tr>
<tr>
<td>as_template</td>
<td>only read the mol2 file as some residue types and no molecule will created</td>
</tr>
</tbody>
</table></div>
<div><table>
<thead>
<tr>
<th>return</th>
<th>a Molecule instance if as_template is False</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h3 id="load_coordinate"><a href="/docs/1p4/xponge#load_coordinate">¶</a> load_coordinate</h3>
<p>This <strong>function</strong> is used to read the SPONGE coordinate in file</p>
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
<td>the coordinate file to load</td>
</tr>
<tr>
<td>mol</td>
<td>the molecule or residue to load the coordinate into</td>
</tr>
</tbody>
</table></div>
<div><table>
<thead>
<tr>
<th>return</th>
<th>two numpy arrays, representing the coordinates and the box information respectively</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h3 id="load_frcmod"><a href="/docs/1p4/xponge#load_frcmod">¶</a> load_frcmod</h3>
<p>This <strong>function</strong> is used to load a frcmod file</p>
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
<td>the name of the file to load</td>
</tr>
<tr>
<td>nbtype</td>
<td>the non-bonded interaction recording type in the frcmod file.</td>
</tr>
</tbody>
</table></div>
<div><table>
<thead>
<tr>
<th>return</th>
<th>a list of strings, including atoms, bonds, angles, propers, impropers, ljs, cmap information respectively</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h3 id="load_parmdat"><a href="/docs/1p4/xponge#load_parmdat">¶</a> load_parmdat</h3>
<p>This <strong>function</strong> is used to load a parmdat file</p>
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
<td>the name of the file to load</td>
</tr>
</tbody>
</table></div>
<div><table>
<thead>
<tr>
<th>return</th>
<th>a list of strings, including atoms, bonds, angles, propers, impropers, ljs, nb14s information respectively</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h3 id="load_rst7"><a href="/docs/1p4/xponge#load_rst7">¶</a> load_rst7</h3>
<p>This <strong>function</strong> is used to load a rst7 file</p>
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
<td>the name of the file to load</td>
</tr>
<tr>
<td>mol</td>
<td>the molecule to load the coordinates</td>
</tr>
</tbody>
</table></div>
<div><table>
<thead>
<tr>
<th>return</th>
<th>a tuple including coordinates and box information</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h3 id="load_molitp"><a href="/docs/1p4/xponge#load_molitp">¶</a> load_molitp</h3>
<p>This <strong>function</strong> is used to load a molitp file</p>
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
<td>the name of the file to load</td>
</tr>
<tr>
<td>water_replace</td>
<td>whether to change water to SPONGE. True as default.</td>
</tr>
<tr>
<td>head_prefix</td>
<td>a string, the prefix will be added to the name of the first residue of each molecule</td>
</tr>
<tr>
<td>tail_prefix</td>
<td>a string, the prefix will be added to the name of the last residue of each molecule</td>
</tr>
<tr>
<td>macros</td>
<td>the macros used to read the Gromacs topology file</td>
</tr>
</tbody>
</table></div>
<div><table>
<thead>
<tr>
<th>return</th>
<th>1. an Xponge.Molecule representing the systema. None if not define</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h3 id="load_gro"><a href="/docs/1p4/xponge#load_gro">¶</a> load_gro</h3>
<p>This <strong>function</strong> is used to read the GROMACS coordinate file</p>
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
<td>the coordinate file to load</td>
</tr>
<tr>
<td>mol</td>
<td>the molecule or residue to load the coordinate into</td>
</tr>
</tbody>
</table></div>
<div><table>
<thead>
<tr>
<th>return</th>
<th>two numpy arrays, representing the coordinates and the box information respectively</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h2 id="classes"><a href="/docs/1p4/xponge#classes">¶</a> classes</h2>
<h3 id="gromacstopologyiterator"><a href="/docs/1p4/xponge#gromacstopologyiterator">¶</a> GromacsTopologyIterator</h3>
<p>This <strong>class</strong> is used to read a GROMACS topology file</p>
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
<td>the name of the file to read</td>
</tr>
<tr>
<td>macros</td>
<td>the macros used to read the Gromacs topology file</td>
</tr>
</tbody>
</table></div>

