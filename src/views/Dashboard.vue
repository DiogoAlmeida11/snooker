<template>
  <div id="app">
    <Dashboard class="dashboard" />
  </div>
</template>

<script>
import Dashboard from '../components/Dashboard_component.vue';

export default {
  components: {
    Dashboard,
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Avenir', 'Helvetica', 'Arial', sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 1px;
  height: 1000vh;
}

.dashboard {
  margin-top: 10px; 
}
</style>
