import { usePlayersStore } from "./players"; // Replace with the correct path to your players store
import { defineStore } from "pinia";

export const useGamesStore = defineStore("games", {
  state: () => ({
    games: [
      {
        id: 1,
        titulo: "Snooker Championship",
        descricao: "Final match of the season",
        jogador1: usePlayersStore().allPlayers.find((player) => player.id === 1)
          .name,
        imageJogador1: usePlayersStore().allPlayers.find(
          (player) => player.id === 1
        ).photo,
        jogador2: usePlayersStore().allPlayers.find((player) => player.id === 2)
          .name,
        imageJogador2: usePlayersStore().allPlayers.find(
          (player) => player.id === 2
        ).photo,
        data: "07/12/2023",
        hora: "13:00",
        tempoplayer1: 90,
        tempoplayer2: 70,
        bolavermelhaPlayer1: 8,
        bolaazulPlayer1: 1,
        bolarosaPlayer1: 1,
        bolaamarelaPlayer1: 1,
        bolaverdePlayer1: 1,
        bolacastanhaPlayer1: 1,
        bolapretaPlayer1: 1,
        bolavermelhaPlayer2: 7,
        bolaazulPlayer2: 1,
        bolarosaPlayer2: 1,
        bolaamarelaPlayer2: 1,
        bolaverdePlayer2: 1,
        bolacastanhaPlayer2: 1,
        bolapretaPlayer2: 1,
      },
      {
        id: 2,
        titulo: "Snooker Championship",
        descricao: "Final match of the season",
        jogador1: usePlayersStore().allPlayers.find((player) => player.id === 2)
          .name,
        imageJogador1: usePlayersStore().allPlayers.find(
          (player) => player.id === 2
        ).photo,
        jogador2: usePlayersStore().allPlayers.find((player) => player.id === 3)
          .name,
        imageJogador2: usePlayersStore().allPlayers.find(
          (player) => player.id === 3
        ).photo,
        hora: "13:00",
        data: "07/12/2023",
        tempoplayer1: 90,
        tempoplayer2: 70,
        bolavermelhaPlayer1: 8,
        bolaazulPlayer1: 1,
        bolarosaPlayer1: 1,
        bolaamarelaPlayer1: 1,
        bolaverdePlayer1: 1,
        bolacastanhaPlayer1: 1,
        bolapretaPlayer1: 1,
        bolavermelhaPlayer2: 3,
        bolaazulPlayer2: 1,
        bolarosaPlayer2: 1,
        bolaamarelaPlayer2: 1,
        bolaverdePlayer2: 5,
        bolacastanhaPlayer2: 1,
        bolapretaPlayer2: 1,
      },
      {
        id: 3,
        titulo: "Snooker Championship",
        descricao: "Final match of the season",
        jogador1: usePlayersStore().allPlayers.find((player) => player.id === 3)
          .name,
        imageJogador1: usePlayersStore().allPlayers.find(
          (player) => player.id === 3
        ).photo,
        jogador2: usePlayersStore().allPlayers.find((player) => player.id === 4)
          .name,
        imageJogador2: usePlayersStore().allPlayers.find(
          (player) => player.id === 4
        ).photo,
        data: "07/12/2023",
        hora: "13:00",
        tempoplayer1: 78,
        tempoplayer2: 94,
        bolavermelhaPlayer1: 2,
        bolaazulPlayer1: 6,
        bolarosaPlayer1: 4,
        bolaamarelaPlayer1: 3,
        bolaverdePlayer1: 1,
        bolacastanhaPlayer1: 1,
        bolapretaPlayer1: 5,
        bolavermelhaPlayer2: 7,
        bolaazulPlayer2: 2,
        bolarosaPlayer2: 1,
        bolaamarelaPlayer2: 1,
        bolaverdePlayer2: 4,
        bolacastanhaPlayer2: 1,
        bolapretaPlayer2: 5,
      },
      {
        id: 4,
        titulo: "Snooker Championship",
        descricao: "Final match of the season",
        jogador1: usePlayersStore().allPlayers.find((player) => player.id === 4)
          .name,
        imageJogador1: usePlayersStore().allPlayers.find(
          (player) => player.id === 4
        ).photo,
        jogador2: usePlayersStore().allPlayers.find((player) => player.id === 5)
          .name,
        imageJogador2: usePlayersStore().allPlayers.find(
          (player) => player.id === 5
        ).photo,
        data: "07/12/2023",
        hora: "13:00",
        tempoplayer1: 82,
        tempoplayer2: 65,
        bolavermelhaPlayer1: 5,
        bolaazulPlayer1: 1,
        bolarosaPlayer1: 1,
        bolaamarelaPlayer1: 3,
        bolaverdePlayer1: 1,
        bolacastanhaPlayer1: 2,
        bolapretaPlayer1: 4,
        bolavermelhaPlayer2: 2,
        bolaazulPlayer2: 6,
        bolarosaPlayer2: 2,
        bolaamarelaPlayer2: 2,
        bolaverdePlayer2: 5,
        bolacastanhaPlayer2: 1,
        bolapretaPlayer2: 5,
      },
      {
        id: 5,
        titulo: "Snooker Championship",
        descricao: "Final match of the season",
        jogador1: usePlayersStore().allPlayers.find((player) => player.id === 5)
          .name,
        imageJogador1: usePlayersStore().allPlayers.find(
          (player) => player.id === 5
        ).photo,
        jogador2: usePlayersStore().allPlayers.find((player) => player.id === 6)
          .name,
        imageJogador2: usePlayersStore().allPlayers.find(
          (player) => player.id === 6
        ).photo,
        data: "07/12/2023",
        hora: "13:00",
        tempoplayer1: 93,
        tempoplayer2: 71,
        bolavermelhaPlayer1: 2,
        bolaazulPlayer1: 2,
        bolarosaPlayer1: 1,
        bolaamarelaPlayer1: 4,
        bolaverdePlayer1: 1,
        bolacastanhaPlayer1: 6,
        bolapretaPlayer1: 3,
        bolavermelhaPlayer2: 3,
        bolaazulPlayer2: 5,
        bolarosaPlayer2: 4,
        bolaamarelaPlayer2: 2,
        bolaverdePlayer2: 4,
        bolacastanhaPlayer2: 1,
        bolapretaPlayer2: 5,
      },
      {
        id: 6,
        titulo: "Snooker Championship",
        descricao: "Final match of the season",
        jogador1: usePlayersStore().allPlayers.find((player) => player.id === 7)
          .name,
        imageJogador1: usePlayersStore().allPlayers.find(
          (player) => player.id === 7
        ).photo,
        jogador2: usePlayersStore().allPlayers.find((player) => player.id === 8)
          .name,
        imageJogador2: usePlayersStore().allPlayers.find(
          (player) => player.id === 8
        ).photo,
        data: "07/12/2023",
        hora: "13:00",
        tempoplayer1: 87,
        tempoplayer2: 79,
        bolavermelhaPlayer1: 4,
        bolaazulPlayer1: 3,
        bolarosaPlayer1: 2,
        bolaamarelaPlayer1: 2,
        bolaverdePlayer1: 3,
        bolacastanhaPlayer1: 2,
        bolapretaPlayer1: 5,
        bolavermelhaPlayer2: 3,
        bolaazulPlayer2: 4,
        bolarosaPlayer2: 3,
        bolaamarelaPlayer2: 6,
        bolaverdePlayer2: 1,
        bolacastanhaPlayer2: 1,
        bolapretaPlayer2: 4,
      },
      {
        id: 7,
        titulo: "Snooker Championship",
        descricao: "Final match of the season",
        jogador1: usePlayersStore().allPlayers.find((player) => player.id === 8)
          .name,
        imageJogador1: usePlayersStore().allPlayers.find(
          (player) => player.id === 8
        ).photo,
        jogador2: usePlayersStore().allPlayers.find((player) => player.id === 9)
          .name,
        imageJogador2: usePlayersStore().allPlayers.find(
          (player) => player.id === 9
        ).photo,
        hora: "13:00",
        data: "07/12/2023",
        tempoplayer1: 98,
        tempoplayer2: 69,
        bolavermelhaPlayer1: 4,
        bolaazulPlayer1: 2,
        bolarosaPlayer1: 5,
        bolaamarelaPlayer1: 3,
        bolaverdePlayer1: 2,
        bolacastanhaPlayer1: 1,
        bolapretaPlayer1: 4,
        bolavermelhaPlayer2: 5,
        bolaazulPlayer2: 1,
        bolarosaPlayer2: 1,
        bolaamarelaPlayer2: 2,
        bolaverdePlayer2: 3,
        bolacastanhaPlayer2: 1,
        bolapretaPlayer2: 1,
      },
    ],
    selectedGame: null, // Para armazenar o jogo selecionado
    players: usePlayersStore().allPlayers,
  }),
  getters: {
    allGames: (state) => state.games,

    getSelectedGame: (state) => state.selectedGame,
    gameById: (state) => (id) => {
      return state.games.find((game) => game.id.toString() === id);
    },
  },
  actions: {
    // Nova mutation para definir o jogo selecionado
    setSelectedGame(id) {
      const game = this.games.find((game) => game.id === id);
      if (game) {
        this.selectedGame = game;
        console.log(game);
        console.log(this.players);
      }
    },
  },
});
