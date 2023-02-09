<template>
    <div class="min-h-[100dvh] flex flex-col justify-between bg-gray-400">
        <header>
            <nav class="flex w-full flex-col items-center bg-gray-200">
                <img src="~/assets/eclipsoft/logo.svg" class="w-16 m-4">
                <p class="text-gray-500">Onboarding Admin</p>
            </nav>
        </header>
        <main class="grow flex flex-col justify-center items-center">
            <slot />
        </main>
        <AdminFooter></AdminFooter>
    </div>
</template>

<script lang="ts" setup>
import AdminFooter from '~/components/admin/Footer.vue';


</script>