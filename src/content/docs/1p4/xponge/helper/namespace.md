---
title: "Xponge.helper.namespace"
description: "SPONGE 1.4 的 Xponge API 文档。"
version: "SPONGE 1.4"
section: "Xponge 文档"
---

<h1 id="xpongehelpernamespace"><a href="/docs/1p4/xponge#xpongehelpernamespace">¶</a> Xponge.helper.namespace</h1>
<p>This <strong>module</strong> is used to provide help functions and classes about namespace</p>
<h2 id="subpackages"><a href="/docs/1p4/xponge#subpackages">¶</a> subpackages</h2>
<h2 id="submodules"><a href="/docs/1p4/xponge#submodules">¶</a> submodules</h2>
<h2 id="functions"><a href="/docs/1p4/xponge#functions">¶</a> functions</h2>
<h3 id="source"><a href="/docs/1p4/xponge#source">¶</a> source</h3>
<p>This <strong>function</strong> import the module and merge all the global variables into the caller module globals().</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>module</td>
<td>the module name to import</td>
</tr>
<tr>
<td>into_global</td>
<td>whether to merge the global variables</td>
</tr>
<tr>
<td>reload_module</td>
<td>whether to reload the module</td>
</tr>
</tbody>
</table></div>
<div><table>
<thead>
<tr>
<th>return</th>
<th>the module to import</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h3 id="set_real_global_variable"><a href="/docs/1p4/xponge#set_real_global_variable">¶</a> set_real_global_variable</h3>
<p>This <strong>function</strong> is used to set the variable to real global variable</p>
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
<td>the name to the use as a global variable</td>
</tr>
<tr>
<td>value</td>
<td>the value corresponding to the variable</td>
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
<h3 id="remove_real_global_variable"><a href="/docs/1p4/xponge#remove_real_global_variable">¶</a> remove_real_global_variable</h3>
<p>This <strong>function</strong> is used to remove the variable from real global variable</p>
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
<td>the global variable to remove</td>
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
<h3 id="set_alternative_name"><a href="/docs/1p4/xponge#set_alternative_name">¶</a> set_alternative_name</h3>
<p>This <strong>function</strong> is used to set the alternative names for a function to an object.</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>obj</td>
<td>the object</td>
</tr>
<tr>
<td>func</td>
<td>the function</td>
</tr>
<tr>
<td>set_method</td>
<td>the method to set</td>
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
<h3 id="set_classmethod_alternative_names"><a href="/docs/1p4/xponge#set_classmethod_alternative_names">¶</a> set_classmethod_alternative_names</h3>
<p>This <strong>function</strong> is used to set the attribute/method alternative names for a class</p>
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
<td>the class to set alternative names</td>
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
<h3 id="set_attribute_alternative_names"><a href="/docs/1p4/xponge#set_attribute_alternative_names">¶</a> set_attribute_alternative_names</h3>
<p>.. deprecated:: 1.3.1</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>instance</td>
<td>the instance to set names</td>
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
<h3 id="set_global_alternative_names"><a href="/docs/1p4/xponge#set_global_alternative_names">¶</a> set_global_alternative_names</h3>
<p>This <strong>function</strong> is used to set the alternative names of the functions in the module to be global</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>real_global</td>
<td>make the variable to real global, which can be used without the module name</td>
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

