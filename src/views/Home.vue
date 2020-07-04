<template>
  <div>
    <v-carousel cycle height="350" show-arrows-on-hover interval="5000">
      <v-carousel-item
        v-for="slide in slides"
        :key="slide.src"
        :src="slide.src"
      >
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-2 hidden-sm-and-down">{{ slide.text }}</div>
        </v-row>
      </v-carousel-item>
    </v-carousel>

    <v-divider class="my-4"></v-divider>

    <h2>Présentation :</h2>

    <v-card class="pa-2" outlined tile>
      Qui suis-je ? Anthony Pillot, et il y a certaine chose que j'adore dans la
      vie : la high technology, ma passion depuis toujours. Amoureux d'Apple, de
      Windows (c'est possible !) de Linux, avec mon serveur personnel sous
      Debian, Ubuntu en Desktop et des applications IT quelles qu'elles soient.
      <v-spacer />
      Ayant commencé sur Java, JEE et son écosystème, je travaille aujourd'hui
      dans l'écosystème JavaScript, TypeScript, ainsi que Node.js et Vue.js. Je
      travaille également sur la conception de base de données en SQL avec
      PostgreSQL, Microsoft SQL Server, en NoSQL avec MongoDB.
    </v-card>

    <div class="mt-3">
      <h3>
        Langages utilisés en autonomie :
      </h3>
      <v-row no-gutters>
        <v-col v-for="svgIcon in learnedLanguages" :key="svgIcon.src">
          <v-card class="pa-2" outlined tile>
            <v-row justify="center">
              <v-img
                class="slide-in-right"
                aspect-ratio="10"
                :src="svgIcon.src"
                contain
              />
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <div class="mt-3">
      <h3>
        Langages en cours d'apprentissage ou surveillés :
      </h3>
      <v-row no-gutters>
        <v-col v-for="svgIcon in learningLanguages" :key="svgIcon.src">
          <v-card class="pa-2" outlined tile>
            <v-row justify="center">
              <v-img
                class="slide-in-right-late"
                aspect-ratio="10"
                :src="svgIcon.src"
                contain
              />
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <div class="mt-3">
      <h3>
        Outils et technologies utilisées :
      </h3>
      <v-row no-gutters>
        <v-col v-for="svgIcon in toolsFirstPart" :key="svgIcon.src">
          <v-card class="pa-2" outlined tile>
            <v-row justify="center">
              <v-img
                class="slide-in-right-very-late"
                aspect-ratio="10"
                :src="svgIcon.src"
                contain
              />
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <div class="mt-3">
      <v-row no-gutters>
        <v-col v-for="svgIcon in toolsSecondPart" :key="svgIcon.src">
          <v-card class="pa-2" outlined tile>
            <v-row justify="center">
              <v-img
                class="slide-in-right-very-late-max"
                aspect-ratio="10"
                :src="svgIcon.src"
                contain
              />
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <v-divider class="my-4"></v-divider>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data: () => ({
    slides: [
      {
        text: "New version 2.0 of the site available!",
        src: "https://picsum.photos/id/2/1920/1080?blur=1",
      },
      {
        text: "Made with love and Vue.js",
        src:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
      },
      {
        text: "The place where I'm posting my works",
        src:
          "https://images.idgesg.net/images/article/2019/02/certification_school_pencils_diversity_creative_team_by-evgeny555-getty-100787956-large.jpg",
      },
      {
        text: "Dark mode available",
        src:
          "https://image.winudf.com/v2/image1/Y29tLnJpYmJ5dGUuZGFya21vZGUuZmIucHJvX3NjcmVlbl8wXzE1NjUyOTUwNzlfMDMx/screen-0.jpg?fakeurl=1&type=.jpg",
      },
      {
        text: "Work with JavaScript, Node.js, Java",
        src:
          "http://incurs.us/sites/default/files/2016-08/nodejs-wallpaper-1_0.png",
      },
    ],

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

<style scoped></style>
