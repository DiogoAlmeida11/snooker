<template>
  <nav class="navbar">
    <div class="navbar-container">
      <router-link :to="{ name: 'home' }" class="img-link">
        <img src="../assets/transferir-removebg-preview.png" class="img" />
      </router-link>
      <div class="menu-links">
        <router-link v-if="isUser" :to="{ name: 'dashboard' }" class="router-link">Dashboard</router-link>
        <router-link v-if="isUser" :to="{ name: 'players' }" class="router-link">Jogadores</router-link>
        <router-link :to="{ name: 'news' }" class="router-link">Noticias</router-link>
        <router-link v-if="isUser" :to="{ name: 'calendar' }" class="router-link">Calendário</router-link>
        <router-link v-if="isAdmin" :to="{ name: 'admin' }" class="router-link">Admin</router-link>
        <router-link v-if="!isUser" :to="{ name: 'login' }" class="router-link">Login</router-link>
      </div>
      <div class="user-info">
        <span v-if="isUser" class="user-greeting">
          Olá, <span class="username">{{ name }}</span>
          <button @click="logout" class="logout-btn">Logout</button>
        </span>
      </div>
    </div>
  </nav>
</template>

<script>
import { useUserStore } from "@/stores/user";

export default {
  data() {
    return {
      store: useUserStore(),
    };
  },
  computed: {
    name() {
      return this.store.getUser?.username;
    },
    isUser() {
      return this.store.isUser;
    },
    isAdmin() {
      return this.store.getUser?.type == "admin";
    },
  },
  methods: {
    logout() {
      this.store.logout();
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<style scoped>
.navbar {
  background-color: #2c3e50df;
  padding: 15px 0;
  text-align: center;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu-links {
  display: flex;
  gap: 20px;
  margin-left: 20px; 
}

.router-link {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.img {
  width: 50px;
  height: 50px;
}

.img-link {
  margin-left: 20px;
}

.user-info {
  margin-right: 20px; 
}

.user-greeting {
  color: white;
}

.username {
  font-weight: bold;
}

.logout-btn {
  color: white;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-weight: bold;
}

.logout-btn:hover {
  text-decoration: underline;
}
</style>
