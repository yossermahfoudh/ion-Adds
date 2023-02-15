import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'category',
    loadChildren: () => import('./category/category.module').then( m => m.CategoryPageModule)

  },
  {
    path: '',
    redirectTo: 'category',
    pathMatch: 'full',
  },
  {
    path: 'details/:id',
    loadChildren: () =>
      import('./details/details.module').then((m) => m.DetailsPageModule),
  },
  {
    path: 'add',
    loadChildren: () => import('./add/add.module').then((m) => m.AddPageModule),
  },
  {
    path: 'category',
    loadChildren: () => import('./category/category.module').then( m => m.CategoryPageModule)
  },
  {
    path: 'restaurent',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'own',
    loadChildren: () => import('./restaurent/restaurent.module').then( m => m.RestaurentPageModule)
  },
  {
    path: 'cars',
    loadChildren: () => import('./cars/cars.module').then( m => m.CarsPageModule)
  },
  {
    path: 'cars/add',
    loadChildren: () => import('./cars/addCar/addCar.module').then((m) => m.AddCarPageModule),
  },
  {
    path: 'detail-car/:id',
    loadChildren: () => import('./detail-car/detail-car.module').then( m => m.DetailCarPageModule)
  },
  {
    path: 'car/own',
    loadChildren: () => import('./own/own.module').then( m => m.OwnPageModule)
  },





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
