import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ContactComponent } from './pages/contact/contact.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule} from '@angular/common/http'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'; // depuis la librairie installée
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LoginComponent } from './admin/login/login.component';
import { AddPictureComponent } from './pages/picture/add-picture/add-picture.component';
import { DetailPictureComponent } from './pages/picture/detail-picture/detail-picture.component';
import { EditPictureComponent } from './pages/picture/edit-picture/edit-picture.component';
import { ListPictureComponent } from './pages/picture/list-picture/list-picture.component';
import { PictureFormComponent } from './pages/picture/picture-form/picture-form.component';
import { FormsModule } from '@angular/forms';
import { InMemoryDataService } from './in-memory-data.service';
import { PicturesModule } from './pages/pictures.module';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    PageNotFoundComponent,
    LoginComponent,
    DetailPictureComponent,
    EditPictureComponent,
    AddPictureComponent,
    ListPictureComponent,
    PictureFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
    PicturesModule, // avant l'appRoutingModule parce qu'elle comporte des routes  // specifique.
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
