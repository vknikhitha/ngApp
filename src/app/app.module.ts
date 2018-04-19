import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AuthorsListComponent } from './components/authors-list/authors-list.component';

// service
import { AuthorsService } from './services/authors.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsListComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
