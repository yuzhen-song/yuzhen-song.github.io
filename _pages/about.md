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
social: true
---

<section class="hero" data-reveal>
  <p class="hero-eyebrow">Humanoid Robotics · Embodied Intelligence</p>
  <h1 class="hero-title">Building agile humanoids<br>that survive the real world.</h1>
  <p class="hero-lede">
    Hello! I'm <strong>Yuzhen Song</strong> 🤖 — I work on
    <strong>Humanoid Locomotion and Whole-Body Control</strong>, <strong>Reinforcement Learning</strong>,
    and <strong>Sim-to-Real Transfer</strong>, with one goal: robots that walk out of simulation and into real life.
  </p>
  <div class="research-tags" aria-label="Research interests">
    <span>Humanoid Locomotion</span>
    <span>Whole-Body Control</span>
    <span>Reinforcement Learning</span>
    <span>Sim-to-Real Transfer</span>
  </div>
  <div class="hero-cta">
    <a href="{{ '/assets/pdf/cv.pdf' | relative_url }}" target="_blank" rel="noopener" class="hero-btn primary">Download CV</a>
    <a href="{{ '/projects/' | relative_url }}" class="hero-btn">View Projects →</a>
    <a href="mailto:yuzhen.song@berkeley.edu" class="hero-btn ghost">Email Me</a>
  </div>
  <dl class="hero-meta">
    <div><dt>Now</dt><dd>Senior undergrad, Robotics @ SUSTech</dd></div>
    <div><dt>Lab</dt><dd>HAR Lab · Prof. Chenglong Fu</dd></div>
    <div><dt>Also</dt><dd>UC Berkeley MSC Lab collaboration</dd></div>
    <div><dt>Next</dt><dd>2027 Fall PhD applicant</dd></div>
  </dl>
</section>

<div class="about-intro">
  <p data-reveal>
    I am a senior undergraduate student majoring in Robotics Engineering at
    <a class="about-link" href="https://www.sustech.edu.cn/">Southern University of Science and Technology</a>.
    I work with
    <a class="about-link" href="https://faculty.sustech.edu.cn/?tagid=fucl&iscss=1&snapid=1&orderby=date&go=2">Prof. Chenglong Fu</a>
    in the
    <a class="about-link" href="https://www.harlab.site/">Human Augmentation and Rehabilitation Laboratory (HAR Lab)</a>.
  </p>

  <p data-reveal>
    I am also involved in a UC Berkeley collaboration with the
    <a class="about-link" href="https://msc.berkeley.edu/">Mechanical Systems Control Laboratory (MSC Lab)</a>,
    directed by
    <a class="about-link" href="https://me.berkeley.edu/people/masayoshi-tomizuka/">Prof. Masayoshi Tomizuka</a>,
    at
    <a class="about-link" href="https://www.berkeley.edu/">University of California, Berkeley</a>.
  </p>
</div>

<hr class="about-divider">

<div class="about-phd" data-reveal>
  <h3>Applying for 2027 Fall PhD Programs</h3>
  <p>I am currently applying for PhD programs starting in Fall 2027. Feel free to reach out for collaborations or research opportunities.</p>
</div>

<div class="about-actions" aria-label="Quick links">
  <a href="{{ '/assets/pdf/cv.pdf' | relative_url }}" target="_blank" rel="noopener" class="flow-hover-button">Download CV</a>
  <a href="mailto:yuzhen.song@berkeley.edu" class="flow-hover-button">Email Me</a>
</div>

<script>
(function () {
  var els = document.querySelectorAll('[data-reveal]');
  if (!('IntersectionObserver' in window)) return;
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('revealed');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(function (el) { io.observe(el); });
})();
</script>

<style>
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

.hero {
  margin: 0.5rem 0 2rem;
  padding: 1.75rem 1.75rem 1.5rem;
  border: 1px solid rgba(143, 177, 98, 0.28);
  border-radius: 22px;
  background:
    radial-gradient(1200px 300px at 10% -10%, rgba(143, 177, 98, 0.18), transparent 60%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.75), rgba(248, 250, 244, 0.6));
  box-shadow: 0 18px 45px rgba(48, 55, 44, 0.08);
}

.hero-eyebrow {
  margin-bottom: 0.6rem;
  color: #6d8a52;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.hero-title {
  margin-bottom: 0.9rem;
  color: #20251b;
  font-size: clamp(2rem, 4.5vw, 3.1rem);
  font-weight: 850;
  line-height: 1.08;
  letter-spacing: -0.03em;
}

.hero-lede {
  max-width: 44rem;
  font-size: 1.06rem;
  line-height: 1.85;
}

.hero-cta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin: 1.1rem 0 1.25rem;
}

.hero-btn {
  display: inline-flex;
  align-items: center;
  border: 1px solid #cbd5c0;
  border-radius: 999px;
  background: #f0f4ec;
  padding: 0.55rem 1.1rem;
  color: #30372c !important;
  font-size: 0.82rem;
  font-weight: 750;
  text-decoration: none !important;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.hero-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 22px rgba(48, 55, 44, 0.14);
}

.hero-btn.primary {
  border-color: #30372c;
  background: #30372c;
  color: #f7faf4 !important;
}

.hero-btn.ghost {
  background: transparent;
}

.hero-meta {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 0.75rem;
  margin: 0;
}

.hero-meta div {
  border-top: 1px solid rgba(143, 177, 98, 0.3);
  padding-top: 0.55rem;
}

.hero-meta dt {
  color: #6d8a52;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.hero-meta dd {
  margin: 0.15rem 0 0;
  color: #30372c;
  font-size: 0.88rem;
  line-height: 1.5;
}

.about-lead {
  font-size: 1.08rem;
  line-height: 1.9;
}

[data-reveal] {
  opacity: 0;
  transform: translateY(14px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

[data-reveal].revealed {
  opacity: 1;
  transform: none;
}

@media (prefers-reduced-motion: reduce) {
  [data-reveal] {
    opacity: 1;
    transform: none;
    transition: none;
  }
}

.research-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0 0 1.4rem;
}

.research-tags span {
  border: 1px solid rgba(143, 177, 98, 0.45);
  border-radius: 999px;
  background: rgba(143, 177, 98, 0.12);
  padding: 0.28rem 0.8rem;
  color: #3c4a33;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.01em;
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

.about-divider {
  margin: 2.2rem 0 2rem;
  border: 0;
  border-top: 1px solid rgba(143, 177, 98, 0.25);
}

.about-phd {
  margin-bottom: 1.2rem;
}

.about-phd h3 {
  margin-bottom: 0.7rem;
  font-size: 1.6rem;
  font-weight: 800;
}

.about-phd p {
  line-height: 1.8;
}

.about-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.25rem;
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

  .about-divider {
    margin: 1.8rem 0 1.6rem;
  }
}
</style>
