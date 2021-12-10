import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilmsAsync } from '../redux/slices/filmsSlice';
import { FilmType } from '../types/filmType';

const ListOfFimls = () => {
    const [filmsData, setFilmsData] = useState<FilmType[]>([]);
    const dispatch = useDispatch();
    // @ts-ignore
    const films = useSelector((state) => state.films);
    console.log('films: ', films)

    useEffect(() => {
        dispatch(getFilmsAsync());
        setFilmsData(films);
    }, [dispatch])

    return (
        <div className="films-list">
            {films.map((film: FilmType, index: number) => (
                <div>{film.title}</div>
            ))}
        </div>
    )
}

export default ListOfFimls;