import { defineStore } from "pinia";

export const useGamesStore = defineStore("games", {
  state: () => ({
    games: [
      {
        titulo: "Snooker Championship",
        descricao: "Final match of the season",
        jogadores: "John Doe VS John Doe",
        jogador2: "John Doe",
        data: "07/12/2023",
        hora: "13:00",
      },
      {
        titulo: "Snooker Championship",
        descricao: "Final match of the season",
        jogadores: "John Doe VS John Doe",
        jogador2: "John Doe",
        data: "07/12/2023",
        hora: "13:00",
      },
      {
        titulo: "Snooker Championship",
        descricao: "Final match of the season",
        jogadores: "John Doe VS John Doe",
        jogador2: "John Doe",
        data: "07/12/2023",
        hora: "13:00",
      },
      {
        titulo: "Snooker Championship",
        descricao: "Final match of the season",
        jogadores: "John Doe VS John Doe",
        jogador2: "John Doe",
        data: "07/12/2023",
        hora: "13:00",
      },
      {
        titulo: "Snooker Championship",
        descricao: "Final match of the season",
        jogadores: "John Doe VS John Doe",
        jogador2: "John Doe",
        data: "07/12/2023",
        hora: "13:00",
      },
      {
        titulo: "Snooker Championship",
        descricao: "Final match of the season",
        jogadores: "John Doe VS John Doe",
        jogador2: "John Doe",
        data: "07/12/2023",
        hora: "13:00",
      },
      {
        titulo: "Snooker Championship",
        descricao: "Final match of the season",
        jogadores: "John Doe VS John Doe",
        jogador2: "John Doe",
        data: "07/12/2023",
        hora: "13:00",
      },
    ],
  }),
  getters: {
    allGames: (state) => state.games,
  },
});
