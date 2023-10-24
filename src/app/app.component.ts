import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { AuthenticationService } from './security/services/authentication.service';
import { Router } from '@angular/router';
import { LayoutService } from './security/services/layout.service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'charlesPhotos';
  headerVisible = true;
  headerVisibleSubscription: Subscription;
  isLoggedIn = false; //  pour savoir si un utilisateur est connecté ou non
  private userSubscription: Subscription;


  constructor(
    private authService: AuthenticationService,
    private layoutService: LayoutService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {
    // À chaque démarrage de l'application, on vérifie si l'utilisateur est déjà connecté
    const currentUserString = sessionStorage.getItem('currentUser');
    if (currentUserString) {
      const currentUser = JSON.parse(currentUserString);
      if (currentUser && currentUser.email && currentUser.password) {
        this.authService.login(currentUser.email, currentUser.password).subscribe(
          success => this.isLoggedIn = true,
          error => this.isLoggedIn = false
        );
      }
    }
  }

  ngOnInit() {
    // Gérer la visibilité de l'en-tête
    this.headerVisibleSubscription = this.layoutService.isHeaderVisible$.subscribe(headerVisible => {
      this.headerVisible = headerVisible;
      this.cdr.detectChanges();
    });
    // Souscrire à l'état de connexion de l'utilisateur
    this.userSubscription = this.authService.currentUser$.subscribe(user => {
      this.isLoggedIn = !!user;
    });


  }

  ngOnDestroy() {
    this.headerVisibleSubscription.unsubscribe(); // Désabonnement pour éviter les fuites de mémoire
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }

  logout() {
    this.authService.logout();
    this.isLoggedIn = false;
    this.router.navigate(['/home']);
    // Vous pouvez ajouter plus de logique ici si nécessaire
  }
  }

