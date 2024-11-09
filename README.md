# Crypto Tracker

![cover]()

Watch the live production build here i.e. **deployment** - [Live Preview](https://resilient-cobbler-d00601.netlify.app/)

**Developed** using Reactjs, Redux / Redux Toolkit, Axios, React Router, Chartjs

Developed responsive cryptocurrency tracking app using Reactjs, featuring trends of various cryptocurrencies with their prices. Employed Chart.js for interactive data visualization, presenting dynamic charts for historical price insights. Utilized Redux and Redux Toolkit for robust state management.

### Features

- **Track Cryptocurrencies**: Tracks current prices for cryptocurrencies by utilizing the CoinRanking API and display up-to-date information on various cryptocurrencies.
- **Interactive Data Visualization** - Employs Chart.js to present graphical representations of cryptocurrency trends and statistics.
- **State Management** - Implements Redux and Redux Toolkit for efficient state management across the application.

### Steps to Run

- Setup RAPID API
  - Sign into Rapid API then search for "[CoinRanking](https://rapidapi.com/Coinranking/api/coinranking1)" and "[Bing News Search](https://rapidapi.com/microsoft-azure-org-microsoft-cognitive-services/api/bing-news-search1)". Opt for free plan in both of them.
  - Select Suggested Videos endpoint from left panel then on right panel select Target as `Nodejs` and Client as `Axios` from the dropdowns.
  - Copy the value of `x-rapidapi-key` from the `options` object.
  - Paste the key's value into `.env` local file of this source code and save the file.
- Run the following commands

```
npm i
npm start
```

- NOTE: Tested on Node version 18.18.0
