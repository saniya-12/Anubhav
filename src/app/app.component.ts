import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { C3Component } from './c3/c3.component';
import { ParentComponent } from './parent/parent.component';

@Component({ //Decorator
  selector: 'demo',
  standalone: true,
  imports: [RouterOutlet,C3Component, ParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
// Starts the practice

export class AppComponent {
  title = 'Anubhav';
}
