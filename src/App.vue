<!-- <script>
// Conversion to Composition API
import { ref } from "vue";

export default {
  setup() {
    const message = ref('Hello Vue!');
    const status = ref('pending'); // : true or false => v-if="status"
    const tasks = ref(['Task 1', 'Task 2', 'Task 3']);
    const link = ref('https://vuejs.org');

    // after using setup() we don't have access to 'this.'!
    // that's why we use '.value'
    function toggleStatus() {
      if (status.value === 'active') {
        status.value = 'pending';
      } else if (status.value === 'pending') {
        status.value = 'inactive';
      } else {
        status.value = 'active';
      }
    }

    return {
      message,
      status,
      tasks,
      link,
      toggleStatus
    };
  }
};
</script> -->

<!-- Short version of setup -->
<script setup>
// Conversion to Composition API

import { ref } from "vue";

const message = ref('Hello Vue!');
const status = ref('pending');
const tasks = ref(['Task 1', 'Task 2', 'Task 3']);
const link = ref('https://vuejs.org');
const newTask = ref(''); // default value ist empty string


// after using setup() we don't have access to 'this.'!
// that's why we use '.value'
function toggleStatus() {
  if (status.value === 'active') {
    status.value = 'pending';
  } else if (status.value === 'pending') {
    status.value = 'inactive';
  } else {
    status.value = 'active';
  }
};
const addTask = () => {
  if (newTask.value.trim() !== '') { // check if input is not empty
    tasks.value.push(newTask.value);
    newTask.value = ''; // reset input field
  }
}

const deleteTask = (index) => {
  tasks.value.splice(index, 1); // remove task at index
}

</script>

<template>
  <h1>Vue Project</h1>
  <h2>{{ message }}</h2>
  <p v-if="status === 'active'"> User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else="status">User is inactive!</p>

  <form @submit.prevent="addTask"> <!-- prevent => event -->
    <label for="newTask">Add Task</label>
    <br>
    <input type="text" id="newTask" name="newTask" v-model="newTask" />
    <br>
    <button type="submit">Submit</button>
  </form>

  <h3>Tasks</h3>
  <ul>
    <li v-for="(task, index) in tasks" :key="task">
      <span>
        {{ task }}
        <button @click="deleteTask(index)">x</button>
      </span>
    </li>
  </ul>
  <!-- <a v-bind:href="link">Click for Vue Org</a> -->
  <a :href="link">Click for Vue Org</a>

  <div>
    <!-- <button v-on:click="toggleStatus">Change Status</button> -->
    <button @click="toggleStatus">Change Status</button>
  </div>

</template>
