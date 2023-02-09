<template>
    <!-- <div class="flex flex-col items-center"> -->
        <!-- <div @click="getOtp('email')" class="
            flex flex-col items-center
            min-w-[30%]
            cursor-pointer 
            p-6 
            md:rounded-lg md:shadow-xl 
            bg-white 
            border-solid border-2 
            transition duration-150 ease-in-out 
            hover:border-blue-300 m-6 max-w-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="m-4 w-16 h-16 stroke-zinc-400">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <p class="text-gray-500">Correo</p>
            <p class="text-gray-400 text-sm mt-2">*******@eclipsoft.com</p>
        </div> -->
        <div class="
            flex flex-col items-center
            min-w-[40%]
            p-6 
            md:rounded-lg md:shadow-xl 
            bg-white 
            border-solid border-2 
            m-6 max-w-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="m-4 w-16 h-16 stroke-zinc-400">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
            </svg>
            <p class="text-gray-500">SMS</p>
            <p class="text-gray-400 text-sm mt-2">09*****533</p>
            <input ref="otpInput" v-model="state.otp" type="text" maxlength="6" minlength="6" pattern="[0-9]{6}" required inputmode="numeric" class="
            block
            mt-4
            w-1/3
            px-3
            py-1.5
            text-center
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            valid:border-emerald-500
            focus:valid:border-emerald-500
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
            <Button :disabled="buttonDisabled" variant="confirm" class="mt-4">Enviar</Button>
        </div>
    <!-- </div> -->
</template>

<script lang="ts" setup>
import Button from '~/components/ui/Button.vue';

    const otpInput = ref();

    const buttonDisabled = computed(() => {
        return otpInput.value.checkValidity();
    })

    const state = reactive({
        generated: false,
        otp: "",
    })

   

    onMounted(() => {
        nextTick(() => {
            otpInput.value.focus();
        })
    })
</script>