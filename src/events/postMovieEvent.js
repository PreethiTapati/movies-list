import dom from '../dom.js';
import postMovieHandler from '../handlers/postMovieHandler.js';

const postMovieEvent = () => {
    dom.btn.addEventListener('click', postMovieHandler);
};

export default postMovieEvent;
