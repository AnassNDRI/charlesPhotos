import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rate } from 'src/app/mockData/rate';
import { AuthenticationService } from 'src/app/security/services/authentication.service';
import { RateServService } from 'src/app/service/rate-serv.service';

declare var $: any;

@Component({
  selector: 'app-rate-service',
  templateUrl: './rate-service.component.html',
  styleUrls: ['./rate-service.component.css']
})
export class RateServiceComponent implements OnInit  {

  rateServList: Rate[] = [];
  isLoggedIn: boolean = false;
  filteredRateServices: Rate[] = [];

  constructor (
    private route: Router,
    private rateServService: RateServService,
    private authService: AuthenticationService
  ) {}

  ngOnInit()  {

    this.rateServService.getRateServList().subscribe(rateServList => this.rateServList = rateServList);

        // Initialisez l'état de connexion
        this.isLoggedIn = this.authService.isLoggedIn();
  }
  goToRateServ(rateServ: Rate) {

    this.route.navigate(['/rateService', rateServ.id])
  }

  askAdd() {
    this.route.navigate(['rateService/add'])
  }

  goToRateServDetail() {
    this.route.navigate(['rateService/:id'])
  }

  goBack() {
    this.route.navigate(['/pictures'])
  }

  goToEditRateService(rateServ: Rate) {
    this.route.navigate(['/edit/rateService', rateServ.id]);
  }


  deleteRateService(rateServ: Rate) {

    let confirmation = confirm(`Voulez-vous vraiment supprimer cette photo de la catégorie ${rateServ.title} ?`);
    if (confirmation) {
      this.rateServService.deleteRateById(rateServ.id).subscribe(() => {
        // Retire la photo de la liste filteredRateServices
        this.filteredRateServices = this.filteredRateServices.filter(rs => rs.id !== rateServ.id);
        // Rafraichissement de la liste
        this.rateServList = this.rateServList.filter(rs => rs.id !== rateServ.id);
      });
    }
  }




  // deletePicture(rateService: RateServ) {
  //   let categoryNames = picture.category.map(categ => categ.nameCate).join(', ');
  //   let confirmation = confirm(`Voulez-vous vraiment supprimer cette photo de la catégorie ${categoryNames} ?`);
  //   if (confirmation) {
  //     this.pictureService.deletePictureById(picture.id).subscribe(() => {
  //       // Retire la photo de la liste filteredPictures
  //       this.filteredPictures = this.filteredPictures.filter(p => p.id !== picture.id);
  //       // Rafraichissement de la liste
  //       this.pictureList = this.pictureList.filter(p => p.id !== picture.id);
  //     });
  //   }
  // }

}




