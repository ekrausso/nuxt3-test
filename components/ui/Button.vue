<template>
    <button @click="onClick" :disabled="props.disabled" :type="props.type" class="
        px-6
        py-2.5
        text-white
        outline outline-1
        font-medium
        text-xs
        leading-tight
        uppercase
        rounded
        shadow-md
        focus:shadow-lg focus:outline-none focus:ring-0
        active:shadow-lg
        transition
        duration-150
        ease-in-out
        "
        :class="[
            props.outline 
            ? 'bg-transparent'
            : props.variant == 'confirm'
                ? 'bg-blue-500'
                : 'bg-red-500',
            props.variant == 'confirm' 
                ? 'hover:bg-blue-600 focus:bg-blue-700 active:bg-blue-700 disabled:bg-blue-300'
                : 'hover:bg-red-600 focus:bg-red-700 active:bg-red-700 disabled:bg-red-300'
        ]"
        >
        <slot></slot>
    </button>
</template>
<script lang="ts" setup>

    const props = defineProps<{
        disabled?: boolean
        variant?: string
        outline?: boolean
        type?: "button" | "submit" | "reset" | undefined
    }>()

    const emit = defineEmits<{
        (e: 'click'): void
    }>()
    


</script>