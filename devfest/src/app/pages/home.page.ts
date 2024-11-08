import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { FooterComponent } from "../components/footer/footer.component";
import { HeaderComponent } from "../components/header/header.component";
import { RouteMeta } from "@analogjs/router";

export const routeMeta: RouteMeta = {
  meta: [
    {
      name: 'description',
      content: 'Analog Devfest Demo',
    },
    {
      name: 'author',
      content: 'Gregor Speck, Christian Laboranowitsch',
    },
    {
      property: 'og:title',
      content: 'Analog Devfest Demo',
    },
    {
      property: 'og:description',
      content: 'Some catchy description',
    },
    {
      property: 'og:image',
      content: 'https://devfest-analog.vercel.app/assets/analog-logo.png',
    },
  ],
};
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
      <div class="container flex-1 mb-3 lg:mb-5 mx-auto">
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
