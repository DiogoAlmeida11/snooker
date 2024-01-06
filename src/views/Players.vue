<template>
  <div>
    <div>
      <input
        type="text"
        v-model="filterByName"
        placeholder="Filter by Name"
        @input="filterPlayers"
      />
      <button @click="sortedPlayers">Sort by Ranking</button>
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

export default {
  components: {
    PlayerCard,
  },
  setup() {
    const playersStore = usePlayersStore();

    const sortPlayers = () => {
      playersStore.sortPlayersByRanking();
    };

    const filterPlayers = () => {
      // Atualiza a computed property filteredPlayers
      return playersStore.filteredPlayersByName(filterByName);
    };

    return {
      playersStore,
      sortPlayers,
      filterPlayers,
      filterByName: "",
    };
  },
  computed: {
    filteredPlayers() {
      return this.playersStore.players;
    },
    sortedPlayers() {
      return this.playersStore.sortedPlayers;
    },
  },
};
</script>

<style scoped>
/* Adicione seus estilos conforme necessário */
</style>