<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <!-- Go Back -->
  <section>
    <div class="container m-auto py-6 px-6">
      <RouterLink to="/jobs" class="text-green-500 hover:text-green-600 flex items-center">
        <i class="pi pi-arrow-left mr-3"></i>
        <span>Back to Job Listings</span>
      </RouterLink>
    </div>
  </section>
</template>