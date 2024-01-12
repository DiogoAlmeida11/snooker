<template>
  <div>
    <h2>Game Details</h2>
    <div v-if="game">
      <p>Title: {{ game.titulo }}</p>
      <p>Description: {{ game.descricao }}</p>
      <p>Date: {{ game.data }}</p>
      <p>Time: {{ game.hora }}</p>

      <div>
        <h3>Player 1</h3>
        <p>Name: {{ game.jogador1 }}</p>
        <p>Nationality: {{ getPlayerNationality(game.jogador1) }}</p>
        <img :src="getPlayerPhoto(game.jogador1)" alt="Player 1 Photo" />
      </div>

      <div>
        <h3>Player 2</h3>
        <p>Name: {{ game.jogador2 }}</p>
        <p>Nationality: {{ getPlayerNationality(game.jogador2) }}</p>
        <img :src="getPlayerPhoto(game.jogador2)" alt="Player 2 Photo" />
      </div>
    </div>
  </div>
</template>

<script>
import { useGamesStore } from '../stores/games';
import { usePlayersStore } from '../stores/players';

export default {
  data() {
    return {
      game: null,
    };
  },
  async created() {
    const gamesStore = useGamesStore();
    const gameId = this.$route.params.id;
    this.game = await gamesStore.gameById(gameId);
  },
  methods: {
    getPlayerNationality(playerName) {
      const player = usePlayersStore().allPlayers.find(
        (player) => player.Name === playerName
      );
      return player ? player.Nationality : '';
    },
    getPlayerPhoto(playerName) {
      const player = usePlayersStore().allPlayers.find(
        (player) => player.Name === playerName
      );
      return player ? player.Photo : '';
    },
  },
};
</script>

<style>
/* Adicione estilos se necessário */
</style>
