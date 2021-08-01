<template lang="pug">
nav.liberty-tools(:class="[isactive ? 'floatTools' : 'level-right']")
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
  isactive = false;
  get canWrite(): boolean {
    return store.state.canWrite;
  }

  openWriteModal(): void {
    store.commit("setEditorOpen", true);
  }

  mounted(): void {
    document.addEventListener("scroll", this.scrollButton);
  }

  scrollButton(): void {
    let nowscroll = window.scrollY;
    if (nowscroll > 300) {
      this.isactive = true;
    } else {
      this.isactive = false;
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/style-variables.scss";
.floatTools {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
}
.floatTools button {
  padding: 1.5rem;
}
</style>
