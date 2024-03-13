import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { movie } from './movie';


@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [NgFor,NgClass],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  movies:movie[]=[{name:"3 Idiots", year:2000},{name:"Shaitaan", year:2024},{name:"YJHD", year:2006}]
  // ctrl + space

}