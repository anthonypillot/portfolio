<template>
  <div>
    <div class="mt-3">
      <h3>Langages utilisés en autonomie :</h3>
      <v-row no-gutters>
        <v-col
          v-for="learnedLanguage in learnedLanguages"
          :key="learnedLanguage.src"
        >
          <v-card class="pa-2" outlined tile>
            <v-row justify="center">
              <v-img
                class="slide-in-right"
                aspect-ratio="10"
                :src="learnedLanguage.src"
                contain
              />
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <div class="mt-3">
      <h3>Langages en cours d'apprentissage ou surveillés :</h3>
      <v-row no-gutters>
        <v-col
          v-for="learningLanguage in learningLanguages"
          :key="learningLanguage.src"
        >
          <v-card class="pa-2" outlined tile>
            <v-row justify="center">
              <v-img
                class="slide-in-right-late"
                aspect-ratio="10"
                :src="learningLanguage.src"
                contain
              />
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <div class="mt-3">
      <h3>Outils et technologies utilisées :</h3>
      <v-row no-gutters>
        <v-col v-for="toolFirstPart in toolsFirstPart" :key="toolFirstPart.src">
          <v-card class="pa-2" outlined tile>
            <v-row justify="center">
              <v-img
                class="slide-in-right-very-late"
                aspect-ratio="10"
                :src="toolFirstPart.src"
                contain
              />
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <div class="mt-3">
      <v-row no-gutters>
        <v-col
          v-for="toolSecondPart in toolsSecondPart"
          :key="toolSecondPart.src"
        >
          <v-card class="pa-2" outlined tile>
            <v-row justify="center">
              <v-img
                class="slide-in-right-very-late-max"
                aspect-ratio="10"
                :src="toolSecondPart.src"
                contain
              />
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "LanguageLogo",
  data: () => ({
    learnedLanguages: [
      {
        src: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg",
      },
      {
        src: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
      },
      {
        src: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
      },
      {
        src: "https://cdn.worldvectorlogo.com/logos/java-14.svg",
      },
    ],
    learningLanguages: [
      {
        src: "https://cdn.worldvectorlogo.com/logos/swift-15.svg",
      },
      {
        src:
          "https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin-logo.svg",
      },
      {
        src: "https://cdn.worldvectorlogo.com/logos/c--4.svg",
      },
      {
        src: "https://cdn.worldvectorlogo.com/logos/go-6.svg",
      },
    ],

    toolsFirstPart: [
      {
        src: "https://cdn.worldvectorlogo.com/logos/vue-js-1.svg",
      },
      {
        src: "https://cdn.worldvectorlogo.com/logos/vuetify.svg",
      },
      {
        src: "https://cdn.worldvectorlogo.com/logos/visual-studio-code.svg",
      },
      {
        src: "https://cdn.worldvectorlogo.com/logos/intellij-idea-1.svg",
      },
    ],

    toolsSecondPart: [
      {
        src: "https://cdn.worldvectorlogo.com/logos/docker-1.svg",
      },
      {
        src: "https://cdn.worldvectorlogo.com/logos/webpack-icon.svg",
      },
      {
        src: "https://cdn.worldvectorlogo.com/logos/postgresql.svg",
      },
      {
        src: "https://cdn.worldvectorlogo.com/logos/microsoft-sql-server.svg",
      },
    ],
  }),
};
</script>

<style></style>
