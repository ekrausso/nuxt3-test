
export interface OneShot {
    authenticate(): Promise<string>;
    createRequest(data: OneShotRequestData): Promise<any>;
    $ofetch;
}

export class OneShotService {

    public $ofetch;

    constructor($ofetch){
        this.$ofetch = this.init($ofetch);
    }


    public async authenticate(){
      try {
          const res = await this.$ofetch.post('/oneshot/api/authenticate', {username: 'onboarding', password: 'onboarding'});
          return res.data.id_token;
      } catch (error) {
          console.error(error);
      }
    }


    public async createRequest(data: OneShotRequestData){

      const formData = new FormData();
      for (const [key, value] of Object.entries(data)) {
        console.log(`${key}: `, value);
        formData.append(key, value);
      }

      return await this.$ofetch.post('/oneshot/api/request', formData);

      // try {
      //     const res = await this.$ofetch.post('/oneshot/api/request', formData);
      //     console.log(res)
      // } catch (error) {
      //     console.error(error)
      // }
    }



    private init($ofetch){
      const ofetch = $ofetch.create({
          async onRequest({options}) {
            console.log('auth request to: ', options.query)
        }
      })

      // axios.setBaseURL('https://eclipsoft.dev/oneshot')
        // Set baseURL to something different
      return ofetch;
    }
}