<template>
  <div>
    <div v-for="(element, i) in parallaxElements" :key="i">
      <h3 class="mb-1">{{ element.technology }}</h3>
      <p>{{ element.text }}</p>
      <v-parallax
        height="200"
        :src="element.url"
        :alt="element.alt"
      ></v-parallax>
      <v-divider class="my-4"></v-divider>
    </div>
  </div>
</template>

<script>
import herokuDashboardImage from "../assets/wallpapers/heroku_dashboard.png";

const notFoundImage =
  "https://previews.123rf.com/images/kaymosk/kaymosk1804/kaymosk180400006/100130939-error-404-page-not-found-error-with-glitch-effect-on-screen-vector-illustration-for-your-design-.jpg";

export default {
  name: "Home",
  components: {},
  data: () => ({
    parallaxElements: [
      {
        technology: "Heroku :",
        text:
          "Heroku est utilisé pour donner un apperçu de ma branche developer et des nouvelles features que mon site peut proposer. (https://anthony-pillot.herokuapp.com/)",
        url: herokuDashboardImage,
        alt: notFoundImage,
      },
      {
        url:
          "https://cdn-images-1.medium.com/max/1600/1*-xlCG5r86ocNFhC5iE658A.jpeg",
        alt: notFoundImage,
      },
      {
        technology: "JavaScript :",
        url:
          "https://www.whatzeweb.com/images/d2e5d111f10953e0261182c4e436af8b.png",
        alt: notFoundImage,
      },
      {
        technology: "Node.js :",
        url:
          "https://brainhub.eu/blog/wp-content/uploads/2019/06/what-is-node-js-used-for.png",
        alt: notFoundImage,
      },
      {
        url: "https://picsum.photos/1920/1080",
        alt: notFoundImage,
      },
    ],
  }),
};
</script>
