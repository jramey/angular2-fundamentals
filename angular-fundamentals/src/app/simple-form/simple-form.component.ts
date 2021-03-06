import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <input 
    #myInput 
    type="text" 
    [(ngModel)]="message"
    [ngClass]="{ mousedown:isMouseDown }"
    (mousedown)="isMouseDown = true"
    (mousedup)="isMouseDown = false"
    (mouseleave)="isMouseDown = false">
    <button class="white bg-black code" (click)="update.emit({ text:message })">Click me!</button>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
    }

    * {
      font-family: monospace;
    }

    input:focus {
      font-weight: bold;
      outline: none;
    }

    button {
      border: none;
    }

    .mousedown {
      border: 2px solid green;
    }
  `]
})
export class SimpleFormComponent implements OnInit {

  isMouseDown
  @Input() message;
  @Output() update = new EventEmitter();

  constructor() { }

  ngOnInit() { }

}
