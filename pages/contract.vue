<template>
    <section>
        <!-- <VuePdfEmbed :source="source" /> -->
        <h2 class="text-2xl text-gray-500">Por favor revise el contrato</h2>
        <embed :src="source" class="h-[50vh] mt-4" width="791px" height="612px">
        <Button class="mt-8" variant="confirm" @click="onConfirm">Aceptar</Button>
    </section>
</template>
<script lang="ts" setup>
import Button from '~/components/ui/Button.vue'


    let source = ref("");


    // beforeMount(){
    //     const blob = new Blob([this.$store.getters["oneshot/getDocument"]], {type: "application/pdf"});
    //     this.source = URL.createObjectURL(blob);
    // }

    // public async onConfirm(){
    //     this.$nuxt.$loading.start();
    //     try {
    //         const res = await this.$oneshot.createRequest(this.$store.getters["oneshot/getOneshotRequest"]);
    //         console.log(res);
    //         this.$router.push({path: '/confirmation', query: this.$route.query})
    //     } catch (error) {
    //         console.error(error)
    //     } finally {
    //         this.$nuxt.$loading.finish();
    //     }
    // }
    const onConfirm = () => {}

</script>