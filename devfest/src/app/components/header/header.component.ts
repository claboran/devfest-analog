import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'dev-fest-header',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    RouterLink,
  ],
  template: `
    <div class="w-full bg-gradient-to-t from-base-100 to-secondary border-b-2 border-neutral">
      <div class="container mx-auto py-4 px-2 lg:px-3 xl:px-0">
        <div class="flex items-center justify-around">
          <a routerLink="/" class="w-1/6 flex justify-center">
            <img ngSrc="assets/analog-logo.svg" alt="DevFest" [style.position]="'relative'" fill >
          </a>
          <div class="w-5/6 text-center">
            <div class="text-2xl md:text-4xl lg:text-8xl font-bold text-white w-full">
              devfest <span class="uppercase text-primary">analog</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  @HostBinding('class')
  readonly classes = ['w-full'];
}
