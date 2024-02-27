import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { ProductosComponent } from './productos/productos.component';
import { AdministrationComponent } from './administration.component';

const routes: Routes = [
  {
    path: '',
    component: AdministrationComponent,
    pathMatch: 'full'
  },
  {
    path: 'cliente',
    component: ClientesComponent
  },
  {
    path: 'producto',
    component: ProductosComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
