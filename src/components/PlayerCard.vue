<!-- src/components/PlayerCard.vue     -->
<template>
  <div class="player-card" @click="redirectToPlayerPage">
    <div>
        <button v-if="isAdmin" @click.stop.prevent="remove(player.id)" class="remove-button"> Remover </button>
    </div> 
    <img :src="player.photo" alt="Player Photo" class="player-image" />
    <div class="player-info">
      <h3>{{ player.name }}</h3>
      <img :src="player.nationality" alt="Nationality Photo" class="nation-image" />
      <p>Ranking: {{ player.ranking }}</p> 
      
    </div>
    
  </div>
</template>

<script>
import { usePlayersStore } from "@/stores/players";
import {useUserStore} from "@/stores/user"
export default {
  props: {
    player: Object,
  },
  data() {
    return {
      userStore: useUserStore(),
      playerStore: usePlayersStore(),
    }
  },
  methods: {
    async remove(id) {
      if (confirm("Deseja mesmo remover este jogador?")) {
        await this.playerStore.remove(id);
      }
    },
    redirectToPlayerPage() {
      this.$router.push({ name: 'player', params: { id: this.player.id } });
    },
    
  },
  computed: {
    isAdmin() {
      return this.userStore.user?.type=='admin'
    }
  },
};
</script>

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
  width: 200px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  text-align: center; 
  height: 330px;
}

.player-image {
  width: 50px;
  height: 50px;
  border-radius: 50%; 
  object-fit: cover;
}
.nation-image {
  width: 70px;
  height: 40px;
  margin-bottom: 10px; 
}

.player-info {
  width: 100px;
  height: 150px;
  margin-top: 10px; 
}

.player-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.remove-button {
  border: 0px;
  color: whitesmoke;
  border-radius: 20%;
  overflow: hidden;
  background-color: red;
  margin-bottom: 20px;
}
</style>
