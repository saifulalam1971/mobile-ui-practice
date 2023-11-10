import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { ItemsComponent } from './item/items.component'
import { ItemDetailComponent } from './item/item-detail.component';
import { ListComponent } from './../app/home/list/list.component'
import { DetailsComponent } from './../app/home/details/details.component'

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'items', component: ItemsComponent },
  // { path: 'item/:id', component: ItemDetailComponent },
  { path: 'list', component: ListComponent },
  { path: 'list/:id', component: DetailsComponent },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
