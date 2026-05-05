---
title: Press | Dark Noise
layout: main
---

<main class="press-page">
    <section class="press-hero">
        <div class="press-hero-copy">
            <p class="eyebrow">Press Kit</p>
            <h1>Dark Noise assets and details.</h1>
            <p>Official app icons, promotional images, screenshots, and contact info for coverage of Dark Noise.</p>
            <div class="press-actions">
                <a href="#assets">Browse assets</a>
                <a href="/releases">Release notes</a>
                <a href="mailto:charlie@darknoise.app">Contact</a>
            </div>
        </div>
        <img class="press-hero-icon" src="/assets/press/promos/dark-noise-icon-v3-cropped.png" alt="Dark Noise app icon">
    </section>

    <section class="press-assets" id="assets" aria-label="Press assets">
        {% for section in site.data.press.sections %}
        <section class="press-asset-section press-asset-section--{{ section.title | slugify }}">
            <div class="press-section-heading">
                <p class="section-kicker">{{ section.title }}</p>
                {% if section.title == "App Icon" %}
                <h2>Primary icons for app coverage.</h2>
                {% elsif section.title == "Promo Images" %}
                <h2>Hero artwork and feature images.</h2>
                {% elsif section.title contains "Screenshots" %}
                <h2>{{ section.title }}.</h2>
                {% endif %}
            </div>
            <div class="press-image-grid">
                {% for image in section.images %}
                <a class="press-image-card" href="{{ image.url }}">
                    <img src="{{ image.url }}" alt="{{ section.title }} asset">
                </a>
                {% endfor %}
            </div>
        </section>
        {% endfor %}
    </section>

    <section class="press-info-grid">
        <article>
            <p class="section-kicker">About the developer</p>
            <h2>Built by Charlie Chapman in St. Louis.</h2>
            <p>Charlie is a software engineer, designer, motion graphics artist, podcaster, and indie app developer. Dark Noise has been independent since 2019.</p>
            <p>Dark Noise also includes family contributions, including hand drawn alternate icons by Charlie's sons.</p>
        </article>
        <article>
            <p class="section-kicker">Contact</p>
            <h2>Need more for a story?</h2>
            <p>For questions, interview requests, or promo codes, email <a href="mailto:charlie@darknoise.app">charlie@darknoise.app</a>.</p>
            <p>For launch history and update details, visit the <a href="/releases">release archive</a>.</p>
        </article>
    </section>
</main>
