import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-value-box',
  templateUrl: './value-box.component.html',
  styleUrls: ['./value-box.component.css']
})
export class ValueBoxComponent implements OnInit {

  constructor() { }

  @Input('label') label: string = '';
  @Input('color') color: string = '';
  @Input('icon') icon: string = '';
  @Input('value') value: number;

  ngOnInit() {
  }

}
