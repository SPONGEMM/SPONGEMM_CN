---
title: "Xponge.forcefield.amber"
description: "SPONGE 1.4 的 Xponge API 文档。"
version: "SPONGE 1.4"
section: "Xponge 文档"
---

<h1 id="xpongeforcefieldamber"><a href="/docs/1p4/xponge#xpongeforcefieldamber">¶</a> Xponge.forcefield.amber</h1>
<p>This <strong>package</strong> sets the basic configuration of amber force field</p>
<h2 id="subpackages"><a href="/docs/1p4/xponge#subpackages">¶</a> subpackages</h2>
<h3 id="xpongeforcefieldamberglycam_06j"><a href="/docs/1p4/xponge#xpongeforcefieldamberglycam_06j">¶</a> <a class="is-internal-link is-valid-page" href="/docs/1p4/xponge/forcefield/amber/glycam_06j">Xponge.forcefield.amber.glycam_06j</a></h3>
<h2 id="submodules"><a href="/docs/1p4/xponge#submodules">¶</a> submodules</h2>
<h3 id="xpongeforcefieldamberbsc1"><a href="/docs/1p4/xponge#xpongeforcefieldamberbsc1">¶</a> <a class="is-internal-link is-valid-page" href="/docs/1p4/xponge/forcefield/amber/bsc1">Xponge.forcefield.amber.bsc1</a></h3>
<h3 id="xpongeforcefieldamberff14sb"><a href="/docs/1p4/xponge#xpongeforcefieldamberff14sb">¶</a> <a class="is-internal-link is-valid-page" href="/docs/1p4/xponge/forcefield/amber/ff14sb">Xponge.forcefield.amber.ff14sb</a></h3>
<h3 id="xpongeforcefieldamberff19sb"><a href="/docs/1p4/xponge#xpongeforcefieldamberff19sb">¶</a> <a class="is-internal-link is-valid-page" href="/docs/1p4/xponge/forcefield/amber/ff19sb">Xponge.forcefield.amber.ff19sb</a></h3>
<h3 id="xpongeforcefieldambergaff"><a href="/docs/1p4/xponge#xpongeforcefieldambergaff">¶</a> <a class="is-internal-link is-valid-page" href="/docs/1p4/xponge/forcefield/amber/gaff">Xponge.forcefield.amber.gaff</a></h3>
<h3 id="xpongeforcefieldamberlipid14"><a href="/docs/1p4/xponge#xpongeforcefieldamberlipid14">¶</a> <a class="is-internal-link is-valid-page" href="/docs/1p4/xponge/forcefield/amber/lipid14">Xponge.forcefield.amber.lipid14</a></h3>
<h3 id="xpongeforcefieldamberlipid17"><a href="/docs/1p4/xponge#xpongeforcefieldamberlipid17">¶</a> <a class="is-internal-link is-valid-page" href="/docs/1p4/xponge/forcefield/amber/lipid17">Xponge.forcefield.amber.lipid17</a></h3>
<h3 id="xpongeforcefieldamberol15"><a href="/docs/1p4/xponge#xpongeforcefieldamberol15">¶</a> <a class="is-internal-link is-valid-page" href="/docs/1p4/xponge/forcefield/amber/ol15">Xponge.forcefield.amber.ol15</a></h3>
<h3 id="xpongeforcefieldamberol3"><a href="/docs/1p4/xponge#xpongeforcefieldamberol3">¶</a> <a class="is-internal-link is-valid-page" href="/docs/1p4/xponge/forcefield/amber/ol3">Xponge.forcefield.amber.ol3</a></h3>
<h3 id="xpongeforcefieldamberopc"><a href="/docs/1p4/xponge#xpongeforcefieldamberopc">¶</a> <a class="is-internal-link is-valid-page" href="/docs/1p4/xponge/forcefield/amber/opc">Xponge.forcefield.amber.opc</a></h3>
<h3 id="xpongeforcefieldamberrsff2c"><a href="/docs/1p4/xponge#xpongeforcefieldamberrsff2c">¶</a> <a class="is-internal-link is-invalid-page" href="/docs/1p4/xponge/forcefield/amber/rsff2c">Xponge.forcefield.amber.rsff2c</a></h3>
<h3 id="xpongeforcefieldamberspce"><a href="/docs/1p4/xponge#xpongeforcefieldamberspce">¶</a> <a class="is-internal-link is-invalid-page" href="/docs/1p4/xponge/forcefield/amber/spce">Xponge.forcefield.amber.spce</a></h3>
<h3 id="xpongeforcefieldambertip3p"><a href="/docs/1p4/xponge#xpongeforcefieldambertip3p">¶</a> <a class="is-internal-link is-invalid-page" href="/docs/1p4/xponge/forcefield/amber/tip3p">Xponge.forcefield.amber.tip3p</a></h3>
<h3 id="xpongeforcefieldambertip4p"><a href="/docs/1p4/xponge#xpongeforcefieldambertip4p">¶</a> <a class="is-internal-link is-invalid-page" href="/docs/1p4/xponge/forcefield/amber/tip4p">Xponge.forcefield.amber.tip4p</a></h3>
<h3 id="xpongeforcefieldambertip4pew"><a href="/docs/1p4/xponge#xpongeforcefieldambertip4pew">¶</a> <a class="is-internal-link is-invalid-page" href="/docs/1p4/xponge/forcefield/amber/tip4pew">Xponge.forcefield.amber.tip4pew</a></h3>
<h2 id="functions"><a href="/docs/1p4/xponge#functions">¶</a> functions</h2>
<h3 id="load_parameters_from_parmdat"><a href="/docs/1p4/xponge#load_parameters_from_parmdat">¶</a> load_parameters_from_parmdat</h3>
<p>This <strong>function</strong> is used to get amber force field parameters from parmdat files</p>
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
<td>the name of the input file</td>
</tr>
<tr>
<td>prefix</td>
<td>whether add the AMBER_DATA_DIR to the filename</td>
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
<h3 id="load_parameters_from_frcmod"><a href="/docs/1p4/xponge#load_parameters_from_frcmod">¶</a> load_parameters_from_frcmod</h3>
<p>This <strong>function</strong> is used to get amber force field parameters from frcmod files</p>
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
<td>the name of the input file</td>
</tr>
<tr>
<td>include_cmap</td>
<td>whether include cmap</td>
</tr>
<tr>
<td>prefix</td>
<td>whether add the AMBER_DATA_DIR to the filename</td>
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
<h3 id="cmap_same_force"><a href="/docs/1p4/xponge#cmap_same_force">¶</a> cmap_same_force</h3>
<p>This <strong>function</strong> is used to return the same force type for an atom list</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>_</td>
<td></td>
</tr>
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

