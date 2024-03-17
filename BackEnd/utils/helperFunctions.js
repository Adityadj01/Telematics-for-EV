// helperFunctions.js

// Function to format price to currency format (e.g., 1000 => $1,000.00)
const formatPrice = (price) => {
    return price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  };
  
  // Function to validate email format
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  // Function to generate random alphanumeric string of given length
  const generateRandomString = (length) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };
  
  // Export helper functions
  module.exports = {
    formatPrice,
    validateEmail,
    generateRandomString
  };
  