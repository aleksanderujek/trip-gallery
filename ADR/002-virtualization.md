# List virtualization

## Context and Problem Statement

What library or approach should be taken to virtualized list? (load items on scroll)

## Considered Options

* `@tanstack/react-virtual` with Window virtualization,
* `react-virtualized`,
* custom implementation,

## Decision Outcome

Chosen option: `@tanstack/react-virtual`, because:
- gives nice API to provide virtualization using hooks,
- allows to virtualize elements in grid with lanes,
