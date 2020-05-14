import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as MovieActions from './actions/movie.actions';
import { Movie } from './models/movie.model';
import { AppState } from './app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  movies$: Observable<Movie[]>;
  id: number = 3;
  constructor(private store: Store<AppState>) {
    this.movies$ = store.select('moviess');
  }

  add(name: string, director: string, url: string) {
    let id = this.id;
    this.store.dispatch(new MovieActions.AddMovie({ name, director, url, id }));
    this.id++;
  }

  remove(index: number) {
    this.store.dispatch(new MovieActions.RemoveMovie(index));
  }

}
