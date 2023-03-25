---
title: Press | Dark Noise
layout: markdown
---

# Press

Here you can find promotional assets and screenshots for press use. Details on all major releases can be found [here](./releases).

{% for section in site.data.press.sections %}

## {{ section.title }}

<div class="press-images">
    {% for image in section.images %}
    <a href="{{ image.url }}">
        <img src="{{ image.url }}">
    </a>
    {% endfor %}
</div>

{% endfor %}

### About the Developer

👋 Hi, I'm Charlie Chapman

I'm a software engineer in St. Louis, Missouri by day, and a designer, motion graphics artist, podcaster, and indie dev by night.

I've been building software for over 8 years, and I'm pretty new to the iOS scene. I've been blown away by the kindness and helpfulness of the iOS development community so far, and I'm excited to finally join them on the store.

This app also wouldn't be possible without the patience and vigilant beta testing of my wife. My two sons also contributed with their own hand drawn alternate icons featured in the app!

### Contact

For any questions or to request a promo code email me at [charlie@darknoise.app](mailto:charlie@darknoise.app).