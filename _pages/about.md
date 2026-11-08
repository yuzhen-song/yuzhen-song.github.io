---
layout: about
title: About
permalink: /
nav: false
nav_order: 1

profile:
  align: right
  image: prof_pic.jpg
  image_circular: true
  more_info: >
    <div class="profile-contact-card" style="display: flex; flex-direction: column; align-items: center; margin-top: 0.95rem; color: #20251b; font-family: Inter, Helvetica Neue, Arial, sans-serif; line-height: 1.38; letter-spacing: -0.015em; text-align: center;">
      <div class="profile-contact-name" style="width: 100%; margin-bottom: 0.55rem; color: #20251b; font-size: 1.3rem; font-weight: 500; letter-spacing: -0.02em; text-align: center;">Yuzhen Song</div>
      <a class="profile-contact-email" href="mailto:yuzhen.song@berkeley.edu" style="display: block; width: 100%; color: #20251b; text-align: center; text-decoration: none; overflow-wrap: anywhere; font-size: 0.92rem; letter-spacing: -0.01em;">yuzhen.song@berkeley.edu</a>
    </div>

selected_papers: false
social: false
home_sections: true
---

<div class="about-intro">
  <p>
    Hello! I'm <strong>Yuzhen Song</strong>. My research focuses on
    <strong>Humanoid Locomotion and Whole-Body Control</strong>, <strong>Reinforcement Learning</strong>,
    and <strong>Sim-to-Real Transfer</strong>. I am <strong>passionate</strong> about advancing embodied intelligence 🤖 and hope to contribute to building
    agile, robust, and intelligent humanoid robots for the real world.
  </p>

  <p>
    I am a senior undergraduate student majoring in Robotics Engineering at
    <a class="about-link" href="https://www.sustech.edu.cn/">Southern University of Science and Technology</a>.
    I work with
    <a class="about-link" href="https://faculty.sustech.edu.cn/?tagid=fucl&iscss=1&snapid=1&orderby=date&go=2">Prof. Chenglong Fu</a>
    in the
    <a class="about-link" href="https://www.harlab.site/">Human Augmentation and Rehabilitation Laboratory (HAR Lab)</a>.
  </p>

  <p>
    I am also involved in a UC Berkeley collaboration with the
    <a class="about-link" href="https://msc.berkeley.edu/">Mechanical Systems Control Laboratory (MSC Lab)</a>,
    directed by
    <a class="about-link" href="https://me.berkeley.edu/people/masayoshi-tomizuka/">Prof. Masayoshi Tomizuka</a>,
    at
    <a class="about-link" href="https://www.berkeley.edu/">University of California, Berkeley</a>.
  </p>
  <p>I am currently applying for PhD programs starting in <strong>Fall 2027</strong>.</p>
</div>

<style>
.home-section {
  clear: both;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(143, 177, 98, 0.25);
  scroll-margin-top: 6rem;
}

.home-section h2 {
  margin: 0 0 1.5rem;
  font-size: 1.8rem;
  font-weight: 700;
}

.home-section-heading {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.home-section-heading h2 {
  margin-bottom: 0;
}

.home-project-item {
  display: grid;
  grid-template-columns: minmax(260px, 34%) 1fr;
  gap: 1.75rem;
  align-items: start;
  margin-bottom: 2rem;
}

.home-project-image img {
  width: 100%;
  height: 180px;
  object-fit: contain;
  background: #f5f5f1;
  border: 1px solid rgba(143, 177, 98, 0.2);
  border-radius: 8px;
}

.home-project-item h3 {
  margin: 0 0 0.65rem;
  font-size: 1.2rem;
  font-weight: 700;
}

.home-project-item h3 a {
  color: #8fb162;
}

.home-project-item p {
  line-height: 1.65;
}

.home-education-list {
  display: grid;
  gap: 2rem;
}

.home-education-item {
  display: grid;
  grid-template-columns: 108px minmax(0, 1fr);
  gap: 1.75rem;
  align-items: center;
}

.home-education-logo {
  width: 108px;
  height: 108px;
  object-fit: contain;
}

.home-education-info h3 {
  margin: 0 0 0.45rem;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.4;
}

.home-education-info p {
  margin: 0 0 0.2rem;
  line-height: 1.6;
}

.home-education-info .home-education-dates {
  margin: 0.4rem 0 0;
  color: var(--global-text-color-light);
  font-size: 0.95rem;
}

@media (max-width: 700px) {
  .home-project-item {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}

@media (max-width: 575px) {
  .home-education-item {
    grid-template-columns: 64px minmax(0, 1fr);
    gap: 1rem;
    align-items: start;
  }

  .home-education-logo {
    width: 64px;
    height: 64px;
  }

  .home-education-info h3 {
    font-size: 1.05rem;
  }
}

.profile-contact-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.95rem;
  color: #20251b;
  font-family: "Inter", "Helvetica Neue", Arial, sans-serif;
  line-height: 1.38;
  letter-spacing: -0.015em;
  text-align: center;
}

.profile-contact-name {
  margin-bottom: 0.55rem;
  color: #20251b;
  font-size: 1.3rem;
  font-weight: 500;
  letter-spacing: -0.02em;
}

.profile-contact-education {
  display: inline-block;
  margin: 0 auto 0.7rem;
  padding-left: 1rem;
  color: #333;
  text-align: left;
  font-size: 0.92rem;
  line-height: 1.45;
  letter-spacing: -0.01em;
}

.profile-contact-email {
  display: block;
  color: #20251b;
  text-decoration: none;
  overflow-wrap: anywhere;
  font-size: 0.92rem;
  letter-spacing: -0.01em;
}

.profile-contact-email:hover {
  color: #8fb162;
  text-decoration: underline;
}

.about-intro {
  margin-bottom: 2.3rem;
}

.about-intro p {
  margin-bottom: 1.1rem;
  line-height: 1.85;
}

.about-link {
  color: #8fb162 !important;
  font-weight: 400;
  text-decoration: underline !important;
  text-decoration-thickness: 1.5px;
  text-underline-offset: 2px;
}

.flow-hover-button {
  position: relative;
  z-index: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-width: 7.5rem;
  overflow: hidden;
  border: 1px solid #cbd5c0;
  border-radius: 0.375rem;
  background: #f0f4ec;
  padding: 0.55rem 1rem;
  color: #30372c !important;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  line-height: 1.25;
  text-decoration: none !important;
  transition: transform 0.5s ease, color 0.5s ease;
}

.flow-hover-button::before {
  position: absolute;
  z-index: -1;
  inset: 0;
  border-radius: 100%;
  background: #30372c;
  content: "";
  transform: translate(150%, 150%) scale(2.5);
  transition: transform 1s ease;
}

.flow-hover-button:hover,
.flow-hover-button:focus-visible {
  color: #f7faF4 !important;
  transform: scale(1.05);
}

.flow-hover-button:hover::before,
.flow-hover-button:focus-visible::before {
  transform: translate(0, 0) scale(2.5);
}

.flow-hover-button:active {
  transform: scale(0.95);
}

.flow-hover-button span {
  position: relative;
  z-index: 1;
}

@media (prefers-reduced-motion: reduce) {
  .flow-hover-button,
  .flow-hover-button::before {
    transition-duration: 0.01ms;
  }
}

@media (max-width: 768px) {
  .about-intro {
    margin-bottom: 1.8rem;
  }


}
</style>
