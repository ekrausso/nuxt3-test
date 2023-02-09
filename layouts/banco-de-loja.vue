<template>
    <div class="min-h-[100dvh] flex flex-col justify-between">
        <header>
            <nav class="flex w-full justify-center bg-[#00634e]">
                <img src="~/assets/banco-de-loja/logo.svg" class="w-64 m-6">
            </nav>
        </header>
        <main class="grow flex flex-col justify-center items-center">
            <slot />
        </main>
        <Footer></Footer>
    </div>
</template>
<script lang="ts" setup>
import Footer from '~/components/ui/Footer.vue';

</script>