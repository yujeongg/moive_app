import React from 'react';
import PropTypes from 'prop-types';

// doen't need state

function Movie ({id, year, title, summary, poster}){
    return <h5>{title}</h5>

}

Movie.PropTypes = {
    id: PropTypes.number.isRequired,
    year : PropTypes.number,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired

};

export default Movie;