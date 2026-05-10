---
title: "Xponge.analysis.sasa"
description: "SPONGE 1.4 的 Xponge API 文档。"
version: "SPONGE 1.4"
section: "Xponge 文档"
---

<h1 id="xpongeanalysissasa"><a href="/docs/1p4/xponge#xpongeanalysissasa">¶</a> Xponge.analysis.sasa</h1>
<p>This <strong>module</strong> implements the SASA calculation</p>
<h2 id="subpackages"><a href="/docs/1p4/xponge#subpackages">¶</a> subpackages</h2>
<h2 id="submodules"><a href="/docs/1p4/xponge#submodules">¶</a> submodules</h2>
<h2 id="functions"><a href="/docs/1p4/xponge#functions">¶</a> functions</h2>
<h2 id="classes"><a href="/docs/1p4/xponge#classes">¶</a> classes</h2>
<h3 id="sasa"><a href="/docs/1p4/xponge#sasa">¶</a> SASA</h3>
<p>This <strong>class</strong> implements the SASA calculation</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>u</td>
<td>the instance of the MDAnalysis universe</td>
</tr>
<tr>
<td>r_probe</td>
<td>radius of the probe</td>
</tr>
<tr>
<td>n_points</td>
<td>resolution of the surface of each atom</td>
</tr>
<tr>
<td>radii_dict</td>
<td>dict of atomic radii to update the default RADII dict</td>
</tr>
<tr>
<td>r_atoms</td>
<td>if specify, the atomic radii will directly use the value here instead of looking up in radii_dict.</td>
</tr>
</tbody>
</table></div>
<h4 id="main"><a href="/docs/1p4/xponge#main">¶</a> main</h4>
<p>This <strong>function</strong> does the real calculation.</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>need_area</td>
<td>whether keep the area. If True, the surface will stored in self.surface_area</td>
</tr>
<tr>
<td>need_surface</td>
<td>whether need the surface. If True, the surface will stored in self.surface</td>
</tr>
</tbody>
</table></div>
<h4 id="write_surface_xyz"><a href="/docs/1p4/xponge#write_surface_xyz">¶</a> write_surface_xyz</h4>
<p>This <strong>function</strong> writes the surface information to a file</p>
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
<td>headlines</td>
<td>whether the headlines and fake elements are written to the file</td>
</tr>
</tbody>
</table></div>
<h4 id="get_sasa_result"><a href="/docs/1p4/xponge#get_sasa_result">¶</a> get_sasa_result</h4>
<p>This <strong>function</strong> gets the sasa result</p>
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
<td>the sasa  sum of the selected atoms</td>
</tr>
</tbody>
</table></div>

