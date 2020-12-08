import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-input-button-component',
  template: `
    <input pInputText #inputElementRef
           [value]="title"
           (keyup.enter)="submitValue($event.target.value)">

    <button pButton (click)="submitValue(inputElementRef.value)" label="Save"></button>

  `,
  styleUrls: ['./input-button.component.css']
})
export class InputButtonComponent implements OnInit {

  @Output() submit: EventEmitter<string> = new EventEmitter();

  title = 'Hello World';

  constructor() { }

  ngOnInit(): void {
  }

  submitValue(newTitle: string): void {
    this.submit.emit(newTitle);
  }
}
