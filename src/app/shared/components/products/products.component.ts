import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productStatus : string = "The product is delivered !!!"

@Output() getProductStatus : EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  onStatusUpdate(){
     this.getProductStatus.emit(this.productStatus)
  }

}
