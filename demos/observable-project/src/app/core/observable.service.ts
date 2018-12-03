import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {
  private timerSubject$ = new BehaviorSubject<Date>(null);
  timerChanged$ = this.timerSubject$.asObservable();

  constructor() {
    setInterval(() => {
      this.timerSubject$.next(new Date());
    }, 1000);
  }
}
