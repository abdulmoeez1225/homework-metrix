import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CatagoryNameComponent } from './components/catagory-name/catagory-name.component';
import { MainComponent } from './components/main/main.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SubCatagoryComponent } from './components/sub-catagory/sub-catagory.component';
import { ObjectCatagoryComponent } from './components/object-catagory/object-catagory.component';
import { SubObjectComponent } from './components/sub-object/sub-object.component';
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CatagoryNameComponent,
    MainComponent,
    SubCatagoryComponent,
    ObjectCatagoryComponent,
    SubObjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
