<!-- src/views/Players.vue -->
<template>
  <div>
    <h1>Jogadores de Snooker</h1>
    <p>Lista dos jogadores de snooker, com nº de vitórias, títulos, win rate, ranking mundial...</p>
    <ul>
      <li v-for="player in players" :key="player.ID">
        <img :src="player.Photo" alt="Player Photo" />
        <div>
          <h3>{{ player.FirstName }} {{ player.LastName }}</h3>
          <p>Nacionalidade: {{ player.Nationality }}</p>
          <p>Data de Nascimento: {{ player.Born }}</p>
          <!-- Adicione mais informações conforme necessário -->
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { onBeforeMount } from 'vue';
import { usePlayersStore } from '@/stores/players';

export default {
  name: 'Players',
  setup() {
    const playersStore = usePlayersStore();

    // Chama automaticamente a ação ao criar o componente
    onBeforeMount(() => {
      playersStore.fetchPlayers();
    });

    return {
      players: playersStore.players,
    };
  },
};
</script>
