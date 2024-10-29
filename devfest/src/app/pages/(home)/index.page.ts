import { ChangeDetectionStrategy, Component } from '@angular/core';
import { toSignal } from "@angular/core/rxjs-interop";
import { injectLoad } from "@analogjs/router";
import { load } from "./index.server";
import { ResourceContainerComponent } from "../../components/resources-container/resource-container.component";

@Component({
  selector: 'devfest-home-page',
  standalone: true,
  imports: [
    ResourceContainerComponent
  ],
  template: `
     <div class="text-white text-xl md:text-2xl lg:text-3xl mt-3 md:mt-4 lg:mt-5 px-4 md:px-3 lg:px-2 xl:px-0">
       <devfest-resource-container [resources]="resources()" />
     </div>
  `,
  styles: [
    `:host {
      @apply w-full;
    }`,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomePageComponent {
  // it does not bring any benefit to set requireSync to false here, we have to wait anyway on the server
  resources = toSignal(injectLoad<typeof load>(), { requireSync: true });
}
