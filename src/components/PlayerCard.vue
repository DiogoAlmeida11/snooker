<!-- src/components/PlayerCard.vue -->
<template>
  <div class="player-card" @click="redirectToPlayerPage">
    <img :src="player.photo" alt="Player Photo" class="player-image" />
    <div class="player-info">
      <h3>{{ player.name }}</h3>
      <p>{{ player.nationality }}</p>
      <p>Ranking: {{ player.ranking }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    player: Object,
  },
  methods: {
    redirectToPlayerPage() {
      this.$router.push({ name: 'player', params: { id: this.player.id } });
    },
  },
};
</script>

<!-- src/components/PlayerCard.vue -->
<style scoped>
.player-card {
  border: 1px solid #ddd;
  border-radius: 10px; 
  overflow: hidden; 
  margin: 10px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 200px; /* Defina a largura desejada para cada card */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  text-align: center; 
}

.player-image {
  width: 50px;
  height: 50px;
  margin-bottom: 10px; 
  margin-top: 10px; 
  border-radius: 50%; 
  object-fit: cover;
}

.player-info {
  width: 100px;
  height: 150px;
  margin-top: 10px; 
}

.player-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>
