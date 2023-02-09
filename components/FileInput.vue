<template>
    <div class="flex flex-col items-center justify-center bg-gray-100 font-sans relative">
        <Spinner :loading="state.loading" />
        <label :class="[state.valid ? 'border-emerald-400' : 'border-blue-400 border-dashed', state.error ? 'border-red-500' : '']" class="mx-auto cursor-pointer flex w-full max-w-lg h-[120px] flex-col items-center rounded-xl border-2 bg-white p-3 text-center"> 
            <svg v-if="state.valid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-10 w-10 text-emerald-500">
                <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
            </svg>
            <svg v-else-if="state.error && !state.valid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" class="w-10 h-10 fill-red-500 stroke-slate-100">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <h2 class="mt-2 text-sm font-medium text-gray-700 tracking-wide">{{ props.description }}</h2>
            <p v-if="!state.valid && !state.error" class="mt-2 text-gray-500 text-xs md:text-sm tracking-wide">({{ accepted.toUpperCase() }})</p>
            <p v-else-if="state.error" class="text-red-500">Reintentar</p>

            <input type="file" class="hidden" :accept="accepted" @change="validateFile" />
        </label>
    </div>
</template>

<script lang="ts" setup>
import Spinner from './ui/Spinner.vue';

    const props = defineProps<{
        description?: string
    }>()

    const emit = defineEmits<{
        (e: 'file', file: File): void
    }>()

    const state = reactive({
        valid: false,
        error: false,
        loading: false
    })


    const accepted = computed(() => {
        // return props.format == 'image' ? '.jpeg, .jpg, .png' : '.pdf';
        return '.pdf';
    })


    const validateFile = (e: Event):void => {
        state.error = false;
        const file = (e.target as HTMLInputElement).files![0]
        
        state.valid = true;
        emit('file', file)
    }



</script>