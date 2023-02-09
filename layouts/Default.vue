<template>
    <div class="min-h-screen flex flex-col">
        <header>
            <nav class="flex w-full justify-center bg-[#63d5bc]">
                <h3 class="text-gray-500 font-bold text-5xl my-3 md:my-6">Onboarding</h3>
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