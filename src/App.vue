<template>
  <div class="w-full bg-slate-950 m-auto h-full ">
    <Header />
    <router-view></router-view>
    <footer class="bg-green-950 p-6">
      <div class="container-xl m-auto flex justify-between items-center text-white">
        <!-- Right side: Social Media & Copyright -->
        <div class="flex flex-col lg:flex-row items-center gap-6">
          <!-- Social Media Icons -->
          <div class="flex gap-6">
            <a href="https://linkedin.com/mucyuneje" target="_blank"
              class="text-white hover:text-blue-600 transition-colors duration-300" title="LinkedIn">
              <span class="pi pi-linkedin text-xl"></span>
            </a>
            <a href="https://github.com/mucyuneje" target="_blank"
              class="text-white hover:text-gray-600 transition-colors duration-300" title="GitHub">
              <span class="pi pi-github text-xl"></span>
            </a>
        
            <a href="https://facebook.com/mucyuneje" target="_blank"
              class="text-white hover:text-blue-800 transition-colors duration-300" title="Facebook">
              <span class="pi pi-facebook text-xl"></span>
            </a>
            <a href="https://instagram.com/mucyuneje" target="_blank"
              class="text-white hover:text-pink-600 transition-colors duration-300" title="Instagram">
              <span class="pi pi-instagram text-xl"></span>
            </a>
          </div>

          <!-- Copyright Text -->
          <p class="text-gray-400 text-sm mt-4 lg:mt-0 flex items-center gap-2">
            <span>&copy; 2025 Mucyunje Ehirwa Arsène. All rights reserved.</span>
            <span class="text-gray-500">|</span>
            <span class="text-gray-400 text-xs">Designed and Developed with Passion</span>
          </p>
        
      </div>
  </div>
  </footer>


  </div>


</template>

<script setup>
import Header from "./components/Header.vue"

</script>

<style scoped></style>
