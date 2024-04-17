<template>
  <div>
    <nav class="nav-bar">
      <router-link to="/">
        <img src="./assets/logo.png" class="logo" />
      </router-link>

      <router-link to="/addProduct">
        <button class="nav-button">ADD PRODUCT</button>
      </router-link>
    </nav>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  font-family: "Montserrat", sans-serif;
}

.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 5px;
  background: #ffffff;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.logo {
  height: 70px;
  margin-left: 60px;
}

.nav-button {
  padding: 10px 20px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1rem;
  background-color: #6c50f0;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 60px;
}

.content {
  margin-top: 100px;
  padding: 20px;
}
</style>
