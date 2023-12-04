<template>
  <nav class="navbar">
    <div class="navbar-container">
      <router-link to="/" class="router-link img-link">
        <img src="../assets/transferir-removebg-preview.png" class="img">
      </router-link>
      <div class="menu-links">
        <router-link to="/dashboard" class="router-link">Dashboard</router-link> |
        <router-link to="/players" class="router-link">Jogadores</router-link> |
        <router-link to="/news" class="router-link">Noticias</router-link> |
        <router-link to="/calendar" class="router-link">Calendário</router-link>
      </div>
      <router-link to="/settings" class="router-link settings-link">Configurações</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
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
  margin-left: 476px;
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

.settings-link {
  margin-left: auto; 
  margin-right: 20px; 
}
</style>
