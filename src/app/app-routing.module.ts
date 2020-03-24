import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { ServicesComponent } from "./services/services.component";
import { ProductListComponent } from "./product-list/product-list.component";
const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  {path:"product",component: ProductListComponent},
  { path: "contact", component: ContactComponent },
  { path: "services", component: ServicesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
