<template>
  <nav>
    <router-link to="/">Products</router-link>
  </nav>
  <router-view />
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

nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 30px;
  text-align: right;
  background: #ffffff;
  filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04))
    drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
}

nav a {
  font-weight: 600;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #673de6;
}

section {
  display: flex;
}

button {
  border: none;
  font-family: "Montserrat", sans-serif;
  padding: 10px 14px;
  color: #ffffff;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.2s;
}
</style>
