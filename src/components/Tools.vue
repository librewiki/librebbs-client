<template lang="pug">
.liberty-tools.level-right
  .level-item
    button.button(v-if="canWrite", @click="openWriteModal") 
      b-icon(icon="edit")
      span 글쓰기
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import store from "@/store";

@Component
export default class Tools extends Vue {
  get canWrite(): boolean {
    return store.state.canWrite;
  }

  openWriteModal(): void {
    store.commit("setEditorOpen", true);
  }
}
</script>

<style lang="scss">
@import "@/assets/style-variables.scss";
</style>