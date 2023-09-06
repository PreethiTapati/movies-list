import loadMovieHandler from '../handlers/loadMovieHandler.js';
const loadMovieEvent = () => {
    window.addEventListener('load', (e) => {
        loadMovieHandler(e);
    });
};

export default loadMovieEvent;
