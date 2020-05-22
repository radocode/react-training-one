import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 3lqgxXdhEX0acWWBksPPPSsYQlEG7K_B-m4wBIMWl08'
    }
});
