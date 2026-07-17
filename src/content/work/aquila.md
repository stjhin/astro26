---
title: "Aquila"
description: "From Research to implementing reusable AI interaction patterns within design system."
liveUrl: https://stjhin.github.io/infinity/?path=/story/ai-patterns-overview--ai-chat
image:
  {
    url: "/aquila-hero.png",
    alt: "Aquila AI interaction pattern design system",
  }
impacts:
  - label: "AI Patterns"
    value: "15+"
  - label: "Trust Layers"
    value: "4"
  - label: "WCAG Level"
    value: "AA"
summary:
  - "Designed a reusable interaction framework for enterprise AI products."
  - "Synthesized research from Human-AI Interaction, Responsible AI, and accessibility guidelines."
  - "Created reusable patterns for trust, explainability, governance, and AI-assisted workflows."
  - "Demonstrated how AI interactions can scale beyond chat interfaces."
  - "The challenge wasn't adding AI to products. It was helping users trust AI decisions."
---

## Overview

> Designing reusable AI interaction patterns that make enterprise AI products more transparent, trustworthy, and accessible.

**Aquila** explores how design systems should evolve to support human-AI interactions.

Today's design systems standardize visual components such as buttons, forms, and navigation. As AI becomes a core product capability, I believe design systems should also standardize reusable interaction patterns for transparency, explainability, trust, and governance.

Rather than treating AI as another feature, I see it as a new participant in the interface. Just as design systems define how users interact with software, they should also define how AI-powered software interacts with users. Aquila explores what those reusable interaction patterns could look like, how they can be implemented, and where they belong within an Atomic Design system.

---

## AI Design Manifesto

While experimenting with AI products, I noticed that every team seemed to solve the same interaction problems from scratch.

> - What should an AI response look like?
> - How should confidence be communicated?
> - When should reasoning be shown?
> - How should streaming be handled?
> - What is the anatomy of an AI interaction?
> - What patterns should be reusable across products?

Traditional design systems gave us reusable patterns for buttons, forms, and navigation, but they offered little guidance for human-AI interaction.

Aquila is my exploration of what reusable AI interaction patterns could look like.

---

## My Role

> Product Designer

- 🧩 Designed reusable AI interaction patterns
- 🧠 Defined trust, explainability, and governance principles
- 🏗 Built an AI pattern library in Storybook
- 🤝 Standardized design-to-development implementation
- ♿ Embedded accessibility into every interaction
- 📚 Documented patterns for design and engineering teams

---

## Design Process

Summary of my process:

### 1. Understand the problem

This is the phase where I try to map the whole product experiences holistically. Cross-functional workshops to get constraints are my go-to tool at this phase.

- User workflows
- Business goals
- Decision points
- Where AI could actually help

### 2. Understand the technology

This phase I fully invest my time to understand the technology: where is the back-end to front-end touch point, what is the latency, how will trust be established, etc. are the type of questions that I asks and explored.

- LLM capabilities
- Constraints
- Latency
- Reliability
- Available context

### 3. Design AI interactions

I start mapping out the touch point and where exactly a front-end UI is needed for AI to interact with users. It's easy to look at other launched products, but to design something scalable and consider that this interaction might not be used in a chatbot, I decided to componentize each Human-AI interaction.

- Streaming
- Explainability
- Confidence
- Human control
- Feedback loops

### 4. Validate & Implementation

I prototyped the component on Storybook JS to test it in a controlled environment for a small sample size before scaling it up and test if this would work for 40+ applications within the whole enterprise platform. I want to find out things such as:

> - What decisions are users making?
> - Where do they hesitate?
> - Which tasks have the highest cognitive load?
> - Where is trust breaking down?
> - Which failures matter most when interacting with AI?

- Components on Storybook to test:
  - AI accuracy
  - User trust
  - Task completion
  - Failure cases
- Design system
- Implementation guidance
- Measurement

---

## Design Challenge

Large Language Models are becoming increasingly easy to integrate.

Designing meaningful human-AI interactions is much harder.

As AI becomes a participant in digital experiences, designers face a new set of interaction challenges:

