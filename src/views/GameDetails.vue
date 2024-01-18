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
            <img :src="getPlayerNationalityImage(game.jogador1)" alt="Player 1 Nationality" class="nationality" />
          </p>
          <canvas ref="player1Chart" width="200" height="200"></canvas>
          <img :src="getPlayerPhoto(game.jogador1)" alt="Player 1 Photo" />
        </div>

        <div class="player">
          <h3>Player 2</h3>
          <p><strong>Name:</strong> {{ game.jogador2 }}</p>
          <p>
            <strong>Nationality:</strong>
            <img :src="getPlayerNationalityImage(game.jogador2)" alt="Player 2 Nationality" class="nationality" />
          </p>
          <canvas ref="player2Chart" width="200" height="200"></canvas>
          <img :src="getPlayerPhoto(game.jogador2)" alt="Player 2 Photo" />
          <h3>Tempo na mesa</h3>
          <canvas ref="player1ChartPie" width="200" height="200"></canvas>
        </div>
      </div>

      <hr class="separator-line" />

      <div class="breaks-table">
        <h3>Breaks</h3>
        <table>
          <thead>
            <tr>
              <th>Break</th>
              <th colspan="3">{{ game.jogador1 }}</th>
              <th colspan="3">{{ game.jogador2 }}</th>
            </tr>
            <tr>
              <th></th>
              <th>Pontos</th>
              <th>Break 50+</th>
              <th></th>
              <th>Pontos</th>
              <th>Break 50+</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(breakInfo, index) in game.breaks" :key="index">
              <td>{{ index + 1 }}</td>
              <td :class="{ 'highlight-cell': winningPlayerBreaks[index] === 'player1' }">{{ breakInfo.player1Points || 'N/A' }}</td>
              <td>{{ breakInfo.player1Points>50 ? 'Sim' : 'Não' }}</td>
              <td></td>
              <td :class="{ 'highlight-cell': winningPlayerBreaks[index] === 'player2' }">{{ breakInfo.player2Points || 'N/A' }}</td>
              <td>{{ breakInfo.player2Points>50  ? 'Sim' : 'Não' }}</td>
            </tr>
          </tbody>
        </table>
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
  computed: {
    winningPlayerBreaks() {
      const winningPlayerBreaks = [];
      for (const breakInfo of this.game.breaks) {
        if (breakInfo.player1Points > breakInfo.player2Points) {
          winningPlayerBreaks.push('player1');
        } else if (breakInfo.player1Points < breakInfo.player2Points) {
          winningPlayerBreaks.push('player2');
        } else {
          winningPlayerBreaks.push(null);
        }
      }
      return winningPlayerBreaks;
    },
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
    getPlayerNationalityImage(playerName) {
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
        count: playerOneBalls.vermelha,
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
    this.createPieChart("player1ChartPie", this.game.jogador1,this.game.jogador2, [
  {
    name: this.game.jogador1,
    value: "red",
    count: this.game.tempoplayer1,
  },
  {
    name: this.game.jogador2,
    value: "blue",
    count: this.game.tempoplayer2,
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
    
    createPieChart(canvasId, player1Name, player2Name, colors) {
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
       label: "minutos",
        data: colors.map((color) => color.count),
        backgroundColor: colors.map((color) => color.value),
      },
    ],
  };

  new Chart(ctx, {
    type: "pie",
    data,
    options: {
      title: {
        display: true,
        text: `Ball Distribution for ${player1Name} and ${player2Name}`,
      },
      legend: {
        display: false,
      },
    },
  });
}
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
  text-align: center; 
}

.separator-line {
  width: 100%;
  height: 2px;
  background-color: #007bff; 
  margin: 15px 0; 
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
.player1ChartPie {
  transform: translate(-50%, -50%);
}
.breaks-table {
  margin-top: 20px;
  width: 60%;
}

.breaks-table table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

.breaks-table th, .breaks-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

.breaks-table th {
  background-color: #007bff;
  color: white;
}
.highlight-cell {
  background-color: #ffff66; 
}
</style>
