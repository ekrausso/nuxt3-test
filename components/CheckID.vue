<template>
    <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
        <form @submit.prevent="onSubmit">
            <div class="form-group mb-6">
            <label for="inputId" class="form-label inline-block mb-2 text-gray-700">Cédula</label>
            <input ref="inputId" v-model="state.id" type="text" maxlength="10" inputmode="numeric" required pattern="[0-9]{10}" class="form-control
                block
                w-full
                px-3
                py-1.5
                text-base
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
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="inputId"
                aria-describedby="idHelp" placeholder="Ingrese su número de cédula">
            </div>
            <div class="form-group mb-6">
            <label for="inputDactilar" class="form-label inline-block mb-2 text-gray-700">Código Dactilar</label>
            <input ref="inputDactilar" v-model="state.dactilar" type="text" maxlength="10" required pattern=".{10}" @input="formatInputDactilar" class="form-control block
                w-full
                px-3
                py-1.5
                text-base
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
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="inputDactilar"
                placeholder="Ingrese su código dactilar">
            </div>
            <div class="form-group form-check mb-6">
                <input type="checkbox"
                    v-model="state.acceptTermsConditions"
                    class="form-check-input h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-emerald-600 checked:border-emerald-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    id="termsCheckbox">
                <label class="form-check-label inline-block text-gray-600 text-xs" for="termsCheckbox">Acepto los </label><a @click="state.showTermsConditions = true" class="text-xs text-blue-500 cursor-pointer"> Términos y Condiciones</a>
            </div>
            <button :disabled="!validInputs || !state.acceptTermsConditions" type="submit" class="
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
                ease-in-out
                disabled:bg-blue-300
                ">
                Continuar
            </button>
        </form>
        <TermsConditionsModal :show="state.showTermsConditions" @update:state.show-terms-conditions="state.showTermsConditions = $event" @confirmed="onConfirmed" />
    </div>
</template>

<script lang="ts" setup>
import TermsConditionsModal from '~/components/TermsConditionsModal.vue';

    const inputId = ref();
    const inputDactilar = ref();

    const onSubmit = async () => {
        return {id: inputId.value, dactilar: inputDactilar.value.slice(0, 6)}
    }

    const state = reactive({
        id: "",
        dactilar: "",
        showTermsConditions: false,
        acceptTermsConditions: false
    })
    

    const formatInputDactilar = (e: Event) => {
        state.dactilar = (e.target as HTMLInputElement).value.toUpperCase();
    }

    const validInputs = computed((): boolean => {
        if(!state.dactilar || !state.id) return false;
        return inputId.value.checkValidity() && inputDactilar.value.checkValidity();
    })

    const onConfirmed = () => {
        state.showTermsConditions = false;
        state.acceptTermsConditions = true;
    }


</script>
<style scoped>

input:not(:placeholder-shown):not(:focus):invalid {
  border: 1px solid #ce5151;
}
</style>