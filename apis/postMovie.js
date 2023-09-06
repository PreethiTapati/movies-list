import data from '../src/data.js';

const postMovies = async (newMovie) => {
    try {
        const response = await fetch(`${data.baseUrl}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newMovie)
        });

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

export default postMovies;
