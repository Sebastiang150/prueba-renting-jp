import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdministrationModule } from './administration/administration.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule, NgbPaginationModule, NgbPopoverModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSortModule } from '@angular/material/sort';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './core/layout/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,

    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdministrationModule,
    HttpClientModule,

    //

    CommonModule,
    FormsModule,
    NgbPopoverModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    NgbTooltipModule,
    NgSelectModule,
    MatSortModule,
    NgbModalModule,
    NgxSpinnerModule.forRoot({ type: 'ball-spin-clockwise' })
  ],
  exports: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
