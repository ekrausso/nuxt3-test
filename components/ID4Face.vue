<template>
    <eclipsoft-id4face @id4face-response="onId4faceResponse" @id4face-failed="onId4faceFailed" ref="id4face"></eclipsoft-id4face>
</template>

<script lang="ts" setup>
import { referenceImage } from '~/assets/refImage.js';

    const props = defineProps<{
        token?: string
    }>()

    const id4face = ref();

    onMounted(async () => {
        id4face.value.token = props.token;
        id4face.value.referenceImage = referenceImage;
        await id4face.value.load({
            minMatch: "99",
            env: "prod",
        });
    })

    const onId4faceResponse = (e) => {console.log(e.detail)};
    const onId4faceFailed = (e) => {console.log(e.detail)}; 

</script>