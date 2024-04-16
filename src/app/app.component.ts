import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { C3Component } from './c3/c3.component';
import { ParentComponent } from './parent/parent.component';
import { MoviesComponent } from './movies/movies.component';
import { PipesComponent } from './pipes/pipes.component';
import { TableComponentComponent } from './table-component/table-component.component';
import { NgFor } from '@angular/common';

@Component({ //Decorator
  selector: 'demo',
  standalone: true,
  imports: [RouterOutlet,C3Component, ParentComponent, MoviesComponent, PipesComponent, TableComponentComponent, ObservablesComponent, InjectiblesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
// Starts the practice

export class AppComponent {
  title = 'angular';
}

// import { NgFor } from '@angular/common'
// import {product} from './product.model'
// @Injectable({......
  //})

//   export class product services{
//     get products ( ): product[]{
//       return [
//         { id:1,name:'Mobile'},
//         { id:2,name:'Laptop'},
//         { id:3,name:'EArphone'},
      
//       ];
//     }
//   }

//   export class productcomponent implements onInit{
//     prod:product[]=[];
//    // ps=new productservices();
//    constructor(private ps: productservice){ } //

//     ngonInit(): void{
//       this.products = this.ps.getProducts();
//       //tightly coupled i.e. later changes  would have to be  
//     }
  }
 // now html 
//  <p> comp2 works!</p>

//  <pre> product Values are : </pre>
//  <div *ngFor="let p of prods">
//  {{p.id}}--{{p.name}}
//  </div>
     
