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

      <v-card class="mx-auto" max-width="300" tile>
        <v-list style="padding: 0px 0;">
          <v-subheader>MENU PRINCIPAL</v-subheader>
          <v-list-item-group v-model="item" color="">
            <v-list-item
              v-for="(page, i) in pages"
              :key="i"
              :to="page.link"
              link
            >
              <v-list-item-icon>
                <v-icon v-text="page.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="page.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn href="/V1" block outlined tile>Ancienne version</v-btn>
        </div>
      </template>
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

      <v-spacer></v-spacer>

      <a
        class="typewrite typewriter"
        data-period="2000"
        data-type='[ "Hi, my name is Anthony.", "I like JavaScript so much.", "And I love Node.js. You know.", "Come on ! Do not be shy, talk to me." ]'
      >
        <span class="wrap"></span>
      </a>
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

      <v-spacer></v-spacer>

      <span>Application version: {{ versionNumber }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import Typewriter from "@/views/effects/typewriter";

// I have to do something when I'm importing something, this is the reason why this line exist below.
Typewriter.activateIt;

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
    //TODO: make a switcher to change when it's wanted.
    this.$vuetify.theme.dark = true;
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Gochi+Hand&display=swap");

.typewriter {
  color: white;
  font-size: 30px;
  font-family: "Gochi Hand", cursive;
}

.author {
  font-family: "Gochi Hand", cursive;
  font-size: 30px;
}

.subtitle {
  font-family: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono,
    DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
}
</style>
