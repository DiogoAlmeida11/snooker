<template>
    <div>
      <h1>Detalhes do Jogador</h1>
      <div v-if="player">
        <h2>{{ player.name }}</h2>
        <img :src="player.photo" alt="Player Photo" />
        <p>Nacionalidade: {{ player.nationality }}</p>
        <p>Idade: {{ player.idade }}</p>
        <p>Primeira Temporada como Profissional: {{ player.firstSeasonAsPro }}</p>
        <p>Número de Títulos de Ranking: {{ player.numRankingTitles }}</p>
        <p>Ranking Atual: {{ player.ranking }}</p>
        <p><button @click="$router.go(-1)">Voltar</button></p>
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
  