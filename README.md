# React Quiz App

A small interactive quiz built with React and Vite. It demonstrates component composition, controlled state, question navigation, answer selection, and score calculation.

## Features

- Multiple-choice questions
- Select and revise an answer before moving on
- Previous/Next navigation with unanswered-question protection
- Progress indicator and accessible selected-state feedback
- Results summary and quiz restart

## Tech stack

- React 19
- Vite 7
- JavaScript (ES modules)
- Node.js built-in test runner

## Local setup

```bash
npm ci
npm run dev
```

## Quality checks

```bash
npm test
npm run lint
npm run build
```

The score calculation and initial-answer helpers are kept separate from the UI so they can be tested without rendering React components.

## Scope

This is a frontend learning project. Questions are stored in the client bundle; there is no backend, account system, database, or server-side score validation. Do not use it for high-stakes assessments without a trusted server-side question bank and scoring service.
