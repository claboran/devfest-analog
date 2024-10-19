import { Component } from '@angular/core';

import { AnalogWelcomeComponent } from './analog-welcome.component';

@Component({
  selector: 'devfest-home',
  standalone: true,
  imports: [AnalogWelcomeComponent],
  template: `
     <devfest-analog-welcome/>
  `,
})
export default class HomeComponent {
}
