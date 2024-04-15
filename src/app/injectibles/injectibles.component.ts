import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-injectibles',
  standalone: true,
  imports: [],
  templateUrl: './injectibles.component.html',
  styleUrl: './injectibles.component.css'
})
export class InjectiblesComponent implements OnInit {

  ps = new ProductsService();

  ngOnInit(): void {
    // this.products = this.ps.getProducts();
  }

}
