import { PageServerLoad } from "@analogjs/router";
import {
  fetchAnalogJSResources
} from "../../../server/service/analogjs-resource.service";


export const load =
  async ({event}: PageServerLoad) => fetchAnalogJSResources();

