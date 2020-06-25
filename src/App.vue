<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-row align="center" justify="center">
        <v-img
          src="@/assets/picture-profile.jpg"
          aspect-ratio="1"
          class="grey lighten-2"
        ></v-img>
      </v-row>
      <v-list nav>
        <v-list-item v-for="(page, i) in pages" :key="i" :to="page.link" link>
          <v-list-item-icon>
            <v-icon>{{ page.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ page.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-img
        class="ml-4"
        src="@/assets/logo/programming.svg"
        aspect-ratio="1"
        max-height="50"
        max-width="50"
      ></v-img>
      <v-toolbar-title class="ml-6">
        <span class="author">{{ author }}</span> -
        <span class="subtitle">IT Developer</span>
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container class fluid>
        <router-view />
      </v-container>
    </v-content>

    <v-footer app>
      <span
        >&copy; {{ getCurrentYear() }} {{ author }}. All rights reserved.</span
      >
      <span class="ml-auto">Application version: {{ versionNumber }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String,
  },

  data: () => ({
    pages: [
      {
        icon: "fas fa-home",
        title: "Présentation",
        link: "/",
      },
      {
        icon: "fas fa-rocket",
        title: "Projets",
        link: "/",
      },
      {
        icon: "fas fa-blog",
        title: "Blog",
        link: "/",
      },
      {
        icon: "fas fa-mail-bulk",
        title: "Contact",
        link: "/",
      },
      {
        icon: "fas fa-user-circle",
        title: "À propos",
        link: "/about",
      },
    ],

    getCurrentYear() {
      let currentYear = new Date();
      return currentYear.getFullYear();
    },

    author: "Anthony PILLOT",
    versionNumber: "0.1.0",
    drawer: null,
  }),

  created() {
    this.$vuetify.theme.dark = true;
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Gochi+Hand&display=swap");

.author {
  font-family: "Gochi Hand", cursive;
  font-size: 30px;
}
.subtitle {
  font-family: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono,
    DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
}
</style>
