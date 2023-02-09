import '@nuxt/types'
import { ID4Face } from '~/services/ID4Face.service';
import { CheckID } from '~/services/CheckID.service';
import { Api } from '~/services/Api.service';
import { OneShot } from '~/services/OneShot.service';
import { OneShotBrowser } from '~/services/OneShotBrowser.service';

export {};

declare global {
  interface Window {
    litNonce: string; // id4face style-src nonce
  }

  interface OneShotRequestData {
    given_name: string;
    surname_1: string;
    surname_2: string;
    id_document_type: string;
    id_document_country: string;
    serial_number: string;
    email: string;
    mobile_phone_number: string;
    profile: string;
    residence_address: string;
    residence_city: string;
    residence_province: string;
    residence: string;
    document_front: Blob;
    document_rear: Blob;
    document_owner: Blob;  
  }

  type CheckIdData = {
    nombres: string;
    apellidos: string;
    dactilar: string;
    fechaCedulacion: string;
    fechaFallecimiento: string;
    fechaNacimiento: string;
    identificacion: string;
    nombreCompleto: string;
}
}


declare module 'vue/types/vue' {
  interface Vue {
    $id4face: ID4Face;
    $checkid: CheckID;
    $oneshot: OneShotBrowser;
    $api: Api;
  }
}

