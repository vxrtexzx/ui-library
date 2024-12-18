import axios from 'axios';

const API_URL = 'https://api.coinlore.net/api/tickers/';

export const fetchCryptoData = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data.data; // Return the array of cryptocurrencies
    } catch (error) {
        console.error('Error fetching cryptocurrency data:', error);
        return [];
    }
};
