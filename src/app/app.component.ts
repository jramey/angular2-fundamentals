import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<div><app-simple-form></app-simple-form>{{mail.message}}</div>'
})
export class AppComponent {
  title = 'Lets get started!';

  constructor(@Inject('mail') private mail) {}
}

