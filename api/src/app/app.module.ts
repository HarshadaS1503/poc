import { importType } from '@angular/compiler/src/output/output_ast';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RoleComponent } from './role/role.component';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RoleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
