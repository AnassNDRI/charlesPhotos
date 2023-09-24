import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  message : string = "";

  send() {
     this.message = 'Le formulaire a été envoyé avec succès.';
     location.reload(); // Cette ligne rafraîchit la page.// code rafraichir la page.
    }


}
