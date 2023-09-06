import data from '../src/data.js';

const getMovieById = async (id) => {
    try {
        const response = await fetch(`${data.baseUrl}/${id}`);
        if (!response.ok) {
            throw new Error(
                `failed to fetch movies by id! Status: ${response.status}`
            );
        }
        return await response.json();
    } catch (err) {
        console.error('Error fetching data by id:', err);
        return null;
    }
};

export default getMovieById;
