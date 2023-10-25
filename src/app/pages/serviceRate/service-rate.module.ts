import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from 'src/app/security/services/auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ServiceRateEditComponent } from './service-rate-edit/service-rate-edit.component';
import { ServiceRateDetailComponent } from './service-rate-detail/service-rate-detail.component';
import { ServiceRateAddComponent } from './service-rate-add/service-rate-add.component';
import { ServiceRateFormComponent } from './service-rate-form/service-rate-form.component';
import { RateServService } from 'src/app/service/rate-serv.service';


const rateServRoutes: Routes = [
  {path: 'edit/rateService/:id', component: ServiceRateEditComponent, canActivate: [AuthGuard]},
  {path: 'rateService/add', component: ServiceRateAddComponent, canActivate: [AuthGuard]},
  {path: 'rateService/:id', component: ServiceRateDetailComponent,  },


];

@NgModule({
  declarations: [
    ServiceRateDetailComponent,
    ServiceRateFormComponent,
    ServiceRateEditComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(rateServRoutes)
  ],
  providers: [RateServService],
})
export class ServiceRateModule {}