> How should AI communicate uncertainty?
> When should users see citations?
> Should reasoning be visible?
> How do users know when AI is thinking?
> How do we build trust without overwhelming people?
> Which interaction patterns should become reusable?

Today's design systems provide reusable patterns for traditional user interfaces, but they offer little guidance for designing interactions between humans and AI.

Rather than solving these challenges independently for every product, I explored whether human-AI interactions could be standardized into reusable design patterns that help teams build more trustworthy, transparent, and consistent AI experiences.

---

## Why This Matters

Most AI products begin by designing a chat interface.

I started by asking a different question:

> - **How should human interact with AI in a way that it builds trust?**
> - **How do we even define what is good Human-AI interaction be?**

That shift changed the project from designing a chatbot into designing an interaction system.

Instead of creating one experience, I created reusable patterns that support transparency, explainability, governance, accessibility, and engineering consistency across future AI products.

---

## Design Principles

The interaction patterns in Aquila are informed by established research in usability, human-computer interaction (HCI), human-AI interaction (HAI), and accessibility. Rather than inventing new principles, Aquila translates existing research into reusable design system patterns for AI.

#### 1. Design for Appropriate Trust

Users should understand where AI-generated information comes from, how confident the system is, and when additional verification is appropriate.

**Research**

- Nielsen Norman Group — https://www.nngroup.com/articles/visibility-system-status/
- Microsoft Human-AI Interaction Guidelines — https://www.microsoft.com/en-us/haxtoolkit/ai-guidelines/

**Applied in Aquila**

- Confidence Indicator
- Sources Panel
- Explainability Panel

---

#### 2. Keep Humans in Control

AI should augment human decision-making by offering guidance, recommendations, and automation without removing user agency.

**Research**

- Microsoft Human-AI Interaction Guidelines — https://www.microsoft.com/en-us/research/articles/guidelines-for-human-ai-interaction-eighteen-best-practices-for-human-centered-ai-design/
- Google PAIR Guidebook — https://pair.withgoogle.com/guidebook/

**Applied in Aquila**

- Suggested Actions
- Quick Replies
- Voice Input
- Persona Cards

---

#### 3. Make AI Decisions Understandable

Confidence, reasoning, and citations should feel like natural parts of the experience rather than hidden implementation details.

**Research**

- Microsoft Human-AI Interaction Guidelines — https://www.microsoft.com/en-us/research/articles/guidelines-for-human-ai-interaction-eighteen-best-practices-for-human-centered-ai-design/

**Applied in Aquila**

- Explainability Panel
- Chain of Thought
- Sources Panel

---

#### 4. Design for Responsible AI

As AI becomes part of real products, interaction patterns should communicate model attribution, governance, and system capabilities when appropriate.

**Research**

- NIST AI Risk Management Framework — https://www.nist.gov/itl/ai-risk-management-framework
- Microsoft Responsible AI Resources — https://www.microsoft.com/en-us/ai/responsible-ai

**Applied in Aquila**

- Model Registry
- Component Catalog
- Asset & Deployment Tracking

---

#### 5. Accessibility by Default

AI interactions should be usable by everyone. Accessibility should be built into every interaction pattern rather than added afterward.

**Research**

- W3C WCAG 2.2 — https://www.w3.org/WAI/standards-guidelines/wcag/

**Applied in Aquila**

- Keyboard Navigation
- Semantic Markup
- ARIA Support
- Live Regions

---

## Interaction System

![](/aquila-component-diagram.jpg)

Rather than treating AI as a single chat component, I designed a reusable interaction system composed of four layers.

### 💬 Core Conversation

The building blocks of every AI conversation.

