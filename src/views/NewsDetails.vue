<template>
    <div class="news-details-container">
      <h2>{{ news.titulo }}</h2>
      <img :src="news.imagem" alt="Imagem da Notícia" class="news-details-image" />
      <p>{{ news.descricao }}</p>
      <p>{{ news.noticia }}</p>
      <p>Data: {{ news.data }}</p>
    </div>
  </template>
  
  <script>
  import { computed } from 'vue';
  import { useNewsStore } from '@/stores/news';
  
  export default {
    props: {
      id: {
        type: String,
        required: true,
      },
    },
    setup(props) {
      const newsStore = useNewsStore();
  
      const news = computed(() => {
        // Obtenha os detalhes da notícia com base no ID da rota
        return newsStore.allNews.find(item => item.id.toString() === props.id);
      });
  
      return {
        news,
      };
    },
  };
  </script>
  
  <style scoped>
  .news-details-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .news-details-image {
    width: 100%;
    height: auto;
    max-height: 300px; /* Defina a altura máxima desejada para a imagem */
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 20px;
  }
  </style>
  