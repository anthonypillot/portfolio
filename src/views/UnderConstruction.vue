<template>
  <v-container class="under-construction" fluid>
    <v-col cols="12">
      <v-row align="center" justify="center" style="height: 600px;">
        <v-card outlined tile>
          <v-img
            class="align-center text-center"
            height="350px"
            src="https://picsum.photos/1920/1080?random"
          >
            <h2>Cette page est en contruction</h2>
            <span>
              Revenez plus tard pour voir les nouveautés
            </span>
          </v-img>
        </v-card>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
export default {
  name: "UnderConstruction",
};
</script>

<style scoped></style>
