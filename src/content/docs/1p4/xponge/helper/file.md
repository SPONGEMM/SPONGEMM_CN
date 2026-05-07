---
title: "Xponge.helper.file"
description: "SPONGE 1.4 的 Xponge API 文档。"
version: "SPONGE 1.4"
section: "Xponge 文档"
---

<h1 id="xpongehelperfile"><a href="/docs/1p4/xponge#xpongehelperfile">¶</a> Xponge.helper.file</h1>
<p>This <strong>module</strong> helps to process the files of molecular modelling</p>
<h2 id="subpackages"><a href="/docs/1p4/xponge#subpackages">¶</a> subpackages</h2>
<h2 id="submodules"><a href="/docs/1p4/xponge#submodules">¶</a> submodules</h2>
<h2 id="functions"><a href="/docs/1p4/xponge#functions">¶</a> functions</h2>
<h3 id="file_filter"><a href="/docs/1p4/xponge#file_filter">¶</a> file_filter</h3>
<p>This <strong>function</strong> finds the lines which contains any of the given regular expressions and replace some parts.</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>infile</td>
<td>the input file or filename</td>
</tr>
<tr>
<td>outfile</td>
<td>the output file or filename</td>
</tr>
<tr>
<td>reg_exp</td>
<td>a list of regular expressions. Lines which match any regular expressions will be kept.</td>
</tr>
<tr>
<td>replace_dict</td>
<td>a dict of regular expressions and the replacement</td>
</tr>
</tbody>
</table></div>
<h3 id="pdb_filter"><a href="/docs/1p4/xponge#pdb_filter">¶</a> pdb_filter</h3>
<p>This <strong>function</strong> finds the lines in pdb which meets the need</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>infile</td>
<td>the input file or filename</td>
</tr>
<tr>
<td>outfile</td>
<td>the output file or filename</td>
</tr>
<tr>
<td>head</td>
<td>a list of heads which will be included</td>
</tr>
<tr>
<td>hetero_residues</td>
<td>a list of hetero residue names which will be included</td>
</tr>
<tr>
<td>chains</td>
<td>a list of the code for the chains you need. None for all (default).</td>
</tr>
<tr>
<td>rename_ions</td>
<td>a dict to rename the ions</td>
</tr>
</tbody>
</table></div>

