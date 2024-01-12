<!-- GameDetails.vue -->
<template>
    <div class="game-details">
      <h2>Game Details</h2>
      <div v-if="game">
        <p>Title: {{ game.titulo }}</p>
        <p>Description: {{ game.descricao }}</p>
        <p>Players: {{ game.jogadores }}</p>
        <p>Date: {{ game.data }}</p>
        <p>Time: {{ game.hora }}</p>
      </div>
      <router-link to="/dashboard">
        <button class="btn btn-primary btn-sm">Back to Dashboard</button>
      </router-link>
    </div>
  </template>
  
  <script>
  import { useGamesStore } from "@/stores/games";
  
  export default {
    setup() {
      const gamesStore = useGamesStore();
      const game = gamesStore.selectedGame; // Obtenha o jogo selecionado
  
      return {
        game,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Adicione seus estilos conforme necessário */
  </style>
  