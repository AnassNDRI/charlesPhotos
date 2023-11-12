import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { RateServService } from 'src/app/service/rate-serv.service';
import { AuthenticationService } from 'src/app/security/services/authentication.service';
import { Category } from 'src/app/mockData/category';
import { RateServ } from 'src/app/mockData/rate-serv';

@Component({
  selector: 'app-service-rate-detail',
  templateUrl: './service-rate-detail.component.html',
  styleUrls: ['./service-rate-detail.component.css']
})
export class ServiceRateDetailComponent implements OnInit {



  rateList: RateServ  [];
  categoryList: Category [];
  rate: RateServ  | undefined;
  isLoggedIn: boolean = false;

  constructor (
      private routeActive: ActivatedRoute,
      private route: Router ,
      private rateServService : RateServService,
      private authService: AuthenticationService

    ){}

  ngOnInit() {

    const rateId: string|null = this.routeActive.snapshot.paramMap.get('id');

    if(rateId) {
      this.rateServService.getRateById(+rateId)
      .subscribe(rate => this.rate = rate);
    }
    // Initialisez l'état de connexion
    this.isLoggedIn = this.authService.isLoggedIn();

  }

  deleteRate(rate: RateServ ) {
    let confirmation = confirm(`Voulez-vous vraiment supprimer la photo ${rate.title} ?`);
    if (confirmation) {
      this.rateServService.deleteRateById(rate.id)
        .subscribe(() => this.goBack());
    }
  }


  goToEditRate(rate: RateServ ) {
    this.route.navigate(['/edit/rateService', rate.id]);
  }

  goBack() {
    this.route.navigate(['/rateServices'])
  }

}
