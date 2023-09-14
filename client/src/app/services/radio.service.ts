import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class radioService {
  // private selection = new BehaviorSubject<string>('');

  // get currentSelection() {
  //   return this.selection.asObservable();
  // }

  private selection = new BehaviorSubject<string>('');

  get radioSelection() {
    return this.selection.asObservable();
  }

  selection1() {
    this.selection.next('Debt Review');
  }

  selection2() {
    this.selection.next('Debt Counselling');
  }

  selection3() {
    this.selection.next('Debt Consolidation');
  }


  selectionA() {
    this.selection.next('Credit Limit');
  }

  selectionB() {
    this.selection.next('Credit Score');
  }

  selectionC() {
    this.selection.next('Debtor Status');
  }

}