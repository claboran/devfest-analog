import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'devfest-footer',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    RouterLink,
  ],
  template: `
    <footer class="footer bg-neutral text-neutral-content justify-around">
      <div class="w-full h-auto">
        <img ngSrc="assets/logo-karlsruhe-dark.webp"
             [style.position]="'relative'"
             class="object-contain"
             alt="Google Devfest logo Karlsruhe 2024"
             fill>
      </div>
      <div class="p-5 xl:p-10">
        <span class="footer-title">Page Examples</span>
        <a routerLink="/message-board" class="link link-hover">Message Board</a>
        <a routerLink="/message-board/add" class="link link-hover">Add a Message</a>
      </div>
      <div class="p-5 xl:p-10">
        <span class="footer-title">Info</span>
        <a routerLink="/profile/gregor-speck-profile" class="link link-hover">Gregor Speck</a>
        <a routerLink="/profile/christian-laboranowitsch-profile" class="link link-hover">Christian Laboranowitsch</a>
        <a href="https://www.bridging-it.de/index.html" class="link link-hover">BridgingIT</a>
      </div>
    </footer>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {

}
