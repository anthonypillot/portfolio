<template>
  <div class="home">
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

    <h2>Technologies utilisées :</h2>

    <p>
      Rapide présentation des technologies présentées et utilisées dans cette
      application web.
      <v-spacer />
      Muni d'un nom de domaine, l'application est hébergé sur un serveur OVH sur
      lequel Docker est installé, pour que chacune de mes applications soient
      plus facilement managées et sécurisées.
      <v-spacer />
      Un conteneur NGINX héberge l'application Vue.js sur laquelle vous êtes.
      L'image Docker est actualisé automatiquement par la CI sur le repository,
      triggered par la branche <code>master</code>.
    </p>

    <v-col cols="12">
      <v-row align="center" justify="center">
        <div v-for="technology in technologies" :key="technology.name">
          <v-card class="ma-2" max-width="420">
            <v-img class="align-end" height="150" :src="technology.img">
              <v-card-title
                ><v-btn :href="technology.link" target="_blank">
                  {{ technology.name }}
                </v-btn></v-card-title
              >
            </v-img>
            <v-card-subtitle class="pb-0">{{
              technology.category
            }}</v-card-subtitle>
            <v-card-text class="text--primary">
              <div>
                {{ technology.description }}
              </div>
            </v-card-text>
          </v-card>
        </div>
      </v-row>
    </v-col>

    <v-divider class="my-4"></v-divider>

    <div>
      <h3 class="mb-1">GitHub :</h3>
      <p>
        Le code source de cette application web est disponible
        <span class="font-italic">(bientôt)</span> en OpenSource, celles et ceux
        qui veulent y participer peuvent d'ores et déjà le faire.
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

    <v-divider class="my-4"></v-divider>

    <div>
      <h3 class="mb-1">Vue.js :</h3>
      <p>
        Ce site web a été conçu comme une application ou SPA
        <span class="font-italic"> (Single Page Application) </span>
        avec Vue.js pour être plus polyvalent et répondre à des besoins futurs.
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

    <v-divider class="my-4"></v-divider>

    <div>
      <h3 class="mb-1">
        Heroku :
        <v-btn
          class="mb-1 white--text"
          href="https://anthony-pillot.herokuapp.com/"
          target="_blank"
          tile
          color="deep-purple"
          >Heroku demo</v-btn
        >
      </h3>

      <span>
        Une démonstration des mises à jour futur de ce site internet est hébergé
        sur Heroku qui est utilisé pour donner un aperçu de ma branche
        <code>developer</code> et des nouvelles features que mon site peut et
        pourra proposer.
      </span>
      <v-parallax
        height="200"
        :src="require('@/assets/parallaxs/heroku_dashboard.png')"
      >
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <h1 class="display-4 font-weight-thin mb-4 black--text">Heroku</h1>
            <span class="black--text">Demonstration website</span>
          </v-col>
        </v-row>
      </v-parallax>
    </div>
  </div>
</template>

<script>
const nodejsGreenBackground = require("@/assets/img/nodejs-wallpaper-1_0.png");

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
        src: nodejsGreenBackground,
      },
    ],
    technologies: [
      {
        name: "Vue.js",
        category: "FRAMEWORK",
        link: "https://vuejs.org/",
        img: "https://i.ytimg.com/vi/Vp37fWKOlV4/maxresdefault.jpg",
        description: "Framework front-end",
      },
      {
        name: "Vue.js CLI",
        category: "TOOLS",
        link: "https://cli.vuejs.org/",
        img: "https://cli.vuejs.org/cli-select-features.png",
        description: "Outils CLI pour développer une application Vue.js",
      },
      {
        name: "Vue Router",
        category: "TOOLS",
        link: "https://cli.vuejs.org/",
        img:
          "https://scotch-res.cloudinary.com/image/upload/w_1500,q_auto:good,f_auto/media/3660/h49pHk3ORDWKylIlU7bE_maxresdefault.jpg",
        description: "Router officiel pour Vue.js",
      },
      {
        name: "Vuetify",
        category: "COMPONENT FRAMEWORK",
        link: "https://vuetifyjs.com/",
        img: "https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg",
        description: "Bibliothèque de composants utilisateur",
      },
      {
        name: "GitHub Actions",
        category: "CONTINUOUS INTEGRATION",
        link: "https://github.com/features/actions",
        img:
          "https://www.beopenit.com/wp-content/uploads/2020/01/DL-V2-LinkedIn_FB.png",
        description: "CI utilisée dans le build, les tests, le deploys",
      },
      {
        name: "Cypress.io",
        category: "CONTINUOUS INTEGRATION",
        link: "https://www.cypress.io/",
        img:
          "https://snipcart.com/media/203963/cypressio-logo-with-blue-background.png",
        description: "Framework de tests End to End (E2E)",
      },
    ],
  }),
};
</script>

<style scoped></style>
