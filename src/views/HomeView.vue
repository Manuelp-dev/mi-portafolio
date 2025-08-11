<template>
    <main class="container mx-auto px-4">
        <section class="py-12 text-center">
            <h1 class="text-4xl font-bold mb-4">Hola soy Manuel</h1>
            <p class="text-xl text-gray-600">Desarrollador Frontend con Vue.js</p>
            <ProjectGrid/>
        </section>
    </main>
</template>

<script setup>
import ProjectGrid from '@/components/sections/ProjectGrid.vue'
</script>