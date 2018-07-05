import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MainComponent } from './main/main.component';
import { FunctionComponent } from './main/function/function.component';
import { HomeComponent } from './main/home/home.component';
import { ProductComponent } from './main/product/product.component';
import { ProductCategoryComponent } from './main/product-category/product-category.component';
import { RoleComponent } from './main/role/role.component';
import { UserComponent } from './main/user/user.component';
import { LoginComponent } from 'src/app/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    FunctionComponent,
    HomeComponent,
    ProductComponent,
    ProductCategoryComponent,
    RoleComponent,
    UserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
