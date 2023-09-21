import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-rate-service',
  templateUrl: './rate-service.component.html',
  styleUrls: ['./rate-service.component.css']
})
export class RateServiceComponent implements OnInit {

  ngOnInit() {
    $('#myCarousel').carousel();
  }

}
