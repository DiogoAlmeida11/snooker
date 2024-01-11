<template>
    <div class="dashboard">
      <table class="table table-bordered">
        <thead class="bg-primary text-white">
          <tr>
            <th>Competição</th>
            <th>Descrição</th>
            <th>Jogadores</th>
            <th>Data</th>
            <th>Hora</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="game in games" :key="game.id" class="hoverable-row">
            <td>{{ game.titulo }}</td>
            <td>{{ game.descricao }}</td>
            <td>{{ game.jogadores }}</td>
            <td>{{ game.data }}</td>
            <td>{{ game.hora }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import { useGamesStore } from '../stores/games';
  
  export default defineComponent({
    data() {
      return {
        games: [],
      };
    },
    async created() {
      const gamesStore = useGamesStore();
      this.games = await gamesStore.allGames;
    },
  });
  </script>
  
  <style scoped>
  .dashboard {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  
  .table {
    width: 80%;
    border: 1px solid #ddd;
    border-collapse: collapse;
  }
  
  th, td {
    text-align: left;
    padding: 12px;
  }
  
  tr {
    border-bottom: 1px solid #ddd;
  }
  
  tr:last-child {
    border-bottom: none;
  }
  
  .hoverable-row:hover {
    background-color: #f5f5f5; /* Adiciona cor de fundo ao passar o mouse sobre a linha */
  }
  </style>
  
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" integrity="sha384-btGc9WHsUOF8trKfmhVOA4TD6XlLToHHvz88fcCKhS8IcrLZOd+Q6a5I8R++tbuU" crossorigin="anonymous">
  