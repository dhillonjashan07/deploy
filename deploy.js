const axios = require('axios');

const apiUrl = 'https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/createAccount';

const createAccount = async () => {
  const requestData = {
    name: 'Jashanpreet Singh',
    email: 'jashanpreet0679.be21@chitkara.edu.in',
    rollNumber: 2110990679, // Replace with your roll number
    phone: 9988671856 // Replace with your phone number
  };

  try {
    const response = await axios.post(apiUrl, requestData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    console.log('Account created successfully:', response.data);
  } catch (error) {
    console.error('Error creating account:', error.message);
  }
};

createAccount();
