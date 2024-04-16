import { CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, NgFor, PercentPipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, CurrencyPipe, DecimalPipe, PercentPipe, DatePipe, JsonPipe, SlicePipe, NgFor ],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
myString = "TypeScript is a SUPERSET of JavaScript"

  curr = 140985.23567
  per = 0.0324567
  dec = 1.23456789


  currentDate:Date = new Date()

  myObj = {name:'Anubhav', email:'anubhav@gmail.com', job:'Student'}

  myArray : any[] = ['Apple', 'Banana', 'Orange', 'Grapes'];
}


