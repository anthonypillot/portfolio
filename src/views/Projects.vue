<template>
  <div class="projects">
    <h1>Mes projets :</h1>
    <v-divider class="my-4" />

    <v-card>
      <v-img
        class="align-end"
        aspect-ratio="4"
        contain=""
        src="@/assets/img/scheduled-shutdown-presentation-double-alpha.png"
      >
        <v-card-title
          >Scheduled-Shutdown
          <span class="ml-1 blue--text">(ver. bêta 0.7.3)</span></v-card-title
        >
      </v-img>

      <v-card-subtitle class="pb-0"
        >Fonctionne uniquement sous Windows <v-icon>fab fa-windows</v-icon> -
        Écrit en Java <v-icon>fab fa-java</v-icon> et JavaFX</v-card-subtitle
      >

      <v-card-text class="text--primary">
        <div>
          <span class="font-weight-bold">Scheduled-Shutdown</span> est une
          application grand public qui planifie facilement et aisément l'arrêt,
          le redémarrage ou la mise en veille prolongée de votre ordinateur,
          possédant une interface ergonomique et intuitive. Le programme vous
          affiche un compteur et exécute une commande
          <span class="font-weight-bold">SHELL</span> dans le système
          d'exploitation.
        </div>
        <v-spacer />
        <div>
          Écrit en <span class="font-weight-bold">Java</span> avec le framework
          <span class="font-weight-bold">JavaFX</span>.
        </div>
      </v-card-text>

      <v-card-actions>
        <v-btn
          color="blue"
          outlined
          text
          href="https://sourceforge.net/projects/scheduled-shutdown/files/scheduled-shutdown-0.7.3.exe/download"
          target="_blank"
        >
          Téléchargement
        </v-btn>

        <v-btn
          color="blue"
          outlined
          text
          href="https://gitlab.com/RAIIIIIN/scheduled-shutdown"
          target="_blank"
        >
          Code source sur GitLab
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Projects",

  data: () => ({}),
};
</script>

<style scoped></style>
