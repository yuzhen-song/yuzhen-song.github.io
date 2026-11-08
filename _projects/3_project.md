---
layout: page
title: Underactuated Metamorphic Palm Simulation
description: Modeling a closed-loop, five-link palm for a three-fingered hand in Isaac Sim and Webots, with loop-closure constraints, mesh optimization, and reconfiguration stability analysis.
img: assets/img/webots.gif
importance: 3
category: Research Projects
---

I built Isaac Sim and Webots environments for an underactuated metamorphic palm with a closed-loop five-link mechanism for a three-fingered hand. My work focused on modeling loop-closure constraints, simplifying meshes to enable simulation on an 8 GB GPU, and investigating instability during palm reconfiguration in preparation for preliminary reinforcement learning experiments.

### Simulation Demos

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <img src="{{ '/assets/img/Isaacsim.gif' | relative_url }}" class="img-fluid rounded z-depth-1" alt="Isaac Sim">
    </div>
</div>
<div class="caption">
    Simulation of the metamorphic palm's closed-loop mechanism in <b>NVIDIA Isaac Sim</b>.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <img src="{{ '/assets/img/webots.gif' | relative_url }}" class="img-fluid rounded z-depth-1" alt="Webots">
    </div>
</div>
<div class="caption">
    Simulation of the metamorphic palm's closed-loop mechanism in <b>Webots</b>.
</div>

### Work Done

- **Closed-Loop Modeling:** Added loop-closure constraints to the URDF models and built Isaac Sim and Webots environments for preliminary reinforcement learning experiments.
- **Mesh Optimization:** Simplified meshes while preserving geometry at contact regions, resolving GPU memory failures and enabling simulation on an 8 GB GPU.
- **Reconfiguration Stability:** Analyzed joint constraints and tuned damping, stiffness, and friction to investigate instability during palm reconfiguration and identify limitations in simulation fidelity.
