import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from './product.service';
import { HttpClientModule } from '@angular/common/http';
import { Code } from './code.model';
import { Product } from './product.model';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, 
    MatFormFieldModule, MatSelectModule,
  HttpClientModule, FormsModule, MatCardModule],
  providers: [ProductService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  codes: Code[]  = [];
  selectedCode = 'INR';
  products: Product[] = [];

  constructor(private productService: ProductService){
    this.getProducts();
    this.getCodes();
  }

  ngOnInit(): void {
    
  }

  getCodes(){
    this.productService.getAllCurrencyCodes().subscribe(
      (data) => {this.codes = data;},
      (error) => console.log(error)
    )
  }
  getProducts(){
    this.productService.getAllProducts(this.selectedCode).subscribe(
      (data) => {this.products = data;},
      (error) => console.log(error)
    )
  }
}
