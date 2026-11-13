---
layout: page
title: Projects
permalink: /projects/
description: My Robotics Projects！🤖
nav: true
nav_order: 4
nav_title: Selected Projects
home_section: selected-projects
display_categories: [Research Projects, Course Projects, Competitions]
---

<div class="projects-container">
  {% if site.enable_project_categories and page.display_categories %}
    {% for category in page.display_categories %}
      <h2 class="category-title">{{ category }}</h2>
      <div class="project-list">
        {% assign categorized_projects = site.projects | where: "category", category %}
        {% assign sorted_projects = categorized_projects | where_exp: "project", "project.listed != false" | sort: "importance" %}

        {% for project in sorted_projects %}
        {% assign project_href = project.url | relative_url %}
        {% if project.redirect %}
          {% assign project_href = project.redirect %}
        {% endif %}
        <div class="paper-item">
          <!-- 左侧：图片 -->
          <div class="paper-img-box">
            <a href="{{ project_href }}">
              <img src="{{ project.img | relative_url }}" alt="{{ project.title | escape }}" loading="lazy">
            </a>
          </div>

          <!-- 右侧：文字内容 -->
          <div class="paper-info">
            <h3 class="paper-title">
              <a href="{{ project_href }}">{{ project.title }}</a>
            </h3>
            <p class="paper-description">{{ project.description }}</p>

            {% if project.links %}
            <div class="paper-links">
              {% for link in project.links %}
                <a href="{{ link.url }}" class="btn-link">[{{ link.name }}]</a>
              {% endfor %}
            </div>
            {% endif %}
          </div>
        </div>
        {% endfor %}

      </div>
    {% endfor %}

{% endif %}

</div>
