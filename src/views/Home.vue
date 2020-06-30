<template>
  <div>
    <v-carousel cycle height="350" show-arrows-on-hover interval="5000">
      <v-carousel-item v-for="(slide, i) in slides" :key="i" :src="slide.src">
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-2 hidden-sm-and-down">{{ slide.text }}</div>
        </v-row>
      </v-carousel-item>
    </v-carousel>

    <v-divider class="my-4"></v-divider>

    <h1>Présentation :</h1>
    <p>
      Qui suis-je ? Anthony Pillot, et il y a certaine chose que j'adore dans la
      vie : la high technology, ma passion depuis toujours. Amoureux d'Apple, de
      Windows (c'est possible !) de Linux, avec mon serveur personnel sous
      Debian, Ubuntu en Desktop et des applications IT quelles qu'elles soient !
    </p>
    <p>
      Ayant commencé sur Java, JEE et son écosystème, je travaille aujourd'hui
      dans l'écosystème JavaScript, TypeScript, ainsi que Node.js et Vue.js.
    </p>
    <p>
      Je travaille également sur la conception de base de données en SQL avec
      PostgreSQL, Microsoft SQL Server, en NoSQL avec MongoDB.
    </p>

    <v-divider class="my-4"></v-divider>

    <h2>Compétences clés :</h2>
    <p>
      Avenant. Passionné. Autodidacte. Autonome. Anticipation. Organisation
      d'une équipe de travail. Veille technologique.
    </p>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data: () => ({
    slides: [
      {
        text: "New website 2.0 released !",
        src:
          "https://www.madewithmaturity.com/wp-content/uploads/2019/08/website-launch-v1.jpg",
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
        text: "Working on multiple languages",
        src:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
      },
      {
        text: "Blog on JavaScript, Node.js, Java",
        src:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png",
      },
      {
        text: "Database: SQL & NoSQL",
        src:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png",
      },
    ],
  }),
};
</script>
