<template>
  <div>
    <h1>Expériences professionnelles :</h1>
    <v-divider class="my-4"></v-divider>

    <v-card>
      <v-list
        subheader
        disabled
        v-for="(experience, i) in experiences"
        :key="i"
      >
        <v-toolbar
          src="https://heintzimmobilierethotels.com/wp-content/uploads/2016/05/background-immeuble.jpg"
        >
          <v-toolbar-title class="experience-header"
            >{{ experience.header }} chez
            <span class="experience-firm">{{ experience.firm }}</span>
          </v-toolbar-title>
          <v-divider class="mx-2"></v-divider>
          <span class="period"> Période : {{ experience.period }} </span>
        </v-toolbar>
        <v-subheader> Objectif : {{ experience.subheader }} </v-subheader>

        <v-list-item v-for="(content, i) in experience.contents" :key="i">
          <v-list-item-content>
            <v-list-item-title
              >{{ content.title }}
              <v-icon class="ml-1" large>{{
                content.icon
              }}</v-icon></v-list-item-title
            >
            <v-list-item-subtitle>
              {{ content.contentSubtitle }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>

    <v-divider class="my-4"></v-divider>
    <Formation />
  </div>
</template>

<script>
import Formation from "@/components/Formation";

export default {
  name: "Experience",
  components: {
    Formation,
  },

  data: () => ({
    experiences: [
      {
        header: "Consultant Développeur informatique",
        firm: "Zenika",
        subheader: "Multiples missions en cours avec différentes technologies",
        period: "Avril 2020 - Aujourd'hui",
        contents: [
          {
            icon: "fab fa-node-js",
            title: "JavaScript, TypeScript et Node.js",
            contentSubtitle:
              "Langages utilisés dans le développement des applications",
          },
        ],
      },
      {
        header: "Stagiaire",
        firm: "Zenika",
        subheader:
          "Développement d'une application de gestion interne chez Zenika à Lille",
        period: "Janvier 2020 - Avril 2020",
        contents: [
          {
            icon: "fab fa-docker",
            title: "Docker",
            contentSubtitle:
              "Développement de scripts SQL pour une création rapide de la base de données",
          },
          {
            icon: "fas fa-database",
            title: "PostgreSQL",
            contentSubtitle:
              "Développement de la base de données relationnelle sous Docker",
          },
          {
            icon: "fab fa-js",
            title: "JavaScript, TypeScript et Node.js",
            contentSubtitle:
              "Langages utilisés dans le développement des applications",
          },
          {
            icon: "fas fa-cogs",
            title: "NestJS, en TypeScript",
            contentSubtitle:
              "Framework basé sur Express, conçu pour créer des micro-services en TypeScript, avec le moteur de Node.js",
          },
          {
            icon: "fab fa-vuejs",
            title: "Vue.js",
            contentSubtitle:
              "Pour le front, avec Vuetify en guise de bibliothèque utilisateur",
          },
          {
            title: "Technologies supplémentaires :",
            contentSubtitle:
              "CircleCI pour la CI, Cypress (E2E tests), ESLint, WebSocket (Socket.IO)",
          },
        ],
      },
    ],
  }),
};
</script>

<style>
.experience-header {
  color: white;
}

.period {
  color: white;
}

.experience-firm {
  color: lightcoral;
  font-family: "Gochi Hand", cursive;
}
</style>
