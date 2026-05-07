---
title: "Xponge.analysis.md_analysis"
description: "SPONGE 1.4 的 Xponge API 文档。"
version: "SPONGE 1.4"
section: "Xponge 文档"
---

<h1 id="xpongeanalysismd_analysis"><a href="/docs/1p4/xponge#xpongeanalysismd_analysis">¶</a> Xponge.analysis.md_analysis</h1>
<p>This <strong>module</strong> gives functions and classes to use MDAnalysis to analyze the trajectories</p>
<h2 id="subpackages"><a href="/docs/1p4/xponge#subpackages">¶</a> subpackages</h2>
<h2 id="submodules"><a href="/docs/1p4/xponge#submodules">¶</a> submodules</h2>
<h2 id="functions"><a href="/docs/1p4/xponge#functions">¶</a> functions</h2>
<h3 id="open_trajectory"><a href="/docs/1p4/xponge#open_trajectory">¶</a> open_trajectory</h3>
<p>Open the trajectory file</p>
<div><table>
<thead>
<tr>
<th>return</th>
<th>trajectory file and box file</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h2 id="classes"><a href="/docs/1p4/xponge#classes">¶</a> classes</h2>
<h3 id="spongenonereader"><a href="/docs/1p4/xponge#spongenonereader">¶</a> SpongeNoneReader</h3>
<p>This <strong>class</strong> is used to give a universe with no coordinate</p>
<h4><a href="/docs/1p4/xponge#close">¶</a> close</h4>
<p>fake close function for api</p>
<h3 id="spongeinputreader"><a href="/docs/1p4/xponge#spongeinputreader">¶</a> SpongeInputReader</h3>
<p>This <strong>class</strong> is used to read the SPONGE input to mdanalysis</p>
<h4 id="parse"><a href="/docs/1p4/xponge#parse">¶</a> parse</h4>
<p>This <strong>function</strong> reads the file and returns the structure</p>
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
<td>keyword arguments</td>
</tr>
</tbody>
</table></div>
<div><table>
<thead>
<tr>
<th>return</th>
<th>MDAnalysis Topology object</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h3 id="xpongeresiduereader"><a href="/docs/1p4/xponge#xpongeresiduereader">¶</a> XpongeResidueReader</h3>
<p>This <strong>class</strong> is used to read the Xponge Residue or ResidueType to mdanalysis</p>
<h4 id="parse-1"><a href="/docs/1p4/xponge#parse-1">¶</a> parse</h4>
<p>This <strong>function</strong> reads the file and returns the structure</p>
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
<td>keyword arguments</td>
</tr>
</tbody>
</table></div>
<div><table>
<thead>
<tr>
<th>return</th>
<th>MDAnalysis Topology object</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h3 id="xpongemoleculereader"><a href="/docs/1p4/xponge#xpongemoleculereader">¶</a> XpongeMoleculeReader</h3>
<p>This <strong>class</strong> is used to read the Xponge Molecule to mdanalysis</p>
<h4 id="parse-2"><a href="/docs/1p4/xponge#parse-2">¶</a> parse</h4>
<p>This <strong>function</strong> reads the file and returns the structure</p>
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
<td>keyword arguments</td>
</tr>
</tbody>
</table></div>
<div><table>
<thead>
<tr>
<th>return</th>
<th>MDAnalysis Topology object</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h3 id="spongetrajectoryreader"><a href="/docs/1p4/xponge#spongetrajectoryreader">¶</a> SpongeTrajectoryReader</h3>
<p>This <strong>class</strong> is the interface to MDAnalysis.</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>dat_file_name</td>
<td>the name of the SPONGE dat trajectory file</td>
</tr>
<tr>
<td>box</td>
<td>the name of the box file or a list of 6 <code>int</code> or <code>float</code> representing the 3 box lengths and 3 box angles.</td>
</tr>
<tr>
<td>n_atoms</td>
<td>the number of atoms</td>
</tr>
</tbody>
</table></div>
<h4 id="n_frames"><a href="/docs/1p4/xponge#n_frames">¶</a> n_frames</h4>
<p>The total number of frames in the trajectory file</p>
<h4 id="n_atoms"><a href="/docs/1p4/xponge#n_atoms">¶</a> n_atoms</h4>
<p>The total number of atoms in the trajectory file</p>
<h4 id="with_arguments"><a href="/docs/1p4/xponge#with_arguments">¶</a> with_arguments</h4>
<p>This <strong>function</strong> binds the arguments to the reader to initialize</p>
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
<td>the arguments</td>
</tr>
</tbody>
</table></div>
<div><table>
<thead>
<tr>
<th>return</th>
<th>a subclass of SpongeTrajectoryReader</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h3 id="spongetrajectoryreaderwitharguments"><a href="/docs/1p4/xponge#spongetrajectoryreaderwitharguments">¶</a> SpongeTrajectoryReaderWithArguments</h3>
<h3 id="spongetrajectorywriter"><a href="/docs/1p4/xponge#spongetrajectorywriter">¶</a> SpongeTrajectoryWriter</h3>
<p>This <strong>class</strong> is used to write the SPONGE trajectory (xxx.dat and xxx.box)</p>
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
<td>the filename of the output files</td>
</tr>
<tr>
<td>write_box</td>
<td>whether to write the box file <strong>New From 1.2.7.0</strong></td>
</tr>
</tbody>
</table></div>
<h4><a href="/docs/1p4/xponge#open">¶</a> open</h4>
<p>This <strong>function</strong> opens the trajectory files</p>
<div><table>
<thead>
<tr>
<th>return</th>
<th>None</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h4 id="close-1"><a href="/docs/1p4/xponge#close-1">¶</a> close</h4>
<p>This <strong>function</strong> closes the trajectory files</p>
<div><table>
<thead>
<tr>
<th>return</th>
<th>None</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h4><a href="/docs/1p4/xponge#write">¶</a> write</h4>
<p>This <strong>function</strong> writes the coordinates of the Universe to the output files</p>
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
<td>an MDAnalysis.Universe instance</td>
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
<h3 id="spongecoordinatereader"><a href="/docs/1p4/xponge#spongecoordinatereader">¶</a> SpongeCoordinateReader</h3>
<p>This <strong>class</strong> is the interface to MDAnalysis.</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>file_name</td>
<td>the name of the SPONGE coordinate trajectory file</td>
</tr>
</tbody>
</table></div>
<h4 id="n_frames-1"><a href="/docs/1p4/xponge#n_frames-1">¶</a> n_frames</h4>
<p>The total number of frames in the trajectory file</p>
<h4 id="n_atoms-1"><a href="/docs/1p4/xponge#n_atoms-1">¶</a> n_atoms</h4>
<p>The total number of atoms in the trajectory file</p>
<h4 id="close-2"><a href="/docs/1p4/xponge#close-2">¶</a> close</h4>
<p>Close all the opened file</p>
<div><table>
<thead>
<tr>
<th>return</th>
<th>None</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h4 id="open_file"><a href="/docs/1p4/xponge#open_file">¶</a> open_file</h4>
<p>Open the coordinate file</p>
<div><table>
<thead>
<tr>
<th>return</th>
<th>trajectory file and box file</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h3 id="spongecoordinatewriter"><a href="/docs/1p4/xponge#spongecoordinatewriter">¶</a> SpongeCoordinateWriter</h3>
<p>This <strong>class</strong> is used to write the SPONGE coordinate file</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>file_name</td>
<td>the name of the output file</td>
</tr>
<tr>
<td>n_atoms</td>
<td>the total number of atoms this Timestep describes</td>
</tr>
</tbody>
</table></div>
<h4 id="open-1"><a href="/docs/1p4/xponge#open-1">¶</a> open</h4>
<p>This <strong>function</strong> opens the coordinate file</p>
<div><table>
<thead>
<tr>
<th>return</th>
<th>None</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h4 id="close-3"><a href="/docs/1p4/xponge#close-3">¶</a> close</h4>
<p>This <strong>function</strong> closes the coordinate file</p>
<div><table>
<thead>
<tr>
<th>return</th>
<th>None</th>
</tr>
</thead>
<tbody></tbody>
</table></div>
<h4 id="write-1"><a href="/docs/1p4/xponge#write-1">¶</a> write</h4>
<p>This <strong>function</strong> writes the coordinates of the Universe to the output files</p>
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
<td>an MDAnalysis.Universe instance</td>
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
<h3 id="spongeh5mdreader"><a href="/docs/1p4/xponge#spongeh5mdreader">¶</a> SPONGEH5MDReader</h3>
<p>This <strong>class</strong> is the interface to MDAnalysis.</p>
<div><table>
<thead>
<tr>
<th>parameters</th>
<th>explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>dat_file_name</td>
<td>the name of the SPONGE h5md trajectory file</td>
</tr>
<tr>
<td>n_atoms</td>
<td>the number of atoms</td>
</tr>
</tbody>
</table></div>
<h4 id="n_frames-2"><a href="/docs/1p4/xponge#n_frames-2">¶</a> n_frames</h4>
<p>The total number of frames in the trajectory file</p>
<h4 id="n_atoms-2"><a href="/docs/1p4/xponge#n_atoms-2">¶</a> n_atoms</h4>
<p>The total number of atoms in the trajectory file</p>
<h4 id="close-4"><a href="/docs/1p4/xponge#close-4">¶</a> close</h4>
<p>Close all the opened file</p>
<div><table>
<thead>
<tr>
<th>return</th>
<th>None</th>
</tr>
</thead>
<tbody></tbody>
</table></div>

