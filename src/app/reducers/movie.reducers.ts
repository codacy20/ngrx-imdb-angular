import { createReducer, on } from '@ngrx/store';
import * as MovieActions from '../actions/movie.actions';
import { Movie } from '../models/movie.model';

const initialState: Movie[] = [
    {
        name: 'Pulp Fiction',
        url: '',
        director: 'Quentin Tarantino',
        id: 1
    },
    {
        name: 'Zodiac',
        director: 'David Fincher',
        url: '',
        id: 2
    }
];


export function movieReducer(state: Movie[] = initialState, action: MovieActions.Actions) {
    switch (action.type) {
        case MovieActions.ADD_MOVIE:
            return [...state, action.payload];
        case MovieActions.REMOVE_MOVIE:
            return state.filter((item) => {
                if (item.id !== state[action.payload].id) {
                    return item;
                }
            });
        default:
            return state;
    }
}
