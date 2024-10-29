import { TResource } from "../../shared/resource.model";
import { produce } from "immer";


export type TResourceStateModel = {
  resources: TResource[];
};

export const resourceStateReducer = (
  state: TResourceStateModel,
  resources: TResource[],
) =>
  produce(state, draft => {
    draft.resources = resources;
  });

