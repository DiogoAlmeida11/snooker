<template>
  <div>
    <h1>Notícias de Snooker</h1>

    <input v-model="searchQuery" placeholder="Pesquisar por título..." class="search-input" />

    <div class="news-list">
      <div v-for="(group, index) in chunkArray(flatNews, 3)" :key="index" class="news-row">
        <div v-for="(item, innerIndex) in group" :key="innerIndex" class="news-card">
          <router-link :to="`/news/${item.id}`" class="news-link">
            <img :src="item.imagem" alt="Imagem da Notícia" class="news-image" />
            <div class="news-details">
              <h2>{{ item.titulo }}</h2>
              <p>{{ item.descricao }}</p>
              <p class="news-date">{{ item.data }}</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>

    <!-- Roteiro de exibição da página de detalhes -->
    <router-view></router-view>
  </div>
</template>

<script>
import { useNewsStore } from '@/stores/news';
import { ref, computed } from 'vue';

export default {
  name: 'News',
  setup() {
    const newsStore = useNewsStore();

    const searchQuery = ref('');

    const filteredNews = computed(() => {
      return newsStore.filteredNewsByTitle(searchQuery.value);
    });

    const flatNews = computed(() => {
      return filteredNews.value.flatMap(item => item);
    });

    const chunkArray = (array, size) => {
      return Array.from({ length: Math.ceil(array.length / size) }, (v, i) =>
        array.slice(i * size, i * size + size)
      );
    };

    return {
      searchQuery,
      flatNews,
      chunkArray,
    };
  },
};
</script>

<style scoped>
.news-list {
  max-width: 800px; 
  margin: 0 auto; 
  overflow: hidden; 
}

.news-row {
  display: flex;
  justify-content: space-between; 
  margin-bottom: 20px; 
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
  width: 250px;
  box-sizing: border-box;
  margin-bottom: 20px;
  margin-right: 20px; /* Adicione margem à direita para aumentar o espaço entre os cards na direção horizontal */
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
  text-align: center;
}

.news-details h2 {
  margin-bottom: 5px;
}

.news-date {
  color: #555;
}

.search-input {
  width: 40%;
  padding: 10px;
  margin: 20px 0;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
