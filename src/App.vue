<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-row align="center" justify="center">
        <v-img
          src="@/assets/picture-profile.jpg"
          aspect-ratio="0.9"
          class="grey lighten-2"
        ></v-img>
      </v-row>

      <div class="hidden-sm-and-up">
        <v-row class="ma-2" justify="center">
          <v-btn block outlined tile v-on:click="toggle_dark_mode"
            >Light or Dark Mode</v-btn
          >
        </v-row>
        <div class="ma-2">
          <v-btn href="/v1" block tile>Ancienne version</v-btn>
        </div>
      </div>

      <v-card class="mx-auto" max-width="300" tile>
        <v-list style="padding: 0px 0;">
          <v-subheader>MENU PRINCIPAL</v-subheader>
          <v-list-item-group>
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

      <!-- used to raise the drawer size on mobile screen -->
      <v-card class="mx-auto d-flex d-sm-none" min-height="50" tile />

      <template v-slot:append>
        <div class="hidden-xs-only">
          <!-- <v-switch
            class="ma-2"
            v-model="$vuetify.theme.dark"
            hide-details
            label="Mode sombre"
            color="success"
          ></v-switch> -->
          <v-row class="ma-2" justify="center">
            <v-btn block outlined tile v-on:click="toggle_dark_mode"
              >Light or Dark Mode</v-btn
            >
          </v-row>
          <div class="ma-2">
            <v-btn href="/v1" block tile>Ancienne version</v-btn>
          </div>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-img
        class="ml-4"
        src="@/assets/logos/programming.svg"
        aspect-ratio="1"
        max-height="50"
        max-width="50"
      ></v-img>
      <v-toolbar-title class="ml-6">
        <span class="author">{{ author }}</span>
        <span class="subtitle hidden-sm-and-down">
          - Consultant Développeur Informatique</span
        >
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <div class="hidden-md-and-down">
        <span
          class="typewrite typewriter"
          data-period="2000"
          data-type='[ "Hi, my name is Anthony.", "I like JavaScript so much.", "And I love Node.js. You know.", "Come on ! Do not be shy, talk to me." ]'
        >
          <span class="wrap"></span>
        </span>
      </div>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>

    <v-footer app>
      <span
        >&copy; {{ new Date().getFullYear() }} {{ author }}. All rights
        reserved.</span
      >
      <v-spacer></v-spacer>
      <span>Application version: {{ versionNumber }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import Typewriter from "@/assets/effects/typewriter";

// I have to do something when I'm importing something, this is the reason why this line exist below.
Typewriter.activateIt;

export default {
  name: "App",
  props: {
    source: String,
  },

  data: () => ({
    pages: [
      {
        icon: "fas fa-home",
        title: "Accueil",
        link: "/",
      },
      {
        icon: "fas fa-briefcase",
        title: "Expérience",
        link: "/experience",
      },
      {
        icon: "fas fa-rocket",
        title: "Projets",
        link: "/projects",
      },
      {
        icon: "fas fa-blog",
        title: "Blog",
        link: "/under-construction",
      },
      {
        icon: "fas fa-mail-bulk",
        title: "Contact",
        link: "/under-construction",
      },
      {
        icon: "fas fa-user-circle",
        title: "À propos",
        link: "/about",
      },
    ],

    author: "Anthony PILLOT",
    versionNumber: "0.1.0",
    drawer: null,
  }),

  created() {
    this.$vuetify.theme.dark = false;
  },

  methods: {
    toggle_dark_mode: function () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
      return this.$vuetify.theme.dark;
    },
  },

  mounted() {
    const theme = localStorage.getItem("dark_theme");
    if (theme) {
      if (theme == "true") {
        this.$vuetify.theme.dark = true;
      } else {
        this.$vuetify.theme.dark = false;
      }
    }
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Gochi+Hand&display=swap");

.typewriter {
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
