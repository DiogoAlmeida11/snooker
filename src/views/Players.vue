<template>
  <div class="container">
    <PlayerCard v-for="player in players" :key="player.id" :player="player" />
  </div>
</template>

<script>
import PlayerCard from '@/components/PlayerCard.vue';
import { onBeforeMount } from 'vue';
import { usePlayersStore } from '@/stores/players';

export default {
  name: 'Players',
  components: {
    PlayerCard,
  },
  setup() {
    const playersStore = usePlayersStore();

    // Chama automaticamente a ação ao criar o componente
    onBeforeMount(async () => {
      await playersStore.fetchPlayers();
    });

    return {
      players: playersStore.players,
    };
  },
};
</script>
