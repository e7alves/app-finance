import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent {

  constructor() { }

  @Input() type: string = '';
  @Input() id: string = '';
  @Input() placeholder: string = ''
  @Input() label: string = ''
  @Input() value: any = ''
  @Input() disabled: boolean = false
  @Output() changeValue = new EventEmitter(); 

  onChangeValue() {
    this.changeValue.emit({ value: this.value });
  }
}
