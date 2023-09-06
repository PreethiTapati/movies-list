import data from '../src/data.js';

const updateMovies = async (movieId, newMovieData) => {
    try {
        const response = await fetch(`${data.baseUrl}/${movieId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newMovieData)
        });

        if (!response.ok) {
            throw new Error(
                `failed to update movies! Status: ${response.status}`
            );
        }
        return await response.json();
    } catch (err) {
        console.error('Error updating data:', err);
        return null;
    }
};

export default updateMovies;
