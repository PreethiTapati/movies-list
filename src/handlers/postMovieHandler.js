import dom from '../dom.js';
import updateMovie from '../../apis/updateMovie.js';
import createMovie from '../components/createMovie.js';
import postMovies from '../../apis/postMovie.js';

const postMovieHandler = async (e) => {
    e.preventDefault();

    const newMovie = {
        title: dom.titleInput.value,
        src: dom.sourceInput.value,
        year: dom.year.value,
        description: dom.description.value
    };

    // check if year exists
    newMovie.year = newMovie.year ? newMovie.year : '2023';

    // Check if description exists
    newMovie.description =
        newMovie.description ||
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
   Sed ac justo et purus tristique viverra. Phasellus eget metus in nisi suscipit aliquam.
   Nullam vestibulum quam vel quam congue, id euismod ante cursus. Integer id quam nec est ullamcorper cursus.
   Donec vel nisi non velit tincidunt vestibulum.`;

    // Check if title and source exist
    if (!newMovie.title || !newMovie.src) {
        dom.error.innerText = 'Please add movie title and source';
        dom.error.classList.add('err');

        // Flash the error message
        setTimeout(() => {
            dom.error.classList.remove('err');
            dom.error.innerText = '';
        }, 2000);

        return;
    }
    // remove error message if exist
    dom.error.innerText = '';
    dom.error.classList.remove('err');
    if (dom.btn.innerText === 'Add movie') {
        const movieAdd = await postMovies(newMovie);
        if (movieAdd) {
            const movieElement = createMovie(newMovie);
            dom.movies.prepend(movieElement);
        }
    } else {
        const elementDom = document.querySelector('.selected');
        const id = Number(elementDom.id);
        elementDom.querySelector('img').src = newMovie.src;
        elementDom.querySelector('h6').innerText = newMovie.title;
        await updateMovie(id, newMovie);
        elementDom.classList.remove('selected');
        dom.btn.innerText = 'post Movie';
    }

    // reset inputs
    dom.titleInput.value = '';
    dom.sourceInput.value = '';
    dom.year.value = '';
    dom.description.value = '';
};

export default postMovieHandler;
