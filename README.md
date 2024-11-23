# Posit Cloud Take Home

## Overview
This repository contains both a manual test plan and automated test implementations for Posit Cloud functionality.

## Task 1: Manual Test Plan

The test Plan is documented in testplan.md.

### Areas for Improvement
1. Test Execution Optimization
- Improve the streamlining of the test workflows to decrease the execution time

2. Documentation Refinement
 - Add more detailed step-by-step procedures and success criteria
            - Add more detailed success criteria

## Task 2: Automated Test Implementation


### Test Architecture
- End-to-end test cases: cypress/e2e/launchProject.cy.js
- Page Object Model implementation: cypress/pages/CloudPage.js

### Environment Setup

#### Optional: Isolated Environment Setup
Create a new isolated testing environment using Conda:
```
conda env create -f environment.yml
conda activate posit-int
npm init -y
npm install cypress --save-dev
```

#### Configuration Requirements

Create a `cypress.env.json` that contains a posit cloud account credential.

```
{
"USER_EMAIL": "XXXX@gmail.com",
"USER_PASSWORD": "XXXXXXX"
}
```

#### Test Execution

Launch Cypress test runner:

```
npm run cypress:open
```

Select "End to End Testing" from the Cypress interface.

#### Browser Compatibility
- Verified functionality: Chromium, Firefox
- Known limitation: RStudio loading issues in Cypress' Electron environment

#### Areas for Improvement
1. Learn how to use Cypress Cloud debugging integration to resolve the below mysteries.
2. Fix `checkNavOpen` so that we can assess the navigation pane state before toggling it.
3. Replace explicit wait in `newRStudioProject` with dynamic iframe loading detection.
4. Resolve a discrepancy for iframe verification works with cypress:open, but fails with cypress:run.
5. Consolidate Space operations (Create/Delete/etc) into parameterised function.
