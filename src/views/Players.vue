<template>
  <div>
    <div class="filter-section">
      <div class="input-container">
        <input
          type="text"
          v-model="filterByName"
          placeholder="Filter by Name"
          class="filter-input"
        />
      </div>
      <div class="button-container">
        <button @click="sortPlayers" class="sort-button">Sort by Ranking</button>
      </div>
    </div>
    <div class="player-list">
      <player-card
        v-for="player in filteredPlayers"
        :key="player.id"
        :player="player"
      />
    </div>
  </div>
</template>

<script>
import PlayerCard from "@/components/PlayerCard.vue";
import { usePlayersStore } from "@/stores/players";
import { ref } from 'vue';

export default {
  components: {
    PlayerCard,
  },
  setup() {
    const playersStore = usePlayersStore();
    const filterByName = ref("");

    const sortPlayers = () => {
      playersStore.sortPlayersByRanking();
    };

    const filterPlayersByName = () => {
      return playersStore.players.filter(player =>
        player.name.toLowerCase().includes(filterByName.value.toLowerCase())
      );
    };

    return {
      playersStore,
      sortPlayers,
      filterPlayersByName,
      filterByName, 
    };
  },
  computed: {
    filteredPlayers() {
      return this.filterPlayersByName();
    },
    sortedPlayers() {
      return this.playersStore.sortedPlayers;
    },
  },
};
</script>

<style scoped>
.filter-section {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  width: 100%;
}

.input-container {
  margin-right: 10px;
}

.filter-input {
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.button-container {
  margin-left: 10px;
}

.sort-button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.sort-button:hover {
  background-color: #45a049;
}
</style>
