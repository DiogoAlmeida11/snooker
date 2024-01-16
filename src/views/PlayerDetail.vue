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
      </div>
    </div>
  </template>
  
  <script>
import { usePlayersStore } from "@/stores/players";

export default {
  name: "PlayerDetail",
  computed: {
    player() {
      const playerId = this.$route.params.id;
      const playersStore = usePlayersStore();
      return playersStore.players.find((player) => player.id == playerId);
    },
  },
};
</script>

<style>
.player-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
}
.nation-image {
  width: 80px;
  height: 50px;
  margin-bottom: 10px;
}
</style>
  