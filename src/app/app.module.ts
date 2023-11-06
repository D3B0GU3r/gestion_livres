
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivreListComponent } from './livre-list/livre-list.component';
import { LivreDetailsComponent } from './livre-details/livre-details.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [
    AppComponent,
    LivreListComponent,
    LivreDetailsComponent
  ],
  imports: [
    MatCardModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatInputModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
