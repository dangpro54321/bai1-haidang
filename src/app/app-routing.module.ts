import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { ServicesComponent } from "./services/services.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { AddProductComponent } from "./add-product/add-product.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { ProductManagerComponent } from "./product-manager/product-manager.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "product", component: ProductListComponent },
  { path: "contact", component: ContactComponent },
  { path: "services", component: ServicesComponent },
  { path: "product/add", component: AddProductComponent },
  { path: "product/manager", component: ProductManagerComponent },
  { path: "product/detail/:id", component: ProductDetailComponent },
  { path: "404", component: NotFoundComponent },
  { path: "**", redirectTo: "404", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
