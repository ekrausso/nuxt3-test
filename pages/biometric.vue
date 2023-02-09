<template>
    <div>
        <div class="flex flex-col items-center">
            <!-- <h3 class="text-gray-600 text-3xl">Verificación Biométrica</h3> -->
            <p class="text-base text-gray-500 text-center">A continuación te haremos una verificación biométrica</p>
            <button @click="onStart" type="button" class="
            max-w-[30%]
            mt-6
            self-center
            px-6
            py-2.5
            bg-blue-600
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-blue-700 hover:shadow-lg
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg
            transition
            duration-150
            ease-in-out">Empezar</button>
        </div>
        <ID4Face :token="id4faceToken" @success="onSuccess" />
    </div>
</template>

<script lang="ts" setup>
import ID4Face from '~/components/ID4Face.vue';

    const { $id4face, $oneshot } = useNuxtApp();

    const { data, pending, error } = await useAsyncData('serviceAuth', async () => {
        return await Promise.all([$id4face.authenticate(), $oneshot.authenticate()]);
    })

    let token: string = "";

    onBeforeMount(() => {
        console.log(data)
        window.litNonce = 'r4nd0m';
    })

    const onStart = () => {
    }

    const onSuccess = () => {
        setTimeout(() => {
            // this.$router.push({path: '/form', query: this.$route.query});
            console.log("success")
        }, 3000);
    }

    const id4faceToken = computed(() => {
        return token || "";
    })
    
</script>