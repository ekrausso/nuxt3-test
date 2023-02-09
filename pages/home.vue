<template>
  <section class="p-6">
    <div class="mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 md:w-9 inline stroke-emerald-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
      <h2 class="text-gray-500 md:text-3xl inline">Integración con Registro Civil del Ecuador</h2>
    </div>
    <div class="mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 md:w-9 inline stroke-emerald-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
      <h2 class="text-gray-500 md:text-3xl inline">Verificación biométrica</h2>
    </div>
    <div class="mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 md:w-9 inline stroke-emerald-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
      <h2 class="text-gray-500 md:text-3xl inline">Formulario dinámico</h2>
    </div>
    <div class="mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 md:w-9 inline stroke-emerald-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
      <h2 class="text-gray-500 md:text-3xl inline">Firma electrónica <em>OneShot</em></h2>
    </div>
    <button type="button" class="
          mt-6
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
          ease-in-out" @click="onClick">Empezar</button>
  </section>
</template>

<script lang="ts" setup>

  const onClick = (): void => {
    // Para SSR
    window.location.replace(`${window.location.origin}/login${window.location.search}`);
  }

</script>
