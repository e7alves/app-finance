import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {

  @Input() totalCredits: number = 0;
  @Input() totalDebts: number = 0;

  constructor() { }

  calcSummary() {
    return this.totalCredits - this.totalDebts;
  }
  
}
