# Deeper Spot Model Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the single utilization-based spot model with a more explicit operating model and clearer decision outputs inside the existing single-file calculator.

**Architecture:** Keep the app in `index.html`, but introduce pure calculation helpers for spot operating economics, TC economics, and decision summaries so the model is easier to reason about and test. Add a tiny Node regression test that evaluates the embedded script and verifies the new commercial logic before and after implementation.

**Tech Stack:** HTML, CSS, vanilla JavaScript, Node.js test runner

---

### Task 1: Add regression coverage for the deeper model

**Files:**
- Create: `tests/calculator.test.js`
- Test: `node tests/calculator.test.js`

- [ ] **Step 1: Write the failing test**

```js
assert.equal(typeof sandbox.calculateSpotOperatingEconomics, 'function');
assert.equal(typeof sandbox.calculateDecisionSnapshot, 'function');
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node tests/calculator.test.js`
Expected: FAIL because the new calculator helpers are not defined yet.

- [ ] **Step 3: Write minimal implementation**

```js
function calculateSpotOperatingEconomics(ins, spotPremium) { /* ... */ }
function calculateDecisionSnapshot(ins, tcRate, spotPremium) { /* ... */ }
```

- [ ] **Step 4: Run test to verify it passes**

Run: `node tests/calculator.test.js`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add tests/calculator.test.js index.html
git commit -m "feat: deepen spot operating model"
```

### Task 2: Replace the UI and model wording

**Files:**
- Modify: `index.html`
- Test: `node tests/calculator.test.js`

- [ ] **Step 1: Replace the spot utilization inputs with explicit operating assumptions**

```html
<label for="ladenDays">Laden Days / Year</label>
<label for="ballastDays">Ballast / Reposition Days / Year</label>
<label for="idleDays">Idle / Waiting / Off-hire Days / Year</label>
```

- [ ] **Step 2: Add clearer absolute and relative result cards**

```html
<h4>Spot Annual Net Cashflow</h4>
<h4>TC Annual Net Cashflow</h4>
<h4>Relative NPV: Spot vs TC</h4>
<h4>Required Spot Premium vs FFA</h4>
```

- [ ] **Step 3: Implement the calculation rewrite**

```js
const spot = calculateSpotOperatingEconomics(ins, spotPremium);
const summary = calculateDecisionSnapshot(ins, ins.tcBase, 0);
```

- [ ] **Step 4: Run regression coverage**

Run: `node tests/calculator.test.js`
Expected: PASS

- [ ] **Step 5: Review in browser-equivalent output**

Run: `node tests/calculator.test.js`
Expected: PASS with default-case values showing TC outperforming spot when the default spot path under-earns.
