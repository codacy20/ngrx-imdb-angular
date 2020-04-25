import { Movie } from './models/movie.model';

export interface AppState {
    readonly movies: Movie[];
}