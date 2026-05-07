---
title: "Xponge.helper.math"
description: "SPONGE 1.4 的 Xponge API 文档。"
version: "SPONGE 1.4"
section: "Xponge 文档"
---

<h1 id="xpongehelpermath"><a href="/docs/1p4/xponge#xpongehelpermath">¶</a> Xponge.helper.math</h1>
<p>This <strong>module</strong> is used to provide basic common math functions</p>
<h2 id="subpackages"><a href="/docs/1p4/xponge#subpackages">¶</a> subpackages</h2>
<h2 id="submodules"><a href="/docs/1p4/xponge#submodules">¶</a> submodules</h2>
<h2 id="functions"><a href="/docs/1p4/xponge#functions">¶</a> functions</h2>
<h3 id="get_rotate_matrix"><a href="/docs/1p4/xponge#get_rotate_matrix">¶</a> get_rotate_matrix</h3>
<p>This <strong>function</strong> is used to get the rotation matrix by the axis and the angle</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>r0</td>
<td>the axis to rotate around</td>
</tr>
<tr>
<td>angle</td>
<td>the angle to rotate</td>
</tr>
</tbody>
</table></div>
<div><table>
<thead>
<tr>
<th>return</th>
<th>the rotation matrix</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h3 id="kabsch"><a href="/docs/1p4/xponge#kabsch">¶</a> kabsch</h3>
<p>This <strong>function</strong> uses Kabsch algorithm to align two sets of positions</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>positions1</td>
<td>the first set of positions, a numpy array with shape (N,3)</td>
</tr>
<tr>
<td>positions2</td>
<td>the second set of positions, a numpy array with shape (N,3)</td>
</tr>
</tbody>
</table></div>
<div><table>
<thead>
<tr>
<th>return</th>
<th>a tuple of 3 numpy arrays</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h3 id="get_fibonacci_grid"><a href="/docs/1p4/xponge#get_fibonacci_grid">¶</a> get_fibonacci_grid</h3>
<p>This <strong>function</strong> is used to get the sphere grid by fibonacci algorithm</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>n</td>
<td>the number of grids</td>
</tr>
<tr>
<td>origin</td>
<td>the origin of the sphere</td>
</tr>
<tr>
<td>radius</td>
<td>the radius of the sphere</td>
</tr>
</tbody>
</table></div>
<div><table>
<thead>
<tr>
<th>return</th>
<th>a numpy array of grid coordinates</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h3 id="guess_element_from_mass"><a href="/docs/1p4/xponge#guess_element_from_mass">¶</a> guess_element_from_mass</h3>
<p>This <strong>function</strong> is used to guess element from its mass</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>mass</td>
<td>an int or a float, the mass</td>
</tr>
</tbody>
</table></div>
<div><table>
<thead>
<tr>
<th>return</th>
<th>the element name</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h3 id="get_basis_vectors_from_length_and_angle"><a href="/docs/1p4/xponge#get_basis_vectors_from_length_and_angle">¶</a> get_basis_vectors_from_length_and_angle</h3>
<p>This <strong>function</strong> is used to get the basis vectors from the cell lengths and cell angles.</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>a</td>
<td>the length of the first basis vector</td>
</tr>
<tr>
<td>b</td>
<td>the length of the second basis vector</td>
</tr>
<tr>
<td>c</td>
<td>the length of the third basis vector</td>
</tr>
<tr>
<td>alpha</td>
<td>the angle between the second and the third basis vectors</td>
</tr>
<tr>
<td>beta</td>
<td>the angle between the first and the third basis vectors</td>
</tr>
<tr>
<td>gamma</td>
<td>the angle between the first and the second basis vectors</td>
</tr>
<tr>
<td>angle_in_degree</td>
<td>whether the unit of the angles is degree, True for default.</td>
</tr>
</tbody>
</table></div>
<div><table>
<thead>
<tr>
<th>return</th>
<th>a 3x3 numpy array, and every row is one basis vector</th>
</tr>
</thead>
<tbody></tbody>
</table></div>

