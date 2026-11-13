---
layout: page
permalink: /projects/abaqus-quadcopter/
title: Takeoff and Strength Analysis of a Quadcopter Frame using Abaqus
description: Finite element modeling of a quadcopter under takeoff loads, examining stress concentrations and displacement with Abaqus/Explicit.
img: assets/img/abaqus-quadcopter/overview.png
importance: 3
category: Course Projects
links:
  - name: Slides
    url: /assets/slides/abaqus-quadcopter.pptx
---

<div class="abaqus-project" markdown="1">

<p class="abaqus-meta"><strong>ME314 · Finite Element Theory</strong><br>Team: Yuzhen Song, Jiacan Li, and Jiayi Yan · Presentation: Yuzhen Song</p>

<p class="abaqus-resources">
  <a href="{{ '/assets/slides/abaqus-quadcopter.pptx' | relative_url }}" download>Download presentation <span aria-hidden="true">↗</span> <small>(PPTX · 18 MB)</small></a>
</p>

### Overview

How does a lightweight quadcopter frame respond as its motors generate lift? In this team project, we built an Abaqus finite element model to examine the load transfer from the motors to the central body during takeoff. The study connects geometry simplification, material assignment, assembly constraints, meshing, and dynamic analysis to the interpretation of stress and displacement fields.

<figure class="abaqus-figure">
  <img src="{{ '/assets/img/abaqus-quadcopter/geometry.png' | relative_url }}" alt="Quadcopter CAD assembly with four ribbed arms, motors, propellers, and a central battery housing" width="752" height="463" loading="lazy">
  <figcaption>The quadcopter assembly used to develop the structural model.</figcaption>
</figure>

### From geometry to a finite element model

- **Geometry and materials.** We simplified nonstructural details while retaining the frame, arm junctions, and motor supports. The model used carbon-fiber, PA66, and steel material assignments, with equivalent masses representing the battery and electronics.
- **Connections and propellers.** Tie constraints approximated bolted connections. Motor-axis reference points and kinematic couplings provided a consistent way to apply loads, while rigid-body idealizations simplified the thin propellers.
- **Mesh.** Modified quadratic tetrahedral elements (C3D10M) accommodated the irregular ribs and arm geometry, which made structured hexahedral meshing difficult.

<div class="abaqus-grid">
  <figure class="abaqus-figure">
    <a href="{{ '/assets/img/abaqus-quadcopter/mesh.png' | relative_url }}"><img src="{{ '/assets/img/abaqus-quadcopter/mesh.png' | relative_url }}" alt="Tetrahedral mesh of the quadcopter assembly" loading="lazy"></a>
    <figcaption>Assembly mesh. Click to view the original image.</figcaption>
  </figure>
  <figure class="abaqus-figure">
    <a href="{{ '/assets/img/abaqus-quadcopter/loading.png' | relative_url }}"><img src="{{ '/assets/img/abaqus-quadcopter/loading.png' | relative_url }}" alt="Abaqus assembly showing reference points and load and constraint markers at the four motors" loading="lazy"></a>
    <figcaption>Motor reference points and the loading setup.</figcaption>
  </figure>
</div>

### Takeoff loading and solver setup

Gravity acts on the assembly while upward thrust is prescribed at the motor reference points. An amplitude function introduces the loads gradually, and connector velocities represent motor rotation. Aerodynamic effects are represented by equivalent thrust loads.

The Abaqus setup uses **Dynamic, Explicit**, a **1.2 s** analysis period, and geometric nonlinearity. Mass scaling is applied to the whole model at the beginning of the step with a **target time increment of 1 × 10⁻⁵ s**.

### Stress and displacement

The stress contours highlight the arm-to-body junctions and rib transitions as regions of interest. These locations transfer the motor loads into the central frame and are candidates for local mesh refinement and structural reinforcement.

<figure class="abaqus-figure">
  <a href="{{ '/assets/img/abaqus-quadcopter/stress.png' | relative_url }}"><img src="{{ '/assets/img/abaqus-quadcopter/stress.png' | relative_url }}" alt="Von Mises stress contour at approximately 0.36 seconds, showing elevated stresses near the arm roots and rib transitions" loading="lazy"></a>
  <figcaption>Von Mises stress at approximately 0.36 s. The original contour legend and frame information are preserved.</figcaption>
</figure>

The displacement output complements the stress view by showing the assembly's motion during takeoff. The figure below displays the **U2 displacement component**, rather than displacement magnitude. Because the vehicle is moving, this field includes overall motion and should not be read as elastic arm deflection alone.

<figure class="abaqus-figure">
  <a href="{{ '/assets/img/abaqus-quadcopter/displacement.png' | relative_url }}"><img src="{{ '/assets/img/abaqus-quadcopter/displacement.png' | relative_url }}" alt="U2 displacement component of the quadcopter at approximately 0.36 seconds" loading="lazy"></a>
  <figcaption>U2 displacement at the same output frame. Click either result figure to inspect it at full resolution.</figcaption>
</figure>

### Simulation in motion

<figure class="abaqus-figure abaqus-animation">
  <img src="{{ '/assets/img/abaqus-quadcopter/takeoff.gif' | relative_url }}" alt="Animated Abaqus view of quadcopter takeoff with a von Mises stress contour" loading="lazy">
  <figcaption>Takeoff animation from the project materials. <a href="{{ '/assets/video/abaqus-quadcopter/takeoff.mp4' | relative_url }}">Watch the higher-resolution video</a>.</figcaption>
</figure>

### Takeaways and next steps

The project demonstrates a complete structural simulation workflow and identifies the arm junctions as a useful focus for further design work. The next steps are a mesh-convergence study around these junctions, a check of the influence of mass scaling, and material-specific strength assessment. These checks would be needed before drawing quantitative conclusions about safety margins or fatigue life.

</div>
