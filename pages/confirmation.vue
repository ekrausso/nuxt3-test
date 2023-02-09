<template>
    <section class="flex flex-col items-center">
        <p class="w-full text-center text-gray-400 text-xl">Hemos enviado un SMS con el código de confirmación al número que especificó.</p>
        <OTP />
    </section>
</template>


<script lang="ts" setup>
import OTP from '~/components/OTP.vue';


</script>