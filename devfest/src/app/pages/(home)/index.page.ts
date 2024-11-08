import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { toSignal } from "@angular/core/rxjs-interop";
import { injectLoad, RouteMeta } from "@analogjs/router";
import { load } from "./index.server";
import { ResourceContainerComponent } from "../../components/resources-container/resource-container.component";

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
      content: 'Analog Demo App for Devfest',
    },
    {
      property: 'og:image',
      content: 'https://devfest-analog.vercel.app/assets/analog-logo.png',
    },
  ],
};

@Component({
  selector: 'devfest-home-page',
  standalone: true,
  imports: [
    ResourceContainerComponent
  ],
  template: `
     <div class="text-white text-xl md:text-2xl lg:text-3xl mt-3 md:mt-4 lg:mt-5 px-4 md:px-3 lg:px-2 xl:px-0 animate__animated animate__backInRight">
       <devfest-resource-container [resources]="resources()" />
     </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomePageComponent {
  @HostBinding('class')
  readonly classes = ['w-full'];
  // it does not bring any benefit to set requireSync to false here, we have to wait anyway on the server
  resources = toSignal(injectLoad<typeof load>(), { requireSync: true });
}
