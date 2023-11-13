import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/security/services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  message = 'Vous êtes actuellement déconnecté';
  email = '';
  password = '';

  constructor(private authService: AuthenticationService, private router: Router) {}

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.message = 'Vous êtes actuellement connecté';
    }
  }

  Adminlogin() {
    this.message = 'Tentative de connexion en cours...';
    this.authService.login(this.email, this.password).subscribe({
      next: (isLoggedIn) => {
        if (isLoggedIn) {
          this.message = 'Vous êtes connecté';
          this.router.navigate(['/admin']);
        } else {
          this.message = 'Échec de la connexion';
          this.password = '';
        }
      },
      error: (err) => {
        this.message = 'Une erreur s’est produite lors de la connexion';
        console.error(err);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.message = 'Vous êtes déconnecté';
    this.router.navigate(['/login']);
  }

  goBack() {
    this.router.navigate(['/pictures']);
  }
}
