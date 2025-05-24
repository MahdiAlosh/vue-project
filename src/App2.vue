<script>
// Conversion to Options API
// import { ref } from "vue"; // Not needed in Options API
export default {
  name: 'App',
  data() {
    return {
      message: 'Hello Vue!',
      status: "pending", // : true or false => v-if="status"
      tasks: ['Task 1', 'Task 2', 'Task 3'],
      link: 'https://vuejs.org',
    }
  },
  mounted() {
    console.log(this.message);
  },
  methods: {
    toggleStatus() {
      if (this.status === 'active') {
        this.status = 'pending';
      } else if (this.status === 'pending') {
        this.status = 'inactive';
      } else {
        this.status = 'active';
      }
    },
  },
};
</script>

<template>
  <h1>Vue Project</h1>
  <h2>{{ message }}</h2>
  <p v-if="status === 'active'"> User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else="status">User is inactive!</p>

  <h3>Tasks</h3>
  <ul>
    <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>
  <!-- <a v-bind:href="link">Click for Vue Org</a> -->
  <a :href="link">Click for Vue Org</a>

  <div>
    <!-- <button v-on:click="toggleStatus">Change Status</button> -->
    <button @click="toggleStatus">Change Status</button>
  </div>

</template>
