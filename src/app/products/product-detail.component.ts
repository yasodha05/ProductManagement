import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
    pageTitle: string = 'Product Detail';
    product: IProduct;
    errorMessage: string;

    constructor(private productService: ProductService,
                private router: Router,
                private route: ActivatedRoute) {

    }

    ngOnInit(): void {
      debugger;
      console.log(this.route);
        const param = this.route.snapshot.paramMap.get('id');
        if (param) {
            const id = +param;
            this.getProduct(id);
        }
    }

    getProduct(id: number) {
      debugger;
        this.productService.getProduct(id).subscribe(
          product => this.product = product,
          error => this.errorMessage = <any>error
        );
    }

    onBack(): void {
      //navigate programtically in angular
        this.router.navigate(['/products']);
    }
}
