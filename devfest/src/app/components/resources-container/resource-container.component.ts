import { ChangeDetectionStrategy, Component, effect, HostBinding, input } from '@angular/core';
import { TResource } from "../../../shared/resource.model";
import { patchState, signalState } from "@ngrx/signals";
import { resourceStateReducer, TResourceStateModel } from "../../state/resource-state.model";
import { ResourceListItemComponent } from "./resource-list-item.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'devfest-resource-container',
  standalone: true,
  imports: [
    CommonModule,
    ResourceListItemComponent,
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
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResourceContainerComponent {

  @HostBinding('class')
  readonly classes = ['w-full'];
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
