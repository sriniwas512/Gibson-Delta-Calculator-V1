# Gibson Spot vs TC Delta Calculator V2 ⚓

A high-performance, interactive analytical tool for maritime professionals to compare the financial viability of Spot Trading vs. Time Charter (TC) contracts.

![Gibson Branding](https://img.shields.io/badge/Branding-Gibson%20Shipbrokers-blue)
![Tech Stack](https://img.shields.io/badge/Tech-Vanilla%20JS%20|%20CSS3%20|%20HTML5-orange)
![Version](https://img.shields.io/badge/Version-2.0.0-green)

## 🚢 Overview

The **Gibson Spot vs TC Delta Calculator V2** heavily upgrades the calculation depth from V1. It evolves the tool from a basic margin subtractor into a comprehensive project evaluation suite. It factors in true daily cash breakevens (via dynamic debt amortization), distinct addressing brokerage structures, and multi-year discounted Net Present Value (NPV).

### What's New in V2?
- **Financing Module**: Complete calculation of daily Principal & Interest (P&I) based on Vessel Purchase Price, Equity %, Interest Rate, and Loan Term. Replaces the generic CapEx input with true Cash Break-even.
- **Brokerage Commissions**: Spot market and TC market fixtures utilize drastically different commission rates. These are now native inputs affecting the bottom-line delta.
- **NPV Delta Calculation**: Calculates the Discounted Value Creation of Spot vs TC over a multi-year Charter term using WACC (Weighted Average Cost of Capital).
- **Max Idle Days**: Automatically calculates how many days a year the vessel can afford to ballast or sit idle on the spot market before it under-performs the guaranteed TC rate.

### Key Features

- **Interactive Heatmap**: A dynamic 10x10 visual grid showing the NPV Delta across a wide matrix of Spot Rates and TC Rates.
- **Zero-Delta Contour**: A bold line tracing the break-even curve through the heatmap for instant visual analysis.
- **Professional Exports**:
    - **PDF Report**: Detailed summary including inputs, assumptions, base-case results, and the heatmap. Built natively inside the browser via `jsPDF`.
    - **PNG Image**: High-resolution chart export with Gibson branding.
- **Scenario Sharing**: Generate specialized links to share exact calculation scenarios with colleagues.

## 🛠️ Tech Stack

- **Frontend**: Vanilla JavaScript (ES6+), CSS3 (Custom Tokyo Night Theme), Semantic HTML5.
- **Libraries**: [jsPDF](https://github.com/parallax/jsPDF) for client-side PDF generation.
- **No Dependencies**: Runs entirely in the browser without back-end requirements or database overhead.

## 🚀 Getting Started

1.  **Open the App**: Simply open `index.html` in any modern web browser.
2.  **Input Data**: Enter your Vessel specs, Financing numbers, OPEX, Commissions, Rates, and Charter Terms.
3.  **Calculate**: Hit "Calculate Analysis" to generate the heatmap and summary cards.
4.  **Export**: Download a PDF report or PNG chart for presentations or record-keeping.

## 📝 Author

Created by **Sriniwas Ghate**, S&P Department at Gibson Shipbrokers.

---
*Disclaimer: This tool is for analytical purposes and should be used alongside professional maritime market data.*
