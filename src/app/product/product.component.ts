import { Component, OnInit } from '@angular/core';
import{product} from '../Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
product : product = {
name : "item1",
price:123,
desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
status:true,
}
}