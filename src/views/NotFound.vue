<template>
    <div class="flex justify-center items-center h-screen bg-gray-800 text-white">
        <div class="text-center">
            <h1 class="text-6xl font-bold">
                <span class="pi pi-times-circle"></span> 404
            </h1>
            <p class="text-xl mt-4">
                <span class="pi pi-exclamation-triangle"></span> Oops! The page you're looking for doesn't exist.
            </p>
            <RouterLink to="/" class="mt-6 text-green-500 hover:text-green-300 text-lg">
                <span class="pi pi-home"></span> Go back to Home
            </RouterLink>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
/* Use plain CSS styles here */
</style>
