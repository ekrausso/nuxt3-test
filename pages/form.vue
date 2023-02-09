<template>
    <FormComponent :checkIdData="checkIdData" @data="onData" />
</template>

<script lang="ts" setup>
import FormComponent from '~/components/Form.vue';

    const { $id4face, $oneshot } = useNuxtApp();

    const { data, pending, error } = await useAsyncData('serviceAuth', async () => {
        return await Promise.all([$id4face.authenticate(), $oneshot.authenticate()]);
    })

    let checkIdData: CheckIdData = {
        nombres: "",
        apellidos: "",
        dactilar: "",
        fechaCedulacion: "",
        fechaFallecimiento: "",
        fechaNacimiento: "",
        identificacion: "",
        nombreCompleto: ""
    };

    let token!: string;

    // created(){
    //     const token = this.token || this.$store.getters["id4face/getToken"];
    //     this.$id4face.$axios.setToken(token, 'Bearer');
    // }

    onBeforeMount(() => {
        const data = JSON.parse(sessionStorage.getItem('checkIdData') as string)
        Object.assign(checkIdData, data);
    })


    const id4faceToken = computed(() => {
        return token || "";
    })

    const onData = async (data: any) => {
        Object.keys(data.files).forEach(async file => {
            if(data.files[file] == undefined) return;
            // this.$store.commit('user/SET_FILE', data.files[file]);
        })
        // this.$store.commit('user/SET_FORM', data.form);

        // Para SSR 
        // window.location.replace(`${window.location.origin}/contract${window.location.search}`);

        let formData: OneShotRequestData = {
            given_name: data.form.firstName,
            surname_1: data.form.firstSurname,
            surname_2: data.form.secondSurname,
            id_document_type: 'IDC',
            id_document_country: 'EC',
            serial_number: checkIdData.identificacion,
            email: data.form.email,
            mobile_phone_number: `+593${data.form.phoneNumber.slice(1)}`,
            profile: 'PFDSCFECS',
            residence_address: data.form.address,
            residence_city: data.form.city,
            residence_province: data.form.province,
            residence: 'EC',
            document_front: await fileToBlob(data.files.idFileFront),
            document_rear: await fileToBlob(data.files.idFileRear),
            document_owner: await fileToBlob(data.files.idFileFront)
        }


        // try {
        //     const res = await this.$axios.get('/api/get-document');
        //     console.log(res);
        //     this.$store.commit("oneshot/SET_DOCUMENT", res.data);
        //     this.$router.push({path: '/contract', query: this.$route.query});
        // } catch (error) {
        //     console.error(error);
        // } finally {
        //     this.$nuxt.$loading.finish();
        // }
    }

    const fileToBlob = async (file: File): Promise<Blob> => { 
        return new Blob([new Uint8Array(await file.arrayBuffer())], {type: file.type });
    }

    const fileToDataURL = (file: File): Promise<string> => {
        return new Promise(resolve => {
            const reader = new FileReader();
            reader.onload = () => {
                const result = (reader.result as string).replace(/^data:(application|image)\/(pdf|jpg|jpeg|png);base64,/, '');
                resolve(result);
            }
            reader.readAsDataURL(file as Blob)
        })
    }
</script>