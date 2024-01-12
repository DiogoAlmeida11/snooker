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
          .Name,
        imageJogador1: usePlayersStore().allPlayers.find(
          (player) => player.id === 1
        ).Photo,
        jogador2: usePlayersStore().allPlayers.find((player) => player.id === 2)
          .Name,
        imageJogador2: usePlayersStore().allPlayers.find(
          (player) => player.id === 2
        ).Photo,
        data: "07/12/2023",
        hora: "13:00",
      },
      {
        id: 2,
        titulo: "Snooker Championship",
        descricao: "Final match of the season",
        jogador1: usePlayersStore().allPlayers.find((player) => player.id === 2)
          .Name,
        imageJogador1: usePlayersStore().allPlayers.find(
          (player) => player.id === 2
        ).Photo,
        jogador2: usePlayersStore().allPlayers.find((player) => player.id === 3)
          .Name,
        imageJogador2: usePlayersStore().allPlayers.find(
          (player) => player.id === 3
        ).Photo,
        hora: "13:00",
      },
      {
        id: 3,
        titulo: "Snooker Championship",
        descricao: "Final match of the season",
        jogador1: usePlayersStore().allPlayers.find((player) => player.id === 3)
          .Name,
        imageJogador1: usePlayersStore().allPlayers.find(
          (player) => player.id === 3
        ).Photo,
        jogador2: usePlayersStore().allPlayers.find((player) => player.id === 4)
          .Name,
        imageJogador2: usePlayersStore().allPlayers.find(
          (player) => player.id === 4
        ).Photo,
        data: "07/12/2023",
        hora: "13:00",
      },
      {
        id: 4,
        titulo: "Snooker Championship",
        descricao: "Final match of the season",
        jogador1: usePlayersStore().allPlayers.find((player) => player.id === 4)
          .Name,
        imageJogador1: usePlayersStore().allPlayers.find(
          (player) => player.id === 4
        ).Photo,
        jogador2: usePlayersStore().allPlayers.find((player) => player.id === 5)
          .Name,
        imageJogador2: usePlayersStore().allPlayers.find(
          (player) => player.id === 5
        ).Photo,
        data: "07/12/2023",
        hora: "13:00",
      },
      {
        id: 5,
        titulo: "Snooker Championship",
        descricao: "Final match of the season",
        jogador1: usePlayersStore().allPlayers.find((player) => player.id === 5)
          .Name,
        imageJogador1: usePlayersStore().allPlayers.find(
          (player) => player.id === 5
        ).Photo,
        jogador2: usePlayersStore().allPlayers.find((player) => player.id === 6)
          .Name,
        imageJogador2: usePlayersStore().allPlayers.find(
          (player) => player.id === 6
        ).Photo,
        data: "07/12/2023",
        hora: "13:00",
      },
      {
        id: 6,
        titulo: "Snooker Championship",
        descricao: "Final match of the season",
        jogador1: usePlayersStore().allPlayers.find((player) => player.id === 7)
          .Name,
        imageJogador1: usePlayersStore().allPlayers.find(
          (player) => player.id === 7
        ).Photo,
        jogador2: usePlayersStore().allPlayers.find((player) => player.id === 8)
          .Name,
        imageJogador2: usePlayersStore().allPlayers.find(
          (player) => player.id === 8
        ).Photo,
        data: "07/12/2023",
        hora: "13:00",
      },
      {
        id: 7,
        titulo: "Snooker Championship",
        descricao: "Final match of the season",
        jogador1: usePlayersStore().allPlayers.find((player) => player.id === 8)
          .Name,
        imageJogador1: usePlayersStore().allPlayers.find(
          (player) => player.id === 8
        ).Photo,
        jogador2: usePlayersStore().allPlayers.find((player) => player.id === 9)
          .Name,
        imageJogador2: usePlayersStore().allPlayers.find(
          (player) => player.id === 9
        ).Photo,
        hora: "13:00",
      },
    ],
    selectedGame: null, // Para armazenar o jogo selecionado
    players: usePlayersStore().allPlayers,
  }),
  getters: {
    allGames: (state) => state.games,
    // Renomeie o getter para evitar conflito de nomes
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
