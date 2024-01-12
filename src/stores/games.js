import { defineStore } from "pinia";

export const useGamesStore = defineStore("games", {
  state: () => ({
    games: [
      {
        id: 1,
        titulo: "Snooker Championship",
        descricao: "Final match of the season",
        jogadores: "John Doe VS John Doe",
        jogador2: "John Doe",
        data: "07/12/2023",
        hora: "13:00",
      },
      {
        id: 2,
        titulo: "Snooker Championship",
        descricao: "Final match of the season",
        jogadores: "John Doe VS John Doe",
        jogador2: "John Doe",
        data: "07/12/2023",
        hora: "13:00",
      },
      {
        id: 3,
        titulo: "Snooker Championship",
        descricao: "Final match of the season",
        jogadores: "John Doe VS John Doe",
        jogador2: "John Doe",
        data: "07/12/2023",
        hora: "13:00",
      },
      {
        id: 4,
        titulo: "Snooker Championship",
        descricao: "Final match of the season",
        jogadores: "John Doe VS John Doe",
        jogador2: "John Doe",
        data: "07/12/2023",
        hora: "13:00",
      },
      {
        id: 5,
        titulo: "Snooker Championship",
        descricao: "Final match of the season",
        jogadores: "John Doe VS John Doe",
        jogador2: "John Doe",
        data: "07/12/2023",
        hora: "13:00",
      },
      {
        id: 6,
        titulo: "Snooker Championship",
        descricao: "Final match of the season",
        jogadores: "John Doe VS John Doe",
        jogador2: "John Doe",
        data: "07/12/2023",
        hora: "13:00",
      },
      {
        id: 7,
        titulo: "Snooker Championship",
        descricao: "Final match of the season",
        jogadores: "John Doe VS John Doe",
        jogador2: "John Doe",
        data: "07/12/2023",
        hora: "13:00",
      },
    ],
    selectedGame: null, // Para armazenar o jogo selecionado
  }),
  getters: {
    allGames: (state) => state.games,
    // Novo getter para obter o jogo selecionado
    selectedGame: (state) => state.selectedGame,
    gameById: (state) => (id) => {
      return state.games.find((game) => game.id.toString() === id);
    },
  },
  actions: {
    // Nova mutation para definir o jogo selecionado
    setSelectedGame(id) {
      const game = state.games.find((game) => game.id === id);
      if (game) {
        state.selectedGame = game;
      }
    },
  },
});
