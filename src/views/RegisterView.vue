<template>
    <div class="container">
      <form @submit.prevent="createUser">
        <input v-model="newUsername" placeholder="Novo Nome de Usuário" class="input" />
        <input v-model="newPassword" type="password" placeholder="Nova Senha" class="input" />
        <button type="submit" class="btn">Criar Usuário</button>
      </form>
      <router-link to="/">Já tem uma conta? Faça login aqui.</router-link>
    </div>
  </template>
  
  <script>
  import { useUserStore } from "@/stores/user";
  
  export default {
    data() {
      return {
        store: useUserStore(),
        newUsername: "",
        newPassword: "",
      };
    },
    methods: {
      createUser() {
        try {
          this.store.createUser(this.newUsername, this.newPassword);
          this.$router.push({ name: "login" });
          alert("Novo usuário criado com sucesso!");
        } catch (error) {
          alert(`Erro ao criar usuário: ${error.message}`);
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
  