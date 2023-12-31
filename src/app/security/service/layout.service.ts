import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  headerVisible: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  isHeaderVisible$ = this.headerVisible.asObservable();

  constructor() { }

}
