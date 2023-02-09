import https from 'https';

export interface Api {
    verify(): Promise<any>;
    $ofetch;
}

export class ApiService {

    public $ofetch;


    constructor($ofetch){
        this.$ofetch = this.init($ofetch);
        this.$ofetch.defaults.httpsAgent = new https.Agent({ rejectUnauthorized: false })
    }


    public async authenticate() {
        try {
            const res = await this.$ofetch.post('/api/authenticate')
        } catch (error) {
            
        }
    }


    public async verify(){
        try {
            const res = await this.$ofetch.get('/api/verify-token');
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

        //   // Set baseURL to something different
        // ofetch.setBaseURL('https://eclipsoft.dev/onboarding-back')
        return ofetch;
    }
}