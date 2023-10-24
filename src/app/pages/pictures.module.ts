import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
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




const pictureRoutes: Routes = [
  {path: 'edit/picture/:id', component: EditPictureComponent, },
  {path: 'picture/add', component: AddPictureComponent, canActivate: [AuthGuard] },
  {path: 'picture/:id', component: DetailPictureComponent,  },
  {path: 'pictures', component: GalleryComponent},
  {path: 'rateServices', component: RateServiceComponent},


];



@NgModule({
  declarations: [
    PictureCategoryColorPipe,
    GalleryComponent,
    RateServiceComponent,
    AddPictureComponent,
    BorderCardDirective,
    PictureFormComponent,
    EditPictureComponent,
    AddPictureComponent,
    LoaderComponent


  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(pictureRoutes)
  ],
  providers: [PicturesService, RateServService],
})
export class PicturesModule { }
