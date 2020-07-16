<template>
  <div class="contact">
    <h1>Mes contacts :</h1>
    <v-divider class="my-4"></v-divider>

    <v-col cols="12">
      <v-row align="center" justify="center">
        <div v-for="contact in contacts" :key="contact.name">
          <v-card class="ma-2" max-width="350">
            <v-img
              class="align-end"
              width="350"
              height="150"
              :src="contact.img"
            >
              <v-card-title
                ><v-btn :href="contact.link" :target="contact.isBlank">
                  {{ contact.name }}
                </v-btn></v-card-title
              >
            </v-img>
            <v-card-subtitle class="pb-0">
              {{ contact.type }}
            </v-card-subtitle>
            <v-card-text class="text--primary">
              <div>
                {{ contact.content }}
              </div>
            </v-card-text>
          </v-card>
        </div>
      </v-row>
    </v-col>
  </div>
</template>

<script>
export default {
  name: "Contact",

  data: () => ({
    contacts: [
      {
        name: "M'appeler",
        type: "Téléphone personnel :",
        content: "+33 6 89 91 86 86",
        link: "tel:+33689918686",
        img:
          "https://upload.wikimedia.org/wikipedia/commons/6/62/FaceTime_iOS.svg",
      },
      {
        name: "M'écrire",
        type: "Mail personnel :",
        content: "pillot.anthony@gmail.com",
        link: "mailto:pillot.anthony@gmail.com",
        img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Mail_%28iOS%29.svg/600px-Mail_%28iOS%29.svg.png",
      },
      {
        name: "Page LinkedIn",
        type: "Compte LinkedIn :",
        content: "linkedin.com/in/anthony-pillot/",
        link: "https://www.linkedin.com/in/anthony-pillot/",
        isBlank: "_blank",
        img: "https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg",
      },
      {
        name: "Compte GitHub",
        type: "Compte GitHub :",
        content: "github.com/anthonypillot",
        link: "https://github.com/anthonypillot",
        isBlank: "_blank",
        img: "https://cdn.worldvectorlogo.com/logos/github-octocat.svg",
      },
      {
        name: "Compte GitLab",
        type: "Compte GitLab :",
        content: "gitlab.com/anthonypillot",
        link: "https://gitlab.com/anthonypillot",
        isBlank: "_blank",
        img:
          "https://upload.wikimedia.org/wikipedia/commons/1/18/GitLab_Logo.svg",
      },
    ],
  }),
};
</script>

<style></style>
