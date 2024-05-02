# Routing Library

## Context and Problem Statement

What library to use for routing in React?

## Considered Options

* `react-router-dom` -> Solid option with great new functionalities,
* `tanstack/router` -> New lib from Tanstack with file-based routers and data-loading

## Decision Outcome

Chosen option `tanstack/router` because:
- It allows to create routes using files,
- It allows to call APIs similar to `react-router-dom` on loader level, but with Cache built-in,
