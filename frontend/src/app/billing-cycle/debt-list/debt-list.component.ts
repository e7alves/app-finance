import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-debt-list',
  templateUrl: './debt-list.component.html',
  styleUrls: ['./debt-list.component.css']
})
export class DebtListComponent {

  constructor() { }

  @Input() debts = [{}];
  @Input() disabled = false;

  enumStatus = [
    'SCHEDULED',
    'PAID',
    'PENDING',
  ]

  add(index) {
    this.debts.splice(index + 1, 0, {});
  }

  clone(index) {
    this.debts.splice(index + 1, 0, this.debts[index]);
  }

  delete(index) {
    if (this.debts.length > 1) {
      this.debts.splice(index, 1);
    }
  }
}
