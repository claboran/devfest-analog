import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TResource } from "../../../shared/resource.model";

@Component({
  selector: 'devfest-resource-list-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="w-full grid gap-4 lg:grid-cols-5 lg:items-start border-2 rounded-xl border-gray-300 min-h-72">
      <div class="w-full lg:w-auto lg:col-span-1 flex items-center justify-center p-4 h-full">
        <img [src]="item().image" alt="{{ item().headline }}" class="w-auto h-full lg:w-full lg:h-auto"/>
      </div>
      <div class="lg:col-span-4 flex flex-col justify-between h-full py-2 lg:py-8 pl-2 lg:pl-0">
        <div class="w-full">
          <h2 class="text-lg lg:text-2xl font-bold">{{ item().headline }}</h2>
          <div class="divider pr-2 lg:pr-5"></div>
        </div>
        <p class="text-sm lg:text-xl">{{ item().description }}</p>
        <a [href]="item().link" class="text-right text-sm lg:text-xl text-blue-500 pr-2 lg:pr-5">{{ item().link }}</a>
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
export class ResourceListItemComponent {
  item = input.required<TResource>();
}
