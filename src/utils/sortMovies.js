const sortMovies = (movies) => {
    return [...movies].sort((a, b) => b.id - a.id);
};

export default sortMovies;
