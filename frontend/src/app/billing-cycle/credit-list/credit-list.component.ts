import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-credit-list',
  templateUrl: './credit-list.component.html',
  styleUrls: ['./credit-list.component.css']
})
export class CreditListComponent implements OnInit {

  constructor() { }

  @Input() disabled = false;
  @Input() credits = [{}];

  ngOnInit() {
  }

  add(index) {
    this.credits.splice(index + 1, 0, {});
  }

  clone(index) {
    this.credits.splice(index + 1, 0, this.credits[index]);
  }

  delete(index) {
    if (this.credits.length > 1) {
      this.credits.splice(index, 1);
    }
  }
}
