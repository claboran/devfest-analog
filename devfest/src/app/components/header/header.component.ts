import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'dev-fest-header',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
  ],
  template: `
    <div class="w-full bg-gradient-to-t from-base-100 to-secondary border-b-2 border-neutral">
      <div class="container mx-auto py-4 px-2 lg:px-3 xl:px-0">
        <div class="flex items-center justify-around">
          <div class="w-1/6 flex justify-center">
            <img ngSrc="assets/analog-logo.svg" alt="DevFest" [style.position]="'relative'" fill >
          </div>
          <div class="w-5/6 text-center">
            <div class="text-2xl md:text-4xl lg:text-8xl font-bold text-white w-full">devfest analog</div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `:host {
      @apply w-full;
    }`,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {}
