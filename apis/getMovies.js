import data from '../src/data.js';

const getMovies = async () => {
    try {
        const response = await fetch(data.baseUrl);
        if (!response.ok) {
            throw new Error(
                `failed to fetch movies! Status: ${response.status}`
            );
        }
        return await response.json();
    } catch (err) {
        console.error('Error fetching data:', err);
        return null;
    }
};

export default getMovies;
