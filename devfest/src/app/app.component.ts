import { ChangeDetectionStrategy, Component } from '@angular/core';
import HomeLayoutComponent from "./pages/home.page";

@Component({
  selector: 'devfest-root',
  standalone: true,
  imports: [HomeLayoutComponent],
  template: `
    <devfest-home-layout />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
