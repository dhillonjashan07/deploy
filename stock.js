const axios = require('axios');

// Function to fetch stock data using Alpha Vantage API
const fetchStockData = async () => {
  const apiKey = 'YOUR_ALPHA_VANTAGE_API_KEY';
  const symbol = 'BAJAJFINSV.BO'; // Bajaj Finserv stock symbol

  try {
    const response = await axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`);
    const stockData = response.data['Global Quote'];
    const currentPrice = parseFloat(stockData['05. price']); // Extract current stock price

    console.log('Bajaj Finserv Stock Data:', stockData);
    console.log('Current Price:', currentPrice);

    // Call function to buy stocks
    await buyStocks(currentPrice);
  } catch (error) {
    console.error('Error fetching stock data:', error.message);
  }
};

// Function to buy stocks using the provided API
const buyStocks = async (currentPrice) => {
  const apiUrl = 'https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/buyStocks';
  const accountNumber = ''; // Replace with your investment account number
  const githubRepoLink = 'https://github.com/dhillonjashan07/deploy'; // Replace with your GitHub repo link

  const requestData = {
    company: 'Bajaj Finserv',
    currentPrice: currentPrice,
    accountNumber: accountNumber,
    githubRepoLink: githubRepoLink
  };

  try {
    const response = await axios.post(apiUrl, requestData, {
      headers: {
        'Content-Type': 'application/json',
        'bfhl-auth': '2110990679' // Replace with your roll number
      }
    });

    console.log('Stock bought successfully:', response.data);
  } catch (error) {
    console.error('Error buying stocks:', error.message);
  }
};

// Call function to fetch stock data and buy stocks
fetchStockData();

