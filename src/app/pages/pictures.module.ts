import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PicturesService } from '../service/pictures.service';
import { AuthGuard } from '../security/services/auth.guard';
import { DetailPictureComponent } from './picture/detail-picture/detail-picture.component';
import { AddPictureComponent } from './picture/add-picture/add-picture.component';
import { EditPictureComponent } from './picture/edit-picture/edit-picture.component';
import { RateServiceComponent } from './rate-service/rate-service.component';
import { RateServService } from '../service/rate-serv.service';
import { BorderCardDirective } from '../mockData/border-card.directive';
import { PictureFormComponent } from './picture/picture-form/picture-form.component';
import { LoaderComponent } from './picture/loader/loader.component';
import { PictureCategoryColorPipe } from '../mockData/picture-category-color.pipe';
import { ServiceRateDetailComponent } from './serviceRate/service-rate-detail/service-rate-detail.component';
import { ServiceRateFormComponent } from './serviceRate/service-rate-form/service-rate-form.component';
import { ServiceRateEditComponent } from './serviceRate/service-rate-edit/service-rate-edit.component';




const pictureRoutes: Routes = [
  {path: 'edit/picture/:id', component: EditPictureComponent, canActivate: [AuthGuard]},
  {path: 'picture/add', component: AddPictureComponent, canActivate: [AuthGuard]},
  {path: 'picture/:id', component: DetailPictureComponent,  },
  {path: 'rateServices', component: RateServiceComponent},


];



@NgModule({
  declarations: [
    PictureCategoryColorPipe,
    RateServiceComponent,
    AddPictureComponent,
    BorderCardDirective,
    PictureFormComponent,
    EditPictureComponent,
    DetailPictureComponent,
    AddPictureComponent,
    LoaderComponent,
    ServiceRateDetailComponent,
    ServiceRateFormComponent,
    ServiceRateEditComponent


  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(pictureRoutes)
  ],
  providers: [PicturesService, RateServService],
})
export class PicturesModule { }
