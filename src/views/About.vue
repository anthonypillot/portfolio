<template>
  <div class="about">
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

    <v-divider class="my-4" />

    <LanguageLogo />
  </div>
</template>

<script>
import LanguageLogo from "@/components/about/LanguageLogo";

export default {
  name: "About",
  components: {
    LanguageLogo,
  },
};
</script>

<style scoped></style>>
