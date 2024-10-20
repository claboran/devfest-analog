import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { FooterComponent } from "../components/footer/footer.component";
import { HeaderComponent } from "../components/header/header.component";

@Component({
  selector: 'devfest-home-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    FooterComponent,
    HeaderComponent
  ],
  template: `
    <div class="flex flex-col h-screen">
      <div class="sticky-header w-full">
            <dev-fest-header />
      </div>
      <div class="container flex-1 mb-3 lg:mb-5 mx-auto animate__animated animate__fadeInRightBig">
        <router-outlet></router-outlet>
      </div>
      <devfest-footer />
    </div>
  `,
  styles: [
    `.sticky-header {
      position: sticky;
      top: 0;
      z-index: 1000;
    }`,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeLayoutComponent {
}
