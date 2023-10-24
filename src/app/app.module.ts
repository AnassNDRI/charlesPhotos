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
import { FormsModule } from '@angular/forms';
import { InMemoryDataService } from './in-memory-data.service';
import { PicturesModule } from './pages/pictures.module';
import { HomeComponent } from './pages/home/home.component';
import { AdministratorComponent } from './admin/administrator/administrator.component';
import { PictureManageComponent } from './admin/picture-manage/picture-manage.component';
import { ServeRateManageComponent } from './admin/serve-rate-manage/serve-rate-manage.component';
import { GalleryComponent } from './pages/gallery/gallery.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    PageNotFoundComponent,
    LoginComponent,
    AdministratorComponent,
    GalleryComponent,
    PictureManageComponent,
    ServeRateManageComponent,

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
