<script setup>
import { RouterLink } from 'vue-router';


</script>

<template>
    <div class="navbar bg-green-300">
  <div class="flex-1">
    <a class="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1 space-x-10">
      <RouterLink to="/">
        <li>HomeView</li>
      </RouterLink>
      <RouterLink to="/jobs/addJob">
        <li>Add Job</li>
      </RouterLink>
      
    </ul>
  </div>
</div>
</template>