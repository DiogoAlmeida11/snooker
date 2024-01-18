import { defineStore } from 'pinia';

export const usePlayersStore = defineStore('players', {
  state: () => ({
    players: [
      {
        name: "Neil Robertson",
        nationality: "../src/assets/australia.png",
        idade: 41,
        photo: "../src/assets/neil.jpg",
        firstSeasonAsPro: 1998,
        numRankingTitles: 23,
        ranking: 7,
        id: 1,
      },
      {
        name: "Ronnie O'Sullivan",
        nationality: "../src/assets/inglaterra.png",
        idade: 48,
        photo: "../src/assets/ron.jpg",
        firstSeasonAsPro: 1992,
        numRankingTitles: 40,
        ranking: 1,
        id: 2,
      },
      {
        name: "Luca Brecel",
        nationality: "../src/assets/belgica.png",
        idade: 28,
        photo: "../src/assets/luca.jpg",
        firstSeasonAsPro: 2011,
        numRankingTitles: 4,
        ranking: 4,
        id: 3,
      },
      {
        name: "Mark Selby",
        nationality: "../src/assets/inglaterra.png",
        idade: 40,
        photo: "../src/assets/selby.jpg",
        firstSeasonAsPro: 1999,
        numRankingTitles: 22,
        ranking: 5,
        id: 4,
      },
      {
        name: "Shaun Murphy",
        nationality: "../src/assets/inglaterra.png",
        idade: 41,
        photo: "../src/assets/shaun.jpg",
        firstSeasonAsPro: 1998,
        numRankingTitles: 12,
        ranking: 6,
        id: 5,
      },
      {
        name: "Mark Allen",
        nationality: "../src/assets/irlanda.png",
        idade: 37,
        photo: "../src/assets/Allen.jpg",
        firstSeasonAsPro: 2005,
        numRankingTitles: 10,
        ranking: 3,
        id: 6,
      },
      {
        name: "Mark Williams",
        nationality: "../src/assets/gales.png",
        idade: 40,
        photo: "../src/assets/mark.jpg",
        firstSeasonAsPro: 1992,
        numRankingTitles: 25,
        ranking: 8,
        id: 7,
      },
      {
        name: "Judd Trump",
        nationality: "../src/assets/inglaterra.png",
        Idade: 34,
        photo: "../src/assets/trump.jpg",
        firstSeasonAsPro: 2005,
        numRankingTitles: 26,
        ranking: 2,
        id: 8,
      },
      {
        name: "Kyren Wilson",
        nationality: "../src/assets/inglaterra.png",
        idade: 32,
        photo: "../src/assets/wilson.jpg",
        firstSeasonAsPro: 2010,
        numRankingTitles: 5,
        ranking: 9,
        id: 9,
      },
    ],
  }),
  getters: {
    allPlayers: (state) => state.players,
    sortedPlayers: (state) => state.players.sort((a, b) => a.ranking - b.ranking),
    filteredPlayersByName: (state) => (name) => {
      return state.players.filter(player => player.name.toLowerCase().includes(name.toLowerCase()));
    },
  },
  actions: {
    sortPlayersByRanking() {
      this.players.sort((a, b) => a.ranking - b.ranking);
    },
    add(name, nationality, idade, photo, firstSeasonAsPro, numRankingTitles, ranking) {
      if (!this.players.some((player) => player.name == name)) {
        const id = this.players[this.players.length - 1].id + 1;
        const newPlayer = {id, name, nationality, idade, photo, firstSeasonAsPro, numRankingTitles, ranking};
        this.players.push(newPlayer);
      } else {
        throw Error("Este jogador já existe.");
      }
    },
    async remove(id){
      this.players = this.players.filter((player) => player.id != id)
    },
    },
    persist: true,
  });


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