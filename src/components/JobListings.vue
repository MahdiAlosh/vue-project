<script setup>

import JobListing from '@/components/JobListing.vue';
// import jobData from '@/jobs.json'; // Import job data from JSON file
// 'vue-spinner' 
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
// import { ref, defineProps, onMounted } from 'vue';
// alternatively, you can use 'reactive'
import { reactive, defineProps, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import axios from 'axios';

defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false
  },
});

// const jobs = ref(jobData); // Create a reactive reference to the job data
// const jobs = ref([]); // Initialize an empty array for jobs
// reactive is used to create a reactive object
const state = reactive({
  jobs: [],
  isLoading: true,
});
//console.log(jobs.value);
// ref()
// onMounted(async () => {
//   try {
//     const response = await axios.get('http://localhost:3000/jobs'); // Replace with your API endpoint
//     jobs.value = response.data; // Assign the fetched data to the jobs reference
//   } catch (error) {
//     console.error('Error fetching job data:', error);
//   }
// });

// reactive:
onMounted(async () => {
  try {
    const response = await axios.get('/api/jobs'); // Replace with your API endpoint
    state.jobs = response.data; // Assign the fetched data to the jobs reference
  } catch (error) {
    console.error('Error fetching job data:', error);
  } finally {
    state.isLoading = false; // Set loading to false after fetching data
  }
});
</script>

<template>
  <section class="bg-blue-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
        Browse Jobs
      </h2>
      <!-- show loading spinner while loading is true -->
      <div v-if="state.isLoading" class="text-center text-gray-500 py-6">
        <PulseLoader />
        <p>Loading jobs...</p>
      </div>

      <!-- show hob listing when done loading -->
      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- jobs.slice() for ref() -->
        <JobListing v-for="job in state.jobs.slice(0, limit || state.jobs.length)" :key="job.id" :job="job" />
        <!-- 2 or 6 from first job at index 0 -->
        <!-- :job="job" the Obejct from JobListing.vue -->
      </div>
    </div>
  </section>
  <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
    <RouterLink to="/jobs" class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700">View All
      Jobs</RouterLink>
  </section>
</template>