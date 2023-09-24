import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { RateServiceComponent } from './pages/rate-service/rate-service.component';
import { ContactComponent } from './pages/contact/contact.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LoginComponent } from './admin/login/login.component';
import { AddPictureComponent } from './pages/picture/add-picture/add-picture.component';
import { DetailPictureComponent } from './pages/picture/detail-picture/detail-picture.component';
import { EditPictureComponent } from './pages/picture/edit-picture/edit-picture.component';
import { ListPictureComponent } from './pages/picture/list-picture/list-picture.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponent,
    RateServiceComponent,
    ContactComponent,
    PageNotFoundComponent,
    LoginComponent,
    DetailPictureComponent,
    EditPictureComponent,
    AddPictureComponent,
    ListPictureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
