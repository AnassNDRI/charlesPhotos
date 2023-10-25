import { Injectable } from '@angular/core';
import { PICTURES } from './mockData/mock-pictures-list';
import { RATESERV } from './mockData/mock-RateService-list';
import { CATEGORY } from './mockData/mock-category-list';
import { RATE } from './mockData/mock-rate';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDataService {

  // cette va simuler le fait d'avoir des données venant du serveur
  createDb() {
   const pictures = PICTURES;
   const rateServices = RATESERV;
   const rate = RATE;
   const category = CATEGORY;
   return {pictures, rateServices, rate, category }

  }
}


