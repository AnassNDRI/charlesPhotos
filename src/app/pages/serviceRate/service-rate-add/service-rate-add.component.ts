import { Component, OnInit } from '@angular/core';
import { RateServ } from 'src/app/mockData/rate-serv';

@Component({
  selector: 'app-service-rate-add',
  templateUrl: './service-rate-add.component.html',
  styleUrls: ['./service-rate-add.component.css']
})
export class ServiceRateAddComponent implements OnInit {

  rateServ: RateServ

  ngOnInit() {
      this.rateServ = new RateServ();
  }

}
