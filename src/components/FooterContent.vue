<template lang="pug">
footer.liberty-footer.main-footer
    img.designedbylibre(src="../assets/designedbylibre.png")
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

export default class FooterContent extends Vue {}
</script>

<style lang="scss">
@import "@/assets/style-variables.scss";
@import "~bulma";
@import "~buefy/src/scss/buefy";
.main-footer {
  padding: $box-padding;
  @include touch {
    padding: ($box-padding / 2);
  }
  border: 1px solid #e1e8ed;
  border-bottom-left-radius: $radius-large;
  border-bottom-right-radius: $radius-large;
  background-color: $background;
}
.designedbylibre {
  width: 100px;
  height: auto;
}
</style>
