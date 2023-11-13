import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RateServ } from 'src/app/mockData/rate-serv';
import { RateServService } from 'src/app/service/rate-serv.service';

@Component({
  selector: 'app-service-rate-edit',
  template: `<app-service-rate-form ></app-service-rate-form>`
})
export class ServiceRateEditComponent implements OnInit{

  rateServ: RateServ | undefined ;

  constructor(
    private activeRoute: ActivatedRoute,
    private rateServService: RateServService

    ) {}


  ngOnInit() {
    const rateServId: string|null = this.activeRoute.snapshot.paramMap.get('id');
    if(rateServId) {
      this.rateServService.getRateById(+rateServId)
      .subscribe(rateServ => this.rateServ = rateServ);
    } else {
      this.rateServ = undefined;
    }
  }


}
