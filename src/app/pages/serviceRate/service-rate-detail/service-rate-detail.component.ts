import { Component, OnInit } from '@angular/core';
//import { RateServ } from '../../../mockData/rate-serv';
import { ActivatedRoute, Router } from '@angular/router';
import { RateServService } from 'src/app/service/rate-serv.service';
import { AuthenticationService } from 'src/app/security/services/authentication.service';
import { Rate } from 'src/app/mockData/rate';
import { Category } from 'src/app/mockData/category';

@Component({
  selector: 'app-service-rate-detail',
  templateUrl: './service-rate-detail.component.html',
  styleUrls: ['./service-rate-detail.component.css']
})
export class ServiceRateDetailComponent implements OnInit {



  rateList: Rate [];
  categoryList: Category [];
  rate: Rate | undefined;
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

  deleteRate(rate: Rate) {
    let categoryNames = rate.category.map(categ => categ.nameCate).join(', ');
    let confirmation = confirm(`Voulez-vous vraiment supprimer cette photo de la catégorie ${categoryNames} ?`);
    if (confirmation) {
      this.rateServService.deleteRateById(rate.id)
        .subscribe(() => this.goBack());
    }
  }


  goToEditRate(rate: Rate) {
    this.route.navigate(['/edit/rateService', rate.id]);
  }

  goBack() {
    this.route.navigate(['/rateServices'])
  }

}
