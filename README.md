# Crypto Tracker

![cover](https://github.com/abhinavg916/crypto-tracker/blob/main/Crypto%20Tracker%20Cover.png)

Watch the live production build here i.e. **deployment** - [Live Preview]()

**Developed** using Reactjs, Redux / Redux Toolkit, Axios, React Router, Chartjs

Developed Crypto Tracker using React.js

### Features

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
