import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RateServ } from 'src/app/mockData/rate-serv';
import { RateServService } from 'src/app/service/rate-serv.service';

@Component({
  selector: 'app-service-rate-form',
  templateUrl: './service-rate-form.component.html',
  styleUrls: ['./service-rate-form.component.css']
})
export class ServiceRateFormComponent  implements OnInit {


  @Input() rateServ : RateServ = new RateServ();

  pictureLinks$: Observable<string[]>;
  IsAddForm: boolean = true;

  constructor(
    private rateServService: RateServService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const rateServId = +this.route.snapshot.params['id'];
    if (rateServId ) {
      this.IsAddForm = false;
      this.rateServService.getRateById(rateServId ).subscribe({
        next: (rateServ) => {
          if (rateServ) {
            this.rateServ = rateServ;
          } else {
            console.error(`Aucune photo trouvée avec l'id ${rateServId}`);
          }
        },
        error: (err) => {
          console.error(err);
        },
      });
    }
    this.pictureLinks$ = this.rateServService.getPictureLinks();
  }

  onSubmit() {
    if (this.IsAddForm) {
      this.rateServService.addPicture(this.rateServ).subscribe({
        next: (rateServ: RateServ) => this.router.navigate(['/rateService', rateServ.id]),
        error: (error) => console.error('Erreur lors de l\'ajout de la photo', error)
      });
    } else {
      this.rateServService.updateRate(this.rateServ).subscribe({
        next: () => this.router.navigate(['/rateService', this.rateServ.id]),
        error: (error) => console.error('Erreur lors de la mise à jour de la photo', error)
      });
    }
  }



  goBack() {
    this.router.navigate(['/rateServices'])
  }


}
