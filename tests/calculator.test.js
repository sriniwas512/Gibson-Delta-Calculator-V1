const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

function createElementStub() {
    return {
        value: '',
        textContent: '',
        innerHTML: '',
        className: '',
        style: {},
        addEventListener() {},
        getContext() {
            return {
                fillRect() {},
                strokeRect() {},
                fillText() {},
                beginPath() {},
                moveTo() {},
                lineTo() {},
                stroke() {},
                save() {},
                restore() {},
                translate() {},
                rotate() {},
                clearRect() {}
            };
        }
    };
}

function loadCalculatorSandbox() {
    const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
    const match = html.match(/<script>([\s\S]*)<\/script>\s*<\/body>/);
    if (!match) {
        throw new Error('Could not extract calculator script from index.html');
    }

    const elements = new Map();
    const sandbox = {
        console,
        Math,
        Date,
        setTimeout,
        clearTimeout,
        URLSearchParams,
        navigator: {
            clipboard: {
                writeText() {
                    return Promise.resolve();
                }
            }
        },
        location: {
            origin: 'http://localhost',
            pathname: '/index.html',
            search: ''
        },
        window: {
            addEventListener() {}
        },
        document: {
            getElementById(id) {
                if (!elements.has(id)) {
                    elements.set(id, createElementStub());
                }
                return elements.get(id);
            },
            createElement() {
                return createElementStub();
            }
        }
    };

    vm.createContext(sandbox);
    vm.runInContext(match[1], sandbox, { filename: 'index.html' });
    return sandbox;
}

const sandbox = loadCalculatorSandbox();

assert.equal(typeof sandbox.calculateSpotOperatingEconomics, 'function');
assert.equal(typeof sandbox.calculateDecisionSnapshot, 'function');

const sampleInputs = {
    spotDaysPerYear: 365,
    ladenDays: 250,
    ballastDays: 70,
    idleDays: 45,
    ffaY1: 18000,
    ffaY2: 16500,
    ffaY3: 15000,
    spotPremium: 0,
    spotComm: 0.05,
    voyageCostPerLadenDay: 2200,
    ballastCostPerDay: 3200,
    idleCostPerDay: 1500,
    opex: 6500,
    purchasePrice: 25e6,
    equityPct: 0.4,
    interestRate: 7.5,
    loanTerm: 5,
    tcBase: 15500,
    tcComm: 0.0125,
    charterDuration: 3,
    wacc: 8
};

const spot = sandbox.calculateSpotOperatingEconomics(sampleInputs, 0, 1);
assert.equal(Math.round(spot.totalDays), 365);
assert.ok(spot.netDailyAfterFixedCosts < 0);

const decision = sandbox.calculateDecisionSnapshot(sampleInputs, sampleInputs.tcBase, 0);
assert.ok(typeof decision.relativeNpv === 'number');
assert.ok(typeof decision.requiredPremium === 'number');
assert.ok(decision.tcAnnualNetCashflow > decision.spotAnnualNetCashflow);

console.log('calculator.test.js: PASS');
