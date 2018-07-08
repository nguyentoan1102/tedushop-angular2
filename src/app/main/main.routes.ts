import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const mainRoutes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  //localhost:4200/main/home
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  // //localhost:4200/main/user
  // { path: 'user', loadChildren: './user/user.module#UserModule' },

  // { path: 'role', loadChildren: './role/role.module#RoleModule' },

  // { path: 'function', loadChildren: './function/function.module#FunctionModule' },

  // { path: 'product-category', loadChildren: './product-category/product-category.module#ProductCategoryModule' },

  // { path: 'product', loadChildren: './product/product.module#ProductModule' }

]
