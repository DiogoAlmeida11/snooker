<template>
    <div class="container">
      <form @submit.prevent="login">
        <input v-model="username" placeholder="Username" class="input" />
        <input v-model="password" type="password" placeholder="Password" class="input" />
        <button type="submit" class="btn">Login</button>
      </form>
      <router-link to="/register">Não tem uma conta? Registe-se aqui.</router-link>
    </div>
  </template>
  
  <script>
  import { useUserStore } from "@/stores/user";
  
  export default {
    data() {
      return {
        store: useUserStore(),
        username: "",
        password: "",
      };
    },
    methods: {
      login() {
        try {
          this.store.login(this.username, this.password);
          this.$router.push({ name: "home" });
        } catch (error) {
          alert(`Error: ${error.message}`);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .input {
    border: 1px solid #ced4da;
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    box-sizing: border-box;
  }
  
  .input:focus {
    border-color: #007BFF;
  }
  
  .btn {
    border: 2px solid #00b36e;
    padding: 10px 20px;
    background-color: #00b36e;
    color: #FFFFFF;
    cursor: pointer;
    border-radius: 5px;
    font-size: 14px;
  }
  
  .btn:hover {
    background-color: #00b36eb4;
    border-color: #00b36eb4;
  }
  
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  </style>
  