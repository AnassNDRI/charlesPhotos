import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './admin/login/login.component';
import { AdministratorComponent } from './admin/administrator/administrator.component';
import { AuthGuard } from './security/services/auth.guard';
import { PictureManageComponent } from './admin/picture-manage/picture-manage.component';
import { ServeRateManageComponent } from './admin/serve-rate-manage/serve-rate-manage.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { RateServiceComponent } from './pages/rate-service/rate-service.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'pictures', component: GalleryComponent},
  {path: 'rateServices', component: RateServiceComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdministratorComponent, canActivate: [AuthGuard]},
  {path: 'picturemanage', component: PictureManageComponent, canActivate: [AuthGuard]},
  {path: 'serviceratemanage', component: ServeRateManageComponent, canActivate: [AuthGuard]},
  {path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
