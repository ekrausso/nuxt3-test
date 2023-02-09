import { NuxtAxiosInstance } from "@nuxtjs/axios";

export interface CheckID {
    authenticate(): Promise<any>;
    getData(id: string, dactilar: string): Promise<boolean>;
    $axios: NuxtAxiosInstance;
}

export class CheckIDService {

    public $axios: NuxtAxiosInstance;

    constructor($axios: NuxtAxiosInstance){
        this.$axios = this.init($axios);
    }


    public async authenticate(){
        try {
            const res = await this.$axios.post('/api/authenticate', {username: 'developers', password: '^K!p:{Zmk@52(Z:#qf]Ry{QT]sK7nG'});
            return res.data.id_token;
        } catch (error) {
            console.error(error);
        }
    }

    public async getData(id: string, dactilar: string){
        try {
            const res = await this.$axios.post('/api/find-person-biometric-data', {identificacion: id, dactilar});
            return res.data;
        } catch (error) {
            console.error(error);
        }
    }


    private init($axios: NuxtAxiosInstance){
        const axios = $axios.create({
            headers: {
              common: {
                Accept: 'text/plain, */*'
              }
            }
          })
        
          // Set baseURL to something different
        axios.setBaseURL('https://services.id4.ec')
        return axios;
    }
}