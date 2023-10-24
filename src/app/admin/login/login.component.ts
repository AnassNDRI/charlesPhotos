import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/security/services/auth.service';
import { AuthenticationService } from 'src/app/security/services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  message = 'Vous etes déconnectés (Charles/photo)';
  email = '';
  password = '';

  constructor(private authService: AuthenticationService, private router: Router) {}

  ngOnInit() {}

  setMessage(isLoggedIn: boolean) {
    this.message = isLoggedIn ? 'Vous etes connectés' : 'Identifiant ou mot de passe incorrect.';
  }

  Adminlogin() {
    this.message = 'Tentative de connexion en cours...';
    this.authService.login(this.email, this.password).subscribe((isLoggedIn: boolean) => {
      this.setMessage(isLoggedIn);
      if (isLoggedIn) {
        this.router.navigate(['/admin']);
      } else {
        this.password = '';
        this.router.navigate(['/login']);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.message = 'Vous êtes déconnetés';
  }

  goBack() {
    this.router.navigate(['/pictures']);
  }

}
