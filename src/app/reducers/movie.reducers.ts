import { createReducer, on } from '@ngrx/store';
import * as MovieActions from '../actions/movie.actions';
import { Movie } from '../models/movie.model';

const initialState: Movie[] = [
    {
        name: 'Pulp Fiction',
        url: '',
        director: 'Quentin Tarantino'
    },
    {
        name: 'Zodiac',
        director: 'David Fincher',
        url: ''
    }
];


export function movieReducer(state: Movie[] = initialState, action: MovieActions.Actions) {
    switch (action.type) {
        case MovieActions.ADD_MOVIE:
            return [...state, action.payload];
        case MovieActions.REMOVE_MOVIE:
            return [...state, action.payload];
        default:
            return state;
    }
}
