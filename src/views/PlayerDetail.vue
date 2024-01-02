<template>
    <div>
      <h1>Detalhes do Jogador</h1>
      <div v-if="player">
        <h2>{{ player.Name }}</h2>
        <img :src="player.Photo" alt="Player Photo" />
        <p>Nacionalidade: {{ player.Nationality }}</p>
        <p>Idade: {{ player.Idade }}</p>
        <p>Primeira Temporada como Profissional: {{ player.FirstSeasonAsPro }}</p>
        <p>Número de Títulos de Ranking: {{ player.NumRankingTitles }}</p>
        <p>Ranking Atual: {{ player.Ranking }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import { usePlayersStore } from '@/stores/players';
  
  export default {
    name: 'PlayerDetail',
    computed: {
      player() {
        const playerId = this.$route.params.id;
        const playersStore = usePlayersStore();
        return playersStore.players.find(player => player.id == playerId);
      },
    },
  };
  </script>
  