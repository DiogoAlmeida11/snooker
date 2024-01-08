import { defineStore } from 'pinia';

export const usePlayersStore = defineStore('players', {
  state: () => ({
    players: [
      {
        Name: "Neil Robertson",
        Nationality: "Australiano",
        Idade: 41,
        Photo: "../src/assets/neil.jpg",
        FirstSeasonAsPro: 1998,
        NumRankingTitles: 23,
        Ranking: 7,
        id: 1,
      },
      {
        Name: "Ronnie O'Sullivan",
        Nationality: "Inglês",
        Idade: 48,
        Photo: "../src/assets/ron.jpg",
        FirstSeasonAsPro: 1992,
        NumRankingTitles: 40,
        Ranking: 1,
        id: 2,
      },
      {
        Name: "Luca Brecel",
        Nationality: "Belga",
        Idade: 28,
        Photo: "../src/assets/luca.jpg",
        FirstSeasonAsPro: 2011,
        NumRankingTitles: 4,
        Ranking: 4,
        id: 3,
      },
      {
        Name: "Mark Selby",
        Nationality: "Inglês",
        Idade: 40,
        Photo: "../src/assets/selby.jpg",
        FirstSeasonAsPro: 1999,
        NumRankingTitles: 22,
        Ranking: 5,
        id: 4,
      },
      {
        Name: "Shaun Murphy",
        Nationality: "Inglês",
        Idade: 41,
        Photo: "../src/assets/shaun.jpg",
        FirstSeasonAsPro: 1998,
        NumRankingTitles: 12,
        Ranking: 6,
        id: 5,
      },
      {
        Name: "Mark Allen",
        Nationality: "Irlandês",
        Idade: 37,
        Photo: "../src/assets/Allen.jpg",
        FirstSeasonAsPro: 2005,
        NumRankingTitles: 10,
        Ranking: 3,
        id: 6,
      },
      {
        Name: "Mark Williams",
        Nationality: "Galês",
        Idade: 40,
        Photo: "../src/assets/mark.jpg",
        FirstSeasonAsPro: 1992,
        NumRankingTitles: 25,
        Ranking: 8,
        id: 7,
      },
      {
        Name: "Judd Trump",
        Nationality: "Inglês",
        Idade: 34,
        Photo: "../src/assets/trump.jpg",
        FirstSeasonAsPro: 2005,
        NumRankingTitles: 26,
        Ranking: 2,
        id: 8,
      },
      {
        Name: "Kyren Wilson",
        Nationality: "Inglês",
        Idade: 32,
        Photo: "../src/assets/wilson.jpg",
        FirstSeasonAsPro: 2010,
        NumRankingTitles: 5,
        Ranking: 9,
        id: 9,
      },
    ],
  }),
  getters: {
    allPlayers: (state) => state.players,
    sortedPlayers: (state) => state.players.sort((a, b) => a.Ranking - b.Ranking),
    filteredPlayersByName: (state) => (name) => {
      return state.players.filter(player => player.Name.toLowerCase().includes(name.toLowerCase()));
    },
  },
});

// tarefa filipe para amanhã
// - flag do botao de sort, pode ser por Ranking ou A-Z
// - impossível de ver as paginas de dashboard e players quando nao se está logado 

/* import * as api from '../api/api'

const PLAYER_API_BASE_URL = 'http://localhost:4000'

export const usePlayersStore = defineStore('players', {
  state: () => ({
    players: [],
  }),
  getters: {
    getPlayers: (state) => state.players,
    getPlayer: (state)=> (id)=> state.players.find(player=>players.id==id)
  },
    actions: {
      async fetchPlayers(){
        try {
          const result = await api.get(PLAYER_API_BASE_URL, 'players')
          this.players = result.data
        } catch (error) {
          throw error
        }
      },
  }
});
 */