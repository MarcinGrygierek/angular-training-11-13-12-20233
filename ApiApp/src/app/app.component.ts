import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Observable, debounceTime, distinctUntilChanged, map, mergeMap, switchMap, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface ApiResponse {
  tv_shows: {
    name: string;
  }[]
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  form = new FormGroup({
    search: new FormControl('')
  })

  searchResults: Observable<string[]> = this.form.controls.search
    .valueChanges
    .pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(val => this.http.get<ApiResponse>(`https://www.episodate.com/api/search?q=${val}`)),
      map((val => val.tv_shows.map(show => show.name)))
    );

  constructor(private http: HttpClient) {}
}