- [Chat Container](https://stjhin.github.io/infinity/?path=/docs/ai-patterns-chat-chatcontainer--docs)
- [Prompt Input](https://stjhin.github.io/infinity/?path=/docs/ai-patterns-prompt-promptinput--docs)
- [Message Bubble](https://stjhin.github.io/infinity/?path=/docs/ai-patterns-message-messagebubble--docs)
- [Streaming Text](https://stjhin.github.io/infinity/?path=/docs/ai-patterns-streaming-streamingtext--docs)
- [Typing Indicator](https://stjhin.github.io/infinity/?path=/docs/ai-patterns-indicators-typingindicator--docs)
- [Thinking Indicator](https://stjhin.github.io/infinity/?path=/docs/ai-patterns-indicators-thinkingindicator--docs)

### 🧠 Explainability & Trust

Helping users understand how AI reached its answer.

- [Chain of Thought](https://stjhin.github.io/infinity/?path=/docs/ai-patterns-reasoning-chainofthought--docs)
- [Sources Panel](https://stjhin.github.io/infinity/?path=/docs/ai-patterns-reasoning-sourcespanel--docs)
- [Confidence Indicator](https://stjhin.github.io/infinity/?path=/docs/ai-patterns-reasoning-source--docs)
- [Explainability Panel](https://stjhin.github.io/infinity/?path=/docs/ai-patterns-reasoning-explainabilitypanel--docs)

### 🎛 User Controls

Giving users multiple ways to interact with AI.

- [Suggested Actions](https://stjhin.github.io/infinity/?path=/docs/ai-patterns-controls-suggestedactions--docs)
- [Quick Replies](https://stjhin.github.io/infinity/?path=/docs/ai-patterns-controls-quickreply--docs)
- [Voice Input](https://stjhin.github.io/infinity/?path=/docs/ai-patterns-controls-voiceinput--docs)
- [Persona Card](https://stjhin.github.io/infinity/?path=/docs/ai-patterns-persona-personacard--docs)

### 🏛 Governance

Supporting enterprise deployment and responsible AI from the backend.

- [Model Registry](https://stjhin.github.io/infinity/?path=/docs/ai-patterns-registry-modelregistry--docs)
- [Component Catalog](https://stjhin.github.io/infinity/?path=/docs/ai-patterns-registry-componentcatalog--docs)
- [Asset & Deployment Tracking](https://stjhin.github.io/infinity/?path=/docs/ai-patterns-registry-assetcilinkage--docs)

---

## Process & Approach

I approached Aquila as both a design exploration and a design systems exercise.

Rather than starting with UI components, I began by studying how people interact with AI across existing products. I looked for recurring interaction challenges instead of visual patterns.

From those observations, I identified five recurring user needs:

- Building appropriate trust
- Understanding AI reasoning
- Staying in control of decisions
- Reducing uncertainty
- Ensuring accessibility

These needs became the foundation for a set of design principles, which I translated into reusable interaction patterns.

Instead of treating each pattern as a one-off solution, every interaction was designed as a composable design system component that could be combined, documented, and reused across different AI experiences.

---

## Engineering Collaboration

Every interaction pattern was documented inside Storybook to create a shared language between Design and Engineering.

Each component included:

- Design documentation
- Accessibility guidance
- Usage examples
- React implementation
- Design tokens
- Component API
- Implementation notes

This allowed product teams to discuss AI interactions using a common vocabulary while accelerating implementation and maintaining consistency.

---

## Challenges

### Designing trust instead of features

The hardest problem wasn't creating a chatbot.

It was determining how much information users need to confidently trust AI-generated responses without overwhelming the interface.

### Balancing transparency with simplicity

Reasoning, citations, confidence scores, and model attribution all improve transparency, but showing everything at once increases cognitive load.

I addressed this through progressive disclosure, revealing additional context only when users requested it.

### Designing for reuse

Instead of optimizing for a single product, every interaction pattern needed to support multiple enterprise AI use cases while remaining flexible enough for future applications.

---

## Outcomes

- **Reusable AI Interaction System** — Standardized conversation, explainability, governance, and accessibility patterns for enterprise AI products.
- **Improved Design–Engineering Collaboration** — Shared Storybook documentation established a common language between designers and engineers.
- **Accessibility by Default** — Every interaction pattern was designed with WCAG-first principles and semantic accessibility.
- **Scalable Enterprise Foundation** — Created reusable patterns that can support future AI-powered products without redesigning core interactions.

---

> I always start from the Why, How, What.
