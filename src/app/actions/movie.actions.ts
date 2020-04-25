import { createAction, Action } from '@ngrx/store';
import { Movie } from '../models/movie.model';

export const ADD_MOVIE = '[Movie Component] Add';
export const REMOVE_MOVIE = '[Movie Component] Remove';

export class AddMovie implements Action {
    readonly type = ADD_MOVIE;

    constructor(public payload: Movie) { }
}

export class RemoveMovie implements Action {
    readonly type = REMOVE_MOVIE;

    constructor(public payload: number) { }
}

export type Actions = AddMovie | RemoveMovie;