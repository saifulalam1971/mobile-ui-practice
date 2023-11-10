import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule, NativeScriptFormsModule, NativeScriptModule } from '@nativescript/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ItemsComponent } from './item/items.component';
import { ListComponent } from './home/list/list.component';
import { DetailsComponent } from './home/details/details.component'
import { ItemDetailComponent } from './item/item-detail.component'
import { NativeScriptMaterialButtonModule } from "@nativescript-community/ui-material-button/angular";
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule, 
    NativeScriptCommonModule,
    NativeScriptModule,
    ReactiveFormsModule,
    NativeScriptFormsModule,
    AppRoutingModule,
    NativeScriptMaterialButtonModule
  ],
  declarations: [AppComponent, ItemsComponent, ItemDetailComponent,ListComponent, DetailsComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
