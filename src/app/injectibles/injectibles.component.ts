import { Component, OnInit } from '@angular/core';
import { ProductsService, products } from '../products.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-injectibles',
  standalone: true,
  imports: [NgFor],
  templateUrl: './injectibles.component.html',
  styleUrl: './injectibles.component.css'
})
export class InjectiblesComponent implements OnInit {

  // ps = new ProductsService();
  products:products[] = [];
  constructor(private ps: ProductsService) { }

  ngOnInit(): void {
    this.products = this.ps.getProducts();
  }

}
