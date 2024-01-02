<!-- src/components/PlayerCard.vue -->
<template>
  <div class="player-card" @click="redirectToPlayerPage">
    <div class="content">
      <img :src="player.Image" alt="Player Photo" class="player-image" />
      <div class="player-info">
        <h3>{{ player.Name }}</h3>
        <p>Nacionalidade: {{ player.Nationality }}</p>
        <p>Ranking: {{ player.Ranking }}</p>
      </div>
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

<style scoped>
.player-card {
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
  display: inline-flex;
  width: calc(33.33% - 20px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}

.content {
  display: flex;
  align-items: center;
}

.player-image {
  width: 50px;
  height: 50px;
  margin-right: 10px; /* Adiciona espaço entre a imagem e o texto */
}

.player-info {
  flex: 1; /* Ocupa o espaço restante, empurrando o texto para a direita */
}

.player-card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
</style>
