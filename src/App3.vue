<script setup>
import Navbar from '@/components/Navbar.vue';
import { RouterView } from 'vue-router';
// import Hero from '@/components/Hero.vue';
// import HomeCards from '@/components/HomeCards.vue';
// import JobListings from '@/components/JobListings.vue';
// import JobListing from '@/components/JobListing.vue';

// imports are ussed on now on folder Views, not here !!
</script>

<template>
  <Navbar /><!-- Aufruf -->
  <RouterView />
  <!-- <Hero title="Test Title" subtitle="Test Subtitle" /> -->
  <!-- <Hero /> using default values -->
  <!-- <HomeCards />
  <JobListings :limit="3" :showButton="true" /> -->
</template>