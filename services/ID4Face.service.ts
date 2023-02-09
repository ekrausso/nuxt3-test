import https from 'https';

export interface ID4Face {
    authenticate(): Promise<any>;
    validateSelfie(data: FormData): Promise<boolean>;
    validateIdFront(data: FormData): Promise<boolean>;
    validateIdRear(data: FormData): Promise<boolean>;
    getCheckIdData(id: string, dactilar: string): Promise<any>;
    $ofetch;
}

export class ID4FaceService {

    public $ofetch;

    constructor($ofetch){
        this.$ofetch = this.init($ofetch);
        this.$ofetch.defaults.httpsAgent = new https.Agent({ rejectUnauthorized: false })
    }


    public async authenticate(){
        try {
            const res = await this.$ofetch.post('/id4face/api/authenticate', {username: 'eclipsoft', password: 'eclipsoft'});
            return res.data.id_token;
        } catch (error) {
            console.error(error);
        }

    }


    public async validateSelfie(data: FormData){
        try {
            const res = await this.$ofetch.post('/id4face/api/validate-selfie', data);
            return res.data.result;
        } catch (error) {
            console.error(error)
        }
    }

    public async validateIdFront(data: FormData) {
        try {
            const res = await this.$ofetch.post('/id4face/api/validate-front', data);
            return res.data.result;
        } catch (error) {
            console.error(error);
        }
    }

    public async validateIdRear(data: FormData) {
        try {
            const res = await this.$ofetch.post('/id4face/api/validate-back', data);
            return res.data.result;
        } catch (error) {
            console.error(error);
        }
    }
    

    public async getCheckIdData(id: string, dactilar: string) {
        let data = {
            id,
            dactilar
        }
        try {
            const res = await this.$ofetch.post('/id4face/api/check-id', data);
            return res.data;
        } catch (error) {
            console.error(error);
        }
    }




    private init($ofetch){
        const ofetch = $ofetch.create({
            headers: {
              common: {
                Accept: 'text/plain, */*'
              }
            },
            async onRequest({options}) {
                console.log('auth request to: ', options.url)
            }
          })
          // Set baseURL to something different
        //   ofetch.setBaseURL('http://192.168.110.83:8082')
        // ofetch.setBaseURL('https://id4face.eclipsoft.dev')
        return ofetch;
    }
}