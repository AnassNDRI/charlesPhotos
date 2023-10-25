import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PicturesService } from '../service/pictures.service';
import { AuthGuard } from '../security/services/auth.guard';
import { DetailPictureComponent } from './picture/detail-picture/detail-picture.component';
import { AddPictureComponent } from './picture/add-picture/add-picture.component';
import { EditPictureComponent } from './picture/edit-picture/edit-picture.component';
import { PictureFormComponent } from './picture/picture-form/picture-form.component';
import { LoaderComponent } from './picture/loader/loader.component';
import { PictureCategoryColorPipe } from '../mockData/picture-category-color.pipe';




const pictureRoutes: Routes = [
  {path: 'edit/picture/:id', component: EditPictureComponent, canActivate: [AuthGuard]},
  {path: 'picture/add', component: AddPictureComponent, canActivate: [AuthGuard]},
  {path: 'picture/:id', component: DetailPictureComponent,  },


];



@NgModule({
  declarations: [
    PictureCategoryColorPipe,
    AddPictureComponent,
    PictureFormComponent,
    EditPictureComponent,
    DetailPictureComponent,
    LoaderComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(pictureRoutes)
  ],
  providers: [PicturesService],
})
export class PicturesModule { }
