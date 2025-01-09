<template>
    <header class="flex justify-between gap-2 p-4 border-b">
        <!-- Left side -->
        <div class="flex items-center text-white text-2xl lg:text-lg justify-center gap-3">
            <span class="pi pi-microchip-ai"></span>
            <span class="hidden lg:block">Developer</span>
        </div>

        <div class="text-white flex justify-center items-center">
            <ul class="flex list-none justify-center gap-14 lg:gap-12">
                <RouterLink to="/"
                    class="flex justify-center items-center gap-3 text-2xl lg:text-lg cursor-pointer hover:text-green-400 hover:bg-gray-700 rounded-md transition px-3 py-2"
                    active-class="text-green-500 bg-gray-800 hover:text-green-300 hover:bg-gray-700">
                    <span class="pi pi-home"></span>
                    <span class="hidden lg:block">Home</span>
                </RouterLink>
                <RouterLink to="/aboutme"
                    class="flex justify-center items-center gap-3 text-2xl lg:text-lg cursor-pointer hover:text-green-400 hover:bg-gray-700 rounded-md transition px-3 py-2"
                    active-class="text-green-500 bg-gray-800 hover:text-green-300 hover:bg-gray-700">
                    <span class="pi pi-briefcase"></span>
                    <span class="hidden lg:block">About</span>
                </RouterLink>
                <RouterLink to="/contactme"
                    class="flex justify-center items-center gap-3 text-2xl lg:text-lg cursor-pointer hover:text-green-400 hover:bg-gray-700 rounded-md transition px-3 py-2"
                    active-class="text-green-500 bg-gray-800 hover:text-green-300 hover:bg-gray-700">
                    <span class="pi pi-id-card"></span>
                    <span class="hidden lg:block">Contact me</span>
                </RouterLink>
            </ul>
        </div>

        <div class="flex items-center justify-center">
            <img src="../assets/profile.jpg" alt="Profile Picture" class="rounded-full size-10 cursor-pointer"
                @click="openModal" />
        </div>

        <!-- Modal -->
        <div v-if="modalOpen"
            class="fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
            <div class="bg-gray-800 p-8 rounded-lg w-80 max-w-md">
                <div class="text-white text-center mb-4">
                    <h2 class="text-2xl font-semibold">MUCYUNEJE HIRWA Arsène</h2>
                    <p class="text-gray-400 mb-2">Software Developer | UI/UX Designer | AI/ML Expert</p>
                    <p class="text-gray-400 mb-2">Location: Rwanda</p>
                </div>
                <div class="text-gray-300 mb-4">
                    <p><strong>Email:</strong> <a href="mailto:mucyunejehirwaarsene@gmail.com"
                            class="text-green-400 hover:text-green-300">mucyunejehirwaarsene@gmail.com</a></p>
                    <p><strong>Phone:</strong> <a href="tel:+250784222615"
                            class="text-green-400 hover:text-green-300">+250 784 222 615</a></p>
                </div>
                <div class="flex justify-center gap-6 text-2xl">
                    <a href="https://github.com/mucyuneje" target="_blank" class="text-green-400 hover:text-green-300">
                        <span class="pi pi-github"></span>
                    </a>
                    <a href="https://facebook.com/mucyuneje" target="_blank" class="text-green-400 hover:text-green-300">
                        <span class="pi pi-facebook"></span>
                    </a>
                    <a href="https://instagram.com/mucyuneje" target="_blank" class="text-green-400 hover:text-green-300">
                        <span class="pi pi-instagram"></span>
                    </a>
                </div>
                <div class="flex justify-center mt-4">
                    <button @click="closeModal"
                        class="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-400 transition duration-300">Close</button>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref } from 'vue';

const modalOpen = ref(false);

// Function to open the modal
const openModal = () => {
    modalOpen.value = true;
};

// Function to close the modal
const closeModal = () => {
    modalOpen.value = false;
};
</script>

<style scoped>
/* Optional: Further modal styling can be added here */
</style>
