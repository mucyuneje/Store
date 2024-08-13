<template>
  <header class="h-10 bg-white flex justify-between m-6">
    <div>
      <Instagram />
    </div>
    <ul class="flex gap-6">
      <li class="flex justify-center gap-2 cursor-pointer">
        <Home />
        <span>Home</span>
      </li>
      <li class="flex justify-center gap-2 cursor-pointer">
        <StorePlus />
        <span>Market</span>
      </li>
      <li class="flex justify-center gap-2 cursor-pointer">
        <Account />
        <span>About Us</span>
      </li>
    </ul>
    <div>Theme</div>
  </header>
</template>

<script setup>
import Home from 'vue-material-design-icons/Home.vue'
import Instagram from 'vue-material-design-icons/Instagram.vue'
import StorePlus from "vue-material-design-icons/StorePlus.vue";
import Account from "vue-material-design-icons/Account.vue";
</script>

<style lang="scss" scoped></style>
