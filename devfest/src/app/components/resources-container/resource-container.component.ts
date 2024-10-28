import { ChangeDetectionStrategy, Component, effect, input } from '@angular/core';
import { TResource } from "../../../shared/resource.model";
import { JsonPipe } from "@angular/common";
import { patchState, signalState } from "@ngrx/signals";
import { resourceStateReducer, TResourceStateModel } from "../../state/resource-state.model";
import { ResourceListItemComponent } from "./resource-list-item.component";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'devfest-resource-container',
  standalone: true,
  imports: [
    JsonPipe,
    ResourceListItemComponent,
    RouterLink
  ],
  template: `
    <div class="w-full py-4 text-white flex flex-col">
      @for (resource of resourceState().resources; track resource.order) {
        <div class="w-full flex flex-col">
          <devfest-resource-list-item [item]="resource" />
        </div>
      }
    </div>
  `,
  styles: [
    `:host {
      @apply w-full;
    }`,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResourceContainerComponent {

  readonly resourceState = signalState<TResourceStateModel>({
    resources: [],
  });
  resources = input.required<TResource[]>()

  constructor() {
    effect(() => {
      patchState(this.resourceState, (state: TResourceStateModel) =>
        resourceStateReducer(state, this.resources()));
    }, { allowSignalWrites: true });
  }
}
