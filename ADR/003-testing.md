# Component testing

## Context and Problem Statement

What library should be chosen for testing components?

## Considered Options

* `react-testing-library` with `jest` as test runner,
* `cypress` with `component testing`,

## Pros & Cons of options

* `react-testing-library`:
  * Good, because it's only a test framework, not entire ecosystem, which provides more freedom to define the test runners and other aspects,
  * Bad, because it requires huge setup to run (babel, jsdom and others),

## Chosen option
`react-testing-library` because:
* It's only a test framework, not entire test ecosystem, which provides more freedom to define the test runners and other aspects,
* Unfortunately it will involve setting up `babel`, `jest`, `jsdom` and other libraries in order to run tests,
* Additionally `@tanstack/router` does not have good docs on mocking router.

