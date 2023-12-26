// src/stores/players.js
import { defineStore } from 'pinia';
import axios from 'axios';

export const usePlayersStore = defineStore('players', {
  state: () => ({
    players: [],
  }),
  actions: {
    async fetchPlayers() {
      try {
        const response = await axios.get('https://api.snooker.org/examples/10.json');
        this.players = response.data; // Atualizado para atribuir diretamente ao array de jogadores
      } catch (error) {
        console.error('Error fetching players:', error);
      }
    },
  },
});
