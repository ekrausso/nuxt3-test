import { ID4Face, ID4FaceService } from "~/services/ID4Face.service"
import { ApiService, Api } from "~/services/Api.service";
import { OneShot, OneShotService } from "~~/services/OneShot.service";
import { ofetch } from 'ofetch';

export default defineNuxtPlugin((nuxtApp) => {

    const api: Api = new ApiService(ofetch);
    const id4face: ID4Face = new ID4FaceService(ofetch);
    const oneshot: OneShot = new OneShotService(ofetch);

    return {
        provide: {
          api: api,
          id4face: id4face,
          oneshot: oneshot
        }
      }
})
