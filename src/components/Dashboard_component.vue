<template>
    <div class="dashboard">
      <h2>Snooker Games Dashboard</h2>
      <div class="game-cards">
        <game-card v-for="(game, index) in games" :key="index" v-bind="game" />
      </div>
    </div>
  </template>
  
  <script>
  import GameCard from './Table.vue';
  
  export default {
    components: {
      GameCard,
    },
    data() {
      return {
        games: [
          {
            title: 'Snooker Championship',
            description: 'Final match of the season',
            players: ['John Doe', 'Jane Smith'],
            date: '2023-12-01',
          },
          // Adicione mais jogos conforme necessário
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .dashboard {
    display: flex;
    flex-direction: column;
    align-items: center; /* Centraliza os itens no eixo horizontal */
    text-align: center;
  }
  
  .game-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 20px; /* Adiciona espaço entre o título e os cartões de jogo */
  }
  
  h2 {
    margin-top: 0; /* Remove a margem superior padrão do h2 */
  }
  </style>
  