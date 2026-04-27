# Gibson Spot vs TC Delta Calculator V1 ⚓

A high-performance, interactive analytical tool for maritime professionals to compare daily margins between Spot Trading and Time Charter (TC) contracts.

![Gibson Branding](https://img.shields.io/badge/Branding-Gibson%20Shipbrokers-blue)
![Tech Stack](https://img.shields.io/badge/Tech-Vanilla%20JS%20|%20CSS3%20|%20HTML5-orange)
![Version](https://img.shields.io/badge/Version-1.0.0-green)

## 🚢 Overview

The **Gibson Spot vs TC Delta Calculator** is designed to provide shipowners, brokers, and analysts with a visual representation of profitability deltas across different market scenarios. By utilizing a 10x10 heatmap, the tool identifies the precise market conditions where Spot TCE outperforms Time Charter rates or vice versa.

### Key Features

- **Interactive Heatmap**: A dynamic visual grid comparing Spot TCE vs. TC Rates.
- **Zero-Delta Contour**: A bold line tracing the break-even curve through the heatmap for instant visual analysis.
- **Vessel Flexibility**: Pre-configured for Dry Bulk (Handy to Newcastlemax) and Tankers (MR to VLCC).
- **Comprehensive Margin Analysis**:
    - **Spot Margin**: `(Spot TCE × Utilisation) − Breakeven`
    - **TC Margin**: `TC Rate − Breakeven`
    - **Delta**: `Spot Margin − TC Margin`
- **Professional Exports**:
    - **PDF Report**: Detailed summary including inputs, base-case results, and the heatmap.
    - **PNG Image**: High-resolution chart export with Gibson branding.
- **Scenario Sharing**: Generate specialized links to share exact calculation scenarios with colleagues.

## 🛠️ Tech Stack

- **Frontend**: Vanilla JavaScript (ES6+), CSS3 (Custom Tokyo Night Theme), Semantic HTML5.
- **Libraries**: [jsPDF](https://github.com/parallax/jsPDF) for client-side PDF generation.
- **No Dependencies**: Runs entirely in the browser without back-end requirements or database overhead.

## 🚀 Getting Started

1.  **Open the App**: Simply open `index.html` in any modern web browser.
2.  **Input Data**: Enter your Vessel Type, OpEx, CapEx, and market rate ranges.
3.  **Calculate**: Hit "Calculate Delta" to generate the heatmap and summary cards.
4.  **Export**: Download a PDF report or PNG chart for presentations or record-keeping.

## 📝 Author

Created by **Sriniwas Ghate**, S&P Department at Gibson Shipbrokers.

---
*Disclaimer: This tool is for analytical purposes and should be used alongside professional maritime market data.*
