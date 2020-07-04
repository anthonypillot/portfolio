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
        <v-col v-for="svgIcon in learnedLanguages" :key="svgIcon">
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
        <v-col v-for="svgIcon in learningLanguages" :key="svgIcon">
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
        <v-col v-for="svgIcon in toolsFirstPart" :key="svgIcon">
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
        <v-col v-for="svgIcon in toolsSecondPart" :key="svgIcon">
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

    <div>
      <h3>Compétences clés :</h3>
      <p>
        Avenant. Passionné. Autodidacte. Autonome. Anticipation. Veille
        technologique.
      </p>
    </div>
    <v-divider class="my-4"></v-divider>
    <h2>
      Les technogies présentées et utilisées dans ce site internet :
    </h2>
    <v-divider class="my-4"></v-divider>

    <v-lazy
      v-model="isActive"
      :options="{
        threshold: 0.5,
      }"
      min-height="200"
      transition="fab-transition"
    >
      <div>
        <h3 class="mb-1">GitHub :</h3>
        <p>
          Le code source de mon application web est disponible
          <span class="font-italic">(bientôt)</span> en OpenSource, celles et
          ceux qui veulent y participer peuvent d'hors et déjà le faire.
        </p>
        <v-parallax
          height="200"
          src="https://siliconangle.com/wp-content/blogs.dir/1/files/2019/09/69061801_1983324578436489_6865726632515076096_o.jpg"
        >
          <v-row align="center" justify="center">
            <v-col class="text-center" cols="12">
              <h1 class="display-4 font-weight-thin mb-4">GitHub</h1>
              <span class=""
                >The world's leading software development platform</span
              >
            </v-col>
          </v-row>
        </v-parallax>
      </div>
    </v-lazy>

    <v-divider class="my-4"></v-divider>

    <v-lazy
      v-model="isActive"
      :options="{
        threshold: 0.5,
      }"
      min-height="200"
      transition="fab-transition"
    >
      <div>
        <h3 class="mb-1">Vue.js :</h3>
        <p>
          Ce site web a été conçu comme une application ou SPA
          <span class="font-italic">
            (Single Page Application)
          </span>
          avec Vue.js pour être plus polyvalent et répondre à des besoins
          futurs.
        </p>
        <v-parallax
          height="200"
          src="https://talhasariyuerek.com/wp-content/uploads/sites/4/2019/09/vue-logo-1920x1080.jpg"
        >
          <v-row align="center" justify="center">
            <v-col class="text-center" cols="12">
              <h1 class="display-4 font-weight-thin mb-4">Vue.js</h1>
              <span class="">Advanced front-end framework</span>
            </v-col>
          </v-row>
        </v-parallax>
      </div>
    </v-lazy>

    <v-divider class="my-4"></v-divider>

    <v-lazy
      v-model="isActive"
      :options="{
        threshold: 0.5,
      }"
      min-height="200"
      transition="fab-transition"
    >
      <div>
        <h3 class="mb-1">Heroku :</h3>
        <span>
          Une démonstration des mises à jour futur de ce site internet est
          hébergé sur Heroku qui est utilisé pour donner un aperçu de ma branche
          <code>developer</code> et des nouvelles features que mon site peut et
          pourra proposer.
        </span>
        <v-btn
          class="mb-1 white--text"
          href="https://anthony-pillot.herokuapp.com/"
          target="_blank"
          tile
          color="deep-purple"
          >Heroku demo</v-btn
        >
        <v-parallax
          height="200"
          :src="require('@/assets/parallaxs/heroku_dashboard.png')"
        >
          <v-row align="center" justify="center">
            <v-col class="text-center" cols="12">
              <h1 class="display-4 font-weight-thin mb-4 black--text">
                Heroku
              </h1>
              <span class="black--text">Demonstration website</span>
            </v-col>
          </v-row>
        </v-parallax>
      </div>
    </v-lazy>

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

    presentations: [
      {
        text:
          "Qui suis-je ? Anthony Pillot, et il y a certaine chose que j'adore dans la vie : \
          la high technology, ma passion depuis toujours. Amoureux d'Apple, de Windows (c'est possible !) de Linux,\
           avec mon serveur personnel sous Debian, Ubuntu en Desktop et des applications IT quelles qu'elles soient !",
      },
      {
        text:
          "Ayant commencé sur Java, JEE et son écosystème, je travaille\
            aujourd'hui dans l'écosystème JavaScript, TypeScript, ainsi que\
            Node.js et Vue.js.",
      },
      {
        text:
          "Je travaille également sur la conception de base de données en SQL\
          avec PostgreSQL, Microsoft SQL Server, en NoSQL avec MongoDB.",
      },
    ],
  }),
};
</script>

<style scoped></style>
