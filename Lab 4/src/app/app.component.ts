import { Component } from '@angular/core';
import { ProductsComponent } from "./products/products.component";


@Component({
  selector: 'app-root',  // Корневой компонент должен называться 'app-root'
  templateUrl: './app.component.html',  // Должно быть app.component.html
  styleUrls: ['./app.component.css']  // Должно быть app.component.css
  ,
  imports: [ProductsComponent]
})


export class AppComponent {
  title = 'kaspi-products';
}
