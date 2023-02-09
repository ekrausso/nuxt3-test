<template>
    <div class="min-h-[100dvh] flex flex-col justify-between">
        <header>
            <nav class="flex flex-wrap w-full justify-center bg-[#ffc316]">
                <img src="~/assets/eclipsoft/logo.svg" class="w-64 m-6">
                <p class="w-full text-center">Onboarding</p>
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