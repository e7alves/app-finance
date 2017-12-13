import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-input',
  templateUrl: './login-input.component.html',
  styleUrls: ['./login-input.component.css']
})
export class LoginInputComponent {

  @Input() value;
  @Input() placeholder = '';
  @Input() hidden = false;
  @Input() type = 'text';
  @Output() changeValue = new EventEmitter();

  constructor() { }
}
