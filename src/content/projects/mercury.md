---
title: Mercury
description: Courier dispatcher all-in-one digital product that is available in multi-platform.
# liveUrl: https://github.com/stjhin/mercury-demo
# githubUrl: https://github.com
image: { url: "/mercury-hero.png", alt: "Mercury thumbnail" }
---

## Overview

**Project Mercury (NDA)** is an all-in-one logistic solution that simplifies the process between sender and receiver by automating the middle man process.

![](/mercury-1.png)

## Summary

- **User Need**: Empower managers with a tool to effectively manage their logistic process.
- **Business Goal**: Provide a digital tracker for corporate enterprise by simplifying logistic process.
- **Challenge**: How might we empower logistic managers to digitize their processes effectively?

## My role

> Lead Product Designer

| Products I worked on  | Function                                 | User             |
| --------------------- | ---------------------------------------- | ---------------- |
| Logistic Manager      | Manage all logistics                     | Logistic Manager |
| Driver Manager        | Manage all drivers                       | Driver Manager   |
| Route Manager         | Manage all routes                        | On-Site Manager  |
| Front Line Driver App | See and do tasks                         | Driver           |
| B2C Customer App      | Order logistic and monitor logistic live | Customer         |

## Strategy

My solution needs to be streamlined, such that it is easy to adopt for people who are not used to doing their work digitally. From research insights, I formed 3 guiding principles that guided design decisions.

### 1. Least amount of presses

We try to limit most flows to require less than 10 presses to complete the major steps. This allows repeat users and power users to perform frequent flows with minimal friction. For major flows, we did extensive user research and validation by going to the field and observing workflows.

![](/mercury-flow.png)

### 2. Establish Trustworthiness

Most of our userbase are people who might be first-time adopters of digital processes. As the first touchpoint of digital experience, establishing trustworthiness is crucial to turn them into repeat users and eventually power users. We do this by being visual with every system status—clear, but not overwhelming. Notifications are a good example.

![](/mercury-3.png)

### 3. Anticipate Failure

As an enterprise product on multiple platforms, we design the product expecting that things can and will fail. Error states are designed from micro (component) level up to macro (journey) level. When something unexpected happens, there is always a fallback to prevent user frustration.

![](/mercury-2.png)

## Design System Foundation

To support **5 products** across web and mobile, I built a scalable design system that ensured consistency while enabling rapid iteration.

### Component Library

I created a library of **50+ reusable components** in Figma—buttons, forms, data tables, maps, notifications, and error states—all with variants for web and mobile platforms.

### Token Architecture

I established a token system for color, typography, and spacing. This ensured that as we expanded from 1 product to 5, the UI remained consistent across all platforms—without rebuilding from scratch.

### Error State Library

I designed a comprehensive error state library covering micro-level (field validation, button errors) to macro-level (page failures, network issues). This ensured that when things failed—and we knew they would—users always had a clear path forward.

### Developer Handoff

I documented each component with Dev Mode annotations, specifying interactions, error states, and accessibility requirements. This reduced developer questions and accelerated sprint velocity.

## Outcomes

- **Adoption**: 80% client approval out of 100,000+ users within 3 months of launch

- **Retention**: 75% of first-time users became repeat users—proving the platform was intuitive enough for digital first-timers

- **Advocacy**: 20% of repeat users became power users who championed Mercury within their companies, driving organic adoption

- **Efficiency**: The "least amount of presses" principle reduced average task completion time by ~40% for power users

- **Reliability**: The error state library reduced support tickets related to confusion by ~60%
<!--

## Links

- 🔗 [Live Demo](https://github.com/stjhin/mercury-demo)

- 💾 [Source Code](https://github.com/yourusername/promptsmith)
  -->

---

> Good design is good business.
