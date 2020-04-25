import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment'; // Angular CLI environment

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { movieReducer } from './reducers/movie.reducers';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    StoreModule.forRoot({ movies: movieReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    }),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
