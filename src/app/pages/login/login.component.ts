import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/security/service/authentication.service';



@Component({
  selector: 'app-login',
  templateUrl:'./login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message = '';
  email = '';
  password = '';
  isLoading = false;

  constructor(private authService: AuthenticationService, private router: Router) {}

  ngOnInit() {
   // this.message = this.authService.isLoggedIn() ? 'Vous êtes actuellement connecté' : 'Vous êtes actuellement déconnecté';
  }

  login() {
    this.isLoading = true;
    this.message = 'Tentative de connexion en cours...';
  
    this.authService.login(this.email, this.password).subscribe({
      next: (isLoggedIn) => {
        this.isLoading = false;
        if (isLoggedIn) {
          this.message = '';
          this.router.navigate(['/admin']);
        } else {
          this.message = 'Échec de la connexion';
          this.password = '';
        }
      },
      error: (err) => {
        this.isLoading = false;

        if (err.status === 404) {
          this.message = 'Utilisateur non trouvé';
        } else if (err.status === 401) {
          this.message = 'Mot de passe incorrect';
        } else if (err.status === 403) {
          this.message = 'Votre compte n\'est pas encore non activé';
        } else {
          this.message = 'Une erreur s’est produite lors de la connexion';
        }
        console.error(err);
      }
    });
  }
  


  logout() {
    this.authService.logout();
    this.message = 'Vous êtes déconnecté';
    this.router.navigate(['/login']);
  }

  
}