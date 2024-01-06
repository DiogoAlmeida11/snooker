<template>
  <div>
    <h1>Notícias de Snooker</h1>
    <p>Notícias de snooker, sobre jogadores, torneios etc...</p>

    <div class="news-list">
      <div v-for="(newsItem, index) in allNews" :key="newsItem.titulo" class="news-card">
        <img :src="newsItem.imagem" alt="Imagem da Notícia" class="news-image" />
        <div class="news-details">
          <h2>{{ newsItem.titulo }}</h2>
          <p>{{ newsItem.descricao }}</p>
          <p class="news-date">{{ newsItem.data }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { usePlayersStore } from '@/stores/news';

export default {
  name: 'News',
  setup() {
    const newsStore = usePlayersStore();

    return {
      allNews: newsStore.allNews,
    };
  },
};
</script>

<style scoped>
.news-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center; /* Centraliza os cards */
  align-items: flex-start; /* Alinha os cards ao topo */
}

.news-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  width: 200px;
}

.news-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.news-image {
  width: 100%;
  height: 100px;
  object-fit: cover;
}

.news-details {
  padding: 10px;
  text-align: center; /* Centraliza o texto */
}

.news-details h2 {
  margin-bottom: 5px;
}

.news-date {
  color: #555;
}
</style>
