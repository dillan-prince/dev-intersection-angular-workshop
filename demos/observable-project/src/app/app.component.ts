import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ObservableService } from './core/observable.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  timerValue: Date;
  timerSub: Subscription;

  constructor(private observableService: ObservableService) {}

  ngOnInit(): void {
    this.timerSub = this.observableService.timerChanged$.subscribe(
      (timerValue) => (this.timerValue = timerValue)
    );
  }

  ngOnDestroy(): void {
    this.timerSub.unsubscribe();
  }
}
