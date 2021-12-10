import React from 'react';
import ListOfFilms from '../../components/ListOfFimls';
import FilmDetails from '../../components/FilmDetails';

const FilmsPage = () => {
    
    return(
        <div className="films-page">
            <ListOfFilms />
            <FilmDetails />
        </div>
    )
}

export default FilmsPage;