import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RateServ } from 'src/app/mockData/rate-serv';
import { RateServService } from 'src/app/service/rate-serv.service';

declare var $: any;

@Component({
  selector: 'app-rate-service',
  templateUrl: './rate-service.component.html',
  styleUrls: ['./rate-service.component.css']
})
export class RateServiceComponent implements OnInit  {

  rateServList: RateServ[] = [];

  constructor (
    private route: Router,
    private rateServService: RateServService
  ) {}

  ngOnInit()  {

    this.rateServService.getRateServList().subscribe(rateServList => this.rateServList = rateServList);
  }
  goToRateServ(rateServ: RateServ) {

    this.route.navigate(['/rateServices', rateServ.id])
  }

  goToEditeRateServ() {
    this.route.navigate(['rateServices/add'])
  }

  goToRateServDetail() {
    this.route.navigate(['rateServices/:id'])
  }
}
