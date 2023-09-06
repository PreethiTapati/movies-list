import dom from '../dom.js';
import getMovies from '../../apis/getMovies.js';
import createMovie from '../components/createMovie.js';
import sortMovies from '../utils/sortMovies.js';
import createAnimation from '../components/createAnimation.js';

const loadMovieHandler = async () => {
    try {
        const animationDom = createAnimation();
        dom.movies.append(animationDom);
        const movies = await getMovies();
        if (movies) {
            animationDom.remove();
            const sortedMovies = sortMovies(movies);

            for (const movieData of sortedMovies) {
                const movieDom = createMovie(movieData);
                dom.movies.append(movieDom);
            }
        }
    } catch (error) {
        console.error('Error loading movies:', error);
    }
};

export default loadMovieHandler;
