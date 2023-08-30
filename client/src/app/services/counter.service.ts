import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
// counter.service.ts

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private selection = new BehaviorSubject<string>('');

  get currentSelection() {
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
};