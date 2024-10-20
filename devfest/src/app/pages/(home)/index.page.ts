import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
  selector: 'devfest-home-page',
  standalone: true,
  imports: [],
  template: `
     <div class="text-white text-xl md:text-2xl lg:text-3xl mt-3 md:mt-4 lg:mt-5 px-4 md:px-3 lg:px-2 xl:px-0">
       AnalogJS Resources Listing with image and links etc. with Server Side Data Fetching is coming here...
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
}
