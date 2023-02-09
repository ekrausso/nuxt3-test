<template>
    <section class="text-center">
        <form @submit.prevent="onSubmit" class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
            <div class="form-group mb-6">
                <!-- <label for="inputUser" class="form-label inline-block mb-2 text-gray-700">Usuario</label> -->
                <input ref="refInputUser" v-model="user" required type="text" class="form-control
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
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="inputId"
                    aria-describedby="idHelp" placeholder="Ingrese su usuario">
            </div>
            <!-- <div class="form-group mb-6">
                <label for="inputDactilar" class="form-label inline-block mb-2 text-gray-700">Código Dactilar</label>
                <input ref="refInputDactilar" v-model="inputDactilar" type="text" maxlength="10" required pattern=".{10}" @input="formatInputDactilar" class="form-control block
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
            </div> -->
            
            <button type="submit" class="
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
                Ingresar
            </button>
        </form>
    </section>
</template>

<script lang="ts" setup>

    const user = ref("");
    const onSubmit = () => {

    }
</script>