<template>
    <div class="flex flex-col justify-enter items-center">
        <!-- <Spinner :loading="loading" /> -->
        <CheckID @data="onData" />
    </div>
</template>

<script lang="ts" setup>
import CheckID from '~/components/CheckID.vue';
import Spinner from '~/components/ui/Spinner.vue';

    const { $id4face, $oneshot } = useNuxtApp();

    const { data, pending, error } = await useAsyncData('serviceAuth', async () => {
        return await Promise.all([$id4face.authenticate(), $oneshot.authenticate()]);
    })
    // Autenticación con ID4Face


    onBeforeMount(() => {
        console.log(data)
        // $id4face.$ofetch.defaults.common.headers["Authorization"] = `Bearer ${data.}`;
        // $oneshot.$ofetch.defaults.common.headers["Authorization"] = `Bearer ${oneshotToken}`;
        // $store.commit('id4face/SET_TOKEN', id4faceToken);
        // $store.commit('oneshot/SET_TOKEN', oneshotToken);
    })

    const onData = async (data: any) => {
        try {
            // this.loading = true;
            // const res = await this.$checkid.getData(data.id, data.dactilar)
            const res = await $id4face.getCheckIdData(data.id, data.dactilar);
            sessionStorage.setItem('checkIdData', JSON.stringify(res));
            // this.$store.commit('id4face/SET_CHECKID', res);
            
            // Para vue-router en cliente
            // this.$router.push({path:'/biometric', query: this.$route.query});
            
            // Para SSR ..
            // window.location.replace(`${window.location.origin}/biometric${window.location.search}`);

        } catch (error) {
            console.error(error);
        } finally {
            // this.loading = false;
            // this.$nuxt.$loading.finish();
        }
    }

</script>

