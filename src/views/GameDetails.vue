<template>
  <div>
    <h2>Game Details</h2>
    <div v-if="game" class="game-details-container">
      <div class="game-info">
        <p><strong>Title:</strong> {{ game.titulo }}</p>
        <p><strong>Description:</strong> {{ game.descricao }}</p>
        <p><strong>Date:</strong> {{ game.data }}</p>
        <p><strong>Time:</strong> {{ game.hora }}</p>
      </div>

      <hr class="separator-line" />

      <div class="player-details">
        <div class="player">
          <h3>Player 1</h3>
          <p><strong>Name:</strong> {{ game.jogador1 }}</p>
          <p>
            <strong>Nationality:</strong>
            {{ getPlayerNationality(game.jogador1) }}
          </p>
          <canvas ref="player1Chart" width="200" height="200"></canvas>
          <img :src="getPlayerPhoto(game.jogador1)" alt="Player 1 Photo" />
        </div>

        <div class="player">
          <h3>Player 2</h3>
          <p><strong>Name:</strong> {{ game.jogador2 }}</p>
          <p>
            <strong>Nationality:</strong>
            {{ getPlayerNationality(game.jogador2) }}
          </p>
          <canvas ref="player2Chart" width="200" height="200"></canvas>
          <img :src="getPlayerPhoto(game.jogador2)" alt="Player 2 Photo" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useGamesStore } from "../stores/games";
import { usePlayersStore } from "../stores/players";
import Chart from "chart.js/auto";

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
    this.$nextTick(() => {
      this.createCharts();
    });
  },
  methods: {
    getPlayerNationality(playerName) {
      const player = usePlayersStore().allPlayers.find(
        (player) => player.name === playerName
      );
      return player ? player.nationality : "";
    },
    getPlayerPhoto(playerName) {
      const player = usePlayersStore().allPlayers.find(
        (player) => player.name === playerName
      );
      return player ? player.photo : "";
    },
    createCharts() {
  const selectedGame = useGamesStore().getSelectedGame;
  if (selectedGame) {
    const playerOneBalls = {
      vermelha: selectedGame.bolavermelhaPlayer1,
      azul: selectedGame.bolaazulPlayer1,
      verde: selectedGame.bolaverdePlayer1,
      preta: selectedGame.bolapretaPlayer1,
      rosa: selectedGame.bolarosaPlayer1,
      amarela: selectedGame.bolaamarelaPlayer1,
      castanha: selectedGame.bolacastanhaPlayer1,
    };
    const playerTwoBalls = {
      vermelha: selectedGame.bolavermelhaPlayer2,
      azul: selectedGame.bolaazulPlayer2,
      verde: selectedGame.bolaverdePlayer2,
      preta: selectedGame.bolapretaPlayer2,
      rosa: selectedGame.bolarosaPlayer2,
      amarela: selectedGame.bolaamarelaPlayer2,
      castanha: selectedGame.bolacastanhaPlayer2,
    };

    this.createBallsChart("player1Chart", this.game.jogador1, [
      {
        name: "Vermelho",
        value: "red",
        count: playerTwoBalls.vermelha,
      },
      {
        name: "Azul",
        value: "blue",
        count: playerOneBalls.azul,
      },
      {
        name: "Verde",
        value: "green",
        count: playerOneBalls.verde,
      },
      {
        name: "Preto",
        value: "black",
        count: playerOneBalls.preta,
      },
      {
        name: "Rosa",
        value: "pink",
        count: playerOneBalls.rosa,
      },
      {
        name: "Amarelo",
        value: "yellow",
        count: playerOneBalls.amarela,
      },
      {
        name: "Castanho",
        value: "brown",
        count: playerOneBalls.castanha,
      },
    ]);
    this.createBallsChart("player2Chart", this.game.jogador2, [
      {
        name: "Vermelho",
        value: "red",
        count: playerTwoBalls.vermelha,
      },
      {
        name: "Azul",
        value: "blue",
        count: playerTwoBalls.azul,
      },
      {
        name: "Verde",
        value: "green",
        count: playerTwoBalls.verde,
      },
      {
        name: "Preto",
        value: "black",
        count: playerTwoBalls.preta,
      },
      {
        name: "Rosa",
        value: "pink",
        count: playerTwoBalls.rosa,
      },
      {
        name: "Amarelo",
        value: "yellow",
        count: playerTwoBalls.amarela,
      },
      {
        name: "Castanho",
        value: "brown",
        count: playerTwoBalls.castanha,
      },
    ]);
  }


 
    },
  
    createBallsChart(canvasId, playerName, colors) {
      const canvas = this.$refs[canvasId];
      if (!canvas) {
        return;
      }
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        return;
      }

      const data = {
        labels: colors.map((color) => color.name),
        datasets: [
          {
            label: playerName,
            data: colors.map((color) => color.count),
            backgroundColor: colors.map((color) => color.value),
            borderColor: colors.map((color) => color.value),
            borderWidth: 1,
          },
        ],
      };

      new Chart(ctx, {
        type: "bar",
        data,
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    },
  },
};
</script>

<style scoped>
.game-details-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.game-info {
  width: 60%;
  text-align: center; /* Centraliza o texto na div */
}

.separator-line {
  width: 100%;
  height: 2px;
  background-color: #007bff; /* cor azul */
  margin: 15px 0; /* espaçamento acima e abaixo da linha */
}

.player-details {
  display: flex;
  justify-content: space-around;
  width: 60%;
}

.player {
  text-align: center;
}

.player img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-top: 10px;
}
</style>
